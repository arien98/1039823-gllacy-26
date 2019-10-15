var modalLink = document.querySelector(".contacts-button");
var modalOverlay = document.querySelector(".overlay");
var modalWindow = document.querySelector(".feedback-window");
var closeLink = document.querySelector(".close-button");

var modalForm = modalWindow.querySelector("form");
var feedbackName = modalWindow.querySelector("[name=feedback-name]");
var feedbackEmail = modalWindow.querySelector("[name=feedback-email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("feedbackName");
} catch (err) {
  isStorageSupport = false;
};

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.add("modal-show");
  modalOverlay.classList.add("overlay-show");

  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});

closeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWindow.classList.remove("modal-show");
  modalOverlay.classList.remove("overlay-show");
  modalWindow.classList.remove("modal-error");
});

/*modalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-error");
    modalWindow.offsetWidth = modalWindow.offsetWidth;
    modalWindow.classList.add("modal-error");
  } else {
    if (isStorageSupport){
      localStorage.setItem("feedbackName", feedbackName.value);
    };
  }
*/
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalWindow.classList.contains("modal-show")) {
        modalWindow.classList.remove("modal-show");
        modalOverlay.classList.remove("overlay-show");
        modalWindow.classList.remove("modal-error");
      }
    }
  });
