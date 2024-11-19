import { Widget } from "./Widget";

const widgetButton = document.querySelector(".button_widget");

const widget = new Widget(widgetButton);

widgetButton.addEventListener("click", () => {
  widget.toogle();
})