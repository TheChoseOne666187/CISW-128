// Ask for a username and the three values used to decide movie eligibility.
const usernameInput = prompt("Enter your username:");
const username = usernameInput === null ? "" : usernameInput.trim();
const ageInput = prompt("How old are you?");
const age = Number(ageInput);
const ratingInput = prompt("What is the movie rating? Enter G, PG, PG-13, or R.");
const rating = ratingInput === null ? "" : ratingInput.trim().toUpperCase();
const adultInput = prompt("Are you attending with an adult? Enter yes or no.");
const adultAnswer = adultInput === null ? "" : adultInput.trim().toLowerCase();
const isWithAdult = adultAnswer === "yes";

// Print all collected values and the converted adult answer to the console.
console.log("Username:", username);
console.log("Age:", ageInput);
console.log("Movie rating:", rating);
console.log("Attending with an adult:", isWithAdult);

// Rule 1: Require a whole-number age and valid movie rating and adult answer.
const validAge = ageInput !== null && ageInput.trim() !== "" && Number.isInteger(age) && age >= 0;
const validRating = ["G", "PG", "PG-13", "R"].includes(rating);
const validAdultAnswer = adultAnswer === "yes" || adultAnswer === "no";
const results = [
    `Username: ${username || "No answer"}`,
    `Age: ${ageInput === null ? "No answer" : ageInput}`,
    `Movie rating: ${rating || "No answer"}`,
    `Attending with an adult: ${isWithAdult}`
];

if (validAge !== true || validRating !== true || validAdultAnswer !== true) {
    results.push("Please enter a valid age, movie rating, and yes/no adult answer.");
} else {
    let canWatch = false;

    // Rule 2: Apply the age guidance for the selected movie rating.
    if (rating === "G") {
        canWatch = true;
    } else if (rating === "PG") {
        if (age >= 10 || isWithAdult === true) {
            canWatch = true;
        }
    } else if (rating === "PG-13") {
        if (age >= 13) {
            canWatch = true;
        } else if (isWithAdult === true) {
            canWatch = true;
        }
    } else if (rating === "R") {
        if (age >= 17) {
            canWatch = true;
        } else if (isWithAdult === true) {
            canWatch = true;
        }
    }

    // Rule 3: Report whether the user meets the movie's age guidance.
    if (canWatch === true) {
        results.push("You can watch this movie.");
    } else {
        results.push("You do not meet this movie's age guidance.");
    }
}

// Display the greeting without replacing the existing HTML page content.
const greeting = document.createElement("h1");
greeting.textContent = `Hello, ${username || "there"}!`;
document.body.prepend(greeting);

// Print every result in the console and add it to the existing HTML page.
const resultsSection = document.createElement("section");
const resultsHeading = document.createElement("h2");
resultsHeading.textContent = "Movie Eligibility Results";
resultsSection.append(resultsHeading);

results.forEach((result) => {
    console.log(result);
    const resultLine = document.createElement("p");
    resultLine.textContent = result;
    resultsSection.append(resultLine);
});

document.body.append(resultsSection);
