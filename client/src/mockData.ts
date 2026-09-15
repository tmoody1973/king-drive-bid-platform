export type DemoCategory = "available" | "business" | "project";

export interface DemonstrationRecord {
  id: string;
  category: DemoCategory;
  title: string;
  reference: string;
  tier: "1A" | "1B" | "2" | "3" | "Not reviewed";
  status: string;
  size: string;
  foodServiceEvidence: string;
  evidenceCategory: "Field observation" | "Owner statement" | "Document-verified" | "Not reviewed";
  lastVerified: string;
  unresolvedQuestions: string;
  publicationStatus: string;
  description: string;
}

export const DEMONSTRATION_RECORDS: DemonstrationRecord[] = [
  {
    id: "DEMO-AVAILABLE-01",
    category: "available",
    title: "Illustrative vacant food-service space",
    reference: "Sample storefront A · King Drive corridor",
    tier: "1B",
    status: "Kitchen in place subject to verification",
    size: "Illustrative only",
    foodServiceEvidence: "Supplied equipment evidence shown in the sample record; capacity and compliance are unknown.",
    evidenceCategory: "Owner statement",
    lastVerified: "Not verified — demonstration only",
    unresolvedQuestions: "Current availability, lease terms, hood capacity, grease interceptor condition, licenses, zoning, and owner authorization.",
    publicationStatus: "Would require owner/broker approval before release",
    description: "This fictional record demonstrates how the BID can package a possible fast-fill opportunity while keeping unknowns visible.",
  },
  {
    id: "DEMO-AVAILABLE-02",
    category: "available",
    title: "Illustrative updated storefront",
    reference: "Sample storefront B · King Drive corridor",
    tier: "2",
    status: "Food-service build-out would require review",
    size: "Illustrative only",
    foodServiceEvidence: "No kitchen evidence supplied in this demonstration.",
    evidenceCategory: "Field observation",
    lastVerified: "Not verified — demonstration only",
    unresolvedQuestions: "Utility capacity, ventilation, fire suppression, rent, tenant-improvement participation, and project feasibility.",
    publicationStatus: "Internal review only",
    description: "This fictional record shows how a space can be identified for owner engagement and kitchen-package estimation without calling it ready.",
  },
  {
    id: "DEMO-BUSINESS-01",
    category: "business",
    title: "Illustrative occupied food business",
    reference: "Sample business record · King Drive corridor",
    tier: "1A",
    status: "Occupied context record — not a relocation listing",
    size: "Illustrative only",
    foodServiceEvidence: "Demonstration-only food-service context.",
    evidenceCategory: "Not reviewed",
    lastVerified: "Not verified — demonstration only",
    unresolvedQuestions: "Operating status, owner consent, support needs, and any space expansion interest.",
    publicationStatus: "Not a public listing",
    description: "This fictional record demonstrates that current businesses belong in the internal corridor inventory but are not offered as available spaces.",
  },
  {
    id: "DEMO-PROJECT-01",
    category: "project",
    title: "Illustrative future ground-floor project",
    reference: "Sample project record · King Drive corridor",
    tier: "Not reviewed",
    status: "Future project — timing and tenanting not confirmed",
    size: "Illustrative only",
    foodServiceEvidence: "No evidence of food-service infrastructure in this demonstration.",
    evidenceCategory: "Not reviewed",
    lastVerified: "Not verified — demonstration only",
    unresolvedQuestions: "Delivery date, ground-floor configuration, operator criteria, site control, infrastructure, and leasing authority.",
    publicationStatus: "Internal development tracking only",
    description: "This fictional record demonstrates how the BID can track future projects early without presenting them as current availability.",
  },
];

export const BASELINE_CONTEXT = [
  { value: "126", label: "assessable parcels", context: "Draft framework baseline · defined King Drive corridor" },
  { value: "732,814 SF", label: "commercial area", context: "Draft framework baseline · not current available space" },
  { value: "14", label: "F&B anchors", context: "Draft framework baseline · requires ongoing verification" },
  { value: "27.6%", label: "households without a car", context: "Draft framework baseline · source/period to confirm" },
];

export const DOWNLOADS = [
  { group: "Board packet", name: "King_Drive_BID_Board_Submission_Packet.docx" },
  { group: "Proposal documents", name: "King_Drive_Two_Page_Project_Proposal.docx" },
  { group: "Proposal documents", name: "King_Drive_Q1_2027_Project_Proposal.docx" },
  { group: "Proposal documents", name: "King_Drive_MVP_Proposal_Cover_Letter.docx" },
  { group: "Feature and product requirements", name: "King_Drive_Platform_Feature_Specification_Addendum.docx" },
  { group: "Feature and product requirements", name: "King_Drive_MVP_Product_Requirements.docx" },
  { group: "Feature and product requirements", name: "King_Drive_Q1_2027_Product_Requirements.docx" },
  { group: "Data and vendor review", name: "King_Drive_REDI_CRE_Addendum_WITH_SCREENSHOT.docx" },
  { group: "Data and vendor review", name: "King_Drive_Off_the_Shelf_Software_Assessment.docx" },
];
