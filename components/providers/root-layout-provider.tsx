"use client";

import { Navbar } from "@/components/navigation/navbar";

interface RootLayoutProviderProps {
  children: React.ReactNode;
}

export function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-background font-sans antialiased">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}