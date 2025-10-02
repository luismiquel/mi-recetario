const APP_VERSION = "recetario-1.7.0-singlefile";

/* ===== Datos (160 recetas) ===== */
const IMG_BY_CAT = c => ({ Aperitivo:"Aperitivo", Primero:"Primero", Segundo:"Segundo", Postre:"Postre" }[c] || "Receta");
const APERITIVOS = [ "Tostas de tomate y jamón", /* ... (resto de nombres) ... */ "Berenjena frita con miel" ];
const PRIMEROS = [ "Sopa de ajo", /* ... (resto de nombres) ... */ "Caldo de pollo casero" ];
const SEGUNDOS = [ "Pollo al ajillo", /* ... (resto de nombres) ... */ "Trucha a la navarra" ];
const POSTRES = [ "Flan casero", /* ... (resto de nombres) ... */ "Fresas con nata" ];

// Función auxiliar para convertir el tiempo de texto a número (minutos)
function parseTime(timeString) {
  const match = timeString.match(/\d+/); // Encuentra el primer número en el texto
  return match ? parseInt(match[0], 10) : 0;
}

/* Overrides realistas para platos clave (ingredientes y pasos detallados) */
const OV = (()=>{ function R(ing, pasos, tiempo){ return {ing, pasos, tiempo}; } const CROQ_BASE = ["Leche entera","Harina de trigo","Mantequilla","Aceite de oliva","Cebolla","Nuez moscada","Sal","Pimienta","Huevos","Pan rallado"]; const CROQ_PASOS = [ "Pica fino cebolla y el relleno.", "Pocha cebolla con aceite y mantequilla 6–8 min sin dorar.", "Añade el relleno y rehoga 1–2 min.", "Incorpora harina (90–100 g/L leche) y cocina 2–3 min.", "Agrega la leche caliente poco a poco, removiendo hasta bechamel espesa y lisa.", "Sazona con sal, pimienta y nuez moscada; cocina 8–10 min a fuego bajo.", "Pasa a fuente, filma a piel y enfría 4 h (mejor de un día para otro).", "Da forma, pasa por huevo y pan rallado.", "Fríe a 175–180 ºC hasta dorar; escurre." ]; const M = new Map([ ["croquetas de jamón", R(["Jamón serrano picado",...CROQ_BASE], CROQ_PASOS, "45–75 min")], ["patatas bravas", R( ["Patatas","Aceite para freír","Sal","Ajo","Pimentón dulce","Pimentón picante","Tomate triturado","Vinagre"], ["Fríe patatas en dados hasta dorar.","Sofríe ajo; añade pimentón, tomate y sal.","Cocina 10–12 min y ajusta con vinagre.","Sirve patatas con salsa por encima."], "35 min" )], ["tortilla de patatas", R( ["Patatas","Cebolla (opcional)","Huevos","Aceite","Sal"], ["Fríe patata a fuego suave.","Mezcla con huevo y sal.","Cuaja a tu gusto por ambos lados."], "30 min" )], ["paella mixta", R( ["Arroz","Caldo","Pollo","Conejo","Gamba/Calamar","Pimiento","Tomate","Ajo","Aceite","Sal","Azafrán"], ["Dora carnes y haz sofrito.","Nacara el arroz y moja con caldo/azafrán.","Cocina 18–20 min, mariscos al final; reposo 5."], "50 min" )] ]); return { get: (title) => M.get(title.toLowerCase()) || null }; })();
const PASOS_BASE = { Aperitivo:["Prepara y ten a mano todo.","Corta o dispón los ingredientes.","Sofríe o mezcla hasta aromatizar.","Monta y ajusta sal/aliño.","Reposa 1–2 min o sirve caliente.","Emplata y sirve."], Primero:["Lava y prepara verduras.","Sofríe ajo/cebolla suave.","Añade ingrediente principal y rehoga.","Cubre con caldo/agua y cocina.","Ajusta textura (tritura/reposa).","Sirve caliente o frío."], Segundo:["Seca la pieza y sala.","Añade adobo/especias.","Dora/hornea/sella bien.","Agrega guarnición/salsa y cocina al punto.","Reposa unos minutos.","Sirve con su jugo."], Postre:["Pesa y mide todo.","Mezcla secos y húmedos aparte.","Aromatiza (cítricos/vainilla/canela).","Hornea/refrigera hasta cuajar.","Enfría o reposa.","Decora y sirve."] };

function stripDiacritics(s){ try{ return (s||"").normalize('NFD').replace(/[\u0300-\u036f]/g,''); }catch{ return s||""; } }
const slug = s => stripDiacritics((s||"").toLowerCase()).replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
function ingredientesPara(cat,t){ t=t.toLowerCase(); let ing=[]; const ov = OV.get(t); if (ov) return ov.ing; /* ... (resto de lógica) ... */ return Array.from(new Set(ing)); }
function tiempo(cat,t){ const ov=OV.get(t.toLowerCase()); if(ov) return ov.tiempo; /* ... (resto de lógica) ... */ return "20–30 min"; }
function pasosPara(cat,t){ const ov=OV.get(t.toLowerCase()); if(ov) return ov.pasos; return PASOS_BASE[cat]; }
function build(cat,list){ return list.map(n=>({categoria:cat,titulo:n,imagen:IMG_BY_CAT(cat), ingredientes:ingredientesPara(cat,n), pasos:pasosPara(cat,n), tiempo:tiempo(cat,n), dificultad: /croqueta|paella|fideuá|rabo|menestra|tarta|flan/i.test(n) ? 'Media' : 'Fácil'})); }
const RECETAS = [ ...build("Aperitivo", APERITIVOS), ...build("Primero", PRIMEROS), ...build("Segundo", SEGUNDOS), ...build("Postre", POSTRES) ];

