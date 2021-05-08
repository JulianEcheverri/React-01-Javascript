//template strings

// const nombre = 'Julian';
// const trabajo = 'Desarrollador Web';

// console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// const contenedorApp = document.querySelector('#app');

// let html = `
//     <ul>
//         <li>Nombre: ${nombre} </li>
//         <li>Nombre: ${trabajo} </li>
//     </ul>
//     `;
        
//     contenedorApp.innerHTML = html;



//Funtion expresion
// const cliente = function(nombreCliente){
//     console.log('Mostrando datos del cliente: ' + nombreCliente);
// }

// cliente('Julian');


// const actividad = function(nomre = 'Walter white', actividad'Enseñar quimica'){
//     console.log(`Nomnre ${nomre} y actividad ${actividad}`);
// }

// actividad('Julian');



//arrow functions
// let viajando = (destino, duracion) => {
//     return `Viajando a la ciudad de ${destino} por ${duracion}`;
// }

// let viajando2 = destino => {
//     return `Viajando a la ciudad de ${destino}`;
// }


// let viajando3 = destino => `Viajando a la ciudad de ${destino}`;

// let viaje = viajando('Paris', '2 días')
// let viaje2 = viajando2('Paris', '2 días')

// console.log(viaje);
// console.log(viaje2);



//objetos

// object literal

// const personaX = {
//     nNomre: 'Julian',
//     Profesion: 'Desarrolllo web',
//     Edad: 26
// }



// object constructor

// function Persona(nombre, profesion, edad){
//     this.nombre = nombre;
//     this.profesion = profesion;
//     this.edad = edad;
// }

// //prototypes
// Persona.prototype.actividadDePersona = function(){
//     return `${this.nombre} trabaja como ${this.profesion} y tiene ${this.edad} años de edad`;
// }

// const persona = new Persona('Julian', 'Desarrollador web', 26);



// console.log(persona.actividadDePersona());
// console.log(persona);




// object destructuring --extraer valores de un objeto
//forma vieja
// const aprendiendoJs = {
//     version: {
//       nueva: 'ES6',
//       anterior: 'ES5'  
//     },
//     frameworks: ['React', 'VueJs', 'AngularJs']
// }


// // console.log(aprendiendoJs);

// let {version,frameworks} = aprendiendoJs;

// console.log(version);
// console.log(frameworks);


// let {anterior} = aprendiendoJs.version;

// console.log(anterior);




// literal Enhacement  creacion de objetos a partir de variables

// const banda = 'Metallica';
// const genero = 'Heavy Metal';
// const canciones = ['Master of puppets', 'Seek & Destroy', 'Enter sadman'];

// // const metallica = {
// //     banda: banda,
// //     genero: genero,
// //     canciones: canciones
// // }

// const metallica = {banda, genero, canciones}
// console.log(metallica);



// const persona = {
//     nombre: 'Juan',
//     traabajo : 'Desarrollador Web',
//     edad : 50,
//     musicaRock : true,
//     mostrarInformacion(){
//         console.log(`${this.nombre} es ${this.traabajo} y su edad es ${this.edad}`);
//     }
// }
// persona.mostrarInformacion();



// const carrito = ['Producto 1','Producto 2','Producto 3'];
// console.log(carrito);

// const appContenedor = document.querySelector('#app');

// let html = ''
// carrito.forEach(item =>{
//     html += `<li>${item}</li>`;
// });

// appContenedor.innerHTML = html;


// //MAP {se conserva el obhjeto anterior}
// const carrito2 = ['Producto 1','Producto 2','Producto 3'];

// carrito2.map(item =>{
//     return 'El producto es ' + item;
// })



// object keys

// const persona = {
//     nombre: 'Juan',
//     traabajo : 'Desarrollador Web',
//     edad : 50,
//     musicaRock : true   
// }

// console.log(Object.keys(persona));



//sprear opretator ---- unir arreglos
// let lenguajes = ['Javastript', 'PHP', 'Python'];
// let frameworks = ['Javastript', 'PHP', 'Python'];

// //forma anterior 
// let combinacion = lenguajes.concat(frameworks);

// console.log(combinacion);

// let combinacion2 = [...lenguajes,...frameworks];
// console.log(combinacion2);


// //copiar arreglo 
// let copia = [...lenguajes];


// let [ultimo] = lenguajes.reverse();


// function suma(a,b,c){
//     console.log(a+b+c)
// }

// const numeros = [1,2,3];

// suma(...numeros);





