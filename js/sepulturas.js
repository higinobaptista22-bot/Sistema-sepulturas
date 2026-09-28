document.addEventListener("DOMContentLoaded",()=>{
 let graves=getGraves();
 const panel=document.getElementById("formPanel"), form=document.getElementById("graveForm");
 const showForm=()=>{panel.hidden=false;location.hash="novo";document.getElementById("codigo").focus()};
 const hideForm=()=>{panel.hidden=true;form.reset();document.getElementById("editId").value=""};
 document.getElementById("newBtn").onclick=()=>{document.getElementById("formTitle").textContent="Registar Sepultura";hideForm();panel.hidden=false;document.getElementById("codigo").focus()};
 document.getElementById("cancelBtn").onclick=hideForm;
 if(location.hash==="novo")showForm();

 function render(){
  const q=document.getElementById("search").value.toLowerCase(), filter=document.getElementById("filter").value;
  const rows=graves.filter(g=>(!filter||g.estado===filter)&&(`${g.codigo} ${g.nome} ${g.setor}`.toLowerCase().includes(q)));
  document.getElementById("graveTable").innerHTML=rows.length?rows.map(g=>`<tr><td><strong>${g.codigo}</strong></td><td>${g.nome}</td><td>Setor ${g.setor}</td><td>${g.fila||"—"}/${g.campa||"—"}</td><td><span class="status ${statusClass(g.estado)}">${g.estado}</span></td><td>${formatDate(g.sepultamento)}</td><td><button class="action-btn" onclick="editGrave('${g.id}')">Editar</button> <button class="action-btn" onclick="deleteGrave('${g.id}')">Apagar</button></td></tr>`).join(""):`<tr><td colspan="7" class="empty">Nenhum registo encontrado.</td></tr>`;
 }
 document.getElementById("search").oninput=render;document.getElementById("filter").onchange=render;

 window.editGrave=(id)=>{
  const g=graves.find(x=>x.id===id); if(!g)return;
  panel.hidden=false; document.getElementById("formTitle").textContent="Editar Sepultura";
  Object.entries(g).forEach(([k,v])=>{const el=document.getElementById(k);if(el&&k!=="id"&&k!=="history"&&k!=="createdAt")el.value=v||""});
  document.getElementById("editId").value=g.id;window.scrollTo({top:0,behavior:"smooth"});
 };
 window.deleteGrave=(id)=>{
  const g=graves.find(x=>x.id===id);
  if(confirm(`Apagar o registo ${g?.codigo||""}?`)){graves=graves.filter(x=>x.id!==id);saveGraves(graves);render();}
 };
 form.onsubmit=e=>{
  e.preventDefault();
  const id=document.getElementById("editId").value||String(Date.now());
  const old=graves.find(g=>g.id===id);
  const item={id,codigo:codigo.value.trim(),nome:nome.value.trim(),nascimento:nascimento.value,falecimento:falecimento.value,sepultamento:sepultamento.value,setor:setor.value,fila:fila.value,campa:campa.value,estado:estado.value,observacoes:observacoes.value,createdAt:old?.createdAt||new Date().toISOString(),history:old?.history||[]};
  item.history=[{date:nowLabel(),title:old?"Dados atualizados":"Sepultura registada",desc:old?"Informações cadastrais atualizadas pelo administrador.":"Novo registo cadastrado no sistema."},...item.history];
  if(old)graves=graves.map(g=>g.id===id?item:g);else graves.unshift(item);
  saveGraves(graves);hideForm();render();alert(old?"Registo atualizado com sucesso!":"Sepultura registada com sucesso!");
 };
 render();
 const clock=document.getElementById("clock");if(clock){const tick=()=>clock.textContent=new Date().toLocaleString("pt-PT",{dateStyle:"short",timeStyle:"short"});tick();setInterval(tick,30000)}
 const btn=document.getElementById("menuBtn"),sidebar=document.getElementById("sidebar");if(btn)btn.onclick=()=>sidebar.classList.toggle("open");
});