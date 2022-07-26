"use strict";
/* query selectors */
const close = document.querySelector(".close");
const modal = document.querySelector(".modal-overlay");
const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const toggleButton = document.querySelectorAll(".toggle-button");
const links = document.querySelectorAll(".links");

// The close menu function
const closeMenu = function () {
  modal.classList.add("close-modal");
  sidebar.classList.add("sidebar-close");
};
close.addEventListener("click", closeMenu);

// The open menu function
menu.addEventListener("click", function () {
  modal.classList.remove("close-modal");
  sidebar.classList.remove("sidebar-close");
});

// The escape key function
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("close-modal")) {
    closeMenu();
  }
});

// The toggle button function
toggleButton.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const button = e.currentTarget;
    // This is the span container of the image

    const sibling = e.currentTarget.nextElementSibling;
    // This is the container of the hidden links.

    console.log(button);
    console.log(sibling);

    if (button.classList.contains("toggle")) {
      button.classList.remove("toggle");
      sibling.classList.add("show-toggle");

      button.innerHTML = ` <button type="button" class="toggle-button"><span class="toggle-down toggle"
                ><img
                  src="./images/icon-arrow-up.svg"
                  alt="toggle down button"
                  class=""
              /></span>
            </button>`;
    } else {
      button.classList.add("toggle");
      sibling.classList.remove("show-toggle");
      button.innerHTML = ` <button type="button" class="toggle-button"><span class="toggle-down"
                ><img
                  src="./images/icon-arrow-down.svg"
                  alt="toggle down button"
                  class=""
              /></span>
            </button>`;
    }
  })
);
