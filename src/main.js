// TA TRADING COMPANY - Main JavaScript & Admin Controller

const STORAGE_KEY = 'ta_products_catalog_v1';

// Full Catalog of 31 Brochure Products
export const defaultBrochureProducts = [
  // --- SPRINKLERS (Featured on Homepage) ---
  {
    id: 1,
    name: '1" Brass Impact Sprinkler (Full Circle)',
    category: 'Sprinklers',
    subtitle: 'Heavy Duty Metal Agricultural Sprinkler',
    image: '/assets/hero_sprinkler.jpg',
    description: 'Durable brass body impact sprinkler for high-volume farmland irrigation. High corrosion resistance and uniform water distribution.',
    specs: ['Size: 1 Inch BSP', 'Material: Forged Brass', 'Trajectory: 27°', 'Coverage: 20-30m Radius', 'Pressure: 2.5 - 5.0 Bar'],
    featured: true
  },
  {
    id: 2,
    name: '3/4" Brass Impact Sprinkler (Part Circle)',
    category: 'Sprinklers',
    subtitle: 'Adjustable Sector Sprinkler',
    image: '/assets/sprinklers_category.jpg',
    description: 'Precision brass sprinkler with adjustable arc control (30° to 360°). Ideal for edge irrigation and sensitive crops.',
    specs: ['Size: 3/4 Inch BSP', 'Material: Solid Brass', 'Arc: 30° - 360° Adjustable', 'Coverage: 14-22m Radius', 'Pressure: 2.0 - 4.5 Bar'],
    featured: true
  },
  {
    id: 3,
    name: 'Plastic Micro Sprinkler - 360° Spin',
    category: 'Sprinklers',
    subtitle: 'Gentle Mist Micro Sprinkler for Orchards',
    image: '/assets/sprinklers_category.jpg',
    description: 'Engineered plastic micro-sprinkler designed for delicate nursery plants, greenhouses, and fruit orchards.',
    specs: ['Flow Rate: 40-90 LPH', 'Material: UV-Stabilized POM', 'Radius: 3-5m', 'Connection: 4mm / 1/2" Adapter'],
    featured: true
  },
  {
    id: 4,
    name: 'Heavy Duty Rain Gun Sprinkler (1.5")',
    category: 'Sprinklers',
    subtitle: 'High-Volume Long Radius Irrigation',
    image: '/assets/hero_sprinkler.jpg',
    description: 'Professional farm rain gun for large scale sugarcane, tea, and pasture field irrigation with dual nozzle mechanism.',
    specs: ['Flange/Thread: 1.5 Inch', 'Body: Heavy Alloy & Metal', 'Coverage Radius: 25-42 meters', 'Flow: 120-280 LPM'],
    featured: true
  },
  {
    id: 5,
    name: '1/2" Plastic Impact Sprinkler',
    category: 'Sprinklers',
    subtitle: 'Economical Lawn & Garden Sprinkler',
    image: '/assets/sprinklers_category.jpg',
    description: 'UV-resistant plastic impact sprinkler designed for small holdings, vegetables, and turf maintenance.',
    specs: ['Size: 1/2 Inch Male', 'Material: Engineered Polycarbonate', 'Coverage: 10-15m', 'Pressure: 1.5 - 3.5 Bar'],
    featured: true
  },

  // --- PIPES, SOLVENTS & FITTINGS ---
  {
    id: 6,
    name: 'Heavy Duty PVC Solvent Cement (Clear)',
    category: 'PVC & Solvents',
    subtitle: 'High-Strength Pressure Pipe Adhesive',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'Industrial grade fast-curing PVC solvent cement designed for high-pressure irrigation and plumbing pipe joints.',
    specs: ['Can Size: 100ml / 250ml / 500ml / 1L', 'Viscosity: Heavy Bodied', 'Standard: ASTM D2564 Compliant'],
    featured: false
  },
  {
    id: 7,
    name: 'CPVC Solvent Cement (Medium Duty)',
    category: 'PVC & Solvents',
    subtitle: 'Hot & Cold Water Pipe Joint Compound',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'Specialized CPVC formula suited for high temperature resistance and durable leak-proof joints.',
    specs: ['Temp Range: Up to 82°C', 'Sizes: 100ml to 1000ml', 'Color: Orange / Clear'],
    featured: false
  },
  {
    id: 8,
    name: 'HDPE Quick-Coupling Irrigation Pipes',
    category: 'PVC & Solvents',
    subtitle: 'Portable Quick-Latch Sprinkler Line',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'High-density polyethylene pipes with integrated quick-coupling latches for quick assembly and disassembly in farms.',
    specs: ['Diameter: 63mm, 75mm, 90mm, 110mm', 'Pressure Rating: PN6 / PN10', 'Length: 6 meters per pipe'],
    featured: false
  },
  {
    id: 9,
    name: 'Rigid PVC Pressure Pipes (Class 3 & 4)',
    category: 'PVC & Solvents',
    subtitle: 'Agriculture & Borewell Water Conduit',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'Smooth inner wall rigid PVC pipes minimizing friction loss, resistant to soil chemicals and corrosion.',
    specs: ['Diameter Range: 20mm to 200mm', 'Standard: IS 4985', 'Joint Type: Socket / Elastomeric Ring'],
    featured: false
  },
  {
    id: 10,
    name: 'PVC Ball Valves (Threaded & Socket)',
    category: 'PVC & Solvents',
    subtitle: 'Manual Flow Control Valve',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'Leak-proof PVC ball valves for mainlines and sub-mainlines in agricultural irrigation systems.',
    specs: ['Size: 1/2" to 4"', 'Material: Virgin PVC', 'Pressure: 10 Bar (150 PSI)'],
    featured: false
  },

  // --- HOSES & FLEXIBLE PIPES ---
  {
    id: 11,
    name: 'Braided Garden PVC Hose Pipe (Green)',
    category: 'Hoses',
    subtitle: 'Triple-Layer Reinforced Garden Hose',
    image: '/assets/hoses_category.jpg',
    description: 'Kink-resistant, weather-proof nylon braided PVC hose for commercial garden watering and general washdowns.',
    specs: ['Inner Diameter: 1/2", 3/4", 1"', 'Length: 30m / 50m / 100m Roll', 'Working Pressure: 8 Bar'],
    featured: false
  },
  {
    id: 12,
    name: 'Flat Agricultural Discharge Layflat Hose',
    category: 'Hoses',
    subtitle: 'Heavy Duty Dewatering & Water Transfer Hose',
    image: '/assets/hoses_category.jpg',
    description: 'Flexible layflat PVC hose reinforced with high tensile synthetic yarn. Easy to roll up and store.',
    specs: ['Size: 2", 3", 4", 6" ID', 'Color: Blue / Red Heavy Duty', 'Pressure: Up to 6 Bar'],
    featured: false
  },
  {
    id: 13,
    name: 'Heavy Duty PVC Suction Hose Pipe',
    category: 'Hoses',
    subtitle: 'Helical Rigid PVC Spiral Reinforced',
    image: '/assets/hoses_category.jpg',
    description: 'Spiral reinforced suction hose designed for pump suction lines, slurry transfer, and agricultural irrigation.',
    specs: ['Diameter: 1" to 4"', 'Color: Green / Yellow transparent', 'Vacuum Resistance: 700 mmHg'],
    featured: false
  },
  {
    id: 14,
    name: 'High Pressure Agricultural Spray Hose',
    category: 'Hoses',
    subtitle: 'Pesticide & Fertilizer Spraying Line',
    image: '/assets/hoses_category.jpg',
    description: '5-Layer high pressure yellow spray hose for power sprayers, orchard spraying, and chemical applications.',
    specs: ['Size: 8.5mm, 10mm ID', 'Bursting Pressure: 200 Bar', 'Reinforcement: High Tenacity Polyester Filament'],
    featured: false
  },

  // --- DRIP IRRIGATION & ACCESSORIES ---
  {
    id: 15,
    name: 'Inline Drip Tape (16mm)',
    category: 'Drip Irrigation',
    subtitle: 'Continuous Emitter Drip Line',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'Precision dripline with integrated flat emitters at fixed spacing (20cm, 30cm, 50cm) for row crops.',
    specs: ['Diameter: 16mm', 'Flow Rate: 2.0 LPH per emitter', 'Wall Thickness: 0.2mm to 0.4mm (8-16 mil)'],
    featured: false
  },
  {
    id: 16,
    name: 'Online Drip Tubing & Pressure Compensating Emitters',
    category: 'Drip Irrigation',
    subtitle: 'Customizable Point Source Drip System',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'Plain 16mm LLDPE lateral pipe bundled with punchable PC drippers for irregular plant spacing.',
    specs: ['Dripper Flow: 4 LPH / 8 LPH', 'Pipe Size: 16mm / 20mm outer diameter', 'UV Resistance: 5+ Years'],
    featured: false
  },
  {
    id: 17,
    name: 'Disc & Screen Water Filters (2 Inch)',
    category: 'Drip Irrigation',
    subtitle: 'Mainline Filtration Unit',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'High-capacity irrigation water filter preventing dripper clogging from sand, algae, and suspended solids.',
    specs: ['Mesh Rating: 120 Mesh / 130 Micron', 'Connection: 2" BSP Male', 'Max Flow: 25-30 m³/h'],
    featured: false
  },
  {
    id: 18,
    name: 'Venturi Fertilizer Injector Kit',
    category: 'Drip Irrigation',
    subtitle: 'Fertigation Dosing Unit',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'Efficient vacuum-driven fertigation kit to inject liquid fertilizers directly into the drip irrigation network.',
    specs: ['Size: 3/4", 1", 1.5"', 'Suction Capacity: 30-300 LPH', 'Includes: Venturi body, suction tube & flow valve'],
    featured: false
  },
  {
    id: 19,
    name: 'Screen Filter 1.5 Inch Compact',
    category: 'Drip Irrigation',
    subtitle: 'Secondary Filtration Unit',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'Compact poly-body screen filter ideal for greenhouse drip lines and micro sprinkler setups.',
    specs: ['Filtration: 120 Mesh Stainless Steel Screen', 'Flow Rate: Up to 15 m³/h', 'Pressure Rating: 6 Bar'],
    featured: false
  },
  {
    id: 20,
    name: 'Polyethylene LLDPE Lateral Pipes',
    category: 'Drip Irrigation',
    subtitle: 'Flexible Drip Main & Sub-Line',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'High flexibility virgin LLDPE pipes designed for easy laying in crop fields without cracking.',
    specs: ['Sizes: 12mm, 16mm, 20mm', 'Coil Length: 100m, 200m, 400m', 'Standard: IS 12786'],
    featured: false
  }
];

// Helper to get active catalog from LocalStorage or default
export function getCatalog() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse catalog from localStorage', e);
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBrochureProducts));
  return defaultBrochureProducts;
}

// Helper to save catalog
export function saveCatalog(catalog) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(catalog));
}

// Global WhatsApp Form Handler
export function sendWhatsAppEnquiry(productName, userDetails = {}) {
  const phone = '917510671790';
  let message = `Hello TA Trading Company,\nI am interested in: *${productName}*\n`;
  if (userDetails.name) message += `Name: ${userDetails.name}\n`;
  if (userDetails.phone) message += `Phone: ${userDetails.phone}\n`;
  if (userDetails.notes) message += `Notes: ${userDetails.notes}\n`;
  message += `\nPlease provide price and specifications.`;
  
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}