"use strict"

//Dynamic content change

const xhrPizza = new XMLHttpRequest();

xhrPizza.open("GET", "https://tonyspizzafactory.herokuapp.com/api/pizzas", true);
xhrPizza.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");

xhrPizza.onreadystatechange = function () {
    let boxPizza = "";
    if (xhrPizza.readyState === 4) {
        if (xhrPizza.status === 200) {
            const jsonPizza = JSON.parse(xhrPizza.responseText);










            for (let i = 0; i < jsonPizza.length; i++) {

                boxPizza += '<div class="box" id="pizzaBox' + jsonPizza[i]['id'] + ' ">';
                boxPizza += '<img class="itemimage" src="' + jsonPizza[i]['imageUrl'] + '" alt="Piccante" height="200" width="250">';
                boxPizza += '<h2 class="subtitle" id="pizzaname' + jsonPizza[i]['id'] + '" >' + jsonPizza[i]['name'] + '</h2>';
                boxPizza += '<button id="order' + jsonPizza[i]['id'] + '" onclick="orderBtn(' + jsonPizza[i]['id'] + ')" class="feature-icon"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>';
                boxPizza += '<span class="price">' + jsonPizza[i]['prize'] + '</span>';
                boxPizza += '<p class="ingredients">' + jsonPizza[i]['ingredients'] + ' </p>'
                boxPizza += '</div>';






            }

            document.getElementById('containerPizza').innerHTML = boxPizza;

        }







    }
    if (xhrPizza.status === 404) {
        console.log("File or ressource not found.");

    }




};





xhrPizza.send();

function orderBtn(id) {

    const xhrPizzaOrder = new XMLHttpRequest();
    xhrPizzaOrder.open("POST", "https://tonyspizzafactory.herokuapp.com/api/orders", true);

    xhrPizzaOrder.onreadystatechange = function () {
        if (xhrPizzaOrder.readyState === 4 && xhrPizzaOrder.status === 201) {
            console.log(xhrPizzaOrder.status);
            alert("Order has been successfully saved");
        }
        if (xhrPizzaOrder.readyState === 4 && xhrPizzaOrder.status > 300) {
            console.log("Bad stuff");
            console.log(pizzaJson);
            console.log(xhrPizzaOrder.status);
        }

    };

    xhrPizzaOrder.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4")
    xhrPizzaOrder.setRequestHeader("Accept", "application/json");
    xhrPizzaOrder.setRequestHeader("Content-type", "application/json");






    let pizzaType = document.getElementById("pizzaname" + id).innerHTML
    console.log(pizzaType)

    // console.log(pizzaType)
    let postPizzaData = {
        id: id,
        type: "pizza",
        name: pizzaType
    };


    let pizzaJson = JSON.stringify(postPizzaData);

    xhrPizzaOrder.send(pizzaJson);
};

