var cart=[];

/*function for saving the data into the localstorage*/
function saveCart(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

/*function for updating price and no of items */
function updateValues(){
    var totalItems=0;
    var totalPrice=0;
    cart.map(function(item){
        totalItems+=item.numberOfItem;
        totalPrice+=(item.numberOfItem*item.price)
    })
    document.querySelector(".priceOfTotalItems").textContent=`₹${totalPrice}`;
    var overallTotalPriceNum=totalPrice+25+4;
    document.querySelectorAll(".overallTotalPrice").forEach(function(item){
        item.textContent=`₹${overallTotalPriceNum}`;
    })
    document.querySelector("#cartButton>p").textContent=`${totalItems} items ₹${totalPrice}`
    document.querySelector(".itemCell").textContent=`Shipment of ${totalItems} items`;
    if(totalPrice==0){
        document.querySelector("#cartButton>p").textContent=`My Cart`;
    }
}

function addItemToCartWithAdd(event) {
    var cartProductDiv=event.target.closest(".cartProduct");
    if(cartProductDiv){
        var itemName=cartProductDiv.querySelector(".itemName").textContent;
        var addingItem=cart.find(function(item){
            return item.name.toLowerCase()==itemName.toLowerCase();
        })
        addingItem.numberOfItem+=1;
        cartProductDiv.querySelector(".numberOfItemDiv").textContent=addingItem.numberOfItem;
        updateValues();
        saveCart();
    }
    var cell=event.target.closest(".cell");
    if(cell){
        var itemName=cell.querySelector(".itemName").textContent;
        var addingItem=cart.find(function(item){
            return item.name.toLowerCase()==itemName.toLowerCase();
        })
        addingItem.numberOfItem+=1;
        cell.querySelector(".numberOfItemDiv").textContent=addingItem.numberOfItem;
        renderCart();
        saveCart();
        updateValues();
    }
}

function removingItemToCartWithAdd(event) {
    var cartProductDiv=event.target.closest(".cartProduct");
    if(cartProductDiv){
        var itemName=cartProductDiv.querySelector(".itemName").textContent;
        var addingItem=cart.find(function(item){
            return item.name.toLowerCase()==itemName.toLowerCase();
        })
        addingItem.numberOfItem-=1;
        cartProductDiv.querySelector(".numberOfItemDiv").textContent=addingItem.numberOfItem;
        updateValues();
        saveCart();
        if(addingItem.numberOfItem<1){
            var itemIndex = cart.indexOf(addingItem);
            cart.splice(itemIndex, 1);
            cartProductDiv.remove();
            renderCart();
            saveCart();
            updateValues();
        }
    }
    var cell=event.target.closest(".cell");
    if(cell){
        var itemName=cell.querySelector(".itemName").textContent;
        var addingItem=cart.find(function(item){
            return item.name.toLowerCase()==itemName.toLowerCase();
        })
        addingItem.numberOfItem-=1;
        cell.querySelector(".numberOfItemDiv").textContent=addingItem.numberOfItem;
        updateValues();
        saveCart();
        if(addingItem.numberOfItem<1){
            var itemIndex = cart.indexOf(addingItem);
            cart.splice(itemIndex, 1);
            cell.querySelector(".addingProductToCart").innerHTML="Add";
            renderCart();
            saveCart();
            updateValues();
        }
    }
}

/*function modal is redered*/
function cartModal(){
    var modalContent= `
    <div class="modal">
        <div class="cart">
            <div>
                <p>My Cart</p>
                <div class="closeCart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></div>
            </div>
            <div>
                
            </div>
        </div>
    </div>`
    document.querySelector("body").innerHTML +=modalContent;
}

/*function for closing the cart*/
function closeCartModal(event){
    document.querySelector(".modal").classList.remove("show");
    homePageRender();
    attachEvents();
}

/*function for adding items to cart*/
function renderProductsCart(){
    var newProduct=cart.map(function(addingItem){
        return `
        <div class="cartProduct">
            <div>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/${addingItem.imgLink}" alt="">
            </div>
            <div>
                <h5 class="itemName">${addingItem.name}</h5>
                <p>${addingItem.qty}</p>
                <h4>₹${addingItem.price}</h4>
            </div>
            <div>
                <div class="addingProductsButton">
                    <div class="removeItem">-</div>
                    <div class="numberOfItemDiv">${addingItem.numberOfItem}</div>
                    <div class="addItem">+</div>
                </div>
            </div>
        </div>`
    })
    document.querySelector(".cartItemList").innerHTML+=newProduct;
    updateValues();
    document.querySelectorAll(".addItem").forEach(function(items){
        items.addEventListener("click",addItemToCartWithAdd);
    })
    document.querySelectorAll(".removeItem").forEach(function(items){
        items.addEventListener("click",removingItemToCartWithAdd);
    })
}

/*function for adding a product to cart*/
function addItemToCart(event){
    if(event.target.textContent=="Add"){
        if(event){
            var cell=event.target.closest(".cell");
            var productAdded=cell.querySelector(".itemName").textContent;
            var addingItem=products.find(function(item){
                return item.name.toLowerCase()==productAdded.toLowerCase();
            })
            addingItem["numberOfItem"]=1;
            cart.push(addingItem);
            var nearestCell=event.target.closest(".cell");
            nearestCell.querySelector(".addingProductToCart").innerHTML=`
                <div class="addingProductsButton">
                    <div class="removeItem">-</div>
                    <div class="numberOfItemDiv">${addingItem.numberOfItem}</div>
                    <div class="addItem">+</div>
                </div>
            `;
            renderCart();
            saveCart();
        }
    }
}

/*function to render the cart*/
function renderCart(){
    if(cart.length>0){
        var cartData=`
        <div class="cartItemList">
            <div>
                <div>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt="">
                </div>
                <div>
                    <h4>Delivery in 12 minutes</h4>
                    <p class="itemCell">Shipment of 4 items</p>
                </div>
            </div>
            
        </div>
        <div class="cartBill">
            <h3>Bill Details</h3>
            <div><p>Items Total</p><p class="priceOfTotalItems"></p></div>
            <div><p>Delivery Charge</p><p>₹25</p></div>
            <div><p>Handling Charge</p><p>₹4</p></div>
            <div><h4>Grand Total</h4><h4 class="overallTotalPrice"></h4></div>
        </div> 
        <div class="cartCancelPolicy">
            <h3>Cancellation Policy</h3>
            <p>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
        </div>
        <div class="totalAmount">
            <div>
                <div><h2 class="overallTotalPrice"></h2><h5>TOTAL</h5></div>
                <div><h1>Login to Proceed</h1></div>
            </div>
        </div>`;
            document.querySelector(".cart>div:nth-child(2)").innerHTML=cartData;
            renderProductsCart();
    }
    else if(cart.length==0){
    document.querySelector(".cart>div:nth-child(2)").innerHTML="";
    }
}

/*function modal that appears on click*/
function appearCartModal(){
    document.querySelector(".modal").classList.add("show");
    document.querySelector(".closeCart").addEventListener("click",closeCartModal);
    document.querySelector(".modal").addEventListener("click", function(event) {
        if(!event.target.closest(".cart")){
            closeCartModal();
        }
    });
}

/*localStrorage.clear() use this for cleaning data from localStorage*/
function reportNow(){
    console.log("cleared");
    localStorage.clear();
}

function localstorageDownload(){
    var localCart=localStorage.getItem('cart');
    if(localCart){
        cart=JSON.parse(localCart);
        renderCart();
    }
}
localstorageDownload();