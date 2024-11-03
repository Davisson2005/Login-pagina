const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login bem-sucedido!");
        window.location.href = "pagina-principal.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
