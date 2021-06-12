function nuevoTodo() {
    let todo = document.getElementById("todo")
    let header = "todo=" + todo.value
    let xmlhttp = new XMLHttpRequest()

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarTodos();
        }
    }

    xmlhttp.open("POST", "nuevo-todo.php", true)
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xmlhttp.send(header);
}

function cargarTodos() {
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('mostrar-todo-container').innerHTML = this.responseText

        }
    }

    xmlhttp.open("GET", "mostrar-todo.php", true)
    xmlhttp.send()
}

document.getElementById('bEnviar').addEventListener("click", () => {
    //console.log('hicieste click')
    nuevoTodo()
})