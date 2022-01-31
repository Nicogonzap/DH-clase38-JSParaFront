window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    //Declaramos el easter egg como 0 para ir incrementandolo luego
    let estadoSecreto = 0;
    let palabraSecreta = ['s','e','c','r','e','t','o'];

    titulo.addEventListener('mouseover',function(){
        this.style.color = 'teal';
    })
    titulo.addEventListener('mouseout',function(){
        this.style.color = 'black';
    })
    
    let tituloPelicula = document.querySelector('#titulo');

    tituloPelicula.addEventListener('keypress',function(e){
        //e captura el evento que estamos escuchando, en este caso 'keypress'
        //ahora con el valor de e podemos entender qué tecla es la que estamos apretando por ejemplo
        let teclaActual = e.key;
        if(teclaActual == palabraSecreta[estadoSecreto] && this.value.length < palabraSecreta.length){
            //this = elemento de HTML sobre el que estamos escuchando
            //this.value = valor dentro del elemento HTML (en este caso, texto dentro del campo del formulario)
            console.log(estadoSecreto);
            if (estadoSecreto == 6) {
                estadoSecreto = 0;
                alert("SECRETO MAGICO");
            } else {
            estadoSecreto += 1;
            }
        } else {
            estadoSecreto = 0;
        }
        
    })

}