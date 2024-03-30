const confirmButton = document.getElementById('confirm');

confirmButton.addEventListener('click', confirmName);

const review_area = document.querySelectorAll('.espacio_reseña')[0];
function verifyName() {
    const review = review_area.value;

    if(review.length < 15 || review.length > 600 || !(/^[a-z]/.test(review))) {
        return false;
    }
    return true;
}
function confirmName() {
    if(!verifyName()){
        alert("El comentarío es demasiado corto, o demasiado largo.");
        event.preventDefault();
    }
}