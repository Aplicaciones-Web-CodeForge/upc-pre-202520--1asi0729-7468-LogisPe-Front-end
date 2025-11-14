const API_URL = 'http://localhost:3001';

export async function loginUser(email, password) {
  const url = `${API_URL}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Error de conexión');
  const data = await res.json();
  return data?.[0] || null;
}

export async function registerUser(user) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  if (!res.ok) throw new Error('No se pudo registrar');
  return res.json();
}

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error('Error de conexión');
  return res.json();
}

// Perfil de usuario
export async function getUserById(id) {
  const res = await fetch(`${API_URL}/users/${id}`)
  if (!res.ok) throw new Error('No se pudo obtener el usuario')
  return res.json()
}

export async function updateUser(id, userPartial) {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userPartial)
  })
  if (!res.ok) throw new Error('No se pudo actualizar el usuario')
  return res.json()
}

export async function getStocks() {
  const res = await fetch(`${API_URL}/stocks`)
  if (!res.ok) throw new Error('Error de conexión')
  return res.json()
}

export async function createStock(stock) {
  const res = await fetch(`${API_URL}/stocks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(stock)
  })
  if (!res.ok) throw new Error('No se pudo crear el stock')
  return res.json()
}

export async function updateStock(id, stock) {
  const res = await fetch(`${API_URL}/stocks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(stock)
  })
  if (!res.ok) throw new Error('No se pudo actualizar el stock')
  return res.json()
}

export async function deleteStock(id) {
  const res = await fetch(`${API_URL}/stocks/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('No se pudo eliminar el stock')
  return true
}

export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`)
  if (!res.ok) throw new Error('Error de conexión')
  return res.json()
}

export async function createOrder(order) {
  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
  if (!res.ok) throw new Error('No se pudo crear la orden')
  return res.json()
}

export async function updateOrder(id, order) {
  const res = await fetch(`${API_URL}/orders/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
  if (!res.ok) throw new Error('No se pudo actualizar la orden')
  return res.json()
}

export async function deleteOrder(id) {
  const res = await fetch(`${API_URL}/orders/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('No se pudo eliminar la orden')
  return true
}

export async function getSuppliers() {
  const res = await fetch(`${API_URL}/suppliers`)
  if (!res.ok) throw new Error('Error de conexión')
  return res.json()
}

export async function createSupplier(supplier) {
  const res = await fetch(`${API_URL}/suppliers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(supplier)
  })
  if (!res.ok) throw new Error('No se pudo crear el proveedor')
  return res.json()
}

export async function updateSupplier(id, supplier) {
  const res = await fetch(`${API_URL}/suppliers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(supplier)
  })
  if (!res.ok) throw new Error('No se pudo actualizar el proveedor')
  return res.json()
}

export async function deleteSupplier(id) {
  const res = await fetch(`${API_URL}/suppliers/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('No se pudo eliminar el proveedor')
  return true
}

// STORES (CRUD)
export async function getStores() {
  const res = await fetch(`${API_URL}/stores`)
  if (!res.ok) throw new Error('Error de conexión')
  return res.json()
}

export async function createStore(store) {
  const res = await fetch(`${API_URL}/stores`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(store)
  })
  if (!res.ok) throw new Error('No se pudo crear la tienda')
  return res.json()
}

export async function updateStore(id, store) {
  const res = await fetch(`${API_URL}/stores/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(store)
  })
  if (!res.ok) throw new Error('No se pudo actualizar la tienda')
  return res.json()
}

export async function deleteStore(id) {
  const res = await fetch(`${API_URL}/stores/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('No se pudo eliminar la tienda')
  return true
}