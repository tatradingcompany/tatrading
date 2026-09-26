import{i as r,g as c,a as d}from"./main-C1oS_Kib.js";document.addEventListener("DOMContentLoaded",()=>{r();const t=c(),e=document.getElementById("featured-sprinklers-grid"),n=t.filter(a=>a.category==="Sprinklers");e.innerHTML=n.map(a=>`
        <div class="product-card">
          <div class="product-thumb-wrap">
            <img src="${a.image}" alt="${a.name}" class="product-thumb" onerror="this.src='/assets/sprinklers_category.jpg'" />
            <span class="product-badge-cat">${a.category}</span>
            <span class="product-badge-featured">Featured</span>
          </div>
          <div class="product-content">
            <h3 class="product-title">${a.name}</h3>
            <div class="product-subtitle">${a.subtitle}</div>
            <ul class="product-specs-list">
              ${a.specs.slice(0,3).map(s=>`
                <li><i class="fas fa-check"></i> <span>${s}</span></li>
              `).join("")}
            </ul>
            <div class="product-card-footer">
              <button class="btn btn-whatsapp w-100 btn-enquire" data-name="${a.name}">
                <i class="fab fa-whatsapp"></i> Enquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      `).join(""),document.querySelectorAll(".btn-enquire").forEach(a=>{a.addEventListener("click",s=>{const i=s.currentTarget.getAttribute("data-name");d(i)})})});
