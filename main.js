(()=>{"use strict";var t;console.log("Test: app.js Hello!"),document.body.innerHTML='<div class="container">\n      <button\n          type="button"\n          class="btn"\n          data-text="И вот несколько потрясающих материалов. Это очень увлекательно. Верно?"\n          title="Какой-то заголовок"\n        >\n          Нажмите, чтобы переключить всплывающее окно\n      </button>\n\n    </div>',console.log("Test: createElem.js!"),(t=document.querySelector(".btn")).addEventListener("click",(function(e){var n=document.querySelector(".popover");n?(n.remove(),t.classList.remove("toggle")):(function(t){t.preventDefault();var e=document.createElement("div");e.classList.add("popover");var n=document.createElement("h3");n.textContent="".concat(t.target.getAttribute("title")),e.appendChild(n);var o=document.createElement("p");o.textContent="".concat(t.target.dataset.text),e.appendChild(o),t.target.offsetParent.appendChild(e),e.style.top="".concat(t.target.offsetTop-e.offsetHeight,"px"),e.style.left="".concat(t.target.offsetLeft+t.target.offsetWidth/2-e.offsetWidth/2,"px")}(e),t.classList.add("toggle"))}))})();