// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");
let titles = document.querySelectorAll(".title")
const adminsSection = document.querySelector("#admins-section")
const section = document.querySelector(".details")

function showAdminSection() {
    let html = `
    <div class="recentOrders">
        <div class="cardHeader">
            <h2>Admins</h2>
            <div class="options">
                <input type="button" class="view-all all-admins-v btn" value="View all">
                <input type="button" class="delete-all btn" all-admins-d value="Delete all">
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <td>Number</td>
                    <td>Login</td>
                </tr>
            </thead>

            <tbody id="admins">

            </tbody>
        </table>
    </div>`

    section.innerHTML = html
    console.log("Inside")
}

function showStudentSection() {
    let html = `
    <div class="recentOrders">
        <div class="cardHeader">
            <h2>Students</h2>
            <div class="options">
                <input type="button" class="view-all all-students-v btn" value="View all">
                <input type="button" class="delete-all all-students-d btn" value="Delete all">
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>First name</td>
                    <td>Registration number</td>
                    <td>Sex</td>
                    <td>Option</td>
                    <td>MGP</td>
                </tr>
            </thead>

            <tbody id="students">

            </tbody>
        </table>
    </div>`

    section.innerHTML = html
    console.log("Inside")


}

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

function changeContent() {
    console.log(this.textContent)
    switch (this.textContent) {
        case "Dashboard":
            console.log("In dash")
            break;
        case "Admins":
            console.log("In ad")
            showAdminSection()
            break;
        case "Students":
            console.log("In st")
            showStudentSection()
            break;
        case "Options":
            console.log("In op")
            break;
        case "Results":
            console.log("In res")
            break;
        case "Subjects":
            console.log("In sub")
            break;

        default:
            break;
    }
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));
titles.forEach((item) => item.addEventListener("click", changeContent));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function() {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};