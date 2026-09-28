document.addEventListener("DOMContentLoaded",()=>{
 const input=document.getElementById("traceSearch"), list=document.getElementById("traceList");let graves=getGraves();
 function render(){
  const q=input.value.toLowerCase().trim();let events=[];
  graves.filter(g=>`${g.codigo} ${g.nome}`.toLowerCase().includes(q)).forEach(g=>(g.history||[]).forEach(h=>events.push({...h,codigo:g.codigo,nome:g.nome})));
  events.sort((a,b)=>b.date.localeCompare(a.date));
  list.innerHTML=events.length?events.map(e=>`<div class="timeline-item"><strong>${e.title}</strong><small>${e.codigo} · ${e.nome} · ${e.date}</small><p>${e.desc}</p></div>`).join(""):`<div class="empty">Nenhum histórico encontrado.</div>`;
 }
 input.oninput=render;render();
 const clock=document.getElementById("clock");if(clock){const tick=()=>clock.textContent=new Date().toLocaleString("pt-PT",{dateStyle:"short",timeStyle:"short"});tick();setInterval(tick,30000)}
 const btn=document.getElementById("menuBtn"),sidebar=document.getElementById("sidebar");if(btn)btn.onclick=()=>sidebar.classList.toggle("open");
});