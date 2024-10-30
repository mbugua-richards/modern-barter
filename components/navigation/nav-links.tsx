"use client";

import Link from "next/link";

export function NavLinks() {
  return (
    <nav className="flex items-center space-x-6">
      <Link
        href="/browse"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Browse
      </Link>
      <Link
        href="/how-it-works"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        How it Works
      </Link>
    </nav>
  );
}