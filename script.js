        function toggleMenu() {
            document.getElementById("sidebar").classList.toggle("active");
        }
        document.addEventListener("click", function(event) {
    let menu = document.getElementById("sidebar");
    let hamburger = document.querySelector(".hamburger");
    
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active");
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    });

function revealContent() {
            document.getElementById("blurDivID").classList.add("anzeigen");
            document.querySelector(".show-button").style.display = "none";
        }
