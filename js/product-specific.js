const detailContainer = document.querySelector(".jacket-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://sub.flopow.one/wp-json/wc/store/products/" + id;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHTML(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchProduct();

function createHTML(details) {
  detailContainer.innerHTML = ` <div class="jacket-details_image">
                                    <img src ="${details.images[0].src}" alt="${details.name}">
                                    </div>
                                    <div class="jacket-card_text">
                                        <div>
                                            <h2>${details.name}</h2>
                                            <h3> Price : ${details.prices.price}</h3>
                                        </div>
                                        <p> Price : ${details.description}</p>   
                                    
                                </div>`;
}
