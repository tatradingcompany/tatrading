/* ============================================================
   TA TRADING COMPANY - OFFICIAL BROCHURE & 3D ANIMATED SCRIPT
   ============================================================ */

// 1. COMPLETE OFFICIAL BROCHURE PRODUCT CATALOG DATA (31 ITEMS)
const brochureProducts = [
  // --- CATEGORY 1: IRRIGATION SPRINKLERS (10 Products) ---
  {
    id: "sprinkler-winkler",
    category: "sprinklers",
    title: "WINKLER SPRINKLER",
    subtitle: "Impact Type",
    tag: "Heavy Duty",
    img: "/assets/sprinklers_category.jpg",
    desc: "Heavy duty impact sprinkler engineered for agricultural crop fields, plantations, and wide open areas requiring high-volume uniform coverage.",
    specs: [
      "Type: Impact Sprinkler",
      "Application: Agriculture, tea/coffee plantations, large turf areas",
      "Features: Corrosion-resistant body, adjustable rotation arc",
      "High durability under continuous high-pressure operation"
    ]
  },
  {
    id: "sprinkler-butterfly",
    category: "sprinklers",
    title: "BUTTERFLY SPRINKLER",
    subtitle: "Mini Sprinkler",
    tag: "Plantation Choice",
    img: "/assets/sprinklers_category.jpg",
    desc: "Mini sprinkler ideal for nurseries, vegetable gardens, flower beds, and young tree plantations delivering gentle drop distribution.",
    specs: [
      "Type: Mini Sprinkler",
      "Application: Nurseries, home gardens, vegetable farms",
      "Features: Low operating pressure, gentle droplet size",
      "Minimizes soil erosion around delicate root lines"
    ]
  },
  {
    id: "sprinkler-popup",
    category: "sprinklers",
    title: "POP-UP SPRINKLER",
    subtitle: "Pop-Up Type",
    tag: "Lawn & Landscape",
    img: "/assets/sprinklers_category.jpg",
    desc: "Flush-ground pop-up spray units engineered for residential lawns, hotel landscapes, parks, and golf greens.",
    specs: [
      "Type: Pop-up Lawn Sprinkler",
      "Application: Residential lawns, resort gardens, golf courses",
      "Features: Retractable body stays hidden when idle",
      "Adjustable spray radius and radius reduction screw"
    ]
  },
  {
    id: "sprinkler-rotary",
    category: "sprinklers",
    title: "ROTARY SPRINKLER",
    subtitle: "Rotary Type",
    tag: "Uniform Spray",
    img: "/assets/sprinklers_category.jpg",
    desc: "Uniform water distribution sprinkler for medium to large agricultural fields, banana fields, and commercial green spaces.",
    specs: [
      "Type: Rotary Stream Sprinkler",
      "Application: Medium & large crop fields, banana & sugarcane farms",
      "Features: Smooth rotational mechanism, anti-clogging nozzle",
      "Ensures zero water waste with even droplet penetration"
    ]
  },
  {
    id: "sprinkler-geardrive",
    category: "sprinklers",
    title: "GEAR DRIVE SPRINKLER",
    subtitle: "Gear Drive Type",
    tag: "Long Range",
    img: "/assets/sprinklers_category.jpg",
    desc: "Long range gear-driven rotor sprinkler delivering consistent simulated rainfall over expansive turf and farmland.",
    specs: [
      "Type: Gear-Driven Rotor Sprinkler",
      "Application: Sports fields, large agricultural plots, open turf",
      "Features: Silent gear mechanism, water-lubricated drive",
      "Consistent precipitation rate across full arc"
    ]
  },
  {
    id: "sprinkler-raingun",
    category: "sprinklers",
    title: "RAIN GUN SPRINKLER",
    subtitle: "Big Gun Type",
    tag: "High Discharge",
    img: "/assets/sprinklers_category.jpg",
    desc: "High discharge big gun sprinkler for large agricultural farms, sugarcane, fodder, and open field irrigation.",
    specs: [
      "Type: Big Gun / Heavy Rain Gun",
      "Application: Large agricultural farms, dust suppression, sports arenas",
      "Features: Throw radius up to 30-50+ meters",
      "Adjustable jet breaker screw for droplet customization"
    ]
  },
  {
    id: "sprinkler-micro",
    category: "sprinklers",
    title: "MICRO SPRINKLER",
    subtitle: "Micro Irrigation",
    tag: "Low Flow",
    img: "/assets/sprinklers_category.jpg",
    desc: "Low flow micro irrigation spray unit suitable for nurseries, polyhouses, shade nets, and orchard root zones.",
    specs: [
      "Type: Micro Sprinkler",
      "Application: Polyhouses, greenhouses, fruit orchards",
      "Features: Operates at low water volume and low head pressure",
      "Prevents over-saturation while maintaining soil moisture"
    ]
  },
  {
    id: "sprinkler-mist",
    category: "sprinklers",
    title: "MIST SPRINKLER",
    subtitle: "Misting Type",
    tag: "Humidity & Cooling",
    img: "/assets/sprinklers_category.jpg",
    desc: "Fine misting sprinkler for temperature cooling, humidity control, mushroom farming, and plant propagation.",
    specs: [
      "Type: Misting Nozzle",
      "Application: Nurseries, poultry farms, plant propagation, cooling",
      "Features: Atomizes water droplets into micro-fine mist",
      "Reduces ambient temperature effectively"
    ]
  },
  {
    id: "sprinkler-fogger",
    category: "sprinklers",
    title: "FOGGER SPRINKLER",
    subtitle: "Fogging Type",
    tag: "Ultra Fine Mist",
    img: "/assets/sprinklers_category.jpg",
    desc: "Ultra fine fogging nozzles for micro-climate management, greenhouse climate control, and orchid nurseries.",
    specs: [
      "Type: 4-Way / 1-Way Fogger",
      "Application: High-tech greenhouses, orchid cultivation, dairy farms",
      "Features: Anti-drip valve prevents post-shutoff dripping",
      "Ultra-fine aerosol droplet creation"
    ]
  },
  {
    id: "sprinkler-accessories",
    category: "sprinklers",
    title: "SPRINKLER ACCESSORIES",
    subtitle: "Nozzles, Risers & Adaptors",
    tag: "System Fittings",
    img: "/assets/sprinklers_category.jpg",
    desc: "Complete accessories including replacement nozzles, riser pipes, thread adaptors, tripod stands, and filters.",
    specs: [
      "Includes: Brass/plastic nozzles, HDPE riser pipes, thread adaptors",
      "Application: Custom sprinkler setup & system maintenance",
      "Features: UV-stabilized heavy duty materials",
      "Compatible with standard Indian & international threads"
    ]
  },

  // --- CATEGORY 2: PVC FITTINGS, SOLVENTS & SHELLAC (4 Products) ---
  {
    id: "pvc-fittings",
    category: "pvc",
    title: "PVC FITTINGS",
    subtitle: "Elbows, Tees, Couplers, Unions, Reducers, End Caps",
    tag: "Strong Connections",
    img: "/assets/pipes_fittings_category.jpg",
    desc: "High quality PVC pressure fittings designed for leak-proof pipe jointing in agricultural and domestic water networks.",
    specs: [
      "Types: Elbows 90°/45°, Equal/Unequal Tees, Couplers, Reducers, Unions, End Caps",
      "Application: Mainline & sub-mainline irrigation piping",
      "Features: High burst pressure rating, smooth inner surface",
      "Chemical & corrosion resistant for long underground lifespan"
    ]
  },
  {
    id: "solvents-pvc",
    category: "pvc",
    title: "BULLDOG SUPER PVC SOLVENT CEMENT",
    subtitle: "Solvent Cement",
    tag: "High Pressure Bonding",
    img: "/assets/pipes_fittings_category.jpg",
    desc: "Industrial-strength PVC solvent cement formulated for rapid chemical welding of PVC pipes and fittings.",
    specs: [
      "Brand: BULLDOG Super PVC Solvent Cement",
      "Application: Cold pressure welding of PVC pipes & fittings",
      "Features: Fast curing time, high bonding tensile strength",
      "Prevents leaks under heavy hydraulic water hammer"
    ]
  },
  {
    id: "shellac-gasket",
    category: "pvc",
    title: "BULLDOG GASKET SHELLAC",
    subtitle: "Shellac Compound",
    tag: "Leak Proof Sealant",
    img: "/assets/pipes_fittings_category.jpg",
    desc: "Heavy duty gasket shellac compound for sealing flanged joints, threaded pipe connections, and pump fittings.",
    specs: [
      "Brand: BULLDOG Gasket Shellac",
      "Application: Threaded joints, pump flanges, metal-to-plastic transitions",
      "Features: Resists water pressure, heat, and vibration",
      "Ensures 100% leak-proof sealing on heavy valves"
    ]
  },
  {
    id: "valves-accessories",
    category: "pvc",
    title: "VALVES & ACCESSORIES",
    subtitle: "Ball Valves & Control Accessories",
    tag: "Flow Control",
    img: "/assets/pipes_fittings_category.jpg",
    desc: "Precision flow control valves including PVC ball valves, non-return check valves, butterfly valves, and air release valves.",
    specs: [
      "Types: Ball Valves, Check Valves, Air Release Valves, Butterfly Valves",
      "Application: Irrigation mainline section isolation & air purging",
      "Features: Smooth quarter-turn operation, heavy handle grip",
      "Prevents pipeline air locks and backflow"
    ]
  },

  // --- CATEGORY 3: GARDEN / PLANTATION HOSES (8 Products) ---
  {
    id: "hose-pvc-garden",
    category: "hoses",
    title: "PVC GARDEN HOSE",
    subtitle: "Lightweight & Multipurpose",
    tag: "Garden Essential",
    img: "/assets/hoses_category.jpg",
    desc: "Lightweight, flexible PVC garden hose designed for effortless everyday lawn watering, car washing, and domestic cleaning.",
    specs: [
      "Material: Virgin flexible PVC compound",
      "Application: Home gardens, terrace gardens, washing",
      "Features: Kink-resistant construction, smooth outer wall",
      "Available in standard 1/2\", 3/4\", and 1\" internal diameters"
    ]
  },
  {
    id: "hose-braided",
    category: "hoses",
    title: "BRAIDED HOSE",
    subtitle: "Extra Strength & Durability",
    tag: "Reinforced",
    img: "/assets/hoses_category.jpg",
    desc: "Heavy-duty nylon mesh reinforced braided hose for higher pressure delivery in plantations and commercial sites.",
    specs: [
      "Reinforcement: High tenacity polyester yarn braiding",
      "Application: Plantation spraying, pressure washing, construction",
      "Features: High bursting pressure, weather & UV resistant",
      "Retains flexibility in all temperature conditions"
    ]
  },
  {
    id: "hose-jumbo",
    category: "hoses",
    title: "JUMBO HOSE",
    subtitle: "Heavy Duty Agriculture Use",
    tag: "Agriculture Grade",
    img: "/assets/hoses_category.jpg",
    desc: "Extra thick jumbo hose built to endure dragging across rough farm terrain, tea gardens, and rubber plantations.",
    specs: [
      "Class: Heavy Duty Agriculture Grade",
      "Application: Large farms, tea/rubber plantations, industrial sites",
      "Features: Abrasion-resistant outer layer, thick wall density",
      "Handles high water volumes without twisting"
    ]
  },
  {
    id: "hose-spray",
    category: "hoses",
    title: "SPRAY HOSE",
    subtitle: "Ideal for Spraying & Garden Use",
    tag: "High Pressure Spray",
    img: "/assets/hoses_category.jpg",
    desc: "Specialized high-pressure spray hose designed for pesticide, herbicide, and liquid fertilizer spraying in orchards.",
    specs: [
      "Application: Chemical spraying, orchard pest control, power sprayers",
      "Features: Chemical-resistant inner liner, extra pressure braiding",
      "Lightweight for easy dragging across long crop rows",
      "Compatible with power sprayers and tractor pumps"
    ]
  },
  {
    id: "hose-drip",
    category: "hoses",
    title: "DRIP HOSE",
    subtitle: "Suitable for Low-Flow Irrigation",
    tag: "Low Flow Tubing",
    img: "/assets/hoses_category.jpg",
    desc: "Flexible drip hose designed for targeted low-pressure row crop watering, garden borders, and root-line soaking.",
    specs: [
      "Application: Row crops, garden borders, orchard root lines",
      "Features: Easy punch holes for emitter insertion",
      "UV resistant long-life material",
      "Conserves up to 70% water compared to surface flooding"
    ]
  },
  {
    id: "hose-suction",
    category: "hoses",
    title: "SUCTION HOSE",
    subtitle: "For Water Transfer & Pump Use",
    tag: "Pump Suction",
    img: "/assets/hoses_category.jpg",
    desc: "Helical PVC rigid spiral reinforced suction hose engineered for drawing water from open wells, ponds, and rivers.",
    specs: [
      "Reinforcement: Rigid PVC helical spiral reinforcement",
      "Application: Pump suction lines, dewatering, agricultural pumping",
      "Features: Vacuum resistant wall prevents collapse",
      "Smooth internal bore maximizes water flow rate"
    ]
  },
  {
    id: "hose-delivery",
    category: "hoses",
    title: "DELIVERY HOSE",
    subtitle: "High Pressure Use",
    tag: "High Discharge",
    img: "/assets/hoses_category.jpg",
    desc: "High pressure water delivery hose for pumping water from agricultural pump sets to distant crop fields.",
    specs: [
      "Class: High Discharge Delivery Line",
      "Application: Farm pump discharge, flood irrigation transfer",
      "Features: Flexible under pressure, easy to roll and move",
      "Resistant to tropical sunlight and soil chemicals"
    ]
  },
  {
    id: "hose-flat",
    category: "hoses",
    title: "FLAT HOSE / LAYFLAT HOSE",
    subtitle: "Flexible & Easy to Store",
    tag: "Compact Storage",
    img: "/assets/hoses_category.jpg",
    desc: "Layflat discharge hose that lays flat when empty, making it extremely easy to roll up, store, and transport.",
    specs: [
      "Type: Layflat PVC / Woven Discharge Hose",
      "Application: Temporary water delivery, construction dewatering",
      "Features: Extremely compact roll storage, light weight",
      "High tensile strength woven reinforcement"
    ]
  },

  // --- CATEGORY 4: DRIP IRRIGATION SYSTEMS (9 Products) ---
  {
    id: "drip-pipes",
    category: "drip",
    title: "DRIP PIPES",
    subtitle: "Mainline PE Drip Tubing",
    tag: "Mainlines",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "Durable virgin polyethylene main and sub-main pipes for conveying water safely across drip irrigation layouts.",
    specs: [
      "Material: Virgin LLDPE / HDPE compound",
      "Application: Drip system mainlines, sub-mains, manifold headers",
      "Features: Smooth inner surface prevents pressure loss & scale build-up",
      "UV treated to withstand intense sunlight"
    ]
  },
  {
    id: "drip-drippers",
    category: "drip",
    title: "DRIPPERS",
    subtitle: "Online & Adjustable Drippers",
    tag: "Targeted Water",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "Adjustable and fixed discharge drippers that deliver precise water volume directly to crop roots.",
    specs: [
      "Types: Adjustable Turbo Drippers, Fixed Discharge Drippers (4LPH / 8LPH)",
      "Application: Fruit trees, potted plants, uneven terrain",
      "Features: Easy cap opening for simple flushing and cleaning",
      "Uniform discharge across varying pressure ranges"
    ]
  },
  {
    id: "drip-inline-drippers",
    category: "drip",
    title: "INLINE DRIPPERS",
    subtitle: "Pre-Spaced Drippers",
    tag: "Row Crop Solution",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "Integrated drip pipes with factory pre-spaced labyrinth drippers inside the tube for uniform row crop watering.",
    specs: [
      "Type: Cylindrical / Flat Inline Drippers",
      "Spacing Options: 20cm, 30cm, 40cm, 50cm dripper spacing",
      "Application: Vegetables, sugarcane, cotton, banana rows",
      "Self-flushing labyrinth path prevents clogging"
    ]
  },
  {
    id: "drip-laterals",
    category: "drip",
    title: "DRIP LATERALS",
    subtitle: "Flexible Lateral Tubing",
    tag: "System Tubing",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "High flexibility 12mm and 16mm drip lateral pipes used to mount online drippers and micro-sprinklers.",
    specs: [
      "Sizes: 12mm, 16mm, 20mm outer diameter",
      "Application: Lateral lines in orchards, tea plantations, row crops",
      "Features: High crack resistance under bending and dragging",
      "Smooth perforation punch fit for all drippers"
    ]
  },
  {
    id: "drip-emitters",
    category: "drip",
    title: "EMITTERS",
    subtitle: "Precision Micro Emitters",
    tag: "Micro Discharge",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "Pressure-compensating micro emitters ensuring exact water discharge even on undulating slope terrain.",
    specs: [
      "Type: Pressure Compensating (PC) & Non-PC Emitters",
      "Application: Sloped land, long lateral runs, greenhouse pots",
      "Features: Maintains constant flow rate despite pressure fluctuations",
      "Color-coded for easy discharge rate identification"
    ]
  },
  {
    id: "drip-connectors",
    category: "drip",
    title: "DRIP CONNECTORS",
    subtitle: "Joiners, Tees, Elbows & Locks",
    tag: "Line Fittings",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "Complete line of barb and ring lock drip fittings including joiners, tees, elbows, grommets, and end plugs.",
    specs: [
      "Types: Straight Joiners, Barbed Tees, Elbows, Lock Connectors, End Caps",
      "Application: Joining lateral pipes to sub-mains and repairing breaks",
      "Features: Sharp barb teeth ensure zero leak grip under pressure",
      "Easy hand installation without special tools"
    ]
  },
  {
    id: "drip-control-valves",
    category: "drip",
    title: "CONTROL VALVES",
    subtitle: "Line Control Valves",
    tag: "Section Isolation",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "Mini ball valves and sub-main control valves designed to turn individual drip lines on or off independently.",
    specs: [
      "Type: Barb x Barb & Thread x Barb Mini Valves",
      "Application: Sector-wise drip irrigation control in polyhouses and farms",
      "Features: Smooth plastic lever, leak-proof internal O-ring seal",
      "Allows targeted watering of specific crop blocks"
    ]
  },
  {
    id: "drip-filters",
    category: "drip",
    title: "FILTERS",
    subtitle: "Screen & Disc Filters",
    tag: "Clean Water",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "Essential filtration units (Screen & Disc filters) that remove silt, algae, and sand particles to protect drippers.",
    specs: [
      "Types: Plastic Screen Filters, Disc Filters (120 Mesh / 130 Micron)",
      "Application: Installed at pump outlet or sub-main header",
      "Features: Large filtration surface area, easy drain cap for backwash",
      "Crucial for preventing dripper clogging and system failure"
    ]
  },
  {
    id: "drip-service-saddles",
    category: "drip",
    title: "SERVICE SADDLES",
    subtitle: "Quick-Clamp Saddles",
    tag: "Pipe Tapping",
    img: "/assets/drip_irrigation_category.jpg",
    desc: "Heavy-duty PVC service saddles for easy tapping of lateral connections from main PVC or HDPE pipelines.",
    specs: [
      "Sizes: Fits 50mm to 110mm PVC mainlines with 1/2\" to 2\" off-takes",
      "Application: Connecting sub-main lines to main distribution pipes",
      "Features: Double bolts with rubber gasket seal for leak-tight fit",
      "Fast field installation without cutting mainline pipes"
    ]
  }
];

