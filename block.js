const editor = document.querySelector('.editor');

window.addEventListener('load', () => {
const savedContent = localStorage.getItem('content');
if(savedContent) {
editor.innerHTML = savedContent;
}
});

editor.addEventListener('input', () => {
const content = editor.innerHTML;
localStorage.setItem('content', content);
});
