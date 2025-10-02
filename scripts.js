const APP_VERSION = "recetario-4.0.0-stable";

const IMAGENES_RECETAS = { "Tortilla de patatas": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tortilla_de_patatas_con_cebolla_2.jpg", "Paella mixta": "https://upload.wikimedia.org/wikipedia/commons/0/00/Plato_de_paella_mixta.jpg", "Gazpacho andaluz": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Gazpacho_andaluz.jpg", "Salmorejo cordobés": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Salmorejo.jpg", "Patatas bravas": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Patatas_bravas_madrid.jpg/1280px-Patatas_bravas_madrid.jpg", "Croquetas de jamón": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Croquetas_de_jamon_serrano.jpg/1280px-Croquetas_de_jamon_serrano.jpg", "Pisto manchego": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pisto_manchego_con_huevo_frito.jpg/1024px-Pisto_manchego_con_huevo_frito.jpg", "Fabada asturiana": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Plato_fabada.jpg/1024px-Plato_fabada.jpg", "Pulpo a la gallega": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pulpo_a_la_gallega_-_Lugo_001.jpg/1024px-Pulpo_a_la_gallega_-_Lugo_001.jpg", "Tarta de Santiago": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tarta_de_Santiago_al_corte.jpg/1024px-Tarta_de_Santiago_al_corte.jpg", "Crema catalana": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Crema_catalana_quemada.jpg/1024px-Crema_catalana_quemada.jpg", "Arroz con leche": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Arroz_con_leche_de_Asturias.jpg/1024px-Arroz_con_leche_de_Asturias.jpg", "Calamares a la romana": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Calamares_a_la_romana_con_limon.jpg/1024px-Calamares_a_la_romana_con_limon.jpg", "Queso manchego con membrillo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Queso_Manchego_con_Membrillo_%283578359194%29.jpg/1024px-Queso_Manchego_con_Membrillo_%283578359194%29.jpg", "Pimientos del padrón": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pimientos_de_Padr%C3%B3n_-_Herb%C3%B3n_-_Galicia_-_Espa%C3%B1a_-_01.jpg/1024px-Pimientos_de_Padr%C3%B3n_-_Herb%C3%B3n_-_Galicia_-_Espa%C3%B1a_-_01.jpg", "Boquerones en vinagre": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Boquerones_en_vinagre_de_Madrid.jpg/1024px-Boquerones_en_vinagre_de_Madrid.jpg", "Empanadillas de atún": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Empanadillas_de_bonito_caseras_recien_fritas.jpg/1024px-Empanadillas_de_bonito_caseras_recien_fritas.jpg", "Lentejas estofadas": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lentejas_con_chorizo_y_verduras.jpg/1024px-Lentejas_con_chorizo_y_verduras.jpg", "Ensaladilla rusa": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ensaladilla_Rusa_de_cerca.JPG/1024px-Ensaladilla_Rusa_de_cerca.JPG", "Crema de calabaza": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Crema-de-calabaza.jpg/1024px-Crema-de-calabaza.jpg", "Rabo de toro": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Rabo_de_toro_del_Restaurante_Astorga.jpg/1024px-Rabo_de_toro_del_Restaurante_Astorga.jpg", "Merluza en salsa verde": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Merluza_en_salsa_verde_con_almejas.jpg/1024px-Merluza_en_salsa_verde_con_almejas.jpg", "Pollo al ajillo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pollo_al_ajillo_-_Chicken_with_garlic.jpg/1024px-Pollo_al_ajillo_-_Chicken_with_garlic.jpg", "Carrilleras al vino tinto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Carrillada_de_cerdo_al_vino_tinto_de_toro.jpg/1024px-Carrillada_de_cerdo_al_vino_tinto_de_toro.jpg", "Flan casero": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Flan_casero_%28porci%C3%B3n%29.jpg/1024px-Flan_casero_%28porci%C3%B3n%29.jpg", "Torrijas": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Torrijas_de_leche.jpg/1024px-Torrijas_de_leche.jpg", "Leche frita": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Leche_frita_with_cinnamon_ice_cream.jpg/1024px-Leche_frita_with_cinnamon_ice_cream.jpg" };
const APERITIVOS = ["Tostas de tomate y jamón", "Tostas de anchoa y pimiento", "Tostas de escalivada", "Tostas de salmón y queso fresco", "Croquetas de jamón", "Croquetas de pollo", "Croquetas de bacalao", "Croquetas de setas", "Empanadillas de atún", "Empanadillas de carne", "Patatas bravas", "Patatas alioli", "Boquerones en vinagre", "Champiñones al ajillo", "Gildas donostiarras", "Pinchos de tortilla", "Pinchos morunos", "Queso marinado en aceite", "Hummus clásico con crudités", "Hummus de remolacha", "Hummus de aguacate", "Gazpacho en vasitos", "Salmorejo en chupitos", "Ensaladilla rusa", "Tortilla francesa mini", "Banderillas variadas", "Mejillones en escabeche", "Sardinas marinadas", "Pulpo a la gallega (tapa)", "Calamares a la romana", "Torreznos crujientes", "Jamón con picos", "Queso manchego con membrillo", "Pimientos del padrón", "Montadito de lomo", "Montadito de pringá", "Bonito con tomate (tapa)", "Pisto con huevo (tapa)", "Chistorra a la sidra", "Berenjena frita con miel"];
const PRIMEROS = ["Sopa de ajo", "Sopa castellana", "Gazpacho andaluz", "Salmorejo cordobés", "Ajoblanco", "Crema de calabaza", "Crema de puerros", "Crema de champiñón", "Pisto manchego", "Menestra de verduras", "Lentejas estofadas", "Garbanzos con espinacas", "Judías blancas con verduras", "Arroz caldoso de verduras", "Arroz a la cubana", "Arroz negro", "Arroz al horno", "Paella de verduras", "Fideuá de pescado", "Macarrones con tomate", "Tallarines al ajillo", "Espaguetis carbonara ligera", "Ensalada mixta", "Ensalada campera", "Ensalada de garbanzos", "Ensalada de pasta fría", "Tomates aliñados", "Papas arrugadas con mojo", "Pimientos asados", "Alcachofas salteadas", "Acelgas rehogadas", "Sopa de pescado", "Caldo gallego", "Cocido andaluz (sopa)", "Sopa minestrone", "Vichyssoise", "Crema de zanhoria", "Porrusalda", "Sopa de marisco", "Caldo de pollo casero"];
const SEGUNDOS = ["Pollo al ajillo", "Pollo al horno con patatas", "Pollo en pepitoria", "Pechuga de pollo a la plancha", "Escalope de ternera", "Filete de ternera a la plancha", "Carrilleras al vino tinto", "Rabo de toro", "Albóndigas en salsa", "Lomo adobado", "Costillas al horno", "Chuletillas de cordero", "Cordero asado", "Secreto ibérico a la plancha", "Solomillo al roquefort", "Bacalao a la vizcaína", "Bacalao al pil-pil", "Merluza en salsa verde", "Dorada al horno", "Lubina a la sal", "Salmón al papillote", "Atún encebollado", "Calamares en su tinta", "Pulpo a la gallega", "Paella mixta", "Arroz con pollo", "Arroz con bogavante", "Empanada gallega de atún", "Pisto con huevos", "Tortilla de patatas", "Revuelto de setas", "Conejo al ajillo", "Codornices escabechadas", "Callos a la madrileña", "Fabada asturiana", "Marmitako de bonito", "Chuletón a la plancha", "Escabeche de caballa", "Bonito con tomate", "Trucha a la navarra"];
const POSTRES = ["Flan casero", "Natillas caseras", "Arroz con leche", "Leche frita", "Torrijas", "Crema catalana", "Tarta de queso al horno", "Tarta de Santiago", "Bizcocho de yogur", "Bizcocho de naranja", "Magdalenas caseras", "Galletas de mantequilla", "Rosquillas fritas", "Pestiños", "Buñuelos de viento", "Filloas", "Peras al vino", "Compota de manzana", "Macedonia de frutas", "Helado rápido de plátano", "Mousse de chocolate", "Natillas de vainilla", "Tarta de manzana", "Tarta tres leches (versión)", "Brazo de gitano", "Quesada pasiega", "Tocino de cielo", "Pan de Calatrava", "Cuajada con miel", "Crepes dulces", "Flan de café", "Crema pastelera con frutas", "Tarta de almendra", "Tarta de galletas con chocolate", "Bizcocho marmolado", "Helado de yogur", "Brownie sencillo", "Crema de limón", "Naranja con canela", "Fresas con nata"];

function parseTime(timeString) { const match = timeString.match(/\d+/); return match ? parseInt(match[0], 10) : 0; }
const PASOS_BASE = { Aperitivo: ["Prepara y ten a mano todo.", "Corta o dispón los ingredientes.", "Sofríe o mezcla hasta aromatizar.", "Monta y ajusta sal/aliño.", "Reposa 1–2 min o sirve caliente.", "Emplata y sirve."], Primero: ["Lava y prepara verduras.", "Sofríe ajo/cebolla suave.", "Añade ingrediente principal y rehoga.", "Cubre con caldo/agua y cocina.", "Ajusta textura (tritura/reposa).", "Sirve caliente o frío."], Segundo: ["Seca la pieza y sala.", "Añade adobo/especias.", "Dora/hornea/sella bien.", "Agrega guarnición/salsa y cocina al punto.", "Reposa unos minutos.", "Sirve con su jugo."], Postre: ["Pesa y mide todo.", "Mezcla secos y húmedos aparte.", "Aromatiza (cítricos/vainilla/canela).", "Hornea/refrigera hasta cuajar.", "Enfría o reposa.", "Decora y sirve."] };
function stripDiacritics(s) { try { return (s || "").normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch { return s || ""; } }
function build(cat, list) { return list.map(n => ({ categoria: cat, titulo: n, imagen: IMAGENES_RECETAS[n] || null, ingredientes: ingredientesPara(cat, n), pasos: pasosPara(cat, n), tiempo: tiempo(cat, n), dificultad: /paella|fideuá|rabo|carrilleras|tarta|flan|leche frita/i.test(n) ? 'Media' : 'Fácil' })); }
const RECETAS = [...build("Aperitivo", APERITIVOS), ...build("Primero", PRIMEROS), ...build("Segundo", SEGUNDOS), ...build("Postre", POSTRES)];

let state = { q: "", cat: "Todas", list: RECETAS, current: null, dark: true, contrast: false, font: 16 };
const $ = id => document.getElementById(id);
const els = { grid: $('recipesGrid'), empty: $('emptyState'), count: $('countLabel'), search: $('search'), tabs: () => document.querySelectorAll('[role="tab"]'), toggleTheme: $('toggleTheme'), toggleContrast: $('toggleContrast'), fontPlus: $('fontPlus'), fontMinus: $('fontMinus'), detailModal: $('detailModal'), detailTitle: $('detailTitle'), detailImg: $('detailImg'), detailMeta: $('detailMeta'), detailIngredients: $('detailIngredients'), detailSteps: $('detailSteps'), btnAddAll: $('btnAddAll'), closeDetail: $('closeDetail')};

function applyTheme() { document.documentElement.classList.toggle('dark', state.dark); }
function applyContrast() { document.documentElement.classList.toggle('hc', state.contrast); }
function setFont(px) { state.font = Math.max(14, Math.min(22, px)); document.documentElement.style.fontSize = state.font + 'px'; }
applyTheme(); applyContrast(); setFont(state.font);
els.toggleTheme.onclick = () => { state.dark = !state.dark; applyTheme(); };
els.toggleContrast.onclick = () => { state.contrast = !state.contrast; applyContrast(); };
els.fontPlus.onclick = () => setFont(state.font + 1);
els.fontMinus.onclick = () => setFont(state.font - 1);

function setActiveTab(btn) { els.tabs().forEach(t => t.setAttribute('aria-selected', t === btn ? 'true' : 'false')); state.cat = btn.dataset.cat; filter(); }
els.tabs().forEach(b => b.addEventListener('click', () => setActiveTab(b)));

const FKEY = 'fav.v1';
let fav = new Set(JSON.parse(localStorage.getItem(FKEY) || '[]'));
function saveFav() { try { localStorage.setItem(FKEY, JSON.stringify([...fav])); } catch { } }
function isFav(r) { return fav.has(r.titulo); }
function toggleFav(r) { isFav(r) ? fav.delete(r.titulo) : fav.add(r.titulo); saveFav(); filter(); }

function photoFallback(title, categoria) { const kcat = (categoria || '').toLowerCase().replace(' ', ','); const kwBase = encodeURIComponent((title || '').toLowerCase().split(' ').slice(0, 2).join(',')); return `https://source.unsplash.com/800x500/?food,dish,${kcat},${kwBase}`; }
function svgPlaceholder(title = "Receta") { const t = (title || "").replace(/</g, "&lt;").replace(/>/g, "&gt;"); return `data:image/svg+xml;charset=utf-8,` + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#e5e7eb"/><stop offset="1" stop-color="#d1d5db"/></linearGradient></defs><rect width="800" height="500" fill="url(#g)"/><text x="50%" y="50%" text-anchor="middle" fill="#6b7280" font-size="28" font-family="system-ui,Segoe UI,Roboto" dy="8">${t}</text></svg>`); }

function setImg(el, r) {
    el.src = svgPlaceholder(r.titulo);
    el.classList.add('skeleton');
    const imageUrl = r.imagen ? r.imagen : photoFallback(r.titulo, r.categoria);
    const finalImage = new Image();
    finalImage.src = imageUrl;
    finalImage.alt = `Foto de ${r.titulo}`;
    finalImage.onload = () => { el.src = finalImage.src; el.classList.remove('skeleton'); };
    finalImage.onerror = () => { el.src = svgPlaceholder(r.titulo); el.classList.remove('skeleton'); };
}

function card(r, i) { const star = isFav(r) ? '⭐' : '☆'; return `<article class="card" role="article" aria-label="${r.titulo}"><img data-i="${i}" alt="Foto de ${r.titulo}" class="lazy skeleton"><div class="body"><h3 style="margin:.25rem 0;font-size:1.05rem">${r.titulo}</h3><p class="meta">${r.categoria} · ${r.tiempo}</p><div class="bar"><button class="btn btn-ghost" data-a="fav" data-i="${i}">${star}</button></div></div></article>`; }

let imageObserver;
function render(list) {
    state.list = list;
    if (imageObserver) imageObserver.disconnect();
    els.empty.hidden = list.length > 0;
    els.grid.innerHTML = list.map((r, i) => card(r, i)).join("");
    els.count.textContent = `Mostrando ${list.length} recetas.`;
    const lazyImages = Array.from(els.grid.querySelectorAll('img.lazy'));
    imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const recipe = list[img.dataset.i];
                if (recipe) { setImg(img, recipe); }
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '800px' });
    lazyImages.forEach(img => imageObserver.observe(img));
}

function filter() {
  const q = els.search.value.toLowerCase().trim();
  const sortValue = document.getElementById('sortOrder').value;
  const difficultyValue = document.getElementById('filterDifficulty').value;
  const timeValue = document.getElementById('filterTime').value;
  let filteredRecipes = RECETAS.filter(r => (state.cat === "Todas" || r.categoria === state.cat) && (!q || [r.titulo, ...r.ingredientes].join(" ").toLowerCase().includes(q)) && (difficultyValue === 'all' || r.dificultad === difficultyValue)).filter(r => { const recipeTime = parseTime(r.tiempo); if (timeValue === 'all') return true; if (timeValue === '30') return recipeTime <= 30; if (timeValue === '60') return recipeTime > 30 && recipeTime <= 60; if (timeValue === '61') return recipeTime > 60; return true; });
  switch (sortValue) {
    case 'az': filteredRecipes.sort((a, b) => a.titulo.localeCompare(b.titulo)); break;
    case 'za': filteredRecipes.sort((a, b) => b.titulo.localeCompare(a.titulo)); break;
    case 'time-asc': filteredRecipes.sort((a, b) => parseTime(a.tiempo) - parseTime(b.tiempo)); break;
    case 'time-desc': filteredRecipes.sort((a, b) => parseTime(b.tiempo) - parseTime(a.tiempo)); break;
  }
  const finalRecipes = state.cat === "Favoritas" ? filteredRecipes.filter(r => fav.has(r.titulo)) : filteredRecipes;
  render(finalRecipes);
}

document.addEventListener('DOMContentLoaded', () => { filter(); });
els.search.oninput = filter;
document.getElementById('sortOrder').onchange = filter;
document.getElementById('filterDifficulty').onchange = filter;
document.getElementById('filterTime').onchange = filter;

let currentRecipe = null;
function openDetail(r) { currentRecipe = r; els.detailTitle.textContent = r.titulo; setImg(els.detailImg, r); els.detailMeta.textContent = `${r.categoria} · ${r.tiempo} · ${r.dificultad}`; els.detailIngredients.innerHTML = r.ingredientes.map(i => `<li>${i}</li>`).join(""); els.detailSteps.innerHTML = r.pasos.map(p => `<li>${p}</li>`).join(""); els.detailModal.style.display = 'flex'; }
function closeDetail() { els.detailModal.style.display = 'none'; }
els.closeDetail.onclick = closeDetail;

els.grid.addEventListener('click', e => {
    const article = e.target.closest('article');
    if (!article) return;
    
    const img = article.querySelector('img[data-i]');
    if(!img) return;

    const index = img.dataset.i;
    const recipe = state.list[index];
    if (!recipe) return;

    const button = e.target.closest('button[data-a]');
    if (button) {
        e.stopPropagation(); 
        const action = button.dataset.a;
        if (action === 'fav') toggleFav(recipe);
    } else {
        openDetail(recipe);
    }
});
