/*************************************
 🍽️ TypeScript Practice: Menu Functions
**************************************/

// ✅ Step 1: Create a `MenuItem` interface
/**********
 * The MenuItem interface should contain the following keys:
 * 1. id of type number
 * 2. name of type string
 * 3. category of type string
 * 4. price of type number
 * 5. ingridents of type array of strings
 *
 * *************/
interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  ingredients: string[];
}

// ✅ Step 2: Use this array to test your answers
const menu: MenuItem[] = [
  {
    id: 301,
    name: "Pasta",
    category: "Main Course",
    price: 12.99,
    ingredients: ["Penne", "Tomato Sauce", "Parmesan", "Basil"],
  },
  {
    id: 302,
    name: "Caesar Salad",
    category: "Salad",
    price: 8.99,
    ingredients: ["Lettuce", "Croutons", "Caesar Dressing", "Parmesan"],
  },
  {
    id: 303,
    name: "Burger",
    category: "Main Course",
    price: 10.99,
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Cheese", "Bun"],
  },
  {
    id: 304,
    name: "French Fries",
    category: "Side Dish",
    price: 4.99,
    ingredients: ["Potatoes", "Salt", "Oil"],
  },
  {
    id: 305,
    name: "Cheesecake",
    category: "Dessert",
    price: 6.99,
    ingredients: ["Cream Cheese", "Graham Cracker Crust", "Strawberries"],
  },
];

/*************************************
 ✅ Question 1:
 Create a function `getMenuItemName` that:
 - Accepts a `MenuItem`
 - Returns the name of the item
*************************************/
const getMenuItemName = (item: MenuItem): string => {
  let itemName = item.name;
  return itemName;
};

console.log(getMenuItemName(menu[0]));

/*************************************
 ✅ Question 2:
 Create a function `isMenuItemInCategory` that:
 - Accepts a `MenuItem` and a `category` string
 - Returns true if the item belongs to that category
*************************************/
const isMenuItemInCategory = (
  MenuItem: MenuItem,
  category: string
): boolean => {
  if (MenuItem.category === category) {
    return true;
  } else {
    return false;
  }
};

console.log(isMenuItemInCategory(menu[1], "Salad"));

/*************************************
 ✅ Question 3:
 Create a function `addMenuItem` that:
 - Accepts a `MenuItem[]` array and a new `MenuItem`
 - Adds the new item to the array
 - Returns the updated array
*************************************/
function addMenuItem(menu: MenuItem[], newItem: MenuItem): MenuItem[] {
  menu.push(newItem);
  return menu;
}

const newMenuItem: MenuItem = {
  id: 306,
  name: "Pizza",
  category: "Main Course",
  price: 14.99,
  ingredients: ["Dough", "Tomato Sauce", "Mozzarella", "Pepperoni"],
};
console.log(addMenuItem(menu, newMenuItem));

/*************************************
 ✅ Question 4:
 Create a function with out useing if statment `countMainCourseItems` that:
 - Accepts a `MenuItem[]` array
 - Returns how many items are in the "Main Course" category
*************************************/
function countMainCourseItems(menu: MenuItem[]): number {
  return menu.filter((item) => item.category === "Main Course").length;
}

console.log(countMainCourseItems(menu));

/*************************************
 ✅ Question 5:
 Create a function `removeMenuItemById` that:
 - Accepts a `MenuItem[]` and a `menuItemId` number
 - Returns a new array without the item that matches the ID
*************************************/
function removeMenuItemById(menu: MenuItem[], menuItemId: number): MenuItem[] {
  return menu.filter((item) => item.id !== menuItemId);
}

/*************************************
 ✅ Question 6: 🌶️
 Create a function `listMenuItemNamesByCategory` that:
 - Accepts a `MenuItem[]` and a `category` string
 - Returns an array of item names that belong to that category
*************************************/
function listMenuItemNamesByCategory(
  menu: MenuItem[],
  category: string
): string[] {
  return menu
    .filter((item) => item.category === category)
    .map((item) => item.name);
}

console.log(listMenuItemNamesByCategory(menu, "Main Course"));

/*************************************
 ✅ Question 7: 🌶️🌶️
 Create a function `getCheapestMenuItem` that:
 - Accepts a `MenuItem[]` array
 - Returns the menu item with the lowest price
*************************************/
function getCheapestMenuItem(menu: MenuItem[]): MenuItem {
  return menu.reduce((lowestItemNow, curruntItem) =>
    lowestItemNow.price < curruntItem.price ? lowestItemNow : curruntItem
  );
}
console.log(getCheapestMenuItem(menu));

/*************************************
 ✅ Question 8: 🌶️🌶️🌶️
 Create a function `getMenuItemsByIngredient` that:
 - Accepts a `MenuItem[]` and an `ingredient` string
 - Returns items that include that ingredient
*************************************/
function getMenuItemsByIngredient(
  menu: MenuItem[],
  ingredient: string
): MenuItem[] {
  return menu.filter((menuItem) => menuItem.ingredients.includes(ingredient));
}

console.log(getMenuItemsByIngredient(menu, "Parmesan"));

console.log(removeMenuItemById(menu, 302));