// 2. DOM CONTENT LOADED INITIALIZER
document.addEventListener("DOMContentLoaded", () => {

  // Initialize Canvas Water Particle Animation
  initWaterCanvas();

  // Initialize 3D Card Tilt Engine
  init3DTiltEngine();

  // Populate Products Catalog Grid
  renderCatalogGrid(brochureProducts);

  // Initialize Search & Filter Controls
  initSearchAndFilters();

  // Initialize Modal Window Logic
  initProductModal();

  // Initialize Mobile Menu & Scroll Logic
  initHeaderAndMobileNav();

  // Initialize Contact Form Validation
  initContactForm();
});

// 3. CANVAS WATER PARTICLE ANIMATION ENGINE (3D / Dynamic Drops)
function initWaterCanvas() {
  const canvas = document.getElementById("waterCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || 600;
  });

  // Particle class representing water drops and rising bubbles
  class WaterDrop {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 3 + 1;
      this.speedY = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;

      if (this.y > height) {
        this.y = 0;
        this.x = Math.random() * width;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(165, 243, 183, ${this.opacity})`;
      ctx.fill();
    }
  }

  const drops = Array.from({ length: 65 }, () => new WaterDrop());

  function animate() {
    ctx.clearRect(0, 0, width, height);
    drops.forEach((d) => {
      d.update();
      d.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}

// 4. 3D TILT ENGINE FOR CARDS & PANELS
function init3DTiltEngine() {
  document.addEventListener("mousemove", (e) => {
    const tiltCards = document.querySelectorAll(".tilt-card");
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    tiltCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      // Check if mouse is near or over card
      if (
        mouseX >= rect.left - 50 &&
        mouseX <= rect.right + 50 &&
        mouseY >= rect.top - 50 &&
        mouseY <= rect.bottom + 50
      ) {
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const rotateX = (mouseY - cardCenterY) / 12;
        const rotateY = (cardCenterX - mouseX) / 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      } else {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }
    });
  });
}

// 5. RENDER CATALOG GRID WITH BROCHURE PRODUCTS
function renderCatalogGrid(products) {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="no-results-box">
        <div class="no-icon">🔍</div>
        <h3>No Products Found</h3>
        <p>Try searching for a different term like "Sprinkler", "PVC", "Hose", or "Drip".</p>
      </div>
    `;
    return;
  }

  products.forEach((prod) => {
    const card = document.createElement("div");
    card.className = "catalog-card tilt-card";
    card.setAttribute("data-id", prod.id);
    card.setAttribute("data-category", prod.category);

    const waMsg = encodeURIComponent(
      `Hi TA Trading Company, I am interested in purchasing/getting a price quote for "${prod.title}" (${prod.subtitle}) from your official catalog. Please provide details.`
    );
    const waUrl = `https://wa.me/917510671790?text=${waMsg}`;

    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${prod.img}" alt="${prod.title}" class="card-product-img" loading="lazy">
        <span class="card-tag-badge">${prod.tag}</span>
      </div>
      <div class="card-body">
        <span class="card-subtitle-badge">${prod.subtitle}</span>
        <h3 class="card-title font-outfit">${prod.title}</h3>
        <p class="card-desc">${prod.desc}</p>
        
        <div class="card-actions-row">
          <button class="btn btn-specs-view" data-id="${prod.id}">
            👁️ View Specs
          </button>
          <a href="${waUrl}" target="_blank" class="btn btn-wa-card" aria-label="Enquire on WhatsApp">
            <svg class="wa-icon-mini" viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.333 5.006l-1.417 5.176 5.297-1.389c1.464.798 3.118 1.218 4.773 1.219h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.038-5.179-2.925-7.064-1.886-1.887-4.394-2.925-7.064-2.926zm5.882 14.364c-.244.686-1.424 1.31-1.957 1.391-.533.08-1.226.113-3.484-.827-2.894-1.205-4.757-4.148-4.901-4.341-.144-.194-1.168-1.554-1.168-2.964 0-1.41.738-2.103 1.002-2.391.264-.288.577-.361.769-.361.192 0 .385.003.553.01.18.007.421-.068.66.505.245.586.837 2.04.909 2.185.072.144.12.312.024.505-.096.192-.144.312-.288.48-.144.168-.303.375-.433.504-.144.144-.294.302-.126.59.168.288.747 1.233 1.603 1.996 1.101.982 2.031 1.286 2.319 1.43.288.144.456.12.624-.072.168-.192.72-0.84.912-1.129.192-.288.384-.24.648-.144.264.096 1.68.792 1.968.936.288.144.48.216.552.336.072.12.072.696-.172 1.382z"/></svg>
            Enquire
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach click listener for "View Specs" button & card click
  document.querySelectorAll(".btn-specs-view").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      openProductModal(id);
    });
  });

  document.querySelectorAll(".catalog-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openProductModal(id);
    });
  });
}

