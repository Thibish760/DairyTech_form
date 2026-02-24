export interface Service {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  price: string;
  image: string;
  description: string;
  keyFeatures?: string[];
  specifications?: string[];
  applications?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Constructing Farm House",
    subtitle: "Complete Large-Scale Farm House Construction",
    category: "Farm Management",
    price: "₹2,00,000",
    image: "/image-352.png",
    description: "Building The Complete Farm House In Large Scale with modern agricultural infrastructure",
    keyFeatures: [
      "Robust And Weather-Resistant Structural Design",
      "Spacious Layouts For Livestock, Storage, And Operations",
      "Ventilation And Climate-Friendly Architecture",
      "Integrated Water Supply And Drainage Systems",
      "Electrical And Automation-Ready Infrastructure",
      "Hygienic And Easy-To-Maintain Flooring Solutions",
      "Customizable Design Based On Farm Scale And Purpose",
      "Eco-Friendly And Sustainable Construction Options"
    ],
    specifications: [
      "Foundation: Reinforced concrete with proper waterproofing",
      "Roofing: High-quality metal or RCC slab",
      "Ventilation: Cross-ventilation system with turbo ventilators",
      "Flooring: Sloped concrete with proper drainage",
      "Capacity: Suitable for 50-200 cattle",
      "Construction Time: 3-6 months depending on size",
      "Material: Premium quality cement, steel, and aggregates"
    ],
    applications: [
      "Dairy farming facilities with modern amenities",
      "Multi-purpose livestock housing",
      "Feed storage integration",
      "Veterinary health management zones",
      "Milking parlor setup"
    ]
  },
  {
    id: 2,
    title: "Cleaning Farm House",
    subtitle: "Professional Maintenance & Hygiene Services",
    category: "Farm Management",
    price: "₹50,000",
    image: "/image-351.png",
    description: "Professional Cleaning Services For Farm Houses ensuring optimal hygiene and health standards",
    keyFeatures: [
      "Deep Cleaning Of Sheds And Stalls",
      "Disinfection Of All Surfaces",
      "Regular Maintenance Schedules",
      "Waste Management Solutions",
      "Quarterly Deep Cleaning Programs",
      "Professional Grade Cleaning Equipment",
      "Eco-Friendly Cleaning Agents",
      "Health And Safety Compliance"
    ],
    specifications: [
      "Service Frequency: Weekly, Monthly, or Quarterly",
      "Coverage Area: Up to 5000 sq meters per session",
      "Team Size: 2-5 professionals depending on requirement",
      "Equipment: Industrial-grade pressure washers and sanitizers",
      "Duration: 2-4 hours per session",
      "Disinfectants: Veterinary approved solutions",
      "Waste Disposal: Proper segregation and disposal methods"
    ],
    applications: [
      "Maintaining disease-free environment",
      "Improving milk quality and hygiene standards",
      "Preventing bacterial and viral infections",
      "Compliance with dairy farm regulations",
      "Employee health and safety"
    ]
  },
  {
    id: 3,
    title: "Maintaining Farm House",
    subtitle: "Regular Maintenance & Repair Services",
    category: "Farm Management",
    price: "₹1,50,000",
    image: "/image-353.png",
    description: "Regular Maintenance To Keep Farm Houses In Top Condition with preventive care approach",
    keyFeatures: [
      "Structural Inspection & Assessment",
      "Roof Maintenance & Repair",
      "Flooring Restoration",
      "Drainage System Cleaning",
      "Electrical System Maintenance",
      "Equipment Servicing",
      "Paint & Protective Coating",
      "24/7 Emergency Support"
    ],
    specifications: [
      "Inspection Frequency: Quarterly or as needed",
      "Response Time: 24-48 hours for emergency repairs",
      "Warranty: 1 year on all repair work",
      "Materials: Quality spares and construction materials",
      "Documentation: Detailed maintenance records",
      "Team: Certified technicians and engineers",
      "Tools & Equipment: Complete maintenance toolkit"
    ],
    applications: [
      "Preventive maintenance to extend farm life",
      "Quick repairs during monsoon or extreme weather",
      "Structural reinforcement when needed",
      "Equipment replacement and upgrade",
      "Seasonal preparation and maintenance"
    ]
  },
  {
    id: 4,
    title: "Dairy Farm Setup",
    subtitle: "Complete Dairy Farm Installation & Setup",
    category: "Farm Management",
    price: "₹5,00,000",
    image: "/image-349.png",
    description: "Complete setup and installation of modern dairy farming infrastructure from ground zero",
    keyFeatures: [
      "Comprehensive Site Planning & Layout Design",
      "Construction Of Cow Sheds And Facilities",
      "Milking Parlor Installation",
      "Milk Storage & Cooling System",
      "Feed Storage Infrastructure",
      "Water Management System",
      "Waste Management & Biogas Plant",
      "Veterinary Health Center Setup"
    ],
    specifications: [
      "Capacity: 30-150 cattle units",
      "Land Requirement: 1-3 acres depending on capacity",
      "Construction Period: 6-12 months",
      "Infrastructure Cost: Included in package",
      "Machinery & Equipment: Complete set provided",
      "Post-Setup Training: 2-3 weeks for staff",
      "Maintenance Warranty: 2 years premium support"
    ],
    applications: [
      "Starting new dairy farm business",
      "Upgrading existing farm infrastructure",
      "Commercial dairy production setup",
      "Cooperative dairy farm establishment",
      "Modern farming transition support"
    ]
  },
  {
    id: 5,
    title: "Fodder Management System",
    subtitle: "Complete Feed Production & Storage Solution",
    category: "Farm Management",
    price: "₹2,50,000",
    image: "/image-352.png",
    description: "Comprehensive fodder production and management system for year-round nutritious feed supply",
    keyFeatures: [
      "Hydroponic Fodder System",
      "Green Fodder Cultivation Setup",
      "Silage Production Equipment",
      "Storage Infrastructure",
      "Irrigation System Integration",
      "Nutritional Monitoring",
      "Quality Testing Equipment",
      "Expert Consultation Services"
    ],
    specifications: [
      "Daily Fodder Production: 500-2000 kg capacity",
      "Space Requirement: 1000-2000 sq feet",
      "Initial Setup Cost: Included",
      "Maintenance Period: 6 months technical support",
      "Training: Comprehensive staff training included",
      "Water Requirement: 500-1000 liters per day",
      "ROI Timeline: 12-18 months"
    ],
    applications: [
      "Meeting year-round fodder requirements",
      "Reducing feed costs by 40-60%",
      "Improving cattle health and milk production",
      "Sustainable farming practices",
      "Self-sufficiency in feed production"
    ]
  },
  {
    id: 6,
    title: "Veterinary Health Center",
    subtitle: "Complete Veterinary Facility Setup & Services",
    category: "Farm Management",
    price: "₹3,50,000",
    image: "/image-351.png",
    description: "Comprehensive veterinary healthcare facility with diagnostic and treatment capabilities",
    keyFeatures: [
      "Modern Diagnostic Equipment",
      "Surgical Suite Setup",
      "In-House Laboratory",
      "Pharmacy & Medicine Storage",
      "Isolation Ward For Sick Animals",
      "Professional Veterinary Staff",
      "24/7 Emergency Consultation",
      "Digital Health Records System"
    ],
    specifications: [
      "Facility Size: 500-1000 sq feet",
      "Equipment: Ultrasound, digital X-ray, blood analyzer",
      "Staffing: 2-4 veterinarians + support staff",
      "Capacity: 20-50 animal consultations daily",
      "Operating Hours: 24/7 with on-call service",
      "Medicine Stock: Comprehensive pharmacy",
      "Record System: Digital + Physical backup"
    ],
    applications: [
      "Preventive health monitoring",
      "Disease diagnosis and treatment",
      "Vaccination and immunization programs",
      "Reproductive health management",
      "Emergency animal care services"
    ]
  },
  {
    id: 7,
    title: "Premium Cattle Feed",
    subtitle: "Nutritionally Balanced High-Quality Feed",
    category: "Cow Food",
    price: "₹5,000",
    image: "/image-352.png",
    description: "Premium quality cattle feed designed to enhance milk production and animal health",
    keyFeatures: [
      "Balanced Nutritional Composition",
      "High Protein & Vitamin Content",
      "Improved Milk Yield By 15-20%",
      "Enhanced Cow Health",
      "No Harmful Additives",
      "Palatability Optimized",
      "Cost-Effective Formula",
      "Veterinary Approved"
    ],
    specifications: [
      "Protein Content: 18-22%",
      "Fat Content: 3-5%",
      "Fiber Content: 8-12%",
      "Packaging: 50 kg bags",
      "Shelf Life: 6 months",
      "Storage: Cool & dry place",
      "Delivery: Bulk orders available"
    ],
    applications: [
      "Daily feeding for dairy cattle",
      "Lactating cow nutrition",
      "Calf growth supplement",
      "Mineral & vitamin supplementation",
      "Breeding cow nutrition"
    ]
  },
  {
    id: 8,
    title: "Mineral Supplement Mix",
    subtitle: "Essential Minerals For Optimal Health",
    category: "Cow Food",
    price: "₹3,500",
    image: "/image-351.png",
    description: "Comprehensive mineral and vitamin mix for maintaining cow health and productivity",
    keyFeatures: [
      "Calcium & Phosphorus Balance",
      "Essential Trace Minerals",
      "Vitamin A, D & E Rich",
      "Improves Bone Strength",
      "Reduces Health Issues",
      "Enhances Reproduction",
      "Natural Ingredients",
      "Easy To Mix & Feed"
    ],
    specifications: [
      "Calcium: 20-25%",
      "Phosphorus: 10-12%",
      "Magnesium: 4-5%",
      "Package Size: 25 kg",
      "Form: Granules or Powder",
      "Storage Stability: 12 months",
      "Daily Dosage: 50-100 grams per animal"
    ],
    applications: [
      "Bone and hoof health",
      "Milk quality improvement",
      "Breeding cycle regulation",
      "Metabolic disorder prevention",
      "Post-lactation recovery"
    ]
  },
  {
    id: 9,
    title: "Milking Hygiene Service",
    subtitle: "Professional Milking & Hygiene Management",
    category: "Cow Service",
    price: "₹2,00,000",
    image: "/image-349.png",
    description: "Complete milking hygiene and farm service ensuring highest quality milk production",
    keyFeatures: [
      "Pre-Milking Sanitization",
      "Modern Milking Equipment",
      "Post-Milking Teat Disinfection",
      "Milk Temperature Control",
      "Quality Testing",
      "Daily Monitoring & Reports",
      "Staff Training Programs",
      "Compliance With Standards"
    ],
    specifications: [
      "Service Frequency: Twice daily",
      "Equipment: Automated milking machines",
      "Hygiene Standard: Grade A certification",
      "Temperature Control: 4°C storage",
      "Testing: Daily quality checks",
      "Staff: Trained technicians available",
      "Response Time: On-site within 2 hours"
    ],
    applications: [
      "Improving milk quality",
      "Reducing somatic cell count",
      "Preventing mastitis",
      "Maintaining food safety",
      "Premium milk production"
    ]
  },
  {
    id: 10,
    title: "Breeding Management",
    subtitle: "Professional Cattle Breeding & Selection",
    category: "Cow Service",
    price: "₹1,50,000",
    image: "/image-353.png",
    description: "Advanced breeding management services to improve herd productivity and genetics",
    keyFeatures: [
      "Genetic Selection Guidance",
      "Heat Detection Monitoring",
      "Artificial Insemination Services",
      "Breed Improvement Program",
      "Health Screening Before Breeding",
      "Pregnancy Monitoring",
      "Calf Health Management",
      "Documentation & Records"
    ],
    specifications: [
      "Expertise: 20+ years in breeding",
      "Genetic Database: Access to best breeds",
      "Success Rate: 85-90% conception",
      "Follow-up: Regular monitoring included",
      "Documentation: Complete breeding records",
      "Advisory: Expert consultation available",
      "Cost: Included per animal per cycle"
    ],
    applications: [
      "Improving milk yield genetics",
      "Disease resistance enhancement",
      "Productivity improvement",
      "Premium breed establishment",
      "Herd performance optimization"
    ]
  },
  {
    id: 11,
    title: "Biogas Plant Setup",
    subtitle: "Complete Waste-to-Energy Solution",
    category: "Waste Management",
    price: "₹4,50,000",
    image: "/image-352.png",
    description: "Complete biogas plant installation to convert farm waste into renewable energy",
    keyFeatures: [
      "Methane Generation From Manure",
      "Cooking Fuel Production",
      "Electricity Generation Option",
      "Solid Waste Fertilizer",
      "Methane Capture System",
      "Safety Equipment",
      "Emission Control",
      "Environmental Friendly"
    ],
    specifications: [
      "Capacity: 10-50 cubic meters daily",
      "Input: Cattle manure + agricultural waste",
      "Output: 1-5 cubic meters methane daily",
      "Installation Time: 2-3 months",
      "Lifespan: 15-20 years",
      "Maintenance: Quarterly service",
      "ROI Timeline: 4-6 years"
    ],
    applications: [
      "Renewable cooking fuel",
      "Electricity generation",
      "Organic manure production",
      "Waste management solution",
      "Carbon foot print reduction"
    ]
  },
  {
    id: 12,
    title: "Waste Composting System",
    subtitle: "Organic Fertilizer Production",
    category: "Waste Management",
    price: "₹80,000",
    image: "/image-351.png",
    description: "Advanced composting system to convert farm waste into premium organic fertilizer",
    keyFeatures: [
      "Rapid Decomposition Process",
      "Organic Fertilizer Production",
      "Reduces Landfill Waste",
      "Improves Soil Quality",
      "Pest & Odor Control",
      "Moisture Management",
      "Temperature Monitoring",
      "Nutrient Rich Output"
    ],
    specifications: [
      "Composting Period: 45-60 days",
      "Capacity: 500-2000 kg per batch",
      "Space Required: 200-500 sq feet",
      "Equipment: Compost turner + storage bins",
      "Output: 30-40% of input weight",
      "Moisture Level: 50-60% optimal",
      "C:N Ratio: 25-30:1 optimal"
    ],
    applications: [
      "Farm fertilizer production",
      "Soil enrichment",
      "Reducing chemical fertilizer costs",
      "Environmental sustainability",
      "Organic farming certification support"
    ]
  },
  {
    id: 13,
    title: "Organic Cattle Feed",
    subtitle: "100% Organic Certified Feed",
    category: "Cow Food",
    price: "₹6,500",
    image: "/image-349.png",
    description: "Certified organic cattle feed produced without synthetic fertilizers and pesticides",
    keyFeatures: [
      "100% Organic Certified",
      "No Synthetic Fertilizers",
      "No Pesticide Residues",
      "Higher Milk Fat Content",
      "Better Taste & Aroma",
      "Improved Animal Digestion",
      "Premium Quality Ingredients",
      "Sustainable Sourcing"
    ],
    specifications: [
      "Certification: USDA Organic Certified",
      "Protein Content: 16-20%",
      "Fat Content: 4-6%",
      "Fiber Content: 10-14%",
      "Packaging: 50 kg bags",
      "Shelf Life: 8 months",
      "Storage: Cool & dry environment"
    ],
    applications: [
      "Organic dairy farming",
      "Premium milk production",
      "Lactating cow nutrition",
      "Organic certification compliance",
      "Health-conscious farming practices"
    ]
  },
  {
    id: 14,
    title: "Vitamin & Probiotic Supplement",
    subtitle: "Advanced Digestive Health",
    category: "Cow Food",
    price: "₹4,200",
    image: "/image-352.png",
    description: "Complete vitamin and probiotic blend for enhanced digestive health and immunity",
    keyFeatures: [
      "Live Probiotic Cultures",
      "Complete Vitamin Spectrum",
      "Enzyme Complex",
      "Improves Feed Conversion",
      "Boosts Milk Production",
      "Strengthens Immunity",
      "Reduces Digestive Issues",
      "Science-Based Formula"
    ],
    specifications: [
      "Probiotic Count: 2 Billion CFU/gram",
      "Vitamin A: 50,000 IU/kg",
      "Vitamin D: 5,000 IU/kg",
      "Vitamin E: 100 IU/kg",
      "Package Size: 20 kg",
      "Form: Granule or Powder",
      "Storage Stability: 18 months"
    ],
    applications: [
      "Improving feed digestion",
      "Enhancing milk yield",
      "Post-stress recovery",
      "Immunity strengthening",
      "Overall health maintenance"
    ]
  }
];
