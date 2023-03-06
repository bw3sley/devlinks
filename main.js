const switcher = document.getElementById("switch");

switcher.addEventListener("click", toggleMode);

function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");
    const username = document.querySelector("#profile p");

    if(html.classList.contains("light")) {
        img.setAttribute("src", "https://github.com/maykbrito.png");
        username.textContent = "@maykbrito";
    }

    else {
        img.setAttribute("src", "https://github.com/bw3sley.png");
        username.textContent = "@bw3sley";
    }
}