// 6. SEARCH & FILTER CONTROLS
function initSearchAndFilters() {
  const searchInput = document.getElementById("catalogSearch");
  const clearBtn = document.getElementById("clearSearch");
  const tabBtns = document.querySelectorAll(".tab-btn");

  let currentCat = "all";
  let currentSearch = "";

  function filterCatalog() {
    const filtered = brochureProducts.filter((prod) => {
      const matchesCat = currentCat === "all" || prod.category === currentCat;
      const term = currentSearch.toLowerCase().trim();
      const matchesSearch =
        !term ||
        prod.title.toLowerCase().includes(term) ||
        prod.subtitle.toLowerCase().includes(term) ||
        prod.desc.toLowerCase().includes(term) ||
        prod.tag.toLowerCase().includes(term);

      return matchesCat && matchesSearch;
    });

    renderCatalogGrid(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = currentSearch ? "block" : "none";
      }
      filterCatalog();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        currentSearch = "";
        clearBtn.style.display = "none";
        filterCatalog();
      }
    });
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.getAttribute("data-cat");
      filterCatalog();
    });
  });

  // Footer Category Jump
  document.querySelectorAll(".cat-jump").forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetCat = link.getAttribute("data-cat");
      const matchingTab = document.querySelector(
        `.tab-btn[data-cat="${targetCat}"]`
      );
      if (matchingTab) {
        matchingTab.click();
      }
    });
  });
}

