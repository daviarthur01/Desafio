let vet = []
let contador = 0
let guardinha = ""

function salvar() {
    let nome = document.getElementById("nome").value
    if (contador == 0) {
        


        let objeto = {
            nome: nome
        }


        vet.push(objeto)
        mostrar()


    }
    if (contador == 1) {
        
        vet[guardinha].nome =  nome
        mostrar()
        contador = 0
    }
}

function mostrar() {
    let html = ""
    document.getElementById("tr").innerHTML = ""
    for (let i = 0; i < vet.length; i++) {
        html += `
        <p>
      
            ${vet[i].nome}
       
            <button id="botão1" type="button" class="btn btn-primary"onclick="editar(${i})"><img src="https://cdn-icons-png.flaticon.com/512/3601/3601685.png" style="border-radius:5px ;width: 10px;height: 10px;" alt="imagem"></button>
           
           
            <button type="button" id="botão2" class="btn btn-danger" onclick="excluir(${i})"><img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" style="width:10px;height:10px;border:trasparent;"  alt="imagem"></button>
       
    </p>`
                document.getElementById("tr").innerHTML = html
    }
}

function excluir(i){
    vet.splice(i,1)
    mostrar()
}

function editar(i){
    document.getElementById("nome").value = vet[i].nome
    contador = 1
    guardinha=i
}