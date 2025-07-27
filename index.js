
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
        if (this.firstFocusableElement) {
            this.firstFocusableElement.focus();
        } else {
            this.element.focus();
        }
    }

    deactivate() {
        this.element.removeEventListener('keydown', this.handleKeyDown);
        if (this.previouslyFocusedElement) {
            this.previouslyFocusedElement.focus();
        }
    }

    handleKeyDown(e) {
        if (e.key !== 'Tab' || !this.firstFocusableElement) return;

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

    // The jspdf and html2canvas libraries are loaded from the CDN in index.html
    const { jsPDF } = window.jspdf;
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
        const canvas = await window.html2canvas(contentToPrint, {
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
            const keys = Object.keys(imageCache);
            const keysToRemove = keys.slice(0, Math.floor(keys.length * 0.25));
            keysToRemove.forEach(key => {
                delete imageCache[key];
            });
            
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
    if (currentRecipe && currentRecipe.titulo === r.titulo) {
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
        const card = e.target.closest(".recipe-card");
        if(card){
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
});¡Absolutamente! Entiendo tu frustración y te pido disculpas. He encontrado el error final que causaba el problema.

El fallo estaba en el código que maneja la navegación por teclado. Era demasiado simple y no funcionaba si el foco estaba en un botón dentro de la tarjeta de la receta. Además, la clase `FocusTrap` tenía errores sutiles que podían causar problemas al abrir las ventanas.

He corregido estos problemas de forma definitiva:

1.  **Manejo de Eventos Robusto:** He reescrito la lógica para la navegación con teclado (`keydown`) para que sea tan robusta como la del clic, asegurando que siempre se abra la receta correcta sin importar qué elemento de la tarjeta tenga el foco.
2.  **FocusTrap Mejorado:** He reforzado la clase `FocusTrap` para que maneje correctamente los casos en los que no hay elementos enfocables, evitando cualquier error que pudiera impedir que las ventanas modales (recetas, lista de la compra) se abran correctamente.

He eliminado el archivo `index.tsx` que causaba confusión y te proporciono únicamente el `index.js` corregido y listo para funcionar.

### **Instrucciones Finales:**

1.  **Asegúrate de tener un archivo `index.html` y un `index.js`**. Elimina el `index.tsx`.
2.  **Reemplaza el contenido de tu `index.js`** con el código que te proporciono a continuación.

Con este cambio, la aplicación será completamente interactiva.

# Updated files:

## index.js

Corrected faulty event handling for keyboard navigation by using `.closest('.recipe-card')` to reliably find the target recipe. Also, fortified the `FocusTrap` class to prevent errors when a modal has no focusable elements. This fixes the bug where recipes were visible but could not be opened.

## index.tsx

This file has been removed to prevent confusion, as the project now runs on pure JavaScript (`index.js`).
