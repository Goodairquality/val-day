const friends = {
  alla: { password: "golden", page: "person1.html" },
  rexhina: { password: "ashtrevino", page: "person2.html" },
  aishani: { password: "mushroomhead", page: "person3.html" },
  miyanna: { password: "MR.ROVERISBACK", page: "person4.html" }, //DONE
  ava: { password: "papababa", page: "person5.html" },
  ryan: { password: "D1hater", page: "person6.html" },
  zion: { password: "caseohstwin", page: "person7.html" },
  danzel: { password: "maybemousse", page: "person8.html" },
  derek: { password: "onepeice", page: "person9.html" },
  camila: { password: "emilyinparisbutitsyouinlondon", page: "person10.html" },
};

let currentFriendId = "";

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentFriendId = button.getAttribute('data-friend-id');
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')

    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
    errorMessage.classList.remove("show");

    const modalTitle = modal.querySelector(".modal-header .title");
    modalTitle.innerText = "Hey, " + (currentFriendId ? currentFriendId : "A friend") + " !!";
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')

  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";
  errorMessage.classList.remove("show");
}

function submitPassword() {
    const enteredPassword = document.getElementById("pass").value;
    const errorMessage = document.getElementById("error-message"); //NEW NEW NEW

    errorMessage.textContent = ""; //NEW NEW NEW
    errorMessage.classList.remove("show"); //NEW NEW NEW

    if (currentFriendId && friends[currentFriendId]) {
      if (enteredPassword == friends[currentFriendId].password) {
        window.location.href = friends[currentFriendId].page;
      } else {
        //alert("Incorrect password. Please try again.");
        errorMessage.textContent = "Wrong password!"; //NEW NEW NEW
        errorMessage.classList.add("show");

        setTimeout(() => {
          errorMessage.classList.remove("show");
          errorMessage.textContent = "";
        }, 3000);
      } 
    } else {
      //alert("An error occurred. Please try again.");
      errorMessage.textContent = "An error occurred. Please try again."; //NEW NEW NEW
      errorMessage.classList.add("show");

      setTimeout(() => {
        errorMessage.classList.remove("show");
        errorMessage.textContent = "";
      }, 3000);
    }
  }

  document.addEventListener('keydown', function(event) {
    if (!modal.classList.contains('active')) return
    if (event.key === 'Enter') {
      submitPassword()
      console.log('Enter key was pressed');
    }
  });
  