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
  }
];