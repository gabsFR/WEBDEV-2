const busca = document.querySelector('#busca')
const nome = document.querySelector('#nome')
const tipo = document.querySelector('#tipo')


buscarBusca.addEventListener('click', () => {

    let pokemon = busca.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error("Pokémon não encontrado!")
            }
            return resposta.json()
        })
        .then(dados => {
            const barrahp = document.querySelector('#barraHp')
            const barraatk = document.querySelector('#barraAtk')
            const barradf = document.querySelector('#barraDf')
            const barrasp = document.querySelector('#barraSp')

            console.log(dados)
            nome.innerText = dados.name.charAt(0).toUpperCase() + dados.name.slice(1)
            id.innerText = "#" + dados.id

            const tipos = dados.types.map(t => t.type.name)

            tipo.innerText = tipos.join(" / ")

            const cores = {
                fire: "#ea7a3c",
                water: "#539ae2",
                grass: "#71c558",
                electric: "#e5c531",
                poison: "#b468b7",
                psychic: "#e5709b",
                bug: "#94bc4a",
                dark: "#736c75",
                dragon: "#6a7baf",
                fairy: "#e397d1",
                fighting: "#cb5f48",
                flying: "#7da6de",
                ghost: "#846ab6",
                ground: "#cc9f4f",
                ice: "#70cbd4",
                normal: "#aab09f",
                rock: "#b2a061",
                steel: "#89a1b0"
            }

            if (tipos.length === 2) {
                tipo.style.background = `linear-gradient(to right, ${cores[tipos[0]]}, ${cores[tipos[0]]} 20%, ${cores[tipos[1]]} 80%, ${cores[tipos[1]]})`
                tipo.style.color = "#fff"
                tipo.style.borderRadius = "5px"
            } else {
                tipo.style.background = cores[tipos[0]]
                tipo.style.color = "#fff"
                tipo.style.borderRadius = "5px"
            }

            rg.querySelector("img").src = dados.sprites.other.showdown.front_default

            altura.innerText = (dados.height / 10) + "m"
            peso.innerText = (dados.weight / 10) + "kg"

            hp.innerText = "HP: " + dados.stats[0].base_stat
            barrahp.style.width = Math.min(dados.stats[0].base_stat, 100) + "%"
            atk.innerText = "ATK: " + dados.stats[1].base_stat
            barraatk.style.width = Math.min(dados.stats[1].base_stat, 100) + "%"
            df.innerText = "DF: " + dados.stats[2].base_stat
            barradf.style.width = Math.min(dados.stats[2].base_stat, 100) + "%"
            SpAtk.innerText = "SpATK: " + dados.stats[3].base_stat
            barrasp.style.width = Math.min(dados.stats[3].base_stat, 100) + "%"
        })
        .catch(erro => {
            nome.innerText = "Pokémon não encontrado!"
            id.innerText = ""
            tipo.innerText = ""
            rg.querySelector("img").src = ""
            altura.innerText = ""
            peso.innerText = ""
            hp.innerText = ""
            barrahp.style.width = ""
            atk.innerText = ""
            barraatk.style.width = ""
            df.innerText = ""
            barradf.style.width = ""
            SpAtk.innerText = ""
            barrasp.style.width = ""

            console.log(erro)
        })
})