//Metodos de arreglos
// const personas = [
//     {nombre : 'Juan', edad = 23, aprendiendo : 'Javascript'},
//     {nombre : 'Julian', edad = 34, aprendiendo : 'Javascript'},
//     {nombre : 'Cod', edad = 32, aprendiendo : 'Phyton'},
//     {nombre : 'Nuclear', edad = 3, aprendiendo : 'Php'},
//     {nombre : 'Juan', edad = 4, aprendiendo : 'react'}
// ]


// //mayores de 28 años
// const mayores = personas.filter(item => {
//     return personas.edad > 28;
// })

// //buscando nombre
// const juan = personas.find(item => {
//     return personas.nombre === 'Juan';
// })

// //suma todos los valores del array
// let total = personas.reduce((edadTotal, item) =>{
//     return edadTotal + item.edad;
// },0);



//promises
// resolve ---> fraccion de codigo que se ejecuta cuando el llamado es correcto
// reject ---> fraccion de codigo que se ejecuta cuando el llamado NO es correcto

// const aplicarDescuento = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let descuento = false;
//         if(descuento) 
//             resolve('Descuentio aplicado');
//         else
//             reject('No se pudo aplicar el descuento;');
//     }, 2000);
// });


// aplicarDescuento.then(resultado =>{
//     console.log(resultado);
// }).catch(error =>{
//     console.log('error');
// })



// // promises con ajax
// const descargarUsuarios = cantidad => new Promise((resolve, reject)=>{
//     //pasar la cantidad a la API
//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//     //llamado al ajax
//     const xhr = new XMLHttpRequest();

//     //abrir la conexion
//     xhr.open('GET', api, true);
//     //tipo de envio de datos, url, si queremos que sea asincrono o no

//     //on load leer la respuesta
//     xhr.onload = () =>{
//         if(xhr.status === 200)    // estatus correcto es 200
//         {
//             resolve(JSON.parse(xhr.responseText).results);
//             //el objeto devuelto es un json pero como cadena de texto, se convierte en json y se accede a la propiedad results (nombre del objeto devuelto)
//         }  
//         else{
//             reject(Error(xhr.statusText));
//         }
//     }
//     //devuelvo si hay un error
//     xhr.onerror = (error) => reject(error);

//     // y envio los datos
//     xhr.send();
// });


// descargarUsuarios(20).then(
//     miembros => imprimirHtml(miembros),
//     error => console.error(new Error('Hubo un error' + error))
// )

// // function imprimirHtml(usuarios){
// //     usuarios.forEach(element => {
// //         console.log(element);
// //     });
// // }


// function imprimirHtml(usuarios){
//     let html = ''
//     usuarios.forEach(element => {
//         html += `
//             <li>
//                 Nombre: ${element.name.first} ${element.name.last}
//                 Pais: ${element.nat}
//                 Imagen:
//                     <img src="${element.picture.medium}">
//             </li>
//         `;
//     });
//     const contenedorApp = document.querySelector('#app');
//     contenedorApp.innerHTML = html;
// }





// //Clases

// class Tarea{
//     constructor(nombre, prioridad){
//         this.nombre = nombre;
//         this.prioridad = prioridad;
//     }

//     mostrar(){
//         console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//     }
// }

// class ComprasPendientes extends Tarea{
//     constructor(nombre, prioridad, cantidad){
//         // this.nombre = nombre;
//         // this.prioridad = prioridad;  SE DEBE USAR EL SUPER CONSTRUCTOR DE LA CLASE HEREDADA
//         super(nombre,prioridad);
//         this.cantidad = cantidad;
//     }

//     mostrar(){
//         super.mostrar();
//         console.log( `y la cantidad de ${this.cantidad}`);
//     }
// }

// //crear objetos
// let tarea1 = new Tarea('Aprender JavaScript', 'Alta');


// let compras = new ComprasPendientes('Jabon', 'Urgente',3 );






//EXPORTS AND IMPORTS
// export const nombreTarea = 'Pasear el perro';
//se debe agregar la palabra module como atributo de la etiqueta javascript
{/* <script src="js/app.js" type="module" ></script> */}

// import {nombreTarea,crearTarea} from './tareas.js';

// solo se puede tener una por archivo, en el importe, no necesita llaves y se puede llamar distinto
// import defaultVar from './tareas.js';

// console.log(nombreTarea);
// console.log(defaultVar);


// //usar variable funcion
// const tarea1 = crearTarea('Pasear al perro', 'Media');
// console.log(tarea1);




// import Tarea from './tareas.js';
// import ComprasPendientes from './compras.js';

// const tarea1 = new Tarea('Aprender Javascript', 'Urgente');
// console.log(tarea1);

// tarea1.mostrar();


// para usar clase heredada hay que importar la clase padre en el hijo