let page = document.querySelectorAll(".card-item");
let secondPage = document.querySelectorAll(".c1");
let thardPage = document.querySelectorAll(".c2");
const searchform = document.querySelector("form");
const SearchInput = document.querySelector(".Search-input");
let arr = Array.from(page);
let row = document.querySelector(".datarow");
let secondrow = document.querySelector(".seconddatarow");
let thardrow = document.querySelector(".tharddatarow");
// image slider js
console.log(arr);

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    620: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
// function newPageOpen() {
//   window.open("tem.html", "_self");
// }
arr.forEach((element) => {
  element.addEventListener("click", () => {
    // console.log(element.querySelector("h2").innerHTML);
    fetchImages(element.querySelector("h2").innerHTML, row);
  });
});
secondPage.forEach((element) => {
  element.addEventListener("click", () => {
    // console.log(element.querySelector("h2").innerHTML);
    fetchImages(element.querySelector("h2").innerHTML, secondrow);
  });
});
thardPage.forEach((element) => {
  element.addEventListener("click", () => {
    // console.log(element.querySelector("h2").innerHTML);
    fetchImages(element.querySelector("h2").innerHTML, thardrow);
  });
});
const fetchImages = async (query, value) => {
  console.log(query);
  const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a82b059de3msh754927c6605ffc7p10ddb9jsn12f49777213a",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    row.innerHTML = "";
    secondrow.innerHTML = "";
    thardrow.innerHTML = "";

    if (result) {
      result.data.products.forEach((e) => {
        console.log(e);
        console.log("hiiii");
        const col_lg_3 = document.createElement("div");
        col_lg_3.classList.add("col-lg-3");
        col_lg_3.classList.add("col-md-4");
        col_lg_3.classList.add("col-6");
        const box = document.createElement("div");
        box.classList.add("box");
        const content = document.createElement("div");
        content.classList.add("content");
        box.innerHTML = `<img src="${e.product_photo}"/>`;
        let title =
          e.product_title.length > 30
            ? e.product_title.slice(0, 50) + "..."
            : e.product_title;

        content.innerHTML = ` <h4>${title}</h4>  
                    <h3>${e.product_price}</h3>`;
        box.appendChild(content);

        col_lg_3.appendChild(box);
        value.appendChild(col_lg_3);
        // secondrow.appendChild(col_lg_3);

        // imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;
        // overlayText.innerText = `${photo.alt_description}`;
      });
    }
  } catch (error) {
    console.error(error);
  }
};
// const fetchImages = async (query) => {
//   try {
//     console.log(query);
//     const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${query}&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;
//     const options = {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "a82b059de3msh754927c6605ffc7p10ddb9jsn12f49777213a",
//         "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);
//       const products = result.seller_products;
//       if (result.data.length > 0) {
//         result.data.forEach((photo) => {
//           const col_lg_3 = document.createElement("div");
//           col_lg_3.classList.add("databox");
//           const box = document.createElement("div");
//           box.classList.add("box");
//           const content = document.createElement("div");
//           content.classList.add("content");
//           // const title = document.createElement("h4");
//           // const price = document.createElement("h3");
//           // title.classList.add("title");
//           box.innerHTML = `<img src="${result.data.products.product_photo}"/>`;
//           content.innerHTML = ` <h4>${result.data.products.product_title}</h4>
//                     <h3>$2500</h3>`;
//           box.appendChild(content);

//           col_lg_3.appendChild(box);
//           row.appendChild(col_lg_3);

//           // const overlayElement = document.createElement("div");
//           // overlayElement.classList.add("overlay");

//           // const overlayText = document.createElement("h3");
//           // overlayText.innerText = `${photo.alt_description}`;

//           // overlayElement.appendChild(overlayText);
//           // imageElement.appendChild(overlayElement);
//           // imagesContainer.appendChild(imageElement);
//         });

//         // if (data.total_pages === pageNo) {
//         //   loadMoreBtn.style.display = "none";
//         // } else {
//         //   loadMoreBtn.style.display = "block";
//         // }
//       }
//       // for (let i = 0; i < 35; i++) {
//       //   const title = result.data.products[i].product_title;
//       //   const price = result.data.products[i].product_price;
//       //   const photo_az = result.data.products[i].product_photo;

//       //   console.log(`Title:${title}, price : ${price}, photo : ${photo_az}`);
//       // }
//     } catch (error) {
//       console.error(error);
//     }

//     console.log(result);

//     if (result.data.length > 0) {
//       results.data.forEach((photo) => {
//         const col_lg_3 = document.createElement("div");
//         col_lg_3.classList.add("col-lg-3");
//         const box = document.createElement("div");
//         box.classList.add("box");
//         const content = document.createElement("div");
//         content.classList.add("content");
//         const title = document.createElement("h4");
//         const price = document.createElement("h3");
//         title.classList.add("title");
//         box.innerHTML = `<img src="${photo.urls.regular}"/>`;
//         content.innerHTML = ` <h4>title</h4>
//                   <h3>$2500</h3>`;
//         box.appendChild(content);

//         col_lg_3.appendChild(box);
//         row.appendChild(col_lg_3);
//         // const overlayElement = document.createElement("div");
//         // overlayElement.classList.add("overlay");

//         // const overlayText = document.createElement("h3");
//         // overlayText.innerText = `${photo.alt_description}`;

//         // overlayElement.appendChild(overlayText);
//         // imageElement.appendChild(overlayElement);
//         // imagesContainer.appendChild(imageElement);
//       });

//       // if (data.total_pages === pageNo) {
//       //   loadMoreBtn.style.display = "none";
//       // } else {
//       //   loadMoreBtn.style.display = "block";
//       // }
//     } else {
//       imagesContainer.innerHTML = `<h2>No image found.</h2>`;
//       if (loadMoreBtn.style.display === "block") {
//         loadMoreBtn.style.display = "none";
//       }
//     }
//   } catch (error) {
//     // imagesContainer.innerHTML = `<h2>failed to fetch images. plese try again later.</h2>`;
//   }
// };

searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = SearchInput.value.trim();
  if (inputText !== "") {
    page = 1;
    fetchImages(inputText);
  } // else {
  //   imagesContainer.innerHTML = `<h2>Please enter a search query.</h2>`;
  // }
});
