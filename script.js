const noBtn = document.querySelector('.no__btn');
const responseContainer = document.querySelector('.response-container');
const responseContainer_yes = document.querySelector('.response-container-2');

noBtn.addEventListener('mouseover', () => {
noBtn.style.animation = 'move 0.5s infinite alternate';
});

noBtn.addEventListener('mouseleave', () => {
noBtn.style.animation = 'none';
});

function showResponse() {
   responseContainer.style.display = 'block';
   setTimeout(() => {
       responseContainer.style.display = 'none'; 
   }, 2000);
}

noBtn.addEventListener('click', () => {
   showResponse(); 
});

const agreeBtn = document.querySelector('.agree__btn');
   const container = document.querySelector('.btn__container');
   function moveButton() {
       const containerWidth = container.clientWidth;
       const containerHeight = container.clientHeight;

       const btnWidth = agreeBtn.offsetWidth;
       const btnHeight = agreeBtn.offsetHeight;

       const randomX = Math.random() * (containerWidth - btnWidth);
       const randomY = Math.random() * (containerHeight - btnHeight);

       agreeBtn.style.left = `${randomX}px`;
       agreeBtn.style.top = `${randomY}px`;
   }

   agreeBtn.addEventListener('mouseover', moveButton);

agreeBtn.addEventListener('click', () => {
   showResponse(); 
});
