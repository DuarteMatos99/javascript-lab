import { courses } from "../../../data/sections/index.js";
import { algorithms } from "../../../data/algorithms/index.js";
import { scripting_algorithms } from "../../../data/scripting-algorithms/index.js";

const URL = document.URL;
const URL_PAGE = URL.split("/")[4];

const cssLink = document.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("type", "text/css");
cssLink.setAttribute("href", "/components/shared/SectionList/section-list.css");

let code_section = true;
let li_items = [];

switch (URL_PAGE) {
    case "main.html":
        code_section = false;
        li_items = courses;
        break;
    case "algorithms":
        li_items = algorithms;
        break;
    case "scripting-algorithms":
        li_items = scripting_algorithms;
        break;
    default:
        console.log("URL not found");
}

let ul_items = '<ul class="section-items">';

li_items.forEach((item) =>
    code_section
        ? (ul_items += `
            <div class="section-item"><h3>${item.name}</h3>
                <div class="section-description">${item.description}</div>
                <a class="show-code" href="#">Show Code</a>
                <pre class="section-code">
                    <code>${item.code}</code>
                </pre>
            </div>`)
        : (ul_items += `<a href=${item.link}>
            <div class="section-item"><li>${item.name}</li>
            </div></a>`)
);

ul_items += "</ul>";

document.getElementsByClassName("section-list")[0].innerHTML = ul_items;

document.getElementsByTagName("head")[0].appendChild(cssLink);

const a_tags = document.getElementsByClassName("show-code");

for (let i = 0; i < a_tags.length; i++) {
    a_tags[i].addEventListener("click", () => {
        document
            .getElementsByClassName("section-code")
            [i].classList.toggle("expand-section-code");

        const expanded_button_text =
            a_tags[i].innerHTML === "Show Code" ? "Hide Code" : "Show Code";
        a_tags[i].innerHTML = expanded_button_text;
        a_tags[i].classList.toggle("expand-show-code");
    });
}
