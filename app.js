const botonCalcular = document.querySelector('#boton-calcular');


const logicaBoton = () => {
    cantidadLaptop = parseInt(document.querySelector('#cantidad-laptop').value);
    selectorDeColor = document.querySelector('#selector-de-color').value;
    precio = parseInt(document.querySelector('#price-laptop').textContent)
    console.log(precio);
    
    if (cantidadLaptop>0 && selectorDeColor!='') {
        let total = cantidadLaptop*precio;
        valorPrint = document.querySelector('#valor');
        valorPrint.innerHTML = total;

        cantidadPrint = document.querySelector('#cantidad');
        cantidadPrint.innerHTML = cantidadLaptop;

        colorSeleccionado = document.querySelector('.color-selected');
        colorSeleccionado.style.backgroundColor = selectorDeColor;
        console.log(total);
    }else{
        alert('Asegurese de ingersar valores');
    }

}

botonCalcular.addEventListener('click', logicaBoton);