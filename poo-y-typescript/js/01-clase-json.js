var bici = {
	color : 'rojo',
	modelo : 'bmx',
	frenos : 'disco',
	valocidadMaxima : '60km',

	cambiaColor : function (nuevo_color) {
		this.color = nuevo_color;
	}
};

bici.cambiaColor("Azul");
console.log(bici);