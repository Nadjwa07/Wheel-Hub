document.addEventListener("DOMContentLoaded", () => {
    function resetError() {
        document.getElementById("error-name").innerHTML = "";
        document.getElementById("error-email").innerHTML = "";
        document.getElementById("error-password").innerHTML = "";
        document.getElementById("error-conf").innerHTML = "";
        document.getElementById("error-dob").innerHTML = "";
        document.getElementById("error-terms").innerHTML = "";
    }

    const regist = document.getElementById("regist");
    regist.addEventListener("submit", (e) => submitForm(e));

    function submitForm(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let conf = document.getElementById("conf").value;
        let dobString = document.getElementById("dob").value;
        let dob = new Date(dobString);
        let currentDate = new Date();
        let termsChecked = document.getElementById("terms").checked;

        resetError();

        if (name === "") {
            document.getElementById("error-name").innerHTML = "Username must be filled";
            return;
        } else if (name.length < 2 || name.length > 100) {
            document.getElementById("error-name").innerHTML = "Username must have 2-100 characters";
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            document.getElementById("error-email").innerHTML = "Email must end with @gmail.com";
            return;
        }

        if (password === "") {
            document.getElementById("error-password").innerHTML = "Password must be filled";
            return;
        }

        if (conf === "") {
            document.getElementById("error-conf").innerHTML = "Confirmation password must be filled";
            return;
        } else if (conf !== password) {
            document.getElementById("error-conf").innerHTML = "Confirmation password must be same with password";
            return;
        }

        if (dobString === "") {
            document.getElementById("error-dob").innerHTML = "Date of Birth must be filled";
            return;
        } else if (dob > currentDate) {
            document.getElementById("error-dob").innerHTML = "Date of Birth cannot exceed today";
            return;
        }

        if (!termsChecked) {
            document.getElementById("error-terms").innerHTML = "You must agree to the terms and conditions";
            return;
        }

        window.location.href = "home.html";
    }
});