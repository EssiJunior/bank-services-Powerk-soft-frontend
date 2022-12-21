const getElement = (selector) => {
    const element = document.querySelector(selector)

    if (element) return element
    throw Error(
        `Please double check your class names, there is no selector ${selector}`
    )
}

async function getUsername() {
    try {
        const response = await fetch("http://localhost:8000/user")

        if (!response.ok) {
            validated = false
        } else {
            validated = true
        }

        let result = response.json()
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    }
}
const deposit = getElement(".deposit")
const retrieve = getElement(".retrieve")
const transfer = getElement(".transfer")

const form1 = getElement(".form-1")

const form2 = getElement(".form-2")

const form3 = getElement(".form-3")

const actions = getElement(".actions")
const backButton1 = getElement("#back-button-1")
const backButton2 = getElement("#back-button-2")
const backButton3 = getElement("#back-button-3")

const username = getElement("#username")

const balance = getElement("#money")

const tokenD = window.localStorage.getItem("token")
const logout = getElement(".logout")

console.log(tokenD)
async function getUser() {
    try {
        const response = await fetch("http://localhost:8000/user/this", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 'token': tokenD })
        }).then((res) => res.json())

        result = response
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    }
}
let amount = 0
const depositForm = getElement("#deposit-form")
const withdrawForm = getElement("#withdraw-form")
const transferForm = getElement("#transfer-form")

depositForm.addEventListener('submit', function(event) {
    event.preventDefault()

    updateValues("deposit")
})

withdrawForm.addEventListener('submit', function(event) {
    event.preventDefault()

    updateValues("retrieve")
})
transferForm.addEventListener('submit', function(event) {
    event.preventDefault()

    updateInfoTransfer()
})
async function transaction(amount, transactionID) {
    try {
        const response = await fetch(`http://localhost:8000/user/${transactionID}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'amount': amount,
                'token': tokenD
            })
        }).then((res) => res.json())

        result = response
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    }
}

async function transferToUser(amount, toUsername) {
    try {
        const response = await fetch(`http://localhost:8000/user/transfer`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 'amount': amount, 'token': tokenD, "to_user": toUsername })
        }).then((res) => res.json())

        result = response
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    }
}

async function updateValues(transactionID) {
    const depositValue = getElement("#deposit-amount-text").value
    const withdrawValue = getElement("#withdraw-amount-text").value

    if (transactionID === "deposit") {
        amount = parseInt(depositValue)

    } else if (transactionID === "retrieve") {
        amount = parseInt(withdrawValue)

    }
    let response = await transaction(amount, transactionID)

    money.innerHTML = response.new_balance
}

async function updateInfoTransfer() {
    const transferAmount = getElement("#transfer-amount-text").value
    const toUser = getElement("#transfer-username-text").value

    amount = parseInt(transferAmount)

    let response = await transferToUser(amount, toUser)


    money.innerHTML = response.new_balance
}

async function initializeValues() {
    let user = await getUser()
    console.log(user.username)

    username.innerHTML = user.username
    money.innerHTML = user.money
}

initializeValues()

deposit.addEventListener('click', function(event) {
    event.preventDefault()

    deposit.style.display = "none";
    retrieve.style.display = "none";
    transfer.style.display = "none";
    form1.style.display = "block";
})
retrieve.addEventListener('click', function(event) {
    event.preventDefault()

    deposit.style.display = "none";
    retrieve.style.display = "none";
    transfer.style.display = "none";
    form2.style.display = "block";
})
transfer.addEventListener('click', function(event) {
    event.preventDefault()


    deposit.style.display = "none";
    retrieve.style.display = "none";
    transfer.style.display = "none";
    form3.style.display = "block";
})
backButton1.addEventListener('click', function(event) {
    event.preventDefault()


    deposit.style.display = "flex";
    retrieve.style.display = "flex";
    transfer.style.display = "flex";
    form1.style.display = "none";
})
backButton2.addEventListener('click', function(event) {
    event.preventDefault()


    deposit.style.display = "flex";
    retrieve.style.display = "flex";
    transfer.style.display = "flex";
    form2.style.display = "none";
})
backButton3.addEventListener('click', function(event) {
    event.preventDefault()


    deposit.style.display = "flex";
    retrieve.style.display = "flex";
    transfer.style.display = "flex";
    form3.style.display = "none";
})

logout.addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.clear()

    window.open("../index.html", "_self")
})