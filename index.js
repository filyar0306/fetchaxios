const categoriesDiv = document.getElementById("category");
const inpOne = document.getElementById("inp");
const inpTwo = document.getElementById("inp1");
const btn = document.getElementById("btn");

// 1.Ən bahalı məhsul
// let maxPrice = 0;
// let maxProduct;
 
// fetch("https://northwind.vercel.app/api/products")
//  .then(res => res.json())
//  .then(products => {
//     products.forEach(product => {
//       if (product.unitPrice > maxPrice) {
//         maxPrice = product.unitPrice;
//         maxProduct = product;
//       }
//     });
//     console.log("Ən baha məhsul :", maxProduct);
//  });





// 2. Ortalama stok miqdarı
// fetch("https://northwind.vercel.app/api/products")
//     .then(res => res.json())
//     .then(products => {
//         let totalPrices = 0;
//         products.forEach(product => {
//                 totalPrices += product.unitsInStock;
//         });
//         let netice = totalPrices / products.length;
//         console.log("Ortalama stok miqdarı:" ,netice);
//     });



// 3.“C” ilə başlayan məhsullar 
// fetch('https://northwind.vercel.app/api/products')
//  .then(res => res.json())
//  .then(data => {
//     const filteredProducts = data.filter(item => item.name.startsWith('C'));
//     console.log(filteredProducts);
//  });




// 4.“London” şəhərindəki müştəriləri console a yaz 
// fetch("https://northwind.vercel.app/api/customers") 
// .then(res => res.json()) 
// .then(customers => { 
// const londonUsers = customers.filter(item => item.address.city === "London"); 
// const companyNames = londonUsers.map(item => item.companyName);
// console.log(companyNames);
//  })



// 5.Region NULL olan nə qədər customer var?
// fetch('https://northwind.vercel.app/api/customers')
//  .then(res => res.json())
//  .then(data => {
//     const myRegion = data.filter(item => item.region = "NULL")
//     console.log(myRegion);
//  })




// 6.Id-si 1 olan userin nə qədər postu var?
// fetch('http://jsonplaceholder.typicode.com/posts')
//  .then(res => res.json())
//  .then(data => {
//     const IdPost = data.filter(item => item.userİd == "1")
//     console.log(IdPost.length);
//  })




// 7. 1nömrəli albümdə nə qədər fotoqraf var?
// fetch('https://jsonplaceholder.typicode.com/albums')
//  .then(res => res.json())
//  .then(data => {
//     const myPhoto = data.filter(item => item.userId == "1")
//     console.log(myPhoto.length);
//  })











