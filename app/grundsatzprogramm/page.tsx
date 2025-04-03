"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  FileText,
  Users,
  Landmark,
  Globe,
  Building,
  BookmarkIcon,
  BarChart4,
  HeartPulse,
  Home,
  Shield,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Grundsatzprogramm() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero section */}
        <section className="py-12 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">
            Grundsatzprogramm
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Die Grundprinzipien und Ziele der Partei der
            Steuerverteilgerechtigkeit
          </p>

          {/* Table of contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Inhaltsverzeichnis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#präambel"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FileText size={16} />
                    <span>Präambel</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#steuermodell"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Landmark size={16} />
                    <span>Das Steuerverteilungsmodell</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#politikbereiche"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Building size={16} />
                    <span>Politikbereiche</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#umsetzung"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <BarChart4 size={16} />
                    <span>Umsetzungsfahrplan</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <BookmarkIcon size={16} />
                    <span>Häufig gestellte Fragen</span>
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Preamble */}
          <section id="präambel" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Präambel</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Die Partei der Steuerverteilgerechtigkeit steht für eine
                  fundamentale Neugestaltung der demokratischen Mitbestimmung in
                  Deutschland. Wir sind überzeugt, dass jeder Bürger und jede
                  Bürgerin ein gleiches Recht haben sollte, über die Verwendung
                  der Steuergelder zu entscheiden.
                </p>
                <p className="mb-4">
                  Unsere Demokratie basiert auf dem Grundsatz der Gleichheit
                  aller Menschen. Dieses Prinzip muss sich auch in der
                  Finanzpolitik widerspiegeln. Die aktuelle Steuerverteilung
                  wird von wenigen Entscheidungsträgern bestimmt, ohne dass die
                  Bürgerinnen und Bürger direkten Einfluss nehmen können.
                </p>
                <p>
                  Wir setzen uns für ein System ein, in dem jeder Mensch in
                  Deutschland ein gleiches Stimmrecht bei der Verteilung der
                  Steuergelder erhält - unabhängig von seinem Einkommen, seiner
                  Herkunft oder seinem sozialen Status. Dies ist der Kern
                  unseres politischen Handelns und die Grundlage für eine
                  gerechtere und partizipativere Gesellschaft.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Tax distribution model */}
          <section id="steuermodell" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">
              Das Steuerverteilungsmodell
            </h2>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Grundprinzipien</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center mt-0.5">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium">
                        Gleiches Stimmrecht für alle
                      </p>
                      <p className="text-muted-foreground">
                        Jeder Bürger erhält das gleiche Mitbestimmungsrecht über
                        die Verteilung der Steuergelder, unabhängig von der
                        individuell gezahlten Steuersumme.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center mt-0.5">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium">
                        Direkte Zuordnung des Steueranteils
                      </p>
                      <p className="text-muted-foreground">
                        Jeder Bürger kann seine Steueranteile direkt bestimmten
                        Projekten, Bereichen oder Vorhaben zuordnen.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center mt-0.5">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium">
                        Sinnvolle Standardverteilung
                      </p>
                      <p className="text-muted-foreground">
                        Für Bürger, die ihr Mitbestimmungsrecht nicht aktiv
                        ausüben möchten, legen gewählte Politiker eine sinnvolle
                        Standardverteilung fest.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center mt-0.5">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium">
                        Transparenz und Rechenschaftspflicht
                      </p>
                      <p className="text-muted-foreground">
                        Volle Transparenz über alle Steuereinnahmen und
                        -ausgaben sowie detaillierte Berichte über die
                        Verwendung und Wirksamkeit der Mittel.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funktionsweise des Modells</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4 list-decimal pl-5">
                  <li>
                    <p className="font-medium">
                      Berechnung der Pro-Kopf-Anteile
                    </p>
                    <p className="text-muted-foreground mb-2">
                      Die Gesamtsumme der Steuereinnahmen wird durch die Anzahl
                      der stimmberechtigten Bürger geteilt, um den individuellen
                      Steueranteil zu ermitteln, über den jeder Bürger
                      entscheiden kann.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Digitale Verteilungsplattform</p>
                    <p className="text-muted-foreground mb-2">
                      Über eine sichere digitale Plattform können Bürger ihre
                      Steueranteile verschiedenen Kategorien und Projekten
                      zuweisen. Alternative Zugangswege werden für Menschen ohne
                      Internetzugang bereitgestellt.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Entscheidungszeiträume</p>
                    <p className="text-muted-foreground mb-2">
                      Die Bürger können einmal jährlich über die Verteilung
                      ihrer Steueranteile entscheiden, mit der Möglichkeit,
                      Änderungen innerhalb bestimmter Fristen vorzunehmen.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Nachverfolgung und Kontrolle</p>
                    <p className="text-muted-foreground">
                      Über die Plattform können Bürger jederzeit nachverfolgen,
                      wie ihre Steueranteile verwendet werden und welche
                      Ergebnisse damit erzielt wurden.
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Policy areas */}
          <section id="politikbereiche" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Politikbereiche</h2>

            <Tabs defaultValue="bildung" className="mb-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="bildung" className="py-2">
                  Bildung
                </TabsTrigger>
                <TabsTrigger value="infrastruktur" className="py-2">
                  Infrastruktur
                </TabsTrigger>
                <TabsTrigger value="gesundheit" className="py-2">
                  Gesundheit
                </TabsTrigger>
                <TabsTrigger value="soziales" className="py-2">
                  Soziales
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bildung" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Bildungspolitik
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-lg font-semibold mb-3">
                      Wirtschaftliche Teilhabe und Verantwortung
                    </h4>
                    <p className="mb-4">
                      Unser Bildungskonzept sieht vor, dass Kinder bereits in
                      der Schule an finanzielle Bildung herangeführt werden und
                      lernen, wie sie an budgetären Entscheidungen teilnehmen
                      können.
                    </p>
                    <h4 className="text-lg font-semibold mb-3">
                      Konkrete Maßnahmen:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Einführung des Schulfachs "Wirtschaftliche Teilhabe und
                        Verantwortung" ab der Grundschule
                      </li>
                      <li>
                        Zuteilung eines Schulbudgets für jeden Schüler, über
                        dessen Verwendung die Kinder selbst entscheiden können
                      </li>
                      <li>
                        Förderung von Schülerfirmen und praktischen Projekten
                        zur Stärkung der Finanzkompetenz
                      </li>
                      <li>
                        Demokratische Mitbestimmung der Schüler bei schulischen
                        Haushaltsfragen
                      </li>
                      <li>
                        Anpassung der Lehrerausbildung, um Finanzbildung und
                        demokratische Haushaltsentscheidungen zu vermitteln
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="infrastruktur" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Digitale Infrastruktur
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-lg font-semibold mb-3">
                      Föderierte Steuerverteilungsplattform
                    </h4>
                    <p className="mb-4">
                      Wir entwickeln eine bundesweite, föderierte digitale
                      Infrastruktur, die allen Bürgern Zugang zur
                      Steuerverteilung ermöglicht.
                    </p>
                    <h4 className="text-lg font-semibold mb-3">
                      Genossenschaftlicher Telekommunikationsanbieter
                    </h4>
                    <p className="mb-4">
                      Die Einrichtung eines nationalen, genossenschaftlich
                      organisierten Telekommunikationsanbieters, bei dem die
                      Bürger Mitglieder und Miteigentümer sind.
                    </p>
                    <h4 className="text-lg font-semibold mb-3">
                      Konkrete Maßnahmen:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Entwicklung einer sicheren, barrierefreien digitalen
                        Plattform für die Steuerverteilung
                      </li>
                      <li>
                        Schaffung rechtlicher Grundlagen für die
                        Bürgerbeteiligung an der Steuerverteilung
                      </li>
                      <li>
                        Förderung digitaler Kompetenzen in allen Altersgruppen
                      </li>
                      <li>
                        Ausbau der digitalen Infrastruktur in ländlichen
                        Gebieten
                      </li>
                      <li>
                        Gründung eines genossenschaftlichen
                        Telekommunikationsunternehmens mit demokratischer
                        Entscheidungsstruktur
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gesundheit" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HeartPulse className="h-5 w-5" />
                      Gesundheitspolitik
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Im Gesundheitswesen setzen wir auf ein System, das den
                      Bürgern mehr Mitspracherecht bei der Verteilung der
                      Gesundheitsausgaben einräumt.
                    </p>
                    <h4 className="text-lg font-semibold mb-3">
                      Konkrete Maßnahmen:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Einrichtung lokaler Gesundheitsräte mit
                        Bürgerbeteiligung
                      </li>
                      <li>
                        Möglichkeit für Versicherte, über einen Teil der
                        Krankenkassenbeiträge selbst zu entscheiden
                      </li>
                      <li>
                        Förderung von Präventionsprogrammen durch direkte
                        Bürgerentscheidungen
                      </li>
                      <li>
                        Transparente Darstellung der Gesundheitsausgaben und
                        -ergebnisse
                      </li>
                      <li>
                        Stärkung der Patientenrechte und -beteiligung in
                        medizinischen Einrichtungen
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="soziales" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Sozialpolitik
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Unsere Sozialpolitik basiert auf dem Prinzip der
                      gleichberechtigten Teilhabe aller Bürger an
                      gesellschaftlichen Entscheidungsprozessen, besonders im
                      Hinblick auf die Verteilung sozialer Leistungen.
                    </p>
                    <h4 className="text-lg font-semibold mb-3">
                      Konkrete Maßnahmen:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Schaffung von Quartiersfonds, über deren Verwendung die
                        lokale Bevölkerung entscheidet
                      </li>
                      <li>
                        Bürgerbudgets für soziale Projekte in Gemeinden und
                        Stadtteilen
                      </li>
                      <li>
                        Partizipative Entscheidungsfindung bei der Planung und
                        Gestaltung öffentlicher Räume
                      </li>
                      <li>
                        Förderung von genossenschaftlichen Wohnprojekten mit
                        demokratischer Entscheidungsstruktur
                      </li>
                      <li>
                        Ausbau der Unterstützung für Selbsthilfegruppen und
                        ehrenamtliche Initiativen durch Bürgerentscheidungen
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Übergreifende Grundsätze</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4" /> Datenschutz
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Höchste Standards beim Schutz persönlicher Daten und bei
                      der Sicherheit der digitalen Infrastruktur.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" /> Inklusion
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Barrierefreier Zugang zu allen Beteiligungsformen für
                      Menschen mit unterschiedlichen Fähigkeiten.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4" /> Nachhaltigkeit
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Alle Maßnahmen werden an ihrer langfristigen ökologischen,
                      sozialen und ökonomischen Nachhaltigkeit gemessen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation roadmap */}
          <section id="umsetzung" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Umsetzungsfahrplan</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>

                  <div className="relative pl-12 pb-10">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Phase 1: Pilotprojekte (Jahr 1-2)
                    </h3>
                    <p className="mb-2">
                      Start von Pilotprojekten in ausgewählten Kommunen, um das
                      Konzept der demokratischen Steuerverteilung zu erproben.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Ausarbeitung der rechtlichen Grundlagen</li>
                      <li>Entwicklung der digitalen Plattform</li>
                      <li>
                        Start des Schulprojekts "Wirtschaftliche Teilhabe"
                      </li>
                      <li>
                        Einrichtung von Bürgerhaushalten in Modellkommunen
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-12 pb-10">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Phase 2: Regionale Ausweitung (Jahr 3-4)
                    </h3>
                    <p className="mb-2">
                      Ausweitung des Modells auf Bundesländerebene, basierend
                      auf den Erfahrungen aus den Pilotprojekten.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>
                        Einführung auf Landesebene in ersten Bundesländern
                      </li>
                      <li>
                        Gründung des genossenschaftlichen
                        Telekommunikationsanbieters
                      </li>
                      <li>Ausbau der Bildungsprogramme</li>
                      <li>Evaluation und Anpassung des Systems</li>
                    </ul>
                  </div>

                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Phase 3: Bundesweite Implementierung (Jahr 5-7)
                    </h3>
                    <p className="mb-2">
                      Flächendeckende Einführung des Steuerverteilungsmodells
                      auf Bundesebene.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Vollständige rechtliche Implementation</li>
                      <li>
                        Bundesweiter Zugang zur Steuerverteilungsplattform
                      </li>
                      <li>
                        Integration in bestehende Haushaltsplanungsprozesse
                      </li>
                      <li>
                        Kontinuierliche Verbesserung und Weiterentwicklung
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Wird meine Entscheidung öffentlich sein?
                    </AccordionTrigger>
                    <AccordionContent>
                      Nein, die individuellen Entscheidungen bleiben anonym. Nur
                      die Gesamtverteilung wird transparent dargestellt. Der
                      Datenschutz hat für uns höchste Priorität.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Was passiert, wenn ich nicht aktiv entscheide?
                    </AccordionTrigger>
                    <AccordionContent>
                      In diesem Fall wird Ihr Steueranteil nach der von
                      gewählten Politikern festgelegten Standardverteilung
                      verwendet. Sie können jederzeit entscheiden, aktiv an der
                      Verteilung teilzunehmen.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Werden dadurch wichtige Ausgaben vernachlässigt?
                    </AccordionTrigger>
                    <AccordionContent>
                      Nein, für bestimmte grundlegende staatliche Aufgaben wie
                      innere und äußere Sicherheit wird ein Mindestbudget
                      festgelegt. Zudem zeigen Erfahrungen mit Bürgerhaushalten,
                      dass Bürger oft sehr verantwortungsbewusst entscheiden.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Wie ist der Zugang für Menschen ohne Internetzugang
                      gesichert?
                    </AccordionTrigger>
                    <AccordionContent>
                      Wir stellen alternative Zugangswege bereit, wie
                      Beratungsstellen in Rathäusern, Bibliotheken und anderen
                      öffentlichen Einrichtungen, sowie postalische
                      Teilnahmemöglichkeiten.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Welche rechtlichen Änderungen sind notwendig?
                    </AccordionTrigger>
                    <AccordionContent>
                      Die Umsetzung erfordert Anpassungen im Haushaltsrecht auf
                      Bundes- und Landesebene sowie möglicherweise in der
                      Gemeindeordnung.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      Können auch Kinder und Jugendliche teilnehmen?
                    </AccordionTrigger>
                    <AccordionContent>
                      Wir setzen uns für altersentsprechende Beteiligungsformen
                      ein. In Schulen können Kinder bereits an Entscheidungen
                      über kleinere Budgets teilnehmen. Ab 16 Jahren ist eine
                      volle Beteiligung an der Steuerverteilung vorgesehen.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
