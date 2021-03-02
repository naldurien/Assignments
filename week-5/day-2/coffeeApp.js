let allCoffeesContainer = document.getElementById("allCoffeesContainer")
let searchCoffeesContainer = document.getElementById("searchCoffeesContainer")
let btnAllCoffees = document.getElementById("btnAllCoffees")
let btnSubmitNewCoffee = document.getElementById("btnSubmitNewCoffee")
let coffeeURL = "https://troubled-peaceful-hell.glitch.me/orders"
const addEmailTextBox = document.getElementById("addEmailTextBox")
const addCoffeeTypeTextBox = document.getElementById("addCoffeeTypeTextBox")
const addSizeTextBox = document.getElementById("addSizeTextBox")
const addPriceTextBox = document.getElementById("addPriceTextBox")
let successfulActionMessageContainer = document.getElementById("successfulActionMessageContainer")
let deleteByEmailTextBox = document.getElementById("deleteByEmailTextBox")
let btnDeleteOrder = document.getElementById("btnDeleteOrder")
let searchByEmailTextBox = document.getElementById("searchByEmailTextBox")
let btnSearchOrder = document.getElementById("btnSearchOrder")

function displayAllCoffees() {
    successfulActionMessageContainer.value = ""
    let getRequest = new XMLHttpRequest()
    getRequest.addEventListener('load', function() {
    let result = JSON.parse(this.responseText)
    let coffeeItems = result.map((coffee) => {
        return `
                <div class="coffees">
                <b>Customer Email: ${coffee.email}</b>
                <p>Item Ordered: ${coffee.type}</p>
                <p>Size: ${coffee.size}</p>
                <p>Price: $${coffee.price}</p><br><br>
                </div>
                `
    })
    allCoffeesContainer.innerHTML = coffeeItems.join("")
    })

    getRequest.open('GET', coffeeURL)
    getRequest.send()
}

btnAllCoffees.addEventListener("click", function() {
    displayAllCoffees()
})

btnSubmitNewCoffee.addEventListener("click", function() {
    const email = document.getElementById("addEmailTextBox").value
    const type = document.getElementById("addCoffeeTypeTextBox").value
    const size = document.getElementById("addSizeTextBox").value
    const price = parseFloat(document.getElementById("addPriceTextBox").value)
    
    const requestParams = {
        email,
        type,
        size,
        price
    }

    let postRequest = new XMLHttpRequest()
    postRequest.addEventListener('load', function() {
      let message = `<div class="coffees">
                    <i>The following order has been successfully added:</i>
                    <p>Customer Email: ${email}</p>
                    <p>Item Ordered: ${type}</p>
                    <p>Size: ${size}</p>
                    <p>Price: $${price}</p><br><br>
                    </div>
                    `
        displayAllCoffees()
        successfulActionMessageContainer.innerHTML = message
        
        addEmailTextBox.value = ""
        addCoffeeTypeTextBox.value = ""
        addSizeTextBox.value = ""
        addPriceTextBox.value = ""
        })
    
    postRequest.open('POST', coffeeURL)
    postRequest.setRequestHeader("Content-Type", "application/json")
    postRequest.send(JSON.stringify(requestParams))

})

btnDeleteOrder.addEventListener("click", function() {
    const email = deleteByEmailTextBox.value
    let deleteRequest = new XMLHttpRequest()
    let deleteURL = `https://troubled-peaceful-hell.glitch.me/orders/${email}`
    
    deleteRequest.addEventListener('load', function() {
        let message = `<div class="coffees">
        <i>The coffee order for the following customer has been successfully deleted:</i>
        <p>Customer Email: ${email}</p>
        </div>
        `
        displayAllCoffees()
        successfulActionMessageContainer.innerHTML = message
        deleteByEmailTextBox.value = ""
    })

    deleteRequest.open('DELETE', deleteURL)
    deleteRequest.send()
    
})

// btnSearchOrder.addEventListener("click", function() {
//     const email = searchByEmailTextBox.value
//     let searchRequest = new XMLHttpRequest()
//     let searchURL = `https://troubled-peaceful-hell.glitch.me/orders/${email}`
    
//     searchRequest.addEventListener('load', function() {
//         console.log("yo")
        

//     searchRequest.open('GET', searchURL)
//     searchRequest.send()
//     })
// })

btnSearchOrder.addEventListener("click", function() {
    const email = searchByEmailTextBox.value
    let searchRequest = new XMLHttpRequest()
    let searchURL = `https://troubled-peaceful-hell.glitch.me/orders/${email}`
    
    searchRequest.addEventListener('load', function() {
        let coffee = JSON.parse(this.responseText)
        let message = `
                        <div class="coffees">
                        <b>Your Search Result:</b><br>
                        <p>Customer Email: ${coffee.email}</p>
                        <p>Item Ordered: ${coffee.type}</p>
                        <p>Size: ${coffee.size}</p>
                        <p>Price: $${coffee.price}</p><br><br>
                        </div>
                        `
        successfulActionMessageContainer.innerHTML = message
        searchByEmailTextBox.value = ""
    })

    searchRequest.open('GET', searchURL)
    searchRequest.send()
})
