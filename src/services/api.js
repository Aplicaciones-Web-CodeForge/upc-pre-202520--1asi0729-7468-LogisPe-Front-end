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

export async function getStocks() {
  const res = await fetch(`${API_URL}/stocks`)
  if (!res.ok) throw new Error('Error de conexión')
  return res.json()
}

export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`)
  if (!res.ok) throw new Error('Error de conexión')
  return res.json()
}

export async function getSuppliers() {
  const res = await fetch(`${API_URL}/suppliers`)
  if (!res.ok) throw new Error('Error de conexión')
  return res.json()
}