// Práctica 07,
// Departamentos (5), ciudades (4), comidas tipicas(3) --> recetas

const seleccion = () => {
  let dept = deps(); // Retorna el codigo del departamento seleccionado
  if (dept != null) {
    let city = cities(dept); // Retorna el código de la ciudad seleccionada
    if (city != "") {
      let dish = plato(dept, city); // Retorna el código de la receta seleccionada
      if (dish != "") {
        let recipe = recetas(dept, city, dish); // Retorna la receta.
        alert(recipe);
      }
    }
  }
};

// Función que genera la lista de departamentos y devuelve el código seleccionado
const deps = () => {
  let dep = prompt(
    "Seleccione el número del departamento que quiere investigar: \n 1. Boyacá \n 2. Santander \n 3. Quindío \n 4. Magdalena \n 5. Cundinamarca"
  ); // Recibo un número
  if (dep == null) {
    alert("Departamento: Ingrese una opción.");
  } else {
    dep = parseInt(dep);
    if (dep > 5 || dep < 1) {
      alert("Por favor, ingrese una opción válida.");
    } else {
      return dep;
    }
  }
};

// Función que genera la lista de ciudades según el departamente y devuelve el código de la ciudad
const cities = (dept) => {
  const mes = "Seleccione el número de una ciudad:\n ";
  let city = "";
  switch (dept) {
    case 1:
      city = prompt(
        mes + "1. Tunja\n 2. Villa de Leyva\n 3. Arcabuco\n 4. Paipa"
      );
      break;
    case 2:
      city = prompt(mes + "1. Bucaramanga\n 2. Socorro\n 3. San Gil\n 4. Oiba");
      break;
    case 3:
      city = prompt(
        mes + "1. Armenia\n 2. Buena Vista\n 3. Calarca\n 4. Filandia"
      );
      break;
    case 4:
      city = prompt(
        mes + "1. Santa Marta\n 2. Cienaga\n 3. Pueblo Viejo\n 4. Aracataca"
      );
      break;
    case 5:
      city = prompt(mes + "1. Bogotá\n 2. Choconta\n 3. Chía\n 4. Zipaquira");
      break;
  }
  if (city == "") {
    alert("Ciudad: Ingrese una opción.");
  } else {
    city = parseInt(city);
    if (city > 4 || city < 1) {
      alert("Por favor, ingrese una opción válida.");
    } else {
      return city;
    }
  }
};

// Función que genera la lista de recetas y retorna el código de la receta
const plato = (dept, city) => {
  let cod = dept * 10 + city;
  const mes = "Seleccione el número de una receta: \n ";
  let receta = "";
  switch (cod) {
    // Recetas de Boyacá
    case 11:
      receta = prompt(mes + "1. Arepa\n 2. Cuchuco\n 3. Gallina Criolla");
      break;
    case 12:
      receta = prompt(
        mes + "1. Cocido Boyacense\n2. Almohabanas\n3. Sopa de Habas"
      );
      break;
    case 13:
      receta = prompt(mes + "1. Sopa de Habas\n2. Arepa\n3. Cocido Boyacense");
      break;
    case 14:
      receta = prompt(
        mes + "1. Gallina Criolla\n2.Cuchuco con Espinazo\n3. Mute"
      );
      break;
    // Recetas de Santander
    case 21:
      receta = prompt(mes + "1. Mute\n2. Pepitoria\n3.Tamal");
      break;
    case 22:
      receta = prompt(mes + "1. Carne oreada\n2. Bocadillo\n3. Mute");
      break;
    case 23:
      receta = prompt(mes + "1. Changua\n2. Tamal\n3. Arepa");
      break;
    case 24:
      receta = prompt(mes + "1. Pepitoria\n2. Cuchuco\n3. Bocadillo");
      break;
    // Recetas de Quindío
    case 31:
      receta = prompt(mes + "1. Tamal\n2. Mondongo\n3. Sancocho");
      break;
    case 32:
      receta = prompt(mes + "1. Bandeja Paisa\n2. Trucha\n3.Sancocho");
      break;
    case 33:
      receta = prompt(mes + "1. Mute\n2. Cuchuco con espinado\n3. Arepa");
      break;
    case 34:
      receta = prompt(mes + "1. Arroz con pollo\n2. Arepa\n3. Bandeja Paisa");
      break;
    // Recetas de Magdalena
    case 41:
      receta = prompt(mes + "1. Trucha\n2.Cuchuco con espinaso\n3. Tamal");
      break;
    case 42:
      receta = prompt(mes + "1. Mute\n2. Pepitoria\n3.Tamal");
      break;
    case 43:
      receta = prompt(mes + "1. Bandeja Paisa\n2.Trucha\3.Arroz con Pollo");
      break;
    case 44:
      receta = prompt(mes + "1. Carne oreada\n2. Bocadillo\n3. Mute");
      break;
    // Recetas de Cundinamarca
    case 51:
      receta = prompt(
        mes + "1. Gallina Criolla\n2.Cuchuco con Espinazo\n3. Mute"
      );
      break;
    case 52:
      receta = prompt(mes + "1. Sopa de Habas\n2. Arepa\n3. Almohabanas");
      break;
    case 53:
      receta = prompt(mes + "1. Tamal\n2. Mondongo\n3. Sancocho");
      break;
    case 54:
      receta = prompt(mes + "1. Changua\n2. Tamal\n3. Arepa");
      break;
  }
  if (receta == "") {
    alert("Ingrese una opción.");
  } else {
    receta = parseInt(receta);
    if (receta > 3 || receta < 1) {
      alert("Ingrese una opción válida...");
    } else {
      console.log(receta);
      return receta;
    }
  }
};

