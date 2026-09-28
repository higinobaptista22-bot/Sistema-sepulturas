document.addEventListener("DOMContentLoaded",()=>{
 const graves=getGraves();
 const total=document.getElementById("total"), occupied=document.getElementById("ocupadas"), available=document.getElementById("disponiveis"), maintenance=document.getElementById("manutencao");
 if(total){
  total.textContent=graves.length;
  occupied.textContent=graves.filter(g=>g.estado==="Ocupada").length;
  available.textContent=graves.filter(g=>g.estado==="Disponível").length;
  maintenance.textContent=graves.filter(g=>g.estado==="Manutenção").length;
  const sectors=["A","B","C","D"], counts=Object.fromEntries(sectors.map(s=>[s,graves.filter(g=>g.setor===s).length]));
  const max=Math.max(...Object.values(counts),1);
  document.getElementById("sectorBars").innerHTML=sectors.map(s=>`<div class="bar-item"><span>Setor ${s}</span><div class="bar"><div style="width:${Math.max(8,counts[s]/max*100)}%"></div></div><strong>${counts[s]}</strong></div>`).join("");
  const sorted=[...graves].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  document.getElementById("recentTable").innerHTML=sorted.slice(0,5).map(g=>`<tr><td><strong>${g.codigo}</strong></td><td>${g.nome}</td><td>${g.setor}</td><td><span class="status ${statusClass(g.estado)}">${g.estado}</span></td><td>${formatDate(g.sepultamento)}</td></tr>`).join("");
  const events=[]; sorted.forEach(g=>(g.history||[]).forEach(h=>events.push({...h,codigo:g.codigo})));
  events.sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById("recent").innerHTML=events.slice(0,4).map(e=>`<div class="activity-item"><span class="activity-icon">🔎</span><div><strong>${e.title}</strong><small>${e.codigo} · ${e.date}</small></div></div>`).join("");
 }
 const clock=document.getElementById("clock");
 if(clock){const tick=()=>clock.textContent=new Date().toLocaleString("pt-PT",{dateStyle:"short",timeStyle:"short"});tick();setInterval(tick,30000)}
 const btn=document.getElementById("menuBtn"), sidebar=document.getElementById("sidebar");
 if(btn)btn.onclick=()=>sidebar.classList.toggle("open");
});