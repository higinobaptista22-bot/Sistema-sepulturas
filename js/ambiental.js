document.addEventListener("DOMContentLoaded",()=>{
 const n=getGraves().filter(g=>g.estado==="Manutenção").length;const el=document.getElementById("envPending");if(el)el.textContent=n;
 const clock=document.getElementById("clock");if(clock){const tick=()=>clock.textContent=new Date().toLocaleString("pt-PT",{dateStyle:"short",timeStyle:"short"});tick();setInterval(tick,30000)}
 const btn=document.getElementById("menuBtn"),sidebar=document.getElementById("sidebar");if(btn)btn.onclick=()=>sidebar.classList.toggle("open");
});