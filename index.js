

// NOTE: The import statement is kept because the HTML uses type="module" and an import map.
// This is the modern way to handle this and should work correctly.
// The rest of the file is converted to pure JavaScript.
import { GoogleGenAI, Type } from "@google/genai";

// Safely access the API key, preventing crashes in browser environments.
const API_KEY = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

/* ========= DATA ========= */
const recipes = [
    /* -----------------  A P E R I T I V O S  (38) ----------------- */
    {categoria:"Aperitivo",titulo:"Brochetas de aceituna y pimiento",raciones:4,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Brochetas+Aceituna",ingredientes:["Aceitunas verdes y negras","Pimiento rojo troceado","Hojas de albahaca","Aceite de oliva","Pimienta negra"],pasos:["Ensarta aceitunas, pimiento y albahaca en palillos.","Aliña con aceite y pimienta.","Sirve frío."]},
    {categoria:"Aperitivo",titulo:"Garbanzos crujientes al horno",raciones:2,tiempo:"45 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Garbanzos+Crujientes",ingredientes:["200 g garbanzos cocidos","1 cda. AOVE","1/2 cdita pimentón ahumado","1/4 cdita comino","Sal"],pasos:["Mezcla garbanzos con aceite y especias.","Hornea 35 min a 180 °C.","Enfría y sirve."]},
    {categoria:"Aperitivo",titulo:"Hummus clásico con crudités",raciones:4,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Hummus+Crudites",ingredientes:["400 g garbanzos cocidos","2 cdas. tahini","1 diente de ajo","Zumo de 1 limón","Aceite de oliva","Palitos de zanahoria y apio"],pasos:["Tritura los garbanzos con tahini, ajo, limón y aceite.","Sirve con los crudités."]},
    {categoria:"Aperitivo",titulo:"Guacamole rápido",raciones:3,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Guacamole+Rapido",ingredientes:["2 aguacates","1/2 cebolla morada","1 tomate pequeño","Zumo de 1 lima","Sal","Nachos integrales"],pasos:["Tritura el aguacate con cebolla, tomate y lima.","Sirve con nachos."]},
    {categoria:"Aperitivo",titulo:"Rollitos de jamón y espárragos",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Rollitos+Jamon+Esparragos",ingredientes:["5 lonchas de jamón serrano","5 espárragos verdes cocidos","Aceite de oliva"],pasos:["Enrolla cada espárrago con jamón.","Rocía aceite y sirve."]},
    {categoria:"Aperitivo",titulo:"Chips de kale al horno",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Chips+Kale+Horno",ingredientes:["Hojas de kale","1 cda. aceite de oliva","Sal marina"],pasos:["Lava y seca hojas.","Aliña y hornea 15 min a 150 °C."]},
    {categoria:"Aperitivo",titulo:"Dip de yogur y pepino",raciones:4,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Dip+Yogur+Pepino",ingredientes:["1 yogur natural","1/2 pepino rallado","1 diente de ajo","Hierbabuena","Sal y pimienta"],pasos:["Mezcla todo y sirve frío."]},
    {categoria:"Aperitivo",titulo:"Tomates cherry rellenos de queso",raciones:3,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tomates+Rellenos+Queso",ingredientes:["Tomates cherry","Queso crema light","Cebollino"],pasos:["Corta tapa a tomates.","Rellena con queso y cebollino."]},
    {categoria:"Aperitivo",titulo:"Tostadas integrales con aguacate",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tostadas+Aguacate",ingredientes:["2 tostadas integrales","1 aguacate","Zumo de limón","Sal y pimienta"],pasos:["Tritura aguacate con limón y sal.","Unta y añade pimienta."]},
    {categoria:"Aperitivo",titulo:"Mini tortillas de espinaca",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Mini+Tortillas+Espinaca",ingredientes:["2 huevos","Espinacas frescas","1 cda. queso rallado light","Sal"],pasos:["Bate huevos, añade espinaca y queso.","Cuaja en sartén pequeña."]},
    {categoria:"Aperitivo",titulo:"Palitos de zanahoria al horno",raciones:3,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Palitos+Zanahoria+Horno",ingredientes:["2 zanahorias","1 cda. aceite de oliva","Pimienta","Pimentón"],pasos:["Corta en tiras, condimenta y hornea 25 min 180°C."]},
    {categoria:"Aperitivo",titulo:"Edamame con sal y limón",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Edamame+Sal+Limon",ingredientes:["200 g edamame","Sal marina","Zumo de limón"],pasos:["Hierve 5 min, escurre y aliña."]},
    {categoria:"Aperitivo",titulo:"Tostas de hummus y tomate seco",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tostas+Hummus+Tomate",ingredientes:["2 tostadas integrales","2 cdas. hummus","Tomate seco"],pasos:["Unta hummus y decora con tomate seco."]},
    {categoria:"Aperitivo",titulo:"Aceitunas marinadas caseras",raciones:4,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Aceitunas+Marinadas",ingredientes:["Aceitunas verdes","Aceite de oliva","Ajo","Orégano"],pasos:["Mezcla todo y reposa 1 h."]},
    {categoria:"Aperitivo",titulo:"Gazpacho ligero de remolacha",raciones:4,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Gazpacho+Remolacha",ingredientes:["3 tomates","1 remolacha cocida","1/2 pepino","Ajo","Aceite","Vinagre","Sal"],pasos:["Tritura todo y sirve frío."]},
    {categoria:"Aperitivo",titulo:"Canapés de salmón y queso crema",raciones:4,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Canapes+Salmon",ingredientes:["Pan tostado","Salmón ahumado","Queso crema light","Eneldo"],pasos:["Unta queso, coloca salmón y eneldo."]},
    {categoria:"Aperitivo",titulo:"Crema fría de aguacate",raciones:3,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Aguacate",ingredientes:["2 aguacates","Zumo de 1 lima","Caldo verduras frío","Cilantro","Sal"],pasos:["Tritura aguacate con caldo y lima."]},
    {categoria:"Aperitivo",titulo:"Bastones de pepino con hummus",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pepino+Hummus",ingredientes:["1 pepino","Hummus"],pasos:["Corta pepino y sirve con hummus."]},
    {categoria:"Aperitivo",titulo:"Chips de batata al horno",raciones:3,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Chips+Batata+Horno",ingredientes:["1 batata","1 cda. aceite","Pimentón dulce","Sal"],pasos:["Corta fino, aliña y hornea a 180°C."]},
    {categoria:"Aperitivo",titulo:"Brochetas Caprese mini",raciones:4,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Brochetas+Caprese",ingredientes:["Tomates cherry","Mozzarella mini","Albahaca","AOVE","Balsámico"],pasos:["Ensarta tomate, queso y albahaca.","Aliña."]},
    {categoria:"Aperitivo",titulo:"Paté de berenjena (Baba Ghanoush)",raciones:4,tiempo:"45 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pate+Berenjena",ingredientes:["1 berenjena","2 cdas. tahini","Zumo 1/2 limón","1 ajo","Aceite","Comino","Sal","Perejil"],pasos:["Asa berenjena, retira pulpa y tritura todo."]},
    {categoria:"Aperitivo",titulo:"Rollitos de calabacín y queso",raciones:3,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Rollitos+Calabacin",ingredientes:["1 calabacín","100 g queso fresco batido","Menta","Sal y pimienta"],pasos:["Laminas de calabacín a la plancha.","Rellena y enrolla."]},
    {categoria:"Aperitivo",titulo:"Pincho de tortilla de patatas",raciones:2,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pincho+Tortilla",ingredientes:["2 huevos","1 patata","1/4 cebolla","Aceite","Sal"],pasos:["Haz tortilla pequeña y corta en pinchos."]},
    {categoria:"Aperitivo",titulo:"Vasitos de gazpacho con langostinos",raciones:4,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Vasitos+Gazpacho",ingredientes:["2 tomates","1/4 pepino","1/4 pimiento","Ajo","Aceite","Vinagre","Sal","8 langostinos"],pasos:["Haz gazpacho, sirve en vasitos y decora."]},
    {categoria:"Aperitivo",titulo:"Brochetas de pollo satay mini",raciones:3,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Brochetas+Pollo+Satay",ingredientes:["150 g pollo","1 cda. salsa cacahuete","1/2 cdita curry"],pasos:["Marina pollo, ensarta y plancha."]},
    {categoria:"Aperitivo",titulo:"Bruschetta de tomate y albahaca",raciones:4,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Bruschetta",ingredientes:["Pan tostado","Tomate","Ajo","Albahaca","Aceite","Sal"],pasos:["Frota ajo en pan, añade tomate aliñado y albahaca."]},
    {categoria:"Aperitivo",titulo:"Ensaladilla rusa ligera",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensaladilla",ingredientes:["Patata cocida","Zanahoria","Guisantes","Atún","Yogur+mostaza"],pasos:["Cuece verduras, mezcla con atún y salsa de yogur."]},
    {categoria:"Aperitivo",titulo:"Pan con tomate (pa amb tomàquet)",raciones:2,tiempo:"5 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pan+Tomate",ingredientes:["Pan","Tomate maduro","Aceite","Sal"],pasos:["Frota tomate en pan, aliña con aceite y sal."]},
    {categoria:"Aperitivo",titulo:"Aceitunas aliñadas con cítricos",raciones:4,tiempo:"10 min + reposo",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Aceitunas+Citrico",ingredientes:["Aceitunas mixtas","Ralladura limón","Naranja","Ajo","AOVE"],pasos:["Mezcla todo y deja reposar."]},
    {categoria:"Aperitivo",titulo:"Sardinas marinadas rápidas",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sardinas",ingredientes:["Sardinas limpias","Vinagre","AOVE","Ajo","Perejil"],pasos:["Marina sardinas en vinagre/aceite y sirve."]},
    {categoria:"Aperitivo",titulo:"Gazpachuelo malagueño ligero",raciones:4,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Gazpachuelo",ingredientes:["Caldo pescado","Patata","Mayonesa ligera","Limón"],pasos:["Cuece patata en caldo, monta mayonesa con caldo y limón."]},
    {categoria:"Aperitivo",titulo:"Pimientos del padrón a la plancha",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pimientos+Padron",ingredientes:["Pimientos padrón","AOVE","Sal gruesa"],pasos:["Plancha pimientos y espolvorea sal."]},
    {categoria:"Aperitivo",titulo:"Mejillones en escabeche casero",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Mejillones",ingredientes:["Mejillones","Vinagre","AOVE","Laurel","Pimentón"],pasos:["Cuece mejillones y cubre con escabeche."]},
    {categoria:"Aperitivo",titulo:"Patatas aliñadas andaluzas",raciones:4,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Patatas+Aliñadas",ingredientes:["Patatas cocidas","Cebolla","Perejil","AOVE","Vinagre","Sal"],pasos:["Corta patatas, aliña y enfría."]},
    {categoria:"Aperitivo",titulo:"Tartar de tomate y aguacate",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tartar+Tomate",ingredientes:["Tomate","Aguacate","Cebolla","Cilantro","Limón"],pasos:["Pica y mezcla en capas, aliña."]},
    {categoria:"Aperitivo",titulo:"Crema fría de pepino y yogur",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Pepino",ingredientes:["Pepino","Yogur","Menta","Ajo","Sal"],pasos:["Tritura todo y sirve frío."]},
    {categoria:"Aperitivo",titulo:"Tostas de sobrasada y miel",raciones:2,tiempo:"8 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sobrasada+Miel",ingredientes:["Tostas","Sobrasada","Miel"],pasos:["Unta sobrasada, rocía miel y gratina ligeramente."]},
    {categoria:"Aperitivo",titulo:"Queso manchego con membrillo",raciones:4,tiempo:"5 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Queso+Membrillo",ingredientes:["Queso manchego","Dulce de membrillo"],pasos:["Corta y monta pequeños bocados."]},
    {categoria:"Aperitivo",titulo:"Pinchos de anchoa y aceituna (Gilda)",raciones:4,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Gilda",ingredientes:["Anchoas","Aceitunas","Guindilla"],pasos:["Ensarta aceituna, guindilla y anchoa."]},
    /* -----------------  P R I M E R O S  (38) ----------------- */
    {categoria:"Primero",titulo:"Ensalada de quinoa con verduras",raciones:2,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Quinoa",ingredientes:["1 taza quinoa cocida","Pimiento rojo y verde","Tomates cherry","Cebolla morada","Aceite","Limón"],pasos:["Mezcla quinoa con verduras.","Aliña."]},
    {categoria:"Primero",titulo:"Sopa de lentejas rojas",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sopa+Lentejas+Rojas",ingredientes:["1 taza lentejas rojas","1 zanahoria","1 cebolla","1 ajo","1 cdita comino","Sal/pimienta"],pasos:["Sofríe base, añade lentejas y agua.","Cocina 20 min y tritura si quieres."]},
    {categoria:"Primero",titulo:"Crema de calabaza",raciones:4,tiempo:"40 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Calabaza",ingredientes:["500 g calabaza","1 puerro","1 patata","Aceite","Sal","Nuez moscada"],pasos:["Cuece verduras y tritura con aceite."]},
    {categoria:"Primero",titulo:"Ensalada de garbanzos mediterránea",raciones:3,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Garbanzos",ingredientes:["400 g garbanzos","Pepino","Tomate","Cebolla morada","Aceitunas","Limón","Aceite"],pasos:["Mezcla todo y aliña."]},
    {categoria:"Primero",titulo:"Gazpacho andaluz tradicional",raciones:4,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Gazpacho+Andaluz",ingredientes:["1 kg tomates","1 pepino","1/2 pimiento verde","1 ajo","Aceite","Vinagre jerez","Sal"],pasos:["Tritura y sirve frío."]},
    {categoria:"Primero",titulo:"Tabulé de bulgur con hierbas",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tabule+Bulgur",ingredientes:["1 taza bulgur cocido","Tomate","Pepino","Cebolla","Limón","Menta","Perejil","Aceite","Sal"],pasos:["Pica y mezcla con bulgur y aliño."]},
    {categoria:"Primero",titulo:"Crema de zanahoria y jengibre",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Zanahoria",ingredientes:["4 zanahorias","1 patata","Jengibre fresco","Aceite","Sal/pimienta"],pasos:["Cuece y tritura."]},
    {categoria:"Primero",titulo:"Ensalada de lentejas con vinagreta",raciones:3,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Lentejas",ingredientes:["1 taza lentejas cocidas","Pimiento rojo","Zanahoria","Cebolla","Mostaza","Aceite","Vinagre"],pasos:["Haz vinagreta, mezcla con lentejas y verduras."]},
    {categoria:"Primero",titulo:"Sopa miso con tofu y algas",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sopa+Miso",ingredientes:["750 ml agua","1 cda miso","Tofu","Alga wakame","Cebolleta"],pasos:["Disuelve miso sin hervir, añade tofu y alga."]},
    {categoria:"Primero",titulo:"Crema de espinacas cremosa",raciones:4,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Espinacas",ingredientes:["200 g espinacas","1 patata","1 puerro pequeño","500 ml caldo","Aceite","Sal"],pasos:["Sofríe puerro, añade espinaca y patata, cuece y tritura."]},
    {categoria:"Primero",titulo:"Ensalada de arroz integral y atún",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Arroz",ingredientes:["1 taza arroz integral","1 lata atún","Maíz","Tomates cherry","Pepino","Aceite","Vinagre"],pasos:["Mezcla todo y aliña."]},
    {categoria:"Primero",titulo:"Sopa de pollo y fideos",raciones:4,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sopa+Pollo",ingredientes:["1 l caldo pollo","100 g fideos","Pollo cocido","Zanahoria","Apio"],pasos:["Hierve verduras, añade pollo y fideos."]},
    {categoria:"Primero",titulo:"Puré de patata y calabacín",raciones:3,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pure+Patata",ingredientes:["2 patatas","1 calabacín","50 ml leche","Sal","Nuez moscada"],pasos:["Cuece, tritura y ajusta."]},
    {categoria:"Primero",titulo:"Ensalada César ligera",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Cesar+Ligera",ingredientes:["Lechuga romana","Pollo plancha","Picatostes integrales","Parmesano light","Salsa César light"],pasos:["Mezcla todo con la salsa."]},
    {categoria:"Primero",titulo:"Crema de champiñones",raciones:4,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Champis",ingredientes:["300 g champiñones","1 cebolla","500 ml caldo","1 cda maicena","Aceite","Perejil"],pasos:["Sofríe, añade caldo y maicena, tritura."]},
    {categoria:"Primero",titulo:"Salmorejo cordobés",raciones:4,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Salmorejo",ingredientes:["1 kg tomates","200 g pan","1 ajo","100 ml AOVE","Sal","Huevo/jamón opcional"],pasos:["Remoja pan, tritura todo y emulsiona con aceite."]},
    {categoria:"Primero",titulo:"Ensalada de pasta integral con verduras",raciones:3,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Pasta",ingredientes:["200 g pasta integral","Pimiento rojo","Maíz","Aceitunas","Tomates cherry","Aceite","Orégano"],pasos:["Cuece pasta, enfría y mezcla con verduras."]},
    {categoria:"Primero",titulo:"Sopa de verduras casera",raciones:4,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sopa+Verduras",ingredientes:["Zanahoria","Puerro","Patata","Judías verdes","Caldo","Sal/pimienta"],pasos:["Corta y cuece todo."]},
    {categoria:"Primero",titulo:"Crema de guisantes con menta",raciones:3,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Guisantes",ingredientes:["300 g guisantes","1 cebolleta","Menta","Caldo","Aceite"],pasos:["Sofríe cebolleta, añade guisantes y caldo, tritura con menta."]},
    {categoria:"Primero",titulo:"Ensalada de remolacha y queso de cabra",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Remolacha",ingredientes:["2 remolachas","100 g queso cabra","Nueces","Rúcula","Vinagreta miel/mostaza"],pasos:["Monta la ensalada y aliña."]},
    {categoria:"Primero",titulo:"Crema de espárragos verdes",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Esparragos",ingredientes:["500 g espárragos","1 patata","1 cebolla","Caldo","Nata ligera opc.","Sal/pimienta"],pasos:["Sofríe, cuece, tritura y cuela."]},
    {categoria:"Primero",titulo:"Sopa de ajo castellana",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sopa+Ajo",ingredientes:["4 ajos","4 rebanadas pan","1 cdita pimentón","Caldo","Aceite","Huevo opc."],pasos:["Sofríe ajo y pan, añade pimentón y caldo."]},
    {categoria:"Primero",titulo:"Ensalada de cuscús con pasas y piñones",raciones:3,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Cuscus",ingredientes:["1 taza cuscús","Pasas","Piñones","Pepino","Tomate","Aceite","Limón","Menta"],pasos:["Hidrata cuscús y mezcla con todo."]},
    {categoria:"Primero",titulo:"Crema de calabacín y manzana",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Calabacin",ingredientes:["2 calabacines","1 manzana","1/2 cebolla","Caldo","Aceite","Sal"],pasos:["Sofríe, cuece y tritura."]},
    {categoria:"Primero",titulo:"Salpicón de marisco ligero",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Salpicon",ingredientes:["Gambas","Pulpo","Cebolla morada","Pimiento rojo","Perejil","Aceite","Vinagre","Sal"],pasos:["Pica y mezcla con aliño."]},
    {categoria:"Primero",titulo:"Vichyssoise clásica",raciones:4,tiempo:"40 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Vichyssoise",ingredientes:["Puerros","Patata","Caldo","Nata ligera","Sal"],pasos:["Cuece puerros y patata, tritura y añade nata."]},
    {categoria:"Primero",titulo:"Crema de puerros y manzana",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Puerros+Manzana",ingredientes:["Puerros","Manzana","Caldo","Aceite","Sal"],pasos:["Sofríe, cuece y tritura."]},
    {categoria:"Primero",titulo:"Ensalada templada de setas",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Setas",ingredientes:["Setas variadas","Lechugas","Ajo","Aceite","Vinagre"],pasos:["Saltea setas y mezcla con hojas y aliño."]},
    {categoria:"Primero",titulo:"Sopa minestrone rápida",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Minestrone",ingredientes:["Verduras mixtas","Legumbres","Pasta corta","Caldo","Tomate"],pasos:["Cuece todo por etapas hasta que esté tierno."]},
    {categoria:"Primero",titulo:"Gazpacho de sandía",raciones:4,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Gazpacho+Sandia",ingredientes:["Sandía","Tomate","Pepino","Aceite","Vinagre","Sal"],pasos:["Tritura y sirve frío."]},
    {categoria:"Primero",titulo:"Ensalada de judías verdes y huevo",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Judias+Huevo",ingredientes:["Judías verdes","Huevo duro","Tomate","Aceite","Vinagre","Sal"],pasos:["Cuece judías, mezcla con huevo y aliño."]},
    {categoria:"Primero",titulo:"Crema de coliflor y curry",raciones:4,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Coliflor+Curry",ingredientes:["Coliflor","Curry","Caldo","Leche evaporada light"],pasos:["Cuece coliflor, tritura con curry y leche."]},
    {categoria:"Primero",titulo:"Sopa fría de melón y menta",raciones:4,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sopa+Melon",ingredientes:["Melón","Menta","Yogur opc.","Sal"],pasos:["Tritura y enfría."]},
    {categoria:"Primero",titulo:"Ensalada de tomate, mozzarela y pesto",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tomate+Pesto",ingredientes:["Tomate","Mozzarella","Pesto","Albahaca"],pasos:["Monta y aliña con pesto."]},
    {categoria:"Primero",titulo:"Crema de boniato",raciones:4,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Boniato",ingredientes:["Boniato","Cebolla","Caldo","Sal","Pimienta"],pasos:["Cuece y tritura."]},
    {categoria:"Primero",titulo:"Ensalada griega",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ensalada+Griega",ingredientes:["Tomate","Pepino","Cebolla","Aceitunas","Queso feta","Aceite","Orégano"],pasos:["Corta y aliña."]},
    {categoria:"Primero",titulo:"Sopa de tomate asado",raciones:4,tiempo:"45 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sopa+Tomate",ingredientes:["Tomates","Cebolla","Ajo","Caldo","Aceite"],pasos:["Asa tomates y tritura con caldo."]},
    {categoria:"Primero",titulo:"Crema de apio y pera",raciones:4,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crema+Apio",ingredientes:["Apio","Pera","Patata","Caldo"],pasos:["Cuece y tritura."]},
    /* -----------------  S E G U N D O S  (37) ----------------- */
    {categoria:"Segundo",titulo:"Pollo al horno con limón y hierbas",raciones:2,tiempo:"45 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pollo+Limon",ingredientes:["2 pechugas pollo","1 limón","Tomillo","Romero","Aceite","Sal/pimienta"],pasos:["Marina y hornea 25 min a 200°C."]},
    {categoria:"Segundo",titulo:"Salmón a la plancha con espárragos",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Salmon+Esparragos",ingredientes:["2 lomos salmón","Espárragos verdes","Aceite","Sal","Pimienta"],pasos:["Plancha salmón y espárragos."]},
    {categoria:"Segundo",titulo:"Wok de ternera y brócoli",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ternera+Brocoli",ingredientes:["200 g ternera","1 brócoli","Soja baja sodio","Jengibre","Aceite sésamo"],pasos:["Saltea ternera, añade brócoli y aliña."]},
    {categoria:"Segundo",titulo:"Pavo a la plancha con puré de manzana",raciones:2,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pavo+Manzana",ingredientes:["2 filetes pavo","2 manzanas","Canela","Sal"],pasos:["Plancha pavo y sirve con puré de manzana."]},
    {categoria:"Segundo",titulo:"Merluza en salsa verde",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Merluza+Verde",ingredientes:["2 lomos merluza","Ajo","Perejil","Vino blanco","Caldo pescado","Guisantes"],pasos:["Salsa verde y merluza 10 min."]},
    {categoria:"Segundo",titulo:"Berenjenas rellenas de carne picada",raciones:2,tiempo:"50 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Berenjenas+Carne",ingredientes:["2 berenjenas","200 g carne pavo","Cebolla","Tomate triturado","Queso light"],pasos:["Asa berenjena, rellena y gratina."]},
    {categoria:"Segundo",titulo:"Tofu salteado con verduras",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tofu+Verduras",ingredientes:["200 g tofu","Pimiento","Calabacín","Cebolla","Soja"],pasos:["Saltea todo."]},
    {categoria:"Segundo",titulo:"Pechuga de pollo a la naranja",raciones:2,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pollo+Naranja",ingredientes:["2 pechugas","Zumo de 2 naranjas","1 cdita maicena","Sal/pimienta"],pasos:["Dora pollo, añade zumo con maicena."]},
    {categoria:"Segundo",titulo:"Atún a la plancha con ensalada",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Atun+Plancha",ingredientes:["2 filetes atún","Tomates cherry","Rúcula","Vinagre balsámico"],pasos:["Plancha atún y acompaña con ensalada."]},
    {categoria:"Segundo",titulo:"Solomillo de cerdo con champiñones",raciones:2,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Solomillo+Cerdo",ingredientes:["1 solomillo cerdo","Champiñones","Cebolla","Nata ligera","Sal/pimienta"],pasos:["Sella carne, haz salsa y sirve."]},
    {categoria:"Segundo",titulo:"Lasaña de verduras ligera",raciones:4,tiempo:"60 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Lasagna+Verduras",ingredientes:["Láminas integrales","Calabacín","Berenjena","Pimiento","Tomate triturado","Queso light"],pasos:["Monta y hornea."]},
    {categoria:"Segundo",titulo:"Bacalao con sofrito de tomate",raciones:2,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Bacalao+Tomate",ingredientes:["2 lomos bacalao desal.","Cebolla","Tomate triturado","Aceite","Sal"],pasos:["Sofríe tomate, añade bacalao."]},
    {categoria:"Segundo",titulo:"Curry de garbanzos y espinacas",raciones:3,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Curry+Garbanzos",ingredientes:["400 g garbanzos","200 g espinacas","Cebolla","Leche coco light","Curry"],pasos:["Sofríe, añade garbanzos, coco y espinacas."]},
    {categoria:"Segundo",titulo:"Sepia a la plancha con alioli suave",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sepia+Plancha",ingredientes:["1 sepia","Ajo","Perejil","Aceite","Limón","Alioli ligero"],pasos:["Plancha sepia y sirve con majado."]},
    {categoria:"Segundo",titulo:"Hamburguesas de pollo caseras",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Burger+Pollo",ingredientes:["300 g pollo picado","1/2 cebolla","Huevo","Pan rallado","Especias"],pasos:["Mezcla, forma y plancha."]},
    {categoria:"Segundo",titulo:"Dorada al papillote con verduras",raciones:1,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Dorada+Papillote",ingredientes:["1 dorada","Verduras variadas","Aceite","Hierbas","Sal/pimienta"],pasos:["Hornea en papillote 20-25 min."]},
    {categoria:"Segundo",titulo:"Muslos de pollo con arroz integral",raciones:2,tiempo:"45 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Muslos+Arroz",ingredientes:["2 muslos pollo","1 taza arroz integral","Caldo","Cebolla","Pimiento","Aceite"],pasos:["Dora pollo, sofríe arroz y verduras, cuece."]},
    {categoria:"Segundo",titulo:"Calabacines rellenos de arroz y verduras",raciones:2,tiempo:"40 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Calabacin+Relleno",ingredientes:["2 calabacines","Arroz cocido","Champiñones","Tomate triturado","Queso light"],pasos:["Vacía, rellena y gratina."]},
    {categoria:"Segundo",titulo:"Pinchos de gambas y piña",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Gambas+Pina",ingredientes:["Gambas","Piña","Aceite","Pimentón","Limón"],pasos:["Ensarta y plancha."]},
    {categoria:"Segundo",titulo:"Huevos revueltos con espárragos y setas",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Huevos+Setas",ingredientes:["3 huevos","Espárragos trigueros","Setas","Aceite","Sal/pimienta"],pasos:["Saltea verduras y añade huevos."]},
    {categoria:"Segundo",titulo:"Albóndigas de pollo en salsa de tomate",raciones:3,tiempo:"40 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Albondigas+Pollo",ingredientes:["300 g pollo picado","1/2 cebolla","Pan rallado","1 huevo","Tomate triturado","Orégano"],pasos:["Forma albóndigas, dora y cuece en salsa."]},
    {categoria:"Segundo",titulo:"Pescado al horno con patatas panaderas",raciones:2,tiempo:"45 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pescado+Patatas",ingredientes:["2 filetes pescado blanco","2 patatas","1 cebolla","Aceite","Sal","Perejil"],pasos:["Hornea patatas+cebolla, añade pescado."]},
    {categoria:"Segundo",titulo:"Champiñones rellenos de verduras",raciones:2,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Champis+Rellenos",ingredientes:["8 champiñones","1/2 pimiento","1/2 cebolla","Pulpa champiñón","Queso light"],pasos:["Rellena y gratina."]},
    {categoria:"Segundo",titulo:"Brochetas de verduras a la parrilla",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Brochetas+Verduras",ingredientes:["Calabacín","Berenjena","Pimiento","Cebolla","Tomates cherry","Aceite","Hierbas"],pasos:["Ensarta, aliña y asa."]},
    {categoria:"Segundo",titulo:"Pollo estilo oriental con arroz basmati",raciones:2,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pollo+Oriental",ingredientes:["200 g pollo","Pimiento rojo","Cebolla","Soja","Jengibre","Arroz basmati"],pasos:["Saltea pollo y verduras con soja y jengibre."]},
    {categoria:"Segundo",titulo:"Filete de ternera a la plancha con chimichurri",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Ternera+Chimi",ingredientes:["Filetes ternera","Perejil","Ajo","Vinagre","Aceite"],pasos:["Plancha carne y sirve con chimichurri."]},
    {categoria:"Segundo",titulo:"Bacalao al pil-pil ligero",raciones:2,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pilpil",ingredientes:["Bacalao desalado","Ajo","Aceite","Guindilla"],pasos:["Confita ajo, liga con el bacalao."]},
    {categoria:"Segundo",titulo:"Pechugas rellenas de espinacas y queso",raciones:2,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pechuga+Rellena",ingredientes:["Pechugas","Espinacas","Queso light","Sal/pimienta"],pasos:["Rellena, cierra y hornea/plancha."]},
    {categoria:"Segundo",titulo:"Tortilla francesa con verduras",raciones:1,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tortilla+Verduras",ingredientes:["2 huevos","Verduras picadas","Sal"],pasos:["Saltea verduras, añade huevo y cuaja."]},
    {categoria:"Segundo",titulo:"Pisto manchego con huevo",raciones:2,tiempo:"40 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pisto",ingredientes:["Tomate","Calabacín","Berenjena","Pimiento","Cebolla","Huevos"],pasos:["Cuece verduras lentamente, sirve con huevo."]},
    {categoria:"Segundo",titulo:"Conejo al ajillo",raciones:3,tiempo:"45 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Conejo+Ajillo",ingredientes:["Conejo troceado","Ajo","Vino blanco","Aceite","Perejil"],pasos:["Dora conejo con ajo, desglasa con vino."]},
    {categoria:"Segundo",titulo:"Calamares a la plancha con limón",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Calamares",ingredientes:["Calamares","Aceite","Limón","Perejil"],pasos:["Plancha calamares y aliña."]},
    {categoria:"Segundo",titulo:"Albóndigas de lentejas",raciones:3,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Alb%C3%B3ndigas+Lentejas",ingredientes:["Lentejas cocidas","Avena","Cebolla","Especias","Tomate triturado"],pasos:["Forma albóndigas veganas y cocina en salsa."]},
    {categoria:"Segundo",titulo:"Tacos de pescado",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tacos+Pescado",ingredientes:["Pescado blanco","Tortillas maíz","Col rallada","Yogur-lima"],pasos:["Plancha pescado y sirve en tacos."]},
    {categoria:"Segundo",titulo:"Costillas de cerdo al horno light",raciones:3,tiempo:"60 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Costillas",ingredientes:["Costillas","Especias","Mostaza-miel"],pasos:["Marina y hornea lentamente."]},
    {categoria:"Segundo",titulo:"Seitán salteado con verduras",raciones:2,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Seitan",ingredientes:["Seitán","Verduras mixtas","Soja","Sésamo"],pasos:["Saltea todo rápido."]},
    {categoria:"Segundo",titulo:"Huevos al plato con tomate",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Huevos+Plato",ingredientes:["Huevos","Tomate triturado","Pimiento","Guisantes"],pasos:["Cuece salsa y hornea huevos dentro."]},
    /* -----------------  P O S T R E S  (37) ----------------- */
    {categoria:"Postre",titulo:"Brochetas de fruta fresca",raciones:4,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Brochetas+Fruta",ingredientes:["Fresas","Kiwi","Melón","Uvas"],pasos:["Corta y ensarta."]},
    {categoria:"Postre",titulo:"Yogur natural con miel y nueces",raciones:1,tiempo:"5 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Yogur+Miel",ingredientes:["1 yogur","1 cdita miel","Nueces"],pasos:["Mezcla en un bol."]},
    {categoria:"Postre",titulo:"Manzana asada con canela",raciones:1,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Manzana+Canela",ingredientes:["1 manzana","Canela"],pasos:["Quita corazón, espolvorea canela y hornea 30 min."]},
    {categoria:"Postre",titulo:"Macedonia de frutas",raciones:3,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Macedonia",ingredientes:["Naranja","Plátano","Manzana","Kiwi","Zumo naranja"],pasos:["Corta y mezcla con zumo."]},
    {categoria:"Postre",titulo:"Plátano a la plancha con chocolate",raciones:1,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Platano+Choco",ingredientes:["1 plátano","1 onza chocolate >85%"],pasos:["Plancha plátano y cubre con chocolate."]},
    {categoria:"Postre",titulo:"Mousse de aguacate y cacao",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Mousse+Aguacate",ingredientes:["1 aguacate","2 cdas cacao puro","1 cda sirope agave"],pasos:["Tritura y refrigera."]},
    {categoria:"Postre",titulo:"Carpaccio de piña con menta",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Carpaccio+Pi%C3%B1a",ingredientes:["Piña","Menta"],pasos:["Lamina y decora."]},
    {categoria:"Postre",titulo:"Helado de plátano congelado",raciones:2,tiempo:"5 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Helado+Platano",ingredientes:["2 plátanos congelados"],pasos:["Tritura hasta textura helado."]},
    {categoria:"Postre",titulo:"Peras al vino tinto sin azúcar",raciones:2,tiempo:"40 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Peras+Vino",ingredientes:["2 peras","1 vaso vino tinto","Canela","Edulcorante opc."],pasos:["Cuece peras en vino y reduce."]},
    {categoria:"Postre",titulo:"Trufas de aguacate y cacao",raciones:3,tiempo:"20 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Trufas+Aguacate",ingredientes:["1/2 aguacate","2 cdas cacao","1 cda miel","Coco rallado"],pasos:["Mezcla, forma bolitas y reboza."]},
    {categoria:"Postre",titulo:"Compota de manzana casera",raciones:4,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Compota+Manzana",ingredientes:["3 manzanas","Canela","Agua"],pasos:["Cuece hasta blandas y tritura."]},
    {categoria:"Postre",titulo:"Fresas con yogur y chía",raciones:1,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Fresas+Yogur",ingredientes:["Fresas","Yogur","Chía"],pasos:["Mezcla y sirve."]},
    {categoria:"Postre",titulo:"Naranja con canela",raciones:1,tiempo:"5 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Naranja+Canela",ingredientes:["1 naranja","Canela"],pasos:["Corta y espolvorea canela."]},
    {categoria:"Postre",titulo:"Bombones de dátiles y almendras",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Datiles+Almendras",ingredientes:["4 dátiles","8 almendras","Cacao polvo"],pasos:["Rellena dátiles y reboza en cacao."]},
    {categoria:"Postre",titulo:"Pudding de chía con frutos rojos",raciones:2,tiempo:"10 min (+2h)",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pudding+Chia",ingredientes:["2 cdas chía","1/2 taza leche vegetal","1/2 taza frutos rojos"],pasos:["Hidrata chía, sirve con frutos rojos."]},
    {categoria:"Postre",titulo:"Melocotón a la plancha con helado",raciones:1,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Melocoton+Helado",ingredientes:["1 melocotón","Canela","Helado light opc."],pasos:["Plancha melocotón y acompaña."]},
    {categoria:"Postre",titulo:"Sorbete de fresa natural",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Sorbete+Fresa",ingredientes:["250 g fresas congeladas","Zumo 1/2 limón","1 cda miel"],pasos:["Tritura hasta sorbete."]},
    {categoria:"Postre",titulo:"Bol de açaí con granola",raciones:1,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Acai+Granola",ingredientes:["Pulpa açaí","Plátano","Leche vegetal","Granola","Fruta"],pasos:["Tritura base y decora."]},
    {categoria:"Postre",titulo:"Galletas de avena y plátano",raciones:3,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Galletas+Avena",ingredientes:["1 plátano","1/2 taza avena","Chips chocolate opc."],pasos:["Mezcla, forma y hornea 15 min 180°C."]},
    {categoria:"Postre",titulo:"Yogur con compota y frutos secos",raciones:1,tiempo:"5 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Yogur+Compota",ingredientes:["Yogur","Compota manzana","Frutos secos"],pasos:["Monta en capas."]},
    {categoria:"Postre",titulo:"Flan de huevo light",raciones:4,tiempo:"50 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Flan+Light",ingredientes:["3 huevos","500 ml leche desnatada","Edulcorante","Vainilla"],pasos:["Baño maría hasta cuajar."]},
    {categoria:"Postre",titulo:"Gelatina de frutas variadas",raciones:4,tiempo:"20 min + frío",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Gelatina+Frutas",ingredientes:["Gelatina sin azúcar","Frutas picadas","Agua"],pasos:["Prepara gelatina y añade frutas."]},
    {categoria:"Postre",titulo:"Bizcocho de limón sin azúcar",raciones:6,tiempo:"45 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Bizcocho+Limon",ingredientes:["3 huevos","150 g harina integral","Zumo/ralladura 1 limón","Edulcorante","Levadura","50 ml aceite suave"],pasos:["Mezcla y hornea 30 min 180°C."]},
    {categoria:"Postre",titulo:"Vasitos de yogur con granola y frutas",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Vasitos+Yogur",ingredientes:["Yogur","Granola","Fruta"],pasos:["Alterna capas."]},
    {categoria:"Postre",titulo:"Tarta de queso individual sin horno",raciones:1,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tarta+Queso",ingredientes:["100 g queso crema light","2 cdas yogur griego","1 cda miel","Galleta integral","Frutos rojos"],pasos:["Base de galleta, mezcla queso y decora."]},
    {categoria:"Postre",titulo:"Mousse de yogur y frutos rojos",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Mousse+Yogur",ingredientes:["Yogur griego","Clara montada","Frutos rojos","Edulcorante"],pasos:["Mezcla suave y enfría."]},
    {categoria:"Postre",titulo:"Crepes integrales con fruta",raciones:2,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Crepes",ingredientes:["Harina integral","Leche","Huevo","Fruta"],pasos:["Haz crepes y rellena con fruta."]},
    {categoria:"Postre",titulo:"Natillas ligeras de vainilla",raciones:4,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Natillas",ingredientes:["Leche desnatada","Yemas","Maicena","Vainilla","Edulcorante"],pasos:["Cuece sin hervir hasta espesar."]},
    {categoria:"Postre",titulo:"Peras al microondas con canela",raciones:2,tiempo:"8 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Peras+Micro",ingredientes:["Peras","Canela"],pasos:["Microondas hasta tiernas."]},
    {categoria:"Postre",titulo:"Arroz con leche light",raciones:4,tiempo:"40 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Arroz+Leche",ingredientes:["Arroz","Leche desnatada","Canela","Edulcorante","Limón"],pasos:["Cuece lento removiendo."]},
    {categoria:"Postre",titulo:"Tarta de manzana rápida",raciones:4,tiempo:"30 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Tarta+Manzana",ingredientes:["Manzana","Hojaldre ligero","Canela","Edulcorante"],pasos:["Coloca manzana en masa y hornea."]},
    {categoria:"Postre",titulo:"Brownie de cacao y calabacín",raciones:6,tiempo:"35 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Brownie",ingredientes:["Calabacín rallado","Cacao puro","Huevo","Avena"],pasos:["Mezcla y hornea hasta cuajar."]},
    {categoria:"Postre",titulo:"Compota de pera y jengibre",raciones:4,tiempo:"25 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Compota+Pera",ingredientes:["Peras","Jengibre","Agua"],pasos:["Cuece y tritura."]},
    {categoria:"Postre",titulo:"Yogur helado casero",raciones:4,tiempo:"5 min + congelar",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Yogur+Helado",ingredientes:["Yogur griego","Miel","Fruta"],pasos:["Congela y bate para cremosidad."]},
    {categoria:"Postre",titulo:"Macedonia con hierbabuena",raciones:3,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Macedonia+Menta",ingredientes:["Frutas variadas","Hierbabuena","Zumo naranja"],pasos:["Mezcla todo y enfría."]},
    {categoria:"Postre",titulo:"Panna cotta ligera",raciones:4,tiempo:"20 min + frío",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Pannacotta",ingredientes:["Leche","Gelatina","Vainilla","Edulcorante"],pasos:["Hidrata gelatina, mezcla caliente y cuaja."]},
    {categoria:"Postre",titulo:"Trifle de frutas y yogur",raciones:2,tiempo:"10 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Trifle",ingredientes:["Bizcocho light","Yogur","Fruta"],pasos:["Alterna capas en vaso."]},
    {categoria:"Postre",titulo:"Mousse de mango",raciones:2,tiempo:"15 min",imagen:"https://placehold.co/800x600/d1c4b5/4a2e0a?text=Mousse+Mango",ingredientes:["Mango","Yogur","Gelatina opc."],pasos:["Tritura mango con yogur."]},
];

const TOTAL_RECIPES = recipes.length;

/* ========= STATE ========= */
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
let shopping = JSON.parse(localStorage.getItem("shopping") || "[]");
let imageCache = JSON.parse(localStorage.getItem("imageCache") || "{}");
let currentFilter = "all"; // all or favorites
let currentCategory = "all";
let currentRecipe = null;
let currentServings = 0;
let speechEnabled = false;
let cookingSteps = [];
let cookingIndex = 0;
let activeTrap = null;
let lastFocusedElement = null;
let imageObserver;


/* ========= DOM ========= */
const d = document;
const grid = d.getElementById("recipeGrid");
const searchInput = d.getElementById("searchInput");
const filterAllBtn = d.getElementById("filterAll");
const filterFavBtn = d.getElementById("filterFav");
const catFilters = d.getElementById("catFilters");
const noResults = d.getElementById("no-results");
const yearSpan = d.getElementById("year");
const ariaLive = d.getElementById("aria-live");
const subtitle = d.getElementById("subtitle");
subtitle.textContent = `${TOTAL_RECIPES} recetas para inspirar tu cocina`;
yearSpan.textContent = new Date().getFullYear().toString();

/* Modal */
const modal = d.getElementById("recipeModal");
const modalPanel = modal.querySelector(".modal-panel");
const recipeTitle = d.getElementById("recipeTitle");
const recipeImg = d.getElementById("recipeImg");
const recipeTime = d.getElementById("recipeTime");
const ingredientList = d.getElementById("ingredientList");
const stepsList = d.getElementById("stepsList");
const closeModalBtn = d.getElementById("closeModal");
const decServ = d.getElementById("decServ");
const incServ = d.getElementById("incServ");
const servingsInput = d.getElementById("servingsInput");
const addToShoppingBtn = d.getElementById("addToShopping");
const startCookingBtn = d.getElementById("startCooking");
const printRecipeBtn = d.getElementById("printRecipe");
const shareRecipeBtn = d.getElementById("shareRecipe");
const generateNutritionBtn = d.getElementById("generateNutrition");
const nutritionInfoEl = d.getElementById("nutrition-info");
const nutritionInfoContent = d.getElementById("nutrition-info-content");
const nutritionErrorEl = d.getElementById("nutrition-error");
const savePdfBtn = d.getElementById("savePdf");


/* Shopping Drawer */
const shoppingDrawer = d.getElementById("shoppingDrawer");
const openShoppingBtn = d.getElementById("openShopping");
const closeShoppingBtn = d.getElementById("closeShopping");
const shoppingList = d.getElementById("shoppingList");
const copyShoppingBtn = d.getElementById("copyShopping");
const clearCheckedBtn = d.getElementById("clearChecked");
const clearAllBtn = d.getElementById("clearAll");
const printShoppingBtn = d.getElementById("printShopping");

/* Accessibility toggles */
const themeToggle = d.getElementById("themeToggle");
const contrastToggle = d.getElementById("contrastToggle");
const fontInc = d.getElementById("fontInc");
const fontDec = d.getElementById("fontDec");
const ttsToggle = d.getElementById("ttsToggle");

/* Cooking mode */
const cookingMode = d.getElementById("cookingMode");
const cookCounter = d.getElementById("cookCounter");
const cookingStepText = d.getElementById("cookingStepText");
const cookPrev = d.getElementById("cookPrev");
const cookRepeat = d.getElementById("cookRepeat");
const cookNext = d.getElementById("cookNext");
const exitCookingBtn = d.getElementById("exitCooking");

/* ========= FOCUS TRAP CLASS ========= */
class FocusTrap {
    element;
    previouslyFocusedElement;
    focusableElements;
    firstFocusableElement;
    lastFocusableElement;

    constructor(element) {
        this.element = element;
        this.previouslyFocusedElement = document.activeElement;
        this.focusableElements = Array.from(
            this.element.querySelectorAll(
                'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
            )
        ).filter(el => !el.hasAttribute('disabled') && !el.closest('.inactive'));
        this.firstFocusableElement = this.focusableElements[0];
        this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    activate() {
        this.element.addEventListener('keydown', this.handleKeyDown);
        (this.firstFocusableElement || this.element).focus();
    }

    deactivate() {
        this.element.removeEventListener('keydown', this.handleKeyDown);
        this.previouslyFocusedElement?.focus();
    }

    handleKeyDown(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === this.firstFocusableElement) {
                this.lastFocusableElement.focus();
                e.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === this.lastFocusableElement) {
                this.firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    }
}

/* ========= PDF & GEMINI API FUNCTIONS ========= */
async function saveRecipeAsPdf() {
    if (!currentRecipe) return;

    const originalBtnText = savePdfBtn.innerHTML;
    savePdfBtn.disabled = true;
    savePdfBtn.innerHTML = 'Generando...';

    const { jsPDF } = jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    
    const contentToPrint = modalPanel.cloneNode(true);
    contentToPrint.style.position = 'absolute';
    contentToPrint.style.left = '-9999px';
    contentToPrint.style.width = '700px';
    document.body.appendChild(contentToPrint);

    contentToPrint.querySelector('.modal-actions')?.remove();
    contentToPrint.querySelector('.close-btn')?.remove();

    if(nutritionInfoEl.style.display !== 'none') {
        const clonedNutrition = contentToPrint.querySelector('#nutrition-info');
        if(clonedNutrition) clonedNutrition.style.display = 'block';
    }

    try {
        const canvas = await html2canvas(contentToPrint, {
            scale: 2,
            useCORS: true
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        let heightLeft = pdfHeight;
        let position = 0;
        const pageHeight = doc.internal.pageSize.getHeight();

        doc.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - pdfHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pageHeight;
        }
        
        doc.save(`receta-${currentRecipe.titulo.replace(/ /g, '-')}.pdf`);

    } catch(e) {
        console.error("Error generating PDF", e);
        alert("Hubo un error al generar el PDF.");
    } finally {
        document.body.removeChild(contentToPrint);
        savePdfBtn.disabled = false;
        savePdfBtn.innerHTML = originalBtnText;
    }
}

function manageImageCache(title, imageUrl) {
    imageCache[title] = imageUrl;
    try {
        localStorage.setItem('imageCache', JSON.stringify(imageCache));
    } catch (e) {
        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            console.warn('Storage quota exceeded. Evicting oldest cache entries.');
            // Eviction strategy: remove a quarter of the entries to make space
            const keys = Object.keys(imageCache);
            const keysToRemove = keys.slice(0, Math.floor(keys.length * 0.25));
            keysToRemove.forEach(key => {
                delete imageCache[key];
            });
            
            // Retry saving, ensuring the new item is included
            try {
                imageCache[title] = imageUrl;
                localStorage.setItem('imageCache', JSON.stringify(imageCache));
            } catch (e2) {
                console.error('Failed to save image cache even after eviction.', e2);
            }
        } else {
            console.error('Failed to save to localStorage', e);
        }
    }
}


async function generateAndCacheImage(title) {
    if (imageCache[title]) {
        return imageCache[title];
    }
    if (!ai) return 'https://placehold.co/600x400/d1c4b5/4a2e0a?text=API+Key+Missing';

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: `A photorealistic, delicious-looking picture of "${title}", professional food photography, bright lighting, appetizing.`,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '4:3'
            }
        });

        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
        
        manageImageCache(title, imageUrl);

        return imageUrl;
    } catch (error) {
        console.error(`Image generation failed for "${title}":`, error);
        return 'https://placehold.co/600x400/d1c4b5/4a2e0a?text=Error+Generating';
    }
}

async function generateNutritionInfo() {
    if (!currentRecipe) return;
    if (!ai) {
        nutritionErrorEl.textContent = "API Key no configurada. No se puede generar la información.";
        nutritionErrorEl.style.display = "block";
        return;
    }

    nutritionInfoContent.innerHTML = '<div class="spinner"></div>';
    nutritionErrorEl.style.display = "none";
    nutritionInfoEl.style.display = "block";
    
    const prompt = `Calcula la información nutricional aproximada para la receta "${currentRecipe.titulo}". La receta es para ${currentRecipe.raciones} raciones y los ingredientes son: ${currentRecipe.ingredientes.join(', ')}. Devuelve solo el total por ración.`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        calories: { type: Type.STRING, description: "Calorías totales por ración (ej. '350 kcal')" },
                        protein: { type: Type.STRING, description: "Proteínas totales por ración (ej. '15 g')" },
                        carbs: { type: Type.STRING, description: "Carbohidratos totales por ración (ej. '30 g')" },
                        fats: { type: Type.STRING, description: "Grasas totales por ración (ej. '12 g')" },
                    }
                },
            },
        });
        
        const nutrition = JSON.parse(response.text);

        nutritionInfoContent.innerHTML = `
            <div><span class="value">${nutrition.calories}</span><span class="label">Calorías</span></div>
            <div><span class="value">${nutrition.protein}</span><span class="label">Proteína</span></div>
            <div><span class="value">${nutrition.carbs}</span><span class="label">Carbs</span></div>
            <div><span class="value">${nutrition.fats}</span><span class="label">Grasas</span></div>
        `;

    } catch (error) {
        console.error("Nutrition info generation failed:", error);
        nutritionErrorEl.textContent = "No se pudo generar la información. Inténtalo de nuevo.";
        nutritionErrorEl.style.display = "block";
        nutritionInfoContent.innerHTML = '';
    }
}

/* ========= RENDER ========= */
function renderRecipes(list){
  grid.innerHTML = "";
  if (imageObserver) {
    imageObserver.disconnect();
  }

  if(list.length===0){
      noResults.style.display="block";
      return;
  }
  noResults.style.display="none";
  const frag = d.createDocumentFragment();
  list.forEach(r => {
    const card = d.createElement("div");
    card.className="recipe-card";
    card.tabIndex=0;
    card.setAttribute("role","button");
    card.setAttribute("aria-label", `Ver receta de ${r.titulo}`);
    card.dataset.id = r.titulo;

    const isFav = favorites.includes(r.titulo);

    card.innerHTML=`
      <div>
        <div class="badge">${r.categoria}</div>
        <button class="favorite-btn" aria-label="Marcar ${r.titulo} como favorita" data-fav-id="${r.titulo}">
          <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor':'none'}" stroke="${isFav ? 'red':'currentColor'}"><path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"/></svg>
        </button>
        <div class="img-container loading">
          <img alt="Imagen de ${r.titulo}" data-src-title="${r.titulo}">
        </div>
        <div class="card-body">
          <h3 class="card-title">${r.titulo}</h3>
          <p class="card-meta">Tiempo: ${r.tiempo} · Raciones: ${r.raciones}</p>
        </div>
      </div>`;
    
    const cachedSrc = imageCache[r.titulo];
    const imgContainer = card.querySelector('.img-container');
    const img = card.querySelector('img');
    if (cachedSrc) {
        img.src = cachedSrc;
        imgContainer.classList.remove('loading');
    } else {
        img.dataset.title = r.titulo;
        if (imageObserver) {
            imageObserver.observe(card);
        }
    }
      
    frag.appendChild(card);
  });
  grid.appendChild(frag);
  speakLive(`${list.length} recetas encontradas.`);
}

function applyFilters(){
  const term = searchInput.value.toLowerCase();
  const list = recipes.filter(r => {
    const matchesTerm = term === "" || (r.titulo.toLowerCase()+" "+r.ingredientes.join(" ").toLowerCase()).includes(term);
    const matchesFav = currentFilter !== "favorites" || favorites.includes(r.titulo);
    const matchesCat = currentCategory === "all" || r.categoria === currentCategory;
    return matchesTerm && matchesFav && matchesCat;
  });
  renderRecipes(list);
}

/* ========= MODAL ========= */
function openRecipe(title){
  const r = recipes.find(x => x.titulo === title);
  if(!r) return;
  currentRecipe = r;
  currentServings = r.raciones;
  recipeTitle.textContent = r.titulo;
  
  const imgContainer = modalPanel.querySelector('.modal-img-container');
  imgContainer?.classList.add('loading');
  
  recipeImg.src = ''; // Clear previous image
  generateAndCacheImage(r.titulo).then(src => {
    if (currentRecipe?.titulo === r.titulo) { // Ensure the modal hasn't changed
      recipeImg.src = src;
      imgContainer?.classList.remove('loading');
    }
  });
  
  recipeImg.alt = "Imagen de "+r.titulo;
  recipeTime.textContent = "Tiempo: "+r.tiempo;
  servingsInput.value = r.raciones.toString();
  buildIngredientList();
  stepsList.innerHTML = r.pasos.map(p => `<li>${p}</li>`).join("");

  nutritionInfoEl.style.display = 'none';
  nutritionInfoContent.innerHTML = '';
  nutritionErrorEl.style.display = 'none';

  lastFocusedElement = document.activeElement;
  modal.classList.add("modal-visible");
  
  activeTrap = new FocusTrap(modal);
  activeTrap.activate();
  
  if(speechEnabled) speak("Mostrando receta "+r.titulo);
}
function closeRecipe(){
    modal.classList.remove("modal-visible");
    currentRecipe = null;
    if (activeTrap) {
        activeTrap.deactivate();
        activeTrap = null;
    }
}
closeModalBtn.onclick = closeRecipe;
modal.addEventListener("click",e => { if(e.target === modal) closeRecipe(); });

/* Servings adjust */
function changeServings(delta){
  currentServings = Math.max(1, currentServings + delta);
  servingsInput.value = currentServings.toString();
  buildIngredientList();
}
decServ.onclick = () => changeServings(-1);
incServ.onclick = () => changeServings(1);
servingsInput.addEventListener("change", e => {
  let v = parseInt(e.target.value);
  if(isNaN(v) || v < 1) v = 1;
  currentServings = v;
  buildIngredientList();
});

function parseIngredient(str) {
  const regex=/^(\d+(?:[.,]\d+)?|\d+\/\d+)?\s*(un|una|medio|media|puñado|chorrito)?\s*(g|gr|gramos|kg|ml|litro|cdita|cda|taza|vaso|trozo|hojas|onza|rebanada|lonchas|lomos|filetes|manojo|piezas|unidad|unidades|latas|cucharadas|cucharaditas|dientes|bolas)?\s*(.+)?$/i;
  const m = str.match(regex);
  if(!m) return {value:0, unit:"", name:str, original:str};
  let val=0;
  if(m[1]){
    if(m[1].includes("/")){const p=m[1].split("/");val=parseFloat(p[0])/parseFloat(p[1]);}
    else val=parseFloat(m[1].replace(",","."));
  }
  else if(m[2]){ val=(m[2].toLowerCase().includes("medio"))?0.5:1; }
  else if(m[4]){ val=1; }
  let unit=m[3]?m[3].toLowerCase():"";
  let name=(m[4]||"").trim();
  return {value:val,unit,name,original:str};
}

function formatIngredient(ing, f) {
  if(ing.value===0 && !ing.unit) return ing.original;
  let val=ing.value*f, unit=ing.unit, name=ing.name;
  if(unit==="kg"&&val<1){val*=1000;unit="g";}
  if(unit==="litro"&&val<1){val*=1000;unit="ml";}
  if(unit==="g"&&val>=1000){val/=1000;unit="kg";}
  if(unit==="ml"&&val>=1000){val/=1000;unit="litro";}
  val = (Math.round(val*100)/100);
  const valStr = val.toString().replace(".",",");
  if(unit==="cdita"||unit==="cda") return `${valStr} ${unit}. ${name}`;
  if(val===1&&(!unit||["un","una","unidad","puñado","chorrito"].includes(unit))) return name;
  if(unit) return `${valStr} ${unit} ${name}`.trim();
  return `${valStr} ${name}`.trim();
}
function buildIngredientList(){
  if(!currentRecipe) return;
  ingredientList.innerHTML="";
  const factor = currentServings / currentRecipe.raciones;
  currentRecipe.ingredientes.forEach(i => {
    const p = parseIngredient(i);
    const txt = formatIngredient(p, factor);
    const li = d.createElement("li"); li.textContent = txt; ingredientList.appendChild(li);
  });
}

/* ========= SHOPPING LIST ========= */
function saveShopping(){ localStorage.setItem("shopping", JSON.stringify(shopping)); }
function renderShopping(){
  shoppingList.innerHTML="";
  if (shopping.length === 0) {
    shoppingList.innerHTML = `<li>Tu lista de la compra está vacía.</li>`;
    return;
  }
  shopping.forEach((item, i) => {
    const li = d.createElement("li");
    li.innerHTML=`<input type="checkbox" id="shop-item-${i}" ${item.done?"checked":""} data-i="${i}"/> <label for="shop-item-${i}" ${item.done?'style="text-decoration:line-through;opacity:.6"':''}>${item.text}</label>`;
    shoppingList.appendChild(li);
  });
}
shoppingList.addEventListener("change", e => {
  const target = e.target;
  if(target.matches("input[type=checkbox]")){
    const i = parseInt(target.dataset.i || '0');
    shopping[i].done = target.checked;
    saveShopping();
    renderShopping();
  }
});
addToShoppingBtn.onclick = () => {
  if(!currentRecipe) return;
  const factor = currentServings / currentRecipe.raciones;
  currentRecipe.ingredientes.forEach(i => {
    const p = parseIngredient(i);
    const txt = formatIngredient(p,factor);
    if(!shopping.find(s=>s.text === txt)) shopping.push({text:txt, done:false});
  });
  saveShopping();
  speakLive("Ingredientes añadidos a la lista");
  openShoppingDrawer();
};
function openShoppingDrawer() {
    shoppingDrawer.classList.remove("inactive");
    shoppingDrawer.classList.add("open");
    shoppingDrawer.setAttribute('aria-hidden', 'false');
    renderShopping();
    lastFocusedElement = document.activeElement;
    activeTrap = new FocusTrap(shoppingDrawer);
    activeTrap.activate();
}
function closeShoppingDrawer() {
    shoppingDrawer.classList.add("inactive");
    shoppingDrawer.classList.remove("open");
    shoppingDrawer.setAttribute('aria-hidden', 'true');
    if (activeTrap) {
        activeTrap.deactivate();
        activeTrap = null;
    }
}

openShoppingBtn.onclick = openShoppingDrawer;
closeShoppingBtn.onclick = closeShoppingDrawer;
copyShoppingBtn.onclick = () => {
  const str = shopping.map(i => `- ${i.text}${i.done?" (comprado)":""}`).join("\n");
  navigator.clipboard.writeText(str).then(()=>speakLive("Lista copiada"));
};
clearCheckedBtn.onclick = () => {
  shopping = shopping.filter(i => !i.done);
  saveShopping();
  renderShopping();
};
clearAllBtn.onclick = () => {
  if(confirm("¿Estás seguro de que quieres vaciar toda la lista de la compra?")){
    shopping=[];
    saveShopping();
    renderShopping();
  }
};
printShoppingBtn.onclick=()=>window.print();

/* Share / Print */
printRecipeBtn.onclick=()=>window.print();
shareRecipeBtn.onclick=async()=>{
  if(!currentRecipe) return;
  if(navigator.share){
    try{ await navigator.share({title:currentRecipe.titulo, text:"Mira esta receta que encontré", url:location.href}); }
    catch(err){ console.error("Share failed", err); }
  } else {
    alert("Tu navegador no soporta la función de compartir.");
  }
};

/* ========= COOKING MODE ========= */
function startCookingMode(){
  if(!currentRecipe) return;
  cookingSteps = currentRecipe.pasos;
  cookingIndex = 0;
  cookingMode.style.display="flex";
  lastFocusedElement = document.activeElement;
  activeTrap = new FocusTrap(cookingMode);
  activeTrap.activate();
  updateCookingStep();
  if(speechEnabled) speak("Empezamos la receta: "+currentRecipe.titulo);
}
function updateCookingStep(){
  cookCounter.textContent=`Paso ${cookingIndex+1} de ${cookingSteps.length}`;
  cookingStepText.textContent = cookingSteps[cookingIndex];
  if(speechEnabled) speak(cookingSteps[cookingIndex]);
}
function exitCookingMode(){
  cookingMode.style.display="none";
  if (speechSynthesis.speaking) speechSynthesis.cancel();
  if (activeTrap) {
    activeTrap.deactivate();
    activeTrap = null;
  }
}
startCookingBtn.onclick=startCookingMode;
exitCookingBtn.onclick=exitCookingMode;
cookPrev.onclick=()=>{ if(cookingIndex>0){cookingIndex--;updateCookingStep();} else speakLive("Este es el primer paso."); };
cookNext.onclick=()=>{ if(cookingIndex<cookingSteps.length-1){cookingIndex++;updateCookingStep();} else {speakLive("Fin de la receta. ¡Buen provecho!"); exitCookingMode();} };
cookRepeat.onclick=()=>{ if(speechEnabled) speak(cookingSteps[cookingIndex]); };

/* ========= ACCESSIBILITY ========= */
const docEl = document.documentElement;
themeToggle.onclick = () => toggleTheme();
contrastToggle.onclick=() => docEl.classList.toggle("high-contrast");
fontInc.onclick=()=>changeFont(1);
fontDec.onclick=()=>changeFont(-1);

function toggleTheme(initial = false) {
    const isDark = docEl.classList.contains('dark');
    if (initial) {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            docEl.classList.add('dark');
        }
    } else {
        docEl.classList.toggle('dark');
        localStorage.setItem('theme', docEl.classList.contains('dark') ? 'dark' : 'light');
    }
    themeToggle.textContent = docEl.classList.contains('dark') ? '☀️' : '🌙';
}

function changeFont(dir){
  const currentSize = parseFloat(getComputedStyle(docEl).fontSize);
  const newSize = Math.min(24, Math.max(14, currentSize + dir));
  docEl.style.fontSize = `${newSize}px`;
}
ttsToggle.onclick=()=>{
  speechEnabled=!speechEnabled;
  ttsToggle.classList.toggle("active",speechEnabled);
  speakLive(speechEnabled?"Voz activada":"Voz desactivada");
};
function speak(text){
  if (!speechEnabled) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang="es-ES";
  u.rate=.9;
  u.pitch=1;
  speechSynthesis.speak(u);
}
function speakLive(msg){
  ariaLive.textContent=msg;
  if(speechEnabled && !speechSynthesis.speaking) speak(msg);
}

function initializeImageObserver() {
    const options = {
        rootMargin: '0px 0px 200px 0px', // Start loading when 200px from viewport bottom
        threshold: 0.01
    };

    imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const img = card.querySelector('img');
                const imgContainer = card.querySelector('.img-container');
                const title = img.dataset.title;
                
                observer.unobserve(card); // Unobserve to prevent re-triggering

                generateAndCacheImage(title).then(src => {
                    img.src = src;
                    imgContainer.classList.remove('loading');
                });
            }
        });
    }, options);
}

/* ========= INITIALIZATION AND EVENT LISTENERS ========= */
document.addEventListener('DOMContentLoaded', () => {
    // Main grid events
    grid.addEventListener("click", e => {
      const target = e.target;
      const card = target.closest(".recipe-card");
      if(!card) return;

      if(target.closest(".favorite-btn")){
        const id = card.dataset.id;
        if (id) toggleFavorite(id);
        return;
      }
      const id = card.dataset.id;
      if (id) openRecipe(id);
    });

    grid.addEventListener("keydown", e => {
      if(e.key==="Enter"||e.key===" "){
        e.preventDefault();
        const card = e.target;
        if(card.classList.contains('recipe-card')){
            const id = card.dataset.id;
            if (id) openRecipe(id);
        }
      }
    });

    function toggleFavorite(id){
      const favBtn = grid.querySelector(`[data-fav-id="${id}"]`);
      const svg = favBtn?.querySelector('svg');
      const idx = favorites.indexOf(id);

      if(idx >= 0) {
        favorites.splice(idx,1);
        speakLive(`${id} eliminado de favoritos.`);
        favBtn?.setAttribute('aria-label', `Marcar ${id} como favorita`);
        svg?.setAttribute('fill', 'none');
        svg?.setAttribute('stroke', 'currentColor');
      } else {
        favorites.push(id);
        speakLive(`${id} añadido a favoritos.`);
        favBtn?.setAttribute('aria-label', `Quitar ${id} de favoritos`);
        svg?.setAttribute('fill', 'currentColor');
        svg?.setAttribute('stroke', 'red');
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      if(currentFilter === 'favorites') {
        applyFilters();
      }
    }

    // Filter events
    filterAllBtn.onclick = () => {
        currentFilter="all";
        filterAllBtn.classList.add("active");
        filterFavBtn.classList.remove("active");
        filterAllBtn.setAttribute('aria-pressed', 'true');
        filterFavBtn.setAttribute('aria-pressed', 'false');
        applyFilters();
    };
    filterFavBtn.onclick = () => {
        currentFilter="favorites";
        filterFavBtn.classList.add("active");
        filterAllBtn.classList.remove("active");
        filterFavBtn.setAttribute('aria-pressed', 'true');
        filterAllBtn.setAttribute('aria-pressed', 'false');
        applyFilters();
    };
    catFilters.addEventListener("click", e => {
      const btn = e.target.closest("[data-cat]");
      if(!btn) return;
      currentCategory = btn.dataset.cat;
      catFilters.querySelectorAll(".btn-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
    searchInput.addEventListener("input", applyFilters);

    // Global keydown listener for Esc
    document.addEventListener("keydown", e => {
      if(e.key === "Escape"){
        if(cookingMode.style.display === "flex") exitCookingMode();
        else if(modal.classList.contains("modal-visible")) closeRecipe();
        else if(shoppingDrawer.classList.contains("open")) closeShoppingDrawer();
      }
    });
    
    // Action buttons in modal
    generateNutritionBtn.addEventListener('click', generateNutritionInfo);
    savePdfBtn.addEventListener('click', saveRecipeAsPdf);

    // Initial setup
    initializeImageObserver();
    toggleTheme(true);
    applyFilters();
});--- START OF FILE index.html ---

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Recetario Delicioso (150 recetas) – Accesible</title>

<!-- PDF Generation Libraries -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>


<!-- Manifest simple inline (opcional) -->
<link rel="manifest" href='data:application/manifest+json,{"name":"Recetario Delicioso","short_name":"Recetario","start_url":".","display":"standalone","background_color":"#f8f7f5","theme_color":"#5A2708","icons":[{"src":"https://placehold.co/192x192/5A2708/fff?text=R","sizes":"192x192","type":"image/png"},{"src":"https://placehold.co/512x512/5A2708/fff?text=R","sizes":"512x512","type":"image/png"}]}' />

<style>
:root{
  --bg:#f8f7f5; --fg:#1c1917; --accent:#5A2708; --accent2:#f59e0b; --muted:#6b7280;
  --card:#ffffff; --card-dark:#2b2b2b; --radius:20px;
  --font-base:18px;
}
html{font-size:var(--font-base);}
body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--fg);transition: background-color .3s, color .3s;}
.dark body{background:#111;color:#e5e5e5;}
a{color:var(--accent);}
h1,h2,h3,h4{font-family:Georgia, 'Times New Roman', serif;margin:0;}
header{padding:1.5rem 1rem 1rem;text-align:center;position:relative;}

.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
#skip{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;}
#skip:focus{position:static;width:auto;height:auto;background:#fff;padding:.5rem;z-index:1000;}

#top-controls-nav{position:sticky;top:0;background:rgba(248,247,245,.9);backdrop-filter:blur(6px);z-index:10;padding:.5rem 0;border-bottom:1px solid #ddd;}
.dark #top-controls-nav{background:rgba(28,25,23,.9);border-color:#333;}

.btn{cursor:pointer;border:none;border-radius:9999px;padding:.6rem 1rem;font-size:.85rem;transition:.2s;line-height:1;}
.btn:hover{opacity:.9;}
.btn[disabled] { cursor: not-allowed; opacity: 0.6; }
.btn-ghost{background:transparent;border:1px solid transparent;}
.btn-chip{background:#eee;color:#333;margin:.2rem;}
.dark .btn-chip{background:#3b3735;color:#ddd;}
.btn-chip.active{background:var(--accent);color:#fff;font-weight:600;box-shadow:0 2px 5px rgba(0,0,0,.2);}
.dark .btn-chip.active{background:var(--accent2);color:#111;}

#searchInput{width:100%;padding:.8rem 2.5rem .8rem 2.5rem;border:1px solid #ccc;border-radius:9999px;}
.dark #searchInput{background:#222;border-color:#444;color:#eee;}

#recipeGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem;padding:1rem;}
.recipe-card{outline:none;}
.recipe-card>div{background:var(--card);border-radius:var(--radius);overflow:hidden;box-shadow:0 3px 8px rgba(0,0,0,.08);display:flex;flex-direction:column;height:100%;transition:.2s;}
.dark .recipe-card>div{background:var(--card-dark);}
.recipe-card>div:hover, .recipe-card>div:focus-within {transform:translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,.12);}

/* Accessibility: Visible Focus */
:focus-visible { outline: 3px solid var(--accent2); outline-offset: 2px; border-radius: 4px; }
.modal-panel :focus-visible { outline-offset: 4px; }
.recipe-card:focus-visible { outline: 3px solid var(--accent2); outline-offset: 4px; border-radius: var(--radius); }

.img-container {
  position: relative;
  width: 100%;
  height: 140px;
  background-color: #e0e0e0;
}
.dark .img-container { background-color: #333; }

.img-container.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shimmer 1.5s infinite;
}
.dark .img-container.loading::after {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
}
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.recipe-card .img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge{position:absolute;top:.5rem;left:.5rem;background:var(--accent);color:#fff;font-size:.7rem;padding:.25rem .5rem;border-radius:9999px; z-index: 1;}
.dark .badge{background:var(--accent2);color:#111;}
.favorite-btn{position:absolute;top:.5rem;right:.5rem;background:rgba(255,255,255,.85);border-radius:50%;padding:.3rem;border:none;cursor:pointer; z-index: 1;}
.dark .favorite-btn{background:rgba(0,0,0,.5);}
.favorite-btn svg{width:22px;height:22px;stroke-width:2;}
.card-body{padding:0.8rem;flex:1;display:flex;flex-direction:column;}
.card-title{font-size:1rem;font-weight:700;margin-bottom:.3rem;color:var(--accent);}
.dark .card-title{color:var(--accent2);}
.card-meta{font-size:.8rem;color:var(--muted);margin-top:auto;}
#no-results{text-align:center;padding:2rem;color:var(--muted);display:none;}

#recipeModal,#cookingMode{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.65);z-index:100;}
.modal-visible{display:flex;}
.modal-panel{background:var(--card);color:var(--fg);width:95%;max-width:760px;max-height:92vh;overflow-y:auto;border-radius:24px;padding:1.2rem 1.4rem 2rem;position:relative;box-shadow:0 20px 40px rgba(0,0,0,.35);transform:scale(.96);transition:.25s;}
.dark .modal-panel{background:#1f1f1f;color:#eee;}
.modal-visible .modal-panel{transform:scale(1);}
.close-btn{position:absolute;top:.6rem;right:.6rem;background:#eee;border:none;border-radius:50%;padding:.4rem;cursor:pointer;}
.dark .close-btn{background:#333;color:#eee;}
h2.modal-title{margin:0 2.5rem 1rem 0;font-size:1.6rem;line-height:1.2;}
.modal-img-container { height: 280px; border-radius: 16px; margin-bottom: 1rem; overflow: hidden; }
.modal-img{width:100%; height: 100%; object-fit:cover; background-color: #e0e0e0;}
.dark .modal-img { background-color: #333; }
.section-title{font-size:1.2rem;border-bottom:2px solid #f0d9b5;margin:1.2rem 0 .6rem;padding-bottom:.3rem;}
.dark .section-title{border-color:#5c3b14;}
ul,ol{margin:0;padding-left:1.1rem;}
#portionBox{display:flex;align-items:center;gap:.5rem;margin:.5rem 0 1rem;font-size:.9rem;}
.adjust-btn{padding:.3rem .7rem;border-radius:8px;border:1px solid #ccc;background:#fafafa;cursor:pointer;}
.dark .adjust-btn{background:#333;border-color:#555;color:#eee;}
#servingsInput{width:60px;text-align:center;padding:.2rem .3rem;border:1px solid #ccc;border-radius:8px;}
.dark #servingsInput{background:#333;border-color:#555;color:#eee;}

#nutrition-info { font-size: 0.9rem; background-color: rgba(120, 53, 15, 0.05); padding: 0.8rem; border-radius: 12px; margin-top: 1rem; }
.dark #nutrition-info { background-color: rgba(245, 158, 11, 0.1); }
#nutrition-info-content { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-around; margin-top: 0.5rem; }
#nutrition-info-content div { text-align: center; }
#nutrition-info-content span { display: block; }
#nutrition-info-content .value { font-weight: 600; font-size: 1rem; }
#nutrition-info .spinner { width: 20px; height: 20px; border: 3px solid rgba(0,0,0,0.1); border-top-color: var(--accent); border-radius: 50%; animation: spin 1s linear infinite; margin: 1rem auto; }
.dark #nutrition-info .spinner { border-top-color: var(--accent2); }
@keyframes spin { to { transform: rotate(360deg); } }

.modal-actions{display:flex;flex-wrap:wrap;gap:.6rem;justify-content:center;margin-top:1.2rem;}
.modal-actions .btn{box-shadow:0 2px 5px rgba(0,0,0,.15);font-weight:600;}
#shoppingDrawer{position:fixed;right:0;top:0;bottom:0;width:320px;background:var(--card);box-shadow:-3px 0 15px rgba(0,0,0,.25);transform:translateX(100%);transition:.3s;padding:1rem 1.2rem 2rem;z-index:90;overflow-y:auto;}
.dark #shoppingDrawer{background:#1f1f1f;color:#eee;}
#shoppingDrawer.open{transform:translateX(0);}
#shoppingList{font-size:.9rem;margin-bottom:1rem;list-style:none;padding:0;}
#shoppingList li{margin:.3rem 0;display:flex;align-items:center;gap:.4rem;}
#shoppingList input[type="checkbox"]{transform:scale(1.2);flex-shrink:0;}
.drawer-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.8rem;}
.drawer-title{margin:0;font-size:1.1rem;}
#aria-live{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;}
/* Cooking mode */
#cookingMode{flex-direction:column;background:var(--bg);color:var(--fg);}
#cookingStepText{font-size:2rem;max-width:90%;text-align:center;line-height:1.35;}
#cookControls{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;padding:1rem;width:100%;max-width:600px;margin:0 auto;}
#cookControls button{padding:1rem;border-radius:14px;border:none;font-size:1rem;font-weight:600;cursor:pointer;}
.print-only{display:none;}
@media print{
  body *{visibility:hidden;}
  #recipeModal .modal-panel,#recipeModal .modal-panel *{visibility:visible;}
  #recipeModal{position:absolute;inset:0;background:none;}
  .close-btn,.modal-actions,#portionBox{display:none!important;}
  .print-only{display:block;}
}
</style>
<script type="importmap">
{
  "imports": {
    "@google/genai": "https://esm.sh/@google/genai@^1.11.0"
  }
}
</script>
</head>
<body>
<a href="#main" id="skip">Saltar al contenido principal</a>

<div id="aria-live" aria-live="polite"></div>

<header>
  <h1>Recetario Delicioso</h1>
  <p id="subtitle">150 recetas para inspirar tu cocina</p>
</header>

<nav id="top-controls-nav" aria-label="Controles principales">
  <div style="max-width:1100px;margin:0 auto;padding:0 .8rem;">
    <div style="display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;">
      <div style="position:relative;flex:1;">
        <input id="searchInput" type="search" aria-label="Buscar por nombre o ingrediente" placeholder="Buscar por nombre o ingrediente…" />
        <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:1.1rem;opacity:.5;" aria-hidden="true">🔍</span>
      </div>
       <div id="main-filters" role="group" aria-label="Filtros principales">
        <button id="filterAll" class="btn btn-chip active" aria-pressed="true">Todas</button>
        <button id="filterFav" class="btn btn-chip" aria-pressed="false">Favoritas</button>
      </div>
      <button id="openShopping" class="btn btn-chip" aria-haspopup="true" aria-controls="shoppingDrawer">
        <span aria-hidden="true">🛒 </span>Lista
      </button>
    </div>
    <div id="catFilters" role="group" aria-label="Filtrar por categoría" style="margin-top:.6rem;overflow-x:auto;white-space:nowrap;padding-bottom:.3rem;">
      <button class="btn btn-chip active" data-cat="all">Todos</button>
      <button class="btn btn-chip" data-cat="Aperitivo">Aperitivos</button>
      <button class="btn btn-chip" data-cat="Primero">Primeros</button>
      <button class="btn btn-chip" data-cat="Segundo">Segundos</button>
      <button class="btn btn-chip" data-cat="Postre">Postres</button>
    </div>
  </div>
</nav>

<main id="main">
  <div id="no-results">No se encontraron recetas.</div>
  <section id="recipeGrid" aria-label="Listado de recetas"></section>
</main>

<!-- Modal Receta -->
<div id="recipeModal" role="dialog" aria-modal="true" aria-labelledby="recipeTitle" tabindex="-1">
  <div class="modal-panel" role="document">
    <button class="close-btn" id="closeModal" aria-label="Cerrar ventana de receta">✖</button>
    <h2 id="recipeTitle" class="modal-title"></h2>
    <div class="img-container modal-img-container">
      <img id="recipeImg" class="modal-img" alt="">
    </div>
    <p id="recipeTime" style="font-weight:600;margin:.3rem 0;"></p>
    
    <div id="portionBox">
      <span>Raciones:</span>
      <button class="adjust-btn" id="decServ" aria-label="Reducir raciones">-</button>
      <input id="servingsInput" type="number" min="1" aria-label="Número de raciones" />
      <button class="adjust-btn" id="incServ" aria-label="Aumentar raciones">+</button>
    </div>
    
    <div id="nutrition-info" style="display: none;">
      <h3 class="section-title" style="margin-top:0;">Información Nutricional (Estimación)</h3>
      <p id="nutrition-error" style="color: red; display: none;"></p>
      <div id="nutrition-info-content"></div>
    </div>

    <h3 class="section-title">Ingredientes</h3>
    <ul id="ingredientList"></ul>

    <h3 class="section-title">Pasos</h3>
    <ol id="stepsList"></ul>

    <div class="modal-actions">
      <button class="btn" id="generateNutrition">Info Nutricional ✨</button>
      <button class="btn" id="addToShopping">Añadir a la lista 🛒</button>
      <button class="btn" id="startCooking">Modo cocina ▶️</button>
      <button class="btn" id="savePdf">Guardar como PDF 📄</button>
      <button class="btn" id="printRecipe">Imprimir</button>
      <button class="btn" id="shareRecipe">Compartir</button>
    </div>
    <div class="print-only">
      <p><strong>www.</strong></p>
    </div>
  </div>
</div>

<!-- Drawer Lista Compra -->
<aside id="shoppingDrawer" aria-label="Lista de la compra" class="inactive" tabindex="-1">
  <div class="drawer-header">
    <h4 class="drawer-title">Lista de la compra</h4>
    <button id="closeShopping" class="btn btn-ghost" aria-label="Cerrar lista de la compra">✖</button>
  </div>
  <ul id="shoppingList"></ul>
  <div style="display:flex;gap:.4rem;flex-wrap:wrap; margin-top: 1rem;">
    <button id="copyShopping" class="btn">Copiar</button>
    <button id="clearChecked" class="btn">Borrar marcados</button>
    <button id="clearAll" class="btn">Vaciar</button>
    <button id="printShopping" class="btn">Imprimir</button>
  </div>
</aside>

<!-- Cooking Mode -->
<div id="cookingMode" role="dialog" aria-modal="true" aria-labelledby="cookingStepText" tabindex="-1">
  <button id="exitCooking" class="btn btn-chip" style="position:absolute;top:10px;right:10px;">Salir ✖</button>
  <p id="cookCounter" style="margin-top:70px;font-weight:600;" aria-live="polite"></p>
  <div id="cookingStepText" style="font-size: clamp(1.5rem, 4vw, 2.5rem); max-width: 90%; text-align: center; line-height: 1.35;"></div>
  <div id="cookControls">
    <button id="cookPrev">Anterior</button>
    <button id="cookRepeat">Repetir</button>
    <button id="cookNext">Siguiente</button>
  </div>
</div>

<footer style="text-align:center;padding:1rem;border-top:1px solid #ddd;margin-top:2rem;">
  <nav aria-label="Controles de accesibilidad">
      <button id="themeToggle" class="btn btn-chip" title="Cambiar tema oscuro/claro">☀️</button>
      <button id="contrastToggle" class="btn btn-chip" title="Activar/desactivar alto contraste">Alto contraste</button>
      <button id="fontDec" class="btn btn-chip" title="Reducir tamaño de letra">A-</button>
      <button id="fontInc" class="btn btn-chip" title="Aumentar tamaño de letra">A+</button>
      <button id="ttsToggle" class="btn btn-chip" title="Activar/desactivar lectura en voz alta">🔈 Voz</button>
  </nav>
  <p style="margin:.3rem 0;font-size:.8rem;">&copy; <span id="year"></span> Luis Miguel Garcia De Las Morenas. Todos los derechos reservados.</p>
</footer>

<script type="module" src="index.js"></script>
</body>
</html>
