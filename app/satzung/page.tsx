"use client";

import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Satzung() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="py-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-6">
            Satzung der Partei der Steuerverteilgerechtigkeit
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            {/* Präambel */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Präambel</h2>
              <p className="text-muted-foreground">
                Die Partei der Steuerverteilgerechtigkeit setzt sich für eine
                grundlegende Reform des Steuersystems Deutschlands ein, bei der
                jeder Bürger und jede Bürgerin unabhängig von der Höhe der
                gezahlten Steuern ein gleiches Recht auf Mitbestimmung bei der
                Verteilung der Steuereinnahmen erhält. Im Zentrum steht die
                Überzeugung, dass eine wahre Demokratie eine gleichberechtigte
                Teilhabe an finanzpolitischen Entscheidungen erfordert.
              </p>
            </div>

            <Separator />

            {/* §1: Name und Sitz */}
            <div>
              <h2 className="text-2xl font-bold mb-4">§1 Name und Sitz</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Die Partei führt den Namen "Partei der
                  Steuerverteilgerechtigkeit".
                </li>
                <li>Der Sitz der Partei ist Berlin.</li>
                <li>
                  Das Tätigkeitsgebiet der Partei ist das Gebiet der
                  Bundesrepublik Deutschland.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §2: Zweck und Ziel */}
            <div>
              <h2 className="text-2xl font-bold mb-4">§2 Zweck und Ziel</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Die Partei der Steuerverteilgerechtigkeit strebt eine
                  Verfassungsänderung an, die jedem Bürger und jeder Bürgerin
                  ein gleiches Recht auf Mitbestimmung bei der Verteilung der
                  Steuereinnahmen gewährt.
                </li>
                <li>
                  Sie setzt sich für die Entwicklung und Implementierung einer
                  digitalen Infrastruktur ein, die es allen Bürgern ermöglicht,
                  an Entscheidungen über die Steuerverwendung teilzunehmen.
                </li>
                <li>
                  Die Partei arbeitet für eine umfassende finanzielle Bildung
                  aller Bürger von Kindesalter an, um die informierte Teilnahme
                  am Steuerverteilungsprozess zu fördern.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §3: Mitgliedschaft */}
            <div>
              <h2 className="text-2xl font-bold mb-4">§3 Mitgliedschaft</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Mitglied der Partei kann jede natürliche Person werden. Die
                  Mitgliedschaft erfolgt einfach durch Angabe einer
                  E-Mail-Adresse und Zustimmung zur Satzung.
                </li>
                <li>
                  Jede natürliche Person darf nur eine E-Mail-Adresse für die
                  Mitgliedschaft verwenden. Mehrfachmitgliedschaften sind nicht
                  zulässig.
                </li>
                <li>
                  Jedes Mitglied hat das Recht, sich an der politischen
                  Willensbildung der Partei zu beteiligen, insbesondere durch
                  Teilnahme an Versammlungen, Wahlen und Abstimmungen.
                </li>
                <li>
                  Die Mitgliedschaft endet durch Austritt, Ausschluss oder Tod.
                  Der Austritt ist gegenüber dem Bundesvorstand schriftlich zu
                  erklären.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §4: Organe der Partei */}
            <div>
              <h2 className="text-2xl font-bold mb-4">§4 Organe der Partei</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Die Organe der Partei der Steuerverteilgerechtigkeit sind:
                  <ul className="list-disc pl-6 mt-2">
                    <li>die Mitgliederversammlung (digital oder in Präsenz)</li>
                    <li>
                      der Koordinierungsrat (gewählt aus der Mitgliederschaft)
                    </li>
                    <li>
                      das Infrastrukturkuratorium (verantwortlich für die
                      digitale Plattform)
                    </li>
                    <li>
                      die Präsenzbüros (regional organisierte Anlaufstellen)
                    </li>
                  </ul>
                </li>
                <li>
                  Der Koordinierungsrat setzt die Beschlüsse der
                  Mitgliederversammlung um und koordiniert die politische
                  Arbeit. Er enthält keine Entscheidungsbefugnisse über
                  Steuerverteilungsfragen, sondern dient ausschließlich der
                  organisatorischen Unterstützung der direktdemokratischen
                  Prozesse.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §5: Interne Entscheidungsfindung */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                §5 Transparenz und öffentliche Entscheidungsfindung
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Die Partei der Steuerverteilgerechtigkeit fällt alle
                  Entscheidungen öffentlich und transparent nach dem Prinzip
                  "Eine Person, eine Stimme".
                </li>
                <li>
                  Es gibt keine internen Entscheidungsprozesse. Alle politische
                  Willensbildung findet auf öffentlich zugänglichen Plattformen
                  statt.
                </li>
                <li>
                  Die Partei nutzt ihre digitale Plattform sowohl für eigene
                  Abstimmungen als auch zum Vorleben des
                  Steuerverteilungsmodells. Alle Protokolle, Diskussionen und
                  Abstimmungsergebnisse werden vollständig öffentlich
                  dokumentiert.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §6: Steuerverteilungsmodell */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                §6 Steuerverteilungsmodell
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Die Partei vertritt das Modell, dass jeder Bürger und jede
                  Bürgerin ein gleiches Stimmrecht bei der Verteilung eines
                  signifikanten Anteils der Steuereinnahmen erhält.
                </li>
                <li>
                  Eine digitale Plattform soll es ermöglichen, die persönlichen
                  Präferenzen bei der Verteilung der Steuergelder anzugeben oder
                  alternativ politischen Vertretern diese Entscheidung zu
                  überlassen.
                </li>
                <li>
                  Die Partei setzt sich für eine transparente Darstellung der
                  Steuerverwendung und regelmäßige Rechenschaftsberichte ein.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §7: Finanzen */}
            <div>
              <h2 className="text-2xl font-bold mb-4">§7 Finanzen</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Die Partei finanziert sich ausschließlich aus freiwilligen
                  Spenden. Sie verzichtet bewusst auf Mitgliedsbeiträge und
                  lehnt staatliche Parteienfinanzierung grundsätzlich ab.
                </li>
                <li>
                  Alle Einnahmen und Ausgaben werden vollständig transparent auf
                  der digitalen Plattform dokumentiert und sind öffentlich
                  einsehbar.
                </li>
                <li>
                  Über die Verwendung der Finanzmittel der Partei wird auf der
                  Steuerverteilungsplattform öffentlich informiert und von allen
                  Mitgliedern gemeinsam entschieden.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §8: Satzungsänderungen */}
            <div>
              <h2 className="text-2xl font-bold mb-4">§8 Satzungsänderungen</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Änderungen dieser Satzung können nur durch den Bundesparteitag
                  mit einer Mehrheit von zwei Dritteln der abgegebenen gültigen
                  Stimmen beschlossen werden.
                </li>
                <li>
                  Änderungsanträge zur Satzung müssen mindestens vier Wochen vor
                  dem Bundesparteitag schriftlich beim Bundesvorstand
                  eingereicht und begründet werden.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §9: Auflösung */}
            <div>
              <h2 className="text-2xl font-bold mb-4">§9 Auflösung</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Die Auflösung der Partei kann nur durch einen eigens zu diesem
                  Zweck einberufenen Bundesparteitag mit einer Mehrheit von drei
                  Vierteln der abgegebenen gültigen Stimmen beschlossen werden.
                </li>
                <li>
                  Über die Verwendung des Vermögens der Partei im Falle einer
                  Auflösung entscheidet der auflösende Bundesparteitag.
                </li>
              </ol>
            </div>

            <Separator />

            {/* §10: Schlussbestimmungen */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                §10 Schlussbestimmungen
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Diese Satzung tritt mit Beschluss des Gründungsparteitags am
                  04.04.2025 in Kraft.
                </li>
                <li>
                  Sollten einzelne Bestimmungen dieser Satzung unwirksam sein,
                  so bleiben die übrigen Bestimmungen hiervon unberührt.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
