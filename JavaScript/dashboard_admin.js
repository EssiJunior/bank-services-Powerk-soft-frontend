const viewAllAdmins = document.querySelector(".view-all")
const viewAllStudents = document.querySelector(".all-students-v")
const adminsContainer = document.querySelector("#admins")

let response = []


async function displayAllAdmins() {
    try {
        response = await fetch("http://localhost:8000/admin/all").then(data => data.json())
            .then(res => {
                // console.log(res)
                return res
            })
        console.log(response)

        let html = ""
        for (let index = 0; index < response.length; index++) {
            const element = response[index];
            html += `<tr>
                <td>${index+1}</td>
                <td>${element["login"]}</td>
                <td>
                    <div class="options">
                        <input type="button" class="view-all btn" value="Modify">
                        <input type="button" class="delete-all btn" value="Delete">
                    </div>
                </td>
            </tr>`
        }

        adminsContainer.innerHTML = html

    } catch (e) {
        console.log(e)
    }
}
async function displayAllStudents() {
    try {
        response = await fetch("http://localhost:8000/student/all").then(data => data.json())
            .then(res => {
                // console.log(res)
                return res
            })
        console.log(response)

        let html = ""
        for (let index = 0; index < response.length; index++) {
            const element = response[index];
            html += `<tr>
                <td>${index+1}</td>
                <td>${element["login"]}</td>
                <td>
                    <div class="options">
                        <input type="button" class="view-all btn" value="Modify">
                        <input type="button" class="delete-all btn" value="Delete">
                    </div>
                </td>
            </tr>`
        }

        adminsContainer.innerHTML = html

    } catch (e) {
        console.log(e)
    }
}
// async function displayAdmins(messageContainer) {

//     let response = await validateForm()
//     if (validated) {

//         messageContainer.innerHTML = ``
//         validationContainer.setAttribute("style", "margin-top:6rem;")
//         console.log(response)
//     } else {
//         messageContainer.innerHTML = `
//         <i class="fa-solid fa-triangle-exclamation"></i>
//         <p class="error">${response["detail"]}</p>`
//         validationContainer.setAttribute("style", "margin-top:2.9rem;")
//     }
// }

viewAllAdmins.addEventListener("click", displayAllAdmins);