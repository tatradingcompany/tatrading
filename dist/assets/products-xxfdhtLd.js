import{i as g,g as m,a as v}from"./main-DTm1r5wv.js";document.addEventListener("DOMContentLoaded",()=>{g();const u=m(),i=document.getElementById("catalog-grid"),l=document.getElementById("catalog-search"),s=document.querySelectorAll(".cat-btn"),d=document.getElementById("no-results-state");let c="all";function n(){const t=l.value.toLowerCase().trim(),r=u.filter(e=>{const a=c==="all"||e.category===c,o=!t||e.name.toLowerCase().includes(t)||e.subtitle.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)||e.features&&e.features.some(p=>p.toLowerCase().includes(t));return a&&o});if(r.length===0){i.innerHTML="",d.style.display="block";return}d.style.display="none",i.innerHTML=r.map(e=>`
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
                ${(e.features||[]).map(a=>`
                  <li><i class="fas fa-check-circle"></i> <span>${a}</span></li>
                `).join("")}
              </ul>
              <div class="product-card-footer">
                <button class="btn btn-whatsapp w-100 btn-enquire" data-name="${e.name}">
                  <i class="fab fa-whatsapp"></i> Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        `).join(""),document.querySelectorAll(".btn-enquire").forEach(e=>{e.addEventListener("click",a=>{const o=a.currentTarget.getAttribute("data-name");v(o)})})}s.forEach(t=>{t.addEventListener("click",()=>{s.forEach(r=>r.classList.remove("active")),t.classList.add("active"),c=t.getAttribute("data-category"),n()})}),l.addEventListener("input",n),document.getElementById("btn-reset-filter").addEventListener("click",()=>{l.value="",c="all",s.forEach(t=>t.classList.remove("active")),s[0].classList.add("active"),n()}),n()});
