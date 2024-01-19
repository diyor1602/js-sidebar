window.addEventListener("DOMContentLoaded", () => {
  const openSidebarBtn = document.getElementById("openSidebarBtn");
  const closeBtn = document.querySelector(".close-btn");
  const passwordToggle = document.getElementById("password-toggle");
  const form = document.querySelector("form");
  const passwordInput = document.getElementById("passwordInput");
  const emailInput = document.getElementById("emailInput");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    if (email.trim() === "" || email === null) {
      emailInput.focus();
      emailInput.style.borderColor = "red";
      return;
    } else if (password.trim() === "" || password === null) {
      passwordInput.focus();
      passwordInput.style.borderColor = "red";
      return;
    } else {
      toggleSidebar();
      emailInput.style.borderColor = "#dee2e6";
      passwordInput.style.borderColor = "#dee2e6";
      emailInput.value = "";
      passwordInput.value = "";
    }
  });

  openSidebarBtn.addEventListener("click", toggleSidebar);
  closeBtn.addEventListener("click", toggleSidebar);
  passwordToggle.addEventListener("click", togglePasswordVisibility);

  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  function togglePasswordVisibility() {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
      passwordInput.type = "password";
      passwordToggle.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  }
});
