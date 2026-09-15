import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  Download,
  FileCheck2,
  Filter,
  Handshake,
  Info,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Utensils,
  Users,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CORRIDOR_METRICS, INVENTORY_DATA, PropertyInventoryItem } from "../mockData";
import { BUILD_BOUNDARIES, PRODUCT_WORKSTREAMS } from "../productBlueprint";

type OpportunityFilter = "ALL" | "READY" | "BUILD" | "FUTURE";

const filterLabels: Record<OpportunityFilter, string> = {
  ALL: "All opportunities",
  READY: "Ready now",
  BUILD: "Needs build-out support",
  FUTURE: "Future pipeline",
};

const categoryFor = (property: PropertyInventoryItem): OpportunityFilter => {
  if (property.tier === "1B") return "READY";
  if (property.tier === "2") return "BUILD";
  if (property.status === "In Pipeline") return "FUTURE";
  return "ALL";
};

const statusColor = (property: PropertyInventoryItem) => {
  if (property.tier === "1B") return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400";
  if (property.tier === "2") return "bg-amber-500/15 text-amber-700 dark:text-amber-400";
  if (property.status === "In Pipeline") return "bg-blue-500/15 text-blue-700 dark:text-blue-400";
  return "bg-slate-500/15 text-slate-700 dark:text-slate-300";
};

