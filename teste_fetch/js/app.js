fetch('teste.json')
    .then(response => response.json())
    .then(response => {
    console.log(response.nome);
    console.log(response.idade);
    console.log(response.hobby);
    })