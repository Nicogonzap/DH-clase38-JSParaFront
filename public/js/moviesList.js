window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    //Codigo viejo reemplazado por líneas 11 a 15
    //let modo = confirm('Desea modo oscuro');
    /*if(modo){
    body.style.backgroundColor = '#7f7f7f'
    body.classList.add('fondoMoviesList');
    }*/
    let logoDH = document.querySelector('figure img');
    logoDH.addEventListener('mouseover',function(){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })

    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}