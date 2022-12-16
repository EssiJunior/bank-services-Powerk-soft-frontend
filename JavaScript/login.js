const adminLoginForm = document.querySelector("#login-form")
const messageContainer = document.querySelector(".message-container")
const validationContainer = document.querySelector(".validation")

let validated = false
async function validateForm() {
    try {

        var username = document.querySelector("#username-text").value
        var password = document.querySelector("#password-text").value

        const response = await fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/json'
            },
            body: `username=${username}&password=${password}`
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

        let url = ""
        if (response["user"] === "admin") {
            url = "../dashboard_admin.html"
        } else if (response["user"] === "user") {
            url = "../main.html"
        } else {
            console.log("Unknown user type.")
        }
        window.open(url, "_self")

    } else {
        messageContainer.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <p class="error">${response["detail"]}</p>`
        validationContainer.setAttribute("style", "margin-top:2.9rem;")
    }
}

adminLoginForm.addEventListener('submit', function(event) {
    event.preventDefault()

    displayErrorMesage(messageContainer)

})