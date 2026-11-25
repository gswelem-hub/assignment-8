
// =====================================
// 1. Meals Data
// =====================================

const meals = [

    {
        name: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=1000",

        difficulty: "Easy",
        category: "Italian",
        rating: 4.8,
        reviews: 234,

        prepTime: 15,
        cookTime: 20,
        servings: 4,

        ingredients: [
            "400g spaghetti pasta",
            "200g pancetta or guanciale, diced",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "50g Parmesan cheese, grated",
            "Freshly ground black pepper",
            "Salt for pasta water"
        ],

        instructions: [
            "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
            "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
            "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
            "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
            "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta continuously.",
            "Add pasta water gradually until the sauce becomes creamy. Serve immediately with extra cheese."
        ],

        nutrition: {
            calories: "520 kcal",
            protein: "28g",
            carbohydrates: "62g",
            fat: "18g",
            fiber: "3g",
            sodium: "680mg"
        },

        tips: [
            "Use freshly grated Parmesan and Pecorino cheese for the best flavor.",
            "Always remove the pan from heat before adding the egg mixture.",
            "Save some pasta water to make the sauce extra creamy.",
            "Serve immediately while the pasta is warm."
        ]
    },


    {
        name: "Teriyaki Chicken Bowl",
        description: "Sweet and savory chicken over rice with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000",

        difficulty: "Easy",
        category: "Asian",
        rating: 4.7,
        reviews: 367,

        prepTime: 20,
        cookTime: 35,
        servings: 4,

        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil"
        ],

        instructions: [
            "Cut the chicken thighs into small slices.",
            "Heat sesame oil in a large skillet over medium heat.",
            "Add chicken and cook until golden and fully cooked.",
            "Pour in teriyaki sauce and stir until the chicken is coated.",
            "Steam broccoli and carrots until tender.",
            "Serve chicken over cooked rice with vegetables.",
            "Garnish with sesame seeds and green onions."
        ],

        nutrition: {
            calories: "480 kcal",
            protein: "35g",
            carbohydrates: "55g",
            fat: "14g",
            fiber: "5g",
            sodium: "720mg"
        },

        tips: [
            "Marinate the chicken for at least 30 minutes for extra flavor.",
            "Use fresh vegetables to add color and crunch.",
            "Add sesame seeds just before serving.",
            "You can use brown rice for a healthier option."
        ]
    },


    {
        name: "Margherita Pizza",
        description: "Classic Italian pizza with tomato sauce and fresh mozzarella.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1000",

        difficulty: "Medium",
        category: "Italian",
        rating: 4.9,
        reviews: 412,

        prepTime: 25,
        cookTime: 30,
        servings: 3,

        ingredients: [
            "Pizza dough",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "Salt and black pepper"
        ],

        instructions: [
            "Preheat the oven to 220°C.",
            "Roll out the pizza dough on a floured surface.",
            "Spread tomato sauce evenly over the dough.",
            "Add mozzarella cheese and a little olive oil.",
            "Bake for 12-15 minutes until the crust is golden.",
            "Add fresh basil leaves before serving."
        ],

        nutrition: {
            calories: "300 kcal",
            protein: "14g",
            carbohydrates: "36g",
            fat: "12g",
            fiber: "2g",
            sodium: "590mg"
        },

        tips: [
            "Use fresh mozzarella for a creamy texture.",
            "Do not add too much tomato sauce.",
            "Preheat your oven properly before baking.",
            "Add basil after baking to keep its fresh flavor."
        ]
    },


    {
        name: "Grilled Chicken",
        description: "Healthy grilled chicken served with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=1000",

        difficulty: "Easy",
        category: "Healthy",
        rating: 4.6,
        reviews: 198,

        prepTime: 15,
        cookTime: 25,
        servings: 2,

        ingredients: [
            "2 chicken breasts",
            "2 tablespoons olive oil",
            "2 tablespoons lemon juice",
            "2 garlic cloves",
            "Black pepper",
            "Salt",
            "Mixed vegetables"
        ],

        instructions: [
            "Mix olive oil, lemon juice, garlic, salt and pepper.",
            "Coat the chicken breasts with the marinade.",
            "Leave the chicken to marinate for at least 15 minutes.",
            "Heat a grill pan over medium heat.",
            "Grill chicken until fully cooked, turning halfway through.",
            "Prepare the vegetables and serve with chicken."
        ],

        nutrition: {
            calories: "350 kcal",
            protein: "40g",
            carbohydrates: "12g",
            fat: "14g",
            fiber: "4g",
            sodium: "450mg"
        },

        tips: [
            "Marinate chicken before grilling for better flavor.",
            "Avoid turning the chicken too frequently.",
            "Use a food thermometer to check that chicken is safely cooked.",
            "Let the chicken rest before slicing."
        ]
    },


    {
        name: "Homemade Pancakes",
        description: "Soft and fluffy pancakes perfect for breakfast.",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1000",

        difficulty: "Easy",
        category: "Breakfast",
        rating: 4.9,
        reviews: 520,

        prepTime: 10,
        cookTime: 15,
        servings: 3,

        ingredients: [
            "1 cup all-purpose flour",
            "1 egg",
            "1 cup milk",
            "2 tablespoons sugar",
            "1 teaspoon baking powder",
            "1 tablespoon melted butter",
            "A pinch of salt"
        ],

        instructions: [
            "Mix flour, sugar, baking powder and salt in a bowl.",
            "Add egg, milk and melted butter.",
            "Whisk until the batter is smooth.",
            "Heat a non-stick pan over medium heat.",
            "Pour a small amount of batter into the pan.",
            "Cook until bubbles appear, then flip the pancake.",
            "Serve with honey, fruits or chocolate."
        ],

        nutrition: {
            calories: "280 kcal",
            protein: "9g",
            carbohydrates: "38g",
            fat: "10g",
            fiber: "2g",
            sodium: "390mg"
        },

        tips: [
            "Do not overmix the pancake batter.",
            "Let the batter rest for 5 minutes before cooking.",
            "Cook on medium heat to avoid burning.",
            "Serve with fresh fruits and honey."
        ]
    },


    {
        name: "Beef Lasagna",
        description: "Rich and delicious layers of pasta, beef, tomato sauce and cheese.",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=1000",

        difficulty: "Medium",
        category: "Italian",
        rating: 4.9,
        reviews: 305,

        prepTime: 30,
        cookTime: 45,
        servings: 6,

        ingredients: [
            "Lasagna pasta sheets",
            "500g ground beef",
            "2 cups tomato sauce",
            "1 onion, chopped",
            "2 cups mozzarella cheese",
            "1 cup Parmesan cheese",
            "1 cup béchamel sauce",
            "Salt and black pepper"
        ],

        instructions: [
            "Preheat the oven to 180°C.",
            "Cook chopped onion and ground beef in a pan.",
            "Add tomato sauce and season with salt and pepper.",
            "Prepare the béchamel sauce.",
            "Layer pasta sheets, meat sauce, béchamel and cheese in a baking dish.",
            "Repeat the layers until all ingredients are used.",
            "Cover with mozzarella and Parmesan cheese.",
            "Bake for 40-45 minutes until golden and bubbly.",
            "Allow the lasagna to rest before slicing."
        ],

        nutrition: {
            calories: "620 kcal",
            protein: "35g",
            carbohydrates: "48g",
            fat: "30g",
            fiber: "4g",
            sodium: "850mg"
        },

        tips: [
            "Allow the lasagna to rest before cutting it.",
            "Use a combination of mozzarella and Parmesan cheese.",
            "Do not add too much sauce between the layers.",
            "Cover with foil during the first part of baking if the top browns too quickly."
        ]
    },

