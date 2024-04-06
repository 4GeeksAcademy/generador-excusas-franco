window.onload = function() {
  // Definir las matrices de elementos para la excusa
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Función para generar una excusa aleatoria
  function generateExcuse() {
    let randomWhoIndex = Math.floor(Math.random() * who.length);
    let randomActionIndex = Math.floor(Math.random() * action.length);
    let randomWhatIndex = Math.floor(Math.random() * what.length);
    let randomWhenIndex = Math.floor(Math.random() * when.length);

    let excuse =
      who[randomWhoIndex] +
      " " +
      action[randomActionIndex] +
      " " +
      what[randomWhatIndex] +
      " " +
      when[randomWhenIndex];

    return excuse;
  }

  // Obtener el elemento HTML de la excusa
  let excuseElement = document.getElementById("excuse");

  // Establecer la excusa aleatoria en el innerHTML del elemento
  excuseElement.innerHTML = generateExcuse();
};
