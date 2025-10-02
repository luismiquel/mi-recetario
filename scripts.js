const APP_VERSION = "recetario-1.7.0-singlefile";

/* ===== Datos (160 recetas) ===== */
const IMG_BY_CAT = c => ({
  Aperitivo:"Aperitivo", Primero:"Primero", Segundo:"Segundo", Postre:"Postre"
}[c] || "Receta");

const APERITIVOS = [
  "Tostas de tomate y jamón","Tostas de anchoa y pimiento","Tostas de escalivada","Tostas de salmón y queso fresco",
  "Croquetas de jamón","Croquetas de pollo","Croquetas de bacalao","Croquetas de setas",
  "Empanadillas de atún","Empanadillas de carne","Patatas bravas","Patatas alioli",
  "Boquerones en vinagre","Champiñones al ajillo","Gildas donostiarras","Pinchos de tortilla",
  "Pinchos morunos","Queso marinado en aceite","Hummus clásico con crudités","Hummus de remolacha",
  "Hummus de aguacate","Gazpacho en vasitos","Salmorejo en chupitos","Ensaladilla rusa",
  "Tortilla francesa mini","Banderillas variadas","Mejillones en escabeche","Sardinas marinadas",
  "Pulpo a la gallega (tapa)","Calamares a la romana","Torreznos crujientes","Jamón con picos",
  "Queso manchego con membrillo","Pimientos del padrón","Montadito de lomo","Montadito de pringá",
  "Bonito con tomate (tapa)","Pisto con huevo (tapa)","Chistorra a la sidra","Berenjena frita con miel"
];

const PRIMEROS = [
  "Sopa de ajo","Sopa castellana","Gazpacho andaluz","Salmorejo cordobés","Ajoblanco","Crema de calabaza",
  "Crema de puerros","Crema de champiñón","Pisto manchego","Menestra de verduras","Lentejas estofadas",
  "Garbanzos con espinacas","Judías blancas con verduras","Arroz caldoso de verduras","Arroz a la cubana",
  "Arroz negro","Arroz al horno","Paella de verduras","Fideuá de pescado","Macarrones con tomate",
  "Tallarines al ajillo","Espaguetis carbonara ligera","Ensalada mixta","Ensalada campera","Ensalada de garbanzos",
  "Ensalada de pasta fría","Tomates aliñados","Papas arrugadas con mojo","Pimientos asados","Alcachofas salteadas",
  "Acelgas rehogadas","Sopa de pescado","Caldo gallego","Cocido andaluz (sopa)","Sopa minestrone","Vichyssoise",
  "Crema de zanahoria","Porrusalda","Sopa de marisco","Caldo de pollo casero"
];

const SEGUNDOS = [
  "Pollo al ajillo","Pollo al horno con patatas","Pollo en pepitoria","Pechuga de pollo a la plancha",
  "Escalope de ternera","Filete de ternera a la plancha","Carrilleras al vino tinto","Rabo de toro",
  "Albóndigas en salsa","Lomo adobado","Costillas al horno","Chuletillas de cordero","Cordero asado",
  "Secreto ibérico a la plancha","Solomillo al roquefort","Bacalao a la vizcaína","Bacalao al pil-pil",
  "Merluza en salsa verde","Dorada al horno","Lubina a la sal","Salmón al papillote","Atún encebollado",
  "Calamares en su tinta","Pulpo a la gallega","Paella mixta","Arroz con pollo","Arroz con bogavante",
  "Empanada gallega de atún","Pisto con huevos","Tortilla de patatas","Revuelto de setas","Conejo al ajillo",
  "Codornices escabechadas","Callos a la madrileña","Fabada asturiana","Marmitako de bonito",
  "Chuletón a la plancha","Escabeche de caballa","Bonito con tomate","Trucha a la navarra"
];

const POSTRES = [
  "Flan casero","Natillas caseras","Arroz con leche","Leche frita","Torrijas","Crema catalana",
  "Tarta de queso al horno","Tarta de Santiago","Bizcocho de yogur","Bizcocho de naranja","Magdalenas caseras",
  "Galletas de mantequilla","Rosquillas fritas","Pestiños","Buñuelos de viento","Filloas","Peras al vino",
  "Compota de manzana","Macedonia de frutas","Helado rápido de plátano","Mousse de chocolate","Natillas de vainilla",
  "Tarta de manzana","Tarta tres leches (versión)","Brazo de gitano","Quesada pasiega","Tocino de cielo",
  "Pan de Calatrava","Cuajada con miel","Crepes dulces","Flan de café","Crema pastelera con frutas",
  "Tarta de almendra","Tarta de galletas con chocolate","Bizcocho marmolado","Helado de yogur","Brownie sencillo",
  "Crema de limón","Naranja con canela","Fresas con nata"
];

