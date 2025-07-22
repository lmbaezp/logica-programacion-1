let numeros = [];
let warning = document.getElementById('warning');
let boton = document.getElementById('boton');
let botonReset = document.getElementById('botonReset');
let textoLista = document.getElementById('textoLista');
let lista = document.getElementById('numerosIngresados');
let iguales = document.getElementById('iguales');
let listaMayorAMenor = document.getElementById('mayorAMenor');
let listaMenorAMayor = document.getElementById('menorAMayor');
let seccionNumIngresados = document.getElementById('numIngresados');
let seccionListaMayorMenor = document.getElementById('listaMayMen');
let seccionListaMenorMayor = document.getElementById('listaMenMay');

function tarea() {
    const numero = prompt('Ingresa un número: ');     

    if(isNaN(numero)){
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
        numeros.push(Number(numero));
        if(numeros.length){
            seccionNumIngresados.style.display = 'block';
            textoLista.style.display = 'block';
            const nuevoElemento = document.createElement('li'); 
            nuevoElemento.textContent = numero; 
            lista.appendChild(nuevoElemento);
        }
    }

    if(numeros.length == 3){
        boton.setAttribute('disabled', 'true');
        boton.textContent = 'Ya tenemos los tres números';
        let numerosLimpios = [];
        
        if (numeros[0] === numeros[1] && numeros[1] === numeros[2]) {
            console.log('Los tres números ingresados son iguales');
            iguales.textContent = 'No hay número mayor o número menor porque los tres números ingresados son iguales';
            iguales.style.display = 'block';
            
        } else if (numeros[0] === numeros[1]) {
            numerosLimpios.push(numeros[0]);
            numerosLimpios.push(numeros[2]);
            console.log('El primer y segundo número son iguales');
            iguales.textContent = 'El primer y segundo número ingresado son iguales';
            iguales.style.display = 'block';

        } else if (numeros[1] === numeros[2]) {
            numerosLimpios.push(numeros[0]);
            numerosLimpios.push(numeros[1]);
            console.log('El segundo y tercer número son iguales');
            iguales.textContent = 'El segundo y tercer número ingresado son iguales';
            iguales.style.display = 'block';

        } else if (numeros[0] === numeros[2]) {
            numerosLimpios.push(numeros[0]);
            numerosLimpios.push(numeros[1]);
            console.log('El primero y el tercero son iguales');
            iguales.textContent = 'El primer y tercer número ingresado son iguales';
            iguales.style.display = 'block';
            
        } else {
            numerosLimpios.push(numeros[0]);
            numerosLimpios.push(numeros[1]);
            numerosLimpios.push(numeros[2]);
            console.log('Todos son diferentes');
        }

        const numerosOrdenadosDesc = [...numerosLimpios].sort((a, b) => b - a);
        const numerosOrdenadosAsc = [...numerosLimpios].sort((a, b) => a - b);

        if(numerosLimpios.length == 2){
            seccionListaMayorMenor.style.display = 'block';
            seccionListaMenorMayor.style.display = 'block';
            numerosOrdenadosDesc.forEach(num => {
                const nuevoElemento = document.createElement('li'); 
                nuevoElemento.textContent = num; 
                listaMayorAMenor.appendChild(nuevoElemento);
            });
            numerosOrdenadosAsc.forEach(num => {
                const nuevoElemento = document.createElement('li'); 
                nuevoElemento.textContent = num; 
                listaMenorAMayor.appendChild(nuevoElemento);
            });
            botonReset.style.display = 'inline'

        } else if(numerosLimpios.length == 3){
            seccionListaMayorMenor.style.display = 'block';
            seccionListaMenorMayor.style.display = 'block';
            numerosOrdenadosDesc.forEach(num => {
                const nuevoElemento = document.createElement('li'); 
                nuevoElemento.textContent = num; 
                listaMayorAMenor.appendChild(nuevoElemento);
            });
            numerosOrdenadosAsc.forEach(num => {
                const nuevoElemento = document.createElement('li'); 
                nuevoElemento.textContent = num; 
                listaMenorAMayor.appendChild(nuevoElemento);
            });
            botonReset.style.display = 'inline'
        }

    }
}

function reiniciar() {
    boton.removeAttribute('disabled');
    seccionNumIngresados.style.display = 'none';
    textoLista.style.display = 'none';
    iguales.style.display = 'none';
    seccionListaMayorMenor.style.display = 'none';
    seccionListaMenorMayor.style.display = 'none';
    boton.textContent = 'Ingresar número';
    numeros = [];
    lista.innerHTML = '';
    listaMayorAMenor.innerHTML = '';
    listaMenorAMayor.innerHTML = '';
}
