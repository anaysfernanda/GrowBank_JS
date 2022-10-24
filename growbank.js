let saldo = 0.0;
let chequeEspecial = 500.0;
let saldoFinal = saldo + chequeEspecial;

inicio();

function inicio() {
  let sair = true;
  if (sair) {
    let selecioneOpcao = parseInt(
      prompt(
        "***Bem-vindo (a) ao GrowBank***\n1 - Visualizar saldo \n2 - Efetuar depósito \n3 - Efetuar saque \n4 - Efetuar transferência \n5 - Sair.\nDigite uma opção:"
      )
    );
    switch (selecioneOpcao) {
      case 1:
        saldoConta();
        break;

      case 2:
        depositar();
        break;

      case 3:
        sacar();
        break;

      case 4:
        transferir();
        break;

      case 5:
        sair = false;
        alert("Obrigada por escolher o GrowBank");
        break;

      default:
        alert("Escolha uma opção válida.\n");
    }
  }
}

function saldoConta() {
  alert("Seu saldo atual é de GC$" + saldo);
  alert("O saldo do Cheque Especial é de GC$" + chequeEspecial);
  inicio();
}

function depositar() {
  let menosDeposito = 0.0;
  let depositarConta = parseFloat(
    prompt("Digite o valor que você deseja depositar: GC$")
  );

  if (chequeEspecial < 500) {
    chequeEspecial = chequeEspecial + depositarConta;
    if (chequeEspecial >= 500) {
      menosDeposito = chequeEspecial - 500;
      chequeEspecial = 500;
      saldo = saldo + menosDeposito;
    }
  } else {
    saldo = saldo + depositarConta;
  }

  alert(
    "Você depositou GC$" +
      depositarConta +
      "\nSeu saldo atual é de GC$" +
      saldo +
      "\nO saldo do Cheque Especial é de GC$" +
      chequeEspecial
  );
  inicio();
}

function sacar() {
  let sacarConta = parseFloat(
    prompt("Digite o valor que você deseja sacar: GC$")
  );

  saldoFinal = saldo + chequeEspecial;
  let valorFinalSaque = saldoFinal - sacarConta - 2.5;

  if (valorFinalSaque < 0) {
    alert("Você não possui saldo disponível para saque.");
    inicio();
  }
  saldo = saldo - sacarConta - 2.5;

  if (saldo < 0) {
    chequeEspecial = chequeEspecial + saldo;
    saldo = 0.0;
  }
  alert(
    "Você depositou GC$" +
      sacarConta +
      "\nSeu saldo atual é de GC$" +
      saldo +
      "\nO saldo do Cheque Especial é de GC$" +
      chequeEspecial
  );
  inicio();
}
function transferir() {
  let transferirConta = parseFloat(
    prompt("Digite o valor que você deseja transferir: GC$")
  );

  saldo = saldo - transferirConta - 4.5;
  if (saldo > 0) {
    alert(
      "Você depositou GC$" +
        transferirConta +
        "\nSeu saldo atual é de GC$" +
        saldo +
        "\nO saldo do Cheque Especial é de GC$" +
        chequeEspecial
    );
  }

  if (saldo < 0) {
    alert("Você não possui saldo disponível para transferência.");
  }
  inicio();
}
