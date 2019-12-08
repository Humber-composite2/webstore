// GLOBAL VARIABLES
let tes = document.getElementById(`test`);

const settings = {
  notifyQuantitiesRemaining: 5,
  productsPerPage: 3,
  imagePath: '/img/'
}

const shoppingCart = [
  {productid: 101, qty: 1}
];

const allProducts =[
  { //0
    id : 101,
    image : `tshirt-01.png`,
    name: `champion tshirt`,
    brand: `champion`,
    colour: `red`,
    size: `m`,
    rating: `2stars`,
    available: 10,
    price: 39
  },{ //1
    id : 102,
    image : `tshirt-02.png`,
    name: `nike tshirt`,
    brand: `nike`,
    colour: `red`,
    size: `s`,
    rating: `3stars`,
    available: 5,
    price: 59
  },{ //2
    id : 103,
    image : `tshirt-03.png`,
    name: `adidas tshirt`,
    brand: `adidas`,
    colour: `white`,
    size: `l`,
    rating: `4stars`,
    available: 7,
    price: 69
  },{ //3
    id : 104,
    image : `tshirt-04.png`,
    name: `fila tshirt`,
    brand: `fila`,
    colour: `blue`,
    size: `xl`,
    rating: `1star`,
    available: 12,
    price: 49
  },{ //4
    id : 105,
    image : `tshirt-05.png`,
    name: `puma tshirt`,
    brand: `puma`,
    colour: `black`,
    size: `xl`,
    rating: `5stars`,
    available: 11,
    price: 49
  },{ //5
    id : 106,
    image : `tshirt-06.png`,
    name: `champion jacket`,
    brand: `champion`,
    colour: `grey`,
    size: `m`,
    rating: `2stars`,
    available: 2,
    price: 139
  },{ //6
    id : 107,
    image : `tshirt-07.png`,
    name: `nike jacket`,
    brand: `nike`,
    colour: `red`,
    size: `s`,
    rating: `4stars`,
    available: 8,
    price: 259
  },{ //7
    id : 108,
    image : `tshirt-08.png`,
    name: `adidas jacket`,
    brand: `adidas`,
    colour: `white`,
    size: `l`,
    rating: `5stars`,
    available: 9,
    price: 279
  },{ //8
    id : 109,
    image : `tshirt-09.png`,
    name: `fila jacket`,
    brand: `fila`,
    colour: `blue`,
    size: `xs`,
    rating: `3stars`,
    available: 10,
    price: 149
  },{ //9
    id : 110,
    image : `tshirt-10.png`,
    name: `puma jacket`,
    brand: `puma`,
    colour: `white`,
    size: `xl`,
    rating: `5stars`,
    available: 10,
    price: 199
  },{ //10
    id : 111,
    image : `tshirt-11.png`,
    name: `champion pants`,
    brand: `champion`,
    colour: `blue`,
    size: `m`,
    rating: `2stars`,
    available: 10,
    price: 89
  },{ //11
    id : 112,
    image : `tshirt-12.png`,
    name: `nike pants`,
    brand: `nike`,
    colour: `grey`,
    size: `m`,
    rating: `3stars`,
    available: 10,
    price: 129
  },{ //12
    id : 113,
    image : `tshirt-13.png`,
    name: `adidas pants`,
    brand: `adidas`,
    colour: `white`,
    size: `xs`,
    rating: `1star`,
    available: 10,
    price: 89
  },{ //13
    id : 114,
    image : `tshirt-14.png`,
    name: `fila pants`,
    brand: `fila`,
    colour: `black`,
    size: `m`,
    rating: `3stars`,
    available: 10,
    price: 69
  },{ //14
    id : 115,
    image : `tshirt-15.png`,
    name: `puma pants`,
    brand: `puma`,
    colour: `white`,
    size: `l`,
    rating: `2stars`,
    available: 10,
    price: 69
  },{ //15
    id : 116,
    image : `tshirt-16.png`,
    name: `champion shorts`,
    brand: `champion`,
    colour: `white`,
    size: `l`,
    rating: `nostar`,
    available: 10,
    price: 19
  },{ //16
    id : 117,
    image : `tshirt-17.png`,
    name: `nike shorts`,
    brand: `nike`,
    colour: `red`,
    size: `L`,
    rating: `1star`,
    available: 10,
    price: 39
  },{ //17
    id : 118,
    image : `tshirt-18.png`,
    name: `adidas shorts`,
    brand: `adidas`,
    colour: `white`,
    size: `l`,
    rating: `nostar`,
    available: 10,
    price: 23
  },{ //18
    id : 119,
    image : `tshirt-19.png`,
    name: `fila shorts`,
    brand: `fila`,
    colour: `blue`,
    size: `xl`,
    rating: `2stars`,
    available: 10,
    price: 19
  },{ //19
    id : 120,
    image : `tshirt-20.png`,
    name: `puma Shorts`,
    brand: `puma`,
    colour: `grey`,
    size: `s`,
    rating: `4stars`,
    available: 10,
    price: 49
  }
];

// FUNCTIONS
function test(){
  alert(`test`);
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
  // if (!event.target.matches('button.course-register')) {
  //   return;
  // }
  // const courseid = parseInt(event.target.dataset.courseid);
  // addItemToCart(courseid);
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
  let register = `<button type="button" class="course-register" data-courseid="${product.id}">Add</button>`;
  if (product.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    register = ``;
  } else if (product.available < settings.notifyQuantitiesRemaining) {
    callout = `<small class="callout urgent">Limited ${product.available} remaining</small>`;
  }
  
  return `
  <article class="product ${(product.brand) ? `cat-${product.brand}` : ''} ${soldout}">
  <header class="img-pro">
  <img src="${settings.imagePath + product.image}" alt="${product.name}">
  </header>
 
      <h3>${product.name} ${callout}</h3>
      <ul class="product-info">
        <li><label>${product.colour}</label></li>
        <li><label>${product.size}</label></li>
        <li><label>${product.rating}</label></li>
        <li><label>$${product.price}</label></li>
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


// DisplayList(allProducts, list_element, rows, current_page);
SetupPagination(allProducts, pagination_element, rows);
});

//document.addEventListener("click",test);