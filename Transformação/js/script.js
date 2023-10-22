var border = document.getElementById('border');

// Cria o elemento
var elem = document.createElement('div');
elem.id = 'myElement';

// Estiliza o elemento
elem.style.width = '250px';
elem.style.height = '250px';
elem.style.backgroundColor = 'red';
elem.style.transition = 'all 2s';

// Adiciona o elemento à borda
border.appendChild(elem);

function transformElement() {
    // Translação
    var translateX = Math.random() * 100 - 50;
    var translateY = Math.random() * 100 - 50;

    // Rotação
    var rotateAngle = Math.random() * 360;

    // Escala
    var scaleX = Math.random() * 2;
    var scaleY = Math.random() * 2;

    // Recorte
    var clipPath = Math.random() > 0.5 ? 'circle(50% at 50% 50%)' : 'polygon(50% 0%, 0% 100%, 100% 100%)';

    elem.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) rotate(' + rotateAngle + 'deg) scale(' + scaleX + ', ' + scaleY + ')';
    elem.style.clipPath = clipPath;
}
