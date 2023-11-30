const Hechiceros = [ 
    hechicero1 = {grado: 'Grado Especial', dominio: 'posee dominio', nombre: 'Gojo Satoru', maldicion: 'no es una maldicion'},
    hechicero2 = {grado:'Primer Grado',dominio:'no posee dominio', nombre: 'Nanami Kento', maldicion: 'no es una maldicion'},
    hechicero3 =  {grado:'Grado Especial', dominio:'posee dominio', nombre: 'Jogo', maldicion: 'es una maldicion'}
    ]
    
    let activo = true;
    
    while (activo == true){
        let accion  = +prompt('Bienvenido a la lista de Hechiceros y Maldiciones que desea hacer? 1- agregar entidad 2- ver entidades 3-salir ');
        if (accion == 1){
            Hechiceros.push({
            grado:prompt("ingrese el grado de la entidad (Grado Especial, Primer Grado, Segundo Grado, Tercer Grado, Cuarto Grado"), 
            dominio: prompt("la entidad tiene dominio? ingresar 'posee dominio' o 'no posee dominio'"),
            nombre: prompt("ingrese el nombre de la entidad"),
            maldicion: prompt("esta entidad es una maldicion? ingrese 'es una maldicion' o 'no es una maldicion'"),
    })
    }
    
        else if (accion ==  2){
            Hechiceros.forEach(element => {
                alert(`${element.nombre} ${element.grado} ${element.dominio} ${element.maldicion}`)
            });
    }
        
    else if (accion == 3){
        activo = false;
    }
    
    else{
        alert('porfavor ingrese un valor del 1 al 3')
    }
    }