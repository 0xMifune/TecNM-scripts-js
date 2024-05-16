// Evaluación de servicios
// Itera sobre cada opción y simula un clic
// prelikert.respuesta[valor="5"] = Totalmente de acuerdo
// prelikert.pabno[valor="0"] = No

const opcionesTotalmenteDeAcuerdo = document.querySelectorAll('.prelikert.respuesta[valor="5"]');
opcionesTotalmenteDeAcuerdo.forEach(opcion => opcion.click());
const opcionesNo = document.querySelectorAll('.prelikert.pabno[valor="0"]');
opcionesNo.forEach(opcion => opcion.click());
