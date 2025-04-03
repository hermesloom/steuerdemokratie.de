"use client";

import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="py-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-6">
            Datenschutzerklärung
          </h1>

          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                Allgemeine Hinweise
              </h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Datenerfassung auf dieser Website
              </h3>
              <h4 className="text-lg font-medium mt-4 mb-2">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </h4>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                dieser Website entnehmen.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-2">
                Wie erfassen wir Ihre Daten?
              </h4>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben oder bei der
                Mitgliedschaftsbeantragung übermitteln.
              </p>
              <p className="mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-2">
                Wofür nutzen wir Ihre Daten?
              </h4>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h4 className="text-lg font-medium mt-4 mb-2">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h4>
              <p className="mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Hosting</h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Externes Hosting
              </h3>
              <p className="mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters gespeichert. Hierbei kann es sich v. a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
                Daten, die über eine Website generiert werden, handeln.
              </p>
              <p>
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Mitgliedern (Art.
                6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                schnellen und effizienten Bereitstellung unseres Online-Angebots
                durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f
                DSGVO).
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können. Die
                vorliegende Datenschutzerklärung erläutert, welche Daten wir
                erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                welchem Zweck das geschieht.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p className="mb-4">
                Partei der Steuerverteilgerechtigkeit
                <br />
                Dr. Maria Müller
                <br />
                Demokratiestraße 1<br />
                10117 Berlin
              </p>
              <p className="mb-4">
                Telefon: +49 (0) 30 123456789
                <br />
                E-Mail: datenschutz@steuerdemokratie.de
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                4. Datenerfassung auf dieser Website
              </h2>
              <h3 className="text-xl font-semibold mt-6 mb-2">Cookies</h3>
              <p className="mb-4">
                Die Internetseiten verwenden teilweise so genannte Cookies.
                Cookies richten auf Ihrem Rechner keinen Schaden an und
                enthalten keine Viren. Cookies dienen dazu, unser Angebot
                nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
                sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
                und die Ihr Browser speichert.
              </p>
              <p className="mb-4">
                Die meisten der von uns verwendeten Cookies sind so genannte
                "Session-Cookies". Sie werden nach Ende Ihres Besuchs
                automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
                gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es
                uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p className="mb-4">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen
                von Cookies informiert werden und Cookies nur im Einzelfall
                erlauben, die Annahme von Cookies für bestimmte Fälle oder
                generell ausschließen sowie das automatische Löschen der Cookies
                beim Schließen des Browsers aktivieren. Bei der Deaktivierung
                von Cookies kann die Funktionalität dieser Website eingeschränkt
                sein.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">
                5. Besondere Datenverarbeitung bei der Polis-Beteiligung
              </h2>
              <p className="mb-4">
                Auf unserer Website bieten wir Ihnen die Möglichkeit, über das
                Polis-Tool an Diskussionen teilzunehmen. Bei der Nutzung dieses
                Tools werden verschiedene personenbezogene Daten erfasst:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Von Ihnen eingegebene Kommentare und Bewertungen</li>
                <li>Technische Daten (IP-Adresse, Browser-Informationen)</li>
                <li>Zeitpunkt und Dauer der Teilnahme</li>
              </ul>
              <p className="mt-4">
                Diese Daten werden zur Durchführung und Auswertung der
                Beteiligungsprozesse verwendet und fließen in anonymisierter
                Form in die Entwicklung unserer politischen Positionen ein. Eine
                Weitergabe an Dritte erfolgt nicht.
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
