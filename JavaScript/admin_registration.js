const adminRegistrationForm = document.querySelector("#admin-registration-form")
const messageContainer = document.querySelector(".message-container")
const validationContainer = document.querySelector(".validation")

let validated = false
async function validateForm() {
    try {
        var login = document.querySelector("#login-text").value
        var password = document.querySelector("#password-text").value
        var confirmPassword = document.querySelector("#confirm-password-text").value
        var key = document.querySelector("#key-text").value

        const response = await fetch("http://localhost:8000/admin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                mot_de_passe: password,
                confirmer_mot_de_passe: confirmPassword,
                cle_superAdmin: key
            })
        })

        if (!response.ok) {
            validated = false
        } else {
            validated = true
        }

        return response.json()
    } catch (e) {
        console.log(e)
    }
}

async function displayErrorMesage(messageContainer) {

    let response = await validateForm()
    if (validated) {

        messageContainer.innerHTML = ``
        validationContainer.setAttribute("style", "margin-top:6rem;")
        console.log(response)
    } else {
        messageContainer.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p class="error">${response["detail"]}</p>`
        validationContainer.setAttribute("style", "margin-top:2.9rem;")
    }
}
adminRegistrationForm.addEventListener('submit', function(event) {
    event.preventDefault()

    displayErrorMesage(messageContainer)
})