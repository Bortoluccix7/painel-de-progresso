const prompt = require('prompt-sync')();

//inicio do sistema
console.log("═══════════════════════════════════════════")
console.log("   BEM VINDO AO SEU PAINEL DE PROGRESSO!  ")
console.log("═══════════════════════════════════════════")

//armazenamento de dados
let progressos = [];



//menu interativo
function menu() {
    console.log("═════════ MENU ═════════")
    console.log("➤ [1] - Adicionar progresso");
    console.log("➤ [2] - Ver progressos");
    console.log('➤ [3] - Excluir Progresso');
    console.log('➤ [4] - Editar Progresso');
    console.log("➤ [5] - 🔥 Sequência");
    console.log("➤ [6] - 🏆Nivel");
    console.log("➤ [7] - Sair");

    const opcao = prompt("Escolha: ");

    if (opcao === "1") {
        adicionarProgresso();
        console.log("══════════════════════")
        menu();
    } else if (opcao === "2") {
        verProgressos();
        console.log("══════════════════════")
        menu();
    } else if (opcao === "3") {
        ApagarProgresso()
        console.log("══════════════════════")
        menu();
    } else if (opcao === "4"){
        EditarProgressos();
        console.log("══════════════════════")
        menu();
    }else if (opcao === "5") {
        diasProduzidos();
        console.log("══════════════════════")
        menu();
    } else if (opcao === "6") {
        ContarProgresso();
        verNivel();
        console.log("══════════════════════")
        menu();
    } else if (opcao === "7") {
        console.log("👋 Obrigado por usar o Painel de Progresso! Até a próxima!");
    } else {
        console.log("Opção inválida");
        console.log("══════════════════════")
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
        console.log("Opção invalida")
    }

    const data = prompt("Digite a data: DD/MM/AA:")
    console.log("══════════════════════")
    progressos.push({
        tarefa: tarefa,
        categoria: categoria,
        data: data
    });
    console.log("✅ Progresso registrado com sucesso!");
    console.log("══════════════════════")
}

//função de leitura de dados
function ContarProgresso() {
    console.log("══════════════════════")
    console.log(`Você já registrou ${progressos.length} progressos`);
    console.log("══════════════════════")
}

function verProgressos() {
    console.log("")
    console.log("════ 📚 SEUS PROGRESSOS ════")
    console.log("")

    if (progressos.length === 0) {
        console.log("📭 Você não tem progressos adicionados");
    } else {

        progressos.forEach(function (key, indice) {

            console.log("══════════════════════")
            console.log(`📌 PROGRESSO #${indice + 1} - ${key.tarefa} | ${key.categoria} | ${key.data}`)

        });

    }

    console.log("══════════════════════")
}

function diasProduzidos() {
    let datas = progressos.map(function (progresso) {
        return progresso.data
    });

    let datasUnicas = new Set(datas);
    console.log("══════════════════════")
    console.log(`🔥 Sua sequência é de ${datasUnicas.size} dias`)
    console.log("══════════════════════")
}

//função de nivel 
function verNivel() {

    if (progressos.length <= 5) {
        console.log("🏆 NÍVEL ATUAL: Iniciante")
        console.log("Continue Registrando Progressos para Evoluir")
    } else if (progressos.length <= 10) {
        console.log("🏆 NÍVEL ATUAL: CONSISTENTE")
        console.log("Continue Assim!")
    } else {
        console.log("🏆 NÍVEL ATUAL: DISCIPLINADO")
    }
}

//função para exclusão de dados
function ApagarProgresso() {

    verProgressos()
    console.log("══════════════════════")
    let indice = prompt("Selecione o Progresso que deseja excluir: ")
    progressos.splice(indice - 1, 1)
    console.log("Progresso Excluido com sucesso!")
    console.log("══════════════════════")
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
            console.log("Opção inválida")
        }

        progressos[indiceEditar - 1].categoria = categoria

    } else if (opcaoEdicao === "3") {

        progressos[indiceEditar - 1].data = prompt("Digite a nova Data do seu Progresso: DD/MM/AA")

    } else {

        console.log("Opção Inválida")

    }

    console.log("✅ Progresso Editado!")
    console.log("══════════════════════")
}

menu();