{
    name: "Classic Beef Burger",
    description: "Juicy homemade beef burger with cheese and fresh vegetables.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000",

    difficulty: "Easy",
    category: "American",
    rating: 4.8,
    reviews: 320,

    prepTime: 15,
    cookTime: 20,
    servings: 2,

    ingredients: [
        "2 burger buns",
        "300g ground beef",
        "2 slices cheddar cheese",
        "Lettuce leaves",
        "2 tomato slices",
        "Salt and black pepper"
    ],

    instructions: [
        "Season the ground beef with salt and black pepper.",
        "Shape the beef into burger patties.",
        "Heat a pan over medium heat.",
        "Cook the patties until fully cooked.",
        "Add cheddar cheese on top of the patties.",
        "Toast the burger buns lightly.",
        "Assemble the burger with lettuce, tomato and beef."
    ],

    nutrition: {
        calories: "550 kcal",
        protein: "32g",
        carbohydrates: "40g",
        fat: "28g",
        fiber: "3g",
        sodium: "750mg"
    },

    tips: [
        "Use fresh ground beef for the best flavor.",
        "Do not press the burger while cooking.",
        "Toast the buns for extra crunch.",
        "Allow the burger to rest before serving."
    ]
}


];


// =====================================
// 2. HTML Elements
// =====================================

