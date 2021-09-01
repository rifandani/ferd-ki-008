// output
const namaOutput = document.querySelector("#namaOutput");
const roleOutput = document.querySelector("#roleOutput");
const availabilityOutput = document.querySelector("#availabilityOutput");
const usiaOutput = document.querySelector("#usiaOutput");
const lokasiOutput = document.querySelector("#lokasiOutput");
const pengalamanOutput = document.querySelector("#pengalamanOutput");
const emailOutput = document.querySelector("#emailOutput");
// input
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

const onSubmitForm = () => {
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

  // trigger sweetalert2
  Swal.fire({
    title: "Data Updated",
    icon: "success",
    confirmButtonText: "Cool",
  });
};

const onLoad = () => {
  // trigger sweetalert2
  Swal.fire({
    title: "Welcome to Portfolio",
    text: "Features: edit data, submit data, LocalStorage supported",
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
