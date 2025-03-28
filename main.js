document.getElementById("download-btn").addEventListener("click", function() {
    alert("Download iniciado!");
});

document.querySelectorAll(".plan-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert(`Você escolheu o plano ${this.parentElement.querySelector("h3").textContent}!`);
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Mensagem enviada com sucesso!");
        this.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});