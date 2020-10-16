import "./styles/main.scss";
import { rot } from "./rot.js";
const boxin = document.getElementById("input_text");
const boxout = document.getElementById("output_text");

boxin.oninput = function () {
  boxout.innerHTML = rot(boxin.value);
};
