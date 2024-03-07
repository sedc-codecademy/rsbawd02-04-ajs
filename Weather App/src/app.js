const handleNavItemClick = (index) => {
  const pages = document.querySelectorAll(".page");

  // hide all pages
  pages.forEach((page) => {
    page.style.display = 'none';
  });

  // show current page
  pages[index].style.display = 'block';
};

const addNavigationClickEvents = () => {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((navItem, index) => {
    navItem.addEventListener("click", () => {
      handleNavItemClick(index);
    });
  });
};

const onSearchButtonClicked = (event) => {
    event.preventDefault();
    const citySearchInput = document.getElementById('citySearchInput');
    console.log('city', citySearchInput.value);
}

const handleSearch = () => {
    const citySearchBtn = document.getElementById('citySearchBtn');
    citySearchBtn.addEventListener('click', onSearchButtonClicked);
}


(function onPageLoad () {
    addNavigationClickEvents();
    handleSearch();
})();


const baseUrl = 'https://api.openweathermap.org/data/2.5';
const city = 'Beograd';
const API_KEY = '729c0864654d5aff9c215c3031f711fc';

fetch(`${baseUrl}/forecast?q=${city}&units=metric&APPID=${API_KEY}`)
.then((res) => res.json())
.then((res) => console.log(res))
.catch((err) => console.error('API error', err));