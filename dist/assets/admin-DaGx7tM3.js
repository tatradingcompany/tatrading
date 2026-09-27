import{g as c,s as p,r as A}from"./main-BWkfXG_C.js";document.addEventListener("DOMContentLoaded",()=>{const f=document.getElementById("login-view"),v=document.getElementById("dashboard-view"),b=document.getElementById("admin-login-form"),I=document.getElementById("login-error-msg"),m=document.getElementById("admin-logout-btn"),d=document.getElementById("select-update-product"),B=document.getElementById("update-preview-img"),h=document.getElementById("update-preview-name"),w=document.getElementById("form-update-image"),E=document.getElementById("form-add-product"),L=document.getElementById("admin-table-body"),$=document.getElementById("btn-reset-catalog");function u(){sessionStorage.getItem("ta_admin_session")==="active"?(f.style.display="none",v.style.display="block",m.style.display="inline-flex",i()):(f.style.display="block",v.style.display="none",m.style.display="none")}b.addEventListener("submit",t=>{t.preventDefault();const e=document.getElementById("admin-user").value.trim(),n=document.getElementById("admin-pass").value.trim();e==="taadmin"&&n==="ta@admin#"?(sessionStorage.setItem("ta_admin_session","active"),I.style.display="none",u()):I.style.display="block"}),m.addEventListener("click",()=>{sessionStorage.removeItem("ta_admin_session"),u()});function i(){const t=c();document.getElementById("stat-total").textContent=t.length,document.getElementById("stat-sprinklers").textContent=t.filter(e=>e.category==="Irrigation Sprinklers").length,d.innerHTML=t.map(e=>`
          <option value="${e.id}">${e.id}. ${e.name} (${e.category})</option>
        `).join(""),g(),L.innerHTML=t.map(e=>`
          <tr>
            <td>
              <img src="${e.image}" alt="${e.name}" class="admin-prod-thumb" onerror="this.src='/assets/sprinklers_category.jpg'" />
            </td>
            <td>
              <strong>${e.name}</strong>
              <div style="font-size: 0.78rem; color: var(--gray);">ID: #${e.id}</div>
            </td>
            <td>
              <span class="product-badge-cat" style="position: static; font-size: 0.72rem;">${e.category}</span>
            </td>
            <td style="color: var(--gray); font-size: 0.85rem;">
              ${e.subtitle}
            </td>
            <td>
              <button class="btn btn-sm btn-outline btn-select-edit" data-id="${e.id}">
                <i class="fas fa-edit"></i> Change Image
              </button>
            </td>
          </tr>
        `).join(""),document.querySelectorAll(".btn-select-edit").forEach(e=>{e.addEventListener("click",n=>{const a=n.currentTarget.getAttribute("data-id");d.value=a,g(),window.scrollTo({top:300,behavior:"smooth"})})})}function g(){const t=c(),e=parseInt(d.value),n=t.find(a=>a.id===e);n&&(B.src=n.image,h.textContent=n.name)}d.addEventListener("change",g),w.addEventListener("submit",t=>{t.preventDefault();const e=c(),n=parseInt(d.value),a=e.find(s=>s.id===n);if(!a)return;const r=document.getElementById("input-image-url").value.trim(),o=document.getElementById("input-image-file");if(o.files&&o.files[0]){const s=new FileReader;s.onload=function(y){a.image=y.target.result,p(e),alert(`✅ Image for "${a.name}" updated successfully via File Upload!`),o.value="",document.getElementById("input-image-url").value="",i()},s.readAsDataURL(o.files[0])}else r?(a.image=r,p(e),alert(`✅ Image for "${a.name}" updated successfully via URL!`),document.getElementById("input-image-url").value="",i()):alert("Please enter an image URL or choose a file.")}),E.addEventListener("submit",t=>{t.preventDefault();const e=c(),n=document.getElementById("add-name").value.trim(),a=document.getElementById("add-category").value,r=document.getElementById("add-subtitle").value.trim(),o=document.getElementById("add-specs").value.trim(),s=document.getElementById("add-image").value.trim()||"/assets/hero_sprinkler.jpg",y=o.split(",").map(l=>l.trim()).filter(l=>l.length>0),k={id:e.reduce((l,C)=>Math.max(l,C.id||0),0)+1,name:n,category:a,subtitle:r,image:s,features:y,featured:a==="Irrigation Sprinklers"};e.push(k),p(e),alert(`✅ Product "${n}" added to catalog successfully!`),E.reset(),i()}),$.addEventListener("click",()=>{confirm("Are you sure you want to reset all products and images back to factory brochure defaults?")&&(A(),alert("Catalog reset to brochure defaults!"),i())}),u()});
