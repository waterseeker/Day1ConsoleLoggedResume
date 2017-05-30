function displayPosition (companyName, jobTitle, jobDescription) {
    console.log("* " + jobTitle + " " + "at " + companyName + " " + " - " + jobDescription + ".");
};

function displaySkill (skillName, isCool) {
    if (isCool) {
        console.log("* Check It: " + skillName);
    } else {
    console.log("* " + skillName);
    };
}

function displayInterest (interest) {
    console.log("* " + interest);
};

console.log("Wayne Burris".toUpperCase());
console.log("Career: Software Developer");
console.log("Description: I am an aspiring software developer");
console.log("My Interests:")
displayInterest("Coding");
displayInterest("Blues");
displayInterest("Cooking");
displayInterest("Gaming");
console.log("My Previous Experience:");
displayPosition ("Covalence", "Teachers Assistant", "Assist students that are learning to code");
displayPosition ("SHIPT", "Shopper", "Buy and deliver groceries to SHIPT customers");
displayPosition ("Publix", "Dairy GRS", "Kept the dairy running smoothly");
console.log("My Skills:");
displaySkill ("Woodworking", true);
displaySkill ("Cooking", true);
displaySkill ("JS", true);
displaySkill ("GoogleFu", true);
displaySkill ("Networking", false);
displaySkill ("Coding", true);
displaySkill ("Music", true);