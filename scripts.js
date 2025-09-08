const amount = document.querySelector("#amount")

// Manipulando input para receber somente NÚMEROS
amount.addEventListener('input', () => {
    const hasCaracterRegex = /\D+/g
    amount.value = amount.value.replace(hasCaracterRegex, "")
})