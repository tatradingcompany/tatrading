import{i as m,g as p,a as y}from"./main-C1oS_Kib.js";document.addEventListener("DOMContentLoaded",()=>{m();const n=p(),d=document.getElementById("catalog-grid"),r=document.getElementById("catalog-search"),s=document.querySelectorAll(".cat-btn"),u=document.getElementById("no-results-state");document.getElementById("count-all").textContent=n.length,document.getElementById("count-sprinklers").textContent=n.filter(t=>t.category==="Sprinklers").length,document.getElementById("count-pvc").textContent=n.filter(t=>t.category==="PVC & Solvents").length,document.getElementById("count-hoses").textContent=n.filter(t=>t.category==="Hoses").length,document.getElementById("count-drip").textContent=n.filter(t=>t.category==="Drip Irrigation").length;let c="all";function o(){const t=r.value.toLowerCase().trim(),l=n.filter(e=>{const a=c==="all"||e.category===c,i=!t||e.name.toLowerCase().includes(t)||e.subtitle.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)||e.specs&&e.specs.some(g=>g.toLowerCase().includes(t));return a&&i});if(l.length===0){d.innerHTML="",u.style.display="block";return}u.style.display="none",d.innerHTML=l.map(e=>`
          <div class="product-card">
            <div class="product-thumb-wrap">
              <img src="${e.image}" alt="${e.name}" class="product-thumb" onerror="this.src='/assets/sprinklers_category.jpg'" />
              <span class="product-badge-cat">${e.category}</span>
            </div>
            <div class="product-content">
              <h3 class="product-title">${e.name}</h3>
              <div class="product-subtitle">${e.subtitle}</div>
              <ul class="product-specs-list">
                ${e.specs.slice(0,3).map(a=>`
                  <li><i class="fas fa-check"></i> <span>${a}</span></li>
                `).join("")}
              </ul>
              <div class="product-card-footer">
                <button class="btn btn-whatsapp w-100 btn-enquire" data-name="${e.name}">
                  <i class="fab fa-whatsapp"></i> Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        `).join(""),document.querySelectorAll(".btn-enquire").forEach(e=>{e.addEventListener("click",a=>{const i=a.currentTarget.getAttribute("data-name");y(i)})})}s.forEach(t=>{t.addEventListener("click",()=>{s.forEach(l=>l.classList.remove("active")),t.classList.add("active"),c=t.getAttribute("data-category"),o()})}),r.addEventListener("input",o),document.getElementById("btn-reset-filter").addEventListener("click",()=>{r.value="",c="all",s.forEach(t=>t.classList.remove("active")),s[0].classList.add("active"),o()}),o()});
