import type {
  CompanyInfo,
  Dealer,
  NavItem,
  Product,
  Promotion,
  TeamMember,
} from "@/types";

export const companyInfo: CompanyInfo = {
  name: "DUNCANTECHNOFAB CAMICALS",
  tagline: "Manufacturing Company",
  description:
    "DUNCANTECHNOFAB CAMICALS Manufacturing Company is a trusted leader in high-quality chemical manufacturing, delivering industrial solutions with precision, safety, and professional excellence across India.",
  address: "Industrial Area, Kundli",
  city: "Sonipat",
  state: "Haryana",
  country: "India",
  pincode: "131028",
  hrContacts: [
    { name: "HR Consultant", phone: "7988463330" },
    { name: "HR Consultant", phone: "9812427147" },
  ],
  founded: "2010",
  employees: "200+",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Dealers", href: "/dealers" },
  { label: "Promotions", href: "/promotions" },
  { label: "Contact", href: "/contact" },
];

export const products: Product[] = [
  {
    id: "polymer-resins",
    name: "Polymer Resins",
    category: "Resins & Polymers",
    description:
      "High-performance industrial polymer resins engineered for superior bonding strength, thermal stability, and chemical resistance.",
    details:
      "Our polymer resin range includes epoxy, polyester, and vinyl ester systems designed for demanding industrial applications. Formulated for consistency, these resins offer excellent adhesion, UV stability, and long service life.",
    applications: [
      "Composite manufacturing",
      "Surface coatings",
      "Adhesives & sealants",
      "Industrial laminates",
    ],
    specifications: {
      Viscosity: "500–5000 mPa·s",
      "Cure Time": "4–24 hours",
      "Tensile Strength": "55–80 MPa",
      "Temperature Range": "-20°C to 180°C",
    },
    image: "https://picsum.photos/seed/PolymerResins/800/500",
    badge: "Bestseller",
  },
  {
    id: "specialty-catalysts",
    name: "Specialty Catalysts",
    category: "Catalysts",
    description:
      "Precision-engineered specialty catalysts that accelerate industrial chemical reactions with maximum selectivity and yield.",
    details:
      "Our catalyst solutions are tailored for petrochemical processing, polymerization, and fine chemical synthesis. Available in powder, granule, and liquid forms for diverse reactor configurations.",
    applications: [
      "Petrochemical refining",
      "Polymerization reactions",
      "Hydrogenation processes",
      "Oxidation catalysis",
    ],
    specifications: {
      "Active Phase": "Metal oxide / noble metal",
      "Surface Area": "150–400 m²/g",
      "Particle Size": "1–5 mm",
      "Operating Temp": "100°C to 600°C",
    },
    image: "https://picsum.photos/seed/SpecialtyCatalysts/800/500",
    badge: "New",
  },
  {
    id: "protective-coatings",
    name: "Protective Coatings",
    category: "Coatings & Finishes",
    description:
      "Industrial-grade protective coatings delivering unmatched corrosion resistance, mechanical durability, and surface protection.",
    details:
      "From epoxy floor coatings to anti-corrosion marine paints, our protective coating systems meet the most demanding industrial standards. Solvent-based and water-based options available.",
    applications: [
      "Steel structure protection",
      "Industrial flooring",
      "Pipeline coatings",
      "Marine applications",
    ],
    specifications: {
      "DFT Range": "50–500 microns",
      Adhesion: ">5 MPa pull-off",
      "Salt Spray": ">1000 hours",
      "VOC Content": "<250 g/L",
    },
    image: "https://picsum.photos/seed/ProtectiveCoatings/800/500",
  },
  {
    id: "industrial-solvents",
    name: "Industrial Solvents",
    category: "Solvents & Thinners",
    description:
      "High-purity industrial solvents for cleaning, degreasing, paint thinning, and chemical processing applications.",
    details:
      "Our solvent portfolio covers aliphatic, aromatic, ketone, and ester types. Produced under strict quality control, each solvent meets industry purity standards for reliable performance.",
    applications: [
      "Paint & coating thinning",
      "Metal degreasing",
      "Pharmaceutical processing",
      "Electronic component cleaning",
    ],
    specifications: {
      Purity: "99.5%+",
      Moisture: "<0.05%",
      "Flash Point": "-20°C to 80°C",
      "Boiling Range": "60°C to 250°C",
    },
    image: "https://picsum.photos/seed/IndustrialSolvents/800/500",
  },
  {
    id: "adhesives-sealants",
    name: "Adhesives & Sealants",
    category: "Adhesives",
    description:
      "Professional-grade industrial adhesives and sealants offering high-strength bonding for metals, plastics, composites, and concrete.",
    details:
      "Engineered for structural, flexible, and semi-rigid bonding requirements. Our adhesive systems include epoxy, polyurethane, and MS polymer technologies for interior and exterior applications.",
    applications: [
      "Structural bonding",
      "Weatherproofing & sealing",
      "Automotive assembly",
      "Construction joints",
    ],
    specifications: {
      "Shear Strength": "10–25 MPa",
      Elongation: "50–400%",
      "Temp Resistance": "-40°C to 200°C",
      "Cure Type": "1-part / 2-part",
    },
    image: "https://picsum.photos/seed/AdhesivesSealants/800/500",
  },
  {
    id: "water-treatment",
    name: "Water Treatment Chemicals",
    category: "Water Treatment",
    description:
      "Comprehensive water treatment chemical solutions for industrial cooling towers, boilers, effluent treatment, and RO systems.",
    details:
      "Our water treatment range includes scale inhibitors, biocides, coagulants, flocculants, and pH adjusters. Formulated for effective treatment at low dosage rates with environmentally responsible chemistry.",
    applications: [
      "Cooling tower treatment",
      "Boiler water conditioning",
      "Effluent treatment",
      "Potable water purification",
    ],
    specifications: {
      "pH Range": "2–12",
      "Dosage Rate": "5–100 ppm",
      Form: "Liquid / Powder",
      "Pack Size": "25 kg / 50 kg / 200 L",
    },
    image: "https://picsum.photos/seed/WaterTreatment/800/500",
    badge: "Eco-Friendly",
  },
];

