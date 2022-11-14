const inputs = document.querySelectorAll("[data-input]");
const form = document.querySelector("form");

form.addEventListener("submit", () => {
  window.location.href = "https://github.com/Inkekk";
});

inputs.forEach((input) => {
  input.addEventListener("blur", () => validaCampo(input));
});

const mensagens = {
  firstname: {
    valueMissing: "O campo não pode estar vazio.",
    tooShort: "Por favor, preencha um nome válido."
  },
  lastname: {
    valueMissing: "O campo não pode estar vazio.",
    tooShort: "Por favor, preencha um nome válido."
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um email válido."
  },
  password: {
    valueMissing: "O campo senha não pode estar vázio",
    tooShort: "A senha deve ter entre 8 e 14 caracteres"
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