/* Overrides realistas para platos clave (ingredientes y pasos detallados) */
const OV = (()=> {
  function R(ing, pasos, tiempo){ return {ing, pasos, tiempo}; }
  const CROQ_BASE = ["Leche entera","Harina de trigo","Mantequilla","Aceite de oliva","Cebolla","Nuez moscada","Sal","Pimienta","Huevos","Pan rallado"];
  const CROQ_PASOS = [
    "Pica fino cebolla y el relleno.",
    "Pocha cebolla con aceite y mantequilla 6–8 min sin dorar.",
    "Añade el relleno y rehoga 1–2 min.",
    "Incorpora harina (90–100 g/L leche) y cocina 2–3 min.",
    "Agrega la leche caliente poco a poco, removiendo hasta bechamel espesa y lisa.",
    "Sazona con sal, pimienta y nuez moscada; cocina 8–10 min a fuego bajo.",
    "Pasa a fuente, filma a piel y enfría 4 h (mejor de un día para otro).",
    "Da forma, pasa por huevo y pan rallado.",
    "Fríe a 175–180 ºC hasta dorar; escurre."
  ];
  const M = new Map([
    ["croquetas de jamón", R(["Jamón serrano picado",...CROQ_BASE], CROQ_PASOS, "45–75 min + reposo")],
    ["croquetas de pollo", R(["Pollo cocido desmigado",...CROQ_BASE], CROQ_PASOS, "45–75 min + reposo")],
    ["croquetas de bacalao", R(["Bacalao desalado desmigado",...CROQ_BASE], CROQ_PASOS, "45–75 min + reposo")],
    ["croquetas de setas", R(["Setas picadas",...CROQ_BASE], CROQ_PASOS, "45–75 min + reposo")],
    ["patatas bravas", R(
      ["Patatas","Aceite para freír","Sal","Ajo","Pimentón dulce","Pimentón picante","Tomate triturado","Vinagre"],
      ["Fríe patatas en dados hasta dorar.","Sofríe ajo; añade pimentón, tomate y sal.","Cocina 10–12 min y ajusta con vinagre.","Sirve patatas con salsa por encima."],
      "30–40 min"
    )],
    ["patatas alioli", R(
      ["Patatas cocidas","Ajo","Huevo o leche (lactonesa)","Aceite suave","Limón o vinagre","Sal","Perejil"],
      ["Cuece patatas y enfría.","Emulsiona ajo con huevo/leche y aceite, sal y limón.","Mezcla patata en dados con alioli y perejil."],
      "25–35 min"
    )],
    ["calamares a la romana", R(
      ["Calamares","Harina","Huevo","Aceite para freír","Sal","Limón"],
      ["Seca aros de calamar y sala.","Pasa por harina y huevo batido.","Fríe a 175–180 ºC 1–2 min; escurre.","Sirve con limón."],
      "20–30 min"
    )],
    ["gazpacho andaluz", R(
      ["Tomate","Pepino","Pimiento verde","Ajo","Pan","Aceite de oliva virgen extra","Vinagre","Sal"],
      ["Tritura con pan hidratado.","Emulsiona con aceite.","Ajusta sal y vinagre, enfría."],
      "15–20 min + frío"
    )],
    ["salmorejo cordobés", R(
      ["Tomate maduro","Pan","Ajo","Aceite de oliva virgen extra","Vinagre","Sal","Jamón","Huevo cocido"],
      ["Tritura tomate/pan/ajo/sal.","Emulsiona con aceite y vinagre.","Sirve con jamón y huevo."],
      "15–20 min + frío"
    )],
    ["fideuá de pescado", R(
      ["Fideo grueso","Caldo de pescado","Sepia/calamar","Gamba","Ajo","Pimentón","Tomate","Aceite","Sal","Allioli (opcional)"],
      ["Sofríe sepia y retira.","Ajo+pimentón+tomate.","Tuesta fideo, moja con caldo.","Incorpora sepia/gambas al final; sirve con allioli."],
      "30–40 min"
    )],
    ["paella de verduras", R(
      ["Arroz","Caldo vegetal","Judía verde","Garrafo/garbanzo","Pimiento","Tomate","Ajo","Aceite","Sal","Azafrán"],
      ["Sofríe verduras.","Añade arroz y nacara.","Moja con caldo y azafrán.","Cocina 18–20 min; reposo 5."],
      "35–45 min"
    )],
    ["paella mixta", R(
      ["Arroz","Caldo","Pollo","Conejo","Gamba/Calamar","Pimiento","Tomate","Ajo","Aceite","Sal","Azafrán"],
      ["Dora carnes y haz sofrito.","Nacara el arroz y moja con caldo/azafrán.","Cocina 18–20 min, mariscos al final; reposo 5."],
      "40–55 min"
    )],
    ["arroz con bogavante", R(
      ["Arroz","Bogavante","Caldo de marisco","Ajo","Pimentón","Tomate","Aceite","Sal"],
      ["Marca bogavante.","Sofrito ajo/pimentón/tomate.","Arroz + caldo + bogavante; 18 min."],
      "35–45 min"
    )],
    ["tortilla de patatas", R(
      ["Patatas","Cebolla (opcional)","Huevos","Aceite","Sal"],
      ["Fríe patata a fuego suave.","Mezcla con huevo y sal.","Cuaja a tu gusto por ambos lados."],
      "25–35 min"
    )],
    ["fabada asturiana", R(
      ["Fabes","Compango","Cebolla","Ajo","Pimentón","Sal"],
      ["Desala si procede.","Cuece a fuego bajo asustando.","Espuma y rectifica sal."],
      "120–180 min"
    )],
    ["marmitako de bonito", R(
      ["Bonito","Patata","Pimiento","Cebolla","Ajo","Tomate","Caldo","Aceite","Sal"],
      ["Sofrito y añade patata.","Cubre con caldo.","Bonito al final 2–3 min."],
      "35–45 min"
    )],
    ["rabo de toro", R(
      ["Rabo de toro","Verduras","Vino tinto","Caldo","Aceite","Sal","Harina (ligar)"],
      ["Dora rabo enharinado.","Sofríe verduras y moja con vino.","Cuece con caldo 2–3 h hasta meloso."],
      "150–210 min"
    )],
    ["merluza en salsa verde", R(
      ["Merluza","Ajo","Perejil","Vino blanco","Caldo","Aceite","Sal","Almejas (opcional)"],
      ["Ajo + harina ligera.","Vino+caldo+perejil y merluza 5–7 min.","Almejas hasta abrir."],
      "20–30 min"
    )],
    ["pulpo a la gallega", R(
      ["Pulpo cocido","Patata cocida","Aceite","Pimentón","Sal en escamas"],
      ["Corta pulpo y patata.","Aliña con aceite, pimentón y sal."],
      "10–15 min"
    )],
    ["tarta de queso al horno", R(
      ["Queso crema","Huevos","Azúcar","Nata","Harina (opcional)"],
      ["Mezcla sin batir de más.","Horno 180 ºC 40–50 min (centro tembloroso).","Enfría y sirve."],
      "60–90 min con frío"
    )],
    ["flan casero", R(
      ["Leche","Huevos","Azúcar","Vainilla","Azúcar para caramelo"],
      ["Caramelo al molde.","Mezcla leche/huevo/azúcar.","Horno baño maría 160–170 ºC 40–55 min.","Enfría y desmolda."],
      "70–120 min con frío"
    )],
    ["arroz con leche", R(
      ["Arroz","Leche entera","Azúcar","Canela","Limón"],
      ["Cuece arroz en leche aromatizada, removiendo.","Azúcar al final; enfría."],
      "45–60 min"
    )],
    ["brownie sencillo", R(
      ["Chocolate","Mantequilla","Azúcar","Huevos","Harina","Nueces (opcional)"],
      ["Funde choco/mantequilla.","Añade huevos y azúcar, luego harina.","Horno 170–180 ºC 20–25 min."],
      "35–45 min"
    )]
  ]);
  return { get: (title) => M.get(title.toLowerCase()) || null };
})();

const PASOS_BASE = {
  Aperitivo:["Prepara y ten a mano todo.","Corta o dispón los ingredientes.","Sofríe o mezcla hasta aromatizar.","Monta y ajusta sal/aliño.","Reposa 1–2 min o sirve caliente.","Emplata y sirve."],
  Primero:["Lava y prepara verduras.","Sofríe ajo/cebolla suave.","Añade ingrediente principal y rehoga.","Cubre con caldo/agua y cocina.","Ajusta textura (tritura/reposa).","Sirve caliente o frío."],
  Segundo:["Seca la pieza y sala.","Añade adobo/especias.","Dora/hornea/sella bien.","Agrega guarnición/salsa y cocina al punto.","Reposa unos minutos.","Sirve con su jugo."],
  Postre:["Pesa y mide todo.","Mezcla secos y húmedos aparte.","Aromatiza (cítricos/vainilla/canela).","Hornea/refrigera hasta cuajar.","Enfría o reposa.","Decora y sirve."]
};

// Utils
function stripDiacritics(s){ try{ return (s||"").normalize('NFD').replace(/[\u0300-\u036f]/g,''); }catch{ return s||""; } }
const slug = s => stripDiacritics((s||"").toLowerCase()).replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

