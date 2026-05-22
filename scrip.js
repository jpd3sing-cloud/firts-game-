
const card = document.querySelectorAll(".card");

card.forEach((tarjeta) => {
  tarjeta.addEventListener('click', () => {
    
    if (tarjeta.classList.contains('volteada')) {
      return; 
    }

    tarjeta.classList.add('volteada');

    const tarjetasVolteadas = document.querySelectorAll('.card.volteada');

    if (tarjetasVolteadas.length === 2) {
      
      const primeraTarjeta = tarjetasVolteadas[0];
      const segundaTarjeta = tarjetasVolteadas[1];

      if (primeraTarjeta.id === segundaTarjeta.id) {
        console.log('Los IDs coinciden. Encontraste un par.');
        
        primeraTarjeta.classList.replace('volteada', 'emparejada');
        segundaTarjeta.classList.replace('volteada', 'emparejada');
        
      } else {
        console.log('Los IDs no coinciden. Se vuelven a ocultar.');
        
        setTimeout(() => {
          primeraTarjeta.classList.remove('volteada');
          segundaTarjeta.classList.remove('volteada');
        }, 1000);
      }
    }
  });
});