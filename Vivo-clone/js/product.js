// =========================
// PRODUCT DATA
// =========================

const products = {

  x200:{

    name:"vivo X200 Pro",

    image:"assets/x200-pro.jpeg",

    price:"₹89,999",

    description:
    "Experience flagship photography with ZEISS optics and AI imaging.",

    spec1:"200MP",
    spec2:"6000mAh",
    spec3:"120Hz AMOLED",
    spec4:"16GB"
  },

  v40:{

    name:"vivo V40 Pro",

    image:"assets/v40.jpeg",

    price:"₹49,999",

    description:
    "Premium portrait camera smartphone with Aura Light technology.",

    spec1:"50MP",
    spec2:"5000mAh",
    spec3:"120Hz AMOLED",
    spec4:"12GB"
  },

  y300:{

    name:"vivo Y300 Pro",

    image:"assets/y300.jpeg",

    price:"₹29,999",

    description:
    "Powerful battery and smooth performance for daily usage.",

    spec1:"64MP",
    spec2:"6000mAh",
    spec3:"120Hz Display",
    spec4:"8GB"
  },

  x100:{

    name:"vivo X100 Ultra",

    image:"assets/x100.jpg",

    price:"₹79,999",

    description:
    "Ultra-premium photography flagship with periscope zoom.",

    spec1:"200MP",
    spec2:"5400mAh",
    spec3:"2K AMOLED",
    spec4:"16GB"
  },

  v30:{

    name:"vivo V30 Pro",

    image:"assets/v30-pro.jpeg",

    price:"₹42,999",

    description:
    "Professional portrait photography powered by AI enhancement.",

    spec1:"50MP",
    spec2:"5000mAh",
    spec3:"120Hz AMOLED",
    spec4:"12GB"
  },

  y200:{

    name:"vivo Y200",

    image:"assets/y200.webp",

    price:"₹24,999",

    description:
    "Affordable performance smartphone with stylish design.",

    spec1:"64MP",
    spec2:"4800mAh",
    spec3:"120Hz Display",
    spec4:"8GB"
  }

};


// =========================
// GET URL PARAMETER
// =========================

const params =
new URLSearchParams(window.location.search);

const phone =
params.get("phone");


// =========================
// LOAD PRODUCT
// =========================

const product =
products[phone];

if(product){

  document.getElementById("productName")
  .innerText = product.name;

  const productImage =
document.getElementById("productImage");

productImage.src = product.image;

productImage.onerror = function(){

  console.log(
    "Image not found:",
    product.image
  );

};

  document.getElementById("productPrice")
  .innerText = product.price;

  document.getElementById("productDescription")
  .innerText = product.description;

  document.getElementById("spec1")
  .innerText = product.spec1;

  document.getElementById("spec2")
  .innerText = product.spec2;

  document.getElementById("spec3")
  .innerText = product.spec3;

  document.getElementById("spec4")
  .innerText = product.spec4;

}
