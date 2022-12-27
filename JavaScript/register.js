const registrationForm = document.querySelector("#register-form")
const messageContainer = document.querySelector(".message-container")
const validationContainer = document.querySelector(".validation")

let validated = false
async function validateForm() {
    try {
        var username = document.querySelector("#username-text").value
        var password = document.querySelector("#password-text").value
        var confirmPassword = document.querySelector("#confirm-password-text").value
        var bank = document.querySelector("#bank-text").value

        const response = await fetch("https://ekfoka.deta.dev/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                confirm_password: confirmPassword,
                bank: bank
            })
        })

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

async function displayErrorMessage(messageContainer) {

    let response = await validateForm()
    if (validated) {

        messageContainer.innerHTML = ``
        validationContainer.setAttribute("style", "margin-top:6rem;")
        console.log(response)
        window.open("../index.html", "_self")
    } else {
        messageContainer.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p class="error">${response["detail"]}</p>`
        validationContainer.setAttribute("style", "margin-top:2.9rem;")
    }
}
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault()

    displayErrorMessage(messageContainer)
})