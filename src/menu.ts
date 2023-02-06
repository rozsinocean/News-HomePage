const menuActivation: HTMLButtonElement = document.querySelector("#menuActivation")!;
const menuDeactivation: HTMLButtonElement = document.querySelector("#menuDeactivation")!;
const menu: HTMLDivElement = document.querySelector("#menu")!;

export default function Menu(): void {
    menuActivation.addEventListener("click", menuLogic);
    menuDeactivation.addEventListener("click", menuLogic);
}

function menuLogic(e: Event) {
    e.preventDefault();

    if (menu.className == "menuActive") {
        menuDeactivation.className = "";
        menu.className = "";
        return;
    }

    menuDeactivation.className = "menuBtn";
    menu.className = "menuActive";
}
