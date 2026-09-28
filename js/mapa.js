document.addEventListener("DOMContentLoaded",()=>{
 const graves=getGraves(), grid=document.getElementById("mapGrid"), info=document.getElementById("mapInfo");
 const byPosition={}; graves.forEach(g=>{if(g.fila&&g.campa)byPosition[`${g.fila}-${g.campa}`]=g});
 for(let i=1;i<=72;i++){
  const fila=Math.ceil(i/12), campa=((i-1)%12)+1;
  const g=Object.values(byPosition).find(x=>String(x.fila)===String(fila)&&String(x.campa)===String(campa));
  const cell=document.createElement("button");cell.className=`grave-cell ${g?statusClass(g.estado):"available"}`;cell.textContent=g?g.codigo.split("-")[1]:`${fila}-${campa}`;
  cell.title=g?`${g.codigo} — ${g.nome}`:"Espaço disponível";
  cell.onclick=()=>{info.innerHTML=g?`<strong>${g.codigo}</strong> · ${g.nome} · Setor ${g.setor} · Fila ${g.fila} · Campa ${g.campa} · <span class="status ${statusClass(g.estado)}">${g.estado}</span>`:`Fila ${fila}, Campa ${campa} — <strong>Espaço disponível</strong>`};
  grid.appendChild(cell);
 }
 const clock=document.getElementById("clock");if(clock){const tick=()=>clock.textContent=new Date().toLocaleString("pt-PT",{dateStyle:"short",timeStyle:"short"});tick();setInterval(tick,30000)}
 const btn=document.getElementById("menuBtn"),sidebar=document.getElementById("sidebar");if(btn)btn.onclick=()=>sidebar.classList.toggle("open");
});