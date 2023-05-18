var persona = {
    nombre: "Jonatan",
    edad: 34,
    ciudad: "Bucaramanga",
    profesion: "Diseñador"
  };
  
  console.log(persona);
  
  function presentacion(persona) {
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
  }
  
  var mensaje = presentacion(persona);
  console.log(mensaje);
  
  persona.hobbies = ["patinar", "leer", "bailar"];
  console.log(persona.hobbies);
  
  for (var i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }
  