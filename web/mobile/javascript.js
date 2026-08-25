document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-btn");

  navButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Dùng currentTarget thay vì target để luôn bắt chính xác vào cái button chứa attribute
      const targetId = e.currentTarget.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Hiệu ứng cuộn mượt mà đến phần tương ứng
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
