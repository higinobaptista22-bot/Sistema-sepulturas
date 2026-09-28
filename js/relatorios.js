document.addEventListener("DOMContentLoaded",()=>{
 const g=getGraves(), counts={total:g.length,ocupadas:g.filter(x=>x.estado==="Ocupada").length,disponiveis:g.filter(x=>x.estado==="Disponível").length,manutencao:g.filter(x=>x.estado==="Manutenção").length};
 document.getElementById("summary").innerHTML=Object.entries(counts).map(([k,v])=>`<div class="summary-item"><span>${({total:"Total de sepulturas",ocupadas:"Ocupadas",disponiveis:"Disponíveis",manutencao:"Manutenção"})[k]}</span><strong>${v}</strong></div>`).join("");
 window.printReport=(type)=>{window.print()};
 const clock=document.getElementById("clock");if(clock){const tick=()=>clock.textContent=new Date().toLocaleString("pt-PT",{dateStyle:"short",timeStyle:"short"});tick();setInterval(tick,30000)}
 const btn=document.getElementById("menuBtn"),sidebar=document.getElementById("sidebar");if(btn)btn.onclick=()=>sidebar.classList.toggle("open");
});