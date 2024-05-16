// Evaluación docente
// Itera sobre cada opción y simula un clic
// prelikert.respuesta[valor="100"] = Totalmente de acuerdo
// prelikert.pabsi[valor="100"] = Si

const opcionesTotalmenteDeAcuerdo = document.querySelectorAll('.prelikert.respuesta[valor="100"]');
opcionesTotalmenteDeAcuerdo.forEach(opcion => opcion.click());
const opcionesNo = document.querySelectorAll('.prelikert.pabsi[valor="100"]');
opcionesNo.forEach(opcion => opcion.click());