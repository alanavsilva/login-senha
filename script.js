const btnLoginFinal = document.getElementById("btnLoginFinal");
if (btnLoginFinal) {
    btnLoginFinal.onclick = (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            window.location.href = "login.html";
        }, 500);
    };
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");
    let titulo = document.getElementById("titulo");
    let botao = document.getElementById("btn btn-info");

    mensagem.innerHTML = "";

   
    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = '<div class="error"><p>Email Inválido!</p></div>';
        return;
    }

    
    if (senha.length < 4) {
        mensagem.innerHTML = '<div class="error"><p>Senha muito curta!</p></div>';
        return;
    }

    
    let isCadastro = titulo.innerText.toLowerCase() === "link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover";

    if (isCadastro) {
        
        if (localStorage.getItem(email)) {
            mensagem.innerHTML = '<div class="error"><p>Email já cadastrado!</p></div>';
            return;
        }
        
        localStorage.setItem(email, senha);
        mensagem.innerHTML = '<div class="sucesso"><p>Cadastrado com sucesso!</p></div>';
        
        
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
        
    } else {
       
        let salva = localStorage.getItem(email);
        if (salva === senha) {
            mensagem.innerHTML = '<div class="sucesso"><p>Login com sucesso!</p></div>';
            
            setTimeout(() => {
                window.location.href = "home.html";
            }, 500);
        } else {
            mensagem.innerHTML = '<div class="error"><p>Email ou senha incorretos!</p></div>';
        }
    }

    document.getElementById("form-login").reset();
};


const toggle = document.getElementById("toggle");
const titulo = document.getElementById("titulo");
const botao = document.getElementById("btn btn-info");

toggle.addEventListener("click", () => {
    if (titulo.innerText === "Login") {
        titulo.innerText = "Cadastro";
        botao.innerText = "Cadastrar";
        toggle.innerHTML = '<p>Já tem conta? <u> Faça login!</u></p>';
    } else {
        titulo.innerText = "Login";
        botao.innerText = "Entrar";
        toggle.innerHTML = '<p>Não tem conta? <u> Cadastre-se!</u></p>';
    }
});

let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro
        ? "Cadastro"
        : "Login"
    document.getElementById("button").innerText = cadastro
        ? "Cadastrar"
        : "Entrar"
    document.getElementById("toggle").innerText = cadastro
        ? "Já tem conta? Faça login!"
        : "Não tem conta? Cadastre-se!"
    document.getElementById("mensagem").innerHTML = "";
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='erro'><p> Email inválido! </p> </div>"
        return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p> Senha muito curta! </p> </div>"
        return;
    } else {
        let salva = localStorage.getItem(email);

        if (salva === senha) {
            mensagem.innerHTML = "<div class='sucesso'><p> Login com sucesso! </p> </div>"
        } else {
            mensagem.innerHTML = "<div class='sucesso'><p> Dados incorretos! </p> </div>"
        }
    }

    document.getElementById("form-login").reset();
}