// 7. 3D PRODUCT SPECIFICATION MODAL LOGIC
function openProductModal(productId) {
  const prod = brochureProducts.find((p) => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById("productModal");
  const img = document.getElementById("modalProductImg");
  const tag = document.getElementById("modalCategoryTag");
  const subBadge = document.getElementById("modalSubBadge");
  const title = document.getElementById("modalProductTitle");
  const tagline = document.getElementById("modalProductTagline");
  const desc = document.getElementById("modalProductDesc");
  const specsList = document.getElementById("modalSpecsList");
  const waBtn = document.getElementById("modalWaBtn");

  if (!modal) return;

  img.src = prod.img;
  img.alt = prod.title;
  tag.textContent = prod.category.toUpperCase();
  subBadge.textContent = prod.tag;
  title.textContent = prod.title;
  tagline.textContent = prod.subtitle;
  desc.textContent = prod.desc;

  // Build specs list
  specsList.innerHTML = "";
  prod.specs.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  // Set WhatsApp button link
  const waMsg = encodeURIComponent(
    `Hi TA Trading Company, I am interested in purchasing/getting a price quote for "${prod.title}" (${prod.subtitle}) from your official brochure. Please share details and pricing.`
  );
  waBtn.href = `https://wa.me/917510671790?text=${waMsg}`;

  // Open modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function initProductModal() {
  const modal = document.getElementById("productModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const backdrop = document.getElementById("modalBackdrop");

  const closeModal = () => {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// 8. HEADER & MOBILE NAVIGATION
function initHeaderAndMobileNav() {
  const header = document.getElementById("mainHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        mobileMenu.classList.remove("open");
      });
    });
  }
}

// 9. CONTACT FORM VALIDATION & SUBMISSION
function initContactForm() {
  const form = document.getElementById("contactForm");
  const alertSuccess = document.getElementById("formSuccessAlert");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("formName");
    const phoneInput = document.getElementById("formPhone");
    const msgInput = document.getElementById("formMessage");

    let isValid = true;

    if (!nameInput.value.trim()) {
      nameInput.parentElement.classList.add("error");
      isValid = false;
    } else {
      nameInput.parentElement.classList.remove("error");
    }

    const phoneDigits = phoneInput.value.trim().replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      phoneInput.parentElement.classList.add("error");
      isValid = false;
    } else {
      phoneInput.parentElement.classList.remove("error");
    }

    if (!msgInput.value.trim()) {
      msgInput.parentElement.classList.add("error");
      isValid = false;
    } else {
      msgInput.parentElement.classList.remove("error");
    }

    if (isValid) {
      const submitBtn = form.querySelector(".btn-submit-glow");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = "Sending Enquiry...";

      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        if (alertSuccess) {
          alertSuccess.style.display = "block";
          setTimeout(() => {
            alertSuccess.style.display = "none";
          }, 7000);
        }
      }, 1200);
    }
  });
}
