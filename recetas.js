const RECETAS = [
  {
    titulo: "Tostas de tomate y jamón",
    categoria: "Aperitivo",
    tiempo: "10 min",
    ingredientes: [
      "4 rebanadas de pan rústico",
      "2 tomates maduros",
      "2 dientes de ajo",
      "4 lonchas de jamón serrano",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Tuesta ligeramente las rebanadas de pan en una sartén o tostadora.",
      "Frota cada rebanada con medio diente de ajo para darle aroma.",
      "Ralla los tomates y mézclalos con un poco de aceite y sal.",
      "Unta cada pan con el tomate rallado y coloca encima una loncha de jamón serrano.",
      "Sirve inmediatamente con un chorrito extra de aceite de oliva."
    ]
  },
  {
    titulo: "Tostas de anchoa y pimiento",
    categoria: "Aperitivo",
    tiempo: "15 min",
    ingredientes: [
      "4 rebanadas de pan de barra",
      "8 filetes de anchoa en aceite",
      "1 pimiento rojo asado",
      "Aceite de oliva virgen extra"
    ],
    pasos: [
      "Corta el pimiento asado en tiras finas.",
      "Tuesta las rebanadas de pan.",
      "Coloca sobre cada pan una tira de pimiento y dos anchoas.",
      "Riega con un poco de aceite de oliva y sirve frío."
    ]
  },
  {
    titulo: "Tostas de escalivada",
    categoria: "Aperitivo",
    tiempo: "30 min",
    ingredientes: [
      "1 berenjena",
      "1 pimiento rojo",
      "1 cebolla",
      "4 rebanadas de pan de payés",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Asa la berenjena, pimiento y cebolla en el horno a 200 ºC durante 25 minutos.",
      "Pela y corta las verduras en tiras.",
      "Tuesta el pan y coloca encima la mezcla de verduras asadas.",
      "Aliña con aceite y sal antes de servir."
    ]
  },
  {
    titulo: "Tostas de salmón y queso fresco",
    categoria: "Aperitivo",
    tiempo: "10 min",
    ingredientes: [
      "4 rebanadas de pan integral",
      "100 g de queso fresco",
      "100 g de salmón ahumado",
      "Eneldo fresco"
    ],
    pasos: [
      "Tuesta el pan y unta cada rebanada con queso fresco.",
      "Coloca una loncha de salmón sobre el queso.",
      "Decora con eneldo fresco y sirve frío."
    ]
  },
  {
    titulo: "Croquetas de jamón",
    categoria: "Aperitivo",
    tiempo: "1 h",
    ingredientes: [
      "100 g de jamón serrano picado",
      "50 g de mantequilla",
      "50 g de harina",
      "500 ml de leche entera",
      "1 huevo",
      "Pan rallado",
      "Aceite de oliva para freír",
      "Sal",
      "Nuez moscada"
    ],
    pasos: [
      "En una sartén, derrite la mantequilla y añade la harina, cocinando un par de minutos.",
      "Agrega poco a poco la leche caliente, removiendo para evitar grumos.",
      "Añade el jamón picado, sal y nuez moscada, y cocina hasta espesar.",
      "Vierte la masa en una fuente, cubre con film y deja enfriar en la nevera unas horas.",
      "Forma croquetas, pásalas por huevo y pan rallado, y fríelas en aceite caliente hasta dorar."
    ]
  },
  {
    titulo: "Croquetas de pollo",
    categoria: "Aperitivo",
    tiempo: "1 h",
    ingredientes: [
      "200 g de pollo cocido y desmenuzado",
      "50 g de mantequilla",
      "50 g de harina",
      "500 ml de leche entera",
      "1 huevo",
      "Pan rallado",
      "Aceite de oliva para freír",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Haz una bechamel con mantequilla, harina y leche.",
      "Añade el pollo desmenuzado, sal y pimienta.",
      "Cocina hasta espesar y deja enfriar en una fuente cubierta con film.",
      "Forma las croquetas, pásalas por huevo y pan rallado y fríe hasta dorar."
    ]
  },
  {
    titulo: "Croquetas de bacalao",
    categoria: "Aperitivo",
    tiempo: "1 h",
    ingredientes: [
      "200 g de bacalao desalado",
      "50 g de mantequilla",
      "50 g de harina",
      "500 ml de leche",
      "1 huevo",
      "Pan rallado",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Cuece el bacalao desalado 5 minutos, desmenúzalo y retira piel y espinas.",
      "Prepara una bechamel con mantequilla, harina y leche.",
      "Añade el bacalao desmenuzado, sal y pimienta, y cocina hasta espesar.",
      "Deja enfriar, forma las croquetas, empana y fríe en aceite caliente."
    ]
  },
  {
    titulo: "Croquetas de setas",
    categoria: "Aperitivo",
    tiempo: "1 h",
    ingredientes: [
      "200 g de setas variadas",
      "1 cebolla pequeña",
      "50 g de mantequilla",
      "50 g de harina",
      "500 ml de leche",
      "Aceite de oliva",
      "Pan rallado",
      "1 huevo",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Pica y sofríe la cebolla y las setas en una sartén.",
      "Añade la mantequilla, la harina y la leche para formar la bechamel.",
      "Sazona y deja enfriar en una fuente tapada con film.",
      "Haz las croquetas, pásalas por huevo y pan rallado y fríelas hasta dorar."
    ]
  },
  {
    titulo: "Empanadillas de atún",
    categoria: "Aperitivo",
    tiempo: "45 min",
    ingredientes: [
      "1 paquete de obleas para empanadillas",
      "2 latas de atún en aceite",
      "1 huevo duro",
      "4 cucharadas de tomate frito",
      "1 huevo batido para pintar"
    ],
    pasos: [
      "Mezcla en un bol el atún escurrido, el huevo duro picado y el tomate frito.",
      "Rellena cada oblea con una cucharada de la mezcla, ciérralas y sella los bordes con un tenedor.",
      "Pinta con huevo batido y hornea a 180 ºC durante 20 minutos, o fríelas en aceite caliente."
    ]
  },
  {
    titulo: "Empanadillas de carne",
    categoria: "Aperitivo",
    tiempo: "45 min",
    ingredientes: [
      "1 paquete de obleas para empanadillas",
      "200 g de carne picada (ternera o cerdo)",
      "1 cebolla pequeña",
      "2 cucharadas de tomate frito",
      "Aceite de oliva",
      "1 huevo batido para pintar",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Pocha la cebolla picada en una sartén con aceite.",
      "Añade la carne picada, salpimienta y cocina hasta dorar.",
      "Agrega el tomate frito y mezcla bien.",
      "Rellena las obleas, ciérralas y sella con un tenedor.",
      "Pinta con huevo batido y hornea a 180 ºC durante 20 minutos."
    ]
  },
  {
    titulo: "Patatas bravas",
    categoria: "Aperitivo",
    tiempo: "30 min",
    ingredientes: [
      "500 g de patatas",
      "Aceite de oliva para freír",
      "Sal",
      "Para la salsa: 200 g de tomate triturado, 1 cucharadita de pimentón picante, 1 guindilla, 1 diente de ajo, aceite y sal"
    ],
    pasos: [
      "Pela y corta las patatas en dados, fríelas en abundante aceite hasta que estén doradas.",
      "En una sartén, sofríe el ajo y la guindilla en aceite, añade el tomate triturado, pimentón y sal, y cocina 15 minutos.",
      "Sirve las patatas calientes con la salsa brava por encima."
    ]
  },
  {
    titulo: "Patatas alioli",
    categoria: "Aperitivo",
    tiempo: "25 min",
    ingredientes: [
      "500 g de patatas",
      "2 dientes de ajo",
      "200 ml de aceite de girasol",
      "1 huevo",
      "Sal",
      "Limón"
    ],
    pasos: [
      "Cuece las patatas con piel hasta que estén tiernas, pélalas y córtalas en dados.",
      "Prepara el alioli: en un vaso batidor pon un huevo, los ajos, sal, limón y el aceite. Bate sin mover la batidora hasta emulsionar.",
      "Mezcla las patatas con el alioli y sirve frías."
    ]
  },
  {
    titulo: "Boquerones en vinagre",
    categoria: "Aperitivo",
    tiempo: "12 h (marinado)",
    ingredientes: [
      "500 g de boquerones frescos",
      "200 ml de vinagre de vino blanco",
      "200 ml de agua",
      "Aceite de oliva virgen extra",
      "Perejil fresco picado",
      "Sal"
    ],
    pasos: [
      "Limpia los boquerones retirando cabeza y espinas, y congélalos 48 h para evitar anisakis.",
      "Descongélalos y marínalos en vinagre y agua con sal durante 4 horas en la nevera.",
      "Escúrrelos y cúbrelos con aceite de oliva y perejil fresco.",
      "Sirve fríos como tapa."
    ]
  },
  {
    titulo: "Champiñones al ajillo",
    categoria: "Aperitivo",
    tiempo: "20 min",
    ingredientes: [
      "400 g de champiñones",
      "4 dientes de ajo",
      "Guindilla (opcional)",
      "Aceite de oliva",
      "Perejil fresco",
      "Sal"
    ],
    pasos: [
      "Limpia y corta los champiñones en cuartos.",
      "Calienta aceite en una sartén y sofríe los ajos laminados con la guindilla.",
      "Añade los champiñones, sal y cocina 10 minutos.",
      "Espolvorea con perejil fresco y sirve caliente."
    ]
  },
  {
    titulo: "Gildas donostiarras",
    categoria: "Aperitivo",
    tiempo: "10 min",
    ingredientes: [
      "12 aceitunas verdes rellenas",
      "6 guindillas verdes en vinagre",
      "6 filetes de anchoa en aceite",
      "Palillos"
    ],
    pasos: [
      "Ensarta en cada palillo una aceituna, una guindilla doblada y una anchoa.",
      "Repite hasta formar todas las gildas.",
      "Sirve como aperitivo frío acompañado de vino o vermut."
    ]
  },
  {
    titulo: "Pinchos de tortilla",
    categoria: "Aperitivo",
    tiempo: "30 min",
    ingredientes: [
      "1 tortilla de patatas mediana",
      "Pan de barra",
      "Pimientos verdes fritos (opcional)"
    ],
    pasos: [
      "Corta la tortilla de patatas en porciones rectangulares.",
      "Coloca cada porción sobre una rebanada de pan.",
      "Decora con un pimiento verde frito y fija con un palillo."
    ]
  },
  {
    titulo: "Pinchos morunos",
    categoria: "Aperitivo",
    tiempo: "1 h (marinado) + 20 min",
    ingredientes: [
      "500 g de carne de cerdo en dados",
      "2 dientes de ajo",
      "1 cucharada de pimentón",
      "1 cucharadita de comino molido",
      "1 cucharadita de orégano",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "Palillos de brocheta"
    ],
    pasos: [
      "Prepara un adobo con ajo picado, pimentón, comino, orégano, sal, pimienta y aceite.",
      "Mezcla la carne con el adobo y deja reposar al menos 1 hora.",
      "Ensarta la carne en brochetas y cocínala a la plancha o parrilla hasta dorar.",
      "Sirve caliente con pan."
    ]
  },
  {
    titulo: "Queso marinado en aceite",
    categoria: "Aperitivo",
    tiempo: "3 días (macerado)",
    ingredientes: [
      "300 g de queso manchego curado en dados",
      "200 ml de aceite de oliva virgen extra",
      "1 guindilla seca",
      "2 dientes de ajo",
      "Hierbas aromáticas (tomillo, romero, orégano)"
    ],
    pasos: [
      "Corta el queso en dados medianos.",
      "Ponlo en un tarro de cristal limpio y añade las hierbas, la guindilla y los dientes de ajo pelados.",
      "Cubre todo con aceite de oliva virgen extra.",
      "Tapa y deja macerar en la nevera un mínimo de 3 días.",
      "Sirve acompañado de pan crujiente como tapa."
    ]
  },
  {
    titulo: "Hummus clásico con crudités",
    categoria: "Aperitivo",
    tiempo: "15 min",
    ingredientes: [
      "400 g de garbanzos cocidos",
      "2 cucharadas de tahini",
      "2 dientes de ajo",
      "Zumo de 1 limón",
      "50 ml de aceite de oliva virgen extra",
      "1 cucharadita de comino",
      "Sal",
      "Verduras crudas en bastones (zanahoria, apio, pepino)"
    ],
    pasos: [
      "Pon en un vaso batidor los garbanzos cocidos, tahini, ajo, limón, aceite, comino y sal.",
      "Tritura hasta obtener una crema suave.",
      "Si queda muy espeso, añade un poco de agua fría y vuelve a batir.",
      "Sirve en un cuenco con un chorrito de aceite y acompaña con crudités de verduras."
    ]
  },
  {
    titulo: "Gazpacho en vasitos",
    categoria: "Aperitivo",
    tiempo: "20 min",
    ingredientes: [
      "1 kg de tomates maduros",
      "1 pepino",
      "1 pimiento verde",
      "1 diente de ajo",
      "50 g de pan duro",
      "Aceite de oliva virgen extra",
      "Vinagre de vino",
      "Sal"
    ],
    pasos: [
      "Trocea los tomates, el pepino, el pimiento y el ajo.",
      "Ponlos en la batidora con el pan previamente remojado.",
      "Añade aceite, vinagre y sal al gusto y tritura hasta obtener una crema fina.",
      "Pásalo por un colador fino.",
      "Sirve en vasitos pequeños muy fríos como aperitivo refrescante."
    ]
  },
  {
    titulo: "Salmorejo en chupitos",
    categoria: "Aperitivo",
    tiempo: "25 min",
    ingredientes: [
      "1 kg de tomates maduros",
      "200 g de pan del día anterior",
      "1 diente de ajo",
      "150 ml de aceite de oliva virgen extra",
      "Sal",
      "Jamón serrano picado",
      "Huevo duro picado"
    ],
    pasos: [
      "Tritura los tomates con el pan y el ajo hasta obtener una crema espesa.",
      "Añade la sal y emulsiona con el aceite poco a poco hasta que espese.",
      "Deja reposar en la nevera al menos 1 hora.",
      "Sirve en vasitos pequeños decorando con jamón y huevo duro."
    ]
  },
  {
    titulo: "Ensaladilla rusa",
    categoria: "Aperitivo",
    tiempo: "45 min",
    ingredientes: [
      "3 patatas medianas",
      "2 zanahorias",
      "150 g de guisantes",
      "2 huevos",
      "150 g de atún en conserva",
      "Mayonesa al gusto",
      "Pimientos morrones (para decorar)"
    ],
    pasos: [
      "Cuece las patatas, zanahorias, guisantes y huevos en agua con sal hasta que estén tiernos.",
      "Pela y corta las patatas y zanahorias en dados pequeños.",
      "Pica los huevos cocidos y mezcla todo con los guisantes y el atún desmenuzado.",
      "Añade mayonesa y mezcla bien.",
      "Decora con tiras de pimiento morrón y sirve fría."
    ]
  },
  {
    titulo: "Torreznos crujientes",
    categoria: "Aperitivo",
    tiempo: "30 min",
    ingredientes: [
      "500 g de panceta adobada",
      "Aceite de oliva para freír"
    ],
    pasos: [
      "Corta la panceta en tiras gruesas.",
      "Ponlas a fuego muy lento en abundante aceite para que suelten parte de su grasa.",
      "Cuando estén blandos, sube el fuego y fríe hasta que queden muy crujientes.",
      "Escúrrelos sobre papel absorbente y sirve calientes."
    ]
  },
  {
    titulo: "Berenjenas fritas con miel de caña",
    categoria: "Aperitivo",
    tiempo: "40 min",
    ingredientes: [
      "2 berenjenas medianas",
      "Harina de trigo",
      "Aceite de oliva para freír",
      "Sal",
      "Miel de caña"
    ],
    pasos: [
      "Lava las berenjenas y córtalas en bastones.",
      "Ponlas en agua con sal 30 minutos para que pierdan amargor.",
      "Escúrrelas y pásalas por harina.",
      "Fríelas en abundante aceite hasta que estén doradas.",
      "Sirve calientes con un hilo de miel de caña por encima."
    ]
  },
  {
    titulo: "Tortilla francesa mini",
    categoria: "Aperitivo",
    tiempo: "15 min",
    ingredientes: [
      "4 huevos",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Bate los huevos con sal y pimienta.",
      "Haz varias mini tortillas en una sartén con unas gotas de aceite.",
      "Dobla cada mini tortilla en dos y sirve como pequeños bocados."
    ]
  },
  {
    titulo: "Banderillas variadas",
    categoria: "Aperitivo",
    tiempo: "10 min",
    ingredientes: [
      "Pepinillos en vinagre",
      "Cebolletas en vinagre",
      "Aceitunas verdes",
      "Guindillas en vinagre",
      "Anchoas en aceite"
    ],
    pasos: [
      "Ensarta en palillos una combinación de pepinillo, cebolleta, aceituna y guindilla.",
      "Coloca al final una anchoa enrollada.",
      "Repite hasta tener todas las banderillas listas.",
      "Sirve frías como tapa sencilla."
    ]
  },
  {
    titulo: "Mejillones en escabeche",
    categoria: "Aperitivo",
    tiempo: "1 h + reposo",
    ingredientes: [
      "1 kg de mejillones",
      "200 ml de aceite de oliva",
      "100 ml de vinagre de vino",
      "2 dientes de ajo",
      "2 hojas de laurel",
      "1 cucharadita de pimentón",
      "Sal"
    ],
    pasos: [
      "Limpia y abre los mejillones al vapor, retirando una de las conchas.",
      "Fríe los ajos laminados en aceite, añade laurel y pimentón.",
      "Agrega el vinagre y deja hervir 2 minutos.",
      "Vierte el escabeche sobre los mejillones y deja reposar unas horas en la nevera.",
      "Sirve fríos acompañados de pan."
    ]
  }, // <--- COMA CORREGIDA AQUÍ
  {
    titulo: "Sardinas marinadas",
    categoria: "Aperitivo",
    tiempo: "4 h (marinado)",
    ingredientes: [
      "500 g de sardinas frescas",
      "200 ml de vinagre de vino blanco",
      "200 ml de agua",
      "Sal",
      "Aceite de oliva virgen extra",
      "Perejil fresco picado"
    ],
    pasos: [
      "Limpia las sardinas quitando cabeza y espinas.",
      "Ponlas en una fuente honda y cúbrelas con el vinagre, el agua y sal.",
      "Deja marinar en la nevera 4 horas.",
      "Escúrrelas, cúbrelas con aceite de oliva y perejil fresco.",
      "Sirve frías como aperitivo."
    ]
  },
  {
    titulo: "Pulpo a la gallega (tapa)",
    categoria: "Aperitivo",
    tiempo: "35 min",
    ingredientes: [
      "500 g de pulpo cocido",
      "3 patatas medianas",
      "Aceite de oliva virgen extra",
      "Pimentón dulce y picante",
      "Sal gorda"
    ],
    pasos: [
      "Cuece las patatas con piel, pélalas y córtalas en rodajas.",
      "Corta el pulpo en rodajas.",
      "Coloca una cama de patatas, encima el pulpo.",
      "Espolvorea con pimentón y sal gorda, y riega con aceite de oliva.",
      "Sirve en plato de madera como es tradicional."
    ]
  },
  {
    titulo: "Jamón ibérico con picos",
    categoria: "Aperitivo",
    tiempo: "5 min",
    ingredientes: [
      "200 g de jamón ibérico en lonchas finas",
      "Picos de pan andaluces"
    ],
    pasos: [
      "Dispón las lonchas de jamón en un plato.",
      "Acompaña con picos de pan crujiente.",
      "Sirve a temperatura ambiente como aperitivo rápido."
    ]
  },
  {
    titulo: "Queso manchego con membrillo",
    categoria: "Aperitivo",
    tiempo: "10 min",
    ingredientes: [
      "200 g de queso manchego curado",
      "100 g de dulce de membrillo"
    ],
    pasos: [
      "Corta el queso en triángulos finos.",
      "Corta el membrillo en láminas del mismo tamaño.",
      "Monta pequeños bocados intercalando queso y membrillo.",
      "Sirve como aperitivo dulce-salado."
    ]
  },
  {
    titulo: "Pimientos del padrón",
    categoria: "Aperitivo",
    tiempo: "15 min",
    ingredientes: [
      "300 g de pimientos del padrón",
      "Aceite de oliva virgen extra",
      "Sal gorda"
    ],
    pasos: [
      "Lava y seca los pimientos.",
      "Fríelos en aceite caliente hasta que se inflen y doren un poco.",
      "Escúrrelos y espolvorea sal gorda por encima.",
      "Sirve calientes como aperitivo típico gallego."
    ]
  },
  {
    titulo: "Montadito de lomo",
    categoria: "Aperitivo",
    tiempo: "20 min",
    ingredientes: [
      "4 panecillos pequeños",
      "4 filetes de lomo de cerdo adobado",
      "4 lonchas de queso (opcional)",
      "Aceite de oliva"
    ],
    pasos: [
      "Abre los panecillos y tuéstalos un poco.",
      "Haz los filetes de lomo a la plancha con unas gotas de aceite.",
      "Coloca cada filete en un panecillo y añade queso si se desea.",
      "Sirve caliente acompañado de patatas o aceitunas."
    ]
  },
  {
    titulo: "Montadito de pringá",
    categoria: "Aperitivo",
    tiempo: "25 min",
    ingredientes: [
      "4 panecillos pequeños",
      "Carne desmenuzada de cocido (pollo, ternera, cerdo)",
      "Un poco de caldo para humedecer"
    ],
    pasos: [
      "Desmenuza las carnes del cocido y mézclalas en un bol.",
      "Añade un poco de caldo para dar jugosidad.",
      "Rellena los panecillos con la mezcla de carne.",
      "Sirve calientes como tapa sevillana típica."
    ]
  },
  {
    titulo: "Bonito con tomate (tapa)",
    categoria: "Aperitivo",
    tiempo: "30 min",
    ingredientes: [
      "300 g de bonito fresco en dados",
      "200 g de tomate frito casero",
      "1 cebolla pequeña",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Pocha la cebolla picada en aceite de oliva hasta que esté tierna.",
      "Añade el bonito en dados y saltéalo un par de minutos.",
      "Agrega el tomate frito y cocina 10 minutos a fuego bajo.",
      "Sirve caliente en cazuelitas individuales."
    ]
  },
  {
    titulo: "Pisto con huevo (tapa)",
    categoria: "Aperitivo",
    tiempo: "45 min",
    ingredientes: [
      "1 calabacín",
      "1 pimiento rojo",
      "1 pimiento verde",
      "1 cebolla",
      "2 tomates maduros",
      "2 huevos",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Corta todas las verduras en dados pequeños.",
      "Sofríelas poco a poco hasta que estén bien pochadas.",
      "Añade los tomates rallados y cocina hasta que espese.",
      "Sirve en cazuelitas con un huevo frito encima."
    ]
  },
  {
    titulo: "Chistorra a la sidra",
    categoria: "Aperitivo",
    tiempo: "25 min",
    ingredientes: [
      "300 g de chistorra",
      "200 ml de sidra natural"
    ],
    pasos: [
      "Corta la chistorra en trozos de 5 cm.",
      "Ponla en una sartén sin aceite y dóralas un poco.",
      "Añade la sidra y cocina a fuego medio hasta que reduzca.",
      "Sirve caliente en cazuelitas de barro."
    ]
  },
  {
    titulo: "Sopa de ajo",
    categoria: "Primero",
    tiempo: "30 min",
    ingredientes: [
      "6 dientes de ajo",
      "150 g de pan duro en rebanadas",
      "1 litro de caldo de pollo",
      "2 cucharaditas de pimentón dulce",
      "4 huevos",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Lamina los ajos y sofríelos en una cazuela con aceite hasta que se doren.",
      "Añade el pan en rebanadas y dóralo ligeramente.",
      "Agrega el pimentón, remueve rápido y vierte el caldo de pollo.",
      "Deja hervir 15 minutos a fuego medio.",
      "Casca los huevos directamente en la sopa y cocina hasta que cuajen al gusto.",
      "Sirve bien caliente."
    ]
  },
  {
    titulo: "Sopa castellana",
    categoria: "Primero",
    tiempo: "35 min",
    ingredientes: [
      "8 dientes de ajo",
      "150 g de pan duro en rebanadas",
      "100 g de jamón serrano en taquitos",
      "1 litro de caldo de carne",
      "2 cucharaditas de pimentón dulce",
      "4 huevos",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Sofríe los ajos laminados y el jamón en una cazuela con aceite.",
      "Añade el pan y dóralo ligeramente.",
      "Agrega el pimentón y rápidamente vierte el caldo.",
      "Deja cocer 20 minutos.",
      "Casca los huevos, mezcla bien y cocina hasta que cuajen.",
      "Sirve caliente."
    ]
  },
  {
    titulo: "Gazpacho andaluz",
    categoria: "Primero",
    tiempo: "20 min",
    ingredientes: [
      "1 kg de tomates maduros",
      "1 pepino",
      "1 pimiento verde",
      "1 diente de ajo",
      "50 g de pan duro",
      "Aceite de oliva virgen extra",
      "Vinagre de vino",
      "Sal"
    ],
    pasos: [
      "Lava y trocea todas las verduras.",
      "Ponlas en la batidora junto con el pan remojado, el aceite, vinagre y sal.",
      "Tritura bien hasta obtener una crema fina.",
      "Pasa por un colador fino y deja enfriar en la nevera.",
      "Sirve acompañado de picatostes o verduras picadas."
    ]
  },
  {
    titulo: "Salmorejo cordobés",
    categoria: "Primero",
    tiempo: "25 min",
    ingredientes: [
      "1 kg de tomates maduros",
      "200 g de pan del día anterior",
      "1 diente de ajo",
      "150 ml de aceite de oliva virgen extra",
      "Sal",
      "Jamón serrano picado",
      "Huevo duro picado"
    ],
    pasos: [
      "Tritura los tomates con el pan y el ajo hasta que quede una crema espesa.",
      "Añade sal y emulsiona con el aceite poco a poco hasta que espese.",
      "Refrigera al menos 1 hora antes de servir.",
      "Decora con jamón serrano y huevo duro."
    ]
  },
  {
    titulo: "Ajoblanco",
    categoria: "Primero",
    tiempo: "20 min",
    ingredientes: [
      "150 g de almendras crudas peladas",
      "100 g de pan duro",
      "2 dientes de ajo",
      "750 ml de agua fría",
      "100 ml de aceite de oliva virgen extra",
      "30 ml de vinagre de vino",
      "Sal",
      "Uvas o melón para acompañar"
    ],
    pasos: [
      "Pon en la batidora las almendras, el pan remojado, ajos, agua, aceite, vinagre y sal.",
      "Tritura hasta obtener una crema fina.",
      "Refrigera bien antes de servir.",
      "Sirve frío acompañado de uvas o melón."
    ]
  },
  {
    titulo: "Crema de calabaza",
    categoria: "Primero",
    tiempo: "40 min",
    ingredientes: [
      "1 kg de calabaza",
      "2 zanahorias",
      "1 cebolla",
      "1 patata",
      "1 litro de caldo de verduras",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Pela y trocea la calabaza, zanahorias, cebolla y patata.",
      "Sofríe la cebolla en una cazuela con aceite.",
      "Añade el resto de verduras y rehoga 5 minutos.",
      "Cubre con caldo y cocina 25 minutos.",
      "Tritura todo hasta obtener una crema fina.",
      "Sirve caliente con un chorrito de aceite."
    ]
  },
  {
    titulo: "Crema de puerros",
    categoria: "Primero",
    tiempo: "35 min",
    ingredientes: [
      "4 puerros",
      "2 patatas",
      "1 litro de caldo de verduras",
      "50 ml de nata líquida",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Limpia los puerros y córtalos en rodajas.",
      "Sofríelos en una cazuela con aceite hasta que se ablanden.",
      "Añade las patatas troceadas y el caldo de verduras.",
      "Cuece 20 minutos hasta que todo esté tierno.",
      "Tritura bien y agrega la nata.",
      "Sirve caliente o frío según la temporada."
    ]
  },
  {
    titulo: "Crema de champiñón",
    categoria: "Primero",
    tiempo: "35 min",
    ingredientes: [
      "400 g de champiñones",
      "1 cebolla",
      "2 patatas",
      "1 litro de caldo de verduras",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Limpia y corta los champiñones.",
      "Pocha la cebolla en aceite y añade los champiñones.",
      "Agrega las patatas en trozos y cubre con caldo.",
      "Cuece 20 minutos.",
      "Tritura bien hasta obtener una crema suave.",
      "Sirve caliente."
    ]
  },
  {
    titulo: "Pisto manchego",
    categoria: "Primero",
    tiempo: "50 min",
    ingredientes: [
      "1 calabacín",
      "1 berenjena",
      "1 pimiento rojo",
      "1 pimiento verde",
      "1 cebolla",
      "3 tomates maduros",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Corta todas las verduras en dados pequeños.",
      "Pocha la cebolla en una cazuela con aceite.",
      "Añade el resto de verduras poco a poco, cocinando a fuego lento.",
      "Ralla los tomates y añádelos al final.",
      "Cocina 30 minutos hasta que espese.",
      "Sirve caliente o templado."
    ]
  },
  {
    titulo: "Menestra de verduras",
    categoria: "Primero",
    tiempo: "45 min",
    ingredientes: [
      "200 g de judías verdes",
      "150 g de guisantes",
      "2 zanahorias",
      "1 alcachofa",
      "1 patata",
      "2 huevos duros",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Trocea y cuece las verduras por separado en agua con sal.",
      "Escúrrelas y saltéalas todas juntas en una sartén con un poco de aceite.",
      "Sirve caliente con huevo duro picado por encima."
    ]
  },
  {
    titulo: "Lentejas estofadas",
    categoria: "Primero",
    tiempo: "1 h",
    ingredientes: [
      "300 g de lentejas pardinas",
      "1 zanahoria",
      "1 cebolla",
      "1 pimiento verde",
      "2 dientes de ajo",
      "1 hoja de laurel",
      "1 tomate maduro",
      "Aceite de oliva",
      "Pimentón dulce",
      "Sal"
    ],
    pasos: [
      "Pon las lentejas en una cazuela con agua fría, laurel y un chorro de aceite.",
      "Añade la zanahoria, cebolla, pimiento y tomate enteros.",
      "Cuece a fuego lento durante 40 minutos.",
      "Saca las verduras, tritúralas y vuelve a añadirlas al guiso.",
      "Agrega pimentón y sal, cocina 10 minutos más y sirve caliente."
    ]
  },
  {
    titulo: "Garbanzos con espinacas",
    categoria: "Primero",
    tiempo: "50 min",
    ingredientes: [
      "300 g de garbanzos cocidos",
      "200 g de espinacas frescas",
      "2 rebanadas de pan frito",
      "2 dientes de ajo",
      "1 cucharadita de comino",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Fríe el pan y los ajos en una sartén con aceite.",
      "Machácalos en un mortero con comino y sal.",
      "Añade la mezcla a una cazuela con los garbanzos cocidos y un poco de agua.",
      "Agrega las espinacas y cocina 15 minutos.",
      "Sirve caliente acompañado de pan."
    ]
  },
  {
    titulo: "Judías blancas con verduras",
    categoria: "Primero",
    tiempo: "1 h",
    ingredientes: [
      "300 g de judías blancas",
      "1 zanahoria",
      "1 puerro",
      "1 pimiento verde",
      "1 tomate maduro",
      "1 hoja de laurel",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Pon las judías en remojo la noche anterior.",
      "Cuécelas en una olla con laurel y un chorrito de aceite.",
      "Añade las verduras troceadas y cocina a fuego lento 50 minutos.",
      "Rectifica de sal y sirve caliente."
    ]
  },
  {
    titulo: "Arroz caldoso de verduras",
    categoria: "Primero",
    tiempo: "40 min",
    ingredientes: [
      "300 g de arroz bomba",
      "1 pimiento rojo",
      "1 calabacín",
      "1 zanahoria",
      "1 tomate",
      "1 litro de caldo de verduras",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Corta las verduras en dados pequeños y sofríelas en una cazuela con aceite.",
      "Añade el arroz y rehoga un minuto.",
      "Agrega el caldo caliente y cocina 18 minutos.",
      "Rectifica de sal y deja reposar 2 minutos antes de servir."
    ]
  },
  {
    titulo: "Arroz a la cubana",
    categoria: "Primero",
    tiempo: "30 min",
    ingredientes: [
      "300 g de arroz blanco cocido",
      "2 plátanos maduros",
      "2 huevos",
      "200 g de tomate frito",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Cuece el arroz y resérvalo.",
      "Fríe los plátanos cortados a lo largo hasta dorarlos.",
      "Fríe los huevos en aceite de oliva.",
      "Sirve el arroz acompañado de tomate frito, plátano frito y huevo."
    ]
  },
  {
    titulo: "Arroz negro",
    categoria: "Primero",
    tiempo: "40 min",
    ingredientes: [
      "300 g de arroz bomba",
      "2 sobres de tinta de calamar",
      "200 g de calamares",
      "1 cebolla",
      "1 tomate",
      "1 litro de caldo de pescado",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Sofríe la cebolla y el tomate en una cazuela con aceite.",
      "Añade los calamares troceados y rehoga unos minutos.",
      "Agrega el arroz y las tintas, remueve bien.",
      "Cubre con caldo de pescado y cocina 18 minutos.",
      "Deja reposar 2 minutos y sirve con alioli."
    ]
  },
  {
    titulo: "Arroz al horno",
    categoria: "Primero",
    tiempo: "50 min",
    ingredientes: [
      "300 g de arroz",
      "200 g de costilla de cerdo",
      "1 morcilla de cebolla",
      "1 patata",
      "1 tomate",
      "1 cabeza de ajos",
      "600 ml de caldo de carne",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Fríe la costilla y la morcilla en una sartén con aceite.",
      "En una cazuela de barro pon el arroz, la carne, la patata en rodajas, el tomate y la cabeza de ajos entera.",
      "Cubre con el caldo caliente y hornea 20 minutos a 200 ºC.",
      "Deja reposar 5 minutos antes de servir."
    ]
  },
  {
    titulo: "Paella de verduras",
    categoria: "Primero",
    tiempo: "50 min",
    ingredientes: [
      "300 g de arroz bomba",
      "1 pimiento rojo",
      "1 calabacín",
      "1 berenjena",
      "100 g de judías verdes",
      "1 litro de caldo de verduras",
      "Aceite de oliva",
      "Azafrán",
      "Sal"
    ],
    pasos: [
      "Sofríe todas las verduras troceadas en una paellera con aceite.",
      "Añade el arroz y rehoga un minuto.",
      "Agrega el caldo caliente y unas hebras de azafrán.",
      "Cocina 18 minutos sin remover.",
      "Deja reposar 5 minutos y sirve."
    ]
  },
  {
    titulo: "Fideuá de pescado",
    categoria: "Primero",
    tiempo: "45 min",
    ingredientes: [
      "300 g de fideos gruesos",
      "200 g de sepia",
      "200 g de gambas",
      "1 tomate",
      "1 cebolla",
      "1 litro de caldo de pescado",
      "Aceite de oliva",
      "Sal",
      "Alioli (para acompañar)"
    ],
    pasos: [
      "Sofríe la cebolla y el tomate en una paellera con aceite.",
      "Añade la sepia y las gambas y rehoga unos minutos.",
      "Agrega los fideos y sofríelos ligeramente.",
      "Cubre con el caldo y cocina 15 minutos.",
      "Deja reposar 5 minutos y sirve con alioli."
    ]
  },
  {
    titulo: "Macarrones con tomate",
    categoria: "Primero",
    tiempo: "25 min",
    ingredientes: [
      "300 g de macarrones",
      "300 g de tomate frito casero",
      "100 g de queso rallado",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Cuece los macarrones en abundante agua con sal hasta que estén al dente.",
      "Escúrrelos y mézclalos con el tomate frito.",
      "Espolvorea queso rallado y gratina 5 minutos en el horno.",
      "Sirve caliente."
    ]
  },
  {
    titulo: "Tallarines al ajillo",
    categoria: "Primero",
    tiempo: "25 min",
    ingredientes: [
      "300 g de tallarines",
      "4 dientes de ajo",
      "50 ml de aceite de oliva virgen extra",
      "1 guindilla (opcional)",
      "Perejil fresco picado",
      "Sal"
    ],
    pasos: [
      "Cuece los tallarines en abundante agua con sal hasta que estén al dente.",
      "Mientras, sofríe los ajos laminados con la guindilla en aceite de oliva.",
      "Escurre la pasta y saltéala en la sartén con el ajo.",
      "Añade perejil fresco picado y sirve caliente."
    ]
  },
  {
    titulo: "Espaguetis carbonara ligera",
    categoria: "Primero",
    tiempo: "30 min",
    ingredientes: [
      "300 g de espaguetis",
      "150 g de taquitos de jamón o bacon",
      "2 huevos",
      "50 g de queso parmesano rallado",
      "Aceite de oliva",
      "Sal",
      "Pimienta negra"
    ],
    pasos: [
      "Cuece los espaguetis en agua con sal hasta que estén al dente.",
      "Fríe el jamón o bacon en una sartén hasta dorar.",
      "Bate los huevos con el queso rallado, sal y pimienta.",
      "Mezcla la pasta caliente con el huevo y el bacon (sin cuajar demasiado).",
      "Sirve inmediatamente con más queso rallado."
    ]
  },
  {
    titulo: "Ensalada mixta",
    categoria: "Primero",
    tiempo: "15 min",
    ingredientes: [
      "Lechuga variada",
      "2 tomates",
      "1 cebolla",
      "1 lata de atún",
      "2 huevos duros",
      "Aceitunas verdes",
      "Aceite de oliva",
      "Vinagre",
      "Sal"
    ],
    pasos: [
      "Lava y trocea la lechuga y los tomates.",
      "Corta la cebolla en juliana fina.",
      "Coloca todo en una ensaladera junto con el atún desmenuzado y los huevos duros picados.",
      "Aliña con aceite, vinagre y sal justo antes de servir."
    ]
  },
  {
    titulo: "Ensalada campera",
    categoria: "Primero",
    tiempo: "25 min",
    ingredientes: [
      "3 patatas medianas",
      "2 huevos",
      "1 pimiento verde",
      "1 pimiento rojo",
      "1 cebolla",
      "2 tomates",
      "Aceitunas",
      "Aceite de oliva",
      "Vinagre",
      "Sal"
    ],
    pasos: [
      "Cuece las patatas y los huevos, deja enfriar y córtalos en dados.",
      "Trocea los pimientos, cebolla y tomates.",
      "Mezcla todos los ingredientes en una fuente con las aceitunas.",
      "Aliña con aceite, vinagre y sal.",
      "Sirve fría."
    ]
  },
  {
    titulo: "Ensalada de garbanzos",
    categoria: "Primero",
    tiempo: "15 min",
    ingredientes: [
      "400 g de garbanzos cocidos",
      "1 pimiento rojo",
      "1 pepino",
      "1 tomate grande",
      "1 cebolla morada",
      "Aceite de oliva",
      "Vinagre de vino",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Escurre y lava los garbanzos cocidos.",
      "Trocea el pimiento, pepino, tomate y cebolla en dados pequeños.",
      "Mezcla todo en un bol grande.",
      "Aliña con aceite, vinagre, sal y pimienta.",
      "Sirve frío."
    ]
  },
  {
    titulo: "Ensalada de pasta fría",
    categoria: "Primero",
    tiempo: "20 min",
    ingredientes: [
      "300 g de pasta corta (hélices, macarrones, etc.)",
      "100 g de jamón cocido en dados",
      "100 g de queso en dados",
      "1 zanahoria rallada",
      "Maíz dulce",
      "Aceite de oliva",
      "Vinagre",
      "Sal"
    ],
    pasos: [
      "Cuece la pasta en agua con sal y enfríala bajo agua fría.",
      "Mezcla la pasta con el jamón, queso, zanahoria rallada y maíz.",
      "Aliña con aceite, vinagre y sal.",
      "Sirve fría como plato ligero."
    ]
  },
  {
    titulo: "Tomates aliñados",
    categoria: "Primero",
    tiempo: "10 min",
    ingredientes: [
      "4 tomates maduros",
      "1 diente de ajo",
      "Aceite de oliva virgen extra",
      "Vinagre de Jerez",
      "Orégano",
      "Sal"
    ],
    pasos: [
      "Corta los tomates en rodajas finas y colócalos en una fuente.",
      "Pica el ajo muy fino y espárcelo por encima.",
      "Aliña con aceite, vinagre, sal y orégano.",
      "Deja reposar 10 minutos y sirve."
    ]
  },
  {
    titulo: "Papas arrugadas con mojo",
    categoria: "Primero",
    tiempo: "35 min",
    ingredientes: [
      "1 kg de papas pequeñas",
      "4 cucharadas de sal gorda",
      "Agua",
      "Para el mojo verde: 1 manojo de cilantro, 2 dientes de ajo, 100 ml de aceite de oliva, vinagre, comino, sal",
      "Para el mojo rojo: 2 pimientos secos, 2 dientes de ajo, 100 ml de aceite de oliva, vinagre, comino, sal, pimentón"
    ],
    pasos: [
      "Cuece las papas con mucha sal hasta que estén tiernas y con la piel arrugada.",
      "Tritura los ingredientes del mojo verde por un lado y los del mojo rojo por otro.",
      "Sirve las papas acompañadas de ambos mojos."
    ]
  },
  {
    titulo: "Pimientos asados",
    categoria: "Primero",
    tiempo: "50 min",
    ingredientes: [
      "3 pimientos rojos grandes",
      "2 dientes de ajo",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Coloca los pimientos enteros en una bandeja de horno.",
      "Ásalos a 200 ºC durante 40 minutos, dándoles la vuelta a la mitad.",
      "Pélalos y córtalos en tiras.",
      "Aliña con ajo picado, aceite y sal.",
      "Sirve templados o fríos."
    ]
  },
  {
    titulo: "Alcachofas salteadas",
    categoria: "Primero",
    tiempo: "35 min",
    ingredientes: [
      "8 alcachofas frescas",
      "2 dientes de ajo",
      "Zumo de 1 limón",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Limpia las alcachofas retirando hojas duras y puntas.",
      "Córtalas en cuartos y ponlas en agua con limón para que no se oxiden.",
      "Saltéalas en una sartén con aceite y ajo picado.",
      "Añade sal y pimienta al gusto.",
      "Sirve calientes como primer plato ligero."
    ]
  },
  {
    titulo: "Acelgas rehogadas",
    categoria: "Primero",
    tiempo: "25 min",
    ingredientes: [
      "500 g de acelgas frescas",
      "3 dientes de ajo",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Lava las acelgas y separa las pencas de las hojas.",
      "Cuece las pencas 10 minutos en agua con sal, añade las hojas y cuece 5 minutos más.",
      "Escúrrelas bien.",
      "En una sartén, sofríe los ajos laminados en aceite de oliva.",
      "Agrega las acelgas escurridas, salpimienta y rehoga unos minutos.",
      "Sirve calientes como plato ligero."
    ]
  },
  {
    titulo: "Sopa de pescado",
    categoria: "Primero",
    tiempo: "45 min",
    ingredientes: [
      "500 g de pescado de roca o morralla",
      "200 g de gambas",
      "1 cebolla",
      "2 tomates",
      "1 pimiento verde",
      "1 l de agua",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Prepara un caldo cociendo el pescado con agua, cebolla, tomate y pimiento durante 20 minutos.",
      "Cuela el caldo y resérvalo.",
      "En otra cazuela, sofríe un poco de cebolla y tomate picados.",
      "Añade las gambas peladas y rehoga brevemente.",
      "Vierte el caldo colado y cocina 10 minutos.",
      "Sirve bien caliente acompañado de pan frito si lo deseas."
    ]
  },
  {
    titulo: "Caldo gallego",
    categoria: "Primero",
    tiempo: "1 h",
    ingredientes: [
      "200 g de grelos o nabizas",
      "200 g de patatas",
      "200 g de alubias blancas cocidas",
      "100 g de chorizo",
      "1 hueso de jamón",
      "1,5 l de agua",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Pon el hueso de jamón en una olla con agua y hierve 30 minutos.",
      "Añade las patatas en trozos y las alubias cocidas.",
      "Agrega los grelos lavados y picados.",
      "Incorpora el chorizo en rodajas y cocina 20 minutos más.",
      "Rectifica de sal y sirve caliente."
    ]
  },
  {
    titulo: "Cocido andaluz (sopa)",
    categoria: "Primero",
    tiempo: "2 h 30 min",
    ingredientes: [
      "300 g de garbanzos",
      "1 hueso de jamón",
      "1 trozo de pollo",
      "1 trozo de ternera",
      "1 zanahoria",
      "1 patata",
      "1 puerro",
      "Sal"
    ],
    pasos: [
      "Pon en remojo los garbanzos la noche anterior.",
      "Cuece en una olla grande los garbanzos con las carnes y las verduras durante 2 horas.",
      "Cuela el caldo y úsalo como sopa, acompañándolo de fideos o arroz.",
      "Reserva las carnes y verduras para la 'pringá'."
    ]
  },
  {
    titulo: "Sopa minestrone",
    categoria: "Primero",
    tiempo: "50 min",
    ingredientes: [
      "150 g de judías blancas cocidas",
      "1 calabacín",
      "1 zanahoria",
      "1 rama de apio",
      "1 cebolla",
      "1 tomate",
      "100 g de pasta corta",
      "1,5 l de caldo de verduras",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Trocea todas las verduras en cubos pequeños.",
      "Sofríe la cebolla, la zanahoria y el apio en aceite de oliva.",
      "Añade el tomate rallado y cocina 5 minutos.",
      "Agrega el caldo y las judías blancas cocidas.",
      "Hierve 20 minutos, luego añade la pasta y cuece 10 minutos más.",
      "Sirve caliente."
    ]
  },
  {
    titulo: "Vichyssoise",
    categoria: "Primero",
    tiempo: "40 min + enfriado",
    ingredientes: [
      "4 puerros",
      "2 patatas",
      "1 cebolla",
      "1 l de caldo de pollo",
      "200 ml de nata líquida",
      "Mantequilla",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Lava y corta los puerros en rodajas finas.",
      "Pocha en mantequilla la cebolla y los puerros.",
      "Añade las patatas en cubos y cubre con caldo.",
      "Cuece 25 minutos hasta que estén tiernas.",
      "Tritura hasta obtener una crema suave.",
      "Agrega la nata, rectifica de sal y pimienta.",
      "Deja enfriar en la nevera y sirve fría."
    ]
  },
  {
    titulo: "Crema de zanahoria",
    categoria: "Primero",
    tiempo: "35 min",
    ingredientes: [
      "500 g de zanahorias",
      "2 patatas",
      "1 cebolla",
      "1 l de caldo de verduras",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Pela y trocea las zanahorias, patatas y cebolla.",
      "Pocha la cebolla en una cazuela con aceite.",
      "Añade las zanahorias y patatas y rehoga unos minutos.",
      "Cubre con caldo y cocina 25 minutos.",
      "Tritura hasta obtener una crema fina.",
      "Rectifica de sal y pimienta y sirve caliente."
    ]
  },
  {
    titulo: "Porrusalda",
    categoria: "Primero",
    tiempo: "40 min",
    ingredientes: [
      "3 puerros",
      "2 zanahorias",
      "2 patatas",
      "1 l de caldo de verduras",
      "Aceite de oliva",
      "Sal"
    ],
    pasos: [
      "Lava y corta los puerros en rodajas.",
      "Trocea las zanahorias y patatas.",
      "Pon todo en una olla con el caldo de verduras.",
      "Cuece 30 minutos a fuego medio.",
      "Rectifica de sal y sirve caliente."
    ]
  },
  {
    titulo: "Sopa de marisco",
    categoria: "Primero",
    tiempo: "45 min",
    ingredientes: [
      "200 g de gambas",
      "200 g de mejillones",
      "200 g de almejas",
      "1 cebolla",
      "2 tomates",
      "1 l de caldo de pescado",
      "Aceite de oliva",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Abre los mejillones y almejas al vapor y reserva su carne.",
      "Pocha cebolla y tomates en aceite.",
      "Añade las gambas peladas y sofríe un minuto.",
      "Vierte el caldo de pescado y cocina 15 minutos.",
      "Agrega los mejillones y almejas reservados.",
      "Rectifica de sal y pimienta y sirve caliente."
    ]
  },
  {
    titulo: "Caldo de pollo casero",
    categoria: "Primero",
    tiempo: "1 h 30 min",
    ingredientes: [
      "1 carcasa de pollo",
      "1 muslo de pollo",
      "2 zanahorias",
      "1 puerro",
      "1 rama de apio",
      "1 cebolla",
      "2 l de agua",
      "Sal"
    ],
    pasos: [
      "Pon el pollo y las verduras en una olla grande con agua y sal.",
      "Lleva a ebullición y retira la espuma que se forme.",
      "Cuece a fuego lento durante 1 hora y media.",
      "Cuela el caldo y úsalo para sopas o cremas.",
      "Sirve caliente o guarda en la nevera."
    ]
  },
  {
    titulo: "Pollo al ajillo",
    categoria: "Segundo",
    tiempo: "50 min",
    ingredientes: [
      "1 pollo troceado en partes medianas",
      "8 dientes de ajo enteros con piel",
      "100 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta negra recién molida",
      "Perejil fresco picado"
    ],
    pasos: [
      "Limpia y trocea el pollo en piezas medianas, sécalo bien con papel de cocina y salpimiéntalo generosamente.",
      "En una cazuela amplia, añade abundante aceite de oliva y sofríe los ajos enteros con piel hasta que estén dorados, retirándolos después para reservar.",
      "Dora el pollo a fuego medio-alto en el mismo aceite, asegurándote de que quede bien sellado por todos los lados y con la piel crujiente.",
      "Añade de nuevo los ajos dorados, remueve bien y vierte el vino blanco. Deja que evapore el alcohol durante unos minutos.",
      "Baja el fuego, tapa la cazuela y cocina 25–30 minutos, removiendo de vez en cuando.",
      "Rectifica de sal y pimienta, espolvorea perejil fresco picado y sirve caliente acompañado de patatas o arroz blanco."
    ]
  },
  {
    titulo: "Pollo al horno con patatas",
    categoria: "Segundo",
    tiempo: "1 h 15 min",
    ingredientes: [
      "1 pollo entero limpio",
      "1 kg de patatas cortadas en rodajas gruesas",
      "2 cebollas en juliana",
      "4 dientes de ajo laminados",
      "150 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "Tomillo y romero frescos"
    ],
    pasos: [
      "Precalienta el horno a 200 ºC con calor arriba y abajo.",
      "Coloca en una bandeja las patatas en rodajas y las cebollas en juliana, salpimiéntalas y añade un chorrito de aceite.",
      "Unta el pollo con aceite, sal, pimienta y hierbas aromáticas, colocándolo encima de las patatas.",
      "Añade el vino blanco y los ajos laminados por encima, cubre con papel de aluminio y hornea 45 minutos.",
      "Retira el papel de aluminio, sube la temperatura a 220 ºC y cocina 20 minutos más para dorar la piel.",
      "Sirve caliente con las patatas impregnadas del jugo del pollo."
    ]
  },
  {
    titulo: "Pollo en pepitoria",
    categoria: "Segundo",
    tiempo: "1 h 10 min",
    ingredientes: [
      "1 pollo troceado",
      "2 cebollas medianas picadas",
      "2 dientes de ajo",
      "50 g de almendras tostadas",
      "2 yemas de huevo duro",
      "150 ml de vino blanco seco",
      "500 ml de caldo de ave",
      "Harina para rebozar",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "Azafrán en hebras"
    ],
    pasos: [
      "Salpimienta y enharina ligeramente los trozos de pollo. Fríelos en una cazuela con aceite caliente hasta que estén dorados por fuera. Reserva.",
      "En el mismo aceite, sofríe la cebolla y el ajo hasta que queden bien pochados.",
      "Añade las almendras, el azafrán y las yemas de huevo duro. Tritura todo con un poco de caldo hasta obtener una salsa fina.",
      "Vierte la salsa en la cazuela con el pollo, añade el vino blanco y el resto del caldo. Cocina a fuego lento durante 40–45 minutos.",
      "Remueve de vez en cuando para evitar que se agarre. Rectifica de sal y pimienta.",
      "Sirve acompañado de arroz blanco o patatas fritas."
    ]
  },
  {
    titulo: "Pechuga de pollo a la plancha",
    categoria: "Segundo",
    tiempo: "20 min",
    ingredientes: [
      "2 pechugas de pollo enteras",
      "Aceite de oliva virgen extra",
      "Sal gruesa",
      "Pimienta negra recién molida",
      "Zumo de medio limón (opcional)"
    ],
    pasos: [
      "Limpia las pechugas retirando la grasa y córtalas en filetes gruesos.",
      "Calienta una sartén o plancha a fuego fuerte con unas gotas de aceite de oliva.",
      "Coloca los filetes y cocínalos 2–3 minutos por cada lado para que queden dorados y jugosos.",
      "Añade sal gruesa, pimienta y, si lo deseas, unas gotas de limón.",
      "Sirve inmediatamente con ensalada o verduras a la plancha."
    ]
  },
  {
    titulo: "Escalope de ternera",
    categoria: "Segundo",
    tiempo: "30 min",
    ingredientes: [
      "4 filetes de ternera finos",
      "2 huevos batidos",
      "Pan rallado",
      "Harina",
      "Aceite de oliva para freír",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Salpimienta los filetes de ternera por ambos lados.",
      "Pásalos primero por harina, luego por huevo batido y finalmente por pan rallado.",
      "Calienta aceite en una sartén y fríe los filetes hasta que estén dorados.",
      "Escúrrelos sobre papel absorbente para quitar el exceso de grasa.",
      "Sirve acompañados de patatas fritas o ensalada verde."
    ]
  },
  {
    titulo: "Filete de ternera a la plancha",
    categoria: "Segundo",
    tiempo: "15 min",
    ingredientes: [
      "2 filetes de ternera gruesos",
      "Aceite de oliva virgen extra",
      "Sal en escamas",
      "Pimienta negra recién molida"
    ],
    pasos: [
      "Saca los filetes de la nevera 30 minutos antes de cocinarlos.",
      "Calienta una plancha con unas gotas de aceite.",
      "Coloca los filetes y cocínalos 2–4 minutos por cada lado, según el punto deseado.",
      "Añade sal en escamas y pimienta al final.",
      "Sirve con verduras asadas o patatas al horno."
    ]
  },
  {
    titulo: "Carrilleras al vino tinto",
    categoria: "Segundo",
    tiempo: "2 h 30 min",
    ingredientes: [
      "1 kg de carrilleras de cerdo o ternera",
      "2 zanahorias en rodajas",
      "2 cebollas en juliana",
      "2 dientes de ajo",
      "500 ml de vino tinto de calidad",
      "500 ml de caldo de carne",
      "Aceite de oliva virgen extra",
      "Harina para rebozar",
      "Sal",
      "Pimienta",
      "1 hoja de laurel"
    ],
    pasos: [
      "Limpia las carrilleras y salpimiéntalas. Enharínalas ligeramente.",
      "Dóralas en una cazuela con aceite y resérvalas.",
      "En el mismo aceite sofríe las cebollas, zanahorias y ajos durante 15 minutos hasta caramelizar.",
      "Añade las carrilleras, el vino tinto y deja reducir 10 minutos.",
      "Agrega el caldo y el laurel, cocina a fuego lento 2 horas tapado.",
      "Sirve con puré de patata o verduras asadas."
    ]
  },
  {
    titulo: "Rabo de toro",
    categoria: "Segundo",
    tiempo: "3 h 30 min",
    ingredientes: [
      "1,5 kg de rabo de toro troceado",
      "2 zanahorias",
      "2 cebollas",
      "1 puerro",
      "2 dientes de ajo",
      "500 ml de vino tinto",
      "500 ml de caldo de carne",
      "2 tomates maduros",
      "Harina para rebozar",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "1 hoja de laurel"
    ],
    pasos: [
      "Salpimienta los trozos de rabo y pásalos por harina.",
      "Dóralos en una cazuela con aceite y resérvalos.",
      "Sofríe cebolla, puerro, zanahoria, ajo y tomate picados hasta que estén blandos.",
      "Devuelve el rabo a la cazuela, vierte el vino y deja reducir 15 minutos.",
      "Agrega caldo y laurel, tapa y cocina 3 horas a fuego lento.",
      "Sirve con puré de patata o arroz blanco."
    ]
  },
  {
    titulo: "Albóndigas en salsa",
    categoria: "Segundo",
    tiempo: "1 h",
    ingredientes: [
      "500 g de carne picada mixta (cerdo y ternera)",
      "1 huevo",
      "2 rebanadas de pan remojadas en leche",
      "2 dientes de ajo",
      "Perejil fresco picado",
      "Harina para rebozar",
      "Aceite de oliva virgen extra",
      "1 cebolla picada",
      "200 g de tomate triturado",
      "250 ml de caldo de carne",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Mezcla la carne con huevo, pan escurrido, ajo, perejil, sal y pimienta. Forma bolitas pequeñas.",
      "Pásalas por harina y fríelas en aceite caliente hasta dorar. Reserva.",
      "En la misma sartén sofríe la cebolla, añade el tomate y cocina 10 minutos.",
      "Agrega el caldo, incorpora las albóndigas y cocina 20 minutos a fuego lento.",
      "Sirve con arroz blanco o patatas fritas."
    ]
  },
  {
    titulo: "Lomo adobado",
    categoria: "Segundo",
    tiempo: "4 h (marinado) + 20 min",
    ingredientes: [
      "1 kg de lomo de cerdo en filetes",
      "3 dientes de ajo",
      "1 cucharada de pimentón dulce",
      "1 cucharadita de orégano seco",
      "100 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Machaca los ajos con sal, pimienta, orégano y pimentón. Añade el vino blanco y mezcla.",
      "Unta el lomo con el adobo y deja reposar tapado en la nevera al menos 4 horas.",
      "Fríe los filetes en una sartén con aceite hasta dorar.",
      "Sirve con patatas fritas o pan recién hecho."
    ]
  },
  {
    titulo: "Costillas al horno",
    categoria: "Segundo",
    tiempo: "1 h 30 min",
    ingredientes: [
      "1 kg de costillas de cerdo",
      "4 dientes de ajo",
      "2 cucharadas de miel",
      "2 cucharadas de mostaza",
      "2 cucharadas de salsa de soja",
      "1 cucharada de pimentón dulce",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Precalienta el horno a 190 ºC.",
      "Prepara un adobo con ajo picado, miel, mostaza, salsa de soja, pimentón, aceite, sal y pimienta.",
      "Unta bien las costillas y colócalas en una bandeja de horno.",
      "Cubre con papel de aluminio y hornea 1 hora.",
      "Retira el papel y hornea 20 minutos más para dorar.",
      "Sirve con patatas asadas o ensalada."
    ]
  },
  {
    titulo: "Chuletillas de cordero",
    categoria: "Segundo",
    tiempo: "20 min",
    ingredientes: [
      "12 chuletillas de cordero",
      "2 dientes de ajo",
      "1 ramita de romero fresco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Prepara un majado con ajo picado, romero, aceite, sal y pimienta.",
      "Unta las chuletillas con el majado y deja reposar 15 minutos.",
      "Cocínalas a la plancha 2 minutos por cada lado.",
      "Sirve calientes con verduras asadas."
    ]
  },
  {
    titulo: "Cordero asado",
    categoria: "Segundo",
    tiempo: "2 h",
    ingredientes: [
      "1 pierna de cordero lechal",
      "4 dientes de ajo",
      "1 vaso de vino blanco",
      "1 vaso de agua",
      "2 ramas de romero fresco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Precalienta el horno a 180 ºC.",
      "Coloca el cordero en una bandeja, añade ajos machacados, romero, vino, agua y aceite.",
      "Hornea 2 horas, girando la pieza a la mitad y bañándola con sus jugos.",
      "Sirve con patatas panaderas."
    ]
  },
  {
    titulo: "Secreto ibérico a la plancha",
    categoria: "Segundo",
    tiempo: "25 min",
    ingredientes: [
      "600 g de secreto ibérico",
      "Sal en escamas",
      "Pimienta negra molida",
      "Aceite de oliva virgen extra"
    ],
    pasos: [
      "Saca la carne 30 minutos antes de cocinar.",
      "Calienta una plancha con un poco de aceite.",
      "Cocina 3–4 minutos por lado.",
      "Agrega sal en escamas y pimienta.",
      "Sirve fileteado con guarnición."
    ]
  },
  {
    titulo: "Solomillo al roquefort",
    categoria: "Segundo",
    tiempo: "40 min",
    ingredientes: [
      "4 medallones de solomillo de ternera",
      "150 g de queso roquefort",
      "200 ml de nata líquida",
      "1 cucharada de mantequilla",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Salpimienta y dora los solomillos en una sartén con mantequilla y aceite.",
      "Retira y reserva.",
      "En la misma sartén, derrite el queso con la nata hasta hacer una salsa cremosa.",
      "Devuelve los solomillos y cocina 5 minutos más.",
      "Sirve con puré de patatas o arroz blanco."
    ]
  },
  {
    titulo: "Bacalao a la vizcaína",
    categoria: "Segundo",
    tiempo: "50 min",
    ingredientes: [
      "4 lomos de bacalao desalado",
      "3 cebollas",
      "2 pimientos choriceros hidratados",
      "2 tomates maduros",
      "2 dientes de ajo",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Pocha las cebollas y los ajos en aceite hasta que estén blandos.",
      "Añade la pulpa de los pimientos choriceros y el tomate rallado.",
      "Cocina 30 minutos a fuego lento hasta espesar.",
      "Agrega el bacalao y cocina 10 minutos más.",
      "Sirve con pan para mojar la salsa."
    ]
  },
  {
    titulo: "Bacalao al pil-pil",
    categoria: "Segundo",
    tiempo: "40 min",
    ingredientes: [
      "4 lomos de bacalao desalado",
      "200 ml de aceite de oliva virgen extra",
      "4 dientes de ajo laminados",
      "1 guindilla seca",
      "Sal"
    ],
    pasos: [
      "Fríe los ajos y la guindilla en aceite. Retira los ajos.",
      "Coloca el bacalao con la piel hacia arriba y cocina 10 minutos a fuego suave.",
      "Mueve la cazuela en vaivén hasta emulsionar la salsa.",
      "Añade los ajos reservados.",
      "Sirve caliente acompañado de pan."
    ]
  },
  {
    titulo: "Merluza en salsa verde",
    categoria: "Segundo",
    tiempo: "30 min",
    ingredientes: [
      "4 lomos de merluza",
      "200 ml de caldo de pescado",
      "3 dientes de ajo",
      "1 manojo de perejil fresco",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Sofríe los ajos en aceite hasta dorar.",
      "Añade el caldo y lleva a ebullición.",
      "Agrega la merluza y cocina 8 minutos.",
      "Espolvorea perejil fresco.",
      "Sirve inmediatamente."
    ]
  },
  {
    titulo: "Dorada al horno",
    categoria: "Segundo",
    tiempo: "40 min",
    ingredientes: [
      "2 doradas limpias",
      "2 patatas",
      "1 cebolla",
      "2 dientes de ajo",
      "1 vaso de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Precalienta el horno a 200 ºC.",
      "Coloca patatas y cebolla en rodajas en una bandeja con sal, pimienta y aceite. Hornea 15 minutos.",
      "Añade las doradas encima con ajos laminados y el vino.",
      "Hornea 25 minutos más.",
      "Sirve con las patatas de guarnición."
    ]
  },
  {
    titulo: "Lubina a la sal",
    categoria: "Segundo",
    tiempo: "45 min",
    ingredientes: [
      "1 lubina de 1,2 kg",
      "2 kg de sal gruesa",
      "2 claras de huevo"
    ],
    pasos: [
      "Precalienta el horno a 200 ºC.",
      "Mezcla la sal con las claras hasta compactar.",
      "Cubre la base de una bandeja, coloca la lubina y cúbrela del todo.",
      "Hornea 35 minutos.",
      "Rompe la costra de sal, limpia y sirve con verduras al vapor."
    ]
  },
  {
    titulo: "Salmón al papillote",
    categoria: "Segundo",
    tiempo: "30 min",
    ingredientes: [
      "4 lomos de salmón fresco",
      "1 calabacín",
      "1 zanahoria",
      "1 limón en rodajas",
      "Aceite de oliva virgen extra",
      "Eneldo fresco",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Precalienta el horno a 200 ºC.",
      "Corta el calabacín y la zanahoria en tiras finas.",
      "Coloca cada lomo de salmón en papel de horno, añade verduras, limón, sal, pimienta y eneldo.",
      "Riega con un chorrito de aceite, cierra el papillote bien sellado.",
      "Hornea 15 minutos.",
      "Sirve caliente en su propio paquete para conservar el aroma."
    ]
  },
  {
    titulo: "Atún encebollado",
    categoria: "Segundo",
    tiempo: "40 min",
    ingredientes: [
      "600 g de atún fresco en tacos",
      "3 cebollas grandes",
      "3 dientes de ajo",
      "150 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "Laurel"
    ],
    pasos: [
      "Corta la cebolla en juliana y sofríela lentamente en aceite con los ajos laminados y una hoja de laurel.",
      "Añade el vino blanco y cocina hasta que evapore el alcohol.",
      "Incorpora el atún en tacos, salpimienta y cocina 5–7 minutos para que quede jugoso.",
      "Sirve caliente acompañado de pan o arroz."
    ]
  },
  {
    titulo: "Calamares en su tinta",
    categoria: "Segundo",
    tiempo: "1 h",
    ingredientes: [
      "1 kg de calamares limpios",
      "2 cebollas",
      "2 tomates maduros",
      "2 dientes de ajo",
      "2 sobres de tinta de calamar",
      "100 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Trocea los calamares y reserva los tentáculos.",
      "Pocha la cebolla y el ajo en aceite, añade el tomate rallado y sofríe 10 minutos.",
      "Agrega los calamares y sofríe 5 minutos.",
      "Añade el vino, deja reducir y luego incorpora la tinta disuelta en un poco de agua.",
      "Cuece 30 minutos a fuego lento.",
      "Sirve con arroz blanco."
    ]
  },
  {
    titulo: "Pulpo a la gallega",
    categoria: "Segundo",
    tiempo: "1 h",
    ingredientes: [
      "1 pulpo de 1,5 kg",
      "4 patatas medianas",
      "Pimentón dulce y picante",
      "Aceite de oliva virgen extra",
      "Sal gorda"
    ],
    pasos: [
      "Congela el pulpo 48 horas para ablandarlo y luego descongélalo.",
      "Hiérvelo en agua con sal durante 40 minutos, asustándolo previamente (introducir y sacar tres veces).",
      "Cuece las patatas en la misma agua y córtalas en rodajas.",
      "Sirve el pulpo cortado en rodajas sobre las patatas.",
      "Aliña con sal gorda, pimentón y aceite de oliva."
    ]
  },
  {
    titulo: "Paella mixta",
    categoria: "Segundo",
    tiempo: "1 h",
    ingredientes: [
      "400 g de arroz bomba",
      "500 g de pollo troceado",
      "250 g de conejo troceado",
      "200 g de gambas",
      "150 g de mejillones",
      "1 pimiento rojo",
      "2 tomates rallados",
      "1 l de caldo de ave o pescado",
      "Hebras de azafrán",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Sofríe en una paellera el pollo y el conejo hasta dorar.",
      "Añade el pimiento rojo en tiras y el tomate rallado.",
      "Agrega el arroz y sofríelo 2 minutos.",
      "Vierte el caldo caliente con el azafrán disuelto.",
      "Distribuye las gambas y mejillones por encima.",
      "Cocina 18 minutos sin remover hasta que el arroz esté en su punto.",
      "Deja reposar 5 minutos antes de servir."
    ]
  },
  {
    titulo: "Arroz con pollo",
    categoria: "Segundo",
    tiempo: "50 min",
    ingredientes: [
      "400 g de arroz",
      "500 g de pollo en trozos",
      "1 pimiento verde",
      "1 cebolla",
      "2 tomates maduros",
      "1 l de caldo de pollo",
      "Hebras de azafrán",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Sofríe el pollo hasta dorar, añade cebolla, pimiento y tomate rallado.",
      "Agrega el arroz y sofríe un par de minutos.",
      "Vierte el caldo caliente con el azafrán.",
      "Cocina 18 minutos hasta que el arroz absorba todo el líquido.",
      "Deja reposar 5 minutos antes de servir."
    ]
  },
  {
    titulo: "Arroz con bogavante",
    categoria: "Segundo",
    tiempo: "1 h",
    ingredientes: [
      "1 bogavante",
      "400 g de arroz",
      "1 pimiento rojo",
      "1 cebolla",
      "2 tomates",
      "1 l de caldo de pescado",
      "Aceite de oliva virgen extra",
      "Pimentón dulce",
      "Sal"
    ],
    pasos: [
      "Trocea el bogavante y sofríelo en una cazuela con aceite. Reserva.",
      "Pocha cebolla y pimiento, añade tomate rallado y sofríe.",
      "Agrega el arroz, sofríe 2 minutos y añade el caldo con el pimentón.",
      "Devuelve el bogavante y cocina 18 minutos.",
      "Sirve caliente con perejil fresco."
    ]
  },
  {
    titulo: "Empanada gallega de atún",
    categoria: "Segundo",
    tiempo: "1 h 20 min",
    ingredientes: [
      "500 g de masa de empanada",
      "300 g de atún en conserva escurrido",
      "2 pimientos rojos",
      "2 cebollas",
      "2 tomates",
      "2 huevos duros",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Pocha la cebolla y el pimiento en aceite, añade el tomate y cocina 15 minutos.",
      "Agrega el atún desmenuzado y los huevos picados.",
      "Extiende la masa y coloca el relleno.",
      "Cubre con otra capa de masa, sella los bordes y haz un agujero en el centro.",
      "Hornea a 180 ºC durante 45 minutos.",
      "Sirve templada o fría."
    ]
  },
  {
    titulo: "Pisto con huevos",
    categoria: "Segundo",
    tiempo: "45 min",
    ingredientes: [
      "2 calabacines",
      "1 berenjena",
      "1 pimiento rojo",
      "1 pimiento verde",
      "1 cebolla",
      "2 tomates maduros",
      "4 huevos",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Trocea todas las verduras en cubos pequeños.",
      "Pocha cebolla y pimientos, añade calabacín y berenjena.",
      "Agrega el tomate rallado y cocina 20 minutos.",
      "Haz huecos y casca los huevos dentro, tapa y cocina hasta que cuajen.",
      "Sirve caliente acompañado de pan."
    ]
  },
  {
    titulo: "Tortilla de patatas",
    categoria: "Segundo",
    tiempo: "40 min",
    ingredientes: [
      "5 patatas medianas",
      "1 cebolla",
      "6 huevos",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Pela y corta las patatas en rodajas finas. Fríelas en abundante aceite con la cebolla picada.",
      "Escúrrelas bien y mezcla con los huevos batidos.",
      "Cuaja la mezcla en una sartén antiadherente, dorando por ambos lados.",
      "Sirve templada o fría."
    ]
  },
  {
    titulo: "Revuelto de setas",
    categoria: "Segundo",
    tiempo: "25 min",
    ingredientes: [
      "400 g de setas variadas",
      "4 huevos",
      "2 dientes de ajo",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "Perejil fresco picado"
    ],
    pasos: [
      "Limpia y trocea las setas.",
      "Sofríe los ajos laminados en aceite, añade las setas y cocina hasta que suelten el agua.",
      "Bate los huevos, salpimiéntalos y añádelos a la sartén.",
      "Remueve suavemente hasta que cuajen sin resecarse.",
      "Espolvorea perejil fresco y sirve caliente."
    ]
  },
  {
    titulo: "Conejo al ajillo",
    categoria: "Segundo",
    tiempo: "50 min",
    ingredientes: [
      "1 conejo troceado",
      "8 dientes de ajo",
      "150 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta",
      "Tomillo fresco"
    ],
    pasos: [
      "Salpimienta los trozos de conejo y dóralos en una sartén con aceite de oliva.",
      "Añade los ajos enteros y sofríe hasta que se doren.",
      "Vierte el vino blanco y deja evaporar el alcohol.",
      "Añade tomillo fresco y cocina tapado a fuego medio durante 30 minutos.",
      "Sirve con patatas fritas o arroz blanco."
    ]
  },
  {
    titulo: "Codornices escabechadas",
    categoria: "Segundo",
    tiempo: "1 h 30 min",
    ingredientes: [
      "4 codornices limpias",
      "2 zanahorias en rodajas",
      "1 cebolla en juliana",
      "4 dientes de ajo",
      "200 ml de vino blanco",
      "200 ml de vinagre de vino blanco",
      "200 ml de agua",
      "Aceite de oliva virgen extra",
      "Laurel",
      "Pimienta en grano",
      "Sal"
    ],
    pasos: [
      "Dora las codornices en una cazuela con aceite y resérvalas.",
      "En el mismo aceite sofríe cebolla, zanahoria y ajos.",
      "Añade vino, vinagre, agua, laurel, sal y pimienta en grano.",
      "Introduce las codornices y cocina tapado 1 hora a fuego lento.",
      "Sirve frío o templado, reposado al menos 12 horas."
    ]
  },
  {
    titulo: "Callos a la madrileña",
    categoria: "Segundo",
    tiempo: "3 h",
    ingredientes: [
      "1 kg de callos de ternera limpios",
      "200 g de chorizo",
      "200 g de morcilla",
      "150 g de jamón serrano en tacos",
      "1 cebolla",
      "1 pimiento choricero hidratado",
      "2 dientes de ajo",
      "2 hojas de laurel",
      "1 guindilla",
      "Pimentón dulce",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Cuece los callos en agua con laurel hasta que estén tiernos (2–3 horas).",
      "Haz un sofrito con cebolla, ajo, pimiento choricero y pimentón.",
      "Añade chorizo, morcilla y jamón en tacos, sofríe unos minutos.",
      "Incorpora los callos cocidos con un poco de su caldo.",
      "Cuece todo junto 30 minutos más.",
      "Sirve caliente acompañado de pan."
    ]
  },
  {
    titulo: "Fabada asturiana",
    categoria: "Segundo",
    tiempo: "2 h 30 min",
    ingredientes: [
      "500 g de fabes (alubias blancas asturianas)",
      "2 chorizos asturianos",
      "2 morcillas asturianas",
      "200 g de panceta",
      "1 hueso de jamón",
      "2 hojas de laurel",
      "Azafrán en hebras",
      "Agua",
      "Sal"
    ],
    pasos: [
      "Deja las fabes en remojo la noche anterior.",
      "Ponlas en una olla con el chorizo, morcilla, panceta, hueso de jamón y laurel.",
      "Cubre con agua fría y lleva a ebullición, desespumando.",
      "Añade azafrán y cuece a fuego lento 2 horas.",
      "Rectifica de sal al final y sirve bien caliente."
    ]
  },
  {
    titulo: "Marmitako de bonito",
    categoria: "Segundo",
    tiempo: "1 h",
    ingredientes: [
      "600 g de bonito en tacos",
      "1 kg de patatas",
      "2 pimientos verdes",
      "1 cebolla",
      "2 tomates maduros",
      "150 ml de vino blanco",
      "Caldo de pescado",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Pocha cebolla, pimientos y tomate rallado en aceite.",
      "Añade las patatas chascadas y sofríe unos minutos.",
      "Vierte vino blanco, deja reducir y añade caldo hasta cubrir.",
      "Cuece 30 minutos hasta que las patatas estén tiernas.",
      "Agrega el bonito, apaga el fuego y deja que se haga con el calor residual.",
      "Sirve caliente con pan."
    ]
  },
  {
    titulo: "Chuletón a la plancha",
    categoria: "Segundo",
    tiempo: "20 min",
    ingredientes: [
      "2 chuletones de vaca de 1 kg cada uno",
      "Aceite de oliva",
      "Sal gorda",
      "Pimienta negra"
    ],
    pasos: [
      "Saca los chuletones de la nevera 2 horas antes.",
      "Calienta una plancha de hierro muy fuerte y añade unas gotas de aceite.",
      "Coloca el chuletón y cocina 3–4 minutos por cada lado, según el punto deseado.",
      "Deja reposar 5 minutos antes de cortar.",
      "Sirve con sal gorda y pimienta recién molida."
    ]
  },
  {
    titulo: "Escabeche de caballa",
    categoria: "Segundo",
    tiempo: "1 h",
    ingredientes: [
      "4 caballas limpias en lomos",
      "2 zanahorias en rodajas",
      "1 cebolla en juliana",
      "3 dientes de ajo",
      "200 ml de vinagre de vino blanco",
      "200 ml de agua",
      "100 ml de vino blanco",
      "Aceite de oliva virgen extra",
      "Laurel",
      "Pimienta en grano",
      "Sal"
    ],
    pasos: [
      "Fríe ligeramente los lomos de caballa en aceite y resérvalos.",
      "En el mismo aceite sofríe cebolla, zanahoria y ajos.",
      "Añade vino, vinagre, agua, laurel, sal y pimienta en grano.",
      "Introduce la caballa y cuece 10 minutos a fuego bajo.",
      "Deja reposar al menos 24 horas antes de consumir."
    ]
  },
  {
    titulo: "Bonito con tomate",
    categoria: "Segundo",
    tiempo: "45 min",
    ingredientes: [
      "600 g de bonito fresco en tacos",
      "1 cebolla grande",
      "3 tomates maduros",
      "2 dientes de ajo",
      "Aceite de oliva virgen extra",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Pocha la cebolla y los ajos en aceite de oliva.",
      "Añade el tomate rallado y cocina 15 minutos hasta que reduzca.",
      "Incorpora el bonito en tacos, salpimienta y cocina 10 minutos.",
      "Sirve caliente acompañado de arroz o pan."
    ]
  },
  {
    titulo: "Trucha a la navarra",
    categoria: "Segundo",
    tiempo: "30 min",
    ingredientes: [
      "4 truchas limpias y abiertas en libro",
      "4 lonchas de jamón serrano",
      "Harina para rebozar",
      "Aceite de oliva virgen extra",
      "Sal"
    ],
    pasos: [
      "Sala ligeramente las truchas y rellénalas con una loncha de jamón.",
      "Ciérralas, pásalas por harina y fríelas en abundante aceite caliente.",
      "Dóralas por ambos lados y escurre sobre papel absorbente.",
      "Sirve calientes con ensalada verde."
    ]
  },
  {
    titulo: "Flan casero",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "500 ml de leche entera",
      "4 huevos",
      "100 g de azúcar",
      "1 ramita de canela",
      "Corteza de limón",
      "Caramelo líquido"
    ],
    pasos: [
      "Hierve la leche con la canela y la corteza de limón, luego deja templar.",
      "Bate los huevos con el azúcar hasta que blanqueen.",
      "Añade la leche colada poco a poco sin dejar de batir.",
      "Cubre el fondo de un molde con caramelo líquido.",
      "Vierte la mezcla y hornea al baño maría a 180 ºC durante 45 minutos.",
      "Deja enfriar y desmolda antes de servir."
    ]
  },
  {
    titulo: "Natillas caseras",
    categoria: "Postre",
    tiempo: "40 min",
    ingredientes: [
      "1 l de leche entera",
      "6 yemas de huevo",
      "150 g de azúcar",
      "1 ramita de canela",
      "Corteza de limón",
      "1 cucharada de maicena",
      "Galletas María",
      "Canela en polvo"
    ],
    pasos: [
      "Hierve la leche con canela y limón, reserva templada.",
      "Bate las yemas con azúcar y maicena hasta integrar.",
      "Añade la leche colada poco a poco y mezcla bien.",
      "Cocina a fuego medio removiendo hasta que espese.",
      "Sirve en cuencos con una galleta encima y espolvorea canela."
    ]
  },
  {
    titulo: "Arroz con leche",
    categoria: "Postre",
    tiempo: "1 h 10 min",
    ingredientes: [
      "200 g de arroz redondo",
      "1,5 l de leche entera",
      "150 g de azúcar",
      "1 ramita de canela",
      "Corteza de limón",
      "Mantequilla (opcional)"
    ],
    pasos: [
      "Lava el arroz bajo agua fría.",
      "Cuece el arroz en agua 5 minutos y escúrrelo.",
      "Pon la leche a hervir con canela y limón.",
      "Añade el arroz y cocina a fuego bajo 50 minutos removiendo.",
      "Agrega azúcar y mantequilla, remueve y deja reposar.",
      "Sirve frío espolvoreado con canela."
    ]
  },
  {
    titulo: "Leche frita",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "500 ml de leche entera",
      "100 g de azúcar",
      "60 g de maicena",
      "1 ramita de canela",
      "Corteza de limón",
      "Harina",
      "Huevo batido",
      "Aceite de oliva suave",
      "Azúcar y canela para rebozar"
    ],
    pasos: [
      "Hierve la leche con canela y limón, luego cuela.",
      "Mezcla maicena, azúcar y un poco de leche fría.",
      "Une con el resto de leche caliente y cuece hasta espesar.",
      "Extiende en una fuente y deja enfriar varias horas.",
      "Corta en porciones, pásalas por harina y huevo.",
      "Fríe en aceite, escurre y reboza en azúcar y canela."
    ]
  },
  {
    titulo: "Torrijas",
    categoria: "Postre",
    tiempo: "40 min",
    ingredientes: [
      "1 barra de pan del día anterior",
      "1 l de leche",
      "200 g de azúcar",
      "1 ramita de canela",
      "Corteza de limón",
      "4 huevos",
      "Aceite de oliva suave",
      "Azúcar y canela para rebozar"
    ],
    pasos: [
      "Hierve la leche con azúcar, canela y limón, deja templar.",
      "Corta el pan en rebanadas y empápalas en la leche.",
      "Pásalas por huevo batido y fríelas en aceite caliente.",
      "Escurre sobre papel y reboza en azúcar y canela.",
      "Sirve templadas o frías."
    ]
  },
  {
    titulo: "Crema catalana",
    categoria: "Postre",
    tiempo: "45 min",
    ingredientes: [
      "1 l de leche",
      "8 yemas de huevo",
      "200 g de azúcar",
      "40 g de maicena",
      "Corteza de limón",
      "1 ramita de canela",
      "Azúcar para quemar"
    ],
    pasos: [
      "Hierve la leche con limón y canela, cuela y deja templar.",
      "Bate yemas, azúcar y maicena, añade la leche poco a poco.",
      "Cocina a fuego medio hasta que espese.",
      "Reparte en cazuelitas y enfría.",
      "Antes de servir, cubre con azúcar y quema con soplete."
    ]
  },
  {
    titulo: "Tarta de queso al horno",
    categoria: "Postre",
    tiempo: "1 h 20 min",
    ingredientes: [
      "500 g de queso crema",
      "200 ml de nata líquida",
      "150 g de azúcar",
      "4 huevos",
      "1 cucharada de harina",
      "1 base de galletas trituradas con mantequilla"
    ],
    pasos: [
      "Precalienta el horno a 180 ºC.",
      "Mezcla queso, nata, azúcar, huevos y harina hasta obtener una crema homogénea.",
      "Extiende la base de galleta en un molde y vierte la mezcla.",
      "Hornea 50 minutos y deja enfriar dentro del horno.",
      "Sirve fría con mermelada de frutos rojos si deseas."
    ]
  },
  {
    titulo: "Tarta de Santiago",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "250 g de almendra molida",
      "250 g de azúcar",
      "4 huevos",
      "Ralladura de limón",
      "Azúcar glas para decorar"
    ],
    pasos: [
      "Bate los huevos con azúcar hasta espumar.",
      "Añade la almendra molida y ralladura de limón, mezcla bien.",
      "Vierte en un molde engrasado y hornea 35 minutos a 180 ºC.",
      "Deja enfriar y decora con azúcar glas usando la cruz de Santiago."
    ]
  },
  {
    titulo: "Bizcocho de yogur",
    categoria: "Postre",
    tiempo: "45 min",
    ingredientes: [
      "1 yogur natural (el vaso servirá de medida)",
      "3 vasos de harina",
      "2 vasos de azúcar",
      "1 vaso de aceite de girasol",
      "3 huevos",
      "1 sobre de levadura en polvo",
      "Ralladura de limón"
    ],
    pasos: [
      "Precalienta el horno a 180 ºC.",
      "Bate huevos y azúcar hasta blanquear.",
      "Añade yogur, aceite y ralladura de limón.",
      "Agrega la harina tamizada con levadura y mezcla bien.",
      "Vierte en un molde engrasado y hornea 35 minutos.",
      "Deja enfriar antes de desmoldar."
    ]
  },
  {
    titulo: "Bizcocho de naranja",
    categoria: "Postre",
    tiempo: "50 min",
    ingredientes: [
      "3 huevos",
      "200 g de azúcar",
      "200 g de harina",
      "100 ml de aceite de girasol",
      "Zumo y ralladura de 1 naranja",
      "1 sobre de levadura química"
    ],
    pasos: [
      "Precalienta el horno a 180 ºC.",
      "Bate los huevos con azúcar hasta que doblen su volumen.",
      "Añade aceite, zumo y ralladura de naranja.",
      "Agrega la harina con levadura tamizada y mezcla suave.",
      "Vierte en un molde engrasado y hornea 40 minutos."
    ]
  },
  {
    titulo: "Magdalenas caseras",
    categoria: "Postre",
    tiempo: "35 min",
    ingredientes: [
      "3 huevos",
      "200 g de azúcar",
      "200 g de harina",
      "100 ml de aceite de girasol",
      "100 ml de leche",
      "1 sobre de levadura en polvo",
      "Ralladura de limón"
    ],
    pasos: [
      "Bate los huevos con el azúcar hasta que la mezcla blanquee.",
      "Añade la leche, el aceite y la ralladura de limón.",
      "Agrega la harina tamizada con la levadura y mezcla bien.",
      "Llena cápsulas de magdalenas hasta 2/3 de su altura.",
      "Hornea 20 minutos a 180 ºC.",
      "Deja enfriar antes de servir."
    ]
  },
  {
    titulo: "Galletas de mantequilla",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "250 g de harina",
      "125 g de mantequilla",
      "100 g de azúcar glas",
      "1 huevo",
      "1 cucharadita de esencia de vainilla",
      "Pizca de sal"
    ],
    pasos: [
      "Bate la mantequilla con el azúcar glas hasta que quede cremosa.",
      "Añade el huevo y la vainilla, mezcla bien.",
      "Agrega la harina con sal y forma una masa homogénea.",
      "Envuelve en film y enfría 30 minutos.",
      "Estira la masa, corta con moldes y hornea 12 minutos a 180 ºC.",
      "Deja enfriar antes de servir."
    ]
  },
  {
    titulo: "Rosquillas fritas",
    categoria: "Postre",
    tiempo: "50 min",
    ingredientes: [
      "3 huevos",
      "250 g de harina",
      "100 g de azúcar",
      "50 ml de leche",
      "50 ml de anís",
      "Ralladura de limón",
      "1 sobre de levadura química",
      "Aceite de girasol para freír",
      "Azúcar para rebozar"
    ],
    pasos: [
      "Bate los huevos con el azúcar hasta blanquear.",
      "Añade leche, anís y ralladura de limón.",
      "Incorpora la harina tamizada con levadura y mezcla.",
      "Forma rosquillas con las manos enharinadas.",
      "Fríelas en aceite caliente hasta dorar.",
      "Escúrrelas y reboza en azúcar."
    ]
  },
  {
    titulo: "Pestiños",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "500 g de harina",
      "150 ml de vino blanco",
      "100 ml de aceite de oliva",
      "1 cucharadita de anís en grano",
      "Ralladura de naranja",
      "Aceite para freír",
      "Miel para bañar"
    ],
    pasos: [
      "Fríe el anís en grano en aceite y deja templar.",
      "Mezcla harina con vino, ralladura y el aceite colado.",
      "Amasa hasta obtener una masa elástica.",
      "Estira y corta rectángulos, dóblalos formando pestiños.",
      "Fríelos en abundante aceite y escúrrelos.",
      "Báñalos en miel caliente antes de servir."
    ]
  },
  {
    titulo: "Buñuelos de viento",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "250 ml de leche",
      "150 g de harina",
      "75 g de mantequilla",
      "4 huevos",
      "1 cucharada de azúcar",
      "Pizca de sal",
      "Aceite de girasol para freír",
      "Azúcar glas para espolvorear"
    ],
    pasos: [
      "Calienta la leche con mantequilla, azúcar y sal.",
      "Añade la harina de golpe y mezcla hasta que se despegue de las paredes.",
      "Retira del fuego y añade los huevos uno a uno mezclando bien.",
      "Forma bolitas y fríelas en aceite caliente.",
      "Escúrrelas y espolvorea con azúcar glas."
    ]
  },
  {
    titulo: "Filloas",
    categoria: "Postre",
    tiempo: "40 min",
    ingredientes: [
      "500 ml de leche",
      "3 huevos",
      "200 g de harina",
      "50 g de mantequilla derretida",
      "Pizca de sal",
      "Manteca de cerdo para engrasar la sartén"
    ],
    pasos: [
      "Bate leche, huevos, harina, mantequilla y sal hasta obtener una masa líquida.",
      "Deja reposar 30 minutos en la nevera.",
      "Engrasa una sartén con manteca y vierte un poco de masa.",
      "Extiende bien y cocina por ambos lados.",
      "Repite hasta terminar la masa.",
      "Sirve con azúcar, miel o crema."
    ]
  },
  {
    titulo: "Peras al vino",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "4 peras conferencia",
      "500 ml de vino tinto",
      "150 g de azúcar",
      "1 ramita de canela",
      "Corteza de naranja"
    ],
    pasos: [
      "Pela las peras dejando el rabito.",
      "Pon el vino con azúcar, canela y corteza de naranja a hervir.",
      "Introduce las peras y cocina 30–40 minutos hasta que estén tiernas.",
      "Deja enfriar en el almíbar de vino.",
      "Sirve frías con el jugo reducido."
    ]
  },
  {
    titulo: "Compota de manzana",
    categoria: "Postre",
    tiempo: "35 min",
    ingredientes: [
      "6 manzanas",
      "100 g de azúcar",
      "1 ramita de canela",
      "200 ml de agua",
      "Zumo de medio limón"
    ],
    pasos: [
      "Pela y corta las manzanas en trozos.",
      "Ponlas en un cazo con agua, azúcar, canela y limón.",
      "Cuece a fuego medio 25 minutos removiendo de vez en cuando.",
      "Retira la canela y tritura si deseas una textura más fina.",
      "Sirve caliente o fría."
    ]
  },
  {
    titulo: "Macedonia de frutas",
    categoria: "Postre",
    tiempo: "20 min",
    ingredientes: [
      "2 naranjas",
      "2 manzanas",
      "2 plátanos",
      "200 g de uvas",
      "200 g de fresas",
      "Zumo de 1 naranja",
      "1 cucharada de azúcar (opcional)"
    ],
    pasos: [
      "Lava, pela y trocea todas las frutas.",
      "Colócalas en un bol y añade el zumo de naranja.",
      "Agrega azúcar si deseas y mezcla bien.",
      "Deja reposar en la nevera 30 minutos.",
      "Sirve fría."
    ]
  },
  {
    titulo: "Helado rápido de plátano",
    categoria: "Postre",
    tiempo: "15 min + congelado",
    ingredientes: [
      "4 plátanos maduros",
      "200 ml de nata líquida",
      "2 cucharadas de miel"
    ],
    pasos: [
      "Pela los plátanos y congélalos en rodajas durante 3 horas.",
      "Bátelos con la nata y la miel hasta obtener una crema suave.",
      "Sirve inmediatamente como helado cremoso o congela 1 hora más para mayor consistencia."
    ]
  },
  {
    titulo: "Mousse de chocolate",
    categoria: "Postre",
    tiempo: "3 h (incluye reposo)",
    ingredientes: [
      "200 g de chocolate negro",
      "4 huevos",
      "50 g de azúcar",
      "200 ml de nata líquida",
      "Pizca de sal"
    ],
    pasos: [
      "Derrite el chocolate al baño maría o en microondas a baja potencia.",
      "Separa claras y yemas. Bate las yemas con el azúcar.",
      "Monta las claras con una pizca de sal a punto de nieve.",
      "Monta la nata aparte.",
      "Mezcla el chocolate con las yemas, luego incorpora nata y claras con movimientos envolventes.",
      "Reparte en vasitos y deja reposar en la nevera 2 horas antes de servir."
    ]
  },
  {
    titulo: "Natillas de vainilla",
    categoria: "Postre",
    tiempo: "40 min",
    ingredientes: [
      "1 l de leche",
      "6 yemas de huevo",
      "150 g de azúcar",
      "1 vaina de vainilla",
      "1 cucharada de maicena",
      "Galletas María",
      "Canela en polvo"
    ],
    pasos: [
      "Abre la vaina de vainilla y hierve la leche con ella.",
      "Bate yemas, azúcar y maicena.",
      "Añade la leche colada poco a poco removiendo.",
      "Cocina a fuego lento hasta que espese.",
      "Sirve en cuencos con una galleta encima y canela espolvoreada."
    ]
  },
  {
    titulo: "Tarta de manzana",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "1 lámina de masa quebrada",
      "4 manzanas",
      "100 g de azúcar",
      "200 ml de nata líquida",
      "2 huevos",
      "Mermelada de albaricoque"
    ],
    pasos: [
      "Extiende la masa quebrada en un molde y pínchala con un tenedor.",
      "Pela y corta las manzanas en láminas finas.",
      "Bate huevos, nata y azúcar, vierte sobre la base.",
      "Coloca las manzanas en forma de abanico encima.",
      "Hornea 40 minutos a 180 ºC.",
      "Pinta con mermelada caliente para dar brillo."
    ]
  },
  {
    titulo: "Tarta tres leches (versión española)",
    categoria: "Postre",
    tiempo: "2 h",
    ingredientes: [
      "1 bizcocho genovés",
      "200 ml de leche evaporada",
      "200 ml de leche condensada",
      "200 ml de nata líquida",
      "Nata montada para decorar",
      "Canela en polvo"
    ],
    pasos: [
      "Mezcla las tres leches en un bol.",
      "Pincha el bizcocho con un tenedor y vierte la mezcla encima.",
      "Deja reposar en la nevera al menos 2 horas.",
      "Decora con nata montada y canela antes de servir."
    ]
  },
  {
    titulo: "Brazo de gitano",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "4 huevos",
      "120 g de azúcar",
      "120 g de harina",
      "1 cucharadita de levadura en polvo",
      "Mermelada o crema pastelera para el relleno",
      "Azúcar glas"
    ],
    pasos: [
      "Bate huevos y azúcar hasta que doblen volumen.",
      "Añade la harina con levadura tamizada y mezcla suavemente.",
      "Extiende en una bandeja con papel de horno y hornea 10 minutos a 180 ºC.",
      "Desmolda sobre un paño húmedo, unta con mermelada y enrolla.",
      "Deja enfriar y espolvorea con azúcar glas."
    ]
  },
  {
    titulo: "Quesada pasiega",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "500 g de queso fresco",
      "2 huevos",
      "100 g de azúcar",
      "100 g de harina",
      "50 g de mantequilla",
      "Canela en polvo",
      "Ralladura de limón"
    ],
    pasos: [
      "Precalienta el horno a 180 ºC.",
      "Bate todos los ingredientes hasta obtener una masa homogénea.",
      "Vierte en un molde engrasado.",
      "Espolvorea con canela por encima.",
      "Hornea 40 minutos hasta que cuaje.",
      "Sirve templada o fría."
    ]
  },
  {
    titulo: "Tocino de cielo",
    categoria: "Postre",
    tiempo: "1 h 15 min",
    ingredientes: [
      "12 yemas de huevo",
      "500 g de azúcar",
      "250 ml de agua",
      "Caramelo líquido"
    ],
    pasos: [
      "Haz un almíbar espeso con el azúcar y el agua.",
      "Deja templar y mezcla con las yemas batidas.",
      "Vierte sobre un molde caramelizado.",
      "Cuece al baño maría en el horno a 180 ºC durante 45 minutos.",
      "Deja enfriar y desmolda."
    ]
  },
  {
    titulo: "Pan de Calatrava",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "6 huevos",
      "500 ml de leche",
      "150 g de azúcar",
      "1 bollito o bizcocho duro",
      "Caramelo líquido",
      "Canela en polvo"
    ],
    pasos: [
      "Carameliza un molde y añade el bizcocho desmenuzado.",
      "Bate huevos, leche y azúcar, vierte sobre el bizcocho.",
      "Hornea al baño maría 45 minutos a 180 ºC.",
      "Deja enfriar y desmolda.",
      "Espolvorea con canela al servir."
    ]
  },
  {
    titulo: "Cuajada con miel",
    categoria: "Postre",
    tiempo: "2 h (reposo)",
    ingredientes: [
      "1 l de leche de oveja",
      "2 cuajadas en polvo o cuajo natural",
      "Miel de flores"
    ],
    pasos: [
      "Calienta la leche a 45 ºC y añade el cuajo siguiendo instrucciones del envase.",
      "Reparte en cuencos y deja reposar 2 horas hasta que cuaje.",
      "Sirve fría con miel por encima."
    ]
  },
  {
    titulo: "Crepes dulces",
    categoria: "Postre",
    tiempo: "30 min",
    ingredientes: [
      "250 ml de leche",
      "2 huevos",
      "125 g de harina",
      "25 g de mantequilla derretida",
      "1 cucharada de azúcar",
      "Pizca de sal",
      "Mantequilla para la sartén"
    ],
    pasos: [
      "Bate leche, huevos, harina, mantequilla, azúcar y sal hasta obtener una masa líquida.",
      "Deja reposar 15 minutos.",
      "Engrasa una sartén con mantequilla y vierte un poco de masa.",
      "Extiende bien y cocina por ambos lados.",
      "Rellena con chocolate, mermelada o nata al gusto."
    ]
  },
  {
    titulo: "Flan de café",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "500 ml de leche",
      "100 ml de café solo fuerte",
      "4 huevos",
      "120 g de azúcar",
      "Caramelo líquido"
    ],
    pasos: [
      "Precalienta el horno a 180 ºC.",
      "Bate huevos, azúcar, café y leche hasta que se integren.",
      "Cubre el fondo de un molde con caramelo líquido.",
      "Vierte la mezcla y cuece al baño maría durante 45 minutos.",
      "Deja enfriar antes de desmoldar y servir."
    ]
  },
  {
    titulo: "Crema pastelera con frutas",
    categoria: "Postre",
    tiempo: "40 min",
    ingredientes: [
      "500 ml de leche",
      "4 yemas de huevo",
      "100 g de azúcar",
      "40 g de maicena",
      "1 ramita de canela",
      "Corteza de limón",
      "Frutas variadas troceadas (kiwi, fresas, plátano, uvas)"
    ],
    pasos: [
      "Hierve la leche con canela y corteza de limón.",
      "Bate las yemas con azúcar y maicena.",
      "Añade la leche colada poco a poco y cocina hasta espesar.",
      "Reparte en cuencos y deja enfriar.",
      "Decora con frutas variadas por encima antes de servir."
    ]
  },
  {
    titulo: "Tarta de almendra",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "250 g de almendra molida",
      "200 g de azúcar",
      "4 huevos",
      "Ralladura de limón",
      "Azúcar glas para decorar"
    ],
    pasos: [
      "Bate los huevos con el azúcar hasta que blanqueen.",
      "Añade la almendra molida y la ralladura de limón.",
      "Mezcla y vierte en un molde engrasado.",
      "Hornea a 180 ºC durante 35–40 minutos.",
      "Deja enfriar y espolvorea azúcar glas por encima."
    ]
  },
  {
    titulo: "Tarta de galletas con chocolate",
    categoria: "Postre",
    tiempo: "45 min + reposo",
    ingredientes: [
      "300 g de galletas María",
      "500 ml de leche",
      "200 g de chocolate negro",
      "100 g de mantequilla",
      "200 ml de nata líquida"
    ],
    pasos: [
      "Calienta la leche y moja ligeramente las galletas.",
      "Funde el chocolate con mantequilla y nata hasta obtener una crema.",
      "En un molde, alterna capas de galleta y crema de chocolate.",
      "Repite hasta terminar los ingredientes.",
      "Refrigera al menos 3 horas antes de servir."
    ]
  },
  {
    titulo: "Bizcocho marmolado",
    categoria: "Postre",
    tiempo: "1 h",
    ingredientes: [
      "250 g de harina",
      "200 g de azúcar",
      "150 g de mantequilla",
      "4 huevos",
      "1 sobre de levadura química",
      "50 g de cacao en polvo",
      "100 ml de leche"
    ],
    pasos: [
      "Bate mantequilla y azúcar hasta que blanqueen.",
      "Añade los huevos uno a uno y mezcla bien.",
      "Agrega la harina tamizada con levadura y la leche.",
      "Divide la masa en dos: una natural y otra con cacao.",
      "Vierte ambas masas alternándolas en un molde.",
      "Hornea a 180 ºC durante 40 minutos."
    ]
  },
  {
    titulo: "Helado de yogur",
    categoria: "Postre",
    tiempo: "6 h (congelado)",
    ingredientes: [
      "500 g de yogur natural azucarado",
      "200 ml de nata líquida montada",
      "100 g de azúcar glas",
      "Miel o frutas para acompañar"
    ],
    pasos: [
      "Mezcla el yogur con el azúcar glas.",
      "Incorpora la nata montada con movimientos envolventes.",
      "Vierte en un recipiente y congela 6 horas removiendo cada 2 horas.",
      "Sirve con miel o frutas frescas."
    ]
  },
  {
    titulo: "Brownie sencillo",
    categoria: "Postre",
    tiempo: "45 min",
    ingredientes: [
      "200 g de chocolate negro",
      "150 g de mantequilla",
      "150 g de azúcar",
      "100 g de harina",
      "3 huevos",
      "100 g de nueces"
    ],
    pasos: [
      "Funde el chocolate con la mantequilla.",
      "Bate los huevos con el azúcar hasta espumar.",
      "Añade el chocolate fundido y mezcla.",
      "Agrega la harina y las nueces picadas.",
      "Vierte en un molde y hornea 25 minutos a 180 ºC.",
      "Deja templar antes de cortar en porciones."
    ]
  },
  {
    titulo: "Crema de limón",
    categoria: "Postre",
    tiempo: "30 min + reposo",
    ingredientes: [
      "3 limones (zumo y ralladura)",
      "3 huevos",
      "150 g de azúcar",
      "75 g de mantequilla"
    ],
    pasos: [
      "Bate los huevos con el azúcar.",
      "Añade el zumo y la ralladura de limón.",
      "Cocina al baño maría removiendo sin parar hasta espesar.",
      "Incorpora la mantequilla y mezcla.",
      "Deja enfriar en la nevera antes de servir."
    ]
  },
  {
    titulo: "Naranja con canela",
    categoria: "Postre",
    tiempo: "10 min",
    ingredientes: [
      "4 naranjas",
      "2 cucharadas de azúcar",
      "1 cucharadita de canela en polvo"
    ],
    pasos: [
      "Pela las naranjas retirando toda la parte blanca.",
      "Córtalas en rodajas finas y colócalas en un plato.",
      "Espolvorea con azúcar y canela.",
      "Sirve frío como postre ligero."
    ]
  },
  {
    titulo: "Fresas con nata",
    categoria: "Postre",
    tiempo: "15 min",
    ingredientes: [
      "400 g de fresas",
      "200 ml de nata líquida para montar",
      "50 g de azúcar glas"
    ],
    pasos: [
      "Lava y corta las fresas en trozos.",
      "Monta la nata con el azúcar glas hasta que esté firme.",
      "Sirve las fresas con nata montada por encima.",
      "Decora con hojas de menta si deseas."
    ]
  }
];
