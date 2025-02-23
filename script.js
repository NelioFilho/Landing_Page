let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 2500)

function nextImage(){
    count ++;
    if (count>4) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

const radios = document.querySelectorAll('input[name="radio-btn"]');
const autoBtns = document.querySelectorAll('.navigation-auto div');

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        autoBtns.forEach(btn => btn.style.backgroundColor = "transparent"); // Resetar todos
        autoBtns[index].style.backgroundColor = "red"; // Aplicar cor ao botão correspondente
    });
});