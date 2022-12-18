const deposit = document.querySelector(".deposit")
const retrieve = document.querySelector(".retrieve")
const transfer = document.querySelector(".transfer")

const actions = document.querySelector(".actions")


deposit.addEventListener('click', function(event) {
    event.preventDefault()

    html = `
    <div class="deposit">
        <i class="fas fa-arrow-down-to-bracket"></i>
        <h3>Deposit ?</h3>
    </div>
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