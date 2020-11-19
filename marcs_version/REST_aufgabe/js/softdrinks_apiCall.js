"use strict"

//Dynamic content change

const xhrSoftdrink = new XMLHttpRequest();

xhrSoftdrink.open("GET", "https://tonyspizzafactory.herokuapp.com/api/softdrinks", true);
xhrSoftdrink.setRequestHeader("Authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4")

xhrSoftdrink.onreadystatechange = function() {
    let boxSoftdrink = "";
    if (xhrSoftdrink.readyState === 4) {
        if (xhrSoftdrink.status === 200) {
            const jsonSoftdrink = JSON.parse(xhrSoftdrink.responseText);
            
            
            
            for (let i = 0; i < jsonSoftdrink.length; i++ ) {

                
                boxSoftdrink += '<div class="box" id="box'+jsonSoftdrink[i]['id']+'">';
                boxSoftdrink += '   <img class="itemimage" src="'+jsonSoftdrink[i]['imageUrl']+'" alt="image of coke" height="200" width="250">';
                boxSoftdrink += '   <h2 class="subtitle">'+jsonSoftdrink[i]['name']+'</h2>';
                boxSoftdrink += '      <select name="itemselect">';
                boxSoftdrink += '        <option>'+jsonSoftdrink[i]['volume']+'</option>';
                boxSoftdrink += '      </select>';
                boxSoftdrink += '   <button onclick="orderBtn()"  class="feature-icon"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>';
                boxSoftdrink += '   <span class="price">'+jsonSoftdrink[i]['prize']+'</span>';
                boxSoftdrink += '</div>';
            }

            document.getElementById("containerSoftdrinks").innerHTML = boxSoftdrink;

            


};

           

        }
        if (xhrSoftdrink.status === 404) {
            console.log("File or ressource not found.");
        }
    }



xhrSoftdrink.send();

function orderBtn() {
    alert("Button has been clicked!");
}