function ingredientesPara(cat,t){
  t=t.toLowerCase(); let ing=[];
  const ov = OV.get(t); if (ov) return ov.ing;
  if(cat==="Aperitivo"){
    if(/empanadill/.test(t)) ing=["Obladas","Atún/carne","Cebolla","Tomate frito","Huevo","Aceite","Sal"];
    else if(/alioli/.test(t)) ing=["Patatas","Ajo","Huevo o leche","Aceite suave","Limón/vinagre","Sal","Perejil"];
    else if(/boquerones/.test(t)) ing=["Boquerones","Vinagre","Ajo","Perejil","Aceite","Sal"];
    else if(/romana|calamar/.test(t)) ing=["Calamares","Harina","Huevo","Aceite","Sal","Limón"];
    else if(/hummus/.test(t)) ing=["Garbanzos","Tahini","Ajo","Limón","Aceite","Sal","Comino"];
    else ing=["Pan/base","Aceite de oliva","Ajo (opcional)","Sal"];
  } else if(cat==="Primero"){
    if(OV.get(t)) ing=OV.get(t).ing;
    else if(/sopa|caldo/.test(t)) ing=["Caldo","Ajo/Cebolla","Aceite","Sal"];
    else if(/crema|vichyssoise|porrusalda|zanahoria/.test(t)) ing=["Verdura principal","Cebolla/Puerro","Caldo","Aceite","Sal"];
    else if(/arroz|paella/.test(t)) ing=["Arroz","Caldo","Verduras","Aceite","Sal","Azafrán (opcional)"];
    else if(/fideu/.test(t)) ing=["Fideos","Caldo de pescado","Ajo","Pimentón","Tomate","Aceite","Sal"];
    else if(/ensalada/.test(t)) ing=["Lechuga/legumbre","Tomate","Cebolla","Aceite","Vinagre","Sal"];
  } else if(cat==="Segundo"){
    if(OV.get(t)) ing=OV.get(t).ing;
    else if(/pollo/.test(t)) ing=["Pollo","Ajo","Aceite","Sal","Pimienta"];
    else if(/ternera|solomillo|chulet/.test(t)) ing=["Vacuno","Aceite","Sal","Pimienta"];
    else if(/cordero/.test(t)) ing=["Cordero","Ajo","Romero","Aceite","Sal"];
    else if(/secreto|lomo|costillas/.test(t)) ing=["Cerdo","Ajo","Pimentón","Aceite","Sal"];
    else if(/bacalao|merluza|dorada|lubina|trucha|bonito|atun/.test(t)) ing=["Pescado","Aceite","Ajo/Perejil","Sal"];
    else if(/paella|arroz/.test(t)) ing=["Arroz","Caldo","Pollo/Marisco","Pimiento","Tomate","Azafrán","Sal"];
    else if(/tortilla|revuelto/.test(t)) ing=["Huevos","Patata/Setas","Aceite","Sal"];
  } else {
    if(OV.get(t)) ing=OV.get(t).ing;
    else if(/flan/.test(t)) ing=["Leche","Huevos","Azúcar","Vainilla","Azúcar para caramelo"];
    else if(/natilla/.test(t)) ing=["Leche","Yemas","Azúcar","Maicena","Vainilla"];
    else if(/arroz con leche/.test(t)) ing=["Arroz","Leche","Azúcar","Canela","Limón"];
    else if(/tarta de queso/.test(t)) ing=["Queso crema","Huevos","Azúcar","Nata","Harina (opcional)"];
    else if(/bizcocho|galleta|magdalena|tarta/.test(t)) ing=["Harina","Azúcar","Huevos","Mantequilla/Aceite","Levadura"];
    else if(/helado|mousse/.test(t)) ing=["Fruta/Yogur/Chocolate","Azúcar","Nata/Leche"];
    else ing=["Azúcar","Leche/Huevos/Harina (según postre)"];
  }
  return Array.from(new Set(ing));
}

function tiempo(cat,t){
  const ov=OV.get(t.toLowerCase()); if(ov) return ov.tiempo;
  t=t.toLowerCase();
  if(cat==="Aperitivo") return /croqueta|empanad/.test(t)?"25–35 min":"5–15 min";
  if(cat==="Primero")   return /arroz|fideu|estof|fabada|cocido|marisc/.test(t)?"30–50 min":"15–30 min";
  if(cat==="Segundo")   return /asado|horno|costillas|carrilleras|rabo/.test(t)?"45–90 min":"15–35 min";
  if(cat==="Postre")   return /tarta|horno|tocino|calatrava/.test(t)?"40–70 min":/helado|mousse|frutas/.test(t)?"10–20 min":"20–40 min";
  return "20–30 min";
}

function pasosPara(cat,t){
  const ov=OV.get(t.toLowerCase()); if(ov) return ov.pasos;
  return PASOS_BASE[cat];
}

function build(cat,list){
  return list.map(n=>({categoria:cat,titulo:n,imagen:IMG_BY_CAT(cat),
    ingredientes:ingredientesPara(cat,n), pasos:pasosPara(cat,n), tiempo:tiempo(cat,n)}));
}

const RECETAS = [
  ...build("Aperitivo", APERITIVOS),
  ...build("Primero", PRIMEROS),
  ...build("Segundo", SEGUNDOS),
  ...build("Postre", POSTRES)
];

/* ===== Estado + referencias ===== */
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
const state = {
  q:"", cat:"Todas", list:RECETAS, current:null, step:0,
  dark: true, contrast:false, font:16, listening:false, rate:0.9,
  autoListen:true
};
const $ = id => document.getElementById(id);
const els = {
  grid: $('recipesGrid'), empty: $('emptyState'), count: $('countLabel'), search: $('search'),
  tabs: () => document.querySelectorAll('[role="tab"]'),
  status: $('readerStatus'),
  toggleTheme: $('toggleTheme'), toggleContrast: $('toggleContrast'),
  fontPlus: $('fontPlus'), fontMinus: $('fontMinus'),
  toggleMic: $('toggleMic'), heard: $('heardText'), voiceRate: $('voiceRate'),
  autoListen: $('autoListen'),
  detailModal: $('detailModal'), detailTitle: $('detailTitle'), detailImg: $('detailImg'),
  detailMeta: $('detailMeta'), detailIngredients: $('detailIngredients'), detailSteps: $('detailSteps'),
  btnReadAll: $('btnReadAll'), btnGuided: $('btnGuided'), btnAddAll: $('btnAddAll'),
  guidedModal: $('guidedModal'), gTitle: $('guidedTitle'), gSteps: $('guidedSteps'),
  gProg: $('guidedProgress'), next: $('nextStep'), prev: $('prevStep'),
  rep: $('repeatStep'), stop: $('stopReading'), close: $('closeGuided'), printBtn: $('printRecipe'),
  shoppingDrawer: $('shoppingDrawer'), openShopping: $('openShopping'), closeShopping: $('closeShopping'),
  shoppingList: $('shoppingList'), shoppingEmpty: $('shoppingEmpty'), newItem: $('newItem'),
  addItem: $('addItem'), exportList: $('exportList'), printList: $('printList'), clearChecked: $('clearChecked'),
  caption: $('ttsCaption'), closeDetail: $('closeDetail')
};

function applyTheme(){ document.documentElement.classList.toggle('dark', state.dark); }
function applyContrast(){ document.documentElement.classList.toggle('hc', state.contrast); }
function setFont(px){ state.font = Math.max(14, Math.min(22, px)); document.documentElement.style.setProperty('--base-font', state.font+'px'); }
applyTheme(); applyContrast(); setFont(state.font);
els.toggleTheme.onclick = () => { state.dark = !state.dark; applyTheme(); };
els.toggleContrast.onclick = () => { state.contrast = !state.contrast; applyContrast(); };
els.fontPlus.onclick = () => setFont(state.font+1);
els.fontMinus.onclick = () => setFont(state.font-1);

