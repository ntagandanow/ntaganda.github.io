document.getElementById('admission-form').addEventListener('submit', function (e) {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const ageInput = document.getElementById('age');
    const phoneNumberInput = document.getElementById('phone-number');
    const nationalityInput = document.getElementById('nationality');
    const birthdateInput = document.getElementById('birthdate');
    const placeOfBirthInput = document.getElementById('place-of-birth');
    const facultyInput = document.getElementById('faculty');
    const religionInput = document.getElementById('religion');
    const genderInput = document.getElementById('gender');

    if (
        firstNameInput.value.trim() === '' ||
        lastNameInput.value.trim() === '' ||
        isNaN(parseInt(ageInput.value)) ||
        phoneNumberInput.validity.patternMismatch ||
        nationalityInput.value.trim() === '' ||
        birthdateInput.value.trim() === '' ||
        placeOfBirthInput.value.trim() === '' ||
        facultyInput.value.trim() === '' ||
        religionInput.value.trim() === '' ||
        genderInput.value === ''
    ) {
        e.preventDefault();
        alert('Please fill out all admission fields correctly.');
    }
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    const loginUsernameInput = document.getElementById('login-username');
    const loginPasswordInput = document.getElementById('login-password');

    if (loginUsernameInput.value.trim() === '' || loginPasswordInput.value.trim() === '') {
        e.preventDefault();
        alert('Please enter both username and password to log in.');
    }
});
