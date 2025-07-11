// Meals Data

const meals = {
  Healthy: {
    breakfast: [
      "Oatmeal with berries",
      "Avocado toast",
      "Greek yogurt and granola",
    ],
    lunch: [
      "Grilled chicken salad",
      "Quinoa and roasted veggies",
      "Tuna wrap with spinach",
    ],
    dinner: [
      "Baked salmon with broccoli",
      "Stir-fry tofu and brown rice",
      "Zucchini noodles with turkey meatballs",
    ],
  },
  Bulking: {
    breakfast: [
      "Protein pancakes",
      "Eggs with sausage and toast",
      "Smoothie with peanut butter and oats",
    ],
    lunch: [
      "Chicken and rice bowl",
      "Steak sandwich with sweet potato fries",
      "Pasta with meat sauce",
    ],
    dinner: [
      "Beef stir-fry with noodles",
      "Burgers with avocado",
      "Meatballs and mashed potatoes",
    ],
  },
  Budget: {
    breakfast: [
      "Peanut butter toast",
      "Banana and cereal",
      "Scrambled eggs and leftover rice",
    ],
    lunch: ["Ramen with egg", "Grilled cheese sandwich", "Tuna and crackers"],
    dinner: ["Beans and rice", "Mac and cheese", "Frozen pizza"],
  },
};

// Selecting Element from the HTML page

const btnGenerater = document.querySelector(".generate-btn");
const goalSelector = document.querySelector("#goal");
const mealPlanViewer = document.querySelector(".meal-plan-viewer");

// Function randomMeals generater

const randomMeals = () => {
  const value = goalSelector.value;

  mealPlanViewer.innerHTML = ""

  // Loop to create and append elements to HTML page

  for (const type of Object.keys(meals[value])) {
    const mealArray = meals[value][type];
    const randomIndex = Math.floor(Math.random() * mealArray.length);
    const randomMeal = mealArray[randomIndex];

    const mealDiv = document.createElement("div");
    mealDiv.classList.add("meal-item");

    const mealType = document.createElement("h3");
    mealType.classList.add("meal-type");
    mealType.innerText = `${type}`;

    const mealName = document.createElement("p");
    mealName.classList.add("meal-name");
    mealName.innerText = `${randomMeal}`;

    mealDiv.append(mealType);
    mealDiv.append(mealName);
    mealPlanViewer.append(mealDiv);
  }
   
};

// Do something when the btn is clicked

btnGenerater.addEventListener("click", randomMeals);
