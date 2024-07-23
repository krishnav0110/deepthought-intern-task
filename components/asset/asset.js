import { displayAssetTemplate, inputThreadBuilderAssetTemplate, inputArticleAssetTemplate } from "./assetTemplates.js";

const assetTemplate = document.createElement("template");

assetTemplate.innerHTML = `
<div class="asset">
    <div class="asset-title-con">
        <div class="asset-title">Technical Project Management</div>
        <button class="info-btn">i</button>
    </div>
    <div class="desc">
        <span class="desc-title">Description:</span>
        <span class="desc-desc"></span>
    </div>
    <div class="asset-content-con">
    
    </div>
</div>
<style>
    .asset {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 420px;
        max-width: 420px;
        height: 400px;
        margin: 10px 0;
        border-radius: 15px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25);
        transition: 0.3s;
    }
    .asset-title-con {
        position: relative;
        text-align: center;
        font-size: 16px;
        letter-spacing: 0.32px;
        width: 100%;
        padding: 14px 0;
        border-radius: 15px 15px 0px 0px;
        background-color: #000;
    }
    .asset-title {
        font-weight: 600;
        justify-self: center;
        flex-basis: auto;
        flex-grow: 1;
        color: #fff;
    }
    .info-btn {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 10px 20px;
        padding: 0 8px;
        border-radius: 50%;
        color: #000;
        background-color: #fff;
    }
    .desc {
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.3px;
        padding: 20px 20px 30px;
        border-bottom: 1px solid #ccc;
    }
    .desc-title {
        font-weight: 600;
    }
    .desc-desc {
        font-weight: 400;
    }
    .asset-content-con {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .asset-content-con::-webkit-scrollbar {
        width: 1px;
    }
</style>
`;

class Asset extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(assetTemplate.content.cloneNode(true));

        this.descElement = this.shadowRoot.querySelector(".desc");
        this.descDescElement = this.shadowRoot.querySelector(".desc-desc");
        this.assetContentConElement = this.shadowRoot.querySelector(".asset-content-con");

        this.asset = JSON.parse(this.getAttribute('asset'));

        this.descElementCollapsed = true;
        this.descDescElement.innerHTML = "To Explore more read more";

        this.descElement.addEventListener("click", () => {
            if(this.descElementCollapsed) {
                this.descDescElement.innerHTML = this.asset?.asset_description || "Couldn't load the description";
            } else {
                this.descDescElement.innerHTML = "To Explore more read more";
            }
            this.descElementCollapsed = !this.descElementCollapsed;
        });
    }

    static get observedAttributes() {
        return ['asset'];
    }

    attributeChangedCallback(name, _, newValue) {
        if(name === 'asset') {
            this.asset = JSON.parse(newValue);
            this.shadowRoot.querySelector(".asset-title").innerHTML = this.asset?.asset_title;

            switch(this.asset.asset_type) {
                case "display_asset":
                    this.assetContentConElement.innerHTML = displayAssetTemplate(this.asset);
                break;

                case "input_asset":
                    if(this.asset.asset_content_type === "threadbuilder") {
                        this.assetContentConElement.innerHTML = inputThreadBuilderAssetTemplate(this.asset);
                    }
                    else if(this.asset.asset_content_type === "article") {
                        this.assetContentConElement.innerHTML = inputArticleAssetTemplate(this.asset);
                    }
                break;
            }
        }
    }
}

customElements.define("krev-asset", Asset);