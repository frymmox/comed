if (document.documentElement.clientWidth < 1300) {
  document.querySelectorAll(".js-collapse-toggle").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const selector = el.getAttribute("data-target");

      document.querySelector(selector).classList.toggle("menu-dropdown--show");
    });
  });
}
