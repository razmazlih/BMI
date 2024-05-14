function getWarning(titleID, warning) {
    let notNumber;
    if (titleID.value % 1 != 0 || titleID.value.length == 0) {
        notNumber = true;
        warning.removeAttribute("class", "hidden");
        warning.setAttribute("class", "warning");
    } else {
        notNumber = false;
        warning.removeAttribute("class", "warning");
        warning.setAttribute("class", "hidden");
    }

    return notNumber;
}

function hideNot() {
    let bmi = weight.value / (height.value /100 * height.value / 100);
    display.value = bmi;
    display.type = "text";
    send.removeAttribute("class", "button");
    send.setAttribute("class", "hidden");
    weight.type = "hidden";
    height.type = "hidden";
    reset.removeAttribute("class", "hidden");
    reset.setAttribute("class", "button");
}

function calculate() {
    let notNumberOne = getWarning(weight, warningOne);
    let notNumberTwo = getWarning(height, warningTwo);
    if (notNumberOne || notNumberTwo) {
        return;
    }
    hideNot();
}

function resetAll() {
    display.type = "hidden";
    send.removeAttribute("class", "hidden");
    send.setAttribute("class", "button");
    weight.type = "text";
    height.type = "text";
    reset.removeAttribute("class", "button");
    reset.setAttribute("class", "hidden");
    weight.value = "";
    height.value = "";
}