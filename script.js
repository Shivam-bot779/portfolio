// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.textContent = "Switch Theme";
    toggleThemeButton.style.position = "fixed";
    toggleThemeButton.style.bottom = "20px";
    toggleThemeButton.style.right = "20px";
    toggleThemeButton.style.padding = "10px";
    toggleThemeButton.style.backgroundColor = "#333";
    toggleThemeButton.style.color = "#fff";
    toggleThemeButton.style.border = "none";
    toggleThemeButton.style.cursor = "pointer";

    document.body.appendChild(toggleThemeButton);

    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});

// Add light mode styles
document.head.insertAdjacentHTML(
    "beforeend",
    `<style>
        .light-mode {
            background-color: #ffffff;
            color: #000000;
        }
        .light-mode header,
        .light-mode footer,
        .light-mode nav {
            background-color: #f1f1f1;
        }
        .light-mode nav ul li a {
            color: #000000;
        }
    </style>`
);
