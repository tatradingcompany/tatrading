// TA TRADING COMPANY - Core Catalog & Interactive Controller
// Source of Truth: Official TA Trading Reference Catalog

const STORAGE_KEY = 'ta_products_catalog_v3';

// 39 Products categorized strictly from the official TA Trading Reference Catalog
export const defaultBrochureProducts = [
  // ==========================================
  // 1. IRRIGATION SPRINKLERS (10 Products)
  // ==========================================
  {
    id: 1,
    name: 'Winkler / Impact Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Impact Type • Heavy Duty for Agriculture & Large Areas',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'Heavy-duty impact sprinkler engineered for agricultural crop fields, plantations, and wide acreage. Features robust spring-driven rotation, corrosion-resistant body, and uniform precipitation.',
    specs: ['Inlet Size: 1" & 3/4" BSP Male', 'Coverage: 18 - 32 meters radius', 'Pressure Range: 2.5 - 5.0 Bar', 'Application: Agriculture, Large Open Farms & Plantations'],
    featured: true
  },
  {
    id: 2,
    name: 'Butterfly / Mini Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Mini Sprinkler • Ideal for Nurseries, Gardens & Plantations',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'Compact circular butterfly mini sprinkler providing gentle 360-degree overhead droplet distribution without eroding seedbeds or splashing delicate foliage.',
    specs: ['Inlet Size: 1/2" Male Thread / Push Fit', 'Coverage: 5 - 8 meters radius', 'Working Pressure: 1.5 - 3.0 Bar', 'Application: Nurseries, Veggie Beds & Tea/Coffee Estates'],
    featured: true
  },
  {
    id: 3,
    name: 'Pop-Up Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Pop-Up Type • Perfect for Lawns & Landscaped Gardens',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'Heavy duty retractable pop-up sprinkler body with adjustable arc spray nozzle. Rises smoothly from turf under water pressure and retracts safely below mower level.',
    specs: ['Pop-Up Height: 4 Inch / 6 Inch', 'Arc Adjustment: 40° to 360° Adjustable', 'Pressure Range: 2.0 - 4.5 Bar', 'Application: Lawns, Golf Courses & Landscaping'],
    featured: true
  },
  {
    id: 4,
    name: 'Rotary Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Rotary Type • Uniform Water Distribution for Medium to Large Areas',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'Multi-arm spinning rotary sprinkler ensuring uniform, wind-resistant precipitation and low application rate to avoid water runoff.',
    specs: ['Inlet Connection: 3/4" BSP', 'Coverage: 12 - 20 meters diameter', 'Material: UV-Stabilized Polymer & Brass Bushing', 'Application: Medium Farms, Orchards & Lawns'],
    featured: true
  },
  {
    id: 5,
    name: 'Gear Drive Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Gear Drive Type • Long Range Coverage with Consistent Rainfall',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'Enclosed water-lubricated internal gear drive mechanism delivering smooth, silent continuous rotation and uniform water curtain over long throwing distances.',
    specs: ['Throw Radius: 10 - 18 meters', 'Inlet Size: 3/4" Female Thread', 'Drive Type: Water-Lubricated Gear Drive', 'Application: Large Gardens, Sports Turf & Crops'],
    featured: true
  },
  {
    id: 6,
    name: 'Rain Gun Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Big Gun Type • High Discharge for Large Farms & Open Fields',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'Commercial agricultural rain gun engineered for extensive sugarcane, fodder crops, tea estates, pastures, and dust suppression with interchangeable dual nozzles.',
    specs: ['Flange/Thread: 1.5" & 2" BSP/Flange', 'Throw Radius: 28 - 50 meters', 'Discharge: 150 - 450 LPM', 'Trajectory: 24° - 28° Angle'],
    featured: true
  },
  {
    id: 7,
    name: 'Micro Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Micro Irrigation • Low Flow, Suitable for Gardens & Nurseries',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'Low-volume micro sprinkler with precision rotor designed for delicate seedling nurseries, polyhouses, shade nets, and under-canopy orchard irrigation.',
    specs: ['Flow Rate: 35 - 120 LPH', 'Operating Pressure: 1.5 - 2.5 Bar', 'Coverage: 3 - 6 meters diameter', 'Mounting: 4mm Micro-tube / Plastic Ground Stake'],
    featured: true
  },
  {
    id: 8,
    name: 'Mist Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Misting Type • Fine Mist for Cooling, Humidity & Nurseries',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'High-precision misting nozzle producing fine micronized water droplets for humidity stabilization and cooling in greenhouses, cutting propagation, and poultry farms.',
    specs: ['Flow Rate: 15 - 30 LPH', 'Droplet Size: Fine Mist (60 - 100 Microns)', 'Pressure Range: 2.5 - 4.0 Bar', 'Application: Greenhouse Climate Control & Cutting Beds'],
    featured: true
  },
  {
    id: 9,
    name: 'Fogger Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Fogging Type • Ultra Fine Mist for Cooling, Humidity Control & Nurseries',
    image: '/assets/sprinklers_showcase.jpg',
    description: '4-way cross ultra-fine fogger sprinkler assembly with integrated silicone anti-drip valve preventing post-shutoff dripping. Creates uniform atmospheric moisture.',
    specs: ['Configuration: 4-Way Cross Head', 'Discharge: 4 x 7.5 LPH', 'Anti-Drip Valve: Integrated Silicone Diaphragm', 'Application: Polyhouses, Hydroponics, Tissue Culture'],
    featured: true
  },
  {
    id: 10,
    name: 'Sprinkler Accessories',
    category: 'Irrigation Sprinklers',
    subtitle: 'Accessories • Nozzles, Risers, Adaptors, Filters & Mounts',
    image: '/assets/sprinklers_showcase.jpg',
    description: 'Comprehensive range of sprinkler mounting accessories including threaded PVC/metal risers, quick-snap hose connectors, replacement nozzles, and mini inline filters.',
    specs: ['Sizes: 1/2", 3/4", 1" BSP Male & Female', 'Components: Risers, Bushings, Quick Adapters, Washers', 'Material: Forged Brass, POM & UV-Grade PVC', 'Compatibility: Universal Agricultural Sprinklers'],
    featured: true
  },

  // ==========================================
  // 2. PVC FITTINGS & IRRIGATION ACCESSORIES (11 Products)
  // ==========================================
  {
    id: 11,
    name: 'PVC Elbows (90° & 45°)',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Directional Pipe Transitions • High Pressure Resistance',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Heavy-duty injection molded PVC 90-degree and 45-degree elbow fittings for directional routing in mainline and sub-mainline irrigation pipelines.',
    specs: ['Size Range: 20mm to 110mm (1/2" to 4")', 'Pressure Rating: Class 3 (PN10) & Class 4 (PN16)', 'Standard: IS 7834 / ASTM D2466', 'Color: Industrial Grey & Agriculture Blue'],
    featured: false
  },
  {
    id: 12,
    name: 'PVC Tees (Equal & Reducing)',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Branch Junctions • Smooth Flow Distribution',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Equal and reducing PVC tees providing smooth flow distribution for mainline branching to secondary irrigation lines and sprinkler risers.',
    specs: ['Size Range: 20mm to 110mm', 'Type: Socket Weld & Threaded Branch', 'Wall Construction: Heavy Duty Schedule 40/80', 'Application: Mainline Branching & Risers'],
    featured: false
  },
  {
    id: 13,
    name: 'PVC Couplers',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Socket Connectors • Straight Line Pipe Joiners',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Precision molded straight PVC couplers for joining plain end irrigation pressure pipes with solvent cement weld joints.',
    specs: ['Size Range: 20mm to 160mm', 'Pressure Rating: PN10 & PN16', 'Material: 100% Virgin High-Grade PVC', 'Joint: Solvent Socket Weld'],
    featured: false
  },
  {
    id: 14,
    name: 'PVC Unions',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Barrel Unions • Quick Disconnect for Maintenance',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Three-piece PVC barrel unions with EPDM O-ring seal allowing simple line disconnection for filter cleaning, pump maintenance, and repair without cutting pipes.',
    specs: ['Size Range: 1/2" to 3" BSP / Metric Socket', 'Sealing: High-Grade EPDM Rubber O-Ring', 'Working Pressure: 10 Bar (150 PSI)', 'Connection: Threaded & Socket'],
    featured: false
  },
  {
    id: 15,
    name: 'PVC Reducers',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Concentric & Bushing Reducers • Pipe Sizing Transition',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Concentric reducers and flush reducer bushings for stepping down pipe diameters from pump discharge mainlines to sub-mains with minimal friction loss.',
    specs: ['Size Range: 25x20mm up to 110x63mm', 'Type: Concentric Socket & Reducer Bushing', 'Flow: Smooth internal bore minimizing friction loss', 'Material: Virgin PVC'],
    featured: false
  },
  {
    id: 16,
    name: 'PVC End Caps',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Line Termination • High Pressure Pipe Seal Caps',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Robust PVC socket and threaded end caps for sealing pipe terminates, flush manifolds, and future pipeline expansion points.',
    specs: ['Size Range: 20mm to 110mm', 'Type: Plain Solvent Socket & Female Threaded', 'Pressure: Up to 16 Bar', 'Application: Mainline End Sealing & Flushing'],
    featured: false
  },
  {
    id: 17,
    name: 'PVC Valves (Ball Valves)',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Compact Ball Valves • Manual Mainline Flow Control',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Smooth quarter-turn PVC compact ball valves with ergonomic red handles and leak-proof PTFE seats for reliable on/off flow isolation in farm networks.',
    specs: ['Size Range: 1/2" to 4" (Plain & Threaded BSP)', 'Pressure Rating: PN10 (150 PSI)', 'Handle: High-Impact Ergonomic Lever', 'Seals: Chemical Resistant TPV/PTFE'],
    featured: false
  },
  {
    id: 18,
    name: 'Bulldog Solvent Cement',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Super PVC Solvent • Fast Curing High Pressure Adhesive',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Industrial-grade Bulldog Super PVC fast-curing solvent cement formulated for heavy-duty pressure pipe joints in agricultural pipelines, borewells, and irrigation fittings.',
    specs: ['Packaging: 100ml, 250ml, 500ml, 1 Liter Cans', 'Viscosity: Heavy Bodied Fast Setting', 'Standard: ASTM D-2564 / IS 14182 Compliant', 'Application: High Pressure PVC Irrigation Pipes'],
    featured: false
  },
  {
    id: 19,
    name: 'PVC Adhesive',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Heavy Duty Pipe Adhesive • Permanent Leak-Proof Seal',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Specialized PVC pipe adhesive providing chemically bonded, waterproof joints resistant to fertilizer salts, fluctuating soil temperatures, and water hammer spikes.',
    specs: ['Application: Agricultural & Domestic Plumbing', 'Bond Strength: High Shear Resistance', 'Cure Time: Quick Initial Set (10-15 mins)', 'Packaging: Easy Brush-Cap Canister'],
    featured: false
  },
  {
    id: 20,
    name: 'Bulldog Gasket Shellac Compound',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Gasket Shellac • Flange & Thread Leak-Proof Compound',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Authentic Bulldog Gasket Shellac compound for sealing pump flanges, threaded brass/PVC pipe fittings, gaskets, and preventing stubborn water and air leaks.',
    specs: ['Packaging: 59ml & 100ml Bottle with Brush', 'Resistance: Water, Oil, Alkalis & Chemicals', 'Application: Threaded Joints, Flanges & Pump Casings', 'Finish: Tough, Flexible, Non-Hardening Seal'],
    featured: false
  },
  {
    id: 21,
    name: 'Related Connectors & Accessories',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Adapters & Bushings • Complete Installation Hardware',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Full assortment of PVC male and female threaded adapters (MTA/FTA), tank connectors, barrel nipples, clamp fittings, and line transition accessories.',
    specs: ['Size Range: 1/2" to 2" BSP Male & Female', 'Thread Standard: Precision BSP Parallel / Tapered', 'Material: Virgin UV-Grade PVC', 'Compatibility: HDPE, PVC & Metal Pipelines'],
    featured: false
  },

  // ==========================================
  // 3. GARDEN & PLANTATION HOSES (8 Products)
  // ==========================================
  {
    id: 22,
    name: 'PVC Garden Hose',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Flexible & Lightweight • Multipurpose Watering Hose',
    image: '/assets/hoses_showcase.jpg',
    description: 'Flexible green PVC garden hose designed for daily plant watering, landscaping, lawn care, nursery beds, and light domestic washdown.',
    specs: ['Inner Diameter: 1/2", 3/4", 1"', 'Roll Lengths: 30m, 50m, 100m Rolls', 'Characteristics: Lightweight, non-kinking, all-weather flex', 'Color: Vibrant Emerald Green'],
    featured: false
  },
  {
    id: 23,
    name: 'Braided Hose',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Extra Strength & Durability • Cross-Yarn Reinforced',
    image: '/assets/hoses_showcase.jpg',
    description: 'High-tensile cross-braided PVC hose with transparent green outer skin. Resists high water pressure, twisting, crushing, and field abrasion.',
    specs: ['Inner Diameter: 1/2", 3/4", 1"', 'Working Pressure: 8 - 12 Bar', 'Reinforcement: High-Tenacity Polyester Braided Yarn', 'Temperature Range: -5°C to +65°C'],
    featured: false
  },
  {
    id: 24,
    name: 'Jumbo Hose',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Heavy Duty for Agriculture • High Volume Flow Transfer',
    image: '/assets/hoses_showcase.jpg',
    description: 'Thick-walled heavy duty jumbo agricultural hose capable of handling rigorous field use, farm machinery movement, and high discharge volumes.',
    specs: ['Sizes: 1", 1.25", 1.5" Inner Diameter', 'Construction: Heavy Duty Thick Wall', 'Application: Commercial Farms, Estates & Plantations', 'Color: Dark Agricultural Green / Black'],
    featured: false
  },
  {
    id: 25,
    name: '5-Layer Agricultural Spray Hose',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Power Spray Hose • High Pressure Pesticide & Chemical Spraying',
    image: '/assets/hoses_showcase.jpg',
    description: 'Vibrant yellow 5-layer high-pressure spray hose built for tractor-mounted power sprayers, orchard pesticide application, and chemical washdowns.',
    specs: ['Sizes: 8.5mm & 10mm ID', 'Bursting Pressure: 200 Bar (3000 PSI)', 'Layers: 5-Layer Composite with Dual Braided Polyester', 'Chemical Resistance: Insecticides, Fungicides & Fertilizers'],
    featured: false
  },
  {
    id: 26,
    name: 'Drip Hose',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Low-Flow Irrigation Hose • Flexible Vegetable & Plant Watering',
    image: '/assets/hoses_showcase.jpg',
    description: 'Flexible black polyethylene drip hose pipe for delivering water smoothly to low-flow agricultural drippers, stakes, and vegetable beds.',
    specs: ['Sizes: 12mm & 16mm Outer Diameter', 'Working Pressure: 1.0 - 3.0 Bar', 'UV Protection: Carbon Black UV Inhibitor', 'Application: Row Crops, Nurseries & Raised Beds'],
    featured: false
  },
  {
    id: 27,
    name: 'Suction Hose',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Spiral Helix Reinforced • Water Transfer & Pump Suction',
    image: '/assets/hoses_showcase.jpg',
    description: 'Heavy-duty green transparent suction hose with embedded rigid PVC spiral helix. Prevents collapse under vacuum during pump suction from rivers and wells.',
    specs: ['Sizes: 1" to 4" (25mm to 100mm)', 'Vacuum Resistance: 700 mmHg', 'Reinforcement: Helical Rigid PVC Spiral Rib', 'Application: Agricultural Pump Suction & Dewatering'],
    featured: false
  },
  {
    id: 28,
    name: 'Delivery Hose',
    category: 'Garden & Plantation Hoses',
    subtitle: 'High Pressure Water Delivery • Field Discharge Hose',
    image: '/assets/hoses_showcase.jpg',
    description: 'Reinforced blue agricultural delivery hose designed for pump discharge lines, tank filling, and long-distance water conveyance under pressure.',
    specs: ['Sizes: 1.5", 2", 2.5", 3"', 'Pressure Rating: 6 - 10 Bar', 'Outer Cover: UV & Abrasion Resistant Blue Polymeric Compound', 'Application: Main Pump Discharge & Farm Water Transfer'],
    featured: false
  },
  {
    id: 29,
    name: 'Flat Hose (Layflat Discharge Hose)',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Layflat Dewatering Hose • Flexible & Compact Storage',
    image: '/assets/hoses_showcase.jpg',
    description: 'Heavy-duty blue layflat discharge hose made from synthetic woven fiber encapsulated in PVC. Rolls completely flat for effortless transport and field deployment.',
    specs: ['Sizes: 2", 2.5", 3", 4", 6" ID', 'Coil Length: 50m / 100m Coils', 'Working Pressure: Up to 6 Bar', 'Storage: Rolls 100% Flat for Easy Relocation'],
    featured: false
  },

  // ==========================================
  // 4. DRIP IRRIGATION SYSTEMS (10 Products)
  // ==========================================
  {
    id: 30,
    name: 'Drip Pipes',
    category: 'Drip Irrigation Systems',
    subtitle: 'Main & Sub-Main Tubing • Smooth Virgin Polyethylene Conduit',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'Virgin LDPE/LLDPE black drip pipes for main and sub-main irrigation lines. Smooth inner walls prevent chemical buildup and guarantee uniform water pressure.',
    specs: ['Sizes: 16mm, 20mm, 25mm, 32mm OD', 'Pressure Rating: Class 2 (2.5 Bar) & Class 3 (4 Bar)', 'Standard: IS 12786 Certified', 'UV Protection: UV-Stabilized for 5+ Years Outdoor Life'],
    featured: false
  },
  {
    id: 31,
    name: 'Drippers (Online Button Drippers)',
    category: 'Drip Irrigation Systems',
    subtitle: 'Take-Apart Drippers • Targeted Root Zone Irrigation',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'Color-coded take-apart button drippers delivering measured water volume directly to individual plant root zones. Removable cap allows effortless cleaning.',
    specs: ['Discharge Rates: 2 LPH, 4 LPH, 8 LPH', 'Type: Take-Apart Turbulent Flow Labyrinth', 'Inlet: 4mm Barbed Punch Connection', 'Application: Potted Plants, Fruit Trees, Vegetables'],
    featured: false
  },
  {
    id: 32,
    name: 'Inline Drippers',
    category: 'Drip Irrigation Systems',
    subtitle: 'Pre-Extruded Inline Tubing • Precision Flow for Row Crops',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'Precision dripline tubing with pre-inserted cylindrical labyrinth drippers at spaced intervals for uniform row crop hydration without manual dripping stakes.',
    specs: ['Emitter Spacing: 20cm, 30cm, 40cm, 50cm', 'Flow Rate: 2.0 / 4.0 LPH per emitter', 'Wall Thickness: 0.2mm - 0.4mm (8-16 mil)', 'Application: Sugarcane, Vegetables, Banana & Papaya'],
    featured: false
  },
  {
    id: 33,
    name: 'Drip Laterals',
    category: 'Drip Irrigation Systems',
    subtitle: 'Field Drip Laterals • Thin Wall & Standard Irrigation Coils',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'High flexibility virgin LLDPE lateral drip line coils engineered for high crack-resistance under intense field sunlight and flexible placement across uneven rows.',
    specs: ['Diameter: 16mm Outer Diameter', 'Coil Lengths: 250m, 500m, 1000m Coils', 'Anti-Clogging: Wide cross-section turbulent emitter labyrinth', 'Material: Virgin Low Density Polyethylene'],
    featured: false
  },
  {
    id: 34,
    name: 'Emitters (Pressure Compensating - PC)',
    category: 'Drip Irrigation Systems',
    subtitle: 'PC Emitters • Constant Uniform Flow on Slopes & Long Runs',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'Pressure compensating emitters equipped with an internal silicone diaphragm ensuring identical discharge rates regardless of undulating terrain or pressure drops.',
    specs: ['Flow Rates: 4 LPH & 8 LPH Constant Discharge', 'Operating Pressure Range: 0.8 - 4.0 Bar', 'Diaphragm: Medical Grade Silicone', 'Application: Undulating Land, Terraces & Long Lateral Rows'],
    featured: false
  },
  {
    id: 35,
    name: 'Drip Connectors',
    category: 'Drip Irrigation Systems',
    subtitle: 'Barbed Joiners, Tees & Elbows • Tool-Free Quick Push Fit',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'Complete series of barbed straight joiners, tee connectors, elbows, and lock-nut fittings for quick, leak-proof, tool-free connection of lateral drip pipes.',
    specs: ['Sizes: 16mm & 20mm Outer Diameter', 'Design: Sharp Deep Barbs for Leak-Proof Hold', 'Material: Engineered UV-Stabilized Polymer', 'Connection: Push-fit Barbed & Threaded Lock Nut'],
    featured: false
  },
  {
    id: 36,
    name: 'Control Valves (Mini Drip Valves)',
    category: 'Drip Irrigation Systems',
    subtitle: 'Lateral Isolation Valves • Smooth Red Handle Control',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'Compact quarter-turn mini ball valves with high-visibility red handles for isolating individual lateral rows or greenhouse drip zones easily.',
    specs: ['Configurations: 16mm Barb x Barb, 16mm Barb x Thread', 'Working Pressure: Up to 4 Bar', 'Operation: Quarter Turn On/Off', 'Seal: High Integrity Rubber Grommet Seal'],
    featured: false
  },
  {
    id: 37,
    name: 'Filters (Screen & Disc Mainline Filters)',
    category: 'Drip Irrigation Systems',
    subtitle: 'Filtration Units • Anti-Clogging Protection for Emitters',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'High-capacity agricultural screen and disc water filters preventing sand, silt, and organic matter from clogging fine dripper labyrinths and micro-sprinklers.',
    specs: ['Inlet/Outlet: 1", 1.5", 2" BSP Male Thread', 'Filtration Rating: 120 Mesh / 130 Micron', 'Flow Capacity: 5 to 30 m³/Hour', 'Cartridge: Cleanable Stainless Steel Screen / Stacked Discs'],
    featured: false
  },
  {
    id: 38,
    name: 'Service Saddles',
    category: 'Drip Irrigation Systems',
    subtitle: 'Mainline Clamping Saddles • Threaded Branch Takeoffs',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'Two-piece clamp-on service saddles with zinc-plated bolts and EPDM sealing gasket for tapping lateral takeoffs directly from rigid PVC or HDPE mainlines.',
    specs: ['Mainline Pipe Sizes: 50mm, 63mm, 75mm, 90mm', 'Outlet Female Thread: 1/2", 3/4", 1" BSP', 'Pressure Rating: PN10 / PN16', 'Seal: Molded EPDM O-Ring'],
    featured: false
  },
  {
    id: 39,
    name: 'End Caps & Related Drip Accessories',
    category: 'Drip Irrigation Systems',
    subtitle: 'Figure-8 Line Ends, Flush Plugs & Hole Punches',
    image: '/assets/drip_irrigation_showcase.jpg',
    description: 'Essential drip network installation accessories including Figure-8 line end closures, flush valves, grommet rubber takeoffs, hole punch tools, and gooseneck stakes.',
    specs: ['Components: Figure-8 End Caps, Gooseneck Stakes, 4mm Punch Tools', 'Application: Network Flushing, Line Termination & Pipe Securing', 'Material: Virgin UV-Stabilized Polypropylene'],
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

// Direct WhatsApp Inquiry Router with official phone number
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