const cssLink = document.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("type", "text/css");
cssLink.setAttribute(
    "href",
    "/components/shared/CustomHeader/custom-header.css"
);

class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <section class="header">
            <div class="header-title">
                <h1>
                    <a href="/pages/main.html">Javascript Lab</a>
                </h1>
                <img class="flask" src="/components/shared/CustomHeader/chemistry-lab-instrument.png"/>
            </div>
        </section>`;
    }
}

customElements.define("custom-header", CustomHeader);

document.getElementsByTagName("head")[0].appendChild(cssLink);
