const modalElement = document.querySelector("[data-modal]");
const modalOpenButtons = document.querySelectorAll("[data-modal-open]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
const countControls = document.querySelectorAll(".count-controls");

const openModal = () => {
  if (!modalElement) {
    return;
  }

  modalElement.classList.add("modal-container-open");
  modalElement.setAttribute("aria-hidden", "false");
  document.addEventListener("keydown", onDocumentKeydown);
};

const closeModal = () => {
  if (!modalElement) {
    return;
  }

  modalElement.classList.remove("modal-container-open");
  modalElement.setAttribute("aria-hidden", "true");
  document.removeEventListener("keydown", onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeModal();
  }
}

modalOpenButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

countControls.forEach((control) => {
  const inputElement = control.querySelector(".modal-search-count-input");
  const decreaseButton = control.querySelector(".decrease");
  const increaseButton = control.querySelector(".increase");

  if (!inputElement || !decreaseButton || !increaseButton) {
    return;
  }

  decreaseButton.addEventListener("click", () => {
    const minValue = Number(inputElement.min || 0);
    const currentValue = Number(inputElement.value || minValue);
    inputElement.value = String(Math.max(minValue, currentValue - 1));
  });

  increaseButton.addEventListener("click", () => {
    const currentValue = Number(inputElement.value || 0);
    inputElement.value = String(currentValue + 1);
  });
});

if (modalElement?.classList.contains("modal-container-open")) {
  document.addEventListener("keydown", onDocumentKeydown);
}