// Tabs
function setActiveTab(btn){
  els.tabs().forEach(t => t.setAttribute('aria-selected', t === btn ? 'true' : 'false'));
  state.cat = btn.dataset.cat;
  filter();
}
els.tabs().forEach(b => b.addEventListener('click', () => setActiveTab(b)));

// Favoritos
const FKEY='fav.v1';
let fav = new Set(JSON.parse(localStorage.getItem(FKEY)||'[]'));
function saveFav(){ try{ localStorage.setItem(FKEY, JSON.stringify([...fav])); }catch{} }
function isFav(r){ return fav.has(r.titulo); }
function toggleFav(r){ isFav(r) ? fav.delete(r.titulo) : fav.add(r.titulo); saveFav(); filter(); }

/* ======= IMÁGENES con multi-fallback (Wikipedia/Commons → loremflickr → SVG) ======= */

function photoFallback(title, categoria){
  const kwBase = encodeURIComponent((title||'').toLowerCase().replace(/[()]/g,''));
  const kcat = (categoria||'').toLowerCase()==='postre' ? 'dessert,sweet'
          : (categoria||'').toLowerCase()==='aperitivo' ? 'tapas'
          : (categoria||'').toLowerCase()==='primero' ? 'soup,starter,vegetable'
          : 'spanish,cuisine,meat,fish';
  let h=0; for(let i=0;i<title.length;i++){ h=((h<<5)-h)+title.charCodeAt(i); h|=0; }
  const lock = Math.abs(h);
  return `https://loremflickr.com/800/500/food,${kcat},${kwBase}/all?lock=${lock}`;
}
function svgPlaceholder(title="Receta"){
  const t = (title||"").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  return `data:image/svg+xml;charset=utf-8,` +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
        <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#e5e7eb"/><stop offset="1" stop-color="#d1d5db"/></linearGradient></defs>
        <rect width="800" height="500" fill="url(#g)"/>
        <text x="50%" y="50%" text-anchor="middle" fill="#6b7280" font-size="28" font-family="system-ui,Segoe UI,Roboto" dy="8">${t}</text>
        <text x="50%" y="80%" text-anchor="middle" fill="#9ca3af" font-size="14" font-family="system-ui,Segoe UI,Roboto">sin imagen</text>
      </svg>`);
}
async function fetchJSON(url, ms=6000){
  const c = new AbortController(); const t = setTimeout(()=>c.abort(), ms);
  try{ const r = await fetch(url, {signal:c.signal}); if(!r.ok) return null; return await r.json(); }
  catch{ return null; } finally{ clearTimeout(t); }
}
async function wikiSearchTitle(q, lang="es"){
  const url = `https://${lang}.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${encodeURIComponent(q)}&format=json&srlimit=1`;
  const j = await fetchJSON(url); return j?.query?.search?.[0]?.title || null;
}
async function wikiThumbForTitle(title, lang="es"){
  const url = `https://${lang}.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=1000&titles=${encodeURIComponent(title)}`;
  const j = await fetchJSON(url); const pages = j?.query?.pages || {}; const page = Object.values(pages)[0]; return page?.thumbnail?.source || null;
}
async function commonsThumb(query){
  const url = `https://commons.wikimedia.org/w/api.php?origin=*&action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=1000&format=json`;
  const j = await fetchJSON(url);
  const pages = j?.query?.pages; if(!pages) return null;
  const first = Object.values(pages)[0];
  return first?.imageinfo?.[0]?.thumburl || first?.imageinfo?.[0]?.url || null;
}
async function fetchDishImageURL(dish){
  let t = await wikiSearchTitle(dish,"es") || await wikiSearchTitle(`${dish} (plato)`,"es");
  let url = t ? await wikiThumbForTitle(t,"es") : null;
  if(url) return url;
  t = await wikiSearchTitle(dish,"en") || await wikiSearchTitle(`${dish} (dish)`,"en");
  url = t ? await wikiThumbForTitle(t,"en") : null;
  if(url) return url;
  url = await commonsThumb(dish + " comida plato");
  if(url) return url;
  return null;
}
// IndexedDB caché binaria
const DB_NAME='imgstore.v1', STORE='imgs';
function idbOpen(){ return new Promise((res,rej)=>{ const r=indexedDB.open(DB_NAME,1);
  r.onupgradeneeded=()=>{ const db=r.result; if(!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE); };
  r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); }); }
async function idbGet(key){ const db=await idbOpen(); return new Promise((res,rej)=>{ const tx=db.transaction(STORE,'readonly'); const st=tx.objectStore(STORE); const rq=st.get(key); rq.onsuccess=()=>res(rq.result||null); rq.onerror=()=>rej(rq.error); }); }
async function idbSet(key, val){ const db=await idbOpen(); return new Promise((res,rej)=>{ const tx=db.transaction(STORE,'readwrite'); const st=tx.objectStore(STORE); const rq=st.put(val,key); rq.onsuccess=()=>res(true); rq.onerror=()=>rej(rq.error); }); }
async function ensureDishBlob(title){
  const key = slug(title);
  const cached = await idbGet(key);
  if(cached) return new Blob([cached], {type:'image/jpeg'});
  const url = await fetchDishImageURL(title);
  if(!url) return null;
  for(const opt of [{},{referrerPolicy:'no-referrer'}]){
    try{
      const resp = await fetch(url, opt);
      if(!resp.ok) continue;
      const blob = await resp.blob();
      const buf = await blob.arrayBuffer();
      await idbSet(key, buf);
      return blob;
    }catch{}
  }
  return null;
}
async function objectURLFor(title, categoria){
  try{
    const b = await ensureDishBlob(title);
    if(b) return URL.createObjectURL(b);
  }catch{}
  return photoFallback(title, categoria);
}
async function setImg(el, title, categoria){
  try{
    const url = await objectURLFor(title, categoria);
    el.src = url;
    el.alt = `Foto de ${title}`;
    el.classList.remove('skeleton');
    el.onerror = async ()=>{
      el.onerror = null;
      const bust = photoFallback(title, categoria) + `&cb=${Date.now()}`;
      try{
        const r = await fetch(bust, {cache:'no-store'});
        if(r.ok){ el.src = bust; return; }
      }catch{}
      el.src = svgPlaceholder(title);
    };
  }catch{
    el.src = svgPlaceholder(title);
  }
  if(!el.dataset.retryBound){
    el.dataset.retryBound = "1";
    el.style.cursor = 'pointer';
    el.title = 'Clic para reintentar imagen';
    el.addEventListener('click', ()=> setImg(el, title, categoria), {passive:true});
  }
}

