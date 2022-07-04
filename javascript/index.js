const mobile_nav = document.querySelector(".mob");
const nav_head = document.querySelector(".navigation");
mobile_nav.addEventListener("click", () => toggleNav());

const toggleNav = function() {
    nav_head.classList.toggle("active");
}