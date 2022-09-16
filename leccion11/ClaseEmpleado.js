class Empleado  extends Persona{

    static contadorEmpleados = 0;

    constructor(sueldo){
        this._idEmpleados = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleados(){
        return this._idEmpleados;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo
    }


    toString(){
        return `${super.toString()} ${this._idEmpleados} ${this._sueldo}`;
    }
    
}