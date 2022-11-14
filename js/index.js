const inputs = document.querySelectorAll("[data-input]");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "https://github.com/Inkekk";
});

inputs.forEach((input) => {
  input.addEventListener("blur", () => validaCampo(input));
});

const mensagens = {
  firstname: {
    valueMissing: "The field cannot be empty.",
    tooShort: "Please fill in a valid name."
  },
  lastname: {
    valueMissing: "The field cannot be empty.",
    tooShort: "Please fill in a valid name."
  },
  email: {
    valueMissing: "The field cannot be empty.",
    typeMismatch: "Please fill in a valid email.",
    tooShort: "Please fill in a valid email."
  },
  password: {
    valueMissing: "The field cannot be empty.",
    tooShort: "Password must be between 8 and 14 characters"
  }
};

const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort"
];
function validaCampo(campo) {
  const mensagemErro = campo.parentNode.querySelector(".menagem-erro");
  let mensagem = "";
  campo.setCustomValidity("");
  tiposDeErro.forEach((erro) => {
    if (campo.validity[erro]) {
      campo.classList.add("error");
      mensagem = mensagens[campo.name][erro];
    }
  });
  const validadorDeInput = campo.checkValidity();
  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
    campo.classList.remove("error");
  }
}
