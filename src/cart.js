function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError();
  }

  const existingItem = cart.find(item => item.id === product.id);
  const currentQuantity = existingItem ? existingItem.quantity : 0;
  const newQuantity = currentQuantity + quantity;

  if (newQuantity > product.stock) {
    throw new RangeError();
  }

  if (existingItem) {
    return cart.map(item =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, productId, quantity) {
  if (quantity <= 0) {
    throw new RangeError();
  }

  const existingItem = cart.find(item => item.id === productId);
  if (!existingItem) {
    return [...cart];
  }

  if (quantity > existingItem.stock) {
    throw new RangeError();
  }

  return cart.map(item =>
    item.id === productId ? { ...item, quantity } : item
  );
}

function removeFromCart(cart, productId) {
  return cart.filter(item => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);
  
  let discount = 0;
  if (promoCode === 'SAVE10' && subtotal >= 20000) {
    discount = subtotal * 0.1;
  }

  let delivery = 30000;
  if (subtotal >= 50000) {
    delivery = 0;
  }

  const total = subtotal - discount + delivery;

  return { subtotal, discount, delivery, total };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;