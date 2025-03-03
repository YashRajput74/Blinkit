/*These are default values that are used later*/
var defaultNewCategory="Dairy & Breakfast";
var selectedVal="Name";


/*this function filters the data that is to be rendered */
function filterCategory(defaultNewCategory){
    return products.filter(function(prod){
        for (var i = 0; i < categoriesProducts.length; i++) {
            if (categoriesProducts[i].name == defaultNewCategory) {
                if(categoriesProducts[i].products.includes(prod.id)){
                    return true;
                }
            }
        }
    })
}
var filteredProducts=filterCategory(defaultNewCategory);

/*function for rendering header*/
function heroRender(data){
    var heroContent=`
        <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=${data[0]}" alt="" class="redirectData">
        </div>
        <div class="tiles">`;
    heroContent+=data.map(function(item,index){
        if(index>0){
            return `
            <div>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=${item}" alt=""  class="redirectData">
            </div>
            `
        }
    }).join('');
    heroContent+=`</div>`;
    document.querySelector(".hero").innerHTML=heroContent;
}

/* function for rendering the data for the main section's first part */
function gridRender(data){
    var gridContent = `<div class="grid1">`;
    gridContent += data.map(function(item){
        return `
        <div>
            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-${item}" class="redirectData">
        </div>
        `
    }).join('')
    gridContent +=`</div>`;
    document.querySelector("main").innerHTML =gridContent;
}

/*function for rendering cells of each row */
function cellRender(category,product){
    var cellLayout=category.map(function(item){
        var filteredProducts=product.filter(function(prod){
            for (var i = 0; i < item.products.length; i++) {
                if (item.products[i] == prod.id) {
                    return true;
                }
            }
        })
        var cellData = filteredProducts.map(function(items){
            var cartItem=cart.find(function(product){
                return product.id==items.id;
            })
            if(cartItem){
                var buttonText=`
                <div class="addingProductsButton">
                    <div class="removeItem">-</div>
                    <div class="numberOfItemDiv">${cartItem.numberOfItem}</div>
                    <div class="addItem">+</div>
                </div>`;
            }
            else{
                var buttonText=`Add`;
            }
            return `
            <div class="cell">
                <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/${items.imgLink}" alt=""></div>
                <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt=""><p>8MINS</p></div>
                <div class="itemName">${items.name}</div>
                <div>${items.qty}</div>
                <div>₹${items.price}
                    <div class="addingProductToCart">${buttonText}</div>
                </div>
            </div>         
            `
        }).join('');
        return `
        <div class="grid2">
            <div>
                <h3>${item.name}</h3>
                <p>see all</p>
            </div>
            <div>
                ${cellData}
            </div>
        </div>`
    }).join('');
    document.querySelector('main').innerHTML += cellLayout;
}

/*function that search our products*/
function searchProducts(event){
    var toBeSearched=event.target.value.toLowerCase();
    if(toBeSearched==""){
        homePageRender();
        return
    }
    var searching= products.filter(function(prod){
        return prod.name.toLowerCase().includes(toBeSearched);
    })
    document.querySelector(".hero").style.display="none";
    var contentData=`
        <div class="searchingUI">
    `;
    contentData +=searching.map(function(item){
        var cartItem=cart.find(function(product){
            return product.id==items.id;
        })
        if(cartItem){
            var buttonText=`
            <div class="addingProductsButton">
                <div class="removeItem">-</div>
                <div class="numberOfItemDiv">${cartItem.numberOfItem}</div>
                <div class="addItem">+</div>
            </div>`;
        }
        else{
            var buttonText=`Add`;
        }
        return `
        <div class="cell">
            <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/${item.imgLink}" alt=""></div>
            <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt=""><p>8MINS</p></div>
            <div>${item.name}</div>
            <div>${item.qty}</div>
            <div>₹${item.price}
                <div class="addingProductToCart">${buttonText}</div>
            </div>
        </div> `
    }).join('');
    contentData+=`</div>`;
    document.querySelector("main").innerHTML=contentData;
}

/*function which rerender our main div*/
function newSidebarClassRender(data){
    var sideBarContent= data.map(function(item){
        return `<div class="categoryE">
                    <div class="imgBox"><img src="https://cdn.grofers.com/app/images/category/cms_images/icon/${item.imgLink}" alt=""></div>
                    <p>${item.name}</p>
                </div>`;
    }).join('');
    document.querySelector(".sidebar").innerHTML= sideBarContent;
}

