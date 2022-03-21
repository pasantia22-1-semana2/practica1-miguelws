const ingresos = [
    new Ingreso('Salario', 2100),
    new Ingreso('Venta coche', 1500)
];

const egresos = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400)
];

let cargarApp = ()=>{
    cargarCabecera();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for (let ingreso of ingreso){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecera = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoMoneda(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2})
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString("en-US", {style: "porcent", minimumFractionDigits: 2})
}

let cargarIngresos = ()=>{
    let ingresoHTML = "";
    for (let ingreso of ingresos){
        ingresoHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresoHTML;
}
/*
const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
        <div>
            <div>${ingreso.descripcion}</div>
            <div>
                <div>+ ${formatoMoneda(ingreso.valor)}</div>
                <div>
                    <button onclick="eliminarIngreso(${ingreso.id})">Eliminar</button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
}
*/

/*
let eliminarIngreso = (id)=>{
    let indiceEliminar = ingreso.findIndex(ingreso => ingreso.id === id)
    ingresos.splice(indiceEliminar, 1);
    cargarCabecera();
    cargarIngresos();
}
*/