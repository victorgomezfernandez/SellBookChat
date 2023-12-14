function initialize() {
    const leftMenuOpener = document.getElementById("left-menu-opener");
    leftMenuOpener.addEventListener("click", showLeftMenu);
    const leftMenuCloser = document.getElementById("left-menu-closer");
    leftMenuCloser.addEventListener("click", closeLeftMenu);
}

function showLeftMenu() {
    const leftMenu = document.getElementById("left-menu");
    leftMenu.classList.add("left-menu-open");
    leftMenu.classList.remove("left-menu-close");
}

function closeLeftMenu() {
    const leftMenu = document.getElementById("left-menu");
    leftMenu.classList.add("left-menu-close");
    leftMenu.classList.remove("left-menu-open");
}

initialize();