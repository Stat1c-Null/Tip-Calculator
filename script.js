//Calculate Tip
function calculateTip(){
    let billAmount = document.getElementById("billAmount").value
    let serviceQuality = document.getElementById("serviceQuality").value
    let numberOfGuests = document.getElementById("people").value

    //Check if input is empty
    if(billAmount === NaN || serviceQuality == 0 || numberOfGuests === NaN) {
        alert("Please Enter Valid Values")
    }   
    //Dont let user enter values less than 0
    if(billAmount <= 0 || numberOfGuests <= 0){
        alert("Enter a value bigger than 0")
    }

    //Calculate Tip
    let total = (billAmount * serviceQuality) / numberOfGuests //Tip Formula
    //Calculate Bill + Tip
    //Round to two decimal Places
    total = Math.round(total * 100) / 100
    //Only show 2 decimal points after number
    total = total.toFixed(2)
    let TippedBill = billAmount / numberOfGuests
    TippedBill = Math.round(TippedBill)
    TippedBill = TippedBill.toFixed(2)
    let Bill = parseFloat(TippedBill) + parseFloat(total)
    //Display Tip
    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total
    document.getElementById("bill").innerHTML = Bill 
}

//click button to calculate
document.getElementById("calculateButton").onclick = function() {
    calculateTip()
}