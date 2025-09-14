const USD = 5.44
const EUR = 6.37
const GBP = 7.35

const form = document.querySelector('form')
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Manipulando input para receber somente NÚMEROS
amount.addEventListener('input', () => {
    const hasCaracterRegex = /\D+/g
    amount.value = amount.value.replace(hasCaracterRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()
    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        let total = amount * price
        if(isNaN(total)) {
            alert("Por favor digite corretamente!")
        }
        total = formatCurrencyBRL(total).replace("R$", "")

        result.textContent = `${total} Reais`
        footer.classList.add('show-result')
    } catch (error) {
        console.log(error)
        footer.classList.remove('show-result')
        alert('Ocorreu um erro. Tente novamente mais tarde!')
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}