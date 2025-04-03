"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  InfoIcon,
  BookOpen,
  FileText,
  Users,
  Globe,
  Landmark,
  BookmarkIcon,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PolisEmbed } from "@/components/PolisEmbed";
import { MitmachenDialog } from "@/components/MitmachenDialog";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero section */}
        <section className="py-12 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">
            Steuerverteilung in Bürgerhand
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Jeder Bürger erhält ein gleiches Recht, über die Verteilung der
            Steuergelder in Deutschland mitzuentscheiden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/grundsatzprogramm">
              <Button size="lg">Grundsatzprogramm</Button>
            </Link>
            <MitmachenDialog variant="outline" size="lg" />
          </div>
        </section>

        <Separator className="my-12" />

        {/* Vision section */}
        <section id="vision" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Unsere Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Direkte Steuerdemokratie</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Wir setzen uns dafür ein, dass jeder Bürger und jede Bürgerin
                  Deutschlands ein gleiches Recht erhält, über die Verteilung
                  der Steuergelder mitzuentscheiden - unabhängig von der Höhe
                  der gezahlten Steuern.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transparenz und Teilhabe</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Politik soll nur noch die "vernünftigen Standardeinstellungen"
                  für diejenigen festlegen, die ihr Mitbestimmungsrecht nicht
                  aktiv ausüben möchten. Maximale Barrierefreiheit und
                  Zugänglichkeit stehen dabei im Vordergrund.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Concept section */}
        <section id="konzept" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Unser Konzept</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Landmark className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Gleiches Stimmrecht für alle
                    </h3>
                    <p className="text-muted-foreground">
                      Jeder Bürger erhält das gleiche Recht, über die Verteilung
                      der Steuergelder zu entscheiden. Es spielt keine Rolle,
                      wie viel man selbst an Steuern gezahlt hat.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Demokratische Haushaltspolitik
                    </h3>
                    <p className="text-muted-foreground">
                      Über eine digitale Plattform können Sie entscheiden, in
                      welche Projekte und Bereiche Ihre Steueranteile fließen
                      sollen. So wird der Staatshaushalt wirklich demokratisch
                      gestaltet.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Politische Standardeinstellungen
                    </h3>
                    <p className="text-muted-foreground">
                      Für Bürger, die ihr Mitbestimmungsrecht nicht aktiv
                      ausüben möchten, legen gewählte Politiker sinnvolle
                      Standardverteilungen fest.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education section */}
        <section id="bildung" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Bildungskonzept</h2>
          <Card>
            <CardHeader>
              <CardTitle>Finanzbildung von Anfang an</CardTitle>
              <CardDescription>
                Wir fördern die finanzielle Bildung bereits ab dem
                Grundschulalter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Unser Bildungskonzept sieht vor, dass Kinder bereits in der
                  Schule lernen, wie sie an budgetären Entscheidungen teilnehmen
                  können. Im neuen Schulfach
                  <strong>
                    {" "}
                    "Wirtschaftliche Teilhabe und Verantwortung"
                  </strong>{" "}
                  bekommen Schülerinnen und Schüler ein eigenes Budget
                  zugeteilt.
                </p>
                <Alert>
                  <BookOpen className="h-4 w-4" />
                  <AlertTitle>Praxisbeispiel</AlertTitle>
                  <AlertDescription>
                    Jedes Kind erhält ein Budget von 100 Euro pro Schuljahr.
                    Gemeinsam entscheiden die Schüler, in welche Schulprojekte
                    investiert wird – von der Anschaffung neuer Bücher bis hin
                    zur Gestaltung des Schulhofs.
                  </AlertDescription>
                </Alert>
                <p>
                  In projektbasiertem Lernen können sie allein oder in Teams
                  größere Vorhaben planen und umsetzen. So lernen Kinder früh,
                  Verantwortung für gemeinschaftliche Ressourcen zu übernehmen.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Infrastructure section */}
        <section id="infrastruktur" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Digitale Infrastruktur</h2>

          <Tabs defaultValue="digital">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="digital">Digitale Plattform</TabsTrigger>
              <TabsTrigger value="telecom">Telekommunikation</TabsTrigger>
            </TabsList>
            <TabsContent value="digital" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Föderierte Steuerverteilungsplattform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Wir entwickeln eine föderierte digitale Infrastruktur für
                    die Verwaltung von Steuerzahlungen und deren Ausgaben. Diese
                    Plattform ermöglicht es jedem Bürger:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Transparente Einsicht in die aktuelle Haushaltsverteilung
                    </li>
                    <li>
                      Direkte Zuweisung des eigenen Steueranteils an Projekte
                      und Bereiche
                    </li>
                    <li>
                      Nachverfolgung der Projektfortschritte und
                      Mittelverwendung
                    </li>
                    <li>Partizipation durch Vorschläge und Abstimmungen</li>
                  </ul>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium">
                      Die Plattform wird nach höchsten Sicherheitsstandards
                      entwickelt und ist vollständig barrierefrei.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="telecom" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Genossenschaftlicher Telekommunikationsanbieter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Wir setzen uns für einen nationalen
                    Telekommunikationsanbieter ein, der als Genossenschaft
                    organisiert ist:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Bürger sind Mitglieder und Miteigentümer</li>
                    <li>
                      Demokratische Entscheidungsfindung über Investitionen und
                      Entwicklung
                    </li>
                    <li>
                      Gewährleistung einer flächendeckenden digitalen
                      Infrastruktur
                    </li>
                    <li>Faire Preise statt Gewinnmaximierung</li>
                  </ul>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium">
                      Ziel ist es, allen Bürgern einen zuverlässigen und
                      erschwinglichen Zugang zu digitalen Diensten zu
                      ermöglichen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Participation section with Polis embed */}
        <section id="beteiligung" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Ihre Beteiligung</h2>
          <Card>
            <CardHeader>
              <CardTitle>Was sollte noch bedacht werden?</CardTitle>
              <CardDescription>
                Teilen Sie uns Ihre Gedanken mit. Ihre Meinung fließt direkt in
                die Weiterentwicklung unseres Konzepts ein.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-auto w-full bg-white rounded-md overflow-hidden">
                <PolisEmbed
                  conversationId="7w8iwuiy6a"
                  className="w-full h-full min-h-[600px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <p className="text-sm text-muted-foreground">
                Ihre Daten werden gemäß unserer Datenschutzrichtlinien
                verarbeitet.
              </p>
            </CardFooter>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
