      const featuredData = [
    {
        name: "Creamy Alfredo Pasta",
        image: "/image/pasta.jpg",
        desc: "Silky pasta coated in rich, buttery cream sauce with a hint of garlic.",
        time: "25 min",
        level: "Easy",
        link: ""
    },
    {
        name: "Fresh Garden Salad",
        image: "/image/salad.jpg",
        desc: "Crisp greens, cherry tomatoes, and cucumbers tossed in a light lemon dressing.",
        time: "10 min",
        level: "Easy",
        link: ""
    },
    {
        name: "Rice and Chicken",
        image: "/image/rice-and-chicked.jpg",
        desc: "Fragrant rice served with tender, spiced chicken — a hearty and flavorful classic.",
        time: "60 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Jollof Rice",
        image: "/image/jollof-rice.jpg",
        desc: "A rich, smoky blend of rice, tomatoes, and spices — a West African favorite.",
        time: "50 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Fried Rice",
        image: "/image/fried-rice.jpg",
        desc: "Colorful rice stir-fried with vegetables, liver, and a hint of spice.",
        time: "45 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Egusi Soup",
        image: "/image/egusi-soup.jpg",
        desc: "Ground melon seed soup simmered with leafy greens, peppers, and tender meat.",
        time: "45 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Pounded Yam and Egusi",
        image: "/image/pounded-yam.jpg",
        desc: "Smooth pounded yam served with hearty egusi soup — comfort food at its finest.",
        time: "55 min",
        level: "Hard",
        link: ""
    },
    {
        name: "Efo Riro",
        image: "/image/efo-riro.jpg",
        desc: "Spinach stew cooked in a rich tomato-pepper sauce with assorted meats.",
        time: "40 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Moi Moi",
        image: "/image/moimoi.jpg",
        desc: "Steamed bean pudding made with blended beans, peppers, and seasonings.",
        time: "40 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Fried Plantain (Dodo)",
        image: "/image/dodo.jpeg",
        desc: "Golden slices of ripe plantain fried to perfection — sweet, soft, and crispy.",
        time: "15 min",
        level: "Easy",
        link: ""
    },

    {
        name: "Ofada Rice and Ayamase",
        image: "/image/ofada.webp",
        desc: "Local ofada rice served with spicy green pepper sauce and assorted meat.",
        time: "60 min",
        level: "Hard",
        link: ""
    },
    {
        name: "Akara (Bean Cakes)",
        image: "/image/akara.jpeg",
        desc: "Crispy fried bean cakes made from blended black-eyed peas and spices.",
        time: "25 min",
        level: "Easy",
        link: ""
    },
   
    {
        name: "Yam Porridge (Asaro)",
        image: "/image/asaro.jpg",
        desc: "Soft yam chunks simmered in a rich pepper sauce for a warm, savory meal.",
        time: "40 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Beans and Plantain",
        image: "/image/beans-and-plantain.jpg",
        desc: "Mashed beans cooked with palm oil and spices, served with sweet fried plantains.",
        time: "50 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Okra Soup",
        image: "/image/okra-soup.webp",
        desc: "Savory, slimy soup made with fresh okra, spices, and assorted meats.",
        time: "35 min",
        level: "Medium",
        link: ""
    },
    {
        name: "Banga Soup",
        image: "/image/banga-soup.webp",
        desc: "Palm nut soup simmered with fresh spices, meat, and fish — rich and aromatic.",
        time: "60 min",
        level: "Hard",
        link: ""
    },
    {
        name: "Ofe Nsala (White soup)",
        image: "/image/nsala.jpg",
        desc: "Palm nut soup simmered with fresh spices, meat, and fish — rich and aromatic.",
        time: "60 min",
        level: "Hard",
        link: ""
    },
 {
        name: "Abacha (African Salad)",
        image: "/image/abacha.png",
        desc: "Tapioca-like cassava salad mixed with palm oil, fish, and garden eggs — vibrant and tangy.",
        time: "35 min",
        level: "Medium",
        link: ""
    }
 
];



        // Navigation module

        const featuredCard = document.querySelector(`.featured-recipes`)
        const recipeGrid = document.querySelector(`#recipeGrid`)

        // Render featured recipie
        featuredData.slice(0,3).map((food,index)=> {
            featuredCard.innerHTML +=
                `
                <a href="./recipie.html?id=${index+1}" class="recipe-card">
                    <div class="recipe-img">
                        <img src=".${food.image}"/>
                        </div>
                    <div class="recipe-content">
                        <h3>${food.name}</h3>
                        <p>Creamy pasta with crispy pancetta and parmesan</p>
                        <div class="recipe-meta">
                            <span>⏱️ ${food.time}</span>
                            <span>👨‍🍳 ${food.level}</span>
                        </div>
                    </div>
                </a>
                `
            
        })

        featuredData.map((food,index)=>{
            recipeGrid.innerHTML += `
            <a href="./recipie.html?id=${index+1}" class="recipe-card" data-name="classic carbonara">
                      <div class="recipe-img">
                        <img src=".${food.image}"/>
                        </div>
                    <div class="recipe-content">
                        <h3 id="food-name">${food.name}</h3>
                        <p>${food.desc}</p>
                        <div class="recipe-meta">
                            <span id="food-time">⏱️ ${food.time}</span>
                            <span id="food-level">👨‍🍳 ${food.level}</span>
                        </div>
                    </div>
                </a>
            `
        })

        
        const Navigation = {
            init() {
                this.setupPageLinks();
                this.setupMobileMenu();
            },

            setupPageLinks() {
                const links = document.querySelectorAll('[data-page]');
                links.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const targetPage = e.target.dataset.page;
                        this.showPage(targetPage);
                        
                        const mobileMenu = document.querySelector('.nav-links');
                        if (mobileMenu.classList.contains('active')) {
                            mobileMenu.classList.remove('active');
                        }
                    });
                });
            },

            showPage(pageName) {
                const pages = document.querySelectorAll('.page');
                pages.forEach(page => page.classList.remove('active'));
                
                const targetPage = document.getElementById(pageName);
                if (targetPage) {
                    targetPage.classList.add('active');
                    window.scrollTo(0, 0);
                }
            },

            setupMobileMenu() {
                const toggle = document.querySelector('.menu-toggle');
                const menu = document.querySelector('.nav-links');
                
                toggle.addEventListener('click', () => {
                    menu.classList.toggle('active');
                });
            }
        };

        // Search module
       const Search = {
  init() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.filterRecipes(e.target.value);
      });
    }
  },

  filterRecipes(query) {
    const cards = document.querySelectorAll('.recipe-card');
    const searchTerm = query.toLowerCase().trim();

    cards.forEach((card) => {
    
      const recipeName = card.querySelector('#food-name')?.textContent.toLowerCase() || '';
     
      // Show if it matches the search text
      if (recipeName.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  },
};

// Initialize
Search.init();


        // Form validation module
        const FormValidation = {
            init() {
                const form = document.getElementById('contactForm');
                if (form) {
                    form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        this.validateForm(form);
                    });
                }
            },

            validateForm(form) {
                let isValid = true;

                const name = form.querySelector('#name');
                const email = form.querySelector('#email');
                const message = form.querySelector('#message');

                const nameError = document.getElementById('nameError');
                const emailError = document.getElementById('emailError');
                const messageError = document.getElementById('messageError');

                // Reset errors
                nameError.style.display = 'none';
                emailError.style.display = 'none';
                messageError.style.display = 'none';

                // Validate name
                if (name.value.trim() === '') {
                    nameError.style.display = 'block';
                    isValid = false;
                }

                // Validate email
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email.value)) {
                    emailError.style.display = 'block';
                    isValid = false;
                }

                // Validate message
                if (message.value.trim() === '') {
                    messageError.style.display = 'block';
                    isValid = false;
                }

                if (isValid) {
                    alert('Thank you for your message! We\'ll get back to you soon.');
                   window.open(
  "https://wa.me/2348167175343?text=" + 
  encodeURIComponent("Hi, I am " + name.value + "\n" + message.value),
  "_blank"
);
                    form.reset();
                }
            }
        };

        // Initialize all modules
        document.addEventListener('DOMContentLoaded', () => {
            Navigation.init();
            Search.init();
            FormValidation.init();
        });
