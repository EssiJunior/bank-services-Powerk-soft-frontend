const studentLoginForm = document.querySelector("#student-login-form")
const messageContainer = document.querySelector(".message-container")
const validationContainer = document.querySelector(".validation")

let validated = false
async function validateForm() {
    try {

        var matricule = document.querySelector("#registration-number-text").value

        const response = await fetch("http://localhost:8000/student/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
            },
            body: `username=${matricule}&password=mgp_code`
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

studentLoginForm.addEventListener('submit', function(event) {
    event.preventDefault()

    displayErrorMesage(messageContainer)

})