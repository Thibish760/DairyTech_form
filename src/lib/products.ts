export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  subtitle?: string;
  keyFeatures?: string[];
  specifications?: string[];
  applications?: string[];
  title?: string;
  imageClasses?: string;
  titleClasses?: string;
  priceExtra?: string;
}
export const products: Product[] = [
  {
    id: 1,
    name: "2 Bucket Milking Machine",
    subtitle: "Belt Drive Model | Dual Bucket Capacity",
    category: "Milking Equipment",
    price: "$850",
    image: "2bucketmilkingmachine.png",
    description: "A professional dual-bucket system designed for high-efficiency milking in medium to large dairies.",
    keyFeatures: [
      "Dual 25L Stainless Steel Buckets for increased volume.",
      "High Suction Capacity – 450 LPM.",
      "Belt Drive Motor for stable and quiet operation.",
      "Heavy-Duty Trolley with wheels for easy farm mobility."
    ],
    specifications: [
      "Power: 1.5 HP Single Phase Motor.",
      "Bucket Material: Grade 304 Stainless Steel.",
      "Pulsation Rate: 60/40 adjustable."
    ],
    applications: [
      "Simultaneous milking of two cows to save time.",
      "Ideal for commercial dairy farms with 10+ cows."
    ]
  },
  {
    id: 2,
    name: "Chaff Cutter",
    subtitle: "Heavy Duty | High-Speed Fodder Processor",
    category: "Fodder Processing",
    price: "$499",
    image: "ChaffCutter.png",
    description: "Engineered for precision cutting of fodder to improve livestock digestion and reduce feed waste.",
    keyFeatures: [
      "Hardened Steel Blades for long-lasting sharpness.",
      "Adjustable Cutting Length settings to suit different livestock needs.",
      "Safety Gearbox to prevent motor overload."
    ],
    specifications: [
      "Capacity: 800–1000 kg/hour.",
      "Blade Count: 3 High-Carbon Steel blades.",
      "Motor: 2 HP Electric Motor compatible."
    ],
    applications: [
      "Processing green and dry grass, corn stalks, and straw.",
      "Preparing uniform feed for cattle, goats, and sheep."
    ]
  },
  {
    id: 3,
    name: "Cow Lifter",
    subtitle: "Reinforced Steel | Emergency Veterinary Tool",
    category: "Veterinary Tools",
    price: "$195",
    image: "CowLifter.png",
    description: "A safety tool designed to assist 'downer cows' or injured cattle by providing stable hip support without causing trauma.",
    keyFeatures: [
      "Padded Hip Clamps to prevent bruising and protect the animal.",
      "Galvanized Steel Frame for maximum rust resistance.",
      "Simple Crank Mechanism for easy one-person operation."
    ],
    specifications: [
      "Load Capacity: Up to 900 kg.",
      "Adjustable Width: 40 cm to 65 cm to accommodate various sizes.",
      "Weight: 12 kg for easy transport around the farm."
    ],
    applications: [
      "Lifting cows unable to stand due to milk fever or injury.",
      "Supporting animals during veterinary examinations."
    ]
  },
  {
    id: 4,
    name: "Grass Cutter",
    subtitle: "Precision Blade | Land Management Series",
    category: "Land Management",
    price: "$280",
    image: "GrassCutter.png",
    description: "A versatile and powerful tool for maintaining pastures and clearing thick field vegetation with ergonomic ease.",
    keyFeatures: [
      "High-Torque Engine for clearing dense brush and weeds.",
      "Ergonomic Handlebars for better control and operator comfort.",
      "Low Vibration Technology to protect the user during long hours."
    ],
    specifications: [
      "Engine Type: 4-Stroke Air Cooled.",
      "Fuel Tank: 1.2 Liter capacity.",
      "Cutting Width: 255 mm (Blade) / 400 mm (Nylon line)."
    ],
    applications: [
      "Clearing overgrown grass in grazing fields.",
      "Trimming edges around farm fences, sheds, and walkways."
    ]
  },
  {
    id: 5,
    name: "Milk Cream Separator",
    subtitle: "Electric Driven | High-Efficiency Centrifuge",
    category: "Dairy Processing",
    price: "$350",
    image: "/MilkCreamSeparato.png",
    description: "A professional-grade centrifugal machine designed to efficiently extract high-quality cream from whole milk.",
    keyFeatures: [
      "Stainless Steel Bowl and Disks for food-grade hygiene and easy cleaning.",
      "Adjustable Fat Content settings for various dairy products.",
      "Anti-Slip Rubber Feet for stable tabletop operation."
    ],
    specifications: [
      "Output: 100-120 Liters per hour.",
      "Milk Receiver Capacity: 12 Liters.",
      "Bowl Speed: 10,000 RPM."
    ],
    applications: [
      "Separating cream for butter, ghee, and cream production.",
      "Producing skimmed milk for specialized dietary needs or further processing."
    ]
  },
  {
    id: 6,
    name: "Digital Weighing Scale",
    subtitle: "High Precision | Industrial Grade Platform",
    category: "Measurement Tools",
    price: "$120",
    image: "DigitalWeighingScale.png",
    description: "Accurate and durable, this scale is designed for the rugged farm environment to maintain precise records.",
    keyFeatures: [
      "Bright LED Display for visibility in dark farm sheds.",
      "Rust-Resistant Stainless Steel Platform for long-term durability.",
      "Rechargeable Battery Backup for cordless portability."
    ],
    specifications: [
      "Max Weight: 200 kg.",
      "Precision: 20g Accuracy.",
      "Platform Size: 500 mm x 500 mm."
    ],
    applications: [
      "Weighing milk cans for daily production records.",
      "Measuring feed bags, fertilizer, or small livestock accurately."
    ]
  },
  {
    id: 7,
    name: "Cow Dung Scrapper",
    subtitle: "Automated Cleaning | Farm Hygiene Solution",
    category: "Farm Hygiene",
    price: "$1,200",
    image: "CowDungScrapper.png",
    description: "Maintains a clean and hygienic environment in cow sheds by effectively removing waste automatically.",
    keyFeatures: [
      "Corrosion-Resistant Scraper Blade for long-life durability.",
      "Low Maintenance Design with simple, reliable drive mechanics.",
      "Safe, Slow-Moving Operation to prevent injury to livestock."
    ],
    specifications: [
      "Drive Power: 0.75 kW Motor.",
      "Chain Material: High-Strength Alloy Steel.",
      "Control: Automatic Timer or Manual override."
    ],
    applications: [
      "Maintaining hygiene in free-stall barns and sheds.",
      "Reducing manual labor costs and improving overall animal health."
    ]
  },
  {
    id: 8,
    name: "Motor",
    subtitle: "Heavy-Duty Induction | Multi-Purpose Power",
    category: "Power Units",
    price: "$299",
    image: "/motor-1.png",
    description: "The core power unit for various farm machinery, built for reliable performance under heavy loads.",
    keyFeatures: [
      "Built-In Thermal Protection to prevent overheating.",
      "Rust-Resistant Durable Body for long-term outdoor use.",
      "Low Maintenance & Long Service Life for cost-effective operation."
    ],
    specifications: [
      "Type: Single Phase AC Induction.",
      "Speed: 1440 RPM.",
      "Insulation: Class F high-temperature resistance."
    ],
    applications: [
      "Powering vacuum pumps for milking machines.",
      "Driving chaff cutters, feed grinders, and water pumps."
    ]
  },
  {
    id: 9,
    name: "Milk Tank",
    subtitle: "Cooling & Storage | Grade-A Stainless Steel",
    category: "Storage & Cooling",
    price: "$1,500",
    image: "MilkTanks.png",
    description: "High-capacity insulated storage tanks designed to maintain milk temperature and prevent bacterial growth.",
    keyFeatures: [
      "Double-Walled Insulation for superior temperature control.",
      "Polished Food-Grade Stainless Steel (SS304/SS316).",
      "Easy-Drain Outlet Valve for efficient milk transfer."
    ],
    specifications: [
      "Capacity: Available in 500L, 1000L, and 2000L.",
      "Material: SS316 Inner Tank / SS304 Outer Shell.",
      "Cooling: Compatible with built-in agitator systems."
    ],
    applications: [
      "Storing milk at collection centers or large farms.",
      "Maintaining milk quality during summer months or before transport."
    ]
  }
];