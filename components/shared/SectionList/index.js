import { courses } from "../../../data/courses/index.js";
import { algorithms } from "../../../data/algorithms/index.js";

const URL = document.URL;
const URL_PAGE = URL.split("/")[3];

const cssLink = document.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("type", "text/css");
cssLink.setAttribute("href", "/components/shared/SectionList/styles.css");

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
    default:
        console.log("URL not found");
}

let ul_items = '<ul class="section-items">';

li_items.forEach((item) =>
    code_section
        ? (ul_items += `
            <div class="section-item"><li>${item.name}</li>
                <div class="section-description">${item.description}</div>
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
