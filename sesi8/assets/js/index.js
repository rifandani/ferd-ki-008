// output
const namaOutput = document.querySelector("#namaOutput");
const roleOutput = document.querySelector("#roleOutput");
const availabilityOutput = document.querySelector("#availabilityOutput");
const usiaOutput = document.querySelector("#usiaOutput");
const lokasiOutput = document.querySelector("#lokasiOutput");
const pengalamanOutput = document.querySelector("#pengalamanOutput");
const emailOutput = document.querySelector("#emailOutput");
// form & inputs
const myForm = document.getElementById("myform");
const namaInput = document.querySelector("#nama");
const roleInput = document.querySelector("#role");
const availabilityInput = document.querySelector("#availability");
const usiaInput = document.querySelector("#usia");
const lokasiInput = document.querySelector("#lokasi");
const pengalamanInput = document.querySelector("#pengalaman");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("#submitBtn");

const onClickEdit = () => {
  // enable input
  namaInput.disabled = false;
  roleInput.disabled = false;
  availabilityInput.disabled = false;
  usiaInput.disabled = false;
  lokasiInput.disabled = false;
  pengalamanInput.disabled = false;
  emailInput.disabled = false;
  submitBtn.hidden = false;
};

const checkFormValidity = () => {
  // check HTML form validity
  if (myForm.checkValidity()) {
    const ONLY_TEXT_WITH_WHITESPACE_REGEX = /^[A-Za-z\s]*$/;
    const ONLY_DIGIT_REGEX = /^\d+$/;
    const ONLY_EMAIL_REGEX =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const errors = [];

    console.log(errors);

    // validate input value
    for (let i = 0; i < myForm.elements.length; i++) {
      const {
        type: inputType,
        value: inputValue,
        id: inputId,
      } = myForm.elements[i];

      console.log(inputValue, typeof inputValue);

      if (inputType === "number") {
        // check for only digit inputs
        const numberValue = Number(inputValue);

        if (isNaN(numberValue)) {
          errors.push(inputId);
        } else {
          const isValid = ONLY_DIGIT_REGEX.test(numberValue);

          if (!isValid) {
            errors.push(inputId);
          }
        }
      } else if (inputType === "email") {
        // check for only email inputs
        const isValid = ONLY_EMAIL_REGEX.test(inputValue);

        if (!isValid) {
          errors.push(inputId);
        }
      } else if (inputType === "text") {
        // check for only text inputs
        const isValid = ONLY_TEXT_WITH_WHITESPACE_REGEX.test(inputValue);

        if (!isValid) {
          errors.push(inputId);
        }
      }
    }

    if (errors.length > 0) {
      console.error(errors);
      // show error message
      Swal.fire({
        icon: "error",
        title: "Inputs Error",
        text: `Please check again your input form: ${errors.join(", ")}`,
        confirmButtonText: "Try Again!",
      });
    } else {
      // success
      submitForm();
    }
  } else {
    // show error message
    Swal.fire({
      icon: "error",
      title: "Input Error",
      text: `Please check again your input form`,
      confirmButtonText: "Try Again!",
    });
  }
};

const submitForm = () => {
  // change value from input to output
  namaOutput.innerText = namaInput.value || "unknown";
  roleOutput.innerText = roleInput.value || "unknown";
  availabilityOutput.innerText = availabilityInput.value || "unknown";
  usiaOutput.innerText = usiaInput.value || "unknown";
  lokasiOutput.innerText = lokasiInput.value || "unknown";
  pengalamanOutput.innerText = pengalamanInput.value || "unknown";
  emailOutput.innerText = emailInput.value || "unknown";

  // update local storage
  localStorage.setItem("namaOutput", namaInput.value || "unknown");
  localStorage.setItem("roleOutput", roleInput.value || "unknown");
  localStorage.setItem(
    "availabilityOutput",
    availabilityInput.value || "unknown"
  );
  localStorage.setItem("usiaOutput", usiaInput.value || "unknown");
  localStorage.setItem("lokasiOutput", lokasiInput.value || "unknown");
  localStorage.setItem("pengalamanOutput", pengalamanInput.value || "unknown");
  localStorage.setItem("emailOutput", emailInput.value || "unknown");

  // show success message
  Swal.fire({
    title: "Data Updated",
    icon: "success",
    confirmButtonText: "Cool",
  });
};

const onLoad = () => {
  // show welcome message
  Swal.fire({
    title: "Welcome to Portfolio",
    text: "Features: edit data, submit data, local storage, form validation supported",
    icon: "info",
    confirmButtonText: "Cool",
  });

  // get items from local storage, set it to output text
  namaOutput.innerText =
    localStorage.getItem("namaOutput") || "Tri Rizeki Rifandani";
  roleOutput.innerText =
    localStorage.getItem("roleOutput") || "Front End Developer";
  availabilityOutput.innerText =
    localStorage.getItem("availabilityOutput") || "Full Time";
  usiaOutput.innerText = localStorage.getItem("usiaOutput") || "23";
  lokasiOutput.innerText = localStorage.getItem("lokasiOutput") || "Yogyakarta";
  pengalamanOutput.innerText = localStorage.getItem("pengalamanOutput") || "2";
  emailOutput.innerText =
    localStorage.getItem("emailOutput") || "tri.rifandani@gmail.com";

  // disable input
  namaInput.disabled = true;
  roleInput.disabled = true;
  availabilityInput.disabled = true;
  usiaInput.disabled = true;
  lokasiInput.disabled = true;
  pengalamanInput.disabled = true;
  emailInput.disabled = true;

  // get value from output to input
  namaInput.value = namaOutput.innerText;
  roleInput.value = roleOutput.innerText;
  availabilityInput.value = availabilityOutput.innerText;
  usiaInput.value = usiaOutput.innerText;
  lokasiInput.value = lokasiOutput.innerText;
  pengalamanInput.value = pengalamanOutput.innerText;
  emailInput.value = emailOutput.innerText;
};

onLoad();
