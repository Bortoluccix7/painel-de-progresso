const prompt = require('prompt-sync')();
const chalk = require('chalk');

const linha = chalk.cyan("══════════════════════");
//inicio do sistema
console.log(linha)
console.log(chalk.cyan.bold("  BEM VINDO AO SEU PAINEL DE PROGRESSO!  "))
console.log(linha)
//armazenamento de dados
let progressos = [];



//menu interativo
function menu() {
    console.log(chalk.cyan("═════════ MENU ═════════"))
    console.log(chalk.green("➤ [1] - Adicionar progresso"));
    console.log(chalk.blue("➤ [2] - Ver progressos"));
    console.log(chalk.red('➤ [3] - Excluir Progresso'));
    console.log(chalk.yellow('➤ [4] - Editar Progresso'));
    console.log(chalk.magenta("➤ [5] - 🔥 Sequência"));
    console.log(chalk.yellow("➤ [6] - 🏆 Nivel"));
    console.log(chalk.blue("➤ [7] - Pesquisa"));
    console.log(chalk.gray("➤ [8] - Sair"));

    const opcao = prompt("Escolha: ");

    if (opcao === "1") {
        adicionarProgresso();
        console.log(linha)
        menu();
    } else if (opcao === "2") {
        verProgressos();
        console.log(linha)
        menu();
    } else if (opcao === "3") {
        ApagarProgresso()
        console.log(linha)
        menu();
    } else if (opcao === "4") {
        EditarProgressos();
        console.log(linha)
        menu();
    } else if (opcao === "5") {
        diasProduzidos();
        console.log(linha)
        menu();
    } else if (opcao === "6") {
        ContarProgresso();
        verNivel();
        console.log(linha)
        menu();
    }else if (opcao === "7"){
        Pesquisa();
        console.log(linha)
        menu();
    } else if (opcao === "8") {
        console.log(chalk.gray("👋 Obrigado por usar o Painel de Progresso! Até a próxima!"));
    } else {
        console.log("Opção inválida");
        console.log(linha)
        menu();
    }
}

//funções de adição de dados
function adicionarProgresso() {
    const tarefa = prompt("Digite o progresso: ");
    let categoria = ""
    console.log("Selecione a categoria")
    console.log("➤ [1] Treino 💪 ")
    console.log("➤ [2] Saúde ❤️ ")
    console.log("➤ [3] Estudos 📚 ")
    console.log("➤ [4] Programação 💻 ")
    console.log("➤ [5] Alimentação 🍎 ")
    console.log("➤ [6] Lazer 🎮 ")
    console.log("➤ [7] Outros 📝 ")
    const opcaoCategoria = prompt("Escolha: ");
    if (opcaoCategoria === "1") {
        categoria = "💪 Treino"
    } else if (opcaoCategoria === "2") {
        categoria = "❤️ Saúde"
    } else if (opcaoCategoria === "3") {
        categoria = "📚 Estudos"
    } else if (opcaoCategoria === "4") {
        categoria = "💻 Programação"
    } else if (opcaoCategoria === "5") {
        categoria = "🍎 Alimentação"
    } else if (opcaoCategoria === "6") {
        categoria = "🎮 Lazer"
    } else if (opcaoCategoria === "7") {
        let categoriaOutros = prompt("📝 Outros qual?: ")
        categoria = (`📝 ${categoriaOutros}`)
    } else {
        console.log(chalk.red("❌ Opção invalida"))
    }

    const data = prompt("Digite a data: DD/MM/AA:")
    console.log(linha)
    progressos.push({
        tarefa: tarefa,
        categoria: categoria,
        data: data
    });
    console.log(chalk.green("✅ Progresso registrado com sucesso!"));
    console.log(linha)
}

//função de leitura de dados
function ContarProgresso() {
    console.log(linha)
    console.log(`Você já registrou ${progressos.length} progressos`);
    console.log(linha)
}

function verProgressos() {
    console.log(linha)
    console.log(chalk.blue.bold("════ 📚 SEUS PROGRESSOS ════"))
    console.log(linha)

    if (progressos.length === 0) {
        console.log(chalk.yellow("📭 Você não tem progressos adicionados"));
    } else {

        progressos.forEach(function (key, indice) {

            console.log(linha)
            console.log(chalk.white(`📌 PROGRESSO #${indice + 1} - ${key.tarefa} | ${key.categoria} | ${key.data}`))


        });

    }

    console.log(linha)
}

function diasProduzidos() {
    let datas = progressos.map(function (progresso) {
        return progresso.data
    });

    let datasUnicas = new Set(datas);
    console.log(linha)
    console.log(chalk.magenta(`🔥 Sua sequência é de ${datasUnicas.size} dias`))
    console.log(linha)
}