const mealImage = document.getElementById("meal-image");

const mealName = document.getElementById("meal-name");

const description = document.getElementById("description");

const category = document.getElementById("category");

const difficulty = document.getElementById("difficulty");

const rating = document.getElementById("rating");

const reviews = document.getElementById("reviews");

const prepTime = document.getElementById("prep-time");

const cookTime = document.getElementById("cook-time");

const servings = document.getElementById("servings");

const tabContent = document.getElementById("tab-content");

const randomBtn = document.getElementById("random-btn");

const bookmarkBtn = document.getElementById("bookmark-btn");

const shareBtn = document.getElementById("share-btn");

const timeWarning = document.getElementById("time-warning");

const tabs = document.querySelectorAll(".tab");

const savedBtn = document.getElementById("saved-btn");

const historyBtn = document.getElementById("history-btn");

const settingsBtn = document.getElementById("settings-btn");


// =====================================
// 3. Application Variables
// =====================================

let currentMeal = null;

let savedMeals = [];

let mealHistory = [];


// =====================================
// 4. Display Meal Function
// =====================================

function displayMeal(meal) {

    currentMeal = meal;

    mealImage.src = meal.image;

    mealImage.alt = meal.name;

    mealName.textContent = meal.name;

    description.textContent = meal.description;

    category.textContent = meal.category;

    difficulty.textContent = meal.difficulty;

    rating.textContent = meal.rating;

    reviews.textContent = `(${meal.reviews} reviews)`;

    prepTime.textContent = `${meal.prepTime} min`;

    cookTime.textContent = `${meal.cookTime} min`;

    servings.textContent = `${meal.servings} people`;


    // Check Extended Preparation Time

    const totalTime = meal.prepTime + meal.cookTime;

    if (totalTime > 45) {

        timeWarning.hidden = false;

    } else {

        timeWarning.hidden = true;

    }


    // Update Bookmark Appearance

    updateBookmarkButton();


    // Reset Tabs

    tabs.forEach(function(tab) {

        tab.classList.remove("active");

    });

    document.querySelector('[data-tab="ingredients"]')
        .classList.add("active");


    // Show Ingredients by Default

    displayTab("ingredients", meal);

}


// =====================================
// 5. Random Meal Function
// =====================================

function getRandomMeal() {

    let availableMeals = meals.filter(function(meal) {

        return meal !== currentMeal;

    });

    const randomIndex = Math.floor(
        Math.random() * availableMeals.length
    );

    const randomMeal = availableMeals[randomIndex];

    displayMeal(randomMeal);

    mealHistory.unshift(randomMeal.name);

    return randomMeal;

}


// =====================================
// 6. Display Tab Function
// =====================================

