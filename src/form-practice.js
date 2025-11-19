const form = document.querySelector("form");
const REQUIRED = ["name", "email", "password", "confirmPassword"];
const submitBtn = form.querySelector('[type="submit"]');
submitBtn.disabled = true;

REQUIRED.every((field) => form[field].value.trim() !== "");

form.addEventListener("input", () => {
  REQUIRED.every((field) => form[field].value.trim() !== "")
    ? (submitBtn.disabled = false)
    : (submitBtn.disabled = true);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);
});

const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Pass the data object to the Results function to get HTML! 🚀
  result.innerHTML = Results(data);
});
function Results(data) {
  console.log(Object.entries(data));

  return `<ul class="space-y-1 text-sm">
        ${Object.entries(data)
          .map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`)
          .join("")}
    </ul>   
    `;
}
