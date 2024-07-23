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
    <img
        class="yt-img"
        src="/assets/yt.png"
        loading="lazy"
    />
</div>
<style>
    .asset {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 450px;
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
    .yt-img {
        width: 100%;
        margin: 0 0 80px;
    }
</style>
`;

class Asset extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(assetTemplate.content.cloneNode(true));

        this.asset = JSON.parse(this.getAttribute('asset'));

        this.descElementCollapsed = true;
        const descElement = this.shadowRoot.querySelector(".desc");

        const descDescElement = this.shadowRoot.querySelector(".desc-desc");
        descDescElement.innerHTML = "To Explore more read more";

        descElement.addEventListener("click", () => {
            if(this.descElementCollapsed) {
                descDescElement.innerHTML = this.asset?.asset_description || "Couldn't load the description";
            } else {
                descDescElement.innerHTML = "To Explore more read more";
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
            const assetTitle = this.shadowRoot.querySelector(".asset-title");
            assetTitle.innerHTML = this.asset?.asset_title;
        }
    }
}

customElements.define("krev-asset", Asset);