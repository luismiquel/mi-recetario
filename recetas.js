const RECETAS = [
  // --- APERITIVOS ---
  {
    titulo: "Tostas de tomate y jamón",
    categoria: "Aperitivo",
    tiempo: "10 min",
    imagen: "tostas-tomate-jamon.jpg",
    ingredientes: ["4 rebanadas de pan rústico", "2 tomates maduros", "1 diente de ajo", "4 lonchas de jamón serrano", "Aceite de oliva virgen extra", "Sal"],
    pasos: ["Tostar el pan.", "Frotar el ajo sobre el pan tostado.", "Rallar el tomate y extenderlo sobre el pan.", "Colocar una loncha de jamón encima.", "Añadir un chorrito de aceite de oliva y sal."]
  },
  {
    titulo: "Tostas de anchoa y pimiento",
    categoria: "Aperitivo",
    tiempo: "15 min",
    imagen: "tostas-anchoa-pimiento.jpg",
    ingredientes: ["4 rebanadas de pan", "8 filetes de anchoa", "1 pimiento rojo asado", "Aceite de oliva virgen extra"],
    pasos: ["Corta el pimiento en tiras.", "Tuesta el pan.", "Coloca pimiento y anchoas sobre el pan.", "Riega con aceite y sirve."]
  },
  {
    titulo: "Tostas de escalivada",
    categoria: "Aperitivo",
    tiempo: "30 min",
    imagen: "tostas-escalivada.jpg",
    ingredientes: ["1 berenjena", "1 pimiento rojo", "1 cebolla", "4 rebanadas de pan", "Aceite de oliva", "Sal"],
    pasos: ["Asa las verduras en el horno.", "Pela y corta las verduras en tiras.", "Tuesta el pan y coloca las verduras encima.", "Aliña con aceite y sal."]
  },
  {
    titulo: "Tostas de salmón y queso fresco",
    categoria: "Aperitivo",
    tiempo: "10 min",
    imagen: "tostas-salmon-queso.jpg",
    ingredientes: ["4 rebanadas de pan integral", "100 g de queso fresco", "100 g de salmón ahumado", "Eneldo fresco"],
    pasos: ["Tuesta el pan y unta con queso.", "Coloca el salmón sobre el queso.", "Decora con eneldo y sirve."]
  },
  {
    titulo: "Croquetas de jamón",
    categoria: "Aperitivo",
    tiempo: "1 h",
    imagen: "croquetas-jamon.jpg",
    ingredientes: ["100 g de jamón serrano", "50 g de mantequilla", "50 g de harina", "500 ml de leche", "1 huevo", "Pan rallado", "Aceite", "Sal", "Nuez moscada"],
    pasos: ["Prepara una bechamel con mantequilla, harina y leche.", "Añade el jamón, sal y nuez moscada.", "Enfría la masa.", "Forma las croquetas, empana y fríe."]
  },
  {
    titulo: "Croquetas de pollo",
    categoria: "Aperitivo",
    tiempo: "1 h",
    imagen: "croquetas-pollo.jpg",
    ingredientes: ["200 g de pollo cocido", "50 g de mantequilla", "50 g de harina", "500 ml de leche", "1 huevo", "Pan rallado", "Aceite", "Sal", "Pimienta"],
    pasos: ["Haz una bechamel.", "Añade el pollo, sal y pimienta.", "Enfría la masa.", "Forma las croquetas, empana y fríe."]
  },
  {
    titulo: "Croquetas de bacalao",
    categoria: "Aperitivo",
    tiempo: "1 h",
    imagen: "croquetas-bacalao.jpg",
    ingredientes: ["200 g de bacalao desalado", "50 g de mantequilla", "50 g de harina", "500 ml de leche", "1 huevo", "Pan rallado", "Aceite", "Sal", "Pimienta"],
    pasos: ["Cuece y desmenuza el bacalao.", "Prepara una bechamel.", "Añade el bacalao.", "Enfría, forma, empana y fríe."]
  },
  {
    titulo: "Croquetas de setas",
    categoria: "Aperitivo",
    tiempo: "1 h",
    imagen: "croquetas-setas.jpg",
    ingredientes: ["200 g de setas", "1 cebolla", "50 g de mantequilla", "50 g de harina", "500 ml de leche", "Aceite", "1 huevo", "Pan rallado", "Sal", "Pimienta"],
    pasos: ["Sofríe la cebolla y las setas.", "Prepara la bechamel.", "Sazona y enfría.", "Forma, empana y fríe."]
  },
  {
    titulo: "Empanadillas de atún",
    categoria: "Aperitivo",
    tiempo: "45 min",
    imagen: "empanadillas-atun.jpg",
    ingredientes: ["1 paquete de obleas", "2 latas de atún", "1 huevo duro", "4 cucharadas de tomate frito", "1 huevo batido"],
    pasos: ["Mezcla el atún, huevo duro y tomate.", "Rellena y sella las obleas.", "Pinta con huevo y hornea o fríe."]
  },
  {
    titulo: "Empanadillas de carne",
    categoria: "Aperitivo",
    tiempo: "45 min",
    imagen: "empanadillas-carne.jpg",
    ingredientes: ["1 paquete de obleas", "200 g de carne picada", "1 cebolla", "2 cucharadas de tomate frito", "Aceite", "1 huevo batido", "Sal", "Pimienta"],
    pasos: ["Pocha la cebolla.", "Añade la carne y el tomate.", "Rellena y sella las obleas.", "Pinta con huevo y hornea."]
  },
  {
    titulo: "Patatas bravas",
    categoria: "Aperitivo",
    tiempo: "30 min",
    imagen: "patatas-bravas.jpg",
    ingredientes: ["500 g de patatas", "Aceite para freír", "Sal", "Salsa brava"],
    pasos: ["Corta y fríe las patatas.", "Prepara la salsa brava.", "Sirve las patatas con la salsa."]
  },
  {
    titulo: "Patatas alioli",
    categoria: "Aperitivo",
    tiempo: "25 min",
    imagen: "patatas-alioli.jpg",
    ingredientes: ["500 g de patatas", "2 dientes de ajo", "200 ml de aceite", "1 huevo", "Sal", "Limón"],
    pasos: ["Cuece y corta las patatas.", "Prepara el alioli.", "Mezcla las patatas con el alioli."]
  },
  {
    titulo: "Boquerones en vinagre",
    categoria: "Aperitivo",
    tiempo: "12 h",
    imagen: "boquerones-vinagre.jpg",
    ingredientes: ["500 g de boquerones", "200 ml de vinagre", "200 ml de agua", "Aceite", "Perejil", "Sal"],
    pasos: ["Limpia y congela los boquerones.", "Marínalos en vinagre y agua.", "Escúrrelos y cúbrelos con aceite y perejil."]
  },
  {
    titulo: "Champiñones al ajillo",
    categoria: "Aperitivo",
    tiempo: "20 min",
    imagen: "champinones-ajillo.jpg",
    ingredientes: ["400 g de champiñones", "4 dientes de ajo", "Guindilla", "Aceite", "Perejil", "Sal"],
    pasos: ["Limpia y corta los champiñones.", "Sofríe los ajos y la guindilla.", "Añade los champiñones y cocina.", "Espolvorea con perejil."]
  },
  {
    titulo: "Gildas donostiarras",
    categoria: "Aperitivo",
    tiempo: "10 min",
    imagen: "gildas.jpg",
    ingredientes: ["12 aceitunas", "6 guindillas", "6 filetes de anchoa", "Palillos"],
    pasos: ["Ensarta en cada palillo una aceituna, una guindilla y una anchoa."]
  },
  {
    titulo: "Pinchos de tortilla",
    categoria: "Aperitivo",
    tiempo: "30 min",
    imagen: "pinchos-tortilla.jpg",
    ingredientes: ["1 tortilla de patatas", "Pan de barra", "Pimientos verdes fritos"],
    pasos: ["Corta la tortilla en porciones.", "Coloca cada porción sobre pan.", "Decora con un pimiento y un palillo."]
  },
  {
    titulo: "Pinchos morunos",
    categoria: "Aperitivo",
    tiempo: "1 h 20 min",
    imagen: "pinchos-morunos.jpg",
    ingredientes: ["500 g de carne de cerdo", "Adobo", "Palillos de brocheta"],
    pasos: ["Adoba la carne y deja reposar.", "Ensarta en brochetas y cocina a la plancha."]
  },
  {
    titulo: "Queso marinado en aceite",
    categoria: "Aperitivo",
    tiempo: "3 días",
    imagen: "queso-marinado.jpg",
    ingredientes: ["300 g de queso manchego", "200 ml de aceite", "Guindilla", "Ajo", "Hierbas aromáticas"],
    pasos: ["Corta el queso en dados.", "Ponlo en un tarro con hierbas y ajo.", "Cubre con aceite y deja macerar."]
  },
  {
    titulo: "Hummus clásico con crudités",
    categoria: "Aperitivo",
    tiempo: "15 min",
    imagen: "hummus.jpg",
    ingredientes: ["400 g de garbanzos cocidos", "Tahini", "Ajo", "Limón", "Aceite", "Comino", "Sal", "Verduras crudas"],
    pasos: ["Tritura todos los ingredientes del hummus.", "Sirve con crudités."]
  },
  {
    titulo: "Gazpacho en vasitos",
    categoria: "Aperitivo",
    tiempo: "20 min",
    imagen: "gazpacho-vasitos.jpg",
    ingredientes: ["1 kg de tomates", "Pepino", "Pimiento", "Ajo", "Pan", "Aceite", "Vinagre", "Sal"],
    pasos: ["Tritura todos los ingredientes.", "Pasa por un colador.", "Sirve en vasitos fríos."]
  },
  {
    titulo: "Salmorejo en chupitos",
    categoria: "Aperitivo",
    tiempo: "25 min",
    imagen: "salmorejo-chupitos.jpg",
    ingredientes: ["1 kg de tomates", "200 g de pan", "Ajo", "Aceite", "Sal", "Jamón serrano", "Huevo duro"],
    pasos: ["Tritura los ingredientes.", "Decora con jamón y huevo."]
  },
  {
    titulo: "Ensaladilla rusa",
    categoria: "Aperitivo",
    tiempo: "45 min",
    imagen: "ensaladilla-rusa.jpg",
    ingredientes: ["3 patatas", "2 zanahorias", "150 g de guisantes", "2 huevos", "Atún", "Mayonesa", "Pimientos morrones"],
    pasos: ["Cuece las verduras y los huevos.", "Mezcla todo con atún y mayonesa.", "Decora y sirve fría."]
  },
  {
    titulo: "Torreznos crujientes",
    categoria: "Aperitivo",
    tiempo: "30 min",
    imagen: "torreznos.jpg",
    ingredientes: ["500 g de panceta adobada", "Aceite"],
    pasos: ["Corta la panceta.", "Fríe a fuego lento y luego a fuego fuerte."]
  },
  {
    titulo: "Berenjenas fritas con miel de caña",
    categoria: "Aperitivo",
    tiempo: "40 min",
    imagen: "berenjenas-miel.jpg",
    ingredientes: ["2 berenjenas", "Harina", "Aceite", "Sal", "Miel de caña"],
    pasos: ["Corta las berenjenas y remójalas en agua con sal.", "Enharina y fríe.", "Sirve con miel."]
  },
  {
    titulo: "Tortilla francesa mini",
    categoria: "Aperitivo",
    tiempo: "15 min",
    imagen: "tortilla-francesa-mini.jpg",
    ingredientes: ["4 huevos", "Aceite", "Sal", "Pimienta"],
    pasos: ["Bate los huevos.", "Haz varias mini tortillas en una sartén."]
  },
  {
    titulo: "Banderillas variadas",
    categoria: "Aperitivo",
    tiempo: "10 min",
    imagen: "banderillas.jpg",
    ingredientes: ["Pepinillos", "Cebolletas", "Aceitunas", "Guindillas", "Anchoas"],
    pasos: ["Ensarta los ingredientes en palillos."]
  },
  {
    titulo: "Mejillones en escabeche",
    categoria: "Aperitivo",
    tiempo: "1 h",
    imagen: "mejillones-escabeche.jpg",
    ingredientes: ["1 kg de mejillones", "Aceite", "Vinagre", "Ajo", "Laurel", "Pimentón", "Sal"],
    pasos: ["Abre los mejillones al vapor.", "Prepara el escabeche y viértelo sobre ellos."]
  },
  {
    titulo: "Sardinas marinadas",
    categoria: "Aperitivo",
    tiempo: "4 h",
    imagen: "sardinas-marinadas.jpg",
    ingredientes: ["500 g de sardinas", "Vinagre", "Agua", "Sal", "Aceite", "Perejil"],
    pasos: ["Limpia las sardinas.", "Marínalas en vinagre y agua.", "Cubre con aceite y perejil."]
  },
  {
    titulo: "Pulpo a la gallega (tapa)",
    categoria: "Aperitivo",
    tiempo: "35 min",
    imagen: "pulpo-gallega.jpg",
    ingredientes: ["500 g de pulpo cocido", "3 patatas", "Aceite", "Pimentón", "Sal gorda"],
    pasos: ["Cuece las patatas.", "Corta el pulpo.", "Sirve el pulpo sobre las patatas y aliña."]
  },
  {
    titulo: "Jamón ibérico con picos",
    categoria: "Aperitivo",
    tiempo: "5 min",
    imagen: "jamon-iberico-picos.jpg",
    ingredientes: ["200 g de jamón ibérico", "Picos de pan"],
    pasos: ["Dispón el jamón en un plato y acompaña con picos."]
  },
  {
    titulo: "Queso manchego con membrillo",
    categoria: "Aperitivo",
    tiempo: "10 min",
    imagen: "queso-membrillo.jpg",
    ingredientes: ["200 g de queso manchego", "100 g de dulce de membrillo"],
    pasos: ["Corta el queso y el membrillo y monta pequeños bocados."]
  },
  {
    titulo: "Pimientos del padrón",
    categoria: "Aperitivo",
    tiempo: "15 min",
    imagen: "pimientos-padron.jpg",
    ingredientes: ["300 g de pimientos del padrón", "Aceite", "Sal gorda"],
    pasos: ["Fríe los pimientos y añade sal gorda."]
  },
  {
    titulo: "Montadito de lomo",
    categoria: "Aperitivo",
    tiempo: "20 min",
    imagen: "montadito-lomo.jpg",
    ingredientes: ["4 panecillos", "4 filetes de lomo adobado", "Queso"],
    pasos: ["Tuesta el pan.", "Haz el lomo a la plancha.", "Monta los bocadillos."]
  },
  {
    titulo: "Montadito de pringá",
    categoria: "Aperitivo",
    tiempo: "25 min",
    imagen: "montadito-pringa.jpg",
    ingredientes: ["4 panecillos", "Carne desmenuzada de cocido", "Caldo"],
    pasos: ["Mezcla la carne con caldo.", "Rellena los panecillos."]
  },
  {
    titulo: "Bonito con tomate (tapa)",
    categoria: "Aperitivo",
    tiempo: "30 min",
    imagen: "bonito-tomate-tapa.jpg",
    ingredientes: ["300 g de bonito fresco", "200 g de tomate frito", "1 cebolla", "Aceite", "Sal"],
    pasos: ["Pocha la cebolla.", "Añade el bonito y el tomate.", "Cocina a fuego bajo."]
  },
  {
    titulo: "Pisto con huevo (tapa)",
    categoria: "Aperitivo",
    tiempo: "45 min",
    imagen: "pisto-huevo-tapa.jpg",
    ingredientes: ["Verduras para pisto", "2 huevos", "Aceite", "Sal"],
    pasos: ["Prepara el pisto.", "Sirve en cazuelitas con un huevo frito encima."]
  },
  {
    titulo: "Chistorra a la sidra",
    categoria: "Aperitivo",
    tiempo: "25 min",
    imagen: "chistorra-sidra.jpg",
    ingredientes: ["300 g de chistorra", "200 ml de sidra natural"],
    pasos: ["Corta y dora la chistorra.", "Añade la sidra y deja reducir."]
  },
  {
    titulo: "Calamares a la romana",
    categoria: "Aperitivo",
    tiempo: "25 min",
    imagen: "calamares-romana.jpg",
    ingredientes: ["500 g de anillas de calamar", "150 g de harina", "1 huevo", "150 ml de agua con gas o cerveza", "Sal", "Aceite para freír"],
    pasos: ["Secar bien las anillas de calamar.", "Preparar una masa mezclando harina, huevo y agua con gas. Sazonar.", "Pasar las anillas por la masa y freír en aceite caliente (180ºC) hasta que estén doradas.", "Escurrir sobre papel absorbente y servir con limón."]
  },
  {
    titulo: "Berenjena frita con miel",
    categoria: "Aperitivo",
    tiempo: "30 min",
    imagen: "berenjena-frita-miel.jpg",
    ingredientes: ["1 berenjena grande", "Harina de trigo", "Sal", "Aceite de oliva", "Miel de caña"],
    pasos: ["Cortar la berenjena en bastones o rodajas finas.", "Poner en remojo con agua y sal durante 20 minutos para quitar amargor. Escurrir y secar bien.", "Pasar los trozos por harina, sacudiendo el exceso.", "Freír en abundante aceite caliente hasta que estén doradas y crujientes.", "Servir inmediatamente rociadas con un hilo de miel de caña."]
  },

  // --- PRIMEROS (40 Recetas) ---
  { titulo: "Sopa de ajo", categoria: "Primero", tiempo: "30 min", imagen: "sopa-ajo.jpg", ingredientes: ["6 dientes de ajo", "150 g de pan duro", "1 litro de caldo de pollo", "Pimentón", "4 huevos", "Aceite", "Sal"], pasos: ["Sofríe ajos y pan.", "Añade pimentón y caldo.", "Hierve y añade los huevos."] },
  { titulo: "Sopa castellana", categoria: "Primero", tiempo: "35 min", imagen: "sopa-castellana.jpg", ingredientes: ["8 dientes de ajo", "150 g de pan duro", "100 g de jamón", "1 litro de caldo", "Pimentón", "4 huevos", "Aceite", "Sal"], pasos: ["Sofríe ajos, jamón y pan.", "Añade pimentón y caldo.", "Hierve y cuaja los huevos."] },
  { titulo: "Gazpacho andaluz", categoria: "Primero", tiempo: "20 min", imagen: "gazpacho-andaluz.jpg", ingredientes: ["1 kg de tomates", "Pepino", "Pimiento", "Ajo", "Pan", "Aceite", "Vinagre", "Sal"], pasos: ["Tritura todos los ingredientes.", "Enfría y sirve."] },
  { titulo: "Salmorejo cordobés", categoria: "Primero", tiempo: "25 min", imagen: "salmorejo-cordobes.jpg", ingredientes: ["1 kg de tomates", "200 g de pan", "Ajo", "Aceite", "Sal", "Jamón", "Huevo duro"], pasos: ["Tritura los ingredientes.", "Enfría y decora."] },
  { titulo: "Ajoblanco", categoria: "Primero", tiempo: "20 min", imagen: "ajoblanco.jpg", ingredientes: ["150 g de almendras", "100 g de pan", "Ajo", "Agua", "Aceite", "Vinagre", "Sal", "Uvas"], pasos: ["Tritura los ingredientes.", "Enfría y sirve con uvas."] },
  { titulo: "Crema de calabaza", categoria: "Primero", tiempo: "40 min", imagen: "crema-calabaza.jpg", ingredientes: ["1 kg de calabaza", "2 zanahorias", "1 cebolla", "1 patata", "Caldo", "Aceite", "Sal", "Pimienta"], pasos: ["Sofríe las verduras.", "Cubre con caldo y cuece.", "Tritura y sirve."] },
  { titulo: "Crema de puerros", categoria: "Primero", tiempo: "35 min", imagen: "crema-puerros.jpg", ingredientes: ["4 puerros", "2 patatas", "Caldo", "Nata", "Aceite", "Sal", "Pimienta"], pasos: ["Sofríe los puerros.", "Añade patatas y caldo.", "Cuece, tritura y añade nata."] },
  { titulo: "Crema de champiñón", categoria: "Primero", tiempo: "35 min", imagen: "crema-champinon.jpg", ingredientes: ["400 g de champiñones", "1 cebolla", "2 patatas", "Caldo", "Aceite", "Sal", "Pimienta"], pasos: ["Pocha la cebolla.", "Añade champiñones y patatas.", "Cubre con caldo, cuece y tritura."] },
  { titulo: "Pisto manchego", categoria: "Primero", tiempo: "50 min", imagen: "pisto-manchego.jpg", ingredientes: ["Calabacín", "Berenjena", "Pimientos", "Cebolla", "Tomates", "Aceite", "Sal"], pasos: ["Corta y pocha las verduras.", "Añade tomate y cocina a fuego lento."] },
  { titulo: "Menestra de verduras", categoria: "Primero", tiempo: "45 min", imagen: "menestra-verduras.jpg", ingredientes: ["Judías verdes", "Guisantes", "Zanahorias", "Alcachofa", "Patata", "Huevos duros", "Aceite", "Sal"], pasos: ["Cuece las verduras por separado.", "Saltéalas juntas y sirve con huevo duro."] },
  { titulo: "Lentejas estofadas", categoria: "Primero", tiempo: "1 h", imagen: "lentejas-estofadas.jpg", ingredientes: ["300 g de lentejas", "Verduras", "Laurel", "Aceite", "Pimentón", "Sal"], pasos: ["Cuece las lentejas con las verduras enteras.", "Tritura las verduras y añádelas al guiso."] },
  { titulo: "Garbanzos con espinacas", categoria: "Primero", tiempo: "50 min", imagen: "garbanzos-espinacas.jpg", ingredientes: ["300 g de garbanzos cocidos", "200 g de espinacas", "Pan frito", "Ajo", "Comino", "Aceite", "Sal"], pasos: ["Prepara un majado con pan, ajo y comino.", "Añádelo a los garbanzos y espinacas y cocina."] },
  { titulo: "Judías blancas con verduras", categoria: "Primero", tiempo: "1 h", imagen: "judias-blancas-verduras.jpg", ingredientes: ["300 g de judías blancas", "Verduras", "Laurel", "Aceite", "Sal"], pasos: ["Cuece las judías con las verduras troceadas."] },
  { titulo: "Arroz caldoso de verduras", categoria: "Primero", tiempo: "40 min", imagen: "arroz-caldoso-verduras.jpg", ingredientes: ["300 g de arroz", "Verduras", "Caldo", "Aceite", "Sal"], pasos: ["Sofríe las verduras.", "Añade el arroz y el caldo.", "Cocina 18 minutos."] },
  { titulo: "Arroz a la cubana", categoria: "Primero", tiempo: "30 min", imagen: "arroz-cubana.jpg", ingredientes: ["300 g de arroz", "2 plátanos", "2 huevos", "Tomate frito", "Aceite", "Sal"], pasos: ["Cuece el arroz.", "Fríe los plátanos y los huevos.", "Sirve todo junto."] },
  { titulo: "Arroz negro", categoria: "Primero", tiempo: "40 min", imagen: "arroz-negro.jpg", ingredientes: ["300 g de arroz", "Tinta de calamar", "Calamares", "Cebolla", "Tomate", "Caldo", "Aceite", "Sal"], pasos: ["Sofríe las verduras y calamares.", "Añade el arroz, la tinta y el caldo.", "Cocina 18 minutos."] },
  { titulo: "Arroz al horno", categoria: "Primero", tiempo: "50 min", imagen: "arroz-horno.jpg", ingredientes: ["300 g de arroz", "Costilla", "Morcilla", "Patata", "Tomate", "Ajos", "Caldo", "Aceite", "Sal"], pasos: ["Fríe la carne.", "Coloca todo en una cazuela de barro y hornea."] },
  { titulo: "Paella de verduras", categoria: "Primero", tiempo: "50 min", imagen: "paella-verduras.jpg", ingredientes: ["300 g de arroz", "Verduras", "Caldo", "Aceite", "Azafrán", "Sal"], pasos: ["Sofríe las verduras.", "Añade el arroz y el caldo.", "Cocina 18 minutos."] },
  { titulo: "Fideuá de pescado", categoria: "Primero", tiempo: "45 min", imagen: "fideua-pescado.jpg", ingredientes: ["300 g de fideos", "Sepia", "Gambas", "Tomate", "Cebolla", "Caldo", "Aceite", "Sal"], pasos: ["Sofríe las verduras y el marisco.", "Añade los fideos y el caldo.", "Cocina 15 minutos."] },
  { titulo: "Macarrones con tomate", categoria: "Primero", tiempo: "25 min", imagen: "macarrones-tomate.jpg", ingredientes: ["300 g de macarrones", "Tomate frito", "Queso rallado", "Aceite", "Sal"], pasos: ["Cuece los macarrones.", "Mezcla con tomate, espolvorea queso y gratina."] },
  { titulo: "Tallarines al ajillo", categoria: "Primero", tiempo: "25 min", imagen: "tallarines-ajillo.jpg", ingredientes: ["300 g de tallarines", "Ajo", "Aceite", "Guindilla", "Perejil", "Sal"], pasos: ["Cuece la pasta.", "Sofríe los ajos y saltea la pasta."] },
  { titulo: "Espaguetis carbonara ligera", categoria: "Primero", tiempo: "30 min", imagen: "espaguetis-carbonara.jpg", ingredientes: ["300 g de espaguetis", "Jamón o bacon", "2 huevos", "Queso parmesano", "Aceite", "Sal", "Pimienta"], pasos: ["Cuece la pasta.", "Mezcla con el huevo batido, queso y bacon caliente."] },
  { titulo: "Ensalada mixta", categoria: "Primero", tiempo: "15 min", imagen: "ensalada-mixta.jpg", ingredientes: ["Lechuga", "Tomate", "Cebolla", "Atún", "Huevos duros", "Aceitunas", "Aliño"], pasos: ["Mezcla todos los ingredientes y aliña."] },
  { titulo: "Ensalada campera", categoria: "Primero", tiempo: "25 min", imagen: "ensalada-campera.jpg", ingredientes: ["Patatas cocidas", "Huevos duros", "Pimientos", "Cebolla", "Tomates", "Aceitunas", "Aliño"], pasos: ["Mezcla todos los ingredientes y aliña."] },
  { titulo: "Ensalada de garbanzos", categoria: "Primero", tiempo: "15 min", imagen: "ensalada-garbanzos.jpg", ingredientes: ["Garbanzos cocidos", "Pimiento", "Pepino", "Tomate", "Cebolla", "Aliño"], pasos: ["Mezcla todos los ingredientes y aliña."] },
  { titulo: "Ensalada de pasta fría", categoria: "Primero", tiempo: "20 min", imagen: "ensalada-pasta.jpg", ingredientes: ["Pasta cocida", "Jamón cocido", "Queso", "Zanahoria", "Maíz", "Aliño"], pasos: ["Mezcla todos los ingredientes y aliña."] },
  { titulo: "Tomates aliñados", categoria: "Primero", tiempo: "10 min", imagen: "tomates-alinados.jpg", ingredientes: ["Tomates", "Ajo", "Aceite", "Vinagre", "Orégano", "Sal"], pasos: ["Corta los tomates en rodajas y aliña."] },
  { titulo: "Papas arrugadas con mojo", categoria: "Primero", tiempo: "35 min", imagen: "papas-arrugadas.jpg", ingredientes: ["Papas pequeñas", "Sal gorda", "Mojo verde", "Mojo rojo"], pasos: ["Cuece las papas con mucha sal.", "Sirve con los mojos."] },
  { titulo: "Pimientos asados", categoria: "Primero", tiempo: "50 min", imagen: "pimientos-asados.jpg", ingredientes: ["Pimientos rojos", "Ajo", "Aceite", "Sal"], pasos: ["Asa los pimientos en el horno.", "Pélalos, córtalos en tiras y aliña."] },
  { titulo: "Alcachofas salteadas", categoria: "Primero", tiempo: "35 min", imagen: "alcachofas-salteadas.jpg", ingredientes: ["Alcachofas", "Ajo", "Limón", "Aceite", "Sal", "Pimienta"], pasos: ["Limpia y cuece las alcachofas.", "Saltéalas con ajo."] },
  { titulo: "Acelgas rehogadas", categoria: "Primero", tiempo: "25 min", imagen: "acelgas-rehogadas.jpg", ingredientes: ["Acelgas", "Ajo", "Aceite", "Sal", "Pimienta"], pasos: ["Cuece las acelgas.", "Rehógalas con ajo."] },
  { titulo: "Sopa de pescado", categoria: "Primero", tiempo: "45 min", imagen: "sopa-pescado.jpg", ingredientes: ["Pescado de roca", "Gambas", "Verduras", "Agua", "Aceite", "Sal"], pasos: ["Prepara un caldo con el pescado y verduras.", "Cuela y añade las gambas."] },
  { titulo: "Caldo gallego", categoria: "Primero", tiempo: "1 h", imagen: "caldo-gallego.jpg", ingredientes: ["Grelos", "Patatas", "Alubias", "Chorizo", "Hueso de jamón", "Agua", "Sal"], pasos: ["Cuece todos los ingredientes a fuego lento."] },
  { titulo: "Cocido andaluz (sopa)", categoria: "Primero", tiempo: "2 h 30 min", imagen: "cocido-andaluz.jpg", ingredientes: ["Garbanzos", "Carnes", "Verduras", "Sal"], pasos: ["Cuece todos los ingredientes.", "Cuela el caldo para la sopa."] },
  { titulo: "Sopa minestrone", categoria: "Primero", tiempo: "50 min", imagen: "sopa-minestrone.jpg", ingredientes: ["Judías", "Verduras", "Pasta corta", "Caldo", "Aceite", "Sal"], pasos: ["Sofríe las verduras.", "Añade el caldo y la pasta."] },
  { titulo: "Vichyssoise", categoria: "Primero", tiempo: "40 min", imagen: "vichyssoise.jpg", ingredientes: ["Puerros", "Patatas", "Cebolla", "Caldo", "Nata", "Mantequilla", "Sal", "Pimienta"], pasos: ["Pocha las verduras.", "Añade caldo, cuece, tritura y añade nata.", "Sirve fría."] },
  { titulo: "Crema de zanahoria", categoria: "Primero", tiempo: "35 min", imagen: "crema-zanahoria.jpg", ingredientes: ["Zanahorias", "Patatas", "Cebolla", "Caldo", "Aceite", "Sal", "Pimienta"], pasos: ["Pocha las verduras.", "Añade caldo, cuece y tritura."] },
  { titulo: "Porrusalda", categoria: "Primero", tiempo: "40 min", imagen: "porrusalda.jpg", ingredientes: ["Puerros", "Zanahorias", "Patatas", "Caldo", "Aceite", "Sal"], pasos: ["Cuece todas las verduras en el caldo."] },
  { titulo: "Sopa de marisco", categoria: "Primero", tiempo: "45 min", imagen: "sopa-marisco.jpg", ingredientes: ["Gambas", "Mejillones", "Almejas", "Verduras", "Caldo", "Aceite", "Sal"], pasos: ["Abre el marisco.", "Sofríe las verduras y añade el caldo y el marisco."] },
  { titulo: "Caldo de pollo casero", categoria: "Primero", tiempo: "1 h 30 min", imagen: "caldo-pollo.jpg", ingredientes: ["Pollo", "Verduras", "Agua", "Sal"], pasos: ["Cuece todos los ingredientes a fuego lento y cuela."] },

  // --- SEGUNDOS (40 Recetas) ---
  { titulo: "Pollo al ajillo", categoria: "Segundo", tiempo: "50 min", imagen: "pollo-ajillo.jpg", ingredientes: ["Pollo", "Ajos", "Vino blanco", "Aceite", "Sal", "Pimienta", "Perejil"], pasos: ["Dora el pollo y los ajos.", "Añade el vino y cocina a fuego lento."] },
  { titulo: "Pollo al horno con patatas", categoria: "Segundo", tiempo: "1 h 15 min", imagen: "pollo-horno.jpg", ingredientes: ["Pollo entero", "Patatas", "Cebollas", "Ajos", "Vino blanco", "Aceite", "Sal", "Pimienta", "Hierbas"], pasos: ["Coloca todo en una bandeja y hornea."] },
  { titulo: "Pollo en pepitoria", categoria: "Segundo", tiempo: "1 h 10 min", imagen: "pollo-pepitoria.jpg", ingredientes: ["Pollo", "Cebollas", "Ajos", "Almendras", "Yemas de huevo duro", "Vino blanco", "Caldo", "Harina", "Aceite", "Sal", "Azafrán"], pasos: ["Dora el pollo.", "Prepara una salsa con el resto de ingredientes y cocina todo junto."] },
  { titulo: "Pechuga de pollo a la plancha", categoria: "Segundo", tiempo: "20 min", imagen: "pechuga-plancha.jpg", ingredientes: ["Pechugas de pollo", "Aceite", "Sal", "Pimienta", "Limón"], pasos: ["Cocina los filetes a la plancha y sazona."] },
  { titulo: "Escalope de ternera", categoria: "Segundo", tiempo: "30 min", imagen: "escalope-ternera.jpg", ingredientes: ["Filetes de ternera", "Huevos", "Pan rallado", "Harina", "Aceite", "Sal", "Pimienta"], pasos: ["Empana los filetes y fríelos."] },
  { titulo: "Filete de ternera a la plancha", categoria: "Segundo", tiempo: "15 min", imagen: "filete-ternera-plancha.jpg", ingredientes: ["Filetes de ternera", "Aceite", "Sal en escamas", "Pimienta"], pasos: ["Cocina los filetes a la plancha y sazona."] },
  { titulo: "Carrilleras al vino tinto", categoria: "Segundo", tiempo: "2 h 30 min", imagen: "carrilleras-vino-tinto.jpg", ingredientes: ["Carrilleras", "Verduras", "Vino tinto", "Caldo", "Harina", "Aceite", "Sal", "Pimienta", "Laurel"], pasos: ["Dora las carrilleras.", "Pocha las verduras y cocina todo junto a fuego lento."] },
  { titulo: "Rabo de toro", categoria: "Segundo", tiempo: "3 h 30 min", imagen: "rabo-toro.jpg", ingredientes: ["Rabo de toro", "Verduras", "Vino tinto", "Caldo", "Harina", "Aceite", "Sal", "Pimienta", "Laurel"], pasos: ["Dora el rabo.", "Pocha las verduras y cocina todo junto a fuego muy lento."] },
  { titulo: "Albóndigas en salsa", categoria: "Segundo", tiempo: "1 h", imagen: "albondigas-salsa.jpg", ingredientes: ["Carne picada", "Huevo", "Pan", "Ajo", "Perejil", "Harina", "Cebolla", "Tomate", "Caldo", "Aceite", "Sal", "Pimienta"], pasos: ["Forma las albóndigas y fríelas.", "Prepara una salsa y cocina las albóndigas en ella."] },
  { titulo: "Lomo adobado", categoria: "Segundo", tiempo: "4 h 20 min", imagen: "lomo-adobado.jpg", ingredientes: ["Lomo de cerdo", "Adobo", "Aceite"], pasos: ["Adoba el lomo y deja reposar.", "Fríe los filetes."] },
  { titulo: "Costillas al horno", categoria: "Segundo", tiempo: "1 h 30 min", imagen: "costillas-horno.jpg", ingredientes: ["Costillas de cerdo", "Adobo (miel, mostaza, soja...)", "Aceite", "Sal", "Pimienta"], pasos: ["Adoba las costillas y hornéalas."] },
  { titulo: "Chuletillas de cordero", categoria: "Segundo", tiempo: "20 min", imagen: "chuletillas-cordero.jpg", ingredientes: ["Chuletillas de cordero", "Ajo", "Romero", "Aceite", "Sal", "Pimienta"], pasos: ["Marina y cocina las chuletillas a la plancha."] },
  { titulo: "Cordero asado", categoria: "Segundo", tiempo: "2 h", imagen: "cordero-asado.jpg", ingredientes: ["Pierna de cordero", "Ajos", "Vino blanco", "Agua", "Romero", "Aceite", "Sal", "Pimienta"], pasos: ["Coloca todo en una bandeja y hornea lentamente."] },
  { titulo: "Secreto ibérico a la plancha", categoria: "Segundo", tiempo: "25 min", imagen: "secreto-iberico.jpg", ingredientes: ["Secreto ibérico", "Sal en escamas", "Pimienta", "Aceite"], pasos: ["Cocina la pieza a la plancha y filetea."] },
  { titulo: "Solomillo al roquefort", categoria: "Segundo", tiempo: "40 min", imagen: "solomillo-roquefort.jpg", ingredientes: ["Solomillo", "Queso roquefort", "Nata", "Mantequilla", "Aceite", "Sal", "Pimienta"], pasos: ["Dora el solomillo.", "Prepara la salsa y cocina todo junto."] },
  { titulo: "Bacalao a la vizcaína", categoria: "Segundo", tiempo: "50 min", imagen: "bacalao-vizcaina.jpg", ingredientes: ["Bacalao desalado", "Cebollas", "Pimientos choriceros", "Tomates", "Ajo", "Aceite", "Sal"], pasos: ["Prepara la salsa vizcaína y cocina el bacalao en ella."] },
  { titulo: "Bacalao al pil-pil", categoria: "Segundo", tiempo: "40 min", imagen: "bacalao-pilpil.jpg", ingredientes: ["Bacalao desalado", "Aceite", "Ajos", "Guindilla", "Sal"], pasos: ["Cocina el bacalao en aceite a fuego suave moviendo la cazuela para emulsionar la salsa."] },
  { titulo: "Merluza en salsa verde", categoria: "Segundo", tiempo: "30 min", imagen: "merluza-salsa-verde.jpg", ingredientes: ["Merluza", "Caldo de pescado", "Ajo", "Perejil", "Aceite", "Sal"], pasos: ["Sofríe los ajos.", "Añade el caldo y cocina la merluza.", "Espolvorea perejil."] },
  { titulo: "Dorada al horno", categoria: "Segundo", tiempo: "40 min", imagen: "dorada-horno.jpg", ingredientes: ["Doradas", "Patatas", "Cebolla", "Ajo", "Vino blanco", "Aceite", "Sal", "Pimienta"], pasos: ["Hornea las patatas y cebolla primero.", "Añade el pescado y el vino y termina de hornear."] },
  { titulo: "Lubina a la sal", categoria: "Segundo", tiempo: "45 min", imagen: "lubina-sal.jpg", ingredientes: ["Lubina", "Sal gorda", "Claras de huevo"], pasos: ["Cubre la lubina con una mezcla de sal y claras.", "Hornea, rompe la costra y sirve."] },
  { titulo: "Salmón al papillote", categoria: "Segundo", tiempo: "30 min", imagen: "salmon-papillote.jpg", ingredientes: ["Salmón", "Verduras", "Limón", "Aceite", "Eneldo", "Sal", "Pimienta"], pasos: ["Envuelve el salmón con las verduras en papel de horno y hornea."] },
  { titulo: "Atún encebollado", categoria: "Segundo", tiempo: "40 min", imagen: "atun-encebollado.jpg", ingredientes: ["Atún fresco", "Cebollas", "Ajo", "Vino blanco", "Aceite", "Sal", "Pimienta", "Laurel"], pasos: ["Pocha la cebolla.", "Añade el vino y luego el atún y cocina brevemente."] },
  { titulo: "Calamares en su tinta", categoria: "Segundo", tiempo: "1 h", imagen: "calamares-tinta.jpg", ingredientes: ["Calamares", "Cebollas", "Tomates", "Ajo", "Tinta de calamar", "Vino blanco", "Aceite", "Sal"], pasos: ["Prepara un sofrito.", "Añade los calamares, el vino y la tinta y cocina a fuego lento."] },
  { titulo: "Pulpo a la gallega", categoria: "Segundo", tiempo: "1 h", imagen: "pulpo-gallega.jpg", ingredientes: ["Pulpo", "Patatas", "Pimentón", "Aceite", "Sal gorda"], pasos: ["Cuece el pulpo y las patatas.", "Sirve en rodajas con aliño."] },
  { titulo: "Paella mixta", categoria: "Segundo", tiempo: "1 h", imagen: "paella-mixta.jpg", ingredientes: ["Arroz", "Pollo", "Conejo", "Marisco", "Verduras", "Caldo", "Azafrán", "Aceite", "Sal"], pasos: ["Sofríe carnes y verduras.", "Añade el arroz, el caldo y el marisco y cocina."] },
  { titulo: "Arroz con pollo", categoria: "Segundo", tiempo: "50 min", imagen: "arroz-pollo.jpg", ingredientes: ["Arroz", "Pollo", "Verduras", "Caldo", "Azafrán", "Aceite", "Sal"], pasos: ["Sofríe el pollo y las verduras.", "Añade el arroz y el caldo y cocina."] },
  { titulo: "Arroz con bogavante", categoria: "Segundo", tiempo: "1 h", imagen: "arroz-bogavante.jpg", ingredientes: ["Bogavante", "Arroz", "Verduras", "Caldo", "Aceite", "Pimentón", "Sal"], pasos: ["Sofríe el bogavante.", "Prepara un sofrito, añade el arroz, el caldo y el bogavante y cocina."] },
  { titulo: "Empanada gallega de atún", categoria: "Segundo", tiempo: "1 h 20 min", imagen: "empanada-gallega.jpg", ingredientes: ["Masa de empanada", "Atún", "Pimientos", "Cebollas", "Tomates", "Huevos duros", "Aceite", "Sal"], pasos: ["Prepara el relleno.", "Monta la empanada y hornéala."] },
  { titulo: "Pisto con huevos", categoria: "Segundo", tiempo: "45 min", imagen: "pisto-huevos.jpg", ingredientes: ["Verduras para pisto", "Huevos", "Aceite", "Sal"], pasos: ["Prepara el pisto.", "Casca los huevos encima y cocina hasta que cuajen."] },
  { titulo: "Tortilla de patatas", categoria: "Segundo", tiempo: "40 min", imagen: "tortilla-patatas.jpg", ingredientes: ["Patatas", "Cebolla", "Huevos", "Aceite", "Sal"], pasos: ["Fríe las patatas y cebolla.", "Mezcla con huevo y cuaja la tortilla."] },
  { titulo: "Revuelto de setas", categoria: "Segundo", tiempo: "25 min", imagen: "revuelto-setas.jpg", ingredientes: ["Setas", "Huevos", "Ajo", "Aceite", "Sal", "Pimienta", "Perejil"], pasos: ["Saltea las setas con ajo.", "Añade los huevos batidos y remueve."] },
  { titulo: "Conejo al ajillo", categoria: "Segundo", tiempo: "50 min", imagen: "conejo-ajillo.jpg", ingredientes: ["Conejo", "Ajos", "Vino blanco", "Aceite", "Sal", "Pimienta", "Tomillo"], pasos: ["Dora el conejo y los ajos.", "Añade el vino y cocina a fuego lento."] },
  { titulo: "Codornices escabechadas", categoria: "Segundo", tiempo: "1 h 30 min", imagen: "codornices-escabechadas.jpg", ingredientes: ["Codornices", "Verduras", "Vino blanco", "Vinagre", "Agua", "Aceite", "Laurel", "Pimienta", "Sal"], pasos: ["Dora las codornices.", "Prepara el escabeche y cocina todo junto."] },
  { titulo: "Callos a la madrileña", categoria: "Segundo", tiempo: "3 h", imagen: "callos-madrilena.jpg", ingredientes: ["Callos de ternera", "Chorizo", "Morcilla", "Jamón", "Cebolla", "Pimiento choricero", "Ajo", "Laurel", "Guindilla", "Pimentón", "Aceite", "Sal"], pasos: ["Cuece los callos.", "Prepara un sofrito con el resto de ingredientes y cocina todo junto."] },
  { titulo: "Fabada asturiana", categoria: "Segundo", tiempo: "2 h 30 min", imagen: "fabada-asturiana.jpg", ingredientes: ["Fabes", "Chorizo", "Morcilla", "Panceta", "Hueso de jamón", "Laurel", "Azafrán", "Agua", "Sal"], pasos: ["Cuece todos los ingredientes a fuego lento."] },
  { titulo: "Marmitako de bonito", categoria: "Segundo", tiempo: "1 h", imagen: "marmitako.jpg", ingredientes: ["Bonito", "Patatas", "Pimientos", "Cebolla", "Tomates", "Vino blanco", "Caldo", "Aceite", "Sal"], pasos: ["Prepara un guiso con las patatas y verduras.", "Añade el bonito al final."] },
  { titulo: "Chuletón a la plancha", categoria: "Segundo", tiempo: "20 min", imagen: "chuleton.jpg", ingredientes: ["Chuletón de vaca", "Aceite", "Sal gorda", "Pimienta"], pasos: ["Cocina el chuletón a la plancha muy caliente.", "Sazona al final."] },
  { titulo: "Escabeche de caballa", categoria: "Segundo", tiempo: "1 h", imagen: "escabeche-caballa.jpg", ingredientes: ["Caballa", "Verduras", "Vinagre", "Agua", "Vino blanco", "Aceite", "Laurel", "Pimienta", "Sal"], pasos: ["Fríe la caballa.", "Prepara el escabeche y cocina todo junto."] },
  { titulo: "Bonito con tomate", categoria: "Segundo", tiempo: "45 min", imagen: "bonito-tomate.jpg", ingredientes: ["Bonito fresco", "Cebolla", "Tomates", "Ajo", "Aceite", "Sal", "Pimienta"], pasos: ["Prepara una salsa de tomate y cocina el bonito en ella."] },
  { titulo: "Trucha a la navarra", categoria: "Segundo", tiempo: "30 min", imagen: "trucha-navarra.jpg", ingredientes: ["Truchas", "Jamón serrano", "Harina", "Aceite", "Sal"], pasos: ["Rellena las truchas con jamón, enharina y fríe."] },

  // --- POSTRES (40 Recetas) ---
  { titulo: "Flan casero", categoria: "Postre", tiempo: "1 h", imagen: "flan-casero.jpg", ingredientes: ["Leche", "Huevos", "Azúcar", "Canela", "Limón", "Caramelo líquido"], pasos: ["Prepara la mezcla del flan.", "Hornea al baño maría sobre un molde caramelizado."] },
  { titulo: "Natillas caseras", categoria: "Postre", tiempo: "40 min", imagen: "natillas.jpg", ingredientes: ["Leche", "Yemas de huevo", "Azúcar", "Canela", "Limón", "Maicena", "Galletas María"], pasos: ["Prepara la crema a fuego lento.", "Sirve con una galleta y canela."] },
  { titulo: "Arroz con leche", categoria: "Postre", tiempo: "1 h 10 min", imagen: "arroz-con-leche.jpg", ingredientes: ["Arroz", "Leche", "Azúcar", "Canela", "Limón"], pasos: ["Cuece el arroz con la leche y los aromas a fuego muy lento."] },
  { titulo: "Leche frita", categoria: "Postre", tiempo: "1 h", imagen: "leche-frita.jpg", ingredientes: ["Leche", "Azúcar", "Maicena", "Canela", "Limón", "Harina", "Huevo", "Aceite"], pasos: ["Prepara una crema espesa, enfría, corta, reboza y fríe."] },
  { titulo: "Torrijas", categoria: "Postre", tiempo: "40 min", imagen: "torrijas.jpg", ingredientes: ["Pan", "Leche", "Azúcar", "Canela", "Limón", "Huevos", "Aceite"], pasos: ["Empapa el pan en leche, reboza en huevo y fríe."] },
  { titulo: "Crema catalana", categoria: "Postre", tiempo: "45 min", imagen: "crema-catalana.jpg", ingredientes: ["Leche", "Yemas", "Azúcar", "Maicena", "Limón", "Canela", "Azúcar para quemar"], pasos: ["Prepara la crema.", "Cubre con azúcar y quema la superficie."] },
  { titulo: "Tarta de queso al horno", categoria: "Postre", tiempo: "1 h 20 min", imagen: "tarta-queso-horno.jpg", ingredientes: ["Queso crema", "Nata", "Azúcar", "Huevos", "Harina", "Base de galletas"], pasos: ["Mezcla los ingredientes y hornea sobre la base de galletas."] },
  { titulo: "Tarta de Santiago", categoria: "Postre", tiempo: "1 h", imagen: "tarta-santiago.jpg", ingredientes: ["Almendra molida", "Azúcar", "Huevos", "Ralladura de limón", "Azúcar glas"], pasos: ["Mezcla los ingredientes, hornea y decora."] },
  { titulo: "Bizcocho de yogur", categoria: "Postre", tiempo: "45 min", imagen: "bizcocho-yogur.jpg", ingredientes: ["Yogur", "Harina", "Azúcar", "Aceite", "Huevos", "Levadura", "Limón"], pasos: ["Mezcla todos los ingredientes y hornea."] },
  { titulo: "Bizcocho de naranja", categoria: "Postre", tiempo: "50 min", imagen: "bizcocho-naranja.jpg", ingredientes: ["Huevos", "Azúcar", "Harina", "Aceite", "Zumo y ralladura de naranja", "Levadura"], pasos: ["Mezcla todos los ingredientes y hornea."] },
  { titulo: "Magdalenas caseras", categoria: "Postre", tiempo: "35 min", imagen: "magdalenas.jpg", ingredientes: ["Huevos", "Azúcar", "Harina", "Aceite", "Leche", "Levadura", "Limón"], pasos: ["Prepara la masa y hornea en cápsulas."] },
  { titulo: "Galletas de mantequilla", categoria: "Postre", tiempo: "1 h", imagen: "galletas-mantequilla.jpg", ingredientes: ["Harina", "Mantequilla", "Azúcar glas", "Huevo", "Vainilla", "Sal"], pasos: ["Prepara la masa, enfría, corta y hornea."] },
  { titulo: "Rosquillas fritas", categoria: "Postre", tiempo: "50 min", imagen: "rosquillas-fritas.jpg", ingredientes: ["Huevos", "Harina", "Azúcar", "Leche", "Anís", "Limón", "Levadura", "Aceite"], pasos: ["Prepara la masa, forma las rosquillas y fríelas."] },
  { titulo: "Pestiños", categoria: "Postre", tiempo: "1 h", imagen: "pestinos.jpg", ingredientes: ["Harina", "Vino blanco", "Aceite", "Anís", "Naranja", "Miel"], pasos: ["Prepara la masa, forma los pestiños, fríe y baña en miel."] },
  { titulo: "Buñuelos de viento", categoria: "Postre", tiempo: "1 h", imagen: "bunuelos-viento.jpg", ingredientes: ["Leche", "Harina", "Mantequilla", "Huevos", "Azúcar", "Sal", "Aceite"], pasos: ["Prepara la masa, forma bolitas, fríe y reboza en azúcar."] },
  { titulo: "Filloas", categoria: "Postre", tiempo: "40 min", imagen: "filloas.jpg", ingredientes: ["Leche", "Huevos", "Harina", "Mantequilla", "Sal"], pasos: ["Prepara una masa líquida y cocina en una sartén fina."] },
  { titulo: "Peras al vino", categoria: "Postre", tiempo: "1 h", imagen: "peras-vino.jpg", ingredientes: ["Peras", "Vino tinto", "Azúcar", "Canela", "Naranja"], pasos: ["Cuece las peras peladas en el vino con los aromas."] },
  { titulo: "Compota de manzana", categoria: "Postre", tiempo: "35 min", imagen: "compota-manzana.jpg", ingredientes: ["Manzanas", "Azúcar", "Canela", "Agua", "Limón"], pasos: ["Cuece las manzanas troceadas con los demás ingredientes."] },
  { titulo: "Macedonia de frutas", categoria: "Postre", tiempo: "20 min", imagen: "macedonia.jpg", ingredientes: ["Frutas variadas", "Zumo de naranja", "Azúcar"], pasos: ["Trocea la fruta y mezcla con el zumo."] },
  { titulo: "Helado rápido de plátano", categoria: "Postre", tiempo: "15 min", imagen: "helado-platano.jpg", ingredientes: ["Plátanos congelados", "Nata", "Miel"], pasos: ["Bate los plátanos congelados con la nata y la miel."] },
  { titulo: "Mousse de chocolate", categoria: "Postre", tiempo: "3 h", imagen: "mousse-chocolate.jpg", ingredientes: ["Chocolate negro", "Huevos", "Azúcar", "Nata", "Sal"], pasos: ["Prepara la mezcla con cuidado e intégrala con movimientos envolventes.", "Refrigera."] },
  { titulo: "Natillas de vainilla", categoria: "Postre", tiempo: "40 min", imagen: "natillas-vainilla.jpg", ingredientes: ["Leche", "Yemas", "Azúcar", "Maicena", "Vainilla"], pasos: ["Prepara la crema a fuego lento.", "Sirve con una galleta y canela."] },
  { titulo: "Tarta de manzana", categoria: "Postre", tiempo: "1 h", imagen: "tarta-manzana.jpg", ingredientes: ["Masa quebrada", "Manzanas", "Azúcar", "Nata", "Huevos", "Mermelada"], pasos: ["Cubre la masa con una crema y láminas de manzana.", "Hornea y abrillanta con mermelada."] },
  { titulo: "Tarta tres leches (versión española)", categoria: "Postre", tiempo: "2 h", imagen: "tarta-tres-leches.jpg", ingredientes: ["Bizcocho", "Leche evaporada", "Leche condensada", "Nata"], pasos: ["Empapa el bizcocho en la mezcla de las tres leches.", "Refrigera."] },
  { titulo: "Brazo de gitano", categoria: "Postre", tiempo: "1 h", imagen: "brazo-gitano.jpg", ingredientes: ["Huevos", "Azúcar", "Harina", "Levadura", "Relleno", "Azúcar glas"], pasos: ["Hornea una plancha de bizcocho, rellena y enrolla."] },
  { titulo: "Quesada pasiega", categoria: "Postre", tiempo: "1 h", imagen: "quesada-pasiega.jpg", ingredientes: ["Queso fresco", "Huevos", "Azúcar", "Harina", "Mantequilla", "Canela", "Limón"], pasos: ["Bate todos los ingredientes y hornea."] },
  { titulo: "Tocino de cielo", categoria: "Postre", tiempo: "1 h 15 min", imagen: "tocino-cielo.jpg", ingredientes: ["Yemas de huevo", "Azúcar", "Agua", "Caramelo"], pasos: ["Mezcla un almíbar con las yemas.", "Hornea al baño maría."] },
  { titulo: "Pan de Calatrava", categoria: "Postre", tiempo: "1 h", imagen: "pan-calatrava.jpg", ingredientes: ["Huevos", "Leche", "Azúcar", "Bizcocho duro", "Caramelo", "Canela"], pasos: ["Similar a un flan pero con trozos de bizcocho.", "Hornea al baño maría."] },
  { titulo: "Cuajada con miel", categoria: "Postre", tiempo: "2 h", imagen: "cuajada-miel.jpg", ingredientes: ["Leche de oveja", "Cuajo", "Miel"], pasos: ["Calienta la leche, añade el cuajo y deja reposar.", "Sirve con miel."] },
  { titulo: "Crepes dulces", categoria: "Postre", tiempo: "30 min", imagen: "crepes-dulces.jpg", ingredientes: ["Leche", "Huevos", "Harina", "Mantequilla", "Azúcar", "Sal"], pasos: ["Prepara una masa líquida y cocina en una sartén.", "Rellena al gusto."] },
  { titulo: "Flan de café", categoria: "Postre", tiempo: "1 h", imagen: "flan-cafe.jpg", ingredientes: ["Leche", "Café", "Huevos", "Azúcar", "Caramelo"], pasos: ["Prepara una mezcla de flan con café.", "Hornea al baño maría."] },
  { titulo: "Crema pastelera con frutas", categoria: "Postre", tiempo: "40 min", imagen: "crema-pastelera-frutas.jpg", ingredientes: ["Crema pastelera", "Frutas variadas"], pasos: ["Prepara la crema pastelera.", "Sirve en cuencos con fruta fresca por encima."] },
  { titulo: "Tarta de almendra", categoria: "Postre", tiempo: "1 h", imagen: "tarta-almendra.jpg", ingredientes: ["Almendra molida", "Azúcar", "Huevos", "Ralladura de limón"], pasos: ["Mezcla todos los ingredientes y hornea."] },
  { titulo: "Tarta de galletas con chocolate", categoria: "Postre", tiempo: "45 min", imagen: "tarta-galletas-chocolate.jpg", ingredientes: ["Galletas", "Leche", "Chocolate", "Mantequilla", "Nata"], pasos: ["Alterna capas de galletas mojadas en leche y crema de chocolate.", "Refrigera."] },
  { titulo: "Bizcocho marmolado", categoria: "Postre", tiempo: "1 h", imagen: "bizcocho-marmolado.jpg", ingredientes: ["Ingredientes de bizcocho", "Cacao en polvo"], pasos: ["Divide la masa en dos, añade cacao a una parte y vierte ambas en un molde alternándolas."] },
  { titulo: "Helado de yogur", categoria: "Postre", tiempo: "6 h", imagen: "helado-yogur.jpg", ingredientes: ["Yogur", "Nata montada", "Azúcar glas"], pasos: ["Mezcla los ingredientes y congela, removiendo periódicamente."] },
  { titulo: "Brownie sencillo", categoria: "Postre", tiempo: "45 min", imagen: "brownie.jpg", ingredientes: ["Chocolate", "Mantequilla", "Azúcar", "Harina", "Huevos", "Nueces"], pasos: ["Mezcla los ingredientes y hornea.", "Debe quedar húmedo por dentro."] },
  { titulo: "Crema de limón", categoria: "Postre", tiempo: "30 min", imagen: "crema-limon.jpg", ingredientes: ["Limones", "Huevos", "Azúcar", "Mantequilla"], pasos: ["Cocina los ingredientes al baño maría hasta espesar.", "Enfría."] },
  { titulo: "Naranja con canela", categoria: "Postre", tiempo: "10 min", imagen: "naranja-canela.jpg", ingredientes: ["Naranjas", "Azúcar", "Canela"], pasos: ["Corta las naranjas en rodajas y espolvorea azúcar y canela."] },
  { titulo: "Fresas con nata", categoria: "Postre", tiempo: "15 min", imagen: "fresas-nata.jpg", ingredientes: ["Fresas", "Nata para montar", "Azúcar glas"], pasos: ["Monta la nata y sirve con las fresas limpias y troceadas."] },

  // --- 13 RECETAS NUEVAS DE LOS PDFS ---
  { titulo: "Ensalada de aguacate y gambas", categoria: "Entrante", tiempo: "15 min", imagen: "ensalada-aguacate-gambas.jpg", ingredientes: ["2 aguacates maduros", "200 g de gambas cocidas y peladas", "1/2 cebolla roja", "1 tomate", "Zumo de 1/2 limón", "Aceite de oliva virgen extra", "Sal y pimienta"], pasos: ["Picar finamente la cebolla roja y el tomate.", "Cortar los aguacates en dados y rociar con zumo de limón.", "Mezclar todos los ingredientes en un bol.", "Aliñar al gusto y servir inmediatamente."] },
  { titulo: "Sopa de pescado y marisco", categoria: "Entrante", tiempo: "45 min", imagen: "sopa-pescado-marisco.jpg", ingredientes: ["500 g de pescado de roca", "200 g de gambas", "200 g de almejas", "1 cebolla", "1 pimiento verde", "2 tomates", "2 dientes de ajo", "Caldo de pescado", "Aceite, sal y perejil"], pasos: ["Preparar un caldo con el pescado de roca y colar.", "Hacer un sofrito con las verduras.", "Añadir las gambas, las almejas y el caldo.", "Hervir 15 minutos y servir."] },
  { titulo: "Canelones de jamón con crema de setas", categoria: "Entrante", tiempo: "50 min", imagen: "canelones-jamon-setas.jpg", ingredientes: ["12 placas de canelones", "150 g de jamón serrano", "300 g de setas", "1 cebolla", "Bechamel", "Queso rallado"], pasos: ["Cocer las placas de canelones.", "Preparar un relleno con la cebolla, las setas y el jamón.", "Rellenar, cubrir con bechamel y queso, y gratinar."] },
  { titulo: "Revuelto de setas con jamón", categoria: "Setas", tiempo: "25 min", imagen: "revuelto-setas-jamon.jpg", ingredientes: ["400 g de setas", "100 g de jamón serrano", "4 huevos", "2 dientes de ajo", "Aceite, sal y pimienta"], pasos: ["Saltear los ajos, el jamón y las setas.", "Añadir los huevos batidos y remover hasta que cuajen."] },
  { titulo: "Filetes de ternera en salsa con setas", categoria: "Segundo", tiempo: "45 min", imagen: "filetes-ternera-setas.jpg", ingredientes: ["4 filetes de ternera", "300 g de setas", "1 cebolla", "2 ajos", "Tomate frito", "Vino blanco", "Caldo de carne", "Harina", "Aceite, sal y pimienta"], pasos: ["Enharinar y freír los filetes. Reservar.", "Hacer un sofrito con las verduras y setas.", "Añadir el vino, el tomate y el caldo.", "Incorporar los filetes y cocinar 20 minutos."] },
  { titulo: "Cordero asado al horno con patatas", categoria: "Segundo", tiempo: "2 h", imagen: "cordero-asado.jpg", ingredientes: ["1 pierna de cordero", "1 kg de patatas", "2 cebollas", "4 ajos", "Vino blanco", "Caldo", "Hierbas aromáticas"], pasos: ["Crear una cama de patatas y cebolla.", "Colocar el cordero encima y añadir el resto de ingredientes.", "Asar lentamente, regando con sus jugos."] },
  { titulo: "Flan de turrón", categoria: "Postre", tiempo: "50 min", imagen: "flan-turron.jpg", ingredientes: ["1 tableta de turrón de Jijona", "6 huevos", "500 ml de nata", "100 g de azúcar", "Caramelo líquido"], pasos: ["Triturar todos los ingredientes (excepto el caramelo).", "Verter en un molde caramelizado y hornear al baño maría."] },
  { titulo: "Tarta de queso de La Viña", categoria: "Postre", tiempo: "1 h", imagen: "tarta-queso-vina.jpg", ingredientes: ["1 kg de queso crema", "500 ml de nata", "7 huevos", "400 g de azúcar", "1 cucharada de harina"], pasos: ["Batir todos los ingredientes.", "Verter en un molde forrado con papel de horno y hornear a alta temperatura."] },
  { titulo: "Arroz con leche al estilo asturiano", categoria: "Postre", tiempo: "1 h 30 min", imagen: "arroz-con-leche-asturiano.jpg", ingredientes: ["1 litro de leche entera", "100 g de arroz", "120 g de azúcar", "Canela", "Limón", "Sal"], pasos: ["Cocer el arroz en la leche con los aromas a fuego muy lento, removiendo constantemente.", "Añadir el azúcar al final."] },
  { titulo: "Tarta de manzana (La más fácil del mundo)", categoria: "Postre", tiempo: "45 min", imagen: "tarta-manzana-facil.jpg", ingredientes: ["3 manzanas", "3 huevos", "1 yogur", "1 medida de aceite", "2 de azúcar", "3 de harina", "Levadura", "Mermelada"], pasos: ["Batir todos los ingredientes (excepto una manzana para decorar).", "Verter en un molde, decorar y hornear.", "Abrillantar con mermelada."] },
  { titulo: "Brownie con naranja confitada", categoria: "Postre", tiempo: "40 min", imagen: "brownie-naranja.jpg", ingredientes: ["200 g de chocolate", "150 g de mantequilla", "4 huevos", "200 g de azúcar", "100 g de harina", "Nueces", "Naranja confitada"], pasos: ["Derretir el chocolate con la mantequilla.", "Batir huevos y azúcar, añadir el chocolate, y finalmente la harina y los frutos secos.", "Hornear."] },
  { titulo: "Mousse de limón muy fácil", categoria: "Postre", tiempo: "15 min + reposo", imagen: "mousse-limon.jpg", ingredientes: ["1 lata de leche condensada (370g)", "200 ml de nata para montar (35% M.G.)", "El zumo de 2 limones", "Ralladura de 1 limón para decorar"], pasos: ["Montar la nata, que debe estar muy fría.", "Mezclar la leche condensada con el zumo de limón.", "Incorporar la nata montada a la mezcla con movimientos envolventes.", "Repartir en copas y refrigerar al menos 2 horas.", "Decorar con ralladura de limón antes de servir."] }
];
export default RECETAS;
