document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.querySelector('#yesBtn');
    const noBtn = document.querySelector('#noBtn');
    let moveCount = 0;
    const maxMoves = 10;

    noBtn.addEventListener('mouseenter', function () {
        if (moveCount < maxMoves) {
            const container = document.querySelector('.contenedor');
            const containerRect = container.getBoundingClientRect();
            const btnRect = noBtn.getBoundingClientRect();

            // Calcula posiciones máximas para que el botón no se salga del contenedor
            const maxLeft = containerRect.width - btnRect.width;
            const maxTop = containerRect.height - btnRect.height;

            // Genera posiciones aleatorias
            const left = Math.random() * maxLeft;
            const top = Math.random() * maxTop;

            noBtn.style.position = 'absolute';
            noBtn.style.left = `${left}px`;
            noBtn.style.top = `${top}px`;

            moveCount++;
        }
    });

    yesBtn.addEventListener('click', function () {
        alert('En serio… yo también, de verdad, te adoro muchísimo. Me gustas más de lo que puedo explicar ♡');
    });

    noBtn.addEventListener('click', function () {
        alert('Aea chistosa🤡🔫♡');
    });
});