// Tarjetas
function card(r,i){
  const star = isFav(r) ? '⭐' : '☆';
  // Imagen empieza con SVG placeholder; luego JS llamará a setImg(...)
  const ph = svgPlaceholder(r.titulo);
  return `<article class="card" role="article" aria-label="${r.titulo}">
    <img src="${ph}" data-dish="${r.titulo}" data-cat="${r.categoria}" alt="Foto de ${r.titulo}" class="skeleton">
    <div class="body">
      <h3 style="margin:.25rem 0;font-size:1.05rem">${r.titulo}</h3>
      <p class="meta">${r.categoria} · ${r.tiempo}</p>
      <div class="bar">
        <button class="btn btn-ghost" data-a="leer" data-i="${i}" aria-label="Leer ${r.titulo} en voz alta" title="Leer">🔈 Leer</button>
        <button class="btn btn-primary" data-a="guiada" data-i="${i}" aria-label="Cocina guiada para ${r.titulo}" title="Guiada">▶️ Guiada</button>
        <button class="btn btn-ghost" data-a="abrir" data-i="${i}" aria-label="Abrir detalles de ${r.titulo}" title="Abrir">📖 Abrir</button>
        <button class="btn btn-ghost" data-a="lista" data-i="${i}" aria-label="Añadir ingredientes de ${r.titulo} a la lista" title="Añadir a lista">🧺 Añadir</button>
        <button class="btn btn-ghost" data-a="fav" data-i="${i}" aria-label="Marcar favorito" title="Favorito">${star} Favorito</button>
      </div>
    </div>
  </article>`;
}

function render(list){
  state.list = list;
  if(!list.length){
    els.grid.innerHTML = "";
    els.empty.hidden = false;
    els.count.textContent = "Mostrando 0 recetas.";
    return;
  }
  els.empty.hidden = true;
  els.grid.innerHTML = list.map((r,i)=>card(r,i)).join("");
  els.count.textContent = `Mostrando ${list.length} recetas.`;
  try{ injectListLD(list); }catch{}
  // Cargar imágenes reales
  requestIdleCallback?.(()=> {
    document.querySelectorAll('img[data-dish]').forEach(img=>{
      setImg(img, img.dataset.dish, img.dataset.cat);
    });
  }) || document.querySelectorAll('img[data-dish]').forEach(img=>setImg(img, img.dataset.dish, img.dataset.cat));
}

function filter(){
  const q = state.q.toLowerCase().trim();
  const lAll = RECETAS.filter(r =>
    (state.cat==="Todas" || r.categoria===state.cat) &&
    (!q || [r.titulo, ...r.ingredientes, ...r.pasos].join(" ").toLowerCase().includes(q))
  );
  const l = state.cat==="Favoritas" ? lAll.filter(r=>fav.has(r.titulo)) : lAll;
  render(l);
}

render(RECETAS);

els.search.oninput = e => { state.q = e.target.value; filter(); };
document.addEventListener('keydown', e => {
  if(e.ctrlKey && e.key === '/'){ e.preventDefault(); els.search.focus(); }
});

function openDetail(r){
  state.current = r;
  els.detailTitle.textContent = r.titulo;
  els.detailImg.src = svgPlaceholder(r.titulo);
  setImg(els.detailImg, r.titulo, r.categoria);
  els.detailMeta.textContent = `${r.categoria} · ${r.tiempo}`;
  els.detailIngredients.innerHTML = r.ingredientes.map(i=>`<li>${i}</li>`).join("");
  els.detailSteps.innerHTML = r.pasos.map(p=>`<li>${p}</li>`).join("");
  els.detailModal.style.display='flex';
  injectRecipeLD(r);
  if(untrapDetail) untrapDetail(); untrapDetail = trapFocus(els.detailModal);
  ensureShareButton();
}
function closeDetail(){ els.detailModal.style.display='none'; if(untrapDetail) untrapDetail(); }
els.closeDetail.onclick = closeDetail;
document.getElementById('detailModal').addEventListener('click', e => { if(e.target.id==='detailModal') closeDetail(); });

/* ===== Voz (TTS) ===== */
let ttsVoice = null, voicesReady = false;
function pickVoice(){
  const vs = speechSynthesis.getVoices();
  voicesReady = vs && vs.length>0;
  ttsVoice = vs.find(v=>/Spanish.*(Spain)|es[-_]ES/i.test(v.name+v.lang))
          || vs.find(v=>/Spanish|es[-_]/i.test(v.name+v.lang))
          || vs[0] || null;
}
if('speechSynthesis' in window){
  try{ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }catch{}
}
els.voiceRate.onchange = e => { state.rate = Number(e.target.value) || 0.9; };

function unlockTTSOnce(){
  if (!('speechSynthesis' in window) || unlockTTSOnce.done) return;
  try{ speechSynthesis.cancel(); speechSynthesis.resume(); }catch{}
  const u = new SpeechSynthesisUtterance(' ');
  try{ speechSynthesis.speak(u);}catch{} try{ speechSynthesis.cancel(); }catch{}
  unlockTTSOnce.done = true;
  document.removeEventListener('touchend', unlockTTSOnce);
  document.removeEventListener('click', unlockTTSOnce);
}
document.addEventListener('touchend', unlockTTSOnce, {passive:true});
document.addEventListener('click', unlockTTSOnce, {once:true});

let speakLock=false;
function stopSpeak(){ try{ speechSynthesis.cancel(); }catch{} }
const sleep = ms => new Promise(r=>setTimeout(r,ms));
async function speakSafe(text){
  if(!('speechSynthesis' in window)) return;
  while(speakLock) await sleep(20);
  speakLock = true;
  if(!voicesReady){ try{ pickVoice(); }catch{} }
  stopSpeak(); await sleep(80);
  const u = new SpeechSynthesisUtterance(text);
  if(ttsVoice) u.voice = ttsVoice;
  u.lang = (ttsVoice && ttsVoice.lang) || 'es-ES';
  u.rate = state.rate; u.pitch = 1.0;
  const cap = document.getElementById('ttsCaption');
  if(cap){
    u.onstart = ()=>{ cap.textContent = text; cap.classList.add('show'); };
    u.onend   = ()=>{ cap.classList.remove('show'); cap.textContent=''; };
  }
  const done = new Promise(res=>{ u.onend=()=>{ speakLock=false; res(); }; u.onerror=()=>{ speakLock=false; res(); }; });
  try{ speechSynthesis.speak(u); }catch{ speakLock=false; }
  await done;
}

function readRecipe(r){
  const intro = `${r.titulo}. ${r.categoria}. Tiempo ${r.tiempo}.`;
  const ing = r.ingredientes?.length ? `Ingredientes: ${r.ingredientes.join(", ")}.` : "";
  const pasos = r.pasos?.length ? `Pasos: ${r.pasos.map((p,i)=>`Paso ${i+1}: ${p}.`).join(" ")}` : "";
  speakSafe([intro,ing,pasos].filter(Boolean).join(" "));
  els.status.textContent = `Leyendo ${r.titulo}.`;
}

