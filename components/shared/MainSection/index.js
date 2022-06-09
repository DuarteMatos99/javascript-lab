const titleTab = document.title;
const sectionTitle = titleTab == "Javascript Lab" ? "Sections" : titleTab;

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
