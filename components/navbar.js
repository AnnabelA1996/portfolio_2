class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
            <header>
                <nav>
                    <ul class="navlist">
                        <li><a href="../index.html" class="navitem">Home</a></li>
                        <li><a href="../about.html" class="navitem">About</a></li>
                        <li><a href="../contact.html" class="navitem">Contact</a></li>
                        <li><a href="../portfolio.html" class="navitem">Portfolio</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
class MobileNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
            <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

            <!-- Top Navigation Menu -->
            <div class="topnav">
              <span class="active custom-icon"></span>
              <!-- Navigation links (hidden by default) -->
              <div id="myLinks">
              <a href="../index.html" class="navitem">Home</a>
              <a href="../about.html" class="navitem">About</a>
              <a href="../contact.html" class="navitem">Contact</a>
              <a href="../portfolio.html" class="navitem">Portfolio</a>
              </div>
              <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
              <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
              </a>
            </div>

        `;
    }
}
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }

customElements.define('mobile-navbar-component', MobileNavbar);

customElements.define('navbar-component', Navbar);