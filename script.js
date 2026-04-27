const form = document.querySelector("#akanForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;
    const gender = document.querySelector("input[name='gender']:checked");

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(gender);

    console.log("Form submitted");
});