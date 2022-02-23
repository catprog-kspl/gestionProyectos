class index_UI {
	//getters
	get head(){return document.documentElement.children[0]}
	get body(){return document.documentElement.children[1]}
	get main(){return this.body.children[0]}
	get form(){return this.main.children[0]}
	get matricula(){return this.form.children[7]}
	get alumno(){return this.form.children[11]}
	get semestre(){return this.form.children[15]}
	get programacion(){return this.form.children[19]}
	get matematicas(){return this.form.children[23]}
	get fisica(){return this.form.children[27]}
	get redes(){return this.form.children[31]}
	get investigacion(){return this.form.children[35]}
	get boton(){return this.form.children[38]}
	get data() { return this.form.children[39]}
	// Gestores de eventos
	init(){
		this.boton.addEventListener("click", this.boton_click)
	}

	boton_click(e){
		e.preventDefault()
		self.procesar()
		// const nombre = UI.nombre.value,
		// 	fecha = UI.fechavalue,
		// 	archivo = UI.archivo.value,
		// 	color = UI.color.value,
		// 	password = UI.psw.value,
		// 	hora = UI.hora.value,
		// 	comentario = UI.textarea.value,
		// 	opciones = UI.opciones.value0
		// console.log(nombre)
		// console.log(fecha)
		// console.log(archivo)
		// console.log(color)
		// console.log(password)
		// console.log(hora)
		// console.log(comentario)
		// console.log(opciones)
	}
	recuperar(...args){
		let d = {}, //OBJETO LITERAL
			c = {}
		if(!args.length) args.push("*")
		for(let arg of args){
			if(arg == "*" || arg == "matricula") d.matricula = UI.matricula.value
			if(arg == "*" || arg == "alumno") d.alumno = UI.alumno.value
			if(arg == "*" || arg == "semestre") d.semestre = UI.semestre.value
			if(arg == "*" || arg == "Programacion") c.programacion = UI.programacion.value
			if(arg == "*" || arg == "Matematicas") c.matematicas = UI.matematicas.value
			if(arg == "*" || arg == "Fisica") c.fisica = UI.fisica.value
			if(arg == "*" || arg == "Redes") c.redes = UI.redes.value
			if(arg == "*" || arg == "Investigacion") c.investigacion = UI.investigacion.value
			if(arg == "*" || arg == "data") d.data = UI.data.value
			if(arg == "*" || arg == "calificaciones") d.calificaciones = c
		}

		return d;
		//return JSON.stringify(d)
		//obj = JSON.parse(objJSON)
	}

	
	validar(d){
		if(d.hasOwnProperty("matricula") && d.matricula == "") console.log("Matricula incorrecto")
		else if(d.hasOwnProperty("alumno") && d.alumno == "") console.log("Alumno incorrecta")
		else if(d.hasOwnProperty("semestre") && d.semestre == "") console.log("semestre incorrecto")
		else if(d.hasOwnProperty("Programacion") && c.programacion == "") console.log("materia 1 incorrecto")
		else if(d.hasOwnProperty("Matematicas") && c.matematicas == "") console.log("materia 2 incorrecta")
		else if(d.hasOwnProperty("Fisica") && c.fisica == "") console.log("materia 3 incorrecta")
		else if(d.hasOwnProperty("Redes") && c.redes == "") console.log("materia 4 incorrecto")
		else if(d.hasOwnProperty("Investigacion") && c.investigacion == "") console.log("materia 5 incorrecto")
		else return true
		return false
	}
}