// GLOBAL VARIABLES
let tes = document.getElementById(`test`);

const settings = {
  notifyQuantitiesRemaining: 5,
  // productsPerPage: 3,
  imagePath: 'img/products/'
}

const shoppingCart = [
  // {productid: 101, qty: 1}
];

const allProducts =[
  { //0
    id : 101,
    image : `Tshirt-119.png`,
    name: `Champ Super 1`,
    brand: `champion`,
    colour: `red`,
    size: `m`,
    rating: `2stars`,
    ratingImg: `2stars.png`,
    available: 10,
    price: 39
  },{ //1
    id : 102,
    image : `Tshirt-120.png`,
    name: `Nike Super 1`,
    brand: `nike`,
    colour: `red`,
    size: `s`,
    rating: `3stars`,
    ratingImg: `3stars.png`,
    available: 5,
    price: 59
  },{ //2
    id : 103,
    image : `Tshirt-010.png`,
    name: `Adidas Super 1`,
    brand: `adidas`,
    colour: `yellow`,
    size: `l`,
    rating: `4stars`,
    ratingImg: `4stars.png`,
    available: 7,
    price: 69
  },{ //3
    id : 104,
    image : `Tshirt-121.png`,
    name: `Fila Super 1`,
    brand: `fila`,
    colour: `blue`,
    size: `xl`,
    rating: `1star`,
    ratingImg: `1star.png`,
    available: 7,
    price: 49
  },{ //4
    id : 105,
    image : `Tshirt-001.png`,
    name: `Puma Super 1`,
    brand: `puma`,
    colour: `black`,
    size: `xl`,
    rating: `5stars`,
    ratingImg: `5stars.png`,
    available: 11,
    price: 49
  },{ //5
    id : 106,
    image : `Tshirt-113.png`,
    name: `Champ Super 2`,
    brand: `champion`,
    colour: `grey`,
    size: `m`,
    rating: `2stars`,
    ratingImg: `2stars.png`,
    available: 2,
    price: 139
  },{ //6
    id : 107,
    image : `Tshirt-117.png`,
    name: `Nike Super 2`,
    brand: `nike`,
    colour: `red`,
    size: `s`,
    rating: `4stars`,
    ratingImg: `4stars.png`,
    available: 8,
    price: 259
  },{ //7
    id : 108,
    image : `Tshirt-003.png`,
    name: `Adidas Super 2`,
    brand: `adidas`,
    colour: `black`,
    size: `l`,
    rating: `5stars`,
    ratingImg: `5stars.png`,
    available: 2,
    price: 279
  },{ //8
    id : 109,
    image : `Tshirt-122.png`,
    name: `Fila Super 2`,
    brand: `fila`,
    colour: `blue`,
    size: `xs`,
    rating: `3stars`,
    ratingImg: `3stars.png`,
    available: 0,
    price: 149
  },{ //9
    id : 110,
    image : `Tshirt-115.png`,
    name: `Puma Super 2`,
    brand: `puma`,
    colour: `grey`,
    size: `xl`,
    rating: `5stars`,
    ratingImg: `5stars.png`,
    available: 1,
    price: 199
  },{ //10
    id : 111,
    image : `Tshirt-123.png`,
    name: `Champ Super 3`,
    brand: `champion`,
    colour: `blue`,
    size: `m`,
    rating: `2stars`,
    ratingImg: `2stars.png`,
    available: 10,
    price: 89
  },{ //11
    id : 112,
    image : `Tshirt-111.png`,
    name: `Nike Super 3`,
    brand: `nike`,
    colour: `grey`,
    size: `m`,
    rating: `3stars`,
    ratingImg: `3stars.png`,
    available: 10,
    price: 129
  },{ //12
    id : 113,
    image : `Tshirt-006.png`,
    name: `Adidas Super 3`,
    brand: `adidas`,
    colour: `yellow`,
    size: `xs`,
    rating: `1star`,
    ratingImg: `1star.png`,
    available: 10,
    price: 89
  },{ //13
    id : 114,
    image : `Tshirt-002.png`,
    name: `Fila Super 4`,
    brand: `fila`,
    colour: `black`,
    size: `m`,
    rating: `3stars`,
    ratingImg: `3stars.png`,
    available: 10,
    price: 69
  },{ //14
    id : 115,
    image : `Tshirt-007.png`,
    name: `Puma Super 4`,
    brand: `puma`,
    colour: `yellow`,
    size: `l`,
    rating: `2stars`,
    ratingImg: `2stars.png`,
    available: 7,
    price: 69
  },{ //15
    id : 116,
    image : `Tshirt-008.png`,
    name: `Champ Super 5`,
    brand: `champion`,
    colour: `yellow`,
    size: `l`,
    rating: `nostar`,
    ratingImg: `0star.png`,
    available: 10,
    price: 19
  },{ //16
    id : 117,
    image : `Tshirt-118.png`,
    name: `Nike Super 5`,
    brand: `nike`,
    colour: `red`,
    size: `L`,
    rating: `1star`,
    ratingImg: `1star.png`,
    available: 10,
    price: 39
  },{ //17
    id : 118,
    image : `Tshirt-009.png`,
    name: `Adidas Super 5`,
    brand: `adidas`,
    colour: `yellow`,
    size: `l`,
    rating: `nostar`,
    ratingImg: `0star.png`,
    available: 10,
    price: 23
  },{ //18
    id : 119,
    image : `Tshirt-124.png`,
    name: `Fila Super 5`,
    brand: `fila`,
    colour: `blue`,
    size: `xl`,
    rating: `2stars`,
    ratingImg: `2stars.png`,
    available: 10,
    price: 19
  },{ //19
    id : 120,
    image : `Tshirt-112.png`,
    name: `Puma Super 5`,
    brand: `puma`,
    colour: `grey`,
    size: `s`,
    rating: `4stars`,
    ratingImg: `4stars.png`,
    available: 3,
    price: 49
  }
];

