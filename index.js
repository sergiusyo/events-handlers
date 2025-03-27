//не будем фокусироваться на реализации
(() => {
  const dragDiv = document.getElementById("drag-me");

  let x, y, left, top;

  function onmove(e) {
    e.preventDefault();
    dragDiv.style.left = e.clientX - x + left;
    dragDiv.style.top = e.clientX - y + top;
  }

  // жмем на прямоугольник (mousedown, нажатие кнопки мыши)
  dragDiv.addEventListener("mousedown", (e) => {
    x = e.clientX;
    y = e.clientY;
    left = parseInt(dragDiv.style.left);
    top = parseInt(dragDiv.style.top);
    //добавляем обработчик движения мыши по экрану
    window.addEventListener("mousemove", onmove);
  });

  // отпускаем мышку (mouseup, отжатие кнопки мыши)...
  document.addEventListener("mouseup", () => {
    //а когда происходит отпускание кнопки, убираем обработчик onmove,
    // чтобы перестать перемещать элемент
    window.removeEventListener("mousemove", onmove);
  });
})();

// Событие - это сообщение браузера о том, что что-то произошло.
// Обработчик события (ОС) - это функция, которую вызывает браузер, когда событие произошло.
// Для создания ОС нужно:
// 1) название события (click, input, scroll) и т.д.
// 2) объект, порождающий событие (DOM-элемент, document или window - событие прокрутки(скролл).
// 3) функция, выполняемая при наступлении события.

// обработчик click на кнопке. В addEventListener добавляется как минимум два аргумента:
// 1) название обрабатываемого события
// 2) функция, которая будет выполнена при нажатии на кнопку
// document.querySelector("button").addEventListener("click", () => {});

// обработчик resize на окне браузера (window)
window.addEventListener("resize", () => {});

// обработчик DOMContentLoaded на документе
document.addEventListener("DOMContentLoaded", () => {});

// Есть еще два способа добавляения ОС, но их использовать не рекомендуется, т.к. они менее гибкие.
// 1) прямо из HTML-кода задать нужным элементам атрибут, необходимый для наступления вызываемого события
// 2) обращение к тем же самым атрибутам on + название события прямо из js-кода

const btn = document.querySelector("button");

// мы просто присваиваем атрибуту значение, так же как и с другими атрибутами
btn.onclick = () => {
  console.log("Вы нажали на кнопку");
};

// у нас есть доступ к событиям window
window.onscroll = () => {
  console.log("Вы прокрутили окно браузера");
};

// ВАЖНО!! При вызове метода removeEventListener необходимо передать именно ту функцию, которая была при вызове метода addEventListener, иначе
// removeEventListener не сработает.
const btn = document.querySelector("button");

// создаем новую функцию и сразу регистрируем ее как обработчик
btn.addEventListener("click", () => {});

// создаем еще одну функцию и пытаемся удалить ее как обработчик. Но эта не имеет никакого отношения к функции выше,
// поэтому removeEventListener не сработает.
btn.removeEventListener("click", () => {});

// чтобы исправить эту ошибку, нужно создать Ф. и передать ее и в addEventListener, и в removeEventListener. Заменим литералы Ф. на ссылку
// на функцию onClick.

let onClick = () => {};

btn.addEventListener("click", onClick);
btn.removeEventListener("click", onClick);

// объект события содержит информацию, связанную с конкретным С.
// например, для события 'mousemove' объектом С. м/б координаты
// перемещенного указателя, т.е. X и Y.
document.body.addEventListener("mousemove", function (event) {
  console.log(this);
  console.log(event);
});

//показываем, какую кнопку нажимает пользователь
document.addEventListener("keyup", function (event) {
  //key - свойство объекта С, название нажатой на клавиатуре кнопки
  console.log("Нажата кнопка", event.key); //в свойстве key содержится
  //   кнопка, которую мы нажимали.
});
