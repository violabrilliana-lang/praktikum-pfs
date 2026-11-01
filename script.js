document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const namaInput = document.getElementById("nama");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPassword");

  const namaError = document.getElementById("namaError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("successMessage");

  // Toggle Tampilkan Password
  showPasswordCheckbox.addEventListener("change", () => {
    if (showPasswordCheckbox.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });

  // Validasi Form saat disubmit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset pesan error & pesan sukses
    namaError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.style.display = "none";

    let isValid = true;

    // 1. Validasi Nama: tidak boleh kosong
    const namaValue = namaInput.value.trim();
    if (namaValue === "") {
      namaError.textContent = "Nama tidak boleh kosong.";
      isValid = false;
    }

    // 2. Validasi Email: harus mengandung @
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      emailError.textContent = "Email tidak boleh kosong.";
      isValid = false;
    } else if (!emailValue.includes("@")) {
      emailError.textContent = "Email harus mengandung @.";
      isValid = false;
    }

    // 3. Validasi Password: minimal 8 karakter
    const passwordValue = passwordInput.value;
    if (passwordValue.length < 8) {
      passwordError.textContent = "Password minimal 8 karakter.";
      isValid = false;
    }

    // 4. Jika semua validasi lolos
    if (isValid) {
      successMessage.textContent = `Pendaftaran berhasil, selamat datang, ${namaValue}!`;
      successMessage.style.display = "block";

      // Reset form setelah berhasil
      form.reset();
      passwordInput.type = "password";
    }
  });
});
