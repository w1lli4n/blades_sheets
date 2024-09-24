let modals = ["info", "skills"];

modals.forEach((section) => {
  let button_open = document.getElementById("modal-open-" + section);
  let modal = document.getElementById("modal-dialog-" + section);

  button_open.addEventListener("click", () => {
    modal.showModal();
  });
});

modals.forEach((section) => {
  let modal = document.getElementById("modal-dialog-" + section);
  let confirm_button = document.getElementById("modal-confirm-" + section);
  let input = document.getElementById("info-character-name");

  modal.addEventListener("close", (e) => {
    let output =
      modal.returnValue === "default"
        ? "No return"
        : `Return value: ${modal.returnValue}.`;
    console.log(output);
  });

  confirm_button.addEventListener("click", (e) => {
    e.preventDefault();
    modal.close(input.value);
  });
});
