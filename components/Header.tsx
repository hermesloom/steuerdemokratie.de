"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { MitmachenDialog } from "./MitmachenDialog";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={40} />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight">
                Partei der Steuerverteilgerechtigkeit
              </h1>
              <p className="text-xs text-muted-foreground">
                Für ein gerechtes Steuersystem in Deutschland
              </p>
            </div>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Startseite
              </Link>
            </li>
            <li>
              <Link href="/grundsatzprogramm" className="hover:underline">
                Grundsatzprogramm
              </Link>
            </li>
            <li>
              <Link href="/satzung" className="hover:underline">
                Satzung
              </Link>
            </li>
            <li>
              <MitmachenDialog variant="link" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
