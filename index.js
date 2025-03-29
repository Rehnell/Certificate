document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const body = document.body;

    menuBtn.addEventListener("change", function () {
        if (this.checked) {
            body.style.backgroundColor = "white"; // Change background to white
        } else {
            body.style.backgroundColor = "rgb(37, 172, 185)"; // Revert to original color
        }
    });
});
