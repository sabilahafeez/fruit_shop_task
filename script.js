//on click subtract function
function subtract(elem) {
    //get total budget
    let total_budget = document.querySelector("#total-budget span");
    if (total_budget.innerHTML == 0) {
        alert("Your budget is insufficient!!")
    } else {
        //get .product-div
        let parent = elem.parentElement;
        //get quantity
        let input = parent.getElementsByTagName('input')[0];
        if (input.value == 0) {
            alert("There is no quantity left!!")

        } else {
            //get .product
            let grandParent = parent.parentElement;
            //get product price
            let price = grandParent.getElementsByClassName("price-value")[0].innerHTML;
            //set quantity
            input.value = parseInt(input.value) - 1;
            //get remaining budget
            let remaining_budget = document.querySelector("#remaining-budget span");
            //set remaining budget
            remaining_budget.innerHTML = parseInt(remaining_budget.innerHTML) + parseInt(price);

        }
    }
}

//on click add function
function add(elem) {
    //get total budget
    let total_budget = document.querySelector("#total-budget span");
    if (total_budget.innerHTML == 0) {
        alert("Your budget is insufficient!!")
    } else {
        //get .product-div
        let parent = elem.parentElement;
        //get .product
        let grandParent = parent.parentElement;
        //get product price
        let price = grandParent.getElementsByClassName("price-value")[0].innerHTML;
        //get quantity
        let input = parent.getElementsByTagName('input')[0];
        //get remaining budget
        let remaining_budget = document.querySelector("#remaining-budget span");
        if (parseInt(remaining_budget.innerHTML) < parseInt(price)) {
            alert("You dont have sufficient amount to purchase this fruit!!");
        } else {
            //set quantity
            input.value = parseInt(input.value) + 1;
            //set remaining budget
            remaining_budget.innerHTML = parseInt(remaining_budget.innerHTML) - parseInt(price);
        }
    }
}

//on click submit bugdet function
function submitBudget() {
    //get previous budget 
    let previous_budget = document.querySelector("#total-budget span").innerHTML;
    //get entered budget
    let budget = document.querySelector(".budget").value;
    if (budget == "" || budget == 0) {
        alert("Please enter your budget!!")
    } else {
        //get total budget
        let total_budget = document.querySelector("#total-budget span");
        //set total budget
        total_budget.innerHTML = parseInt(budget);
        //set remaining budget
        document.querySelector("#remaining-budget span").innerHTML = parseInt(budget) - parseInt(previous_budget);
    }
}