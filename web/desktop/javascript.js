document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-btn");

  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const targetId = e.target.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Nhảy mượt mà thẳng xuống trang tương ứng (About, Works, hoặc Contact)
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