/* ===== Guiado + Temporizador ===== */
function ensureCurrent(){
  if(!state.current){
    const primera = (state.list && state.list[0]) || null;
    if(!primera){ els.status.textContent="Abre una receta y pulsa ‘Guiada’."; return false; }
    state.current = primera; state.step = 0;
  }
  return true;
}
function openGuided(r){
  state.current = r; state.step = 0;
  $('guidedRecipeTitle').textContent = r.titulo;
  $('guidedSteps').innerHTML = r.pasos.map((p,i)=>`<li data-step="${i}">${p}</li>`).join("");
  $('guidedModal').style.display='flex';
  if(untrapGuided) untrapGuided(); untrapGuided = trapFocus(els.guidedModal);
  els.status.textContent = "Voz manos libres activa.";
  speakSafe(`Iniciamos ${r.titulo}. Di: siguiente, anterior, repetir, leer ingredientes o salir.`);
  readCurrent();
  saveSession();
  if(state.autoListen) startAutoRecognizer();
}
function closeGuided(){
  stopSpeak();
  $('guidedModal').style.display='none';
  els.status.textContent="Cocina guiada cerrada.";
  if(untrapGuided) untrapGuided();
  stopAutoRecognizer();
  saveSession();
}
function readCurrent(){
  if(!ensureCurrent()) return;
  const pasos = state.current.pasos || []; if(!pasos.length) return;
  if(state.step<0) state.step=0; if(state.step>=pasos.length) state.step=pasos.length-1;
  speakSafe(`Paso ${state.step+1}. ${pasos[state.step]}`);
  const t = pasos.length; $('guidedProgress').textContent = `Paso ${state.step+1} de ${t}`;
  [...$('guidedSteps').children].forEach((li,i)=>li.style.fontWeight = (i===state.step?'700':'400'));

  clearTimerUI();
  try{
    const p = state.current?.pasos?.[state.step] || "";
    const m = /(\d{1,2})\s*(?:min|mins|minutos)\b/i.exec(p);
    if(m){ const mins = Number(m[1]); if(mins>0){ speakSafe(`Inicio temporizador de ${mins} minutos.`); startStepTimer(mins); } }
  }catch{}
}
async function nextStep(){
  if(!ensureCurrent()) return;
  const t = (state.current.pasos||[]).length;
  if(state.step < t-1){ state.step++; stopSpeak(); await sleep(60); readCurrent(); saveSession(); }
  else { stopSpeak(); await sleep(60); speakSafe("Receta terminada. ¡Buen provecho!"); saveSession(); }
}
async function prevStep(){
  if(!ensureCurrent()) return;
  if(state.step>0){ state.step--; stopSpeak(); await sleep(60); readCurrent(); saveSession(); }
  else { stopSpeak(); await sleep(60); speakSafe("Ya estás en el primer paso."); }
}
function repeatStep(){ stopSpeak(); setTimeout(readCurrent,80); }
function readIngredients(){
  if(!ensureCurrent()) return;
  const ing = state.current?.ingredientes || [];
  stopSpeak();
  setTimeout(()=>speakSafe(ing.length?("Ingredientes: "+ing.join(", ")):"No hay ingredientes listados."),80);
}
function goToStep(n){
  const total = state?.current?.pasos?.length || 0;
  if(n>=0 && n<total){ state.step=n; stopSpeak(); setTimeout(readCurrent,80); saveSession(); }
  else { stopSpeak(); setTimeout(()=>speakSafe("Ese número de paso no existe."),80); }
}
$('nextStep').onclick = nextStep; $('prevStep').onclick = prevStep; $('repeatStep').onclick = repeatStep;
$('stopReading').onclick = ()=>{ stopSpeak(); }; $('closeGuided').onclick = closeGuided;
$('printRecipe').onclick = ()=>{ window.print(); };

els.btnReadAll.onclick = ()=>{ if(state.current) readRecipe(state.current); };
els.btnGuided.onclick = ()=>{ if(state.current) openGuided(state.current); };
els.btnAddAll.onclick = ()=>{ if(state.current) addMany(state.current.ingredientes||[]); };
els.grid.addEventListener('click',e=>{
  const b = e.target.closest('button[data-a]'); if(!b) return;
  const r = state.list[Number(b.dataset.i)]; if(!r) return;
  if(b.dataset.a==='leer')  { openDetailWithHash(r); readRecipe(r); }
  if(b.dataset.a==='guiada'){ openDetailWithHash(r); openGuided(r); }
  if(b.dataset.a==='abrir') { openDetailWithHash(r); }
  if(b.dataset.a==='lista') addMany(r.ingredientes||[]);
  if(b.dataset.a==='fav')  toggleFav(r);
});

document.addEventListener('keydown',e=>{
  if($('guidedModal').style.display==='none' || $('guidedModal').style.display==='') return;
  if(e.key===' '||e.key==='ArrowRight'){ e.preventDefault(); nextStep(); }
  if(e.key==='ArrowLeft'){ e.preventDefault(); prevStep(); }
  if(e.key==='r'||e.key==='R'){ e.preventDefault(); repeatStep(); }
  if(e.key==='Escape'){ e.preventDefault(); closeGuided(); closeDetail(); }
});

/* ===== Lista de la compra ===== */
const SKEY='shopping.v1'; let shopping=JSON.parse(localStorage.getItem(SKEY)||'[]');
function save(){ localStorage.setItem(SKEY, JSON.stringify(shopping)); }
function uid(){ return Math.random().toString(36).slice(2,9); }
function renderList(){
  $('shoppingList').innerHTML = shopping.map(i=>`
    <li class="row" style="align-items:center">
      <input type="checkbox" ${i.done?'checked':''} data-a="t" data-id="${i.id}" aria-label="Marcar ${i.text}" title="Marcar ${i.text}">
      <input type="text" value="${i.text.replace(/"/g,'&quot;')}" style="flex:1;background:transparent;border:0;border-bottom:1px solid #d1d5db;padding:.25rem .35rem" data-a="e" data-id="${i.id}" aria-label="Editar ${i.text}" title="Editar ${i.text}">
      <button class="btn btn-ghost" data-a="d" data-id="${i.id}" aria-label="Eliminar ${i.text}" title="Eliminar ${i.text}">🗑️</button>
    </li>`).join("");
  $('shoppingEmpty').hidden = shopping.length>0;
}
function addItem(text){ text=(text||"").trim(); if(!text) return; shopping.push({id:uid(),text,done:false}); save(); renderList(); }
function addMany(arr){ (arr||[]).forEach(addItem); openDrawer(); }
function openDrawer(){ $('shoppingDrawer').classList.add('open'); $('shoppingDrawer').setAttribute('aria-hidden','false'); }
function closeDrawer(){ $('shoppingDrawer').classList.remove('open'); $('shoppingDrawer').setAttribute('aria-hidden','true'); }
els.openShopping.onclick = openDrawer; els.closeShopping.onclick = closeDrawer;
els.addItem.onclick = ()=>{ addItem(els.newItem.value); els.newItem.value=""; els.newItem.focus(); };
els.newItem.onkeydown = e=>{ if(e.key==='Enter'){ e.preventDefault(); els.addItem.click(); } };
$('shoppingList').addEventListener('click',e=>{
  const b=e.target.closest('button[data-a="d"]'); if(!b) return;
  shopping = shopping.filter(x=>x.id!==b.dataset.id); save(); renderList();
});
$('shoppingList').addEventListener('change',e=>{
  const c=e.target.closest('input[type="checkbox"][data-a="t"]'); if(!c) return;
  const it=shopping.find(x=>x.id===c.dataset.id); if(it){ it.done=c.checked; save(); }
});
$('shoppingList').addEventListener('input',e=>{
  const t=e.target.closest('input[type="text"][data-a="e"]'); if(!t) return;
  const it=shopping.find(x=>x.id===t.dataset.id); if(it){ it.text=t.value; save(); }
});
els.clearChecked.onclick = ()=>{ shopping = shopping.filter(i=>!i.done); save(); renderList(); };
els.exportList.onclick = ()=>{
  const data = shopping.map(i=>`${i.done?'[x]':'[ ]'} ${i.text}`).join('\n');
  const a=document.createElement('a');
  a.href = URL.createObjectURL(new Blob([data],{type:'text/plain'}));
  a.download='lista_compra.txt'; a.click();
};
els.printList.onclick = ()=>{
  const w = window.open('','_blank');
  w.document.write(`<pre>${shopping.map(i=>`${i.done?'[x]':'[ ]'} ${i.text}`).join('\n')}</pre>`);
  w.document.close(); w.print(); setTimeout(()=>w.close(),300);
};

