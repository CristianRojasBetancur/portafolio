const iconoMenu = document.querySelector('#iconoBurger'), navMenu = document.querySelector('#navMenu');

iconoMenu.addEventListener('click', (e) => {
    navMenu.classList.toggle('active');
})

// Para esconder el navMenu cuando damos click en un enlace

const link1 = document.querySelector('#link1');

link1.addEventListener('click', (e)=>{
    navMenu.classList.toggle('active');
})

const link2 = document.querySelector('#link2');

link2.addEventListener('click', (e)=>{
    navMenu.classList.toggle('active');
})

const link3 = document.querySelector('#link3');

link3.addEventListener('click', (e)=>{
    navMenu.classList.toggle('active');
})

const link4 = document.querySelector('#link4');

link4.addEventListener('click', (e)=>{
    navMenu.classList.toggle('active');
})