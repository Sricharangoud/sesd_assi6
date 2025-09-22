// Original Order Class
class FoodOrder {
  constructor(customerName, items, price, address) {
    this.customerName = customerName;
    this.items = items;
    this.price = price;
    this.address = address;
  }

  clone() {
    // Shallow copy clone
    return new FoodOrder(
      this.customerName,
      [...this.items], // spread to avoid mutation
      this.price,
      this.address
    );
  }
}

// Sample order
const originalOrder = new FoodOrder(
  "Sricharan",
  ["Pizza", "Coke"],
  499,
  "Hyderabad, Telangana"
);

let orders = [originalOrder];

function renderOrders() {
  const container = document.getElementById("orders");
  container.innerHTML = "";
  orders.forEach((order, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>Order #${index + 1}</h3>
      <p><b>Customer:</b> ${order.customerName}</p>
      <p><b>Items:</b> ${order.items.join(", ")}</p>
      <p><b>Price:</b> ₹${order.price}</p>
      <p><b>Address:</b> ${order.address}</p>
      <button onclick="cloneOrder(${index})">Clone this Order</button>
    `;
    container.appendChild(card);
  });
}

function cloneOrder(index) {
  const cloned = orders[index].clone();
  cloned.price += 50; // Simulating price change for new order
  cloned.items.push("Extra Cheese");
  orders.push(cloned);
  renderOrders();
}

// Initial render
renderOrders();
