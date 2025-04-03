"use client";

import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="py-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-6">
            Impressum
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="mb-4">
                Partei der Steuerverteilgerechtigkeit
                <br />
                Demokratiestraße 1<br />
                10117 Berlin
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Vertreten durch
              </h3>
              <p>
                Vorstand: Dr. Maria Müller (Vorsitzende), Thomas Schmidt, Lena
                Weber
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">Kontakt</h3>
              <p>
                Telefon: +49 (0) 30 123456789
                <br />
                E-Mail: info@steuerdemokratie.de
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Registereintrag
              </h3>
              <p>
                Registergericht: Amtsgericht Berlin-Charlottenburg
                <br />
                Registernummer: VR 12345 B
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Dr. Maria Müller
                <br />
                Partei der Steuerverteilgerechtigkeit
                <br />
                Demokratiestraße 1<br />
                10117 Berlin
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Hinweis auf EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  className="text-primary hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                .
                <br />
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                Haftung für Inhalte
              </h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Haftung für Links
              </h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
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
