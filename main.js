
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = () => {
    dropDownMenu.classList.toggle("open");

    const isOpen = dropDownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}


//Rating Stars

// Initial Ratings
const ratings = {
    chatgpt: 4.5,
    synthesia: 4,
    rytr: 4,
    bigspeak: 3,
    letsEnhance: 4,
    magicStudio: 3,
    openAi: 5,
    wixAdi: 4,
    Ocoya: 3
  }

  // Total Stars
  const starsTotal = 5;

  // Run getRatings when DOM loads
  document.addEventListener('DOMContentLoaded', getRatings);

  // Form Elements
  const productSelect = document.getElementById('product-select');
  const ratingControl = document.getElementById('rating-control');

  // Init product
  let product;

  // Product select change
  productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
  });

  // Rating control change
  ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;


    getRatings();
  });

  // Get ratings
  function getRatings() {
    for (let rating in ratings) {
      // Get percentage
      const starPercentage = (ratings[rating] / starsTotal) * 100;

      // Round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      // Set width of stars-inner to percentage
      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    }
  }