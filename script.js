let msg = document.getElementById("msg");

function checkform() {
    let choice = document.getElementById("v").value;

    let messages = {
        "NA": "Please Select A Country!",
        "U": "Visa required for most applicants.",
        "C": "Visa required unless you have an eTA.",
        "I": "Visa required before travel.",
        "UK": "Visa depends on the duration of stay.",
        "AUS": "eVisa available for eligible travelers."
    };

    if (messages[choice]) {
        msg.textContent = messages[choice];
    }
    
    return false;
}

function validateform() {
    let name = document.getElementById("name").value.trim();
    let passport = document.getElementById("passport").value.trim();
    let nation = document.getElementById("v2").value;

    if (!name) {
        document.getElementById("n").textContent = "*All fields are required*";
        return false;
    }

    if (passport.length < 8 || passport.length > 10) {
        document.getElementById("pass").textContent = "*Invalid passport number*";
        return false;
    }

    if (nation === "NA") {
        document.getElementById("nat").textContent = "*Please Select A Country*";
        return false;
    }

    msg.textContent = "Form Submitted Successfully!!";
    return false;
}