export default function Home() {
  const [opportunityFilter, setOpportunityFilter] = useState<OpportunityFilter>("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<PropertyInventoryItem>(INVENTORY_DATA[0]);
  const [showDetail, setShowDetail] = useState(false);
  const [activeWorkstream, setActiveWorkstream] = useState("inventory");

  const opportunities = useMemo(
    () =>
      INVENTORY_DATA.filter((property) => {
        const category = categoryFor(property);
        const matchesFilter = opportunityFilter === "ALL" || category === opportunityFilter;
        const normalizedSearch = searchTerm.toLowerCase();
        const matchesSearch =
          property.address.toLowerCase().includes(normalizedSearch) ||
          property.businessName?.toLowerCase().includes(normalizedSearch) ||
          property.buildingName?.toLowerCase().includes(normalizedSearch);
        return matchesFilter && matchesSearch;
      }),
    [opportunityFilter, searchTerm],
  );

  const selectedWorkstream = PRODUCT_WORKSTREAMS.find((workstream) => workstream.id === activeWorkstream) ?? PRODUCT_WORKSTREAMS[0];

  const chooseOpportunity = (property: PropertyInventoryItem) => {
    setSelectedProperty(property);
    setShowDetail(true);
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-card/95 backdrop-blur-xl">
        <div className="container mx-auto flex min-h-16 items-center justify-between gap-4">
          <button onClick={() => scrollTo("top")} className="flex items-center gap-2 text-left" aria-label="Back to top">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <span className="font-serif-title text-xl font-semibold">K</span>
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-tight">Historic King Drive BID No. 8</span>
              <span className="block text-[11px] font-medium text-muted-foreground">Food & Beverage Strategy</span>
            </span>
          </button>
          <nav className="hidden items-center gap-5 text-xs font-semibold text-muted-foreground md:flex">
            <button onClick={() => scrollTo("strategy")} className="transition-colors hover:text-foreground">The strategy</button>
            <button onClick={() => scrollTo("opportunities")} className="transition-colors hover:text-foreground">Available spaces</button>
            <button onClick={() => scrollTo("product")} className="transition-colors hover:text-foreground">What we build</button>
            <button onClick={() => scrollTo("execution")} className="transition-colors hover:text-foreground">Q1 2027 plan</button>
            <button onClick={() => scrollTo("data") } className="transition-colors hover:text-foreground">Data approach</button>
          </nav>
          <Button onClick={() => scrollTo("opportunities")} className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:flex">
            See F&B opportunities <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border/70 bg-primary">
          <div className="absolute inset-0 opacity-35">
            <img
              src="/manus-storage/hero_corridor_diagram_c2d313b1.png"
              alt="Illustrated King Drive corridor"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/65" />
          <div className="container mx-auto relative py-16 sm:py-20 lg:py-24">
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  A practical strategy for a stronger King Drive
                </div>
                <h1 className="max-w-4xl font-serif-title text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Make King Drive a place people <span className="text-accent">choose</span> for food, community, and opportunity.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                  This website turns the Food & Beverage Strategy Framework into a clear, shared plan for the BID: support the businesses already here, fill viable storefronts, help new operators grow, and build a destination that feels rooted in King Drive.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button onClick={() => scrollTo("strategy")} className="bg-accent px-5 font-semibold text-accent-foreground hover:bg-accent/90">
                    Understand the strategy <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button onClick={() => scrollTo("execution")} variant="outline" className="border-white/30 bg-white/10 px-5 text-white hover:bg-white/20 hover:text-white">
                    View Q1 2027 proposal
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 shadow-2xl backdrop-blur-sm lg:col-span-4">
                <div className="bg-primary/85 p-4 sm:p-5">
                  <div className="font-mono text-2xl font-bold text-white">{CORRIDOR_METRICS.assessableParcels}</div>
                  <div className="mt-1 text-[11px] font-medium text-white/65">parcels to understand</div>
                </div>
                <div className="bg-primary/85 p-4 sm:p-5">
                  <div className="font-mono text-2xl font-bold text-accent">{CORRIDOR_METRICS.commercialSquareFeet}</div>
                  <div className="mt-1 text-[11px] font-medium text-white/65">commercial space</div>
                </div>
                <div className="bg-primary/85 p-4 sm:p-5">
                  <div className="font-mono text-2xl font-bold text-white">{CORRIDOR_METRICS.foodEstablishmentsCurrent}</div>
                  <div className="mt-1 text-[11px] font-medium text-white/65">current F&B anchors</div>
                </div>
                <div className="bg-primary/85 p-4 sm:p-5">
                  <div className="font-mono text-2xl font-bold text-white">{CORRIDOR_METRICS.noVehiclePct}</div>
                  <div className="mt-1 text-[11px] font-medium text-white/65">households without a car</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE STRATEGY */}
        <section id="strategy" className="container mx-auto py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">What this strategy is about</p>
              <h2 className="mt-3 font-serif-title text-4xl font-semibold leading-tight">A destination is built one reliable experience at a time.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                The framework is not asking the BID to start over with another plan. It supplies the practical work that plans often leave unfunded: knowing every viable space, helping current operators survive, and making it easy for the right new operator to say yes to King Drive.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              <Card className="border-border/80 bg-card shadow-sm">
                <CardHeader className="pb-3">
                  <span className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/12 text-emerald-700"><Handshake className="h-5 w-5" /></span>
                  <CardTitle className="text-lg">1. Keep good businesses open</CardTitle>
                  <CardDescription>Protect the operators already creating the corridor's character.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  Offer practical support: margin coaching, shared purchasing, bookkeeping help, succession planning, and stabilization capital when a business has a real path to recovery.
                </CardContent>
              </Card>
              <Card className="border-border/80 bg-card shadow-sm">
                <CardHeader className="pb-3">
                  <span className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-blue-500/12 text-blue-700"><Store className="h-5 w-5" /></span>
                  <CardTitle className="text-lg">2. Fill the spaces that are ready</CardTitle>
                  <CardDescription>Focus first on storefronts where a restaurant can open sooner.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  Separate vacant spaces with kitchen equipment already in place from spaces that need expensive build-out. That helps the BID use grants and recruitment time where they matter most.
                </CardContent>
              </Card>
              <Card className="border-border/80 bg-card shadow-sm">
                <CardHeader className="pb-3">
                  <span className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-violet-500/12 text-violet-700"><Users className="h-5 w-5" /></span>
                  <CardTitle className="text-lg">3. Grow local ownership</CardTitle>
                  <CardDescription>Give emerging operators a real pathway to a permanent location.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  Use pop-ups, a food truck park, and mentor–protégé partnerships to let new operators test a concept, learn the business, and move toward owning a storefront.
                </CardContent>
              </Card>
              <Card className="border-border/80 bg-card shadow-sm">
                <CardHeader className="pb-3">
                  <span className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent"><Compass className="h-5 w-5" /></span>
                  <CardTitle className="text-lg">4. Build a reason to come back</CardTitle>
                  <CardDescription>Create enough activity, variety, and dependable hours to become a destination.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">
                  The goal is not simply more restaurants. It is an active food ecosystem with different price points, evening options, events, and a destination restaurant that remains a neighborhood institution.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* REAL ESTATE TOOL */}
        <section id="opportunities" className="border-y border-border/70 bg-secondary/55 py-16 sm:py-20">
          <div className="container mx-auto">
            <div className="flex flex-col justify-between gap-6 border-b border-border/70 pb-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">The proposed BID tool</p>
                <h2 className="mt-3 font-serif-title text-4xl font-semibold leading-tight">Find the right food & beverage space on King Drive.</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  This is the simple experience the BID can offer staff, owners, brokers, and prospective operators. It starts with a snapshot of the corridor, then becomes more useful as field checks and owner conversations are completed.
                </p>
              </div>
              <div className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-xs leading-relaxed text-foreground lg:max-w-xs">
                <span className="font-bold">Important:</span> The records below demonstrate the tool experience. Any public listing would be reviewed and verified by BID staff before it is shared.
              </div>
            </div>

            <div className="mt-7 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex flex-col gap-3 rounded-xl border border-border/80 bg-card p-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="relative min-w-0 flex-1">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      aria-label="Search available spaces"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder="Search by address or building..."
                      className="h-9 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm outline-none transition focus:ring-2 focus:ring-accent/40"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(filterLabels) as OpportunityFilter[]).map((filter) => (
                      <Button
                        key={filter}
                        size="sm"
                        variant={opportunityFilter === filter ? "default" : "outline"}
                        className={opportunityFilter === filter ? "bg-primary text-primary-foreground" : "bg-card"}
                        onClick={() => setOpportunityFilter(filter)}
                      >
                        {filterLabels[filter]}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  {opportunities.map((property) => (
                    <button
                      key={property.id}
                      onClick={() => chooseOpportunity(property)}
                      className="group grid gap-4 rounded-xl border border-border/80 bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md sm:grid-cols-12 sm:items-center"
                    >
                      <div className="sm:col-span-7">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <Badge className={`border-0 text-[10px] ${statusColor(property)}`}>
                            {property.tier === "1B" ? "F&B READY NOW" : property.tier === "2" ? "NEEDS BUILD-OUT" : property.status === "In Pipeline" ? "FUTURE OPPORTUNITY" : "CORRIDOR ANCHOR"}
                          </Badge>
                          <span className="font-mono text-[10px] text-muted-foreground">{property.parcelKey}</span>
                          {property.conflictFlag && <span className="text-[10px] font-semibold text-amber-700">Disclosure review needed</span>}
                        </div>
                        <h3 className="font-bold text-foreground">{property.address}</h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">{property.businessName || property.buildingName}</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs sm:col-span-4">
                        <div><span className="block font-mono font-bold text-foreground">{property.squareFeet.toLocaleString()}</span><span className="text-[10px] text-muted-foreground">SF</span></div>
                        <div><span className="block font-mono font-bold text-foreground">{property.seatingCapacity || "—"}</span><span className="text-[10px] text-muted-foreground">seats</span></div>
                        <div><span className="block font-mono font-bold text-foreground">{property.kitchenInPlace ? "Yes" : "No"}</span><span className="text-[10px] text-muted-foreground">kitchen</span></div>
                      </div>
                      <div className="flex justify-end sm:col-span-1"><ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" /></div>
                    </button>
                  ))}
                  {opportunities.length === 0 && <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">No spaces match that search. Try a different filter.</div>}
                </div>
              </div>

              <aside className="lg:col-span-4">
                <Card className="sticky top-20 border-border/80 bg-card shadow-sm">
                  <CardHeader className="border-b border-border/60 pb-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-[10px]">How the filter helps</Badge>
                      <Filter className="h-4 w-4 text-accent" />
                    </div>
                    <CardTitle className="font-serif-title text-2xl">Clear information makes recruitment easier.</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-5 text-sm text-muted-foreground">
                    <div className="flex gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /><span><strong className="text-foreground">Ready now:</strong> vacant spaces with key kitchen infrastructure in place.</span></div>
                    <div className="flex gap-3"><Wrench className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" /><span><strong className="text-foreground">Needs support:</strong> viable spaces that need a kitchen package, tenant improvements, or owner participation.</span></div>
                    <div className="flex gap-3"><TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" /><span><strong className="text-foreground">Future pipeline:</strong> spaces that require early outreach because tenanting decisions happen before delivery.</span></div>
                    <div className="rounded-lg border border-accent/25 bg-accent/10 p-3 text-xs leading-relaxed text-foreground">
                      The BID retains a private version with owner contacts, field notes, conflict disclosures, and verification dates. The public-facing version shows only approved information.
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* Q1 EXECUTION */}
        <section id="execution" className="container mx-auto py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Proposal for execution</p>
            <h2 className="mt-3 font-serif-title text-4xl font-semibold">Q1 2027: turn the framework into a working tool.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The first quarter should produce a usable, verified inventory snapshot and a simple opportunity finder. It should not wait for a perfect real-time data feed to begin helping operators and owners today.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Card className="relative overflow-hidden border-border/80 bg-card">
              <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
              <CardHeader>
                <div className="flex items-center justify-between"><Badge className="bg-primary text-primary-foreground">January</Badge><span className="font-mono text-xs text-muted-foreground">Agree & prepare</span></div>
                <CardTitle className="mt-3 text-xl">Set the inventory standard.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>Agree on the exact corridor, basic F&B filters, public versus private fields, and a simple definition of “ready now.”</p>
                <div className="border-t border-border pt-3 text-xs text-foreground"><strong>Deliverable:</strong> approved data dictionary, user roles, and field-survey form.</div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-border/80 bg-card">
              <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
              <CardHeader>
                <div className="flex items-center justify-between"><Badge className="bg-accent text-accent-foreground">February</Badge><span className="font-mono text-xs text-muted-foreground">Build & verify</span></div>
                <CardTitle className="mt-3 text-xl">Create the first corridor snapshot.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>Combine a licensed CoStar snapshot, BID records, City/County public records, and a quick field survey. Call priority owners to confirm the most important opportunities.</p>
                <div className="border-t border-border pt-3 text-xs text-foreground"><strong>Deliverable:</strong> verified priority-space list and internal BID dashboard.</div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden border-border/80 bg-card">
              <div className="absolute inset-x-0 top-0 h-1 bg-emerald-600" />
              <CardHeader>
                <div className="flex items-center justify-between"><Badge className="bg-emerald-600 text-white">March</Badge><span className="font-mono text-xs text-muted-foreground">Share & launch</span></div>
                <CardTitle className="mt-3 text-xl">Use it to recruit and coordinate.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>Review the tool with the Board, prepare approved opportunity sheets, and start targeted conversations with operators, brokers, developers, and institutional partners.</p>
                <div className="border-t border-border pt-3 text-xs text-foreground"><strong>Deliverable:</strong> Board-ready launch packet and first outreach pipeline.</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* COMPLETE PRODUCT BLUEPRINT */}
        <section id="product" className="border-y border-border/70 bg-secondary/55 py-16 sm:py-20">
          <div className="container mx-auto">
            <div className="grid gap-8 border-b border-border/70 pb-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Complete product blueprint</p>
                <h2 className="mt-3 font-serif-title text-4xl font-semibold leading-tight">Everything the BID needs to build, organized around the work.</h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  The strategy calls for a complete operating platform—not just a public map. The 12 modules below make the work manageable: first understand the corridor, then recruit and retain businesses, build ownership pathways, and report clear results to the Board and funders.
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm leading-relaxed text-foreground">
                  <strong>How to read this:</strong> Start with the four workstreams. Each tab shows every feature in that part of the product, who uses it, when to build it, and how the BID will know it is working.
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-3 rounded-xl border border-border/80 bg-card p-4 sm:grid-cols-3">
              <div className="flex items-start gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground">1</span><div><strong className="text-sm">Private BID workspace</strong><p className="mt-1 text-xs leading-relaxed text-muted-foreground">The system of record for owner contacts, field evidence, financial support cases, and Board decisions.</p></div></div>
              <div className="flex items-start gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent text-xs font-bold text-accent-foreground">2</span><div><strong className="text-sm">Approved opportunity finder</strong><p className="mt-1 text-xs leading-relaxed text-muted-foreground">A simple, public or partner view for operators looking for an F&B space on King Drive.</p></div></div>
              <div className="flex items-start gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-emerald-600 text-xs font-bold text-white">3</span><div><strong className="text-sm">Source-based reporting</strong><p className="mt-1 text-xs leading-relaxed text-muted-foreground">A clean view for the Board, funders, and partners that never exposes protected records.</p></div></div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-b border-border/70 pb-5" role="tablist" aria-label="Product blueprint workstreams">
              {PRODUCT_WORKSTREAMS.map((workstream) => (
                <Button
                  key={workstream.id}
                  role="tab"
                  aria-selected={activeWorkstream === workstream.id}
                  variant={activeWorkstream === workstream.id ? "default" : "outline"}
                  onClick={() => setActiveWorkstream(workstream.id)}
                  className={activeWorkstream === workstream.id ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}
                >
                  {workstream.label}
                </Button>
              ))}
            </div>

            <div className="mt-7">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-serif-title text-3xl font-semibold">{selectedWorkstream.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{selectedWorkstream.description}</p>
                </div>
                <Badge variant="secondary" className="w-fit font-mono text-[10px]">{selectedWorkstream.modules.length} modules in this workstream</Badge>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {selectedWorkstream.modules.map((module) => {
                  const ModuleIcon = module.icon;
                  return (
                    <Card key={module.id} className="border-border/80 bg-card shadow-sm">
                      <CardHeader className="border-b border-border/60 pb-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">{module.id}</span>
                            <div>
                              <CardTitle className="text-lg leading-tight">{module.title}</CardTitle>
                              <CardDescription className="mt-1 text-xs">{module.formalName}</CardDescription>
                            </div>
                          </div>
                          <ModuleIcon className="h-5 w-5 shrink-0 text-accent" />
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-semibold">
                          <span className="rounded-full bg-accent/12 px-2.5 py-1 text-accent">{module.phase}</span>
                          <span className="rounded-full bg-secondary px-2.5 py-1 text-muted-foreground">For: {module.users}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-5 pt-5">
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">What it does</h4>
                          <p className="mt-2 text-sm leading-relaxed text-foreground">{module.purpose}</p>
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Features included</h4>
                          <ul className="mt-2 space-y-2 text-xs leading-relaxed text-muted-foreground">
                            {module.features.map((feature) => (
                              <li key={feature} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" /><span>{feature}</span></li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/8 p-3 text-xs leading-relaxed text-foreground">
                          <strong>How we know it worked:</strong> {module.success}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-primary/15 bg-primary p-6 text-primary-foreground sm:p-8">
              <div className="grid gap-7 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">What comes first</p>
                  <h3 className="mt-2 font-serif-title text-3xl font-semibold leading-tight">Build the operating foundation before the advanced tools.</h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/70">This sequence makes the Q1 2027 proposal achievable. It produces something useful in the first quarter while protecting the work that belongs in later phases.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
                  <div className="rounded-xl border border-white/15 bg-white/8 p-4"><span className="text-xs font-bold text-accent">BUILD NOW · Q1 2027</span><ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/80">{BUILD_BOUNDARIES.buildNow.map((item) => <li key={item} className="flex gap-2"><span className="text-accent">•</span>{item}</li>)}</ul></div>
                  <div className="rounded-xl border border-white/15 bg-white/8 p-4"><span className="text-xs font-bold text-accent">BUILD NEXT · 2027</span><ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/80">{BUILD_BOUNDARIES.buildNext.map((item) => <li key={item} className="flex gap-2"><span className="text-accent">•</span>{item}</li>)}</ul></div>
                  <div className="rounded-xl border border-white/15 bg-white/8 p-4"><span className="text-xs font-bold text-accent">BUILD LATER · 2028+</span><ul className="mt-3 space-y-2 text-xs leading-relaxed text-white/80">{BUILD_BOUNDARIES.buildLater.map((item) => <li key={item} className="flex gap-2"><span className="text-accent">•</span>{item}</li>)}</ul></div>
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <Card className="border-border/80 bg-card"><CardHeader className="pb-2"><ShieldCheck className="mb-2 h-5 w-5 text-accent" /><CardTitle className="text-base">Access controls are required</CardTitle></CardHeader><CardContent className="text-xs leading-relaxed text-muted-foreground">Owner contacts, operator financials, Board conflicts, and confidential support cases are never included in the public opportunity finder.</CardContent></Card>
              <Card className="border-border/80 bg-card"><CardHeader className="pb-2"><FileCheck2 className="mb-2 h-5 w-5 text-accent" /><CardTitle className="text-base">Every fact needs a source</CardTitle></CardHeader><CardContent className="text-xs leading-relaxed text-muted-foreground">The product labels whether a fact was observed in the field, reported by an owner, verified through a record, or calculated as an estimate.</CardContent></Card>
              <Card className="border-border/80 bg-card"><CardHeader className="pb-2"><Building2 className="mb-2 h-5 w-5 text-accent" /><CardTitle className="text-base">The tool does not replace the BID</CardTitle></CardHeader><CardContent className="text-xs leading-relaxed text-muted-foreground">It supports decisions. It does not automate legal, lending, grant, lease, or public-disposition decisions.</CardContent></Card>
            </div>
          </div>
        </section>

        {/* DATA PLATFORM DECISION */}
        <section id="data" className="border-y border-border/70 bg-card py-16 sm:py-20">
          <div className="container mx-auto">
            <div className="grid gap-8 border-b border-border/70 pb-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Data platform decision</p>
                <h2 className="mt-3 font-serif-title text-4xl font-semibold leading-tight">Use the right source for the right job.</h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  The BID needs a useful Q1 2027 snapshot now and a repeatable research process later. No provider replaces field work or owner confirmation. The recommended approach keeps the BID in control of the inventory while using commercial platforms for research, comparables, and market context.
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed text-foreground">
                  <strong>Clear recommendation:</strong> use the BID’s licensed <strong>CoStar snapshot</strong> to establish the Q1 2027 baseline. Pilot <strong>Crexi Intelligence / All PRO</strong> as the primary ongoing internal research platform. Treat <strong>REDI CRE</strong> as an optional specialist comparison after a Milwaukee-focused demo.
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <Card className="border-border/80 bg-background/70 shadow-sm">
                <CardHeader className="border-b border-border/60 pb-4">
                  <div className="flex items-center justify-between"><Badge variant="secondary" className="text-[10px]">Use in Q1 2027</Badge><span className="font-mono text-xs text-muted-foreground">Baseline input</span></div>
                  <CardTitle className="mt-2 font-serif-title text-2xl">CoStar</CardTitle>
                  <CardDescription>Best immediate source for a dated research snapshot—if the BID already has or procures the appropriate license.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-5 text-xs leading-relaxed text-muted-foreground">
                  <ul className="space-y-2"><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />Property records, active availabilities, ownership research, sales comps, and market analytics.</li><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />Good for a controlled January/February inventory pull and market context.</li><li className="flex gap-2"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />Provider research remains internal unless the contract gives the BID more specific rights.</li></ul>
                  <div className="rounded-lg bg-secondary p-3 text-foreground"><strong>Q1 job:</strong> create the first dated corridor snapshot, then verify every actionable space in the field.</div>
                </CardContent>
              </Card>

              <Card className="border-accent/45 bg-card shadow-md ring-1 ring-accent/25">
                <CardHeader className="border-b border-border/60 pb-4">
                  <div className="flex items-center justify-between"><Badge className="bg-emerald-600 text-[10px] text-white hover:bg-emerald-700">Recommended pilot</Badge><span className="font-mono text-xs text-muted-foreground">Ongoing research</span></div>
                  <CardTitle className="mt-2 font-serif-title text-2xl">Crexi Intelligence / All PRO</CardTitle>
                  <CardDescription>Best single published fit for the BID’s future, staff-operated research workspace.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-5 text-xs leading-relaxed text-muted-foreground">
                  <ul className="space-y-2"><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />Property, owner, sales and lease comp, financing, demographic, market, and mapping research in one place.</li><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />Useful for a repeatable King Drive boundary search, saved research, and governed CSV/Excel working exports.</li><li className="flex gap-2"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />Its published Listing API sends a partner’s listings to Crexi; it is not a general data-download API.</li></ul>
                  <div className="rounded-lg bg-emerald-500/10 p-3 text-foreground"><strong>Ongoing job:</strong> help named BID staff find opportunities, research owners and comps, and prepare verified deal sheets.</div>
                </CardContent>
              </Card>

              <Card className="border-border/80 bg-background/70 shadow-sm">
                <CardHeader className="border-b border-border/60 pb-4">
                  <div className="flex items-center justify-between"><Badge variant="outline" className="text-[10px]">Test later</Badge><span className="font-mono text-xs text-muted-foreground">Specialist option</span></div>
                  <CardTitle className="mt-2 font-serif-title text-2xl">REDI CRE</CardTitle>
                  <CardDescription>Promising for internal, AI-guided CRE research and potentially for a separately licensed economic-development display option.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-5 text-xs leading-relaxed text-muted-foreground">
                  <ul className="space-y-2"><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />Publicly describes property, owners/tenants, comps, market analytics, construction data, and downloadable data sets.</li><li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />May provide an economic-development-oriented CDX viewer path, subject to separate terms.</li><li className="flex gap-2"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />Public details do not confirm a Milwaukee F&B data schema, implementation method, or redistribution rights.</li></ul>
                  <div className="rounded-lg bg-secondary p-3 text-foreground"><strong>Later job:</strong> run the same King Drive test as Crexi and consider only if it adds meaningful local coverage or a licensed display path.</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-12">
              <Card className="border-border/80 bg-background/60 lg:col-span-8">
                <CardHeader className="border-b border-border/60 pb-4"><CardTitle className="font-serif-title text-2xl">Q1 2027 data workflow: a snapshot is enough to begin.</CardTitle><CardDescription>The product should treat commercial data as research inputs, not as the public source of truth.</CardDescription></CardHeader>
                <CardContent className="grid gap-4 pt-5 sm:grid-cols-3">
                  <div><span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span><h3 className="mt-3 text-sm font-bold">Define the study area.</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Lock the King Drive boundary, food-and-beverage definitions, fields needed, and an exact “as-of” date.</p></div>
                  <div><span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span><h3 className="mt-3 text-sm font-bold">Create a research snapshot.</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Combine licensed CoStar data, BID assessment records, City/County sources, and current development information.</p></div>
                  <div><span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span><h3 className="mt-3 text-sm font-bold">Verify before sharing.</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">Field-check each actionable location and confirm availability, contacts, suitability, and permission with an owner or broker.</p></div>
                </CardContent>
              </Card>
              <Card className="border-accent/35 bg-accent/10 lg:col-span-4">
                <CardHeader className="pb-3"><ShieldCheck className="mb-2 h-6 w-6 text-accent" /><CardTitle className="text-lg">The BID’s source of truth</CardTitle></CardHeader>
                <CardContent className="text-xs leading-relaxed text-foreground">The BID-owned inventory—not a CoStar, Crexi, or REDI export—should hold the public/private flag, owner or broker permission, field verification date, current status, and approved public description. This protects the BID and keeps the product useful if a vendor license changes.</CardContent>
              </Card>
            </div>

            <div className="mt-7 rounded-xl border border-border/80 bg-secondary/50 p-5 sm:p-6">
              <div className="grid gap-5 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-4"><h3 className="font-serif-title text-2xl font-semibold">Before signing any data agreement</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Ask the vendors to prove the local use case, not just national coverage.</p></div><div className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2 lg:col-span-8"><div className="rounded-lg bg-card p-3">Demonstrate the exact King Drive boundary and the same 25–30 known addresses.</div><div className="rounded-lg bg-card p-3">Show F&B use codes, availability, ownership/agent data, lease/sales comps, and historical records.</div><div className="rounded-lg bg-card p-3">Confirm named users, contractor access, export limits, snapshot retention, and correction process in writing.</div><div className="rounded-lg bg-card p-3">Confirm what may be used internally, shared with partners, and displayed publicly; assume public distribution is not allowed unless stated.</div></div></div>
            </div>
          </div>
        </section>

        {/* SUCCESS */}
        <section className="container mx-auto py-16 sm:py-20">
          <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">What success looks like</p>
                <h2 className="mt-3 font-serif-title text-4xl font-semibold leading-tight">More than a list of vacancies: a corridor where businesses can stay, grow, and belong.</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">The BID should measure both growth and stability. A strategy that adds new businesses while losing the operators who were already here is not a success.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:col-span-5">
                <div className="rounded-lg border border-white/15 bg-white/10 p-4"><span className="block text-xl font-bold text-accent">≥ 0</span><span className="mt-1 block text-xs text-white/70">net change among pre-program businesses</span></div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-4"><span className="block text-xl font-bold text-white">1B → occupied</span><span className="mt-1 block text-xs text-white/70">fast-fill storefront conversions</span></div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-4"><span className="block text-xl font-bold text-white">Vendor → lease</span><span className="mt-1 block text-xs text-white/70">food truck and pop-up graduations</span></div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-4"><span className="block text-xl font-bold text-white">Year 4</span><span className="mt-1 block text-xs text-white/70">destination restaurant opening goal</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showDetail && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-primary/60 p-4 backdrop-blur-sm sm:items-center" role="dialog" aria-modal="true" aria-label="Property details">
          <Card className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border-border bg-card shadow-2xl">
            <CardHeader className="border-b border-border/60">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Badge className={`border-0 text-[10px] ${statusColor(selectedProperty)}`}>Tier {selectedProperty.tier} · {selectedProperty.status}</Badge>
                  <CardTitle className="mt-2 font-serif-title text-3xl">{selectedProperty.address}</CardTitle>
                  <CardDescription>{selectedProperty.businessName || selectedProperty.buildingName}</CardDescription>
                </div>
                <Button onClick={() => setShowDetail(false)} variant="ghost" size="sm">Close</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid gap-3 sm:grid-cols-4">
                <div className="rounded-lg bg-secondary p-3"><span className="block text-[10px] uppercase text-muted-foreground">Size</span><strong className="mt-1 block">{selectedProperty.squareFeet.toLocaleString()} SF</strong></div>
                <div className="rounded-lg bg-secondary p-3"><span className="block text-[10px] uppercase text-muted-foreground">Seating</span><strong className="mt-1 block">{selectedProperty.seatingCapacity || "To assess"}</strong></div>
                <div className="rounded-lg bg-secondary p-3"><span className="block text-[10px] uppercase text-muted-foreground">Kitchen</span><strong className="mt-1 block">{selectedProperty.kitchenInPlace ? "In place" : "Needed"}</strong></div>
                <div className="rounded-lg bg-secondary p-3"><span className="block text-[10px] uppercase text-muted-foreground">Rent / terms</span><strong className="mt-1 block text-xs">{selectedProperty.askingRent || "To confirm"}</strong></div>
              </div>
              <div>
                <h3 className="text-sm font-bold">What we know</h3>
                <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  <div className="flex items-center gap-2"><CheckCircle2 className={`h-4 w-4 ${selectedProperty.kitchenInPlace ? "text-emerald-600" : "text-muted-foreground"}`} />Commercial kitchen: {selectedProperty.kitchenInPlace ? "yes" : "not confirmed"}</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className={`h-4 w-4 ${selectedProperty.hoodAndVent ? "text-emerald-600" : "text-muted-foreground"}`} />Hood & ventilation: {selectedProperty.hoodAndVent ? "yes" : "needs review"}</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className={`h-4 w-4 ${selectedProperty.greaseInterceptor ? "text-emerald-600" : "text-muted-foreground"}`} />Grease interceptor: {selectedProperty.greaseInterceptor ? "yes" : "needs review"}</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className={`h-4 w-4 ${selectedProperty.priorFoodUse ? "text-emerald-600" : "text-muted-foreground"}`} />Prior food use: {selectedProperty.priorFoodUse ? "yes" : "not known"}</div>
                </div>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm leading-relaxed"><strong>Why it matters:</strong> {selectedProperty.notes}</div>
              <div className="flex flex-wrap gap-3 border-t border-border pt-5">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90"><FileCheck2 className="mr-2 h-4 w-4" />Prepare approved opportunity sheet</Button>
                <Button variant="outline"><MapPin className="mr-2 h-4 w-4" />Request a site visit</Button>
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground">Record status: demonstration snapshot. Owner contact details, verification evidence, and internal notes are available only in the BID staff workspace after review.</p>
            </CardContent>
          </Card>
        </div>
      )}

      <footer className="border-t border-border/70 bg-card py-8 text-xs text-muted-foreground">
        <div className="container mx-auto flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div><span className="font-bold text-foreground">Historic King Drive BID No. 8</span> · 1726 N. Dr. Martin Luther King Jr. Drive, Milwaukee, WI 53212</div>
          <div className="flex items-center gap-3"><span>Draft planning website</span><span>·</span><span className="font-semibold text-accent">Pride and Promise</span></div>
        </div>
      </footer>
    </div>
  );
}
