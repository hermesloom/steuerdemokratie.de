"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <address className="not-italic">
              <p>Partei der Steuerverteilgerechtigkeit</p>
              <p>Demokratiestraße 1</p>
              <p>10117 Berlin</p>
              <p className="mt-2">info@steuerdemokratie.de</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
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
                <Link
                  href="https://github.com/hermesloom/steuerdemokratie.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Github className="h-4 w-4" />
                  <span>Quellcode auf GitHub</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:underline">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/barrierefreiheit" className="hover:underline">
                  Barrierefreiheit
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Partei der Steuerverteilgerechtigkeit.
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
