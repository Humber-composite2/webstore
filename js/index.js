// GLOBAL VARIABLES
let tes = document.getElementById(`test`);

const settings = {
  notifyQuantitiesRemaining: 5,
  // productsPerPage: 3,
  imagePath: `img/products/`
}

const shoppingCart = [
  {productid: 101, qty: 1}
];

const allProducts =[
  { //0
    id : 101,
    image : `tshirt-119.png`,
    name: `Champ Super 1`,
    brand: `champion`,
    colour: `red`,
    size: `m`,
    rating: `2stars`,
    available: 10,
    price: 39
  },{ //1
    id : 102,
    image : `tshirt-120.png`,
    name: `Nike Super 1`,
    brand: `nike`,
    colour: `red`,
    size: `s`,
    rating: `3stars`,
    available: 5,
    price: 59
  },{ //2
    id : 103,
    image : `tshirt-010.png`,
    name: `Adidas Super 1`,
    brand: `adidas`,
    colour: `yellow`,
    size: `l`,
    rating: `4stars`,
    available: 7,
    price: 69
  },{ //3
    id : 104,
    image : `tshirt-121.png`,
    name: `Fila Super 1`,
    brand: `fila`,
    colour: `blue`,
    size: `xl`,
    rating: `1star`,
    available: 7,
    price: 49
  },{ //4
    id : 105,
    image : `tshirt-001.png`,
    name: `Puma Super 1`,
    brand: `puma`,
    colour: `black`,
    size: `xl`,
    rating: `5stars`,
    available: 11,
    price: 49
  },{ //5
    id : 106,
    image : `tshirt-113.png`,
    name: `Champ Super 2`,
    brand: `champion`,
    colour: `grey`,
    size: `m`,
    rating: `2stars`,
    available: 2,
    price: 139
  },{ //6
    id : 107,
    image : `tshirt-117.png`,
    name: `Nike Super 2`,
    brand: `nike`,
    colour: `red`,
    size: `s`,
    rating: `4stars`,
    available: 8,
    price: 259
  },{ //7
    id : 108,
    image : `tshirt-003.png`,
    name: `Adidas Super 2`,
    brand: `adidas`,
    colour: `black`,
    size: `l`,
    rating: `5stars`,
    available: 2,
    price: 279
  },{ //8
    id : 109,
    image : `tshirt-122.png`,
    name: `Fila Super 2`,
    brand: `fila`,
    colour: `blue`,
    size: `xs`,
    rating: `3stars`,
    available: 0,
    price: 149
  },{ //9
    id : 110,
    image : `tshirt-115.png`,
    name: `Puma Super 2`,
    brand: `puma`,
    colour: `grey`,
    size: `xl`,
    rating: `5stars`,
    available: 1,
    price: 199
  },{ //10
    id : 111,
    image : `tshirt-123.png`,
    name: `Champ Super 3`,
    brand: `champion`,
    colour: `blue`,
    size: `m`,
    rating: `2stars`,
    available: 10,
    price: 89
  },{ //11
    id : 112,
    image : `tshirt-111.png`,
    name: `Nike Super 3`,
    brand: `nike`,
    colour: `grey`,
    size: `m`,
    rating: `3stars`,
    available: 10,
    price: 129
  },{ //12
    id : 113,
    image : `tshirt-006.png`,
    name: `Adidas Super 3`,
    brand: `adidas`,
    colour: `yellow`,
    size: `xs`,
    rating: `1star`,
    available: 10,
    price: 89
  },{ //13
    id : 114,
    image : `tshirt-002.png`,
    name: `Fila Super 4`,
    brand: `fila`,
    colour: `black`,
    size: `m`,
    rating: `3stars`,
    available: 10,
    price: 69
  },{ //14
    id : 115,
    image : `tshirt-007.png`,
    name: `Puma Super 4`,
    brand: `puma`,
    colour: `yellow`,
    size: `l`,
    rating: `2stars`,
    available: 7,
    price: 69
  },{ //15
    id : 116,
    image : `tshirt-008.png`,
    name: `Champ Super 5`,
    brand: `champion`,
    colour: `yellow`,
    size: `l`,
    rating: `nostar`,
    available: 10,
    price: 19
  },{ //16
    id : 117,
    image : `tshirt-118.png`,
    name: `Nike Super 5`,
    brand: `nike`,
    colour: `red`,
    size: `L`,
    rating: `1star`,
    available: 10,
    price: 39
  },{ //17
    id : 118,
    image : `tshirt-009.png`,
    name: `Adidas Super 5`,
    brand: `adidas`,
    colour: `yellow`,
    size: `l`,
    rating: `nostar`,
    available: 10,
    price: 23
  },{ //18
    id : 119,
    image : `tshirt-124.png`,
    name: `Fila Super 5`,
    brand: `fila`,
    colour: `blue`,
    size: `xl`,
    rating: `2stars`,
    available: 10,
    price: 19
  },{ //19
    id : 120,
    image : `tshirt-112.png`,
    name: `Puma Super 5`,
    brand: `puma`,
    colour: `grey`,
    size: `s`,
    rating: `4stars`,
    available: 3,
    price: 49
  }
];