function newMainContentClassRender(category){
    var contentData= category.map(function(item){
        var cartItem=cart.find(function(product){
                return product.id==item.id;
            })
            if(cartItem){
                var buttonText=`
                <div class="addingProductsButton">
                    <div class="removeItem">-</div>
                    <div class="numberOfItemDiv">${cartItem.numberOfItem}</div>
                    <div class="addItem">+</div>
                </div>`;
            }
            else{
                var buttonText=`Add`;
            }
        return `
        <div class="cell">
            <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/${item.imgLink}" alt=""></div>
            <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" alt=""><p>8MINS</p></div>
            <div class="itemName">${item.name}</div>
            <div>${item.qty}</div>
            <div>₹${item.price}
                <div class="addingProductToCart">${buttonText}</div>
            </div>
        </div> `
    }).join('');
    document.querySelector(".newMainContent").innerHTML=contentData;
}

function newMain(){
    var newMainContent=`
        <div class="newMainHeader"></div>
        <div>
            <div class="sidebar"></div>
            <div class="mainbar">
                <div>
                    <p class="changeOnClick">Buy Dairy & Breakfast Online</p>
                    <div>
                        <label for="dropdown">Sort by</label>
                        <select class="dropdown" id="dropdown" name="dropdown">
                        <option value="Name">Name(A to Z)</option>
                        <option value="LTH">Price(Low to High)</option>
                        <option value="HTL">Price(High to Low)</option>
                        </select>
                    </div>
                </div>
                <div class="newMainContent"></div>
            </div>
        </div>
        `
        document.querySelector("main").innerHTML= newMainContent;
}

/*this function filters the data on click*/
function changeAll(event){
    var categoryDiv = event.target.closest(".categoryE");
    defaultNewCategory=categoryDiv.querySelector("p").textContent;;
    var sideBar=event.target.closest(".sidebar");
    var child=sideBar.querySelectorAll("div");
    child.forEach(function(item){
        item.style.borderLeft='none';
    })
    event.target.closest("div").style.borderLeft= "4px solid #24963F";
    document.querySelector(".changeOnClick").textContent=`Buy ${defaultNewCategory} Online`;
    filteredProducts=filterCategory(defaultNewCategory);
    newMainContentClassRender(sortPlease(selectedVal));
    document.querySelectorAll(".addingProductToCart").forEach(function(item){
        item.addEventListener("click",addItemToCart)
    })
}

/*This function handles soritng */
function sortPlease(values){
    selectedVal=values;
    var sortedData=[];
    if(selectedVal=="LTH"){
        sortedData=filteredProducts.slice().sort(function(a,b){
            return a.price-b.price;
        });
    }
    else if(selectedVal=="HTL"){
        sortedData=filteredProducts.slice().sort(function(a,b){
            return b.price-a.price;
        });
    }
    else if(selectedVal=="Name"){
        sortedData=filteredProducts.slice().sort(function(a,b){
            return a.name.localeCompare(b.name);
        });
    }
    return sortedData;
}

/*this function sorts on click*/
function handleSorting(event){
    selectedVal=event.target.value;
    newMainContentClassRender(sortPlease(selectedVal));
    document.querySelectorAll(".addingProductToCart").forEach(function(item){
        item.addEventListener("click",addItemToCart)
    })
}

/*this function renders the new page and attach event listeners*/
function newPage(){
    document.querySelector(".hero").style.display="none";
    newMain();
    newSidebarClassRender(categoriesProducts);
    newMainContentClassRender(filteredProducts);
    document.querySelectorAll(".categoryE").forEach(function(item){
        item.addEventListener("click",changeAll);
    })
    document.querySelector(".dropdown").addEventListener("change",handleSorting);
    document.querySelectorAll(".addingProductToCart").forEach(function(item){
        item.addEventListener("click",addItemToCart)
    });
}

/*function will render the home page*/
function homePageRender(){
    document.querySelector(".hero").style.display="block";
    heroRender(heroImages);
    gridRender(homePageData);
    cellRender(categoriesProducts,products);
    cartModal();
    attachEvents();
}

/*calling all the functions for main page*/
homePageRender();

/*Adding event listeners*/
function attachEvents(){
    document.querySelectorAll(".redirectData").forEach(function(item){
        item.addEventListener("click",newPage);
    })
    document.querySelector(".searchBar").addEventListener("input",searchProducts);
    document.querySelector(".logoSite").addEventListener("click",homePageRender);
    document.querySelectorAll(".cartButton").forEach(function(item){
        item.addEventListener("click",appearCartModal);
    })
    document.querySelectorAll(".addingProductToCart").forEach(function(item){
        item.addEventListener("click",addItemToCart)
    })
}

function localstorageDownloadAgain(){
    var localCart=localStorage.getItem('cart');
    if(localCart){
        cart=JSON.parse(localCart);
        updateValues();
    }
}
localstorageDownload();
localstorageDownloadAgain();