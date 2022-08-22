//Variables
const marca = document.querySelector('#marca');
const years = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//Datos auto

const autoMovil = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}

//EventListeners

document.addEventListener( 'DOMContentLoaded', EventListeners );

function EventListeners() {

    ui.mostrarSelect();


    marca.addEventListener( 'change', ( e ) => {

        autoMovil.marca = e.target.value;

        filtrarAuto();

    } );

    years.addEventListener( 'change', e => {
        autoMovil.year = parseInt( e.target.value );

        filtrarAuto();
    } )

    minimo.addEventListener('change', e => {
        autoMovil.minimo= parseInt( e.target.value);

        filtrarAuto();
    })

    maximo.addEventListener('change', e => {

        autoMovil.maximo = parseInt( e.target.value );


        filtrarAuto();
    })

    puertas.addEventListener('change', e=> {

        autoMovil.puertas = parseInt( e.target.value );

        filtrarAuto();
    })

    transmision.addEventListener( 'change', e => {
        
        autoMovil.transmision = e.target.value;

        filtrarAuto();
    } )

    color.addEventListener( 'change', e => {
        
        autoMovil.color = e.target.value;

        filtrarAuto();
    })
}

//Classes


class UI {

    mostrarSelect() {
        //Muestra los ultimos 10 años desde el año actual
        const years = document.querySelector('#year');

        const max = new Date().getFullYear();

        const min = max - 10;
    

        for ( let i = max; i >= min; i--) {


            const option = document.createElement('option');

            option.value = i;
            option.textContent = i;
            years.appendChild( option );

        } 

    }

    mostrarResultados( resultado ) {

        this.limpiarHTML();
        
        const divResultados = document.querySelector('#resultado');

        resultado.forEach( auto => {
            const { marca, year, precio, puertas, transmision, color } = auto;

            const carroHTML = document.createElement('p');

            carroHTML.textContent = `Marca: ${marca} - Año: ${year} - Precio: $${precio} USD - Puertas: ${puertas} - Transmisión: ${transmision} - Color: ${color}`;

            divResultados.appendChild( carroHTML );
        })
    }

    limpiarHTML() {

        const resultado = document.querySelector('#resultado');

        while( resultado.firstElementChild ){

            resultado.removeChild( resultado.firstElementChild );
        }
    }

    noResultados () {
        this.limpiarHTML();
        const resultado = document.querySelector('#resultado');
        const parrafoNoResultados = document.createElement('p');
        parrafoNoResultados.classList.add('error');
        parrafoNoResultados.textContent = 'No se econtraron Resultados';
        resultado.appendChild( parrafoNoResultados );

        }
    
}

//Instancia de UI

const ui = new UI();




//Funciones 

function filtrarAuto() {
    
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision).filter( filtrarColor );
    if (resultado.length <= 0) {

        ui.noResultados();
        return;
    }

    ui.mostrarResultados( resultado );

    
} 


function filtrarMarca ( auto ) {
    const { marca } = autoMovil;

    if ( marca ){ 
        return auto.marca == marca;
    }

    return auto;
}

function filtrarYear( auto ){
    const { year } = autoMovil;

    if ( year ){

        return auto.year == year;
    }
    return auto;
}

function filtrarMinimo( auto ) {

    const { minimo } = autoMovil;

    if ( minimo ){

        return auto.precio >= minimo;
    }

    return auto;

}

function filtrarMaximo( auto ) {

    const { maximo } = autoMovil;

    if ( maximo ){

        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuertas( auto ){

    const { puertas } = autoMovil;

    if ( puertas ){

        return auto.puertas === puertas;

    } 

    return auto;
}


function filtrarTransmision( auto ) {

    const { transmision } = autoMovil;

    if ( transmision) {

        return auto.transmision === transmision;
    }

    return auto;
}


function filtrarColor( auto ) {

    const { color } = autoMovil;

    if ( color ){

        return auto.color === color;
    }

    return auto;
}