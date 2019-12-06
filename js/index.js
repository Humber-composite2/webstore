// GLOBAL VARIABLES
let tes = document.getElementById(`test`);

const settings = {
  notifyQuantitiesRemaining: 5,
  coursesPerPage: 3,
  imagePath: 'img/'
}

const shoppingCart = [
  {courseid: 101, qty: 1}
];

const allProducts =[
  { //0
    id : 101,
    image : `Tshirt-01.png`,
    name: `Champion Tshirt`,
    brand: `Champion`,
    colour: `Red`,
    size: `M`,
    rating: 2,
    available: 10,
    price: 39
  },{ //1
    id : 102,
    image : `Tshirt-02.png`,
    name: `Nike Tshirt`,
    brand: `Nike`,
    colour: `Red`,
    size: `S`,
    rating: 3,
    available: 5,
    price: 59
  },{ //2
    id : 103,
    image : `Tshirt-03.png`,
    name: `Adidas Tshirt`,
    brand: `Adidas`,
    colour: `White`,
    size: `L`,
    rating: 4,
    available: 7,
    price: 69
  },{ //3
    id : 104,
    image : `Tshirt-04.png`,
    name: `Fila Tshirt`,
    brand: `Fila`,
    colour: `Blue`,
    size: `XL`,
    rating: 1,
    available: 12,
    price: 49
  },{ //4
    id : 105,
    image : `Tshirt-05.png`,
    name: `Puma Tshirt`,
    brand: `Puma`,
    colour: `Black`,
    size: `XL`,
    rating: 5,
    available: 11,
    price: 49
  },{ //5
    id : 106,
    image : `Tshirt-06.png`,
    name: `Champion Jacket`,
    brand: `Champion`,
    colour: `Grey`,
    size: `M`,
    rating: 2,
    available: 2,
    price: 139
  },{ //6
    id : 107,
    image : `Tshirt-07.png`,
    name: `Nike Jacket`,
    brand: `Nike`,
    colour: `Red`,
    size: `S`,
    rating: 4,
    available: 8,
    price: 259
  },{ //7
    id : 108,
    image : `Tshirt-08.png`,
    name: `Adidas Jacket`,
    brand: `Adidas`,
    colour: `White`,
    size: `L`,
    rating: 5,
    available: 9,
    price: 279
  },{ //8
    id : 109,
    image : `Tshirt-09.png`,
    name: `Fila Jacket`,
    brand: `Fila`,
    colour: `Blue`,
    size: `XS`,
    rating: 3,
    available: 10,
    price: 149
  },{ //9
    id : 110,
    image : `Tshirt-10.png`,
    name: `Puma Jacket`,
    brand: `Puma`,
    colour: `White`,
    size: `XL`,
    rating: 5,
    available: 10,
    price: 199
  },{ //10
    id : 111,
    image : `Tshirt-11.png`,
    name: `Champion Pants`,
    brand: `Champion`,
    colour: `Blue`,
    size: `M`,
    rating: 2,
    available: 10,
    price: 89
  },{ //11
    id : 112,
    image : `Tshirt-12.png`,
    name: `Nike Pants`,
    brand: `Nike`,
    colour: `Grey`,
    size: `M`,
    rating: 3,
    available: 10,
    price: 129
  },{ //12
    id : 113,
    image : `Tshirt-13.png`,
    name: `Adidas Pants`,
    brand: `Adidas`,
    colour: `White`,
    size: `XS`,
    rating: 1,
    available: 10,
    price: 89
  },{ //13
    id : 114,
    image : `Tshirt-14.png`,
    name: `Fila Pants`,
    brand: `Fila`,
    colour: `Black`,
    size: `M`,
    rating: 3,
    available: 10,
    price: 69
  },{ //14
    id : 115,
    image : `Tshirt-15.png`,
    name: `Puma Pants`,
    brand: `Puma`,
    colour: `White`,
    size: `L`,
    rating: 2,
    available: 10,
    price: 69
  },{ //15
    id : 116,
    image : `Tshirt-16.png`,
    name: `Champion Shorts`,
    brand: `Champion`,
    colour: `White`,
    size: `L`,
    rating: 0,
    available: 10,
    price: 19
  },{ //16
    id : 117,
    image : `Tshirt-17.png`,
    name: `Nike Shorts`,
    brand: `Nike`,
    colour: `Red`,
    size: `L`,
    rating: 2,
    available: 10,
    price: 39
  },{ //17
    id : 118,
    image : `Tshirt-18.png`,
    name: `Adidas Shorts`,
    brand: `Adidas`,
    colour: `White`,
    size: `L`,
    rating: 0,
    available: 10,
    price: 23
  },{ //18
    id : 119,
    image : `Tshirt-19.png`,
    name: `Fila Shorts`,
    brand: `Fila`,
    colour: `Blue`,
    size: `XL`,
    rating: 2,
    available: 10,
    price: 19
  },{ //19
    id : 120,
    image : `Tshirt-20.png`,
    name: `Puma Shorts`,
    brand: `Puma`,
    colour: `Grey`,
    size: `S`,
    rating: 5,
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
  let register = `<button type="button" class="course-register" data-courseid="${product.id}">Register</button>`;
  if (product.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    register = ``;
  } else if (product.available < settings.notifyQuantitiesRemaining) {
    callout = `<small class="callout urgent">Limited seats remaining</small>`;
  }
  
  return `
  <article class="course ${(product.brand) ? `cat-${product.brand}` : ''} ${soldout}">
  <header class="img-pro">
  <img src="${settings.imagePath + product.image}" alt="${product.name}">
  </header>
 
      <h3>${product.name} ${callout}</h3>
      <ul class="product-info">
        <li><label>${product.colour}</label></li>
        <li><label>${product.size}</label></li>
        <li><label>${product.rating}</label></li>
        <li><label>${product.price}</label></li>
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

});

//document.addEventListener("click",test);