const q = document.querySelectorAll('.main__div-section');
const a = document.querySelectorAll('.main__div2--section');
const arr = document.querySelectorAll('.main__span--section');

for(let i = 0; i < q.length; i++){
    q[i].addEventListener('click', () => {
         a[i].classList.toggle('main__div2--section-opened');
         arr[i].classList.toggle('main__span--section-opened')
    });
}