//função de nivel 
function verNivel() {

    if (progressos.length <= 5) {
        console.log(chalk.yellow("🏆 NÍVEL ATUAL: Iniciante"))
        console.log("Continue Registrando Progressos para Evoluir")
    } else if (progressos.length <= 10) {
        console.log(chalk.yellow("🏆 NÍVEL ATUAL: CONSISTENTE"))
        console.log("Continue Assim!")
    } else {
        console.log(chalk.yellow.bold("🏆 NÍVEL ATUAL: DISCIPLINADO"))
    }
}

//função para exclusão de dados
function ApagarProgresso() {

    verProgressos()
    console.log(linha)
    let indice = prompt("Selecione o Progresso que deseja excluir: ")
    progressos.splice(indice - 1, 1)
    console.log(chalk.red("🗑️ Progresso Excluido com sucesso!"))
    console.log(linha)
}

//função de edição dos dados
function EditarProgressos() {
    let categoria = ""

    verProgressos()
    let indiceEditar = prompt("Selecione qual progresso deseja editar: ")

    console.log("O que deseja editar?")
    console.log("[1] Tarefa")
    console.log("[2] Categoria")
    console.log("[3] Data")
    const opcaoEdicao = prompt("O que deseja editar: ")

    if (opcaoEdicao === "1") {

        progressos[indiceEditar - 1].tarefa = prompt("Digite a nova tarefa: ");

    } else if (opcaoEdicao === "2") {

        console.log("Selecione a categoria")
        console.log("➤ [1] Treino 💪 ")
        console.log("➤ [2] Saúde ❤️ ")
        console.log("➤ [3] Estudos 📚 ")
        console.log("➤ [4] Programação 💻 ")
        console.log("➤ [5] Alimentação 🍎 ")
        console.log("➤ [6] Lazer 🎮 ")
        console.log("➤ [7] Outros 📝 ")

        const opcaoCategoria = prompt("Escolha: ");

        if (opcaoCategoria === "1") {
            categoria = "💪 Treino"
        } else if (opcaoCategoria === "2") {
            categoria = "❤️ Saúde"
        } else if (opcaoCategoria === "3") {
            categoria = "📚 Estudos"
        } else if (opcaoCategoria === "4") {
            categoria = "💻 Programação"
        } else if (opcaoCategoria === "5") {
            categoria = "🍎 Alimentação"
        } else if (opcaoCategoria === "6") {
            categoria = "🎮 Lazer"
        } else if (opcaoCategoria === "7") {
            let categoriaOutros = prompt("📝 Outros qual?: ")
            categoria = `📝 ${categoriaOutros}`
        } else {
            console.log(chalk.red("❌ Opção inválida"))
        }

        progressos[indiceEditar - 1].categoria = categoria

    } else if (opcaoEdicao === "3") {

        progressos[indiceEditar - 1].data = prompt("Digite a nova Data do seu Progresso: DD/MM/AA")

    } else {

        console.log(chalk.red("❌ Opção Inválida"))

    }

    console.log(chalk.green("✅ Progresso Editado!"))
    console.log(linha)
}

function Pesquisa() {
    
    console.log("➤ [1] Progressos ")
    console.log("➤ [2] Categorias ")
    console.log("➤ [3] Datas ")
    const opcoes = prompt("O que deseja pesquisar?")

    if (opcoes === "1") {

        let pesquisa = prompt("Pesquisar progressos: ").toLowerCase()
        let encontrou = false;

        progressos.forEach(function (progresso, indice) {

            if (progresso.tarefa.toLowerCase().includes(pesquisa)) {
                encontrou = true;

                console.log(linha)
                console.log(chalk.white(`📌 PROGRESSO #${indice + 1} - ${progresso.tarefa} | ${progresso.categoria} | ${progresso.data}`))
            }

        });

        if (!encontrou) {
            console.log(chalk.red("❌ Nenhum progresso encontrado!"));
        }

    } else if (opcoes === "2") {

        let pesquisa = prompt("Digite a categoria que deseja pesquisar: ").toLowerCase()
        let encontrou = false;

        progressos.forEach(function (progresso, indice) {

            if (progresso.categoria.toLowerCase().includes(pesquisa)) {
                encontrou = true;

                console.log(linha)
                console.log(chalk.white(`📌 PROGRESSO #${indice + 1} - ${progresso.tarefa} | ${progresso.categoria} | ${progresso.data}`))
            }

        });

        if (!encontrou) {
            console.log(chalk.red("❌ Nenhum progresso encontrado!"));
        }

    } else if (opcoes === "3") {

        let pesquisa = prompt("Digite a Data que deseja pesquisar: ")
        let encontrou = false;

        progressos.forEach(function (progresso, indice) {

            if (progresso.data.includes(pesquisa)) {
                encontrou = true;

                console.log(linha)
                console.log(chalk.white(`📌 PROGRESSO #${indice + 1} - ${progresso.tarefa} | ${progresso.categoria} | ${progresso.data}`))
            }

        });

        if (!encontrou) {
            console.log(chalk.red("❌ Nenhum progresso encontrado!"));
        }

    } else {

        console.log("Opção inválida")
        Pesquisa();

    }
}
menu();