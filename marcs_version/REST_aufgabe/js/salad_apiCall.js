"use strict"

const xhrSalad = new XMLHttpRequest();
xhrSalad.open("GET", "https://tonyspizzafactory.herokuapp.com/api/salads", true);
xhrSalad.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");

xhrSalad.onreadystatechange = function () {
    let boxSalad = "";
    if (xhrSalad.readyState === 4) {
        if (xhrSalad.status === 200) {
            let jsonSalad = JSON.parse(xhrSalad.responseText);


            for (let i = 0; i < jsonSalad.length; i++) {
                boxSalad += '<div class="box" id="box' + jsonSalad[i]['id'] + '" >';
                boxSalad += '<img class="itemimage" src=' + jsonSalad[i]['imageUrl'] + '" alt="Green salad with tomatoe" height="200" width="250">';
                boxSalad += '<h2 class="subtitle" id="saladname' + jsonSalad[i]['id'] + '">' + jsonSalad[i]['name'] + '</h2>';
                boxSalad += '<p class="ingredients">' + jsonSalad[i]['ingredients'] + '</p>';
                boxSalad += '<select name="itemselect">';
                boxSalad += '<option> Italian Dressing </option>';
                boxSalad += '<option> French Dressing </option>';
                boxSalad += '</select>'
                boxSalad += '<button onclick="orderBtn(' + jsonSalad[i]['id'] + ')"  class="feature-icon"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>';
                boxSalad += '<span class="price">' + jsonSalad[i]['prize'] + '</span>'
                boxSalad += '</div>';
            }
        }
        if (xhrSalad.status === 404) {
            console.log("Ressource not found");
        }

        document.getElementById('containerSalad').innerHTML = boxSalad;

    }
}
xhrSalad.send();

function orderBtn(id) {

    const xhrSaladOrder = new XMLHttpRequest();
    xhrSaladOrder.open("POST", "https://tonyspizzafactory.herokuapp.com/api/orders", true);

    xhrSaladOrder.onreadystatechange = function () {
        if (xhrSaladOrder.readyState === 4 && xhrSaladOrder.status === 201) {

            alert("Order has been successfully saved");
        }
        if (xhrSaladOrder.readyState === 4 && xhrSaladOrder.status > 300) {
            console.log("Bad stuff");
            console.log(pizzaJson);
            console.log(xhrPizzaOrder.status);
        }

    };

    xhrSaladOrder.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4")
    xhrSaladOrder.setRequestHeader("Accept", "application/json");
    xhrSaladOrder.setRequestHeader("Content-type", "application/json");






    let saladType = document.getElementById("saladname" + id).innerHTML;
    console.log(saladType);

    // console.log(pizzaType)
    let postSaladData = {
        id: id,
        type: "salad",
        name: saladType
    };


    let saladJson = JSON.stringify(postSaladData);
    console.log(saladJson)

    xhrSaladOrder.send(saladJson);
};