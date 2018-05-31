let coffeeContainer = document.getElementById('coffeeContainer')
let addEmailTextBox = document.getElementById('addEmailTextBox')
let addOrderTextBox = document.getElementById('addOrderTextBox')
let showBtn = document.getElementById('showBtn')
let addEmailBtn = document.getElementById('addEmailBtn')
let orderContainer = document.getElementById('orders')

let mainAPI = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders/'

showBtn.addEventListener('click',function(){
    fetch(mainAPI)
    .then(function(response){
        return response.json()
    }).then(function(orders){
        for(order in orders) {
            console.log(orders[order]['coffee'])

            let showOrder = 
            `
            <div>

            
            <p>${orders[order]['emailAddress']} | ${orders[order]['coffee']}</p>

            </div>
            `

            coffeeContainer.innerHTML += showOrder
    
    }
})

})
addOrderBtn.addEventListener('click', function(){


    console.log('click')



let addOrder = addOrderTextBox.value
let addEmail = addEmailTextBox.value
let withEmail = mainAPI+addEmail

let order = {
    coffee: addOrder, // user enter
    emailAddress: addEmail, // user enter
    // quantity : 12
  }
  
  console.log(order)
  // console.log(JSON.stringify(order))
  
  
  fetch(mainAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  }).then(function(response){
    return response.json()
  }).then(function(json){
    // console.log(json)
  })
  
})









