import View from "./view.js";

import icons from "url:../../img/icons.svg";

class AddRecipeView extends View {
  _successMessage = `Recipe has been successfully uploaded :)`
  _parentElement = document.querySelector(".upload");

  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  windowToggle() {
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.windowToggle.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.windowToggle.bind(this));
    this._overlay.addEventListener("click", this.windowToggle.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();

      const dataArr = [...new FormData(this)];

      // console.log(data);

      const data = Object.fromEntries(dataArr)

      handler(data)
    });
  }
}

export default new AddRecipeView();
