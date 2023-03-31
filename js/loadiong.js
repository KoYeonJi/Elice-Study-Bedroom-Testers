const loader = document.getElementById('loadingPage');
const htmlTag = document.querySelector('html')

htmlTag.style.overflow = 'hidden';

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.opacity = 0;
    htmlTag.style.overflow = 'auto';
    setTimeout(() => {
      loader.style.display = 'none'
    },500)
  },2000)
});



