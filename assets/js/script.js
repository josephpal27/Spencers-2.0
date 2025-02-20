// Functionality for auto add / in DOB input
document.addEventListener("DOMContentLoaded", function() {
    const dobInput = document.getElementById("dob");

    dobInput.addEventListener("input", function() {
        let value = dobInput.value.replace(/\D/g, ''); // Remove all non-digit characters
        if (value.length >= 2 && value.length <= 4) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        } else if (value.length > 4) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
        }
        dobInput.value = value;
    });

    dobInput.addEventListener("keydown", function(event) {
        if (event.key === "Backspace" && (dobInput.value.endsWith('/') || dobInput.value.length === 3 || dobInput.value.length === 6)) {
            dobInput.value = dobInput.value.slice(0, -1);
        }
    });
});