/* ===== Temporizadores por paso ===== */
let currentTimer = null, countdownInt = null;
function clearTimerUI(){
  if(countdownInt) { clearInterval(countdownInt); countdownInt = null; }
  const old = document.getElementById('guidedTimer');
  if(old) old.remove();
}
function beep(ms=200, freq=880){
  try{
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    const osc = ctx.createOscillator(); const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = freq; osc.start();
    setTimeout(()=>{ osc.stop(); ctx.close(); }, ms);
  }catch{}
}
function startStepTimer(minutes){
  clearTimerUI();
  if(currentTimer) { clearTimeout(currentTimer); currentTimer = null; }
  const box = document.createElement('div');
  box.id='guidedTimer';
  box.className='meta';
  box.style.marginTop='.5rem';
  box.innerHTML = `<span>⏱️ Temporizador: <strong id="tleft"></strong></span>
    <button class="btn btn-ghost" id="cancelTimer" aria-label="Cancelar temporizador" title="Cancelar temporizador" style="margin-left:.5rem">Cancelar</button>`;
  document.querySelector('#guidedModal .card > div:last-child').appendChild(box);

  let left = Math.round(minutes*60);
  const $left = document.getElementById('tleft');
  const fmt = s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
  $left.textContent = fmt(left);

  countdownInt = setInterval(()=>{ left--; $left.textContent = fmt(Math.max(0,left)); }, 1000);
  currentTimer = setTimeout(()=>{ clearTimerUI(); beep(300); speakSafe("¡Tiempo!"); }, minutes*60*1000);
  document.getElementById('cancelTimer').onclick = ()=>{ clearTimerUI(); if(currentTimer){ clearTimeout(currentTimer); currentTimer=null; } };
}

/* ===== JSON-LD (SEO) ===== */
function injectRecipeLD(r){
  const ld = {
    "@context":"https://schema.org",
    "@type":"Recipe",
    "name": r.titulo,
    "recipeCategory": r.categoria,
    "image": " ",
    "recipeIngredient": r.ingredientes,
    "recipeInstructions": (r.pasos||[]).map(p=>({"@type":"HowToStep","text":p})),
    "totalTime": "PT30M"
  };
  let n = document.getElementById("ld-recipe");
  if(!n){ n=document.createElement("script"); n.type="application/ld+json"; n.id="ld-recipe"; document.head.appendChild(n); }
  n.textContent = JSON.stringify(ld);
}
function injectListLD(list){
  const items = (list||[]).slice(0,50).map((r,i)=>({
    "@type":"ListItem","position":i+1,"name":r.titulo,"url": location.origin + location.pathname + '#receta=' + slug(r.titulo)
  }));
  const ld = {"@context":"https://schema.org","@type":"ItemList","itemListElement":items};
  let n = document.getElementById("ld-list");
  if(!n){ n=document.createElement("script"); n.type="application/ld+json"; n.id="ld-list"; document.head.appendChild(n); }
  n.textContent = JSON.stringify(ld);
}

