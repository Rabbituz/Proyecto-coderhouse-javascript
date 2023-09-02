function DatosTrabajadores() {
    const numTrabajadores = Number(prompt("¿Cuántos trabajadores deseas ingresar?"));
    
    for (let i = 1; i <= numTrabajadores; i++) {
        let nombre, apellido, informacion;

        nombre = prompt("Ingresa el nombre del trabajador #" + i + ": ");
        apellido = prompt("Ingresa el apellido del trabajador #" + i + ": ");
        informacion = Number(prompt("Hola " + nombre + " " + apellido + " ¿Qué información deseas? (1.Sueldo Mensual, 2.Días de Pago, 3.Vacaciones)"));

        numeros(informacion, nombre, apellido);
    }
}

function numeros(informacion, nombre, apellido) {
    switch (informacion) {
        case 1:
            console.log(nombre + " " + apellido + ", su sueldo mensual es de 1050$");
            break;

        case 2:
            console.log(nombre + " " + apellido + ", sus días de pago son el día 6 de cada mes");
            break;

        case 3:
            console.log(nombre + " " + apellido + ", sus vacaciones están programadas para el 1 de enero");
            break;

        default:
            console.log(nombre + " " + apellido + ", opción no válida");
    }
}

DatosTrabajadores();