class index{
iniciar(){
	window.UI = new index_UI()
	window.self = new index() //objeto global a si mismo
	UI.init()

	}
	procesar(){
		const data = UI.recuperar("matricula", "alumno", "semestre", "calificaciones","Programacion", "Matematicas","Fisica","Redes","Investigacion")
		if(UI.validar(data))
			UI.data.value = JSON.stringify(data)
			UI.form.submit()
	}
}
window.addEventListener("load", new index().iniciar)
