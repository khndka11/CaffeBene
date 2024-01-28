class Header extends HTMLElement{
    constructor(){
        this.render();
        this.children[2].children[0].children[0].children[0].addEventListener("click",()=>{
    })
    }

render() {
    this.innerHTML = `
    <nav>
    <a href="index.html"><img src="img/logo.png" class="logo"/></a>
        <ul>
          <li><a href="#">Brand Story</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="#">Why Bene</a></li>
          <li><a href="#">Branch</a></li>
          <li class="franchise"><a href="franchise.html">Work Together</a></li>
        </ul>
</nav>`
}
connectedCallBack(){
    this.render();
}


disconnectedCallback() {

}

attributeChangedCallback(name, oldVal, newVal) {
    
}
    
 
adoptedCallback() {

}
}

window.customElements.define('navbar', Header);
