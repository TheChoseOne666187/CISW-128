// Ask for the visitor's email and whether they are a member.
const usernameInput = prompt("Enter your email address:");
const username = usernameInput === null ? "" : usernameInput.trim();
const MemberInput = prompt("Are you a member? Enter yes or no.");
const memberAnswer = MemberInput === null ? "" : MemberInput.trim().toLowerCase();
const isMember = memberAnswer === "yes";

// Print the collected answers in a clear format in the browser console.
console.log("Visitor Information");
console.log("-------------------");
console.log(`Username: ${username || "No answer"}`);
console.log(`Member: ${memberAnswer || "No answer"}`);

// Check that the member answer is yes or no.
const validMemberAnswer = memberAnswer === "yes" || memberAnswer === "no";
const results = [];
let canAccessWebsite = false;

// This conditional rejects invalid responses before checking the visitor's eligibility.
if (validMemberAnswer !== true) {
    results.push("Please enter a member answer (yes or no).");
} else {
    const eligibilityOptions = [{ meetsRequirement: isMember, description: "The visitor is a member." }];

    // This for loop checks each eligibility option and reports each result.
    for (let index = 0; index < eligibilityOptions.length; index++) {
        const option = eligibilityOptions[index];

        // This conditional marks access as allowed when the requirement is met.
        if (option.meetsRequirement) {
            canAccessWebsite = true;
            results.push(`Requirement met: ${option.description}`);
        } else {
            results.push(`Requirement not met: ${option.description}`);
        }
    }

    // This conditional reports the final eligibility decision after the option is checked.
    if (canAccessWebsite) {
        results.push("You are accepted into the website.");
    } else {
        results.push("You must be a member to access this website.");
    }
}

// Add a greeting to the existing page without replacing its original content.
const greeting = document.createElement("h1");
greeting.textContent = `Hello, ${username || "there"}!`;
document.body.prepend(greeting);

// This while loop prints each result to the console and adds it to the page.
const resultsSection = document.createElement("section");
const resultsHeading = document.createElement("h2");
resultsHeading.textContent = "Website Eligibility Results";
resultsSection.append(resultsHeading);

let resultIndex = 0;
while (resultIndex < results.length) {
    const result = results[resultIndex];
    console.log(`Result ${resultIndex + 1}: ${result}`);

    const resultLine = document.createElement("p");
    resultLine.textContent = result;
    resultsSection.append(resultLine);
    resultIndex++;
}

document.body.append(resultsSection);