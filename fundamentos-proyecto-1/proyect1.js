let dia = prompt('inserte su dia de nacimiento')
let mes = prompt('inserte su mes de nacimiento')
let diaDos = prompt('inserte dia de nacimiento de otra persona')
let mesDos = prompt('inserte mes de nacimiento de otra persona')


//aries
if (mes == 03 && dia >=21){
  alert('eres aries')
} else if (mes == 04 && dia <= 19){
  alert ('eres aries')
} else if (mesDos == 02 && diaDos >=21){
  alert('es aries')
} else if (mesDos == 04 && diaDos <= 19){
  alert ('es aries');
};
//leo
if(mes == 07 && dia >=23){
  alert('eres leo')
} else if (mes == 08 && dia <= 22){
  alert ('eres leo')
} else if (mesDos == 07 && diaDos >=23){
  alert('es leo')
} else if (mesDos == 08 && diaDos <= 22){
  alert ('es leo');
};
//sagitario
if(mes == 11 && dia >=22){
  alert('eres sagitario')
} else if (mes == 12 && dia <= 21){
  alert ('eres sagitario')
} else if (mesDos == 11 && diaDos >=22){
  alert('es sagitario')
} else if (mesDos == 12 && diaDos <= 21){
  alert ('es sagitario');
};
//tauro
if (mes == 04 && dia >=20){
  alert('eres tauro')
} else if (mes == 05 && dia <= 20){
  alert ('eres tauro')
} else if (mesDos == 04 && diaDos >=20){
  alert('es tauro')
} else if (mesDos == 05 && diaDos <= 20){
  alert ('es tauro');
};
//virgo
if (mes == 08 && dia >=23){
  alert('eres virgo')
} else if (mes == 09 && dia <= 22){
  alert ('eres virgo')
} else if (mesDos == 08 && diaDos >=23){
  alert('es virgo')
} else if (mesDos == 09 && diaDos <= 22){
  alert ('es virgo');
};
//capricornio
if (mes == 12 && dia >=22){
  alert('eres capricornio')
} else if (mes == 01 && dia <= 20){
  alert ('eres capricornio')
} else if (mesDos == 12 && diaDos >=22){
  alert('es capricornio')
} else if (mesDos == 01 && diaDos <= 20){
  alert ('es capricornio');
};
//geminis
if (mes == 05 && dia >=21){
  alert('eres geminis')
} else if (mes == 06 && dia <= 20){
  alert ('eres geminis')
} else if (mesDos == 05 && diaDos >=21){
  alert('es geminis')
} else if (mesDos == 06 && diaDos <= 20){
  alert ('es geminis');
};
//libra
if (mes == 09 && dia >=23){
  alert('eres libra')
} else if (mes == 10 && dia <= 22){
  alert ('eres libra')
} else if (mesDos == 09 && diaDos >=23){
  alert('es libra')
} else if (mesDos == 10 && diaDos <= 22){
  alert ('es libra')
};
//acuario
if(mes == 01 && dia >=21){
  alert('eres acuario')
} else if (mes == 02 && dia <= 19){
  alert ('eres acuario')
} else if (mesDos == 01 && diaDos >=21){
  alert('es acuario')
} else if (mesDos == 02 && diaDos <= 19){
  alert ('es acuario');
};
//cancer
if(mes == 06 && dia >=21){
  alert('eres cancer')
} else if (mes == 07 && dia <= 22){
  alert ('eres cancer')
} else if (mesDos == 06 && diaDos >=21){
  alert('es cancer')
} else if (mesDos == 07 && diaDos <= 22){
  alert ('es cancer');
};
//escorpio
if(mes == 10 && dia >=23){
  alert('eres escorpio')
} else if (mes == 11 && dia <= 21){
  alert ('eres escorpio')
} else if (mesDos == 10 && diaDos >=23){
  alert('es escorpio')
} else if (mesDos == 11 && diaDos <= 21){
  alert ('es escorpio');
};
//piscis
if(mes == 02 && dia >=20){
  alert('eres piscis')
} else if (mes == 03 && dia <= 20){
  alert ('eres piscis')
} else if (mesDos == 02 && diaDos >=20){
  alert('es piscis')
} else if (mesDos == 03 && diaDos <= 20){
  alert ('es piscis');
};

let signoUno = prompt('inserte su signo zodiacal')
let signoDos = prompt('inserte el signo zodiacal de otra persona')


