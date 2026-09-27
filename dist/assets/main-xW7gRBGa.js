import{i as r,g as c,a as l}from"./main-CGKacfS-.js";document.addEventListener("DOMContentLoaded",()=>{r();const t=c(),e=document.getElementById("featured-sprinklers-grid"),i=t.filter(a=>a.category==="Irrigation Sprinklers");e.innerHTML=i.map(a=>`
        <div class="product-card">
          <div class="product-thumb-wrap">
            <img src="${a.image}" alt="${a.name}" class="product-thumb" loading="lazy" onerror="this.src='/assets/sprinklers_showcase.jpg'" />
            <span class="product-badge-cat">${a.category}</span>
            <span class="product-badge-featured">Featured</span>
          </div>
          <div class="product-content">
            <h3 class="product-title">${a.name}</h3>
            <div class="product-subtitle">${a.subtitle}</div>
            <p style="font-size: 0.85rem; color: #475569; margin-bottom: 12px; line-height: 1.45;">${a.description}</p>
            <ul class="product-specs-list">
              ${a.specs.slice(0,3).map(s=>`
                <li><i class="fas fa-check-circle" style="color: var(--primary);"></i> <span>${s}</span></li>
              `).join("")}
            </ul>
            <div class="product-card-footer">
              <button class="btn btn-whatsapp w-100 btn-enquire" data-name="${a.name}">
                <i class="fab fa-whatsapp"></i> Enquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      `).join(""),document.querySelectorAll(".btn-enquire").forEach(a=>{a.addEventListener("click",s=>{const n=s.currentTarget.getAttribute("data-name");l(n)})})});
