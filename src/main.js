// TA TRADING COMPANY - Core Catalog & Interactive Controller

const STORAGE_KEY = 'ta_products_catalog_v2';

// 31 Products carefully categorized from the uploaded brochure
export const defaultBrochureProducts = [
  // --- SPRINKLERS (Featured on Homepage) ---
  {
    id: 1,
    name: '1" Brass Impact Sprinkler (Full Circle)',
    category: 'Sprinklers',
    subtitle: 'Heavy Duty Metal Agricultural Sprinkler',
    image: '/assets/hero_sprinkler.jpg',
    description: 'Durable brass body impact sprinkler for high-volume farmland irrigation. High corrosion resistance and uniform water distribution.',
    specs: ['Size: 1 Inch BSP Male', 'Material: Forged Brass & Stainless Steel Spring', 'Trajectory: 27° Angle', 'Coverage: 20-30m Radius', 'Operating Pressure: 2.5 - 5.0 Bar'],
    featured: true
  },
  {
    id: 2,
    name: '3/4" Brass Impact Sprinkler (Part & Full Circle)',
    category: 'Sprinklers',
    subtitle: 'Precision Sector Adjustable Sprinkler',
    image: '/assets/sprinklers_category.jpg',
    description: 'Precision brass sprinkler with adjustable arc control (30° to 360°). Ideal for edge irrigation, orchards, and sensitive crops.',
    specs: ['Size: 3/4 Inch BSP', 'Material: Heavy Cast Brass', 'Arc: 30° - 360° Adjustable', 'Coverage: 14-22m Radius', 'Pressure: 2.0 - 4.5 Bar'],
    featured: true
  },
  {
    id: 3,
    name: 'Heavy Duty Agricultural Rain Gun (1.5" - 2")',
    category: 'Sprinklers',
    subtitle: 'High-Volume Long Radius Field Irrigation',
    image: '/assets/TA Final 2.png',
    description: 'Commercial farm rain gun for large scale sugarcane, tea, fodder, and pasture irrigation with interchangeable dual nozzles.',
    specs: ['Flange/Thread: 1.5" / 2" BSP', 'Body: Heavy Duty Alloy & Brass', 'Coverage Radius: 25-45 meters', 'Flow: 120-320 LPM'],
    featured: true
  },
  {
    id: 4,
    name: 'Plastic Micro Sprinkler - 360° Spin',
    category: 'Sprinklers',
    subtitle: 'Gentle Mist Micro Sprinkler for Nurseries',
    image: '/assets/sprinklers_category.jpg',
    description: 'Engineered plastic micro-sprinkler designed for delicate nursery plants, polyhouses, greenhouses, and fruit orchards.',
    specs: ['Flow Rate: 40-90 LPH', 'Material: UV-Stabilized POM', 'Radius: 3-5 meters', 'Connection: 4mm / 1/2" Adapter'],
    featured: true
  },
  {
    id: 5,
    name: '1/2" Plastic Impact Sprinkler (Full Circle)',
    category: 'Sprinklers',
    subtitle: 'Economical Vegetable & Turf Sprinkler',
    image: '/assets/TA Final 2.png',
    description: 'UV-resistant plastic impact sprinkler designed for small holdings, vegetable gardens, and turf maintenance.',
    specs: ['Size: 1/2 Inch Male Thread', 'Material: Engineered Polycarbonate', 'Coverage: 10-15m Radius', 'Pressure: 1.5 - 3.5 Bar'],
    featured: true
  },
  {
    id: 6,
    name: 'Butterfly Sprinkler & Rotary Spray Nozzle',
    category: 'Sprinklers',
    subtitle: 'Low Pressure Inverted Overhead Sprinkler',
    image: '/assets/sprinklers_category.jpg',
    description: 'Rotating twin spray pattern sprinkler providing gentle precipitation for leafy vegetables, lawns, and seedbeds.',
    specs: ['Size: 1/2" Male Thread', 'Operating Pressure: 1.0 - 2.5 Bar', 'Coverage: 6-10m Diameter', 'Material: Virgin Polypropylene'],
    featured: true
  },

  // --- PIPES, SOLVENTS & FITTINGS ---
  {
    id: 7,
    name: 'Heavy Duty PVC Solvent Cement (Clear)',
    category: 'PVC & Solvents',
    subtitle: 'High-Strength Pressure Pipe Adhesive',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'Industrial grade fast-curing PVC solvent cement designed for high-pressure irrigation and plumbing pipe joints.',
    specs: ['Can Size: 100ml / 250ml / 500ml / 1 Liter', 'Viscosity: Heavy Bodied Fast Setting', 'Standard: ASTM D2564 Compliant'],
    featured: false
  },
  {
    id: 8,
    name: 'CPVC Solvent Cement (Medium Duty)',
    category: 'PVC & Solvents',
    subtitle: 'Hot & Cold Water Pipe Joint Compound',
    image: '/assets/TA Final 3.png',
    description: 'Specialized CPVC formula suited for high temperature resistance and durable leak-proof joints.',
    specs: ['Temp Range: Up to 82°C', 'Packaging: 100ml to 1000ml Tin', 'Joint Strength: Up to 400 PSI'],
    featured: false
  },
  {
    id: 9,
    name: 'HDPE Quick-Coupling Irrigation Pipes',
    category: 'PVC & Solvents',
    subtitle: 'Portable Quick-Latch Sprinkler Pipeline',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'High-density polyethylene pipes with integrated quick-coupling latches for quick assembly and disassembly in crop fields.',
    specs: ['Diameter: 63mm, 75mm, 90mm, 110mm', 'Pressure Rating: PN6 / PN10', 'Length: 6 meters per pipe'],
    featured: false
  },
  {
    id: 10,
    name: 'Rigid PVC Agricultural Pressure Pipes',
    category: 'PVC & Solvents',
    subtitle: 'Mainline Borewell & Irrigation Water Conduit',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'Smooth inner wall rigid PVC pipes minimizing friction loss, highly resistant to soil chemicals and corrosion.',
    specs: ['Diameter Range: 20mm to 200mm', 'Standard: IS 4985 Certified', 'Joint Type: Socket / Elastomeric Ring'],
    featured: false
  },
  {
    id: 11,
    name: 'PVC Agricultural Ball Valves (Threaded & Plain)',
    category: 'PVC & Solvents',
    subtitle: 'Manual Mainline Flow Control Valve',
    image: '/assets/TA Final 3.png',
    description: 'Leak-proof PVC ball valves for mainlines and sub-mainlines in agricultural irrigation networks.',
    specs: ['Size Range: 1/2" to 4" BSP', 'Material: Virgin High-Grade PVC', 'Pressure: 10 Bar (150 PSI)'],
    featured: false
  },
  {
    id: 12,
    name: 'PVC Compression Fittings, Couplers & Tees',
    category: 'PVC & Solvents',
    subtitle: 'Quick Fix Pipe Connections & Adapters',
    image: '/assets/pipes_fittings_category.jpg',
    description: 'Reliable compression joints for connecting HDPE and PVC irrigation pipes without heat welding.',
    specs: ['Available Sizes: 20mm to 110mm', 'Rubber Ring: High Grade EPDM', 'Rating: PN16'],
    featured: false
  },

  // --- HOSES & FLEXIBLE PIPES ---
  {
    id: 13,
    name: 'Braided Garden PVC Hose Pipe (Green)',
    category: 'Hoses',
    subtitle: 'Triple-Layer Reinforced All-Weather Hose',
    image: '/assets/hoses_category.jpg',
    description: 'Kink-resistant, weather-proof nylon braided PVC hose for commercial garden watering, nurseries, and general washdowns.',
    specs: ['Inner Diameter: 1/2", 3/4", 1"', 'Length: 30m / 50m / 100m Rolls', 'Working Pressure: 8 - 12 Bar'],
    featured: false
  },
  {
    id: 14,
    name: 'Flat Agricultural Discharge Layflat Hose',
    category: 'Hoses',
    subtitle: 'Heavy Duty Dewatering & Water Transfer Hose',
    image: '/assets/TA Final 4.png',
    description: 'Flexible layflat PVC hose reinforced with high-tensile synthetic yarn. Easy to deploy, roll up, and store.',
    specs: ['Sizes: 2", 3", 4", 6" ID', 'Color: Blue / Red Heavy Duty', 'Working Pressure: Up to 6 Bar'],
    featured: false
  },
  {
    id: 15,
    name: 'Heavy Duty PVC Suction Hose Pipe',
    category: 'Hoses',
    subtitle: 'Helical Rigid PVC Spiral Reinforced',
    image: '/assets/hoses_category.jpg',
    description: 'Spiral reinforced suction hose designed for pump suction lines, slurry transfer, and agricultural dewatering.',
    specs: ['Diameter: 1" to 4"', 'Color: Green / Yellow transparent', 'Vacuum Resistance: 700 mmHg'],
    featured: false
  },
  {
    id: 16,
    name: 'High Pressure Agricultural Spray Hose (8.5mm / 10mm)',
    category: 'Hoses',
    subtitle: 'Pesticide, Chemical & Fertilizer Power Spraying',
    image: '/assets/TA Final 4.png',
    description: '5-Layer high pressure yellow spray hose for tractor power sprayers, orchard spraying, and washdown applications.',
    specs: ['Size: 8.5mm, 10mm ID', 'Bursting Pressure: 200 Bar (3000 PSI)', 'Reinforcement: High Tenacity Polyester Filament'],
    featured: false
  },

  // --- DRIP IRRIGATION & ACCESSORIES ---
  {
    id: 17,
    name: 'Inline Drip Tape (16mm)',
    category: 'Drip Irrigation',
    subtitle: 'Continuous Emitter Drip Irrigation Line',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'Precision dripline with integrated flat emitters at fixed spacing (20cm, 30cm, 50cm) for row crops and vegetables.',
    specs: ['Diameter: 16mm', 'Flow Rate: 2.0 LPH per emitter', 'Wall Thickness: 0.2mm to 0.4mm (8-16 mil)'],
    featured: false
  },
  {
    id: 18,
    name: 'Online Drip Tubing & Pressure Compensating Emitters',
    category: 'Drip Irrigation',
    subtitle: 'Customizable Point Source Drip System',
    image: '/assets/TA Final 5.png',
    description: 'Plain 16mm virgin LLDPE lateral pipe bundled with punchable PC drippers for irregular plant and tree spacing.',
    specs: ['Dripper Flow: 4 LPH / 8 LPH', 'Pipe Size: 16mm / 20mm outer diameter', 'UV Resistance: 5+ Years'],
    featured: false
  },
  {
    id: 19,
    name: 'Disc & Screen Mainline Water Filters (2 Inch)',
    category: 'Drip Irrigation',
    subtitle: 'Heavy Duty Primary Filtration Unit',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'High-capacity irrigation water filter preventing dripper and nozzle clogging from sand, algae, and suspended solids.',
    specs: ['Mesh Rating: 120 Mesh / 130 Micron', 'Connection: 2" BSP Male Thread', 'Max Flow: 25-30 m³/hour'],
    featured: false
  },
  {
    id: 20,
    name: 'Venturi Fertilizer Injector Kit',
    category: 'Drip Irrigation',
    subtitle: 'Direct Mainline Fertigation Dosing Unit',
    image: '/assets/TA Final 5.png',
    description: 'Efficient vacuum-driven fertigation kit to inject liquid fertilizers directly into the drip irrigation network without extra pumps.',
    specs: ['Size: 3/4", 1", 1.5"', 'Suction Capacity: 30-300 LPH', 'Includes: Venturi body, suction tube & flow control valve'],
    featured: false
  },
  {
    id: 21,
    name: 'Screen Filter 1.5 Inch Compact',
    category: 'Drip Irrigation',
    subtitle: 'Secondary Filtration Unit for Greenhouses',
    image: '/assets/drip_irrigation_category.jpg',
    description: 'Compact poly-body screen filter ideal for greenhouse drip lines and micro sprinkler setups.',
    specs: ['Filtration: 120 Mesh Stainless Steel Screen', 'Flow Rate: Up to 15 m³/h', 'Pressure Rating: 6 Bar'],
    featured: false
  },
  {
    id: 22,
    name: 'Polyethylene LLDPE Lateral Pipes',
    category: 'Drip Irrigation',
    subtitle: 'Flexible Drip Sub-Main & Lateral Line',
    image: '/assets/TA Final 5.png',
    description: 'High flexibility virgin LLDPE pipes designed for easy laying in crop fields without cracking or kinking.',
    specs: ['Sizes: 12mm, 16mm, 20mm', 'Coil Length: 100m, 200m, 400m', 'Standard: IS 12786 Certified'],
    featured: false
  }
];

// Helper to get active catalog from LocalStorage or default
export function getCatalog() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
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

// Reset catalog
export function resetCatalog() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBrochureProducts));
  return defaultBrochureProducts;
}

// Direct WhatsApp Inquiry Router
export function sendWhatsAppEnquiry(productName, customMsg = '') {
  const phone = '917510671790';
  let message = `Hello TA TRADING COMPANY,\n\nI would like to enquire about:\n📦 *${productName}*\n`;
  if (customMsg) {
    message += `Details: ${customMsg}\n`;
  }
  message += `\nPlease share wholesale pricing, availability, and technical specifications. Thank you!`;
  
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

// Initialize Mobile Hamburger Menu
export function initMobileNav() {
  const hamburger = document.getElementById('nav-hamburger-btn');
  const menu = document.getElementById('nav-menu-list');
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
      const icon = hamburger.querySelector('i');
      if (icon) {
        if (menu.classList.contains('open')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });
  }
}