const modelBox = document.querySelector(".hidden");
const cancelBtn = document.querySelector(".cancel-btn");
const overly = document.querySelector(".overly");
const headerE = document.getElementById("header");
const allmodelBtn = document.querySelectorAll(".modal-btn");

const openModal = function () {
  modelBox.classList.remove("hidden");
  overly.classList.remove("hidden");
};

for (let i = 0; i < allmodelBtn.length; i++) {
  allmodelBtn[i].addEventListener("click", function () {
    openModal();
    headerE.textContent = `Modal window example ${i + 1} 🤗`;
  });
}

const closeModal = function () {
  modelBox.classList.add("hidden");
  overly.classList.add("hidden");
};

cancelBtn.addEventListener("click", closeModal);

overly.addEventListener("click", closeModal);
