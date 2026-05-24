const letrra = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const container = document.querySelector('#gameCards');
const numCards = document.querySelector('#numCards');
const star = document.querySelector(".star");

star.addEventListener('click', () => {            
    const group_a = letrra.toSorted(() => Math.random() - 0.5);
    const letras = [];
    const nivel = Number(numCards.value);
    container.innerHTML = '';
    
    for (let i = 0; i < nivel; i++) {
        const newCard1 = document.createElement('div');
        letras.push(group_a[i]);
      
        newCard1.classList.add('card');          
        newCard1.textContent = group_a[i]; 
        newCard1.dataset.id = group_a[i]; 
        container.appendChild(newCard1);
    }

    const group_b = letras.toSorted(() => Math.random() - 0.5);
    
    for (let i = 0; i < nivel; i++) {
        const newCard2 = document.createElement('div');

        newCard2.classList.add('card');          
        newCard2.textContent = group_b[i]; 
        newCard2.dataset.id = group_b[i]; 
        container.appendChild(newCard2);
    }

    asignarLogica();
});


function asignarLogica() {
  const todasLasCartas = document.querySelectorAll(".card");

  todasLasCartas.forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
      
      if (tarjeta.classList.contains('volteada') || tarjeta.classList.contains('emparejada')) {
        return; 
      }

      tarjeta.classList.add('volteada');

      const tarjetasVolteadas = document.querySelectorAll('.card.volteada');

      if (tarjetasVolteadas.length === 2) {

        const primeraTarjeta = tarjetasVolteadas[0];
        const segundaTarjeta = tarjetasVolteadas[1];

        if (primeraTarjeta.dataset.id === segundaTarjeta.dataset.id) {
          //console.log('Los IDs coinciden. Encontraste un par.');
          
          primeraTarjeta.classList.replace('volteada', 'emparejada');
          segundaTarjeta.classList.replace('volteada', 'emparejada');
        } else {
          //console.log('Los IDs no coinciden. Se vuelven a ocultar.');
          
          setTimeout(() => {
            primeraTarjeta.classList.remove('volteada');
            segundaTarjeta.classList.remove('volteada');
          }, 1000);
        }
      }
    });
  });
}
