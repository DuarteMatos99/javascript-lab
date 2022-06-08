const template = document.createElement("template");
template.innerHTML = `
<style>
    .header {
        height: 15em;
        display: flex;
        align-items: center;
        justify-content: center
    }

    .header-title {
        font-size: 2.4rem;
    }

    .header-title a {
        color: black;
        text-decoration: none;
    }
</style>
<section class="header">
    <h1 class="header-title"><a href="/main.html">Javascript Lab</a></h1>
</section>`;

class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("custom-header", CustomHeader);