/* ===== Focus trap en modales ===== */
function trapFocus(modal){
  const sel = 'a[href],button,textarea,input,select,[tabindex]:not([tabindex="-1"])';
  function cycle(e){
    if(e.key!=='Tab') return;
    const f = modal.querySelectorAll(sel); if(!f.length) return;
    const first = f[0], last = f[f.length-1];
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
  modal.addEventListener('keydown', cycle);
  const f = modal.querySelector(sel); f && f.focus();
  return ()=> modal.removeEventListener('keydown', cycle);
}
let untrapDetail = null, untrapGuided = null;

/* ===== Deep-link & Compartir ===== */
function openDetailWithHash(r){
  openDetail(r);
  const h = '#receta=' + slug(r.titulo);
  if(location.hash !== h){ history.pushState({}, "", h); }
}
function fromHashOpen(){
  const m = location.hash.match(/#receta=([a-z0-9\-]+)/i);
  if(!m) return;
  const r = RECETAS.find(x=>slug(x.titulo)===m[1]);
  if(r) openDetail(r);
}
window.addEventListener('popstate', fromHashOpen);
document.addEventListener('DOMContentLoaded', fromHashOpen);

function ensureShareButton(){
  const bar = document.querySelector('#detailModal .bar');
  if(!bar) return;
  let btn = document.getElementById('btnShare');
  if(!btn){
    btn = document.createElement('button');
    btn.id='btnShare';
    btn.className='btn btn-ghost';
    btn.setAttribute('aria-label','Compartir receta');
    btn.setAttribute('title','Compartir receta');
    btn.textContent='📤 Compartir';
    bar.appendChild(btn);
  }
  btn.onclick = async ()=>{
    if(!state.current) return;
    const url = location.origin + location.pathname + '#receta=' + slug(state.current.titulo);
    if(navigator.share){
      try{ await navigator.share({ title: state.current.titulo, text: 'Receta', url }); }catch{}
    }else{
      try{ await navigator.clipboard.writeText(url);}catch{}
      alert('Enlace copiado: ' + url);
    }
  };
}

/* ===== Pestaña Favoritas ===== */
(function addFavTab(){
  const tablist = document.querySelector('[role="tablist"]');
  const btn = document.createElement('button');
  btn.className='tab'; btn.role='tab'; btn.id='tab-fav'; btn.dataset.cat='Favoritas';
  btn.setAttribute('aria-selected','false'); btn.setAttribute('title','Mostrar favoritas'); btn.setAttribute('aria-label','Mostrar favoritas');
  btn.textContent='Favoritas';
  tablist.appendChild(btn);
  btn.addEventListener('click', ()=>setActiveTab(btn));
})();

/* ===== Reanudar sesión ===== */
const SKEY_SESSION = "session.v1"; // {slug, step}
function saveSession(){
  try{
    if(!state.current) return;
    localStorage.setItem(SKEY_SESSION, JSON.stringify({ slug: slug(state.current.titulo), step: state.step||0 }));
  }catch{}
}
function loadSession(){
  try{
    const raw = localStorage.getItem(SKEY_SESSION);
    if(!raw) return null;
    const d = JSON.parse(raw);
    const r = RECETAS.find(x => slug(x.titulo) === d.slug);
    return r ? {recipe:r, step:Math.max(0, Math.min((r.pasos||[]).length-1, d.step||0))} : null;
  }catch{ return null; }
}
document.addEventListener('DOMContentLoaded', ()=>{
  const last = loadSession();
  if(last && confirm(`¿Reanudar "${last.recipe.titulo}" en el paso ${last.step+1}?`)){
    openDetailWithHash(last.recipe);
    openGuided(last.recipe);
    state.step = last.step;
    readCurrent();
  }
});

/* ==========================
    🔊 VOZ MANOS LIBRES (Auto Listen)
    ========================== */
const SRClass = (!isIOS) && (window.SpeechRecognition||window.webkitSpeechRecognition)
                ? (window.SpeechRecognition||window.webkitSpeechRecognition) : null;

let recAuto = null;
let autoRestartTimer = null;

function setStatus(msg){ els.status.textContent = msg; }
function norm(s){ try{ return (s||"").normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim(); }catch{return (s||"").toLowerCase().trim();} }

// HUD animación
let bar = document.querySelector('#voiceWave > i');
function drawLevel(w){ if(!bar) return; const px=Math.max(4,Math.min(138,Math.round(w*138))); bar.style.width=px+'px'; }

// Levenshtein light
function lev(a,b){
  const m=a.length,n=b.length; if(!m) return n; if(!n) return m;
  const dp=new Array(n+1).fill(0); for(let j=0;j<=n;j++) dp[j]=j;
  for(let i=1;i<=m;i++){ let prev=dp[0], tmp; dp[0]=i; for(let j=1;j<=n;j++){
    tmp=dp[j]; dp[j]=Math.min(dp[j]+1, dp[j-1]+1, prev + (a[i-1]===b[j-1]?0:1)); prev=tmp;
  }}
  return dp[n];
}

const CMD_LIST = [
  {type:'next', variants:['siguiente','proximo','avanza','adelante','continuar']},
  {type:'prev', variants:['anterior','atras','retroceder']},
  {type:'repeat', variants:['repetir','otra vez','de nuevo','repite']},
  {type:'ingredients', variants:['leer ingredientes','ingredientes','leer lista']},
  {type:'stop', variants:['salir','parar','detener','cerrar']}
];
const NUM = {uno:1,una:1,dos:2,tres:3,cuatro:4,cinco:5,seis:6,siete:7,ocho:8,nueve:9,diez:10,once:11,doce:12,trece:13,catorce:14,quince:15,dieciseis:16,diecisiete:17,dieciocho:18,diecinueve:19,veinte:20};

function parseCommand(raw){
  const t = norm(raw).replace(/\bpaso\s+(uno|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|trece|catorce|quince|dieciseis|diecisiete|dieciocho|diecinueve|veinte)\b/g,
                        (_,w)=>'paso '+NUM[w]);
  const m = t.match(/\bpaso\s+(\d{1,2})\b/); if(m) return {type:'goto', n:+m[1]};
  for(const c of CMD_LIST) for(const v of c.variants) if(t===v) return {type:c.type};
  let best=99, winner={type:'unknown'};
  for(const c of CMD_LIST){ for(const v of c.variants){ const d=lev(t,v); if(d<best){ best=d; winner={type:c.type}; } } }
  return best<=2 ? winner : {type:'unknown', raw:raw};
}

function makeRecognizer(){
  if(!SRClass) return null;
  const r=new SRClass();
  r.lang='es-ES';
  r.continuous=true;
  r.interimResults=true;
  r.maxAlternatives=4;
  return r;
}

function startAutoRecognizer(){
  if(!SRClass){
    setStatus(isIOS ? "Voz: iPhone/iPad no permite reconocimiento web. Usa botones." : "Voz: reconocimiento no disponible en este navegador.");
    document.getElementById('voiceHUD')?.classList.add('disabled');
    return;
  }
  if(recAuto) { try{recAuto.stop();}catch{} recAuto=null; }
  recAuto = makeRecognizer();
  if(!recAuto) return;

  recAuto.onstart = ()=>{ setStatus("🎙️ Escuchando… (manos libres)"); document.getElementById('voiceHUD')?.classList.add('listening'); };
  recAuto.onerror = e => { setStatus("Voz: " + (e.error||'error')); scheduleRestart(); };
  recAuto.onend   = ()=> { setStatus("Voz detenida. Intentando reanudar…"); scheduleRestart(); };
  recAuto.onresult = ev => {
    let finalText = "";
    for(let i=ev.resultIndex;i<ev.results.length;i++){
      const res=ev.results[i];
      const txt=res[0]?.transcript||'';
      if(res.isFinal) finalText += txt + " ";
      els.heard && (els.heard.textContent=(res.isFinal?"✓ ":"… ")+txt);
      // animación simple del “nivel”
      const len = Math.min(1, Math.max(0, (txt||'').length/30));
      drawLevel(len);
      document.getElementById('voiceHUD')?.classList.toggle('talking', len>0.15);
    }
    if(finalText.trim()){
      const cmd = parseCommand(finalText.trim());
      if(cmd.type==='stop') return closeGuided();
      if(cmd.type==='repeat') return repeatStep();
      if(cmd.type==='next') return nextStep();
      if(cmd.type==='prev') return prevStep();
      if(cmd.type==='ingredients') return readIngredients();
      if(cmd.type==='goto') return goToStep(Math.max(0,(cmd.n||1)-1));
    }
  };

  try{ recAuto.start(); }
  catch{ setStatus("Voz: permiso requerido. Pulsa “Reconectar voz”."); }
}

function stopAutoRecognizer(){
  if(autoRestartTimer){ clearTimeout(autoRestartTimer); autoRestartTimer=null; }
  if(recAuto){ try{recAuto.onresult=recAuto.onend=recAuto.onerror=null; recAuto.stop(); }catch{} recAuto=null; }
  document.getElementById('voiceHUD')?.classList.remove('listening','talking');
  drawLevel(0);
}
function scheduleRestart(){
  if(!state.autoListen) return;
  if(autoRestartTimer){ clearTimeout(autoRestartTimer); }
  autoRestartTimer = setTimeout(()=>{ try{ recAuto && recAuto.start(); }catch{} }, 600);
}
els.autoListen.onchange = (e)=>{ state.autoListen = !!e.target.checked; if(state.autoListen && !recAuto){ startAutoRecognizer(); } if(!state.autoListen){ stopAutoRecognizer(); } };
els.toggleMic.onclick = ()=>{ stopAutoRecognizer(); startAutoRecognizer(); };

/* ===== Inicial ===== */
document.addEventListener('DOMContentLoaded', ()=>{
  filter(); renderList();
});

/* ===== Reutilidades menores ===== */
function renderList(){
  // llamada inicial de la lista de la compra (ya definida arriba)
}

/* ===== Eventos miscelánea ===== */
// Cerrar modal al clicar fondo
document.getElementById('detailModal').addEventListener('click', e => { if(e.target.id==='detailModal') closeDetail(); });
document.getElementById('guidedModal').addEventListener('click', e => { if(e.target.id==='guidedModal') closeGuided(); });

function openDrawer(){ $('shoppingDrawer').classList.add('open'); $('shoppingDrawer').setAttribute('aria-hidden','false'); }
function closeDrawer(){ $('shoppingDrawer').classList.remove('open'); $('shoppingDrawer').setAttribute('aria-hidden','true'); }

// Profundidad: abrir detalle por hash si existe
fromHashOpen();
