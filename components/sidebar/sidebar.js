const sidebarTemplate = document.createElement("template");

const sidebarTasksTemplate = (task) => {
    return `
        <div class="sidebar-content-title">${task.task_title}</div>
        <ul class="sidebar-content-con">
            ${task.assets.map(asset => {
                return `<li>${asset.asset_title}</li>`;
            }).join("")}
        </ul>
    `
};

sidebarTemplate.innerHTML = `
<div class="sidebar">
    <div class="sidebar-title-con">
        <div class="sidebar-title">Journey Board</div>
        <img
            class="sidebar-expand-icon"
            src="/assets/rightArrowIcon.svg"
            loading="lazy"
        />
    </div>
    <div class="sidebar-collapsed-content"></div>
    <div class="sidebar-content">
        
    </div>
</div>
<style>
    .sidebar {
        position: fixed;
        font-size: 16px;
        letter-spacing: 0.32px;
        display: flex;
        flex-direction: column;
        width: 130px;
        max-width: 400px;
        height: 70vh;
        background-color: #fdfdfd;
        border-radius: 0px 20px 20px 20px;
        box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.25);
        transition: 0.5s;
        overflow-x: hidden;
        z-index: 100;
    }
    .sidebar-title-con {
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 20px;
        width: auto;
        padding: 11px 14px;
        border-radius: 0px 20px 0px 0px;
        color: #fff;
        background-color: #000;
    }
    .sidebar-title {
        display: none;
        flex-basis: auto;
        flex-grow: 1;
    }
    .sidebar-expand-icon {
        aspect-ratio: 1;
        width: 20px;
        padding: 4px;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
    }
    .sidebar-collapsed-content {
        line-height: 1.8rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px;
        padding: 20px 10px;
        color: var(--primary-color-1);
        border: 1px solid var(--primary-color-1);
        border-radius: 20px;
    }
    .sidebar-content {
        display: none;
        flex-direction: column;
        width: auto;
        padding: 20px;
        color: #000;
    }
    .sidebar-content-title {
        font-weight: 600;
        margin-left: 23px;
    }
    .sidebar-content-title::before {
        content: "\u2022";
        margin-right: 10px;
    }
    .sidebar-content-con {
        font-weight: 400;
    }
    .sidebar-content-con li {
        margin: 8px 0;
        padding-left: 20px;
    }
</style>
`;

class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(sidebarTemplate.content.cloneNode(true));

        this.sidebarElement = this.shadowRoot.querySelector(".sidebar");
        this.sidebarExpandIcon = this.shadowRoot.querySelector("img.sidebar-expand-icon");
        this.sidebarTitleElement = this.shadowRoot.querySelector(".sidebar-title");
        this.sidebarCollapsedContentElement = this.shadowRoot.querySelector("div.sidebar-collapsed-content");
        this.sidebarContentElement = this.shadowRoot.querySelector("div.sidebar-content");

        this.expanded = false;
        this.tasksCount = 0;



        this.sidebarCollapsedContentElement.innerHTML = this.tasksCount;

        this.sidebarExpandIcon.addEventListener("click", () => {
            this.sidebarElement.style.width = this.sidebarElement.style.width === "400px" ? "130px" : "400px";
            this.expanded = !this.expanded;
            this.sidebarExpandIcon.style.transform = this.expanded ? `rotateY(180deg)` : `rotateY(0)`;

            if(this.expanded) {
                this.sidebarTitleElement.style.display = "flex";
                this.sidebarCollapsedContentElement.style.display = "none";
                this.sidebarContentElement.style.display = "flex";
            } else {
                this.sidebarTitleElement.style.display = "none";
                this.sidebarCollapsedContentElement.style.display = "flex";
                this.sidebarContentElement.style.display = "none";
            }
        });
    }

    static get observedAttributes() {
        return ['tasks'];
    }

    attributeChangedCallback(name, _, newValue) {
        if(name === 'tasks') {
            this.tasks = JSON.parse(newValue);
            this.tasksCount = this.tasks?.length || 0;
            this.sidebarCollapsedContentElement = this.shadowRoot.querySelector("div.sidebar-collapsed-content");
            this.sidebarCollapsedContentElement.innerHTML = this.tasksCount;

            this.sidebarContentElement = this.shadowRoot.querySelector(".sidebar-content");
            this.tasks.forEach(task => {
                this.sidebarContentElement.innerHTML += sidebarTasksTemplate(task);
            });
        }
    }
}

customElements.define("krev-sidebar", Sidebar);