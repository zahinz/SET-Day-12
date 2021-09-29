console.log(`TEST`);

// let priceInput1 = document.getElementById(`priceInput1`)
// let priceInput2 = document.getElementById(`priceInput2`)
// let priceInput3 = document.getElementById(`priceInput3`)

// let qtyInput1 = document.getElementById(`qtyInput1`)
// let qtyInput2 = document.getElementById(`qtyInput2`)
// let qtyInput3 = document.getElementById(`qtyInput3`)

// let subtotalOutput1 = document.getElementById(`subtotal1`)
// let subtotalOutput2 = document.getElementById(`subtotal2`)
// let subtotalOutput3 = document.getElementById(`subtotal3`)

// let grandTotal = document.getElementById(`grandTotal`)

// // let subTotal1 = 0
// // let subTotal1 = 0
// // let subTotal3 = 0

// // function doCal() {
// //     console.log (Number(amountInput.value)) ;
// // }

// // setInterval ( function calcSubTotal() {
// //     let subtotalValue = Number(priceInput.value) + Number(qtyInput.value)

// //     console.log(subtotalValue);

// // }, 500);

// function calcItem1 () {
//     console.log("item1 price ", priceInput1.value, "item1 quantity ", qtyInput1.value);
//     let price = Number(priceInput1.value)
//     let quantity = Number(qtyInput1.value)
//     subTotal1 = price * quantity
//     console.log(price * quantity);
//     subtotalOutput1.innerHTML = subTotal1
//     return subTotal1
// }

// function calcItem2 () {
//     console.log("item2 price ", priceInput2.value, "item2 quantity ", qtyInput2.value);
//     let price = Number(priceInput2.value)
//     let quantity = Number(qtyInput2.value)
//     subTotal2 = price * quantity
//     console.log(price * quantity);
//     subtotalOutput2.innerHTML = subTotal2
//     return subTotal2
// }

// function calcItem3 () {
//     console.log("item3 price ", priceInput3.value, "item3 quantity ", qtyInput3.value);
//     let price = Number(priceInput3.value)
//     let quantity = Number(qtyInput3.value)
//     subTotal3 = price * quantity
//     console.log(price * quantity);
//     subtotalOutput3.innerHTML = subTotal3
//     return subTotal3
// }

// function calcTotal() {
//     console.log(subTotal1, subTotal2, subTotal3, );
//     let grandTotalOutput = subTotal1 + subTotal2 + subTotal3
//     grandTotal.innerHTML = grandTotalOutput


// }

let container = document.getElementById(`container`)

let node = document.createTextNode("This is new input")

let newInput = document.createElement(`input`)

let listHolder = document.getElementById(`listHolder`)




function addNewItem() {

    // ? create new div
    let newDiv = document.createElement(`div`);
    newDiv.classList.add(`row`)
   

    // ? create priceInput
    let priceInput = document.createElement(`input`);
    priceInput.onchange = validation;
    priceInput.setAttribute("type", "number")

    // ? create quantity input
    let qtyInput = document.createElement(`input`);
    qtyInput.onchange = validation;
    qtyInput.setAttribute("type", "number")

    // ? create subtotal para
    let subtotalOutput = document.createElement(`p`)
    subtotalOutput.classList.add(`subtotal`)
    subtotalOutput.innerHTML = "0"


    // ? what to put inside the div which will be created
    newDiv.append(priceInput)
    newDiv.append(qtyInput)
    newDiv.append(subtotalOutput)


    // ? create the dov
    listHolder.append(newDiv);
}

function validation () {
    // ! NEW KNOWLEDGE HERE
    // ? the parent element of the html
    console.log(this.parentNode);

    // declare the parentNode
    let listNode = this.parentNode;

    // get the input element
    // ? querySelectorAll will return as array
    let inputList = listNode.querySelectorAll(`input`)

    // calculate the input value onchange()
    let subTotal = Number(inputList[0].value) * Number (inputList[1].value)

    console.log(subTotal);


    // change the p
    // ? querySelector only return the first HTML element
    listNode.querySelector(`p`).innerHTML = subTotal
}


