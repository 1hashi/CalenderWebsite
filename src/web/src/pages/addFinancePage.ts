import { htmlArray } from "@web/helpers/webComponents";

class AddFinanceComponent extends HTMLElement {
    public connectedCallback(): void {
        this.attachShadow({ mode: "open" });

        this.render();
    }

    private render(): void {
        if (!this.shadowRoot) {
            return;
        }

        const elements: HTMLElement[] = htmlArray`
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>HashimotoGoon</title>
                    <script src="/dist/index.js" defer></script>
                    <link rel="stylesheet" href="/assets/addFinancePage.css">
                </head>
                <body>
                    <div class="page-wrapper">
                        <header class="site-header">
                            <div class="container">
                                <div class="site-logo">
                                <span class="title">Reken dingetje</span>
                                </div>
                            </div>
                        </header>

                        <main class="main-content container main-layout">
                            <div class="left-column">
                                <section class="card mb-4">
                                    <div class="card-header">
                                        <span class="card-label dim">Inkomsten</span>
                                    </div>

                                    <div class="grid-2 mb-3">
                                        <div class="form-group">
                                            <label class="form-label" id="maartenBaan1">Baan 1 Maarten</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="maartenBaan1" class="form-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" id="maartenBaan2">Baan 2 Maarten</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="maartenBaan2" class="form-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" id="gaiaBaan">Baan Gaia</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="gaiaBaan" class="form-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" id="maartenDuo">Duo Maarten</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="maartenDuo" class="form-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" id="gaiaDuo">Duo Gaia</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="gaiaDuo" class="form-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label" id="zorgtoeslag">Zorgtoeslag</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="zorgtoeslag" class="form-input" placeholder="0.00"></div>
                                        </div>
                                    </div>

                                    <div class="stat-card dim">
                                        <div class="stat-card__label">Totale Inkomsten</div>
                                        <div class="stat-card__value" id="outputTotaleInkomsten">meow</div>
                                    </div>
                                </section>

                                <section class="card card--rose mb-4">
                                    <div class="card-header">
                                        <span class="card-label rose">Vaste Lasten & Kosten</span>
                                    </div>
                                    
                                    <div id="kostenContainer" class="grid-2 mb-3">
                                        <div class="form-group">
                                            <label class="form-label">School</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="school" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Zorgverzekering</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="zorgverzekering" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Basic fit</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="basicFit" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">ANWB</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="anwb" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Discord</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="discord" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Pathe</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="pathe" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Auto (naar Gilbert)</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="auto" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Spotify</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="spotify" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Wegenbelasting</label>
                                            <div class="input-group"><span class="addon">€</span><input type="number" id="wegenbelasting" class="form-input kost-input" placeholder="0.00"></div>
                                        </div>
                                    </div>

                                    <button id="voegKostToeBtn" class="btn btn--rose mb-3">
                                        + Extra kosten toevoegen
                                    </button>

                                    <div class="stat-card rose">
                                        <div class="stat-card__label">Totale Kosten</div>
                                        <div class="stat-card__value rose" id="outputTotaleKosten">€ 0,00</div>
                                    </div>
                                </section>
                            </div>

                            <section class="card card--jade mb-4 sticky-card">
                                <div class="card-header">
                                    <span class="card-label">Balans en Spaardoel</span>
                                </div>

                                <div class="grid-2 mb-3">
                                    <div class="form-group">
                                        <label class="form-label" for="gaiaHuidig">Gaia Bankrekening..</label>
                                        <div class="input-group">
                                            <span class="addon">€</span>
                                            <input type="number" id="gaiaHuidig" class="form-input" placeholder="0.00">
                                        </div>
                                    </div>
                                    <div class="form=group">
                                        <label class="form-label" for="maartenHuidig">Maarten Bankrekening</label>
                                        <div class="input-group">
                                            <span class="addon">€</span>
                                            <input type="number" id="maartenHuidig" class="form-input" placeholder="0.00">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="gaiaSpaar">Gaia Spaarrekening</label>
                                        <div class="input-group">
                                            <span class="addon">€</span>
                                            <input type="number" id="gaiaSpaar" class="form-input" placeholder="0.00">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="maartenSpaar">Maarten Spaarrekening</label>
                                        <div class="input-group">
                                            <span class="addon">€</span>
                                            <input type="number" id="maartenSpaar" class="form-input" placeholder="0.00">
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="divider"></div>

                                <div class="grid-2">
                                    <div class="form-group">
                                        <label class="form-label" for="spaarDoel">Spaardoel</label>
                                        <div class="input-group">
                                            <span class="addon">€</span>
                                            <input type="number" id="spaarDoel" class="form-input" placeholder="0.00">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label" for="deadlineSpaarDoel">Maanden tot doel</label>
                                        <input type="number" id="deadlineSpaarDoel" class="form-input" placeholder="0">
                                    </div>
                                </div>

                                <div class="alert alert--jade mt-3">
                                    <!-- TODO nog ff berekening maken -->
                                    <p class="mb-0">Spaar per maand: <strong id="outputSpaarPerMaand">...</strong></p>
                                </div>
                            </section>
                            </section>
                        </main>
                    </div>
                </body>
            </html>
        `;

        this.shadowRoot.firstChild?.remove();
        this.shadowRoot.append(...elements);
    }
};

window.customElements.define("add-finance-component", AddFinanceComponent);