function displayTab(tab, meal) {

    let content = "";


    // Ingredients

    if (tab === "ingredients") {

        content = `

            <h3>Ingredients</h3>

            <ul class="ingredients-list">

                ${meal.ingredients.map(function(item, index) {

                    return `

                        <li>

                            <span class="ingredient-number">
                                ${index + 1}
                            </span>

                            <span>${item}</span>

                        </li>

                    `;

                }).join("")}

            </ul>

        `;

    }


    // Instructions

    else if (tab === "instructions") {

        content = `

            <h3>Instructions</h3>

            <ol class="instructions-list">

                ${meal.instructions.map(function(item, index) {

                    return `

                        <li>

                            <span class="instruction-number">
                                ${index + 1}
                            </span>

                            <span>${item}</span>

                        </li>

                    `;

                }).join("")}

            </ol>

        `;

    }


    // Nutrition

    else if (tab === "nutrition") {

        const nutritionItems = [

            {
                name: "Calories",
                value: meal.nutrition.calories,
                icon: "fa-fire-flame-curved",
                className: "calories"
            },

            {
                name: "Protein",
                value: meal.nutrition.protein,
                icon: "fa-dumbbell",
                className: "protein"
            },

            {
                name: "Carbohydrates",
                value: meal.nutrition.carbohydrates,
                icon: "fa-wheat-awn",
                className: "carbs"
            },

            {
                name: "Fat",
                value: meal.nutrition.fat,
                icon: "fa-droplet",
                className: "fat"
            },

            {
                name: "Fiber",
                value: meal.nutrition.fiber,
                icon: "fa-seedling",
                className: "fiber"
            },

            {
                name: "Sodium",
                value: meal.nutrition.sodium,
                icon: "fa-cube",
                className: "sodium"
            }

        ];


        content = `

            <div class="nutrition-grid">

                ${nutritionItems.map(function(item) {

                    return `

                        <div class="nutrition-item">

                            <div class="nutrition-icon ${item.className}">

                                <i class="fa-solid ${item.icon}"></i>

                            </div>

                            <span class="nutrition-label">
                                ${item.name}
                            </span>

                            <strong class="nutrition-value">
                                ${item.value}
                            </strong>

                        </div>

                    `;

                }).join("")}

            </div>

        `;

    }


    // Chef's Tips

    else if (tab === "tips") {

        content = `

            <h3>Chef's Tips</h3>

            <div class="tips-list">

                ${meal.tips.map(function(tip) {

                    return `

                        <div class="tip-item">

                            <span class="tip-check">

                                <i class="fa-solid fa-check"></i>

                            </span>

                            <span>${tip}</span>

                        </div>

                    `;

                }).join("")}

            </div>

        `;

    }


    tabContent.innerHTML = content;

}


// =====================================
// 7. Tabs Click Events
// =====================================

tabs.forEach(function(button) {

    button.addEventListener("click", function() {

        tabs.forEach(function(tab) {

            tab.classList.remove("active");

        });

        button.classList.add("active");

        const selectedTab = button.dataset.tab;

        displayTab(selectedTab, currentMeal);

    });

});


// =====================================
// 8. Try Another Recipe Button
// =====================================

randomBtn.addEventListener("click", function() {

    getRandomMeal();

});


// =====================================
// 9. Bookmark Function
// =====================================

function updateBookmarkButton() {

    const icon = bookmarkBtn.querySelector("i");

    const isSaved = savedMeals.includes(currentMeal.name);

    if (isSaved) {

        bookmarkBtn.classList.add("saved");

        icon.className = "fa-solid fa-bookmark";

    } else {

        bookmarkBtn.classList.remove("saved");

        icon.className = "fa-regular fa-bookmark";

    }

}


bookmarkBtn.addEventListener("click", function() {

    const mealNameValue = currentMeal.name;

    if (savedMeals.includes(mealNameValue)) {

        savedMeals = savedMeals.filter(function(name) {

            return name !== mealNameValue;

        });

    } else {

        savedMeals.push(mealNameValue);

    }

    updateBookmarkButton();

});


// =====================================
// 10. Share Recipe Function
// =====================================

shareBtn.addEventListener("click", async function() {

    const shareText = `Check out this recipe: ${currentMeal.name}`;

    try {

        if (navigator.share) {

            await navigator.share({

                title: currentMeal.name,

                text: shareText,

                url: window.location.href

            });

        } else {

            await navigator.clipboard.writeText(

                shareText + " - " + window.location.href

            );

            alert("Recipe link copied successfully!");

        }

    } catch (error) {

        if (error.name !== "AbortError") {

            alert("Unable to share this recipe.");

        }

    }

});


// =====================================
// 11. Saved Recipes Button
// =====================================

savedBtn.addEventListener("click", function() {

    if (savedMeals.length === 0) {

        alert("You haven't saved any recipes yet!");

    } else {

        alert(

            "Your Saved Recipes:\n\n" + savedMeals.join("\n")

        );

    }

});


// =====================================
// 12. History Button
// =====================================

historyBtn.addEventListener("click", function() {

    if (mealHistory.length === 0) {

        alert("No recipe history yet!");

    } else {

        alert(

            "Recently Viewed Recipes:\n\n" +

            mealHistory.slice(0, 10).join("\n")

        );

    }

});


// =====================================
// 13. Settings Button
// =====================================

settingsBtn.addEventListener("click", function() {

    alert("Settings will be available soon!");

});


// =====================================
// 14. Initial Meal
// =====================================

displayMeal(meals[0]);

mealHistory.push(meals[0].name);
