let vet = []
let contador = 0
let guardinha = ""

function salvar() {
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    if (contador == 0) {



        let objeto = {
            nome: nome,
            idade: idade
        }


        vet.push(objeto)
        mostrar()


    }
    if (contador == 1) {

        vet[guardinha].nome = idade
        vet[guardinha].idade = idade
        mostrar()
        contador = 0
    }
}

function mostrar() {
    let html = ""
    document.getElementById("tr").innerHTML = ""
    for (let i = 0; i < vet.length; i++) {
        html += `
                 <tr>      
                    <td>${vet[i].nome}</td>
                    <td>${vet[i].idade}</td>
                    <td>
                       <button id="botão1" type="button" class="btn btn-primary"onclick="editar(${i})"><img src="https://cdn-icons-png.flaticon.com/512/3601/3601685.png" style="border-radius:5px ;width: 40px;height: 40px;" alt="imagem" id="p2"></button>
                        <button type="button" id="botão2" class="btn btn-danger" onclick="excluir(${i})"><img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" style="width:40px;height:40px;border:trasparent;"  id="p" alt="imagem"></button>
                    </td>
                </tr>  `
        document.getElementById("tr").innerHTML = html

        document.getElementById("nome").value = ""
        document.getElementById("idade").value = ""
    }
}

function excluir(i) {
    vet.splice(i, 1)
    mostrar()
    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
}

function editar(i) {
    document.getElementById("nome").value = vet[i].nome
    document.getElementById("idade").value = vet[i].idade
    contador = 1
    guardinha = i
}