//aries
if (signoUno == 'aries' && signoDos == 'acuario' || signoDos == 'geminis' || signoDos == 'libra' || signoDos == 'sagitario' || signoDos == 'leo' || signoDos == 'aries'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'aries' && signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'escorpio' || signoDos == 'capricornio'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'aries' && signoDos == 'piscis' || signoDos == 'virgo'){
  alert('compatibilidad intermedia, sean amix :)');
}
//leo
else if (signoUno == 'leo' && signoDos == 'geminis' || signoDos == 'libra' || signoDos == 'sagitario' || signoDos == 'leo' || signoDos == 'aries'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'leo' && signoDos == 'virgo' || signoDos == 'capricornio'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'leo' && signoDos == 'piscis' || signoDos == 'escorpio' || signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'acuario'){
  alert('compatibilidad intermedia, sean amix :)');
}
//sagitario
else if (signoUno == 'sagitario' && signoDos == 'acuario' || signoDos == 'geminis' || signoDos == 'libra' || signoDos == 'sagitario' || signoDos == 'leo' || signoDos == 'aries'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'sagitario' && signoDos == 'tauro' || signoDos == 'virgo' || signoDos == 'capricornio'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'sagitario' && signoDos =='piscis' || signoDos == 'escorpio' || signoDos == 'cancer'){
  alert('compatibilidad intermedia, sean amix :)');
}
//tauro
else if (signoUno == 'tauro' && signoDos == 'piscis' || signoDos == 'escorpio' || signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'virgo' || signoDos == 'capricornio'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'tauro' && signoDos == 'geminis' || signoDos == 'sagitario' || signoDos == 'acuario'|| signoDos == 'aries'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'tauro' && signoDos =='libra' || signoDos == 'leo'){
  alert('compatibilidad intermedia, sean amix :)');
}
//virgo
else if (signoUno == 'virgo' && signoDos == 'piscis' || signoDos == 'escorpio' || signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'virgo' || signoDos == 'capricornio'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'virgo' && signoDos == 'geminis' || signoDos =='libra'|| signoDos == 'sagitario' || signoDos == 'aries'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'virgo' && signoDos == 'leo' || signoDos == 'acuario'){
  alert('compatibilidad intermedia, sean amix :)');
}
//capricornio
else if (signoUno == 'capricornio' && signoDos == 'piscis' || signoDos == 'escorpio' || signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'virgo' || signoDos == 'capricornio'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'capricornio' && signoDos == 'geminis' || signoDos == 'sagitario' ||signoDos == 'acuario'|| signoDos == 'aries'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'capricornio' && signoDos == 'leo' || signoDos =='libra'){
  alert('compatibilidad intermedia, sean amix :)');
}
//geminis
else if (signoUno == 'geminis' && signoDos == 'geminis' || signoDos =='libra'  || signoDos == 'leo' ||signoDos == 'acuario' || signoDos == 'aries' ){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'geminis' && signoDos == 'piscis' || signoDos == 'escorpio' || signoDos == 'tauro'|| signoDos == 'cancer' ){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'geminis' &&  signoDos == 'virgo' || signoDos == 'capricornio' || signoDos == 'sagitario' ){
  alert('compatibilidad intermedia, sean amix :)');
}
//libra
else if (signoUno == 'libra' && signoDos == 'geminis' || signoDos =='libra'  || signoDos == 'sagitario' || signoDos == 'leo' ||signoDos == 'acuario' ){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'libra' && signoDos == 'escorpio' || signoDos == 'cancer' || signoDos == 'virgo' || signoDos == 'capricornio' ){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'libra' && signoDos == 'piscis' || signoDos == 'tauro' || signoDos == 'aries' ){
  alert('compatibilidad intermedia, sean amix :)');
}
//acuario
else if (signoUno == 'acuario' && signoDos == 'acuario' || signoDos == 'geminis' || signoDos == 'libra' || signoDos == 'sagitario' || signoDos == 'leo' || signoDos == 'aries'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'acuario' && signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'virgo' || signoDos == 'capricornio'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'acuario' && signoDos =='piscis' || signoDos == 'escorpio'){
  alert('compatibilidad intermedia, sean amix :)');
}
//cancer
else if (signoUno == 'cancer' && signoDos == 'piscis'|| signoDos == 'escorpio' || signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'virgo' || signoDos == 'capricornio'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'cancer' && signoDos == 'geminis'  || signoDos =='libra' ||signoDos == 'acuario' || signoDos == 'aries' ){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'cancer' && signoDos == 'sagitario' || signoDos == 'leo'  ){
  alert('compatibilidad intermedia, sean amix :)');
}
//escorpio
else if (signoUno == 'escorpio' && signoDos == 'piscis'|| signoDos == 'escorpio' || signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'virgo' || signoDos == 'capricornio'){
  alert('son compatibles. Uuh wacho, por ahi si es');
} else if (signoUno == 'escorpio' && signoDos == 'geminis'  || signoDos =='libra' ||signoDos == 'sagitario' || signoDos == 'acuario'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.');
} else if (signoUno == 'escorpio' && signoDos == 'leo' || signoDos == 'aries'   ){
  alert('compatibilidad intermedia, sean amix :)');
}
//piscis
else if (signoUno == 'piscis' && signoDos == 'piscis'|| signoDos == 'escorpio' || signoDos == 'tauro' || signoDos == 'cancer' || signoDos == 'capricornio'){
  alert('son compatibles. Uuh wacho, por ahi si es')
} else if (signoUno == 'piscis' && signoDos == 'geminis'  || signoDos =='libra' || signoDos == 'acuario'){
  alert('no es compatible. Por ahi no es :(. Soldado caido.')
} else if (signoUno == 'piscis' && signoDos == 'sagitario' || signoDos == 'leo' || signoDos == 'aries' || signoDos == 'virgo' ){
  alert('compatibilidad intermedia, sean amix :)');
};


