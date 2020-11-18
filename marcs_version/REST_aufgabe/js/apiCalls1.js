//http requests
const xhrSoftdrink = new XMLHttpRequest();
const xhrPizza = new XMLHttpRequest();
const xhrSalad = new XMLHttpRequest();






//Variables for URL and request headers
xhrSoftdrink.open("GET", "https://tonyspizzafactory.herokuapp.com/api/softdrinks", true);
xhrSoftdrink.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4")

xhrPizza.open("GET", "https://tonyspizzafactory.herokuapp.com/api/pizzas", true);
xhrPizza.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4")

// const pizzaURL = xhr.open("GET", "https://tonyspizzafactory.herokuapp.com/api/pizzas", true);


xhrPizza.onreadystatechange = function() {
    let boxPizza = "";
    if (xhrPizza.readyState === 4) {
        if (xhrPizza.status === 200) {
            const jsonPizza = JSON.parse(xhrPizza.responseText);
            console.log(jsonPizza);
            
            
            
           
                
                for (i = 0; i < jsonPizza.length; i++) {
                
                    boxPizza = '<div class="box" id="box'+jsonPizza[i]['id']+' ">'
                        <{/* img class="itemimage" src="../img/piccante.png" alt="Piccante" height="200" width="250">
                        <h2 class="subtitle">Piccante</h2>
                        <div class="feature-icon"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></div>
                        <span class="price">16$</span>
                        <p class="ingredients">Tomato, mozzarella, spicy salami, chillies, oregano</p> */}
                    boxPizza = '</div>'
    
                }
            }

            document.getElementById("container").innerHTML = boxPizza;

           

        }
        if (xhrPizza.status === 404) {
            console.log("File or ressource not found.");
        
        }
    }





//get json data for softdrinkpage
xhrSoftdrink.onreadystatechange = function() {
    let boxSoftdrink = "";
    if (xhrSoftdrink.readyState === 4) {
        if (xhrSoftdrink.status === 200) {
            const jsonSoftdrink = JSON.parse(xhrSoftdrink.responseText);
            
            
            
            for (i = 0; i < jsonSoftdrink.length; i++ ) {

                
                boxSoftdrink += '<div class="box" id="box'+jsonSoftdrink[i]['id']+'">';
                boxSoftdrink += '   <img class="itemimage" src="'+jsonSoftdrink[i]['imageUrl']+'" alt="image of coke" height="200" width="250">';
                boxSoftdrink += '   <h2 class="subtitle">'+jsonSoftdrink[i]['name']+'</h2>';
                boxSoftdrink += '      <select name="itemselect">';
                boxSoftdrink += '        <option>'+jsonSoftdrink[i]['volume']+'</option>';
                boxSoftdrink += '      </select>';
                boxSoftdrink += '   <div class="feature-icon"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></div>';
                boxSoftdrink += '   <span class="price">'+jsonSoftdrink[i]['prize']+'</span>';
                boxSoftdrink += '</div>';
            }

            document.getElementById("container").innerHTML = boxSoftdrink;

           

        }
        if (xhrSoftdrink.status === 404) {
            console.log("File or ressource not found.");
        }
    }

};




xhrPizza.send();
xhrSoftdrink.send();