/* ===== Estado + referencias ===== */
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
const state = { q:"", cat:"Todas", list:RECETAS, current:null, step:0, dark: true, contrast:false, font:16, listening:false, rate:0.9, autoListen:true };
const $ = id => document.getElementById(id);
const els = { grid: $('recipesGrid'), /* ... (resto de elementos) ... */ closeDetail: $('closeDetail') };

function applyTheme(){ document.documentElement.classList.toggle('dark', state.dark); }
function applyContrast(){ document.documentElement.classList.toggle('hc', state.contrast); }
function setFont(px){ state.font = Math.max(14, Math.min(22, px)); document.documentElement.style.setProperty('--base-font', state.font+'px'); }
applyTheme(); applyContrast(); setFont(state.font);
els.toggleTheme.onclick = () => { state.dark = !state.dark; applyTheme(); };
els.toggleContrast.onclick = () => { state.contrast = !state.contrast; applyContrast(); };
els.fontPlus.onclick = () => setFont(state.font+1);
els.fontMinus.onclick = () => setFont(state.font-1);

function setActiveTab(btn){ els.tabs().forEach(t => t.setAttribute('aria-selected', t === btn ? 'true' : 'false')); state.cat = btn.dataset.cat; filter(); }
els.tabs().forEach(b => b.addEventListener('click', () => setActiveTab(b)));

const FKEY='fav.v1';
let fav = new Set(JSON.parse(localStorage.getItem(FKEY)||'[]'));
function saveFav(){ try{ localStorage.setItem(FKEY, JSON.stringify([...fav])); }catch{} }
function isFav(r){ return fav.has(r.titulo); }
function toggleFav(r){ isFav(r) ? fav.delete(r.titulo) : fav.add(r.titulo); saveFav(); filter(); }

function photoFallback(title, categoria){ let h=0; for(let i=0;i<(title||'').length;i++){ h=((h<<5)-h)+title.charCodeAt(i); h|=0; } const lock = Math.abs(h); return `https://picsum.photos/seed/${lock}/800/500`; }
function svgPlaceholder(title="Receta"){ const t = (title||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"); return `data:image/svg+xml;charset=utf-8,` + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#e5e7eb"/><stop offset="1" stop-color="#d1d5db"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="50%" y="50%" text-anchor="middle" fill="#6b7280" font-size="28" font-family="system-ui,Segoe UI,Roboto" dy="8">${t}</text><text x="50%" y="80%" text-anchor="middle" fill="#9ca3af" font-size="14" font-family="system-ui,Segoe UI,Roboto">sin imagen</text></svg>`); }
// ... (resto de funciones de imágenes: fetchJSON, wikiSearchTitle, etc. sin cambios)

function card(r,i){ /* ... (código de la tarjeta sin cambios) ... */ }
function render(list){ /* ... (código de render sin cambios) ... */ }

function filter() {
  // 1. Leer los valores de todos los filtros
  const q = state.q.toLowerCase().trim();
  const selectedCategory = state.cat;
  const sortValue = document.getElementById('sortOrder').value;
  const difficultyValue = document.getElementById('filterDifficulty').value;
  const timeValue = document.getElementById('filterTime').value;

  // 2. Empezar con todas las recetas y aplicar filtros en cadena
  let filteredRecipes = RECETAS
    .filter(r => {
      // Filtro por categoría (de las pestañas)
      return selectedCategory === "Todas" || r.categoria === selectedCategory;
    })
    .filter(r => {
      // Filtro por texto de búsqueda
      return !q || [r.titulo, ...r.ingredientes].join(" ").toLowerCase().includes(q);
    })
    .filter(r => {
      // Filtro por dificultad
      return difficultyValue === 'all' || r.dificultad === difficultyValue;
    })
    .filter(r => {
      // Filtro por tiempo
      const recipeTime = parseTime(r.tiempo);
      if (timeValue === 'all') return true;
      if (timeValue === '30') return recipeTime <= 30;
      if (timeValue === '60') return recipeTime > 30 && recipeTime <= 60;
      if (timeValue === '61') return recipeTime > 60;
      return true;
    });

  // 3. Aplicar la ordenación
  switch (sortValue) {
    case 'az':
      filteredRecipes.sort((a, b) => a.titulo.localeCompare(b.titulo));
      break;
    case 'za':
      filteredRecipes.sort((a, b) => b.titulo.localeCompare(a.titulo));
      break;
    case 'time-asc':
      filteredRecipes.sort((a, b) => parseTime(a.tiempo) - parseTime(b.tiempo));
      break;
    case 'time-desc':
      filteredRecipes.sort((a, b) => parseTime(b.tiempo) - parseTime(a.tiempo));
      break;
  }
  
  const finalRecipes = selectedCategory === "Favoritas" 
    ? filteredRecipes.filter(r => fav.has(r.titulo)) 
    : filteredRecipes;

  // 4. Renderizar el resultado final
  render(finalRecipes);
}

render(RECETAS);

els.search.oninput = e => { state.q = e.target.value; filter(); };
document.getElementById('sortOrder').onchange = filter;
document.getElementById('filterDifficulty').onchange = filter;
document.getElementById('filterTime').onchange = filter;

document.addEventListener('keydown', e => { if(e.ctrlKey && e.key === '/'){ e.preventDefault(); els.search.focus(); } });

// ... (resto de funciones: openDetail, closeDetail, Voz, Guiado, Lista de la compra, etc. sin cambios) ...
