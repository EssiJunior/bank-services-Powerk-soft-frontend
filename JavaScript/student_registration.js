const studentRegistrationForm = document.querySelector("#student-registration-form")
const messageContainer = document.querySelector(".message-container")
const validationContainer = document.querySelector(".validation")

let validated = false
async function validateForm() {
    try {

        var registrationNumber = document.querySelector("#registration-number-text").value
        var uName = document.querySelector("#name-text").value
        var firstName = document.querySelector("#first-name-text").value
        var sex = document.querySelector("#sex-text").value
        var optionCode = document.querySelector("#option-code-text").value

        const response = await fetch("http://localhost:8000/student", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                nom: uName,
                prenom: firstName,
                matricule: registrationNumber,
                sexe: sex,
                code_filiere: optionCode
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

studentRegistrationForm.addEventListener('submit', function(event) {
    event.preventDefault()

    displayErrorMesage(messageContainer)

})