const recetas = (dept, city, plato) => {
  let cod = dept * 100 + city * 10 + plato;
  let receta = "";
  switch (cod) {
    case 111: // Arepas
      receta =
        "1. Haga la mezcla con harina, sal, azucar, queso y mantequilla\n2. Forme bolitas de masa\n3. Colocar el queso en el centro\n4. Dore las arepas";
      break;

    case 112: // Cuchuco
      receta =
        "1. Lavar los ingredientes\n2. Pelar y picar papas\n3. Machacar ajo\n4. Poner agua a hervir\n5. Añadir cuchuco, espinazo, cebolla y ajo";
      break;

    case 113: // Gallina Criolla
      receta =
        "1. Sofreir la gallina\n2. Añadir agua y demás ingredientes\n3. Dejar cocinar";
      break;

    case 121: // Cocido boyacense
      receta =
        "1. Cocinar habas, rubas y arveja\n2. Cocinar mazora y carne por aparte\n3. Agregar todo a un plato y cubrir con hogao\n4. Poner queso campesino";
      break;

    case 122: // Almohabanas
      receta =
        "1. Meclar la harina, azucar, polvo para hornear y sal\n2. Agregar queso rallado y mezclar\n3.Agregar leche\n4. Armar las almohabanas\n5. Hornear";
      break;

    case 123: //Sopa de habas
      receta =
        "1. Preparar las habas, cebolla y ajo\n2. Sofreir los ingredientes\n3. Adicionar ají, jalapellos\n4. Cocinar la carne\n5. Agregar las habas, ajo, comino y demás especias";
      break;

    case 131: //Sopa de habas
      receta = recetas(1, 2, 3);
      break;

    case 132: // Arepas
      receta = recetas(1, 1, 1);
      break;

    case 133: // Cocido boyacense
      receta = recetas(1, 2, 1);
      break;

    case 141: // Gallina Criolla
      receta = recetas(1, 1, 3);
      break;

    case 142: // Cuchuco
      receta = recetas(1, 1, 2);
      break;

    case 143: // Mute
      receta =
        "1. Lavar los callos y frotar con jugo de limon\n2. Hierva agua con los callos mientrás ablanda la pata de res\n3.Picar cebolla, machacar ajo, cortar zanahoria\n4. Mezclar todo en una olla";
      break;

    case 211: // Mute
      receta = recetas(1, 4, 3);
      break;

    case 212: //Pepitoria
      receta =
        "Trocear pollo, y retirar la piel\n2.Dorar el pollo\n3. Picar cebolla y ajo\n4. Mexclar con el pollo";
      break;

    case 213: // Tamal
      receta =
        "1.Preparar la masa\n2.Preparar la cebolla, pimenton y uvas pasas\n3.Alistar las hojas\n4.Cocinar las hojas";
      break;

    case 221: //Carne oreada
      receta =
        "1. Estirar la carne y salar\n2. Colgar la carne al sol\n3. Asar a la parrilla\n4. Cortar y servir";
      break;

    case 222: //Bocadillo
      receta =
        "1. Llenar olla con agua, y ponerla a hervir\n2. Agregar guayabas lavadas\n3. Hacer pure con las guayabas y agregarlas a la olla";
      break;

    case 223: // Mute
      receta = recetas(1, 4, 3);
      break;

    case 231: // Changua
      receta =
        "1. Hierva agua y leche en una olla\n2.Agreuge cebolla, sal y pimienta\n3.Agregue huevos\n4. Agregue cilantro";
      break;

    case 232: // Tamal
      receta = recetas(2, 1, 3);
      break;

    case 233: // Arepa
      receta = recetas(1, 1, 1);
      break;

    case 241: //Pepitoria
      receta = recetas(2, 1, 2);
      break;

    case 242: // cuchuco
      receta = recetas(1, 1, 2);
      break;

    case 243: // Bocadillo
      receta = recetas(2, 2, 2);
      break;

    case 311: // Tamal
      receta = recetas(2, 1, 3);
      break;

    case 312: // Mondongo
      receta =
        "1. Prepare los ingredientes, ajo, cebolla, mazorca y hervir agua\n2. Corte y triture lso ingredientes y los callos\n3. Preparar la carne con limon y agregar el mondongo\n";
      break;

    case 313: // Sancocho
      receta =
        "Deja a punto la base del sancocho\n2. Cocina la base del sancocho\n3.Cocinar hasta que espese\n4. Prepara el hogao y adicionar.";

    case 321: // Bandeja paisa
      receta =
        "1. Preparar frijoles\n2. Preparar carne molida\n3. Preparar chicharrones\n4.Preparar arepa";
      break;

    case 322: // Trucha
      receta =
        "1. Colocamos la trucha en la pancha\n2. trituramos el ajo y perejil\n3. Retiramos la trucha ya dorada\n4. SErvimos la salsa de ajo y perejil";
      break;

    case 323: // Sancocho
      receta = recetas(3, 1, 3);
      break;

    case 331: // Mute
      receta = recetas(2, 2, 3);
      break;

    case 332: // cuchuco
      receta = recetas(2, 4, 2);
      break;

    case 333: // Arepa
      receta = recetas(1, 1, 1);
      break;

    case 341: // Arroz con pollo
      receta =
        ". Sofrie pimiento, ajo, y cebolla\n2. Agrega 3 tasas de arroz\n3.Añade  tasas de agua con verduras picadas\n4. Revuelve y deja cocinar a fuego lento";
      break;

    case 342: // Arepa
      receta = recetas(1, 1, 1);

    case 343: // Bandeja Paisa
      receta = recetas(3, 2, 1);
      break;

    case 411: // Trucha
      receta = recetas(3, 2, 2);
      break;

    case 412: // Cuchuco
      receta = recetas(2, 4, 2);
      break;

    case 413: // Tamal
      receta = recetas(3, 1, 1);
      break;

    case 421: // Mute
      receta = recetas(1, 4, 3);
      break;

    case 422: //Pepitoria
      receta = recetas(2, 1, 2);
      break;

    case 423: // Tamal
      receta = recetas(2, 1, 3);
      break;

    case 431: // Bandeja Paisa
      receta = recetas(3, 2, 1);
      break;

    case 432: // Trucha
      receta = recetas(3, 2, 2);
      break;

    case 433: // Arroz con pollo
      receta = recetas(3, 4, 1);
      break;

    case 441: //Carne oreada
      receta =
        "1. Estirar la carne y salar\n2. Colgar la carne al sol\n3. Asar a la parrilla\n4. Cortar y servir";
      break;

    case 442: //Bocadillo
      receta =
        "1. Llenar olla con agua, y ponerla a hervir\n2. Agregar guayabas lavadas\n3. Hacer pure con las guayabas y agregarlas a la olla";
      break;

    case 443: // Mute
      receta = recetas(1, 4, 3);
      break;

    case 511: // Gallina Criolla
      receta = recetas(1, 1, 3);
      break;

    case 512: // Cuchuco
      receta = recetas(1, 1, 2);
      break;

    case 513: // Mute
      receta = recetas(1, 4, 3);
      break;

    case 521: //Sopa de habas
      receta = recetas(1, 2, 3);
      break;

    case 522: // Arepas
      receta = recetas(1, 1, 1);
      break;

    case 523: // Almohabanas
      receta = recetas(1, 2, 2);
      break;

    case 531: // Tamal
      receta = recetas(2, 1, 3);
      break;

    case 532: // Mondongo
      receta =
        "1. Prepare los ingredientes, ajo, cebolla, mazorca y hervir agua\n2. Corte y triture lso ingredientes y los callos\n3. Preparar la carne con limon y agregar el mondongo\n";
      break;

    case 533: // Sancocho
      receta =
        "Deja a punto la base del sancocho\n2. Cocina la base del sancocho\n3.Cocinar hasta que espese\n4. Prepara el hogao y adicionar.";

    case 541: // Changua
      receta =
        "1. Hierva agua y leche en una olla\n2.Agreuge cebolla, sal y pimienta\n3.Agregue huevos\n4. Agregue cilantro";
      break;

    case 542: // Tamal
      receta = recetas(2, 1, 3);
      break;

    case 543: // Arepa
      receta = recetas(1, 1, 1);
      break;
  }
  return receta;
};
