import { htmlArray } from "@web/helpers/webComponents";

class TestComponent extends HTMLElement {
    public connectedCallback(): void {
        this.attachShadow({ mode: "open" });

        this.render();
    }

    private render(): void {
        if (!this.shadowRoot) {
            return;
        }

        const elements: HTMLElement[] = htmlArray`
            <h1> test </h1>
        `;

        this.shadowRoot.firstChild?.remove();
        this.shadowRoot.append(...elements);
    }
};

window.customElements.define("test-component", TestComponent);