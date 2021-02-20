import '../css/funciones.css';

export const saludar = ( nombre ) => {      // sino se pone export el módulo es privado para archivos externos
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );
}