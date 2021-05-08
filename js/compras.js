// para usar clase heredada hay que importar la clase padre en el hijo e importar ambas donde se van a usar



import Tarea from './tareas.js';

export default class ComprasPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        // this.nombre = nombre;
        // this.prioridad = prioridad;  SE DEBE USAR EL SUPER CONSTRUCTOR DE LA CLASE HEREDADA
        super(nombre,prioridad);
        this.cantidad = cantidad;
    }

    mostrar(){
        super.mostrar();
        console.log( `y la cantidad de ${this.cantidad}`);
    }
}