import{i as m,g as p,a as y}from"./main-BWkfXG_C.js";document.addEventListener("DOMContentLoaded",()=>{m();const a=p(),d=document.getElementById("catalog-grid"),l=document.getElementById("catalog-search"),s=document.querySelectorAll(".cat-btn"),u=document.getElementById("no-results-state");document.getElementById("count-all").textContent=a.length,document.getElementById("count-sprinklers").textContent=a.filter(t=>t.category==="Irrigation Sprinklers").length,document.getElementById("count-pvc").textContent=a.filter(t=>t.category==="PVC Fittings & Accessories").length,document.getElementById("count-hoses").textContent=a.filter(t=>t.category==="Garden & Plantation Hoses").length,document.getElementById("count-drip").textContent=a.filter(t=>t.category==="Drip Irrigation Systems").length;let c="all";function o(){const t=l.value.toLowerCase().trim(),r=a.filter(e=>{const n=c==="all"||e.category===c,i=!t||e.name.toLowerCase().includes(t)||e.subtitle.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)||e.features&&e.features.some(g=>g.toLowerCase().includes(t));return n&&i});if(r.length===0){d.innerHTML="",u.style.display="block";return}u.style.display="none",d.innerHTML=r.map(e=>`
          <div class="product-card">
            <div class="product-thumb-wrap">
              <img src="${e.image}" alt="${e.name}" class="product-thumb" loading="lazy" onerror="this.src='/assets/sprinklers_showcase.jpg'" />
              <span class="product-badge-cat">${e.category}</span>
            </div>
            <div class="product-content">
              <h3 class="product-title">${e.name}</h3>
              <div class="product-subtitle">${e.subtitle}</div>
              <p class="product-desc-text">${e.description}</p>
              <ul class="product-features-list">
                ${(e.features||[]).map(n=>`
                  <li><i class="fas fa-check-circle"></i> <span>${n}</span></li>
                `).join("")}
              </ul>
              <div class="product-card-footer">
                <button class="btn btn-whatsapp w-100 btn-enquire" data-name="${e.name}">
                  <i class="fab fa-whatsapp"></i> Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        `).join(""),document.querySelectorAll(".btn-enquire").forEach(e=>{e.addEventListener("click",n=>{const i=n.currentTarget.getAttribute("data-name");y(i)})})}s.forEach(t=>{t.addEventListener("click",()=>{s.forEach(r=>r.classList.remove("active")),t.classList.add("active"),c=t.getAttribute("data-category"),o()})}),l.addEventListener("input",o),document.getElementById("btn-reset-filter").addEventListener("click",()=>{l.value="",c="all",s.forEach(t=>t.classList.remove("active")),s[0].classList.add("active"),o()}),o()});
