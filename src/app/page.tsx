import { ArrowRight, Layers, Link2, ShieldCheck, Sparkles, Users } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const foundations = [
  {
    icon: ShieldCheck,
    title: "Reliable foundation",
    description: "Typed contracts, reusable UI primitives, and clear module boundaries.",
  },
  {
    icon: Users,
    title: "Membership-ready",
    description: "Scaffolded for subscription, identity, and admin workflows.",
  },
  {
    icon: Link2,
    title: "Integration-first",
    description: "Prepared for Stripe, partner offers, and external platforms.",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    description: "Built to expand from MVP to production without rewrites.",
  },
];

const componentTracks = {
  customer: ["Form controls", "Navigation", "Cards", "Dialogs", "Feedback states"],
  member: ["Tabs", "Table", "Calendar", "Sheet", "Command palette"],
  operations: ["Sidebar", "Charts", "Pagination", "Toast notifications", "Alert dialogs"],
};

export default function Home() {
  return (
    <main className="grain-overlay min-h-screen">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-14 md:px-10 md:py-20">
        <div className="space-y-4">
          <Badge className="rounded-full px-3 py-1 text-xs tracking-wide">Frontend Foundation</Badge>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Membership Platform
            <span className="block font-sans text-primary">Next.js + shadcn starter</span>
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
            This project contains the application shell, design system, and reusable component toolkit.
            Product features are intentionally not implemented yet.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button className="rounded-full px-6" size="lg">
              Start Building
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button variant="outline" className="rounded-full px-6" size="lg">
              Review Architecture
            </Button>
          </div>
        </div>

        <Separator />

        <div className="grid gap-4 md:grid-cols-2">
          {foundations.map((item) => (
            <Card key={item.title} className="border-2/20 backdrop-blur-sm">
              <CardHeader className="space-y-3 pb-4">
                <item.icon className="size-5 text-primary" />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="size-4" />
              <span className="text-sm font-medium">UI Coverage Plan</span>
            </div>
            <CardTitle>shadcn component sets ready for implementation</CardTitle>
            <CardDescription>
              Core components have been added to support consumer experiences, member flows, and admin tooling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="customer" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="customer">Customer</TabsTrigger>
                <TabsTrigger value="member">Member</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
              </TabsList>
              {(Object.keys(componentTracks) as Array<keyof typeof componentTracks>).map((track) => (
                <TabsContent value={track} key={track} className="pt-4">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {componentTracks[track].map((componentName) => (
                      <li
                        key={componentName}
                        className="rounded-lg border bg-card px-3 py-2 text-sm text-muted-foreground"
                      >
                        {componentName}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="scope">
            <AccordionTrigger>Why no product features yet?</AccordionTrigger>
            <AccordionContent>
              This setup is intentionally limited to application scaffolding so the team can implement domain features
              with clean boundaries and reusable patterns.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
