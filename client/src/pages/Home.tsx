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

        {/* DATA + USERS */}
        <section id="data" className="border-y border-border/70 bg-card py-16 sm:py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">A practical data approach</p>
              <h2 className="mt-3 font-serif-title text-4xl font-semibold">Start with a useful snapshot. Improve it over time.</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                CoStar can help establish the first property and market snapshot, subject to the BID’s license and permitted use. The tool does not need real-time updates on day one. It needs trustworthy information about the places the BID is actively trying to retain, recruit for, or activate.
              </p>
              <div className="mt-6 rounded-xl border border-border/80 bg-background p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold">Data use rule</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Commercial data is a research input, not a public database. The BID verifies priority records in the field and only shares property information that owners and the BID have approved for the intended audience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-6">
              {[
                { icon: ClipboardCheck, title: "BID staff", text: "Keep an accurate private inventory, assign follow-ups, and prepare Board decisions." },
                { icon: Building2, title: "Owners & brokers", text: "See what information is needed to package a space for food and beverage recruitment." },
                { icon: Utensils, title: "Prospective operators", text: "Find an approved, understandable view of spaces that fit a food business." },
                { icon: Users, title: "Funders & partners", text: "Understand the strategy, track progress, and see where support can unlock a real outcome." },
              ].map((user) => (
                <Card key={user.title} className="border-border/70 bg-background/60">
                  <CardHeader className="pb-2">
                    <user.icon className="mb-2 h-5 w-5 text-accent" />
                    <CardTitle className="text-base">{user.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs leading-relaxed text-muted-foreground">{user.text}</CardContent>
                </Card>
              ))}
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
