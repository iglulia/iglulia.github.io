let uovo = document.getElementById('uovo');
let coming_soon = document.getElementById('coming');
coming_soon.onmouseleave = () => {
    coming_soon.classList.add('coming_soon')
    uovo.classList.remove('uovoaperto')
}
uovo.onclick = () => {
    coming_soon.classList.remove('coming_soon')
    uovo.classList.add('uovoaperto')
}