import {
  Building2,
  ClipboardCheck,
  FileCheck2,
  HandCoins,
  Handshake,
  MapPinned,
  ShieldCheck,
  Store,
  TrendingUp,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ProductModule = {
  id: string;
  title: string;
  formalName: string;
  phase: string;
  users: string;
  icon: LucideIcon;
  purpose: string;
  features: string[];
  success: string;
};

export type Workstream = {
  id: string;
  label: string;
  description: string;
  modules: ProductModule[];
};

export const PRODUCT_WORKSTREAMS: Workstream[] = [
  {
    id: "inventory",
    label: "Inventory & readiness",
    description: "Know every storefront, what condition it is in, and the next practical step.",
    modules: [
      {
        id: "01",
        title: "Corridor map & master inventory",
        formalName: "Parcel registry, storefront inventory & map",
        phase: "Phase 1 · Q1 2027",
        users: "BID staff, field teams, Board reviewers",
        icon: MapPinned,
        purpose: "Create one reliable record for every parcel, building, storefront, business, and planned project between Walnut and Keefe.",
        features: [
          "Search by address, tax key, building, business, owner, vacancy, readiness tier, or staff assignment.",
          "Show parcels, storefronts, key institutions, transit, parking, planned development, and food-and-beverage locations on one map.",
          "Keep the history of openings, closures, re-openings, and changes in use instead of overwriting the record.",
          "Store photos, floor plans, permits, flyers, broker materials, inspection notes, and approved public materials.",
          "Show a source, source date, reviewer, and last-verified date for every important record.",
        ],
        success: "Staff can locate every surveyed commercial space and create a Board-ready inventory export.",
      },
      {
        id: "02",
        title: "Mobile storefront survey",
        formalName: "Field survey & quality-control workflow",
        phase: "Phase 1 · Q1 2027",
        users: "Student practicum teams and BID staff",
        icon: ClipboardCheck,
        purpose: "Make it easy to collect consistent, visual, field-verified information rather than relying on assumptions or old listings.",
        features: [
          "Use a phone or tablet form with property selection, address lookup, photos, timestamp, and surveyor name.",
          "Capture occupancy, kitchen infrastructure, signage, frontage, accessibility, seating, loading, lighting, and visible constraints.",
          "Separate what a surveyor observed from what an owner reported and what a document or agency record verifies.",
          "Apply required fields and simple validity checks before a survey is submitted.",
          "Send every update to a BID review queue; flag places needing an annual resurvey.",
        ],
        success: "A supervisor can review the evidence behind every change before it becomes a verified inventory record.",
      },
      {
        id: "03",
        title: "Readiness tiers & activation pipeline",
        formalName: "Tier 1A, 1B, 2, and 3 decision system",
        phase: "Phase 1 · Q1 2027",
        users: "BID program manager, owners, recruitment partners",
        icon: Store,
        purpose: "Use a shared way to decide whether a space needs retention support, quick recruitment, kitchen investment, or long-term redevelopment.",
        features: [
          "Assign a tier with a reason, evidence, assessor, review date, and approval status.",
          "Track hood, make-up air, fire suppression, grease interceptor, gas, power, water, drains, storage, restrooms, loading, and ADA conditions.",
          "Record zoning, food and liquor-license history, permit questions, rent, lease flexibility, and owner tenant-improvement appetite.",
          "Turn each tier into a next-action list with a responsible person, due date, and required documents.",
          "Move spaces through a pipeline: unverified, surveyed, tiered, owner contacted, package-ready, marketed, letter of intent, build-out, occupied, or lost.",
        ],
        success: "The BID can identify Tier 1B fast-fill spaces and measure Tier 2 spaces converted into restaurant-ready spaces.",
      },
    ],
  },
  {
    id: "recruitment",
    label: "Recruitment & retention",
    description: "Bring the right people together while protecting the businesses already on King Drive.",
    modules: [
      {
        id: "04",
        title: "Owner, developer & partner engagement",
        formalName: "Relationship, outreach & project tracker",
        phase: "Phase 1–2 · 2027",
        users: "BID program manager and authorized partners",
        icon: Users,
        purpose: "Coordinate the conversations that decide whether a space can be activated and whether future development serves the corridor strategy.",
        features: [
          "Maintain a secure directory of owners, managing agents, brokers, developers, institutions, lenders, and restaurant operators.",
          "Show every organization’s relationship to a property: owner, manager, broker, developer, tenant, or operator.",
          "Log calls, site visits, emails, commitments, referrals, tasks, and follow-up dates.",
          "Use a structured owner interview on rent, tenant-improvement interest, flexibility, food-service history, utilities, incentives, and pop-up willingness.",
          "Track Victory Lofts, Bronzeville Tech Hub, ThriveOn King, and other pipeline projects before 2028 tenanting decisions are made.",
        ],
        success: "The program manager can see uncontacted priority owners and take a clear weekly action list into meetings.",
      },
      {
        id: "05",
        title: "Deal book & approved opportunity portal",
        formalName: "Recruitment package and operator intake",
        phase: "Phase 2 · 2027",
        users: "Operators, brokers, owners, recruitment partners",
        icon: FileCheck2,
        purpose: "Turn verified, suitable spaces into clear packages a prospective operator can understand without seeing private BID records.",
        features: [
          "Choose exactly which spaces are approved for recruitment marketing.",
          "Create a branded one-page deal sheet with approved photos, dimensions, utilities, license status, incentives, neighborhood facts, and documents.",
          "Set audience level: internal draft, broker only, invited operator, or public-approved.",
          "Automatically remove private owner contacts, Board affiliations, unverified claims, financial notes, and internal comments from shared versions.",
          "Let an operator request a tour, ask a diligence question, or submit a concept; track interest through lease and opening.",
        ],
        success: "The BID can prepare a recruitment package without rebuilding information in email, slides, and spreadsheets.",
      },
      {
        id: "06",
        title: "Existing-operator support workspace",
        formalName: "Retention, stabilization & confidential support cases",
        phase: "Phase 2 · 2027",
        users: "BID program manager and restaurant operations consultant",
        icon: Handshake,
        purpose: "Give current businesses confidential, practical assistance without treating every closure or business change as the same kind of failure.",
        features: [
          "Classify an operator as stable, at risk, transitioning, expanding, pursuing succession, or closed.",
          "Securely track voluntary diagnostics: sales, food and labor costs, occupancy cost, delivery fees, hours, staffing, working capital, vendors, and equipment.",
          "Build support plans for menu pricing, scheduling, vendor terms, shared purchasing, delivery margins, bookkeeping, POS coaching, and succession.",
          "Run a stabilization-capital application, review, award, agreement, reporting, and closeout workflow.",
          "Share only aggregate benchmarks with the Board or funders; protect individual business financial information.",
        ],
        success: "The BID can document support delivered and measure whether businesses open at program start remain open over time.",
      },
    ],
  },
  {
    id: "growth",
    label: "Growth & capital",
    description: "Create pathways from an idea to a food truck, pop-up, storefront, and owned business.",
    modules: [
      {
        id: "07",
        title: "Mentor–protégé program",
        formalName: "Operator recruitment, matching & ownership pathway",
        phase: "Phase 2 · 2027",
        users: "Established operators, emerging operators, BID program manager",
        icon: Handshake,
        purpose: "Pair a proven operator with emerging talent before a lease is signed, so the relationship helps build a durable locally owned business.",
        features: [
          "Create separate mentor, protégé, and prospective-operator profiles with readiness, concept, capital, training, and location preferences.",
          "Match participants using a documented rationale based on operating experience, concept fit, ownership goals, capacity, and site needs.",
          "Support minority equity plus management, brand license, protégé-operated second location, or shared-services-only structures.",
          "Track introductions, legal/accounting support, operating agreement, capital plan, site selection, lease, opening, equity vesting, and graduation.",
          "Require conflict and related-party disclosure before BID support goes to a transaction.",
        ],
        success: "The BID can show matches began before site selection and can measure graduation to independent ownership.",
      },
      {
        id: "08",
        title: "Food truck & pop-up manager",
        formalName: "Incubation, activation & vendor progression",
        phase: "Phase 3 · 2028",
        users: "Vendors, BID staff, site owners, community partners",
        icon: Truck,
        purpose: "Run the food-truck park and Tier 1B pop-ups as a real feeder system for permanent storefronts, not only as events.",
        features: [
          "Evaluate sites for zoning, site control, electric, water, wastewater, grease/refuse, restrooms, ADA access, winter structures, insurance, and liquor-license path.",
          "Collect vendor applications with menus, licenses, insurance, commissary use, operating record, availability, and capacity.",
          "Curate complementary menus, assign stalls, manage an operating calendar, and track fees and compliance.",
          "Schedule pop-ups in kitchen-ready storefronts and record attendance, self-reported sales, marketing, and next steps.",
          "Track a vendor’s progression: pop-up, shared truck, stall, Tier 1B storefront, then independent ownership.",
        ],
        success: "The BID can report vendor-stall occupancy and demonstrate how vendors graduate into permanent leases.",
      },
      {
        id: "09",
        title: "Demand & market evidence dashboard",
        formalName: "Trade area, corridor demand & comparison workspace",
        phase: "Phase 3 · 2028",
        users: "BID leadership, operators, funders, planning partners",
        icon: TrendingUp,
        purpose: "Explain the market honestly, including who lives and works nearby, what they can spend, and how 2028 development changes the picture.",
        features: [
          "Define corridor core, walk-time, drive-time, census tract, block group, ZIP, and custom trade areas.",
          "Display population, households, income bands, car access, age, education, mobility, employment, and demand estimates with dates and geography labels.",
          "Track institutional visitors, students, patients, events, catering demand, and other daytime activity that employment counts miss.",
          "Import licensed retail-gap or foot-traffic data when available; label all assumptions and source dates.",
          "Keep current demand separate from 2028 pipeline demand, so a 2027 operator is not asked to underwrite future residents as if they are here today.",
        ],
        success: "Every chart names its source, time period, geography, and refresh date; users can compare today with 2028 conditions.",
      },
      {
        id: "10",
        title: "Incentives & capital tracker",
        formalName: "Capital stack, grant workflow & destination restaurant predevelopment",
        phase: "Phase 2–3 · 2027–28",
        users: "BID leadership, applicants, funders, consultants",
        icon: HandCoins,
        purpose: "Match each project to the right source of support and show the actual cost of moving a space or operator forward.",
        features: [
          "Maintain City, County, State, BID, philanthropic, façade, signage, storefront, white-box, and retail-investment program rules.",
          "Record eligibility, geographic limits, deadlines, matching requirements, stacking rules, and award caps.",
          "Build a capital stack for tenant improvements, kitchen equipment, working capital, legal/accounting, feasibility, marketing, and operating reserves.",
          "Compare vendor quotes for a standard kitchen package: hood, make-up air, fire suppression, grease interceptor, and service upgrades.",
          "Track destination-restaurant concept, sites, feasibility, operator search, lease negotiation, financing, and build-out milestones.",
        ],
        success: "A Board member can understand a project’s funding gap, incentives, commitments, and next decision without rebuilding the capital stack from emails.",
      },
    ],
  },
  {
    id: "governance",
    label: "Governance & results",
    description: "Protect public trust and report whether the strategy is achieving its purpose.",
    modules: [
      {
        id: "11",
        title: "Governance, conflicts & approvals",
        formalName: "Public body safeguards and audit trail",
        phase: "Phase 1 · Q1 2027",
        users: "Board, staff, consultants, decision-makers",
        icon: ShieldCheck,
        purpose: "Make disclosures, recusals, approvals, and record sharing visible as part of the workflow—not an afterthought.",
        features: [
          "Keep Board, committee, staff, vendor, applicant, owner, and related-entity relationships in a controlled registry.",
          "Require disclosure of a property or financial interest, flag affected inventory and deal-book records, and preserve the resolution.",
          "Apply recusal rules before capital awards, deal-book releases, mentor–protégé support, contracts, and major site decisions.",
          "Create decision packets with conditions, meeting outcomes, and follow-up actions.",
          "Maintain an immutable log of changes to tiers, ownership data, approvals, permissions, financial decisions, shares, and exports.",
        ],
        success: "A conflicted reviewer cannot quietly participate or remove an affiliation flag; the BID can show the full decision record when needed.",
      },
      {
        id: "12",
        title: "Metrics, evaluation & reporting",
        formalName: "Anti-displacement scorecard and funder reporting",
        phase: "Phase 1 · Q1 2027, then ongoing",
        users: "Board, funders, BID leadership, civic partners",
        icon: Building2,
        purpose: "Measure both new activity and stability, so success is not defined by new openings alone.",
        features: [
          "Freeze the baseline roster of food-and-beverage businesses and the first inventory-survey date.",
          "Track F&B establishments, net change among pre-program businesses, vacancy, Tier 2-to-1 conversions, matches, graduations, jobs, pop-ups, stalls, and assessment revenue.",
          "Define the numerator, denominator, source, period, owner, and caveat for every metric.",
          "Produce quarterly operations dashboards plus Board, funder, recruitment, and corridor-plan reports at the right confidentiality level.",
          "Show data-quality gaps: missing records, stale verification, possible duplicates, overdue tasks, and pending approvals.",
        ],
        success: "The BID can report the anti-displacement test from a locked baseline and share aggregate results without exposing private business information.",
      },
    ],
  },
];

export const BUILD_BOUNDARIES = {
  buildNow: [
    "Internal parcel and storefront inventory",
    "Mobile field survey with staff review",
    "Readiness tiers and action pipeline",
    "Owner and partner follow-up tracker",
    "Governance flags and Board-ready baseline scorecard",
  ],
  buildNext: [
    "Approved deal book and operator intake",
    "Existing-operator retention support cases",
    "Mentor–protégé matching and capital stack tracker",
  ],
  buildLater: [
    "Food truck and pop-up manager",
    "Advanced market evidence dashboard",
    "Limited public opportunity finder after verified approvals",
  ],
};
