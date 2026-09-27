import{i as r,g as c,a as d}from"./main-BWkfXG_C.js";document.addEventListener("DOMContentLoaded",()=>{r();const s=c(),e=document.getElementById("featured-sprinklers-grid"),n=s.filter(a=>a.category==="Irrigation Sprinklers");e.innerHTML=n.map(a=>`
        <div class="product-card">
          <div class="product-thumb-wrap">
            <img src="${a.image}" alt="${a.name}" class="product-thumb" loading="lazy" onerror="this.src='/assets/sprinklers_showcase.jpg'" />
            <span class="product-badge-cat">${a.category}</span>
            <span class="product-badge-featured">Featured</span>
          </div>
          <div class="product-content">
            <h3 class="product-title">${a.name}</h3>
            <div class="product-subtitle">${a.subtitle}</div>
            <p class="product-desc-text">${a.description}</p>
            <ul class="product-features-list">
              ${(a.features||[]).map(t=>`
                <li><i class="fas fa-check-circle"></i> <span>${t}</span></li>
              `).join("")}
            </ul>
            <div class="product-card-footer">
              <button class="btn btn-whatsapp w-100 btn-enquire" data-name="${a.name}">
                <i class="fab fa-whatsapp"></i> Enquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      `).join(""),document.querySelectorAll(".btn-enquire").forEach(a=>{a.addEventListener("click",t=>{const i=t.currentTarget.getAttribute("data-name");d(i)})})});
