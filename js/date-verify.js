const confirm = document.getElementById('confirm');
limitDate();
function limitDate(){
    const actualDate = new Date();
    const ISOactualDate = actualDate.toISOString().split('T')[0];
    document.getElementById('birthday').setAttribute('max', ISOactualDate);
}
function verifyAge(){
    if(calculateAge() < 18){
        alert('Debes ser mayor de edad para registrarte.');
        event.preventDefault();
    }
}
function calculateAge(){
    const birthday = document.getElementById('birthday').value;
    const birthdayDate = new Date(birthday);

    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const actualMonth = actualDate.getMonth() + 1;
    const actualDay = actualDate.getDate();

    const birthdayYear = birthdayDate.getFullYear();
    const birthdayMonth = birthdayDate.getMonth() + 1;
    const birthdayDay = birthdayDate.getDate();

    let age = actualYear - birthdayYear;

    if (actualMonth < birthdayMonth || (actualMonth === birthdayMonth && actualDay < birthdayDay)) {
        age--;
    }
    return age;
}
confirm.addEventListener('click', verifyAge);

