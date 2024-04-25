// CALCULATOR --THERE ARE (ADD, SUBTRACT, MULTIPLY,DIVIDE,)

function add() {
  const num1 = parseFloat(
    (<HTMLInputElement>document.getElementById("num1")).value
  );
  const num2 = parseFloat(
    (<HTMLInputElement>document.getElementById("num2")).value
  );
  const result = num1 + num2;
  displayResult(result);
}

function subtract() {
  const num1 = parseFloat(
    (<HTMLInputElement>document.getElementById("num1")).value
  );
  const num2 = parseFloat(
    (<HTMLInputElement>document.getElementById("num2")).value
  );
  const result = num1 - num2;
  displayResult(result);
}

function multiply() {
  const num1 = parseFloat(
    (<HTMLInputElement>document.getElementById("num1")).value
  );
  const num2 = parseFloat(
    (<HTMLInputElement>document.getElementById("num2")).value
  );
  const result = num1 * num2;
  displayResult(result);
}

function divide() {
  const num1 = parseFloat(
    (<HTMLInputElement>document.getElementById("num1")).value
  );
  const num2 = parseFloat(
    (<HTMLInputElement>document.getElementById("num2")).value
  );

  if (num2 === 0) {
    displayResult("Cannot divide by zero");
  } else {
    const result = num1 / num2;
    displayResult(result);
  }
}

function displayResult(value: string | number) {
  const resultElement = document.getElementById("result");
  if (resultElement) {
    resultElement.textContent = value.toString();
  }
}

// CALCULATOR END HERE

// ----SHOPPING CART ----//
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

type ShoppingCart = {
  items: Product[];
};

const initializeCart = (): ShoppingCart => ({
  items: [],
});

const addToCart = (cart: ShoppingCart, product: Product): void => {
  cart.items.push(product);
  displayCart();
};

const removeFromCart = (cart: ShoppingCart, productId: number): void => {
  cart.items = cart.items.filter((item) => item.id !== productId);
  displayCart();
};

const displayCart = (): void => {
  const cartListElement = document.getElementById("cart-list");
  if (cartListElement) {
    cartListElement.innerHTML = "";

    shoppingCart.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartListElement.appendChild(li);
    });
  }
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1500, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 800, category: "Electronics" },
  { id: 3, name: "Shoes", price: 100, category: "Fashion" },
];

const shoppingCart = initializeCart();

const productListElement = document.getElementById("product-list");
if (productListElement) {
  products.forEach((product) => {
    const button = document.createElement("button");
    button.textContent = `Add ${product.name} to Cart`;
    button.addEventListener("click", () => addToCart(shoppingCart, product));

    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    li.appendChild(button);

    productListElement.appendChild(li);
  });
}
// ---SHOPPING CART ---//

// TypeScript da kvadrat uchun funksiya
function areaOfSquare(sideLength: number): number {
  return sideLength * sideLength;
}

// Masalan, tomon uzunligi 5 bo'lgan kvadratning yuzi
const squareArea = areaOfSquare(5);
console.log("Kvadratning yuzi:", squareArea);

// TypeScript da to'g'ri to'rtburchak uchun funksiya
function areaOfRectangle(length: number, width: number): number {
  return length * width;
}

// Masalan, uzunligi 4 va eni 3 bo'lgan to'g'ri to'rtburchakning yuzi
const rectangleArea = areaOfRectangle(4, 3);
console.log("To'g'ri to'rtburchakning yuzi:", rectangleArea);

// TypeScript da doira uchun funksiya
function areaOfCircle(radius: number): number {
  return Math.PI * radius * radius;
}

// Masalan, radiusi 6 bo'lgan doira yuzi
const circleArea = areaOfCircle(6);
console.log("Doira yuzi:", circleArea);
