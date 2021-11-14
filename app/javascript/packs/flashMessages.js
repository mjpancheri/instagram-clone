import Toastify from "toastify-js";

document.addEventListener("DOMContentLoaded", () => {
  const colors = {
    notice: "--color-green",
    alert: "--color-red",
    error: "--color-red",
  }

  JSON.parse(document.body.dataset.flashMessages).forEach(flashMessage => {
    const [type, message] = flashMessage;
    
    Toastify({
      text: message,
      duration: 3000,
      close: true,
      stopOnFocus: true,
      gravity: "top",
      position: "right",
      backgroundColor: `var(${colors[type]})`
    }).showToast();
  });
});
