
function validacao() {
    let login = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    
    if (login == "admin" && senha == "admin") {
        alert("Sucesso")
        
    } else {
        alert("Usuário ou senha incorretos!")
    }

}

// Exibir senha:

const exibirSenha = document.querySelector('#exibir')

exibirSenha.addEventListener('click', () => {
    let inputPass = document.querySelector("#senha")

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type', 'text')
        exibirSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else {
        inputPass.setAttribute('type', 'password')
        exibirSenha.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
})