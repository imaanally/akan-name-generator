const form = document.querySelector("#akanForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form submitted");
});