// FUNCTIONS
// function test(){
//   alert(`test`);
// }

const addItemToCart = productid => {
  

  const cartItem = shoppingCart.find(item => item.productid == productid);
  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
    console.log(cartItem);
    
  } else {
    shoppingCart.push({productid: productid, qty: 1});
    console.log(cartItem)
  }

  document.getElementById(`cartQty`).innerText = shoppingCart.length;
}

// Sorting order function
const loadProductsByOrder = (arrToSort, criteria) => {

  const sortedProducts = arrToSort.slice(); // clone the array

  if (criteria == 'priceLow') {
    // Smallest to largest
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (criteria == 'priceHigh') {
    // Largest to smallest
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (criteria == 'nameAsc') {
    // Largest to smallest
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria == 'nameDesc') {
    // Largest to smallest
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sortedProducts; // new array
}

// Filter
const runTheFilter = theForm => {

  const brandToSearch = theForm.elements.brandName.value;
  const nameToSearch = theForm.elements.productName.value;
  const ratingToSearch = theForm.elements.rating.value;

  console.log(theForm.elements)

  // Filter all courses in multiple
  const filteredProducts = allProducts
    .filter(c => c.name.toLowerCase().includes( nameToSearch.trim().toLowerCase() ))  // filter by name
    .filter(c => c.brand == brandToSearch || brandToSearch == "all")         // filter by brand
    .filter(c => c.rating == ratingToSearch || ratingToSearch == "all");        // filter by rating

  renderProductsFromArray(filteredProducts);
}



// EVENT HANDLER FUNCTIONS **************


const handleClickOfProducts = event => {
  if (!event.target.matches('button.add-product')) {
    return;
  }
  const productid = parseInt(event.target.dataset.productid);
  addItemToCart(productid);
}


// When the filter form itself is submit...
const filterTheProducts = event => {
  event.preventDefault(); // Prevent the submit form refreshing
  runTheFilter(event.target);
}

// When a filter form component is submit...
const submitTheFilterForm = event => {
  //document.getElementById('filtersForm').submit();
  runTheFilter(event.target.form);
}

// When sorting, ensure the filters run first (which leads to a render)
const sortTheProducts = event => {
  runTheFilter(document.getElementById('filtersForm'));
}

// FUNCTIONS THAT BUILD OUR VIEW **************

const getProductAsHtmlString = (product) =>{
  let callout = ``;
  let soldout = ``;
  let register = `<button type="button" class="add-product" data-productid="${product.id}">Add</button>`;
  if (product.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    register = ``;
  } else if (product.available < settings.notifyQuantitiesRemaining) {
    callout = `<small class="callout urgent">${product.available} remaining</small>`;
  }
  
  return `
  <article class="product ${(product.brand) ? `cat-${product.brand}` : ''} ${soldout}">
  
  <img src="${settings.imagePath + product.image}" alt="${product.name}" class="product-img">
  </header>
 
      
      <ul class="product-info">
      <li><h3>${product.name}</h3></li>
       <li><label>${callout}</label</li>
        <li><label>Size:${product.size.toUpperCase()}</label></li>
        <li><label>$ ${product.price}</label></li>
        <li><img src="${settings.imagePath + product.ratingImg}" class="product-rating-img"></li>
      </ul>
      ${register}
</article>
  `;
}

const renderProductsFromArray = (arr) => {

//   document.getElementById(`products`).innerHTML = arr.map(getProductAsHtmlString).join(``);
//   let res = `result`;
//   if (arr.length == 1){
//     res = `result`
//   }
//   document.getElementById(`numResuts`).innerHTML = `(${arr.length} ${res})`;
// }

// 1. SORT!!!
const sortBy = document.getElementById('sortOrder').value;    // dropdown value
arr = loadProductsByOrder(arr, sortBy);  // sort the courses, reassign the new Array

  // 3. BUILD OUTPUT
  if (arr.length > 0) {
    document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('\n'); // Print products  
  } else {
    document.getElementById('products').innerHTML = 'Sorry, no matching results.' // Woops!
  }

  document.getElementById('numResults').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`; // Display number of total results
  
}


// CART


//PAGINATION

// const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];

		let item_element = document.createElement('div');
		item_element.classList.add('item');
		item_element.innerText = item;
		
		wrapper.appendChild(item_element);
	}
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}


// EXE

//START
window.addEventListener(`load`, () => {
  renderProductsFromArray(allProducts);

 // UI elements

 document.getElementById('products').addEventListener('click', handleClickOfProducts);
 document.getElementById('sortOrder').addEventListener('change', sortTheProducts);

 // The filter form
 document.getElementById('filtersForm').addEventListener('submit', filterTheProducts);

 // The filter form components
 document.getElementById('productName').addEventListener('input', submitTheFilterForm);
 document.getElementById('brandName').addEventListener('change', submitTheFilterForm);
 document.querySelectorAll('[name="rating"]').forEach(radbtn => radbtn.addEventListener('change', submitTheFilterForm));
// document.querySelectorAll('[name="colour"]').forEach(chkbox => chkbox.addEventListener('change', submitTheFilterForm));



// DisplayList(allProducts, list_element, rows, current_page);
SetupPagination(allProducts, pagination_element, rows);
});



/* Banner runs on startup */

$(document).ready(function() {  

  var id = '#dialog';

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set heigth and width to mask to fill up the whole screen
  $('#mask').css({'width':maskWidth,'height':maskHeight});
  
  //transition effect   
  $('#mask').fadeIn(500); 
  $('#mask').fadeTo("slow",0.9);  

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();
            
  //Set the popup window to center
  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);

  //transition effect
  $(id).fadeIn(2000);   

//if close button is clicked
$('.window .close').click(function (e) {
  //Cancel the link behavior
  e.preventDefault();
  
  $('#mask').hide();
  $('.window').hide();
});   

//if mask is clicked
$('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
});   

});

//document.addEventListener("click",test);
