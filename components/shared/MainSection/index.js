const titleTab = document.title;
const sectionTitle = titleTab == "Javascript Lab" ? "Sections" : titleTab;

const cssLink = document.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("type", "text/css");
cssLink.setAttribute("href", "/components/shared/MainSection/main-section.css");

class MainSection extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <section class="main">
            <h2 class="section-title">${sectionTitle}</h2>
            <div class="section-list"></div>
        </section>
        `;
    }
}

customElements.define("main-section", MainSection);

document.getElementsByTagName("head")[0].appendChild(cssLink);
