const icon = document.querySelectorAll(".icon")



for (let i = 0; i < icon.length; i++) {
    icon[i].onclick = function(e) {
        e.target.classList.toggle("fs-64")
        e.target.classList.toggle("fs-128")
    }
}
