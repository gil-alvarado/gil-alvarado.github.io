const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

// Toggle mobile menu
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
  event.stopPropagation();
}

// Add active class to the current button (highlight it)
$(document).ready(function () {
  $(".item").click(function () {
    $(".item").removeClass("active"); // Remove "active" class from all items
    $(this).addClass("active"); // Add "active" class to the clicked item

    // Close the menu once the user selects a listed item
    toggleMenu();
  });
});

function closeMenu(e) {
  if (menu.classList.contains("active")) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      // Close the menu if clicked outside the menu and toggle button
      toggleMenu();
    }
  }
}

// Event Listeners
toggle.addEventListener("click", toggleMenu, false);
document.addEventListener("click", closeMenu, false);