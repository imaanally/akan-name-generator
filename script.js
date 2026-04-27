const form = document.querySelector("#akanForm");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const day = document.querySelector("#day").value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;
    const gender = document.querySelector("input[name='gender']:checked");

    if (day === "" || month === "" || year === "" || gender === null) {
      alert("Please fill in all fields.");
      return;
    }

   if (day < 1 || day > 31) {
     alert("Please enter a valid day between 1 and 31.");
     return;
    }

   if (month < 1 || month > 12) {
     alert("Please enter a valid month between 1 and 12.");
     return;
    }

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(gender);

    console.log("Form submitted");
});