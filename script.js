var web1 = document.getElementsByClassName('service')[0];
var web2 = document.getElementsByClassName('service')[1];


var textElement1 = web1.getElementsByTagName('p')[0];
var textElement2 = web2.getElementsByTagName('p')[0];

function enterMouse1() {
    textElement1.innerText = 'Uma landing page converte visitantes em clientes rapidamente, enquanto um site profissional transmite credibilidade e fortalece sua presença online. Juntos, eles maximizam suas vendas!';
    textElement1.style.color = 'black';
}

function outMouse1() {
    textElement1.innerText = 'Landing Page | Sites';
    textElement1.style.color = 'black';
}

function enterMouse2() {
    textElement2.innerText = 'Atraia o público certo para o seu negócio com anúncios otimizados. Mais visitantes qualificados = mais vendas!';
    textElement2.style.color = 'black';
}

function outMouse2() {
    textElement2.innerText = 'Tráfego Pago';
    textElement2.style.color = 'black';
}