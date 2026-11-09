'use client'

import { useRouter } from "next/navigation"
import { startTransition, useEffect, useState } from "react";

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

interface LayoutChildren{
    children: React.ReactNode,
}

export default function AuthLayout({  children }: LayoutChildren) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
 
    useEffect(() => {
        router.refresh();
        startTransition(() => {
            setLoading(false);
        });
    }, [router]);

    return (
        <>
            <div style={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}><ThemeToggle /></div>
            {loading ? <div>Loading...</div> : children}
        </>
    );
}