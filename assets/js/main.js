document.addEventListener("DOMContentLoaded", function () {

    // Front Card Variables
    let frontNum = document.getElementById("num");
    let frontName = document.getElementById("name");
    let frontMonth = document.getElementById("month");
    let frontYear = document.getElementById("year");

    // Back Card Variables
    let backCVC = document.getElementById("cvc");

    // Input Fields Variables
    let cardName = document.getElementById("cardholder_name");
    let cardNumber = document.getElementById("card_number");
    let expMonth = document.getElementById("exp_month");
    let expYear = document.getElementById("exp_year");
    let cardCvc = document.getElementById("card_cvc");

    // Submit Button Variable
    const submit = document.getElementById("submit_btn");

    // Empty Message variable
    let errorMessage = document.querySelector(".error");
    let nameError = document.getElementById("name_error");
    let numberError = document.getElementById("number_error");
    let monthError = document.getElementById("month_error");
    let yearError = document.getElementById("year_error");
    let cvcError = document.getElementById("cvc_error");

    // FORM Variable
    const form = document.getElementById("main_form");



    // -------------------------------- Live Event Listeners --------------------------------- //


    // =========- Card Name -========= //
    cardName.addEventListener("input", function () {

        // Uppercase
        cardName.value = cardName.value.toUpperCase();

        // No more than 18 characters
        if (cardName.value.length >= 18) {
            cardName.value = cardName.value.slice(0, 18);
            frontName.innerHTML = cardName.value;
        }

        // Only letters
        cardName.value = cardName.value.replace(/[^a-zA-Z ]/g, '');

        // Text Shadow
        frontName.style.textShadow = "0px 4px 3px rgba(0,0,0,0.4)", "0px 8px 13px rgba(0,0,0,0.1)", "0px 18px 23px rgba(0,0,0,0.1)";

        // Letter Spacing
        frontName.style.letterSpacing = "1px";

        // Text Color
        frontName.style.color = "white";

        // Text bold
        frontName.style.fontWeight = "bold";

        // Update the front name
        frontName.innerHTML = cardName.value;

        // Live Validate the name field 
        if (cardName.value.length < 3 || cardName.value.length > 18) {
            nameError.innerHTML = "*Name must be between 3 and 18 characters";
            cardName.style.border = "2px solid red";
        }
        else {
            nameError.innerHTML = "";
            cardName.style.border = "2px solid green";
        };
    });


    // =========- Card Number -========= //
    cardNumber.addEventListener("input", function () {

        // Remove all non-digit characters
        let nonDigitNumber = cardNumber.value.replace(/\D/g, '');
        cardNumber.value = nonDigitNumber;
        frontNum.innerHTML = nonDigitNumber;

        // Format the input by adding a space every four digits
        let formattedNumber = nonDigitNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
        frontNum.innerHTML = formattedNumber;

        // Trim the formatted value to ensure no trailing spaces
        frontNum.innerHTML = formattedNumber.trim();

        // No more than 16 digits
        if (nonDigitNumber.length > 16) {
            cardNumber.value = nonDigitNumber.slice(0, 16);
            frontNum.innerHTML = cardNumber.value.replace(/(\d{4})(?=\d)/g, '$1 ');
        };

        // Text Shadow
        frontNum.style.textShadow = "0px 4px 3px rgba(0,0,0,0.4)", "0px 8px 13px rgba(0,0,0,0.1)", "0px 18px 23px rgba(0,0,0,0.1)";

        // Letter Spacing
        frontNum.style.letterSpacing = "2px";

        // Text Color
        frontNum.style.color = "white";

        // Live Validate the number field
        if (cardNumber.value.length < 16 || cardNumber.value.length > 16) {
            numberError.innerHTML = "*Card number must be 16 digits";
            cardNumber.style.border = "2px solid red";
        }
        else {
            numberError.innerHTML = "";
            cardNumber.style.border = "2px solid green";
        };
    });


    // =========- Expiration Month -========= //
    expMonth.addEventListener("input", function () {

        // Remove all non-digit characters
        let nonDigitMonth = expMonth.value.replace(/\D/g, '')
        expMonth.value = nonDigitMonth;
        frontMonth.innerHTML = nonDigitMonth;

        // No more than number 12
        if (expMonth.value > 12) {
            expMonth.value = 12;
            frontMonth.innerHTML = expMonth.value;
        };

        // Text Shadow
        frontMonth.style.textShadow = "0px 4px 3px rgba(0,0,0,0.4)", "0px 8px 13px rgba(0,0,0,0.1)", "0px 18px 23px rgba(0,0,0,0.1)";
        // Text Color
        frontMonth.style.color = "white";
        // Text bold
        frontMonth.style.fontWeight = "bold";

        // Live Validate the month field
        if (expMonth.value < 1 || expMonth.value > 12) {
            monthError.innerHTML = "*Expiration month must be between 1 and 12";
            expMonth.style.border = "2px solid red";
        }
        else {
            monthError.innerHTML = "";
            expMonth.style.border = "2px solid green";
        };
    });

    // =========- Expiration Year -========= //
    expYear.addEventListener("input", function () {

        // Remove all non-digit characters
        let nonDigitYear = expYear.value.replace(/\D/g, '');
        expYear.value = nonDigitYear;
        frontYear.innerHTML = nonDigitYear;

        // No more than 4 digits
        if (expYear.value.length > 4) {
            expYear.value = expYear.value.slice(0, 4);
            frontYear.innerHTML = expYear.value;
        };

        // No more than 2050
        if (expYear.value > 2050) {
            expYear.value = 2050;
            frontYear.innerHTML = expYear.value;
        };

        // Text Shadow
        frontYear.style.textShadow = "0px 4px 3px rgba(0,0,0,0.4)", "0px 8px 13px rgba(0,0,0,0.1)", "0px 18px 23px rgba(0,0,0,0.1)";
        // Text Color
        frontYear.style.color = "white";
        // Text bold
        frontYear.style.fontWeight = "bold";

        // Live Validate the year field
        if (expYear.value < 2023 || expYear.value > 2050) {
            yearError.innerHTML = "*Expiration year must be between 2023 and 2050";
            expYear.style.border = "2px solid red";
        }
        else {
            yearError.innerHTML = "";
            expYear.style.border = "2px solid green";
        }
    });

    // =========- CVC -======== //
    cardCvc.addEventListener("input", function () {
        // Remove all non-digit characters
        let nonDigitCvc = cardCvc.value.replace(/\D/g, '');
        cardCvc.value = nonDigitCvc;
        backCVC.innerHTML = nonDigitCvc;
        // No more than 3 digits

        if (cardCvc.value.length > 3) {
            cardCvc.value = cardCvc.value.slice(0, 3);
            backCVC.innerHTML = cardCvc.value;
        }
        // Text Shadow
        backCVC.style.textShadow = "0px 4px 3px rgba(0,0,0,0.4)", "0px 8px 13px rgba(0,0,0,0.1)", "0px 18px 23px rgba(0,0,0,0.1)";
        // Letter Spacing
        backCVC.style.letterSpacing = "2px";
        // Text Color
        backCVC.style.color = "white";

        // Live Validate the CVC field
        if (cardCvc.value.length < 3 || cardCvc.value.length > 3) {
            cvcError.innerHTML = "*CVC must be 3 digits";
            cardCvc.style.border = "2px solid red";
            e.preventDefault();
        }
        else {
            cvcError.innerHTML = "";
            cardCvc.style.border = "2px solid green";
        };
    });


    // -------------------------------- Form Submit Event Listeners -------------------------------- //
    submit.addEventListener("click", function (e) {

        // Get the form values
        let name = cardName.value;
        let number = cardNumber.value;
        let month = expMonth.value;
        let year = expYear.value;
        let cvc = cardCvc.value;

        // ====== Validate the name field ====== //
        if (name === "") {
            nameError.innerHTML = "*Please enter your name";
            cardName.style.border = "2px solid red";
            e.preventDefault();
        }
        else if (name.length < 3 || name.length > 18) {
            nameError.innerHTML = "*Name must be between 3 and 18 characters";
            cardName.style.border = "2px solid red";
            e.preventDefault();
        }
        else {
            nameError.innerHTML = "";
            cardName.style.border = "2px solid green";
        };

        // ====== Validate the number field ====== //
        if (number === "") {
            numberError.innerHTML = "*Please enter your card number";
            cardNumber.style.border = "2px solid red";
            e.preventDefault();
        }
        else if (number.length < 16 || number.length > 16) {
            numberError.innerHTML = "*Card number must be 16 digits";
            cardNumber.style.border = "2px solid red";
            e.preventDefault();
        }
        else {
            numberError.innerHTML = "";
            cardNumber.style.border = "2px solid green";
        };

        // ====== Validate the month field ====== //
        if (month === "") {
            monthError.innerHTML = "*Please enter your expiration month";
            expMonth.style.border = "2px solid red";
            e.preventDefault();
        }
        else if (month < 1 || month > 12) {
            monthError.innerHTML = "*Expiration month must be between 1 and 12";
            expMonth.style.border = "2px solid red";
            e.preventDefault();
        }
        else {
            monthError.innerHTML = "";
            expMonth.style.border = "2px solid green";
        };

        // ====== Validate the year field ====== //
        if (year === "") {
            yearError.innerHTML = "*Please enter your expiration year";
            expYear.style.border = "2px solid red";
            e.preventDefault();
        }
        else if (year < 2023 || year > 2050) {
            yearError.innerHTML = "*Expiration year must be between 2023 and 2050";
            expYear.style.border = "2px solid red";
            e.preventDefault();
        }
        else {
            yearError.innerHTML = "";
            expYear.style.border = "2px solid green";
        }


        // ====== Validate the cvc field ====== //
        if (cvc === "") {
            cvcError.innerHTML = "*Please enter your CVC";
            cardCvc.style.border = "2px solid red";
            e.preventDefault();
        }
        else if (cvc.length < 3 || cvc.length > 3) {
            cvcError.innerHTML = "*CVC must be 3 digits";
            cardCvc.style.border = "2px solid red";
            e.preventDefault();
        }
        else {
            cvcError.innerHTML = "";
            cardCvc.style.border = "2px solid green";
        };
    });

    // ========= Success ========= //
    form.addEventListener("submit", function success(e) {
        e.preventDefault();
        const success = document.querySelector(".success");
        this.style.display = "none";
        success.style.display = "flex";

        // Start the Lottie animation
        const lottiePlayer = document.querySelector('dotlottie-player')
        if (lottiePlayer) {
            lottiePlayer.play()
        }


    });


});