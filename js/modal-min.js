var modalLink=document.querySelector(".contacts-button"),modalOverlay=document.querySelector(".overlay"),modalWindow=document.querySelector(".feedback-window"),closeLink=document.querySelector(".close-button"),modalForm=modalWindow.querySelector("form"),feedbackName=modalWindow.querySelector("[name=feedback-name]"),feedbackEmail=modalWindow.querySelector("[name=feedback-email]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("feedbackName")}catch(e){isStorageSupport=!1}modalLink.addEventListener("click",function(e){e.preventDefault(),modalWindow.classList.add("modal-show"),modalOverlay.classList.add("overlay-show"),storage?(feedbackName.value=storage,feedbackEmail.focus()):feedbackName.focus()}),closeLink.addEventListener("click",function(e){e.preventDefault(),modalWindow.classList.remove("modal-show"),modalOverlay.classList.remove("overlay-show"),modalWindow.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modalWindow.classList.contains("modal-show")&&(modalWindow.classList.remove("modal-show"),modalOverlay.classList.remove("overlay-show"),modalWindow.classList.remove("modal-error")))});