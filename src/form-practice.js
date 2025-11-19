const form = document.querySelector("form");

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
