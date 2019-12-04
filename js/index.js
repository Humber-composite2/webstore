// GLOBAL VARIABLES
let tes = document.getElementById(`test`);

const allProducts =[
  { //0
    id : `101`,
    img : `https://source.unsplash.com/random/200x200`,
    name: `Champion Tshirt`,
    // category: `Tshirt`,
    colour: `Red`,
    size: `M`,
    rating: `2.4`,
    price: `39`
  },{ //1
    id : `102`,
    img : `https://source.unsplash.com/random/201x200`,
    name: `Nike Tshirt`,
    // category: `Tshirt`,
    colour: `Red`,
    size: `S`,
    rating: `3.4`,
    price: `59`
  },{ //2
    id : `103`,
    img : `https://source.unsplash.com/random/202x200`,
    name: `Adidas Tshirt`,
    // category: `Tshirt`,
    colour: `White`,
    size: `L`,
    rating: `3.8`,
    price: `69`
  },{ //3
    id : `104`,
    img : `https://source.unsplash.com/random/203x200`,
    name: `Fila Tshirt`,
    // category: `Tshirt`,
    colour: `Blue`,
    size: `XL`,
    rating: `1.4`,
    price: `49`
  },{ //4
    id : `105`,
    img : `https://source.unsplash.com/random/204x200`,
    name: `Puma Tshirt`,
    // category: `Tshirt`,
    colour: `Black`,
    size: `XL`,
    rating: `4.6`,
    price: `49`
  },{ //5
    id : `106`,
    img : `https://source.unsplash.com/random/205x200`,
    name: `Champion Jacket`,
    // category: `Jacket`,
    colour: `Grey`,
    size: `M`,
    rating: `2.4`,
    price: `139`
  },{ //6
    id : `107`,
    img : `https://source.unsplash.com/random/206x200`,
    name: `Nike Jacket`,
    // category: `Jacket`,
    colour: `Red`,
    size: `S`,
    rating: `4.4`,
    price: `259`
  },{ //7
    id : `108`,
    img : `https://source.unsplash.com/random/207x200`,
    name: `Adidas Jacket`,
    // category: `Jacket`,
    colour: `White`,
    size: `L`,
    rating: `4.8`,
    price: `279`
  },{ //8
    id : `109`,
    img : `https://source.unsplash.com/random/208x200`,
    name: `Fila Jacket`,
    // category: `Jacket`,
    colour: `Blue`,
    size: `XS`,
    rating: `3.4`,
    price: `149`
  },{ //9
    id : `110`,
    img : `https://source.unsplash.com/random/209x200`,
    name: `Puma Jacket`,
    // category: `Jacket`,
    colour: `White`,
    size: `XL`,
    rating: `4.6`,
    price: `199`
  },{ //10
    id : `111`,
    img : `https://source.unsplash.com/random/210x200`,
    name: `Champion Pants`,
    // category: `Pants`,
    colour: `Blue`,
    size: `M`,
    rating: `2.4`,
    price: `89`
  },{ //11
    id : `112`,
    img : `https://source.unsplash.com/random/211x200`,
    name: `Nike Pants`,
    // category: `Pants`,
    colour: `Grey`,
    size: `M`,
    rating: `3.4`,
    price: `129`
  },{ //12
    id : `113`,
    img : `https://source.unsplash.com/random/212x200`,
    name: `Adidas Pants`,
    // category: `Pants`,
    colour: `White`,
    size: `XS`,
    rating: `1.4`,
    price: `89`
  },{ //13
    id : `114`,
    img : `https://source.unsplash.com/random/213x200`,
    name: `Fila Pants`,
    // category: `Pants`,
    colour: `Black`,
    size: `M`,
    rating: `2.9`,
    price: `69`
  },{ //14
    id : `115`,
    img : `https://source.unsplash.com/random/214x200`,
    name: `Puma Pants`,
    // category: `Pants`,
    colour: `White`,
    size: `L`,
    rating: `2`,
    price: `69`
  },{ //15
    id : `116`,
    img : `https://source.unsplash.com/random/215x200`,
    name: `Champion Shorts`,
    // category: `Shorts`,
    colour: `White`,
    size: `L`,
    rating: `0`,
    price: `19`
  },{ //16
    id : `117`,
    img : `https://source.unsplash.com/random/216x200`,
    name: `Nike Shorts`,
    // category: `Shorts`,
    colour: `Red`,
    size: `L`,
    rating: `2.2`,
    price: `39`
  },{ //17
    id : `118`,
    img : `https://source.unsplash.com/random/217x200`,
    name: `Adidas Shorts`,
    // category: `Shorts`,
    colour: `White`,
    size: `L`,
    rating: `0`,
    price: `23`
  },{ //18
    id : `119`,
    img : `https://source.unsplash.com/random/218x200`,
    name: `Fila Shorts`,
    // category: `Shorts`,
    colour: `Blue`,
    size: `XL`,
    rating: `2.1`,
    price: `19`
  },{ //19
    id : `120`,
    img : `https://source.unsplash.com/random/219x200`,
    name: `Puma Shorts`,
    // category: `Shorts`,
    colour: `Grey`,
    size: `S`,
    rating: `4.7`,
    price: `49`
  }
];

// FUNCTIONS
function test(){
  alert(`test`);
}

const getProductAsHtmlString = (prod) =>{
  return `
  <article class="product">
  <header class="img-pro">
      <img src=${prod.img} alt="">
  </header>
  
  <form>
      <h3>${prod.name}</h3>
      <p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>
      <ul>
        <li><label>${prod.colour}</label></li>
        <li><label>${prod.size}</label></li>
        <li><label>${prod.rating}</label></li>
        <li><label>${prod.price}</label></li>
      </ul>
  </form>
</article>
  `;
}

const renderProductsFromArray = (arr) => {
  document.getElementById(`products`).innerHTML = arr.map(getProductAsHtmlString).join(``);
  let res = `result`;
  if (arr.length == 1){
    res = `result`
  }
  document.getElementById(`numResuts`).innerHTML = `(${arr.length} ${res})`;
}

// EXE

//START
window.addEventListener(`load`, () => {
  renderProductsFromArray(allProducts);
})

//document.addEventListener("click",test);