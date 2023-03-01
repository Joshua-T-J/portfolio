let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let subjectError = document.getElementById('subject-error');
let mobileError = document.getElementById('mobile-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('form_name').value.replaceAll(/\s/g, '');
  let nameInput = document.getElementById('form_name');
  if (name.length == 0) {
    nameError.innerHTML =
      'Name is required <i class="fa-solid fa-circle-exclamation"></i>';
    nameInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }

  if (name.match(/[0-9]/)) {
    nameError.innerHTML =
      'Name Cannot contain any numbers  <i class="fa-solid fa-circle-exclamation"></i>';
    nameInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }
  if (!name.match(/^[a-zA-Z ]*$/)) {
    nameError.innerHTML =
      'Cannot contain any special characters  <i class="fa-solid fa-circle-exclamation"></i>';
    nameInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }

  if (name.length < 3) {
    nameError.innerHTML =
      'Name is too short <i class="fa-solid fa-circle-exclamation"></i>';
    nameInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }

  nameError.innerHTML = '';
  nameInput.style.borderBottom = 'none';
  return true;
}

function validateMobile() {
  let mobile = document.getElementById('form_mobile').value.trim();
  let mobileInput = document.getElementById('form_mobile');
  if (mobile.length == 0) {
    mobileError.innerHTML =
      'Mobile Number is required <i class="fa-solid fa-circle-exclamation"></i>';
    mobileInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }
  if (!mobile.match(/^((0091)|(\+91)|0)\s?[0-9]{10}$/g)) {
    mobileError.innerHTML =
      'enter valid mobile <i class="fa-solid fa-circle-exclamation"></i>';
    mobileInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }
  mobileError.innerHTML = '';
  mobileInput.style.borderBottom = 'none';
  return true;
}

function validateEmail() {
  let email = document.getElementById('form_email').value.trim();
  let emailInput = document.getElementById('form_email');
  if (email.length == 0) {
    emailError.innerHTML =
      'email address is required <i class="fa-solid fa-circle-exclamation"></i>';
    emailInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }
  if (!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
    emailError.innerHTML =
      'Enter valid Email <i class="fa-solid fa-circle-exclamation"></i>';
    emailInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }
  emailError.innerHTML = '';
  emailInput.style.borderBottom = 'none';
  return true;
}

function validateSubject() {
  let subject = document
    .getElementById('form_subject')
    .value.replaceAll(/\s/g, '');
  let subjectInput = document.getElementById('form_subject');
  if (subject.length == 0) {
    subjectError.innerHTML =
      'Subject cannot be empty <i class="fa-solid fa-circle-exclamation"></i>';
    subjectInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }
  if (subject.length < 4) {
    subjectError.innerHTML =
      'subject is too short <i class="fa-solid fa-circle-exclamation"></i>';
    subjectInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }

  subjectError.innerHTML = '';
  subjectInput.style.borderBottom = 'none';
  return true;
}

function validateMessage() {
  let message = document.getElementById('form_message').value.trim();
  let messageInput = document.getElementById('form_message');
  if (message.length == 0) {
    messageError.innerHTML =
      'Enter a Message <i class="fa-solid fa-circle-exclamation"></i>';
    messageInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }
  if (message.length < 10) {
    messageError.innerHTML =
      'Message should be atleast 10 characters <i class="fa-solid fa-circle-exclamation"></i>';
    messageInput.style.borderBottom = '1px solid var(--clr-error)';
    return false;
  }
  messageError.innerHTML = '';
  messageInput.style.borderBottom = 'none';
  return true;
}

function validateSubmit() {
  if (
    !validateName() ||
    !validateMobile() ||
    !validateEmail() ||
    !validateSubject() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'please fill the contact form properly ! ';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
  return true;
}
