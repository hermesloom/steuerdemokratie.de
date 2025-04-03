"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

interface MitmachenDialogProps {
  variant?: "link" | "button" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function MitmachenDialog({
  variant = "button",
  size = "lg",
  className = "",
}: MitmachenDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {variant === "link" ? (
          <button className="text-sm hover:underline">Mitmachen</button>
        ) : variant === "outline" ? (
          <Button variant="outline" size={size} className={className}>
            Mitmachen
          </Button>
        ) : (
          <Button variant="default" size={size} className={className}>
            Mitmachen
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Mitglied werden</DialogTitle>
          <DialogDescription>
            So einfach können Sie teilnehmen
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full mt-1">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <p>
              Bitte senden Sie eine formlose E-Mail an{" "}
              <a
                href="mailto:info@steuerdemokratie.de"
                className="text-primary font-medium hover:underline"
              >
                info@steuerdemokratie.de
              </a>{" "}
              mit dem Betreff "Antrag auf Mitgliedschaft".
              <span className="block mt-2 text-sm text-muted-foreground">
                Mit der Beantragung stimmen Sie unserer{" "}
                <Link
                  href="/satzung"
                  className="text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Satzung
                </Link>{" "}
                zu.
              </span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
