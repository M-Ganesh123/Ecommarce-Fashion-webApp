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
      "x-rapidapi-key": "b6329641a6msh50f569605641ffep17c147jsn4591de643b27",
      "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    row.innerHTML = "";
    secondrow.innerHTML = "";
    thardrow.innerHTML = "";

    if (result) {
      result.data.products.forEach((e) => {
        const col_lg_3 = document.createElement("div");
        col_lg_3.classList.add("col-lg-3");
        col_lg_3.classList.add("col-md-4");
        col_lg_3.classList.add("px-0");
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
                    <h3>${e.product_price} <i class="fa-solid fa-bag-shopping"></i></h3> `;
        box.appendChild(content);

        col_lg_3.appendChild(box);
        value.appendChild(col_lg_3);
        // secondrow.appendChild(col_lg_3);

        // imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;
        // overlayText.innerText = `${photo.alt_description}`;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = SearchInput.value.trim();
  if (inputText !== "") {
    page = 1;
    fetchImages(inputText);
  }
});
