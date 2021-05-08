
//Clases

//exportar variables
export const nombreTarea = 'Pasear el perro';

const variableDefault = 'Variable default';
export default variableDefault ;// solo se puede tener una por archivo, en el importe, no necesita llaves y se puede llamar distinto

//exportar funciones
export const crearTarea = (tarea, urgencia) =>{
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
};

// class Tarea{
//     constructor(nombre, prioridad){
//         this.nombre = nombre;
//         this.prioridad = prioridad;
//     }

//     mostrar(){
//         console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//     }
// }


//exportar clases
export default class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}



//crear objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let compras = new ComprasPendientes('Jabon', 'Urgente',3 );