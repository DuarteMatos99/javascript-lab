class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
            .header {
                height: 15em;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .header-title {
                display: flex;
                gap: 15px;
                align-items: center;
                background-color: #3BACB6;
                padding: 15px;
            }

            .header-title img {
                width: 35px;
                height: 35px;
                transform: rotate(17deg);
            }
        </style>
        <section class="header">
            <div class="header-title">
                <h1>
                    <a href="/pages/main.html">Javascript Lab</a>
                </h1>
                <img src="/components/shared/CustomHeader/chemistry-lab-instrument.png"/>
            </div>
        </section>`;
    }
}

customElements.define("custom-header", CustomHeader);
