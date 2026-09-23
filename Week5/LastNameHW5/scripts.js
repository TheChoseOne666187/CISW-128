
// Passing
let passLeader = "Bo Nix";
let passPos = "QB";
let passYards = 419;

// Rushing
let rushLeader = "J.K. Dobbins";
let rushPos = "RB";
let rushYards = 72;

// Receiving
let recLeader = "Jaylen Waddle";
let recPos = "WR";
let recYards = 140;

// Defense - Tackles
let tackLeader = "Alex Singleton";
let tackPos = "LB";
let tackTotal = 25;

// Defense - Interceptions
let intLeader = "Brandon Jones";
let intPos = "S";
let intTotal = 1;

const total = passYards + rushYards + recYards + tackTotal + intTotal;
document.body.innerHTML += "<p>Result: " + total + " Yards</p>";

// Log all raw data to console for verification
console.log("--- BRONCOS 2026 LEADERS ---");
console.log(`Passing: ${passLeader} (${passPos}) - ${passYards} yds`);
console.log(`Rushing: ${rushLeader} (${rushPos}) - ${rushYards} yds`);
console.log(`Receiving: ${recLeader} (${recPos}) - ${recYards} yds`);
console.log(`Tackles: ${tackLeader} (${tackPos}) - ${tackTotal}`);
console.log(`Interceptions: ${intLeader} (${intPos}) - ${intTotal}`);

injectStat("Passing Yards", passLeader, passPos, passYards);
injectStat("Rushing Yards", rushLeader, rushPos, rushYards);
injectStat("Receiving Yards", recLeader, recPos, recYards);
injectStat("Total Tackles", tackLeader, tackPos, tackTotal);
injectStat("Interceptions", intLeader, intPos, intTotal);

function injectStat(category, player, position, stat) {
    const main = document.querySelector("main");
    if (!main) {
        throw new Error("Unable to render team leaders: the main element is missing.");
    }

    const statLine = document.createElement("div");
    statLine.className = "stat-line";

    const label = document.createElement("span");
    label.className = "stat-label";
    label.textContent = category;

    const value = document.createElement("span");
    value.className = "stat-value";
    value.textContent = stat;

    const playerDetails = document.createElement("span");
    playerDetails.className = "stat-player";
    playerDetails.textContent = `${player} (${position})`;

    value.append(playerDetails);
    statLine.append(label, value);
    main.append(statLine);
}
