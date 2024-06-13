function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const menuToggle = document.getElementById('menuToggle');
    const floatingText = document.getElementById('floatingText');
    const container = document.querySelector('.container');

    container.classList.toggle('menu-expanded'); // Toggle class for expanding the menu
}

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".floating-text");
    const text = textElement.textContent;
    textElement.innerHTML = "";
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.animationDelay = `${index * 0.1}s`;
        textElement.appendChild(span);
    });
});
