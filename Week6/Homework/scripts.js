// Ask for a username and the values used to decide website eligibility.
const usernameInput = prompt("Enter your username:");
const username = usernameInput === null ? "" : usernameInput.trim();
const ageInput = prompt("How old are you?");
const age = Number(ageInput);
const adultInput = prompt("Are you visiting with an adult? Enter yes or no.");
const adultAnswer = adultInput === null ? "" : adultInput.trim().toLowerCase();
const isWithAdult = adultAnswer === "yes";

// Print all collected values and the converted adult answer to the console.
console.log("Username:", username);
console.log("Age:", ageInput);
console.log("Attending with an adult:", isWithAdult);

// Rule 1: Require a whole-number age and valid adult answer.
const validAge = ageInput !== null && ageInput.trim() !== "" && Number.isInteger(age) && age >= 0;
const validAdultAnswer = adultAnswer === "yes" || adultAnswer === "no";
const results = [
    `Username: ${username || "No answer"}`,
    `Age: ${ageInput === null ? "No answer" : ageInput}`,
    `Attending with an adult: ${isWithAdult}`
];
let canAccessWebsite = false;

if (validAge !== true || validAdultAnswer !== true) {
    results.push("Please enter a valid age and yes/no adult answer.");
} else {
    // Rule 2: Require visitors under 18 to be accompanied by an adult.
    canAccessWebsite = age >= 18 || isWithAdult === true;

    // Rule 3: Report whether the user meets the website's access requirement.
    if (canAccessWebsite === true) {
        results.push("You are accepted into the website.");
    } else {
        results.push("You must be 18 or older or visit with an adult to access this website.");
    }
}

// Display the greeting without replacing the existing HTML page content.
const greeting = document.createElement("h1");
greeting.textContent = `Hello, ${username || "there"}!`;
document.body.prepend(greeting);

// Print every result in the console and add it to the existing HTML page.
const resultsSection = document.createElement("section");
const resultsHeading = document.createElement("h2");
resultsHeading.textContent = "Website Eligibility Results";
resultsSection.append(resultsHeading);

results.forEach((result) => {
    console.log(result);
    const resultLine = document.createElement("p");
    resultLine.textContent = result;
    resultsSection.append(resultLine);
});

document.body.append(resultsSection);
