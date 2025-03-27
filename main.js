["top", "list", "item"].forEach((id) => {
  document.getElementById(id).addEventListener("click", (event) => {
    console.log(id); //событие "рождается" на элементe, на который они
    // непосредственно произошли, и "всплывает" вверх по DOM-дереву,
    // пока не дойдет до document или window.
  });
});

//Погружение (Capture)

// Но сначала события "погружаются" от window до элемента, на котором они
// непосредственно произошли. И только после этого происходит
// "всплытие". П. свойственно ВСЕМ событиям.

// По умолчанию все ОС начинают работать только на фазе всплытия.

["top", "list", "item"].forEach((id) => {
  const element = document.getElementById(id);
  //передаем в третий параметр {capture: true}, или просто true, чтобы
  // событие выполнялось на стадии захвата
  element.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      console.log("погружаюсь...", id);
    },
    { capture: true }
  ); //можно просто передать True
  // и добавим обычный обработчик, чтобы увидеть порядок выполнения
  element.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      event.stopImmediatePropagation(); //этот метод работает примерно как
      // event.stopPropagation(). Отличие состоит в том, что он остановит
      // не просто остановит событие, но остановит и ОС, которые находится
      // как-бы рядом с этим событием, если на этот элемент, на тот же, на
      // который направлен ОС, еще навешаны обработчики того же события.
      console.log("всплываю...", id);
    },
    { capture: false }
  ); //можно false или вообще не передавать 3-й параметр
});

// При удалении события нужно корректно передавать значение capture.
// Для этого мы просто передаем 3-м параметром true или {capture: true}.
// Либо можем ничего не передавать, если хотим убрать С. на всплытии.
function onMouseMove() {}

document.body.removeEventListener("mousemove", onMouseMove, true);
document.body.addEventListener("mousemove", onMouseMove, { capture: true });
document.body.removeEventListener("mousemove", onMouseMove);

document.body.removeEventListener("mousemove", onMouseMove, true);
document.body.addEventListener("mousemove", onMouseMove, { capture: true });
document.body.removeEventListener("mousemove", onMouseMove);

button.addEventListener("click", (event) => {
  //свойство target - содержит элемент, на котором произошло событие
  event.target;
  // currentTarget = элемент, на котором установлен  обработчик
  event.currentTarget; //=== this
});
