'use client';

import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '@/lib/store/authStore';
import { saveStory, unsaveStory } from '@/lib/api/storyApi';
import ErrorWhileSavingModal from '@/components/ErrorWhileSavingModal/ErrorWhileSavingModal';
import styles from './SaveStory.module.css';

type SaveStoryProps = {
  storyId: string;
  isAuthenticated: boolean;
};

export default function SaveStory({
  storyId,
  isAuthenticated,
}: SaveStoryProps) {
  const queryClient = useQueryClient();
  const user = useAuthStore(state => state.user);

  const isSaved = user?.savedArticles?.includes(storyId) ?? false;

  const [isSaving, setIsSaving] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleToggleSaved = async () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    if (isSaving) return;

    try {
      setIsSaving(true);
      setErrorMessage('');

      const data = isSaved
        ? await unsaveStory(storyId)
        : await saveStory(storyId);

      const currentUser = useAuthStore.getState().user;

      if (currentUser) {
        const updatedUser = {
          ...currentUser,
          savedArticles: data.savedArticles,
        };

        useAuthStore.getState().setUser(updatedUser);
        queryClient.setQueryData(['currentUser'], updatedUser);
      }

      void queryClient.invalidateQueries({
        queryKey: ['profileStories'],
      });
    } catch {
      setErrorMessage(
        'Не вдалося оновити збережені історії. Спробуйте ще раз.',
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Збережіть собі історію</h2>

      <p className={styles.description}>
        Вона буде доступна у вашому профілі у розділі збережене
      </p>

      <button
        type="button"
        className={styles.button}
        onClick={handleToggleSaved}
        disabled={isSaving}
        aria-pressed={isSaved}
        aria-busy={isSaving}
      >
        {isSaving
          ? 'Завантаження…'
          : isSaved
            ? 'Видалити зі збережених'
            : 'Зберегти'}
      </button>

      {showAuthModal && (
        <ErrorWhileSavingModal
          onClose={() => setShowAuthModal(false)}
        />
      )}

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}
    </section>
  );
}