"use strict"

//Dynamic content change

const xhrPizza = new XMLHttpRequest();

xhrPizza.open("GET", "https://tonyspizzafactory.herokuapp.com/api/pizzas", true);
xhrPizza.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4");

xhrPizza.onreadystatechange = function() {
    let boxPizza = "";
    if (xhrPizza.readyState === 4) {
        if (xhrPizza.status === 200) {
            const jsonPizza = JSON.parse(xhrPizza.responseText);
            console.log(jsonPizza[0]['ingredients'][0]);
            
            
            
           
                
                for (let i = 0; i < jsonPizza.length; i++) {
                
                    boxPizza += '<div class="box" id="pizzaBox'+jsonPizza[i]['id']+' ">';
                    boxPizza +=     '<img class="itemimage" src="'+jsonPizza[i]['imageUrl']+'" alt="Piccante" height="200" width="250">';
                    boxPizza +=     '<h2 class="subtitle">'+jsonPizza[i]['name']+'</h2>';
                    boxPizza +=     '<button onclick="orderBtn()" class="feature-icon"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>';
                    boxPizza +=     '<span class="price">'+jsonPizza[i]['prize']+'</span>';
                    boxPizza +=     '<p class="ingredients">'+jsonPizza[i]['ingredients']+' </p>'
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

function orderBtn() {
    alert("Button has been clicked!");
};