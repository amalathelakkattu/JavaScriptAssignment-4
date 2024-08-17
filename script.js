$(document).ready(function() {
    $('#accountForm').on('submit', function(e) {
        e.preventDefault();

        $('.error').text('');

        let isValid = true;

        // Name validation
        let name = $('#name').val();
        if (name.length < 3 || name.length > 50) {
            $('#nameError').text('Name must be between 3 and 50 characters.');
            isValid = false;
        }

        // Email validation
        let email = $('#email').val();
        if (email === '') {
            $('#emailError').text('Email is required.');
            isValid = false;
        }

        // Phone validation
        let phone = $('#phone').val();
        if (phone.length < 10 || phone.length > 14) {
            $('#phoneError').text('Phone number must be between 10 and 14 digits.');
            isValid = false;
        }

        // Age validation
        let age = $('#age').val();
        if (age < 18 || age > 120) {
            $('#ageError').text('Age must be between 18 and 120.');
            isValid = false;
        }

        // Gender validation
        let gender = $('#gender').val();
        if (gender.length < 4 || gender.length > 15) {
            $('#genderError').text('Gender must be between 4 and 15 characters.');
            isValid = false;
        }

        // Address validation
        let address = $('#address').val();
        if (address.length > 50) {
            $('#addressError').text('Address cannot be more than 50 characters.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully!');
        }
    });
});