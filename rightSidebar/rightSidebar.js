const rightSidebar = document.createElement("template");

rightSidebar.innerHTML = `
<div class="right-sidebar">
    <div class="right-sidebar-title-con">
        <img
            class="right-sidebar-icon"
            src="/assets/crossIcon.svg"
        />
        <div class="right-sidebar-title">
            N<br/>
            o<br/>
            t<br/>
            i<br/>
            c<br/>
            e<br/><br/>
            B<br/>
            o<br/>
            a<br/>
            r<br/>
            d
        </div>
    </div>
</div>

<style>
    .right-sidebar {
        position: fixed;
        top: 100px;
        right: 0;
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.32px;
        display: flex;
        width: 95px;
        color: #fff;
        border-radius: 30px 0px 0px 30px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .right-sidebar-title-con {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        padding: 30px 0;
        background-color: #000;
        border-radius: 30px 0px 0px 30px;
    }
    .right-sidebar-icon {
        margin-bottom: 20px;
        width: 30px;
        border-radius: 50%;
    }
    .right-sidebar-title {
        line-height: 1.3rem;
    }
</style>
`;

class RightSidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(rightSidebar.content.cloneNode(true));
    }
}

customElements.define("krev-right-sidebar", RightSidebar);