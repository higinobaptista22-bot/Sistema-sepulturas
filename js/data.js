const STORAGE_KEY = "sepultura_plus_data_v1";

const seed = [
 {id:"1",codigo:"SP-0248",nome:"António Manuel",nascimento:"1952-04-12",falecimento:"2026-09-20",sepultamento:"2026-09-22",setor:"A",fila:3,campa:12,estado:"Ocupada",observacoes:"Registo inicial.",createdAt:"2026-09-22T09:15:00",history:[
  {date:"22/09/2026 09:15",title:"Sepultura registada",desc:"Registo inicial efetuado pelo administrador."},
  {date:"22/09/2026 14:30",title:"Sepultamento confirmado",desc:"Sepultamento associado ao código SP-0248."}
 ]},
 {id:"2",codigo:"SP-0187",nome:"Maria José Cossa",nascimento:"1947-08-19",falecimento:"2026-08-30",sepultamento:"2026-09-02",setor:"B",fila:2,campa:7,estado:"Manutenção",observacoes:"Necessita limpeza da área.",createdAt:"2026-09-02T10:20:00",history:[
  {date:"02/09/2026 10:20",title:"Sepultura registada",desc:"Cadastro criado."},
  {date:"25/09/2026 08:10",title:"Manutenção sinalizada",desc:"Área necessita limpeza e controlo de vegetação."}
 ]},
 {id:"3",codigo:"SP-0152",nome:"Carlos Alberto",nascimento:"1960-02-10",falecimento:"2026-07-14",sepultamento:"2026-07-17",setor:"C",fila:4,campa:5,estado:"Ocupada",observacoes:"",createdAt:"2026-07-17T11:00:00",history:[
  {date:"17/07/2026 11:00",title:"Sepultura registada",desc:"Cadastro criado."},
  {date:"26/09/2026 15:20",title:"Dados atualizados",desc:"Informações cadastrais verificadas."}
 ]},
 {id:"4",codigo:"SP-0091",nome:"Helena da Silva",nascimento:"1939-11-03",falecimento:"2025-12-18",sepultamento:"2025-12-20",setor:"D",fila:1,campa:3,estado:"Ocupada",observacoes:"",createdAt:"2025-12-20T09:00:00",history:[
  {date:"20/12/2025 09:00",title:"Sepultura registada",desc:"Cadastro criado."}
 ]},
 {id:"5",codigo:"SP-0210",nome:"José Mário",nascimento:"1955-06-25",falecimento:"2026-08-05",sepultamento:"2026-08-08",setor:"A",fila:6,campa:18,estado:"Ocupada",observacoes:"",createdAt:"2026-08-08T12:00:00",history:[
  {date:"08/08/2026 12:00",title:"Sepultura registada",desc:"Cadastro criado."}
 ]},
 {id:"6",codigo:"SP-0224",nome:"Teresa Amélia",nascimento:"1958-01-09",falecimento:"2026-08-19",sepultamento:"2026-08-22",setor:"A",fila:7,campa:22,estado:"Ocupada",observacoes:"",createdAt:"2026-08-22T10:30:00",history:[
  {date:"22/08/2026 10:30",title:"Sepultura registada",desc:"Cadastro criado."}
 ]},
 {id:"7",codigo:"SP-0230",nome:"Paulo Ernesto",nascimento:"1962-03-13",falecimento:"2026-08-27",sepultamento:"2026-08-29",setor:"B",fila:5,campa:10,estado:"Ocupada",observacoes:"",createdAt:"2026-08-29T13:00:00",history:[
  {date:"29/08/2026 13:00",title:"Sepultura registada",desc:"Cadastro criado."}
 ]},
 {id:"8",codigo:"SP-0201",nome:"—",nascimento:"",falecimento:"",sepultamento:"",setor:"C",fila:2,campa:16,estado:"Disponível",observacoes:"Espaço reservado para futura utilização.",createdAt:"2026-09-01T08:00:00",history:[
  {date:"01/09/2026 08:00",title:"Espaço cadastrado",desc:"Área disponível registada no mapa."}
 ]}
];

function getGraves(){
 const raw=localStorage.getItem(STORAGE_KEY);
 if(!raw){localStorage.setItem(STORAGE_KEY,JSON.stringify(seed));return seed;}
 try{return JSON.parse(raw)}catch(e){localStorage.setItem(STORAGE_KEY,JSON.stringify(seed));return seed;}
}
function saveGraves(data){localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
function statusClass(status){return status==="Ocupada"?"occupied":status==="Disponível"?"available":"maintenance"}
function formatDate(date){if(!date)return "—"; const [y,m,d]=date.split("-"); return `${d}/${m}/${y}`}
function nowLabel(){return new Date().toLocaleString("pt-PT",{dateStyle:"short",timeStyle:"short"})}
