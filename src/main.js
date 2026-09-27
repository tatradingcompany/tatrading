// TA TRADING COMPANY - Core Catalog & Interactive Controller
// Source of Truth: Official TA Trading Reference Catalog
// Updated: Dedicated authentic product photography & clean application-focused highlights (zero dimensions)

const STORAGE_KEY = 'ta_products_catalog_v4';

export const defaultBrochureProducts = [
  // ==========================================
  // 1. IRRIGATION SPRINKLERS (10 Products)
  // ==========================================
  {
    id: 1,
    name: 'Winkler / Impact Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Impact Type • Heavy duty, ideal for agriculture and large areas',
    image: '/assets/prod_winkler.jpg',
    description: 'Heavy-duty impact sprinkler engineered for agricultural crop fields, plantations, and wide acreage with uniform precipitation.',
    features: ['Uniform circular water curtain', 'Corrosion & weather-resistant metal spring', 'Ideal for open farm fields & large crops'],
    featured: true
  },
  {
    id: 2,
    name: 'Butterfly / Mini Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Mini Sprinkler • Ideal for nurseries, gardens and plantations',
    image: '/assets/prod_butterfly.jpg',
    description: 'Gentle circular mini sprinkler providing soft overhead droplet distribution without splashing delicate foliage or displacing seedbeds.',
    features: ['Gentle 360° overhead droplet spray', 'Protects delicate topsoil & young seedlings', 'Ideal for tea, coffee & vegetable nurseries'],
    featured: true
  },
  {
    id: 3,
    name: 'Pop-Up Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Pop-Up Type • Perfect for lawns and landscaped gardens',
    image: '/assets/prod_popup.jpg',
    description: 'Retractable pop-up gear and spray body that rises flush from turf under water pressure and retracts safely below mower level when off.',
    features: ['Rises smoothly under water pressure', 'Retracts flush for hassle-free lawn mowing', 'Adjustable spray arc for clean landscape edges'],
    featured: true
  },
  {
    id: 4,
    name: 'Rotary Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Rotary Type • Uniform water distribution for medium to large areas',
    image: '/assets/prod_rotary.jpg',
    description: 'Multi-arm spinning rotary sprinkler ensuring even, wind-resistant precipitation and low application rate to eliminate surface runoff.',
    features: ['Multi-stream spinning rotary coverage', 'Wind-resistant uniform water distribution', 'Gentle precipitation suited for delicate foliage'],
    featured: true
  },
  {
    id: 5,
    name: 'Gear Drive Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Gear Drive Type • Long range coverage with consistent rainfall',
    image: '/assets/prod_geardrive.jpg',
    description: 'Water-lubricated internal gear drive mechanism delivering smooth, silent continuous rotation and uniform water curtain over long throwing distances.',
    features: ['Smooth & silent enclosed gear rotation', 'Consistent rainfall curtain over long throw', 'Protected internal drive against dirt & debris'],
    featured: true
  },
  {
    id: 6,
    name: 'Rain Gun Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Big Gun Type • High discharge for large farms and open fields',
    image: '/assets/prod_raingun.jpg',
    description: 'High-volume commercial agricultural rain gun engineered for extensive sugarcane, fodder crops, pastures, and open plantations.',
    features: ['Massive high-discharge water throw', 'Dual interchangeable trajectory nozzles', 'Heavy-duty agricultural alloy & brass construction'],
    featured: true
  },
  {
    id: 7,
    name: 'Micro Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Micro Irrigation • Low flow, suitable for gardens and nurseries',
    image: '/assets/prod_micro.jpg',
    description: 'Low-volume micro irrigation sprinkler designed for under-tree orchard watering, polyhouses, shade nets, and sensitive seedling germination.',
    features: ['Low-flow micro droplet delivery', 'Precision spinning rotor for targeted coverage', 'Easy ground stake mounting for row crops & trees'],
    featured: true
  },
  {
    id: 8,
    name: 'Mist Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Misting Type • Fine mist for cooling, humidity and nurseries',
    image: '/assets/prod_mist.jpg',
    description: 'High-precision misting nozzle producing fine micronized water droplets for humidity stabilization and cooling in greenhouses and nurseries.',
    features: ['Micro-fine cooling water mist', 'Controls ambient humidity in polyhouses', 'Ideal for plant cutting propagation & shade houses'],
    featured: true
  },
  {
    id: 9,
    name: 'Fogger Sprinkler',
    category: 'Irrigation Sprinklers',
    subtitle: 'Fogging Type • Ultra fine mist for cooling, humidity control and nurseries',
    image: '/assets/prod_fogger.jpg',
    description: '4-way cross ultra-fine fogger sprinkler assembly with integrated silicone anti-drip valve preventing post-shutoff dripping.',
    features: ['4-way cross ultra-fine fog distribution', 'Integrated anti-drip valve prevents leakage', 'Maintains optimal climate for tissue culture & greens'],
    featured: true
  },
  {
    id: 10,
    name: 'Sprinkler Accessories',
    category: 'Irrigation Sprinklers',
    subtitle: 'Accessories • Nozzles, risers, adaptors, filters and more',
    image: '/assets/prod_sprinkler_acc.jpg',
    description: 'Complete range of sprinkler mounting accessories including threaded risers, quick-snap hose connectors, replacement nozzles, and mini filters.',
    features: ['Threaded risers & quick mounting adapters', 'Interchangeable replacement nozzle tips', 'Universal compatibility across agricultural sprinklers'],
    featured: true
  },

  // ==========================================
  // 2. PVC FITTINGS & IRRIGATION ACCESSORIES (11 Products)
  // ==========================================
  {
    id: 11,
    name: 'PVC Elbows',
    category: 'PVC Fittings & Accessories',
    subtitle: 'High Pressure Directional Pipe Bends',
    image: '/assets/prod_pvc_elbows.jpg',
    description: 'Heavy-duty injection molded PVC 90-degree and 45-degree elbows for directional routing in mainline and sub-mainline irrigation pipelines.',
    features: ['High-pressure structural strength', 'Smooth interior for friction-free flow', 'Available in 90° and 45° bends for pressure pipelines'],
    featured: false
  },
  {
    id: 12,
    name: 'PVC Tees',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Equal & Reducing Branch Junctions',
    image: '/assets/prod_pvc_tees.jpg',
    description: 'Equal and reducing PVC tees providing smooth flow distribution for mainline branching to secondary irrigation lines and sprinkler risers.',
    features: ['Seamless three-way flow distribution', 'Equal & reducing branching options', 'Heavy-duty wall thickness for farm pipelines'],
    featured: false
  },
  {
    id: 13,
    name: 'PVC Couplers',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Straight Socket Line Joiners',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Precision molded straight PVC couplers for joining plain end irrigation pressure pipes with permanent solvent cement weld joints.',
    features: ['High-integrity straight socket joints', 'Resistant to soil chemicals & fertilizers', 'Permanent solvent cement weld sealing'],
    featured: false
  },
  {
    id: 14,
    name: 'PVC Unions',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Quick Disconnect Barrel Unions',
    image: '/assets/prod_pvc_tees.jpg',
    description: 'Three-piece PVC barrel unions with rubber O-ring seal allowing simple line disconnection for pump maintenance and filter cleaning.',
    features: ['Easy line disconnect without pipe cutting', 'Durable leak-proof O-ring seal', 'Essential for pump manifolds & filter banks'],
    featured: false
  },
  {
    id: 15,
    name: 'PVC Reducers',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Concentric & Bushing Pipe Reducers',
    image: '/assets/prod_pvc_elbows.jpg',
    description: 'Concentric reducers and flush reducer bushings for stepping down pipe diameters from pump discharge mainlines to secondary lines.',
    features: ['Smooth diameter step-down transition', 'Minimizes pressure drops & turbulence', 'Available in concentric and flush bushing styles'],
    featured: false
  },
  {
    id: 16,
    name: 'PVC End Caps',
    category: 'PVC Fittings & Accessories',
    subtitle: 'High Pressure Line Termination Caps',
    image: '/assets/prod_pvc_elbows.jpg',
    description: 'Robust PVC socket and threaded end caps for sealing pipe terminates, flush manifolds, and future pipeline expansion points.',
    features: ['High pressure termination seal', 'Available in solvent socket & threaded styles', 'Ideal for pipeline flushing manifolds'],
    featured: false
  },
  {
    id: 17,
    name: 'PVC Valves',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Compact Ball Valves with Red Lever Handle',
    image: '/assets/prod_pvc_valve.jpg',
    description: 'Smooth quarter-turn PVC compact ball valves with high-visibility red handles and leak-proof seats for reliable flow control.',
    features: ['Effortless quarter-turn on/off operation', 'High-visibility ergonomic red lever handle', 'Leak-proof internal seal for farm pipelines'],
    featured: false
  },
  {
    id: 18,
    name: 'Solvent Cement',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Bulldog Super PVC High Pressure Solvent Cement',
    image: '/assets/prod_bulldog_solvent.jpg',
    description: 'Heavy-duty Bulldog Super PVC fast-curing solvent cement formulated for permanent, chemical-welded joints in irrigation pressure pipes.',
    features: ['Fast-curing chemical fusion bonding', 'Withstands extreme water pressure spikes', 'Heavy-bodied formula prevents joint leaks'],
    featured: false
  },
  {
    id: 19,
    name: 'PVC Adhesive',
    category: 'PVC Fittings & Accessories',
    subtitle: 'High Strength Irrigation Pipe Adhesive',
    image: '/assets/prod_bulldog_solvent.jpg',
    description: 'Specialized PVC pipe adhesive providing chemically bonded, waterproof joints resistant to fertilizer salts and temperature fluctuations.',
    features: ['High shear strength waterproof bond', 'Resistant to agricultural chemicals & fertilizers', 'Quick initial set for rapid field repairs'],
    featured: false
  },
  {
    id: 20,
    name: 'Shellac / Gasket Compound',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Bulldog Gasket Shellac Leak-Proof Sealant',
    image: '/assets/prod_bulldog_shellac.jpg',
    description: 'Authentic Bulldog Gasket Shellac compound for sealing pump flanges, threaded pipe fittings, gaskets, and preventing fluid leaks.',
    features: ['Non-hardening flexible leak-proof seal', 'Resistant to water, oils & agricultural chemicals', 'Convenient brush-in-cap applicator bottle'],
    featured: false
  },
  {
    id: 21,
    name: 'Related Connectors & Accessories',
    category: 'PVC Fittings & Accessories',
    subtitle: 'Threaded Adapters, Nipples & Tank Connectors',
    image: '/assets/pvc_fittings_showcase.jpg',
    description: 'Full assortment of PVC male and female threaded adapters, tank connectors, hex nipples, and line transition accessories.',
    features: ['Precision-machined threaded adapters', 'Seamless transition between PVC, HDPE & metal', 'Durable UV-stabilized virgin polymer'],
    featured: false
  },

  // ==========================================
  // 3. GARDEN & PLANTATION HOSES (8 Products)
  // ==========================================
  {
    id: 22,
    name: 'PVC Garden Hoses',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Lightweight & multipurpose flexible watering hose',
    image: '/assets/prod_garden_hose.jpg',
    description: 'Flexible green PVC garden hose designed for daily plant watering, landscaping, lawn care, nursery beds, and general washdown.',
    features: ['Lightweight & highly flexible', 'All-weather kink-resistant construction', 'Vibrant emerald green UV-protected outer skin'],
    featured: false
  },
  {
    id: 23,
    name: 'Braided Hoses',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Extra strength and durability with reinforced braid',
    image: '/assets/prod_braided_hose.jpg',
    description: 'High-tensile cross-braided PVC hose with clear green outer skin. Resists high water pressure, twisting, and field abrasion.',
    features: ['Cross-braided polyester yarn reinforcement', 'Resists high water pressure & twisting', 'Transparent green skin with visible heavy braid'],
    featured: false
  },
  {
    id: 24,
    name: 'Jumbo Hoses',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Heavy duty for agriculture use and high volume flow',
    image: '/assets/prod_jumbo_hose.jpg',
    description: 'Thick-walled heavy duty jumbo agricultural hose capable of handling rigorous field use, farm machinery movement, and high discharge volumes.',
    features: ['Extra thick heavy-duty wall construction', 'Handles rough farm ground & high volume transfer', 'Crush-resistant all-weather polymer'],
    featured: false
  },
  {
    id: 25,
    name: 'Spray Hoses',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Ideal for spraying and garden use (5-Layer high pressure)',
    image: '/assets/prod_spray_hose.jpg',
    description: 'Vibrant yellow 5-layer high-pressure spray hose built for tractor power sprayers, orchard pesticide application, and chemical wash.',
    features: ['5-layer composite with dual yarn braid', 'Extreme burst pressure resistance', 'High chemical resistance to pesticides & fertilizers'],
    featured: false
  },
  {
    id: 26,
    name: 'Drip Hoses',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Suitable for low-flow irrigation and vegetable rows',
    image: '/assets/prod_drip_hose.jpg',
    description: 'Flexible black polyethylene drip hose pipe for delivering water smoothly to low-flow agricultural drippers, stakes, and vegetable beds.',
    features: ['Flexible smooth delivery for micro irrigation', 'Carbon black UV inhibitor for outdoor lifespan', 'Easy punch-in compatibility for button drippers'],
    featured: false
  },
  {
    id: 27,
    name: 'Suction Hoses',
    category: 'Garden & Plantation Hoses',
    subtitle: 'For water transfer and pump use (Rigid spiral helix)',
    image: '/assets/prod_suction_hose.jpg',
    description: 'Heavy-duty green transparent suction hose with embedded rigid PVC spiral helix preventing collapse under vacuum during pump suction.',
    features: ['Rigid PVC spiral helix prevents vacuum collapse', 'Transparent green wall allows visual flow check', 'Ideal for agricultural pump intakes & dewatering'],
    featured: false
  },
  {
    id: 28,
    name: 'Delivery Hoses',
    category: 'Garden & Plantation Hoses',
    subtitle: 'High pressure water delivery and discharge hose',
    image: '/assets/prod_delivery_hose.jpg',
    description: 'Reinforced blue agricultural delivery hose designed for pump discharge lines, tank filling, and long-distance water conveyance.',
    features: ['High-pressure water discharge capacity', 'Tough abrasion-resistant blue outer skin', 'Flexible routing across farm terrains & ponds'],
    featured: false
  },
  {
    id: 29,
    name: 'Flat Hoses',
    category: 'Garden & Plantation Hoses',
    subtitle: 'Flexible and easy to store layflat discharge hose',
    image: '/assets/prod_flat_hose.jpg',
    description: 'Heavy-duty blue layflat discharge hose made from synthetic woven fiber encapsulated in PVC. Rolls completely flat for effortless transport.',
    features: ['Rolls 100% flat for compact transport & storage', 'High-tensile synthetic fiber reinforcement', 'Fast deployment for emergency dewatering & flood lines'],
    featured: false
  },

  // ==========================================
  // 4. DRIP IRRIGATION SYSTEMS (10 Products)
  // ==========================================
  {
    id: 30,
    name: 'Drip Pipes',
    category: 'Drip Irrigation Systems',
    subtitle: 'Main & Sub-Main Poly Tubing',
    image: '/assets/prod_drip_pipeline.jpg',
    description: 'Virgin polyethylene black drip pipes for main and sub-main irrigation lines. Smooth inner walls prevent chemical buildup.',
    features: ['Smooth friction-free internal water passage', 'Certified virgin polymer with UV protection', 'Highly flexible layout across uneven farm plots'],
    featured: false
  },
  {
    id: 31,
    name: 'Drippers',
    category: 'Drip Irrigation Systems',
    subtitle: 'Online Take-Apart Button Drippers',
    image: '/assets/prod_inline_dripline.jpg',
    description: 'Color-coded take-apart button drippers delivering measured water volume directly to individual plant root zones. Easy to open and clean.',
    features: ['Take-apart design for effortless cleaning', 'Turbulent labyrinth prevents silt clogging', 'Direct targeted hydration to plant root zones'],
    featured: false
  },
  {
    id: 32,
    name: 'Inline Drippers',
    category: 'Drip Irrigation Systems',
    subtitle: 'Factory-Integrated Dripper Tubing',
    image: '/assets/prod_inline_dripline.jpg',
    description: 'Precision dripline tubing with pre-inserted cylindrical labyrinth drippers at spaced intervals for uniform row crop hydration.',
    features: ['Pre-inserted inline drippers at fixed spacing', 'Uniform water emission across entire crop row', 'Ideal for sugarcane, banana, papaya & veggies'],
    featured: false
  },
  {
    id: 33,
    name: 'Drip Laterals',
    category: 'Drip Irrigation Systems',
    subtitle: 'Field Drip Lateral Coils',
    image: '/assets/prod_drip_pipeline.jpg',
    description: 'High flexibility lateral drip line coils engineered for high crack-resistance under intense field sunlight across long crop runs.',
    features: ['High environmental stress crack resistance', 'UV-stabilized for multi-season field durability', 'Ensures equal pressure along extended row lengths'],
    featured: false
  },
  {
    id: 34,
    name: 'Emitters',
    category: 'Drip Irrigation Systems',
    subtitle: 'Pressure Compensating (PC) Emitters',
    image: '/assets/prod_inline_dripline.jpg',
    description: 'Pressure compensating emitters equipped with an internal silicone diaphragm ensuring identical discharge rates on slopes and uneven ground.',
    features: ['Uniform discharge across slopes & undulating terrain', 'Internal silicone diaphragm self-regulates flow', 'Automatic self-flushing design reduces blockages'],
    featured: false
  },
  {
    id: 35,
    name: 'Drip Connectors',
    category: 'Drip Irrigation Systems',
    subtitle: 'Barbed Joiners, Tees & Elbows',
    image: '/assets/prod_drip_accessories.jpg',
    description: 'Complete series of barbed straight joiners, tee connectors, elbows, and lock-nut fittings for quick, leak-proof, tool-free connection.',
    features: ['Sharp deep barbs for leak-proof hold', 'Tool-free quick push-fit installation', 'Tough UV-stabilized polymer construction'],
    featured: false
  },
  {
    id: 36,
    name: 'Control Valves',
    category: 'Drip Irrigation Systems',
    subtitle: 'Mini Drip Ball Valves with Red Lever',
    image: '/assets/prod_drip_accessories.jpg',
    description: 'Compact quarter-turn mini ball valves with high-visibility red handles for isolating individual lateral rows or greenhouse drip zones.',
    features: ['Quarter-turn on/off flow isolation', 'High-visibility red handle for quick inspection', 'Barbed ends for snug fit into drip lateral lines'],
    featured: false
  },
  {
    id: 37,
    name: 'Filters',
    category: 'Drip Irrigation Systems',
    subtitle: 'Screen & Disc Mainline Irrigation Filters',
    image: '/assets/prod_drip_accessories.jpg',
    description: 'High-capacity agricultural screen and disc water filters preventing sand, silt, and algae from clogging fine drippers and micro-sprinklers.',
    features: ['High-capacity anti-clogging protection', 'Washable stainless screen & disc elements', 'Essential for drippers, misters & micro-sprinklers'],
    featured: false
  },
  {
    id: 38,
    name: 'Service Saddles',
    category: 'Drip Irrigation Systems',
    subtitle: 'Mainline Pipe Clamps for Lateral Offtakes',
    image: '/assets/prod_drip_accessories.jpg',
    description: 'Two-piece clamp-on service saddles with zinc-plated bolts and EPDM sealing gasket for tapping lateral takeoffs directly from mainlines.',
    features: ['Two-piece bolt clamp for rigid mainlines', 'Leak-proof molded EPDM sealing gasket', 'Female threaded branch outlet for valves & risers'],
    featured: false
  },
  {
    id: 39,
    name: 'End Caps and Related Drip Accessories',
    category: 'Drip Irrigation Systems',
    subtitle: 'Figure-8 Line Ends, Stakes & Punches',
    image: '/assets/prod_drip_accessories.jpg',
    description: 'Essential drip network installation accessories including Figure-8 line end closures, flush plugs, hole punch tools, and ground stakes.',
    features: ['Figure-8 closures for fast line flushing', 'Sturdy ground stakes secure lateral lines in place', 'Hole punch tools ensure clean dripper insertion'],
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
  message += `\nPlease share wholesale pricing, availability, and product details. Thank you!`;
  
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

// Initialize Mobile Hamburger Menu
export function initMobileNav() {
  const hamburger = document.getElementById('nav-hamburger-btn');
  const menu = document.getElementById('nav-menu-list');
  if (hamburger && menu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
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

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('open');
        const icon = hamburger.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }
}