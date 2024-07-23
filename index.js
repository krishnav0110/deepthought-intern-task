import "./navbar/navbar.js";
import "./asset/asset.js";
import "./sidebar/sidebar.js";
import "./rightSidebar/rightSidebar.js";

window.addEventListener("load", async () => {
    const res = await fetch("http://localhost:5500/backendData/data.json");
    const data = await res.json();
    const assets = data?.tasks[0]?.assets || [];
    
    const sidebarComponent = document.querySelector("krev-sidebar");
    sidebarComponent.setAttribute("tasks", JSON.stringify(data?.tasks));
    
    const content = document.querySelector(".content");
    assets.forEach(asset => {
        const assetComponent = document.createElement("krev-asset");
        assetComponent.setAttribute("asset", JSON.stringify(asset));
        content.appendChild(assetComponent);
    });
});