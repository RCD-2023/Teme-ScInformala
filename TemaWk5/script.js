const contactForm = document.getElementById("contactForm");
const bannerConfirmare = document.getElementById("bannerConfirmare");
const userNameSpan = document.getElementById("userName");
//
let arrayInput = [firstName, lastName, message];

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;

  // se selecteaza form-fieldurile de interes
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("message");

  // se valideaza inputurile in campuri
  arrayInput.forEach((field) => {
    if (!field.value) {
      isValid = false;
    } else {
      field.style.border = "1px solid #ccc";
    }
  });

  if (!gender) {
    isValid = false;
  }

  // daca formul e valid se afiseaza textul cu numele trecut in input
  if (isValid) {
    bannerConfirmare.style.display = "block";
    userNameSpan.textContent = firstName.value;

    console.log(`First Name: ${firstName.value}`);
    console.log(`Last Name: ${lastName.value}`);
    console.log(`Gender: ${gender.value}`);
    console.log(`Message: ${message.value}`);

    // Clear the form fields
    contactForm.reset(); // ca sa nu porneasca cu campurile incarcate
  }
});
