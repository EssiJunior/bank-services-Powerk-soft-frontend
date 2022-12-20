const deposit = document.querySelector(".deposit")
const retrieve = document.querySelector(".retrieve")
const transfer = document.querySelector(".transfer")

const actions = document.querySelector(".actions")
let backButton = document.querySelector("#back-button")

deposit.addEventListener('click', function(event) {
    event.preventDefault()

    html = `
    <div class="form">
        <form action="" id="deposit-form">
        
            <div class="amount">
                <input type="amount" class="input-area" required id="amount-text" />
                <label for="amount-text" class="label">Amount</label>

            </div>
            <div class="message-container">

            </div>
            <div class="validation">
            <input type="button" value="Back" id="back-button">

            <input type="submit" value="Deposit" id="submit-button">

            </div>
        </form>
    </div>`
    actions.innerHTML = html


})
retrieve.addEventListener('click', function(event) {
    event.preventDefault()

    html = `
    <div class="form">
        <form action="" id="withdraw-form">
        
            <div class="amount">
                <input type="amount" class="input-area" required id="amount-text" />
                <label for="amount-text" class="label">Amount</label>

            </div>
            <div class="message-container">

            </div>
            <div class="validation">
            <input type="button" value="Back" id="back-button">

            <input type="submit" value="Withdraw" id="submit-button">

            </div>
        </form>
    </div>`
    actions.innerHTML = html


})
transfer.addEventListener('click', function(event) {
    event.preventDefault()

    html = `
    <div class="form">
        <form action="" id="transfer-form">
        
        <div class="amount">
        <input type="amount" class="input-area" required id="amount-text" />
        <label for="amount-text" class="label">Amount</label>

    </div>
    <div class="username">
        <input type="username" class="input-area" required id="username-text" />
        <label for="username-text" class="label">to user</label>

    </div>
            <div class="message-container">

            </div>
            <div class="validation">
            <input type="button" value="Back" id="back-button">

            <input type="submit" value="Transfer" id="submit-button">

            </div>
        </form>
    </div>`
    actions.innerHTML = html


})
backButton.addEventListener('click', function(event) {
    event.preventDefault()

    html = `
                <div class="deposit">
                    <i class="fas fa-arrow-down-to-bracket"></i>
                    <h3>Deposit ?</h3>
                </div>
                <div class="retrieve">
                    <i class="fas fa-arrow-up-from-bracket"></i>
                    <h3>Withdraw ?</h3>
                </div>
                <div class="transfer">
                    <h3>Send to a friend?</h3>
                </div>`
    actions.innerHTML = html


})