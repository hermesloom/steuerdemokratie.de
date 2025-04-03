"use client";

import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Barrierefreiheit() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="py-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-6">
            Erklärung zur Barrierefreiheit
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Unser Engagement für Barrierefreiheit
              </h2>
              <p className="mb-4">
                Die Partei der Steuerverteilgerechtigkeit setzt sich für eine
                inklusive Gesellschaft ein, in der alle Menschen
                gleichberechtigt teilhaben können. Barrierefreiheit ist für uns
                nicht nur eine gesetzliche Verpflichtung, sondern ein
                Grundprinzip unserer politischen Arbeit. Als Partei, die die
                direkte Demokratie fördern möchte, ist es unser besonderes
                Anliegen, dass alle Bürgerinnen und Bürger an den politischen
                Prozessen teilnehmen können – unabhängig von ihren individuellen
                Fähigkeiten oder Einschränkungen.
              </p>
              <p>
                Diese Website wurde unter Berücksichtigung der BITV 2.0
                (Barrierefreie-Informationstechnik-Verordnung) entwickelt und
                strebt eine Konformität mit den WCAG 2.1 (Web Content
                Accessibility Guidelines) Level AA an.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Maßnahmen zur Barrierefreiheit
              </h2>
              <p className="mb-4">
                Um einen barrierefreien Zugang zu gewährleisten, haben wir
                folgende Maßnahmen umgesetzt:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strukturierte Inhalte mit semantischem HTML</li>
                <li>Ausreichende Farbkontraste</li>
                <li>
                  Responsive Design für die Nutzung auf verschiedenen Endgeräten
                </li>
                <li>Alternative Texte für Bilder und Grafiken</li>
                <li>Tastaturnavigation für alle Funktionen</li>
                <li>Verzicht auf blinkende oder flackernde Elemente</li>
                <li>Verständliche und konsistente Navigation</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Grenzen der Barrierefreiheit
              </h2>
              <p className="mb-4">
                Trotz unserer Bemühungen um umfassende Barrierefreiheit gibt es
                derzeit noch folgende Einschränkungen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Einige ältere PDF-Dokumente sind möglicherweise nicht
                  vollständig barrierefrei
                </li>
                <li>
                  Bei eingebetteten Inhalten von Drittanbietern (wie z.B. Videos
                  oder Social-Media-Inhalte) können wir die Barrierefreiheit
                  nicht vollständig garantieren
                </li>
                <li>
                  Die Polis-Beteiligungsplattform befindet sich hinsichtlich der
                  Barrierefreiheit noch in der Optimierungsphase
                </li>
              </ul>
              <p className="mt-4">
                Wir arbeiten kontinuierlich daran, diese Einschränkungen zu
                beseitigen und die Barrierefreiheit unserer Website zu
                verbessern.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Alternative Zugangsmöglichkeiten
              </h2>
              <p className="mb-4">
                Für Personen, die aufgrund von Behinderungen Schwierigkeiten
                haben, unsere Website zu nutzen, bieten wir folgende alternative
                Zugangsmöglichkeiten an:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Telefonische Auskunft und Beratung: +49 (0) 30 123456789
                  (Mo-Fr, 9-17 Uhr)
                </li>
                <li>E-Mail-Support: barrierefreiheit@steuerdemokratie.de</li>
                <li>
                  Persönliche Beratungstermine in unseren barrierefreien
                  Geschäftsstellen (nach Vereinbarung)
                </li>
                <li>
                  Informationsmaterialien in alternativen Formaten (Großdruck,
                  Leichte Sprache, Braille) auf Anfrage
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Feedback und Kontakt</h2>
              <p className="mb-4">
                Wir sind bestrebt, die Barrierefreiheit unserer Website
                kontinuierlich zu verbessern. Wenn Sie Probleme bei der Nutzung
                unserer Website haben oder Vorschläge zur Verbesserung der
                Barrierefreiheit machen möchten, kontaktieren Sie uns bitte:
              </p>
              <p className="mb-4">
                E-Mail: barrierefreiheit@steuerdemokratie.de
                <br />
                Telefon: +49 (0) 30 123456789
              </p>
              <p>
                Wir werden Ihr Feedback prüfen und Ihnen innerhalb von 14 Tagen
                antworten. Wenn wir Ihrem Anliegen nicht entsprechen können,
                werden wir Ihnen alternative Zugangsmöglichkeiten zu den
                gewünschten Informationen anbieten.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Durchsetzungsverfahren
              </h2>
              <p className="mb-4">
                Gemäß dem Behindertengleichstellungsgesetz (BGG) können Sie bei
                der Schlichtungsstelle nach § 16 BGG einen Antrag auf
                Schlichtung stellen. Die Schlichtungsstelle BGG hat die Aufgabe,
                Konflikte zwischen Menschen mit Behinderungen und öffentlichen
                Stellen des Bundes zu lösen.
              </p>
              <p>
                Schlichtungsstelle nach dem Behindertengleichstellungsgesetz bei
                dem Beauftragten der Bundesregierung für die Belange von
                Menschen mit Behinderungen
                <br />
                Mauerstraße 53
                <br />
                10117 Berlin
                <br />
                Telefon: +49 (0) 30 18 527 2805
                <br />
                E-Mail: info@schlichtungsstelle-bgg.de
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
