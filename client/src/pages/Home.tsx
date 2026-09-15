import React, { useState } from "react";
import { 
  Building2, 
  MapPin, 
  Utensils, 
  ShieldCheck, 
  FileSpreadsheet, 
  Layers, 
  TrendingUp, 
  Users, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight, 
  Search, 
  Filter, 
  ChevronRight,
  Flame,
  Scale,
  HandCoins,
  FileCheck,
  Compass,
  Download,
  Info
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INVENTORY_DATA, MODULES_SPEC, CORRIDOR_METRICS, PropertyInventoryItem } from "../mockData";

export default function Home() {
  const [selectedTier, setSelectedTier] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeProperty, setActiveProperty] = useState<PropertyInventoryItem>(INVENTORY_DATA[0]);

  const filteredInventory = INVENTORY_DATA.filter((item) => {
    const matchesTier = selectedTier === "ALL" || item.tier === selectedTier;
    const matchesSearch = 
      item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.businessName && item.businessName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      item.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTier && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
      {/* Top Advisory Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs font-medium border-b border-border/40">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Historic King Drive BID No. 8 · Strategy & Digital Platform Architecture</span>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/80">
            <span>Primary Focus: Walnut to Keefe</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Board Review & Funder Proposal Spec</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-card via-card to-background border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
          <img 
            src="/manus-storage/hero_corridor_diagram_c2d313b1.png" 
            alt="King Drive Urban Vector Map" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Operating System Blueprint
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif-title leading-tight text-foreground">
                Historic King Drive <br />
                <span className="text-accent underline decoration-accent/40 decoration-wavy">Food & Beverage</span> Platform
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                An internal digital operating platform built to translate the King Drive F&B Strategy Framework into executable reality: verified storefront tiers, operator margin stabilization, mentor–protégé matching, and transparent public body governance.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md px-6"
                  onClick={() => {
                    const el = document.getElementById("inventory-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Explore Storefront Tiers
                </Button>
                <Button 
                  variant="outline" 
                  className="border-border hover:bg-muted font-medium"
                  onClick={() => {
                    const el = document.getElementById("modules-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Layers className="w-4 h-4 mr-2" />
                  12 Core Product Modules
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground text-xs"
                  onClick={() => {
                    const el = document.getElementById("provider-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Info className="w-3.5 h-3.5 mr-1.5 text-accent" />
                  REDI vs. Crexi Comparison
                </Button>
              </div>
            </div>

            {/* Hero Metric Widget */}
            <div className="lg:col-span-4">
              <Card className="border-border/80 shadow-xl bg-card/95 backdrop-blur">
                <CardHeader className="pb-3 border-b border-border/40">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Corridor Baseline
                    </CardTitle>
                    <Badge variant="secondary" className="font-mono text-xs">
                      Walnut ➔ Keefe
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold font-mono text-foreground">{CORRIDOR_METRICS.assessableParcels}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Assessable Parcels</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-foreground">{CORRIDOR_METRICS.assessableValue}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Assessed Value</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-accent">{CORRIDOR_METRICS.commercialSquareFeet}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Commercial Footprint</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-mono text-foreground">{CORRIDOR_METRICS.noVehiclePct}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Zero-Car Households</div>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-border/40 text-xs text-muted-foreground flex items-center justify-between">
                    <span>Active F&B Anchor Units: <strong>{CORRIDOR_METRICS.foodEstablishmentsCurrent}</strong></span>
                    <span className="text-accent font-medium">Net-Zero Loss Target</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto py-10 space-y-16 flex-1">
        
        {/* Visual Corridor Context Banner */}
        <section className="rounded-2xl border border-border/80 overflow-hidden bg-card shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
            <div className="relative group overflow-hidden h-44">
              <img 
                src="/manus-storage/king_drive_streetscape_4bb6aa5e.jpg" 
                alt="Historic King Drive Streetscape" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3.5">
                <span className="text-xs font-semibold text-white">Walnut to Keefe Corridor</span>
              </div>
            </div>
            <div className="relative group overflow-hidden h-44">
              <img 
                src="/manus-storage/victory_lofts_rendering_4619da2f.png" 
                alt="Victory Lofts 2028 Delivery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3.5">
                <span className="text-xs font-semibold text-white">Victory Lofts · 7.5k SF Hub (2028)</span>
              </div>
            </div>
            <div className="relative group overflow-hidden h-44">
              <img 
                src="/manus-storage/restaurant_storefront_20ac1609.jpg" 
                alt="King Drive F&B Storefront" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3.5">
                <span className="text-xs font-semibold text-white">Tier 1 Kitchen Ready Storefronts</span>
              </div>
            </div>
            <div className="relative group overflow-hidden h-44">
              <img 
                src="/manus-storage/king_drive_faces_1e5bab87.jpg" 
                alt="Historic King Drive Leadership" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3.5">
                <span className="text-xs font-semibold text-white">BID No. 8 Governance & Partners</span>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Framework Argument: The Closure Taxonomy */}
        <section className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Empirical Analysis</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-title">
                The Closure Taxonomy: Diagnosing Real Vulnerability
              </h2>
            </div>
            <div className="text-xs text-muted-foreground max-w-sm">
              The framework establishes that treating all corridor closures as a single trend misdiagnoses the problem. Only one of four was a capital-failure mode preventable by grants.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-border/60 bg-background/50 hover:border-accent/40 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="destructive" className="text-[10px]">Operating Margin</Badge>
                  <span className="text-xs text-muted-foreground font-mono">3338 N MLK</span>
                </div>
                <CardTitle className="text-base font-bold">Sam’s Place Jazz Café</CardTitle>
                <CardDescription className="text-xs">Closed Feb 2026 (~5 yrs)</CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-2">
                <p>Rising food/beverage costs and consumer squeeze directly hit margins despite philanthropic anchor support.</p>
                <div className="pt-2 border-t border-border/40 font-semibold text-accent">
                  Argues for: Operator Stabilization Fund & Margin Consulting
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-background/50 hover:border-accent/40 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="secondary" className="text-[10px]">Graduation</Badge>
                  <span className="text-xs text-muted-foreground font-mono">King Drive</span>
                </div>
                <CardTitle className="text-base font-bold">Rise & Grind Cafe</CardTitle>
                <CardDescription className="text-xs">Transition to Dev Partner</CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-2">
                <p>Operator transitioned to partner on the $15.6M Victory Lofts project. An operator graduation, not a commercial failure.</p>
                <div className="pt-2 border-t border-border/40 font-semibold text-accent">
                  Argues for: Succession Planning & Backfill Management
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-background/50 hover:border-accent/40 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="outline" className="text-[10px] border-emerald-500/40 text-emerald-600 dark:text-emerald-400">Market Backfill</Badge>
                  <span className="text-xs text-muted-foreground font-mono">1835 N MLK</span>
                </div>
                <CardTitle className="text-base font-bold">Mi Casa Su Cafe</CardTitle>
                <CardDescription className="text-xs">Normal Turnover (~8 yrs)</CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-2">
                <p>Closed after sustained run; immediate filing by One Seven Cafe & Lounge to backfill 1835 and 1839 MLK.</p>
                <div className="pt-2 border-t border-border/40 font-semibold text-accent">
                  Argues for: Healthy turnover support & Fast-fill permits
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-background/50 hover:border-accent/40 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="outline" className="text-[10px] border-amber-500/40 text-amber-600 dark:text-amber-400">Pre-Lease Scale</Badge>
                  <span className="text-xs text-muted-foreground font-mono">2215 N MLK</span>
                </div>
                <CardTitle className="text-base font-bold">Pepperpot</CardTitle>
                <CardDescription className="text-xs">Owner-Occupied (3,750 SF)</CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-2">
                <p>Ambitious 99-seat purchase expansion from Capitol Drive that proved difficult to maintain without shared back-office.</p>
                <div className="pt-2 border-t border-border/40 font-semibold text-accent">
                  Argues for: Pre-acquisition feasibility & Pro forma review
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Storefront Inventory & Tiers */}
        <section id="inventory-section" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Operational Inventory</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-title">
                Storefront Readiness Tiers (Walnut to Keefe)
              </h2>
            </div>
            
            {/* Tier Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <Button 
                size="sm" 
                variant={selectedTier === "ALL" ? "default" : "outline"}
                className={selectedTier === "ALL" ? "bg-accent text-accent-foreground" : ""}
                onClick={() => setSelectedTier("ALL")}
              >
                All Storefronts
              </Button>
              <Button 
                size="sm" 
                variant={selectedTier === "1A" ? "default" : "outline"}
                className={selectedTier === "1A" ? "bg-accent text-accent-foreground" : ""}
                onClick={() => setSelectedTier("1A")}
              >
                Tier 1A (Occupied)
              </Button>
              <Button 
                size="sm" 
                variant={selectedTier === "1B" ? "default" : "outline"}
                className={selectedTier === "1B" ? "bg-accent text-accent-foreground" : ""}
                onClick={() => setSelectedTier("1B")}
              >
                Tier 1B (Vacant Kitchen)
              </Button>
              <Button 
                size="sm" 
                variant={selectedTier === "2" ? "default" : "outline"}
                className={selectedTier === "2" ? "bg-accent text-accent-foreground" : ""}
                onClick={() => setSelectedTier("2")}
              >
                Tier 2 (Needs Kitchen)
              </Button>
              <Button 
                size="sm" 
                variant={selectedTier === "3" ? "default" : "outline"}
                className={selectedTier === "3" ? "bg-accent text-accent-foreground" : ""}
                onClick={() => setSelectedTier("3")}
              >
                Tier 3 (Redevelop)
              </Button>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search by street address, former tenant, or owner entity..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-card border border-border/80 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
            />
          </div>

          {/* Inventory Grid + Detail Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* List side */}
            <div className="lg:col-span-7 space-y-3 max-h-[580px] overflow-y-auto pr-2">
              {filteredInventory.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveProperty(item)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    activeProperty.id === item.id 
                      ? "border-accent bg-accent/5 shadow-md ring-1 ring-accent" 
                      : "border-border/70 bg-card hover:border-accent/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          item.tier === "1A" ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" :
                          item.tier === "1B" ? "bg-blue-500/15 text-blue-600 dark:text-blue-400" :
                          item.tier === "2" ? "bg-amber-500/15 text-amber-600 dark:text-amber-400" :
                          "bg-rose-500/15 text-rose-600 dark:text-rose-400"
                        }`}>
                          Tier {item.tier}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">{item.parcelKey}</span>
                        {item.conflictFlag && (
                          <Badge variant="destructive" className="text-[10px] py-0 px-1.5 flex items-center gap-1">
                            <ShieldCheck className="w-2.5 h-2.5" /> Board Disclosure
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-foreground">{item.address}</h4>
                      <p className="text-xs text-muted-foreground">{item.businessName || item.buildingName}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-semibold">{item.squareFeet.toLocaleString()} SF</span>
                      <div className="text-[11px] text-muted-foreground">{item.status}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Property Inspector Drawer / Card */}
            <div className="lg:col-span-5 sticky top-6">
              <Card className="border-border shadow-lg bg-card">
                <CardHeader className="pb-3 border-b border-border/40">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono text-xs">
                      ID: {activeProperty.id}
                    </Badge>
                    <span className="text-xs text-muted-foreground">Surveyed: {activeProperty.surveyDate}</span>
                  </div>
                  <CardTitle className="text-lg font-bold font-serif-title mt-1">
                    {activeProperty.address}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {activeProperty.businessName} · Taxkey {activeProperty.parcelKey}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 space-y-4 text-xs">
                  {/* Readiness & Rent */}
                  <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-muted/40 border border-border/40">
                    <div>
                      <span className="text-muted-foreground block text-[11px]">Readiness Tier</span>
                      <span className="font-bold text-foreground text-sm">Tier {activeProperty.tier}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block text-[11px]">Asking Rent / Term</span>
                      <span className="font-semibold text-foreground text-xs">{activeProperty.askingRent || "Negotiable"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block text-[11px]">Usable Area</span>
                      <span className="font-semibold text-foreground">{activeProperty.squareFeet.toLocaleString()} SF</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block text-[11px]">Seating Capacity</span>
                      <span className="font-semibold text-foreground">{activeProperty.seatingCapacity > 0 ? `${activeProperty.seatingCapacity} seats` : "N/A"}</span>
                    </div>
                  </div>

                  {/* Physical Checklist */}
                  <div className="space-y-2">
                    <span className="font-semibold text-muted-foreground block uppercase text-[10px] tracking-wider">
                      Commercial Kitchen Infrastructure
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1.5">
                        {activeProperty.kitchenInPlace ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        )}
                        <span>Commercial Kitchen</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {activeProperty.hoodAndVent ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        )}
                        <span>Hood & Make-up Air</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {activeProperty.greaseInterceptor ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        )}
                        <span>Grease Interceptor</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {activeProperty.priorFoodUse ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-muted-foreground" />
                        )}
                        <span>Prior F&B Use</span>
                      </div>
                    </div>
                  </div>

                  {/* Owner Appetite & Notes */}
                  <div className="space-y-2 pt-2 border-t border-border/40">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Owner Entity:</span>
                      <span className="font-medium text-foreground">{activeProperty.ownerName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Owner TI Willingness:</span>
                      <Badge variant="secondary" className="text-[10px]">
                        {activeProperty.ownerAppetiteTI} Appetite
                      </Badge>
                    </div>
                    <p className="p-2.5 rounded bg-card border border-border/60 text-muted-foreground italic">
                      "{activeProperty.notes}"
                    </p>
                  </div>

                  {/* Action Handoff Button */}
                  <div className="pt-2">
                    <Button className="w-full bg-primary text-primary-foreground font-semibold text-xs h-9">
                      Generate Approved Deal-Book Slip
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 12 Core Platform Modules Roadmap */}
        <section id="modules-section" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Architecture Specification</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-title">
                The 12 Core Platform Modules
              </h2>
            </div>
            <div className="text-xs text-muted-foreground max-w-sm">
              Organized into clear decision loops: survey discovery, readiness triage, recruitment deals, operator retention, and public body evaluation.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES_SPEC.map((mod) => (
              <Card key={mod.id} className="border-border/70 hover:border-accent/40 transition-shadow hover:shadow-md bg-card flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-accent">{mod.id}</span>
                    <Badge variant="outline" className="text-[10px]">
                      {mod.priority}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {mod.name}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground line-clamp-1">
                    Scope: {mod.target}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-3 pt-0">
                  <p className="line-clamp-3 leading-relaxed">{mod.outcome}</p>
                  <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-foreground">Status:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{mod.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Anti-Displacement & Governance Safeguards */}
        <section className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Public Body Fiduciary Standards
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-title">
                Governance, Conflict Disclosure & Anti-Displacement
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Because Historic King Drive BID No. 8 is a public body governed by mayoral appointments and Wisconsin Open Meetings laws, transparency is hard-coded into the digital operating architecture.
              </p>
              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Automated Affiliation Flags:</strong> When a board member or related entity holds an interest in an assessable parcel, the system flags it in both internal inventory and deal packets.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Recorded Recusals:</strong> Conflicted parties are systematically excluded from grant/capital reviews while creating an unalterable audit log.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>The Anti-Displacement Test:</strong> Metric reporting tracks net change among businesses open before the program began. A program adding six and losing four is classified as failing on its own terms.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-background/60 p-6 rounded-xl border border-border/60 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Mentor–Protégé Structural Models
              </h4>
              <p className="text-xs text-muted-foreground">
                Recruiting operators to King Drive as mentors with equity in a protégé’s business builds generational wealth without race-exclusive legal friction:
              </p>
              <ul className="space-y-2 text-xs">
                <li className="p-2 rounded bg-card border border-border/40">
                  <strong>1. Minority Equity + Management:</strong> Mentor takes 20–40%, provides systems/purchasing; protégé operates and buys out on schedule.
                </li>
                <li className="p-2 rounded bg-card border border-border/40">
                  <strong>2. License or Brand Extension:</strong> Protégé operates proven concept with a defined conversion pathway.
                </li>
                <li className="p-2 rounded bg-card border border-border/40">
                  <strong>3. Protégé-Operated Second Location:</strong> Mentor opens unit; protégé runs it with vesting equity.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Commercial CRE Data Evaluation: REDI vs Crexi */}
        <section id="provider-section" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Comparative Market Analysis</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-title">
                REDI CRE vs. Crexi Intelligence for BID Needs
              </h2>
            </div>
            <div className="text-xs text-muted-foreground max-w-sm">
              Evaluating which commercial real estate data platform best supplements the BID's internal field-survey baseline.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Crexi Evaluation */}
            <Card className="border-accent/40 bg-card shadow-sm">
              <CardHeader className="pb-3 border-b border-border/40">
                <div className="flex items-center justify-between">
                  <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-semibold">
                    Recommended Primary Source
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">Nationwide CRE Platform</span>
                </div>
                <CardTitle className="text-xl font-bold font-serif-title mt-1">Crexi Intelligence</CardTitle>
                <CardDescription className="text-xs">
                  Comprehensive commercial research, property comps, loan maturities, and owner contact enrichment.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                <div className="space-y-1.5">
                  <div className="font-semibold text-foreground">Why It Fits This BID Framework:</div>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>153M+ property records, 46M+ sales comps, and historical lease rate benchmarks.</li>
                    <li>Published debt/loan maturity insights to spot upcoming refinancing or disposition triggers.</li>
                    <li>Owner skip tracing & portfolio visibility to identify multi-property building owners on King Drive.</li>
                    <li>Client-ready Market Analytics report builder to generate customized submarket briefs for operators.</li>
                  </ul>
                </div>
                <div className="p-2.5 rounded bg-muted/40 border border-border/40 text-[11px]">
                  <strong>Integration Scope:</strong> Used for internal staff research and deal-book backing under Standard/Enterprise license terms.
                </div>
              </CardContent>
            </Card>

            {/* REDI Evaluation */}
            <Card className="border-border bg-card shadow-sm">
              <CardHeader className="pb-3 border-b border-border/40">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs font-semibold">
                    Potential Specialist Tool
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">MCP & Moody’s Partnership</span>
                </div>
                <CardTitle className="text-xl font-bold font-serif-title mt-1">REDI CRE (MCP Data)</CardTitle>
                <CardDescription className="text-xs">
                  On-demand AI queries and downloadable datasets for properties, owners, comps, and trends.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                <div className="space-y-1.5">
                  <div className="font-semibold text-foreground">Platform Characteristics & Nuances:</div>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>30+ years of CRE data with Moody's financial and CMBS loan intelligence.</li>
                    <li>MCP natural-language prompt interface with on-demand CSV dataset exports.</li>
                    <li>Public terms state exported data is for "internal needs"; no public programmatic API or redistribution license published.</li>
                    <li>Valuable as an analyst-query copilot if live demo confirms higher local Wisconsin fidelity.</li>
                  </ul>
                </div>
                <div className="p-2.5 rounded bg-muted/40 border border-border/40 text-[11px]">
                  <strong>Key Takeaway:</strong> Run a 25-address King Drive test with both sales teams before committing budget.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Phasing Roadmap */}
        <section className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Execution Phasing</div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-title">
                Three-Year Implementation Schedule
              </h2>
            </div>
            <div className="text-xs text-muted-foreground max-w-sm">
              Aligned with City of Milwaukee King Drive Corridor Plan deliverables due March 30, 2027.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl border border-border/60 bg-background/50 space-y-3">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary text-primary-foreground text-xs font-mono">Year 1 · 2027</Badge>
                <span className="text-xs font-semibold text-accent">Diagnose & Stabilize</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Program manager hired; corridor survey completed with UWM/Marquette.</li>
                <li>• Full readiness-tier classification and digital inventory live.</li>
                <li>• Operator stabilization fund opened; coordinated evening hours launched.</li>
                <li>• Time-critical: engage Tech Hub & Victory Lofts on 2028 ground-floor leasing.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-background/50 space-y-3">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary text-primary-foreground text-xs font-mono">Year 2 · 2028</Badge>
                <span className="text-xs font-semibold text-accent">Build & Incubate</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Multi-vendor Food Truck Park opens first season at 2323 N MLK (Pete’s).</li>
                <li>• Tier 2 kitchen infrastructure package conversions underway.</li>
                <li>• First mentor–protégé matches placed with legal structuring assistance.</li>
                <li>• Victory Lofts commercial kitchen joins incubation pathway.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-background/50 space-y-3">
              <div className="flex items-center justify-between">
                <Badge className="bg-primary text-primary-foreground text-xs font-mono">Year 3 · 2029</Badge>
                <span className="text-xs font-semibold text-accent">Land & Sustain</span>
              </div>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• First food truck vendors graduate to permanent storefront leases.</li>
                <li>• Destination restaurant lease signed; build-out commences.</li>
                <li>• Transition to BID-absorbed funding under revised assessment tier caps.</li>
                <li>• Final evaluation report submitted to GMF and Bader Philanthropies.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card/60 py-8 text-xs text-muted-foreground">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-bold text-foreground">Historic King Drive Business Improvement District No. 8</div>
            <div>1726 N. Dr. Martin Luther King Jr. Drive, Milwaukee, WI 53212</div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-muted-foreground/80">Draft Framework Implementation</span>
            <span>·</span>
            <span className="text-accent font-semibold">Pride and Promise</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