// FUNCTIONS
function test(){
  alert(`test`);
}

const addItemToCart = productid => {
  // [ {courseid: 101, qty: 1} ]

  const cartItem = shoppingCart.find(item => item.productid == productid);

  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
    console.log(cartItem);
  } else {
    shoppingCart.push({productid: productid, qty: 1});
  }
  
  // if (this id already exist in the Array) {
  //   Update the quantity of the item
  // } else if (it does not exist) {
  //   Add a new item to the shoppingCart
  // }

  // Is it important to return a value here? 
  //    Why would we? Why not?
  // What else might we need/want this function to do? 
  //    If anything, weigh the pros/cons of doing it here vs elsewhere
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
    .filter(c => c.brand == brandToSearch || brandToSearch == "all")         // filter by category
    .filter(c => c.rating == ratingToSearch || ratingToSearch == "all");        // filter by semester

  renderProductsFromArray(filteredProducts);
}



// EVENT HANDLER FUNCTIONS **************
// const loadRating = event => {
//   const justFall2019 = allProducts.filter(c => c.rating == `Adidas`);
//   renderCoursesFromArray(justFall2019);
// }

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

/*  Function: getCourseAsHtmlString
    Parameters: course:Object
    Return: String of HTML (<article>)
    Description: Allows our courses to be built using a template (for map())  */
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
  <header class="img-pro">
  <img src="${settings.imagePath + product.image}" alt="${product.name}">
  </header>
 
      <h3>${product.name}</h3>
      <ul class="product-info">
       <li><label>${callout}</label</li>
        <li><label>Size:${product.size}</label></li>
        <li><label>${product.rating}</label></li>
        <li><label>$ ${product.price}</label></li>

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
  // 2. PAGINATE
    // How many pages do we need? 
    //  totalNumCourses / coursesPerPage
    //    Round this^ up to the next integer
    
    // TEST EXAMPLE:  10 courses / 3 coursesPerPage = 4 pages required
    //    Page 1:   0, 1, 2
    //    Page 2:   3, 4, 5
    //    Page 3:   6, 7, 8
    //    Page 4:   9

    // Therefor...
    // Index of the first course on each page: 
    //    firstIndexOnThisPage = (pageNum - 1) * coursesPerPage
    // Index of the last course on each page:
    //    lastIndexOnThisPage = firstIndexOnThisPage + coursesPerPage
    //      (Remember that slice() excludes the last index.)


  // 3. BUILD OUTPUT
  if (arr.length > 0) {
    document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('\n'); // Print courses  
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
//  document.getElementById('productView').addEventListener('click', toggleProductView);
//  document.getElementById('fallCourses').addEventListener('click', loadCoursesFromTerm);
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

//document.addEventListener("click",test);