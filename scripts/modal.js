const modals = document.querySelectorAll("dialog.modal");

modals.forEach((modal) => {
  const form = modal.querySelector(".modal-dialog-form");

  // Use data attributes to link buttons to modals dynamically
  const buttonOpen = document.querySelector(`[data-open="${modal.id}"]`);
  const buttonConfirm = modal.querySelector(".modal-confirm-button");
  const buttonClear = modal.querySelector(".modal-clear-button");

  openDialog(buttonOpen, modal);
  closeDialog(modal);
  clearDialog(buttonClear, form);
  formHandle(buttonConfirm, modal, form);
});

function openDialog(button, modal) {
  button.addEventListener("click", () => {
    modal.showModal();
    modal.querySelector("input, select, textarea").focus();
  });
}

function closeDialog(modal) {
  modal.addEventListener("close", (e) => {
    console.log(modal.returnValue);
  });
}

function clearDialog(button, form) {
  button.addEventListener("click", () => {
    form.reset();
  });
}

function formHandle(button, modal, form) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity(); // Native browser validation feedback
      return;
    }

    const formData = new FormData(form);
    const json = feedFormData(formData);
    modal.close(JSON.stringify(json));
  });
}

function feedFormData(formData) {
  const json = {};
  formData.forEach((value, key) => {
    json[key] = value;
  });

  return json;
}
