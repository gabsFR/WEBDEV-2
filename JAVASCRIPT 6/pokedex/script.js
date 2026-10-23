        const busca = document.querySelector('#busca')
        const nome = document.querySelector('#nome')
        const tipo = document.querySelector('#tipo')

        busca.addEventListener('input', ()=> {

            let pokemon = busca.value


            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados)
                nome.innerText = dados.name
                tipo.innerText = dados.types[0].type.name
            });
        })


        
