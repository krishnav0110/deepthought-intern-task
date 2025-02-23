const navbarTemplate = document.createElement("template");

navbarTemplate.innerHTML = `
<div class="navbar">
  <img
    class="navbar-logo"
    src="https://deepthought.education/assets/images/logo/logo.svg"
    loading="lazy"
  />
  <div class="navbar-right">
    <div class="navbar-right-link"><img
      class="navbar-right-link-icon"
      src="/assets/homeIcon.svg"
      loading="lazy"
    /></div>
    <div class="navbar-right-link"><img
      class="navbar-right-link-icon"
      src="/assets/settingsIcon.svg"
      loading="lazy"
    /></div>
    <div class="navbar-right-link"><img
      class="navbar-right-link-icon"
      src="/assets/bellIcon.svg"
      loading="lazy"
    /></div>
    <div class="navbar-right-link"><img
      class="navbar-right-profile"
      src="/assets/profilePic.png"
      loading="lazy"
    /></div>
    <div class="navbar-right-link">...</div>
  </div>
</div>

<style>
  .navbar {
    font-size: 15px;
    font-weight: 900;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    max-height: 40px;
    padding: 21px 80px;
    color: #fff;
    background-color: #f0f0f0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .navbar-logo {
    aspect-ratio: 1;
    width: 311px;
  }
  .navbar-right {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
    color: black;
  }
  .navbar-right-link {
    cursor: pointer;
  }
  .navbar-right-link-icon {
    aspect-ratio: 1;
    width: 20px;
    padding: 7px;
    background-color: var(--info, #3683f0);
    border-radius: 50%;
  }
  .navbar-right-profile {
    aspect-ratio: 1;
    width: 34px;
  }
</style>
`;

class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
    }
}

customElements.define("krev-navbar", Navbar);