export const promotions: Promotion[] = [
  {
    id: "bulk-discount-2026",
    title: "Bulk Order Discount — Up to 18% Off",
    description:
      "Order 5 MT or more of any Polymer Resin or Protective Coating product and receive an 18% discount. Valid for all registered dealers and distributors across India.",
    validUntil: "31 March 2027",
    discount: "18%",
    badge: "Limited Time",
    bannerImage: "https://picsum.photos/seed/bulk-discount-2026/800/300",
  },
  {
    id: "new-dealer-offer",
    title: "New Dealer Welcome Package",
    description:
      "New dealers receive a complimentary starter kit including product samples, marketing materials, and a 10% introductory discount on their first three orders.",
    validUntil: "31 December 2026",
    discount: "10%",
    badge: "New Dealers",
    bannerImage: "https://picsum.photos/seed/new-dealer-offer/800/300",
  },
  {
    id: "catalyst-launch",
    title: "Specialty Catalysts — Launch Offer",
    description:
      "Celebrate the launch of our new Specialty Catalysts range with exclusive pricing. Get trial quantities at a flat 15% introductory rate for qualified industrial buyers.",
    validUntil: "30 June 2026",
    discount: "15%",
    badge: "New Product",
    bannerImage: "https://picsum.photos/seed/catalyst-launch/800/300",
  },
  {
    id: "water-treatment-bundle",
    title: "Water Treatment Bundle Deal",
    description:
      "Purchase our complete water treatment package — scale inhibitor, biocide, and coagulant — at a bundled rate with free technical support and on-site dosing consultation.",
    validUntil: "30 September 2026",
    discount: "Bundle Savings",
    badge: "Bundle",
    bannerImage: "https://picsum.photos/seed/water-treatment-bundle/800/300",
  },
];

export const dealers: Dealer[] = [
  {
    id: "d1",
    name: "Haryana Chemical Distributors",
    region: "Haryana",
    address: "Plot 45, Industrial Estate, Panipat, Haryana 132103",
    phone: "0180-2642100",
    email: "sales@haryanachemdist.in",
    type: "Authorized Distributor",
    photo:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=HaryanaChemicalDistributors",
  },
  {
    id: "d2",
    name: "Delhi Industrial Supplies",
    region: "Delhi NCR",
    address: "B-214, Okhla Industrial Area Phase-I, New Delhi 110020",
    phone: "011-26818800",
    email: "info@delhiindustrial.in",
    type: "Authorized Dealer",
    photo:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=DelhiIndustrialSupplies",
  },
  {
    id: "d3",
    name: "Punjab Chemicals & Coatings",
    region: "Punjab",
    address: "SCO 22-23, Sector 35-B, Chandigarh 160022",
    phone: "0172-2602150",
    email: "contact@punjabchemcoat.in",
    type: "Authorized Distributor",
    photo:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=PunjabChemicalsCoatings",
  },
  {
    id: "d4",
    name: "Rajasthan Industrial Hub",
    region: "Rajasthan",
    address: "D-25, Malviya Industrial Area, Jaipur, Rajasthan 302017",
    phone: "0141-2750311",
    email: "info@rajindustrialhub.in",
    type: "Authorized Dealer",
    photo:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=RajasthanIndustrialHub",
  },
  {
    id: "d5",
    name: "UP Chemicals Network",
    region: "Uttar Pradesh",
    address: "A-47, Site IV, Sahibabad Industrial Area, Ghaziabad, UP 201010",
    phone: "0120-2770899",
    email: "sales@upchemnet.in",
    type: "Authorized Dealer",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=UPChemicalsNetwork",
  },
  {
    id: "d6",
    name: "Himachal Specialty Chemicals",
    region: "Himachal Pradesh",
    address: "Baddi Industrial Area, Solan District, HP 173205",
    phone: "01795-244100",
    email: "contact@himspechem.in",
    type: "Authorized Distributor",
    photo:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=HimachalSpecialtyChemicals",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Rajesh Kumar",
    role: "Managing Director",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=RajeshKumar",
  },
  {
    id: "tm2",
    name: "Priya Sharma",
    role: "Head of R&D",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaSharma",
  },
  {
    id: "tm3",
    name: "Vikram Singh",
    role: "Operations Manager",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=VikramSingh",
  },
  {
    id: "tm4",
    name: "Anjali Mehta",
    role: "Sales Director",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnjaliMehta",
  },
];
