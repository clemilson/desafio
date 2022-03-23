#### Opções para rodar a aplicação
1. Possui DOCKER na máquina, executar o comando **npm run up**
2. Não possui DOCKER e está no windowns, executar o comando **npm run dev**
3. Não possui DOCKER e está no linux, executar o comando **npm run start**


### # Exemplo de retorno com 3 endereços
URL para chamar a API (METÓDO GET): *http://localhost:3000/api/searchDistanceAdresses?adresses=Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003; Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200; Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280030*

###### Obs. Os endereções precisam ser separado por *;*
## Retorno da chamada com os dados acima
```{
    "adresses": [
        {
            "from": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil",
            "to": "Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil",
            "distanceKm": 1.32
        },
        {
            "from": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil",
            "to": "R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil",
            "distanceKm": 5.99
        },
        {
            "from": "Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil",
            "to": "R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil",
            "distanceKm": 5.54
        }
    ],
    "closer": {
        "from": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil",
        "to": "Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil",
        "distanceKm": 1.32
    },
    "away": {
        "from": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil",
        "to": "R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil",
        "distanceKm": 5.99
    }
}
```
