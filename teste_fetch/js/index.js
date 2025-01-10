fetch("hello_world.txt")
    .then(response => response.text())
    .then(response => {
    console.log("hello_world.txt");
    console.log(response);

    console.log();
    console.log("--------------------------------------------------------");
    console.log();
    })

fetch("JSON.txt")
    .then(response => response.text())
    .then(response => {
        console.log("JSON.txt");
        const json = JSON.parse(response)
        console.log("Mensagem: ", json.mensagem)
        console.log("Linguagem: ", json.linguagem)

        console.log();
        console.log("--------------------------------------------------------");
        console.log();
    })

fetch("JSON.json")
    .then(response => response.json())
    .then(response => {
        console.log("JSON.json");
        console.log("Linguagem: ", response.linguagem)
        console.log("Disciplina: ", response.disciplina)
    })