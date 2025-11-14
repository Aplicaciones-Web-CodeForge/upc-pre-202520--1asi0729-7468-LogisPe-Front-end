import { ref, computed } from 'vue'

// Estado de idioma (persistido en localStorage)
export const lang = ref(localStorage.getItem('lang') || 'es')
export function setLang(l) {
  lang.value = l === 'en' ? 'en' : 'es'
  localStorage.setItem('lang', lang.value)
}
export const isEN = computed(() => lang.value === 'en')

// Tipo de cambio (mock). Ajusta según necesites o trae de API.
export const PEN_PER_USD = 3.8

// Traducciones clave usadas en la app
const tx = {
  es: {
    'top.search': 'Buscar producto, proveedor, pedido',
    'user.profile': 'Perfil',
    'user.logout': 'Cerrar sesión',

    'sidebar.home': 'Inicio',
    'sidebar.stock': 'Stock Disponible',
    'sidebar.orders': 'Pedidos',
    'sidebar.recipes': 'Tiendas y Suministros',
    'sidebar.suppliers': 'Proveedores',

    'home.welcome': 'Bienvenido de nuevo',
    'home.kpi.total_profit': 'Ganancia total',
    'home.kpi.revenue': 'Ingresos',
    'home.kpi.sales': 'Ventas',
    'home.kpi.net_purchases': 'Valor neto de compras',
    'home.kpi.net_sales': 'Valor neto de ventas',
    'home.kpi.profit_mom': 'Ganancia MoM',
    'home.kpi.profit_yoy': 'Ganancia YoY',
    'home.chart.title': 'Ganancia e Ingresos',
    'home.chart.button': 'Semanal',
    'home.best.title': 'Categorías más vendidas',
    'home.best.see_all': 'Ver todo',
    'home.best.col.category': 'Categoría',
    'home.best.col.turnover': 'Ventas',
    'home.best.col.increase': 'Incremento',
    'chart.aria': 'Gráfico de líneas de Ganancia e Ingresos con dos ejes Y',

    'chart.revenue': 'Ingresos',
    'chart.profit': 'Ganancia',

    'suppliers.title': 'Proveedores',
    'suppliers.col.supplier': 'Proveedor',
    'suppliers.col.contact': 'Contacto',
    'suppliers.col.phone': 'Teléfono',
    'suppliers.loading': 'Cargando...',
    'suppliers.error': 'No se pudieron cargar los proveedores',
    'suppliers.add': 'Agregar Proveedor',
    'suppliers.btn.edit': 'Editar',
    'suppliers.btn.delete': 'Eliminar',
    'suppliers.field.name': 'Nombre',
    'suppliers.field.contact': 'Contacto',
    'suppliers.field.phone': 'Teléfono',
    'suppliers.saveFailed': 'No se pudo guardar el proveedor',
    'suppliers.deleteFailed': 'No se pudo eliminar el proveedor',
    'suppliers.confirmDelete': 'Eliminar proveedor',

    'stock.title': 'Stock Disponible',
    'stock.col.product': 'Producto',
    'stock.col.quantity': 'Cantidad',
    'stock.col.unit': 'Unidad',
    'stock.loading': 'Cargando...',
    'stock.error': 'No se pudo cargar el stock',
    'stock.add': 'Agregar Producto',
    'stock.btn.edit': 'Editar',
    'stock.btn.delete': 'Eliminar',
    'stock.field.product': 'Producto',
    'stock.field.quantity': 'Cantidad',
    'stock.field.unit': 'Unidad',
    'stock.saveFailed': 'No se pudo guardar el producto',
    'stock.deleteFailed': 'No se pudo eliminar el producto',
    'stock.confirmDelete': 'Eliminar producto',
    'orders.title': 'Pedidos',
    'orders.col.id': 'ID',
    'orders.col.customer': 'Cliente',
    'orders.col.status': 'Estado',
    'orders.col.total': 'Total',
    'orders.loading': 'Cargando...',
    'orders.error': 'No se pudieron cargar las órdenes',
    'orders.add': 'Agregar Orden',
    'orders.btn.edit': 'Editar',
    'orders.btn.delete': 'Eliminar',
    'orders.field.customer': 'Cliente',
    'orders.field.status': 'Estado',
    'orders.field.total': 'Total',
    'orders.saveFailed': 'No se pudo guardar la orden',
    'orders.deleteFailed': 'No se pudo eliminar la orden',
    'orders.confirmDelete': 'Eliminar orden',
    'top.notifications': 'Notificaciones',
    'top.userMenuAria': 'Menú de usuario',
    'top.userActionsAria': 'Acciones de usuario',

    'login.title': 'Iniciar sesión',
    'login.email': 'Correo',
    'login.password': 'Contraseña',
    'login.submit': 'Iniciar sesión',
    'login.hint.no_account': '¿No tienes cuenta?',
    'login.hint.register_link': 'Regístrate aquí',
    'login.errorInvalid': 'Credenciales inválidas',
    'login.errorGeneric': 'Ocurrió un error',
    'login.loading': 'Ingresando...',

    'register.title': 'Crear cuenta',
    'register.fullname': 'Nombre completo',
    'register.phone': 'Teléfono',
    'register.email': 'Correo',
    'register.password': 'Contraseña',
    'register.submit': 'Crear cuenta',
    'register.hint.have_account': '¿Ya tienes cuenta?',
    'register.hint.login_link': 'Inicia sesión',
    'register.errorRequired': 'Email y contraseña son obligatorios',
    'register.success': 'Registro exitoso. Ya puedes iniciar sesión',
    'register.errorGeneric': 'No se pudo registrar',
    'register.loading': 'Registrando...',

    'profile.title': 'Perfil',
    'profile.save': 'Guardar cambios',
    'profile.errorLoad': 'No se pudo cargar el perfil',
    'profile.errorSession': 'Sesión inválida. Inicia sesión nuevamente.',
    'profile.subtitle': 'Gestiona tu información personal',
    'profile.field.fullname': 'Nombre completo',
    'profile.field.email': 'Correo',
    'profile.field.phone': 'Teléfono',
    'profile.field.address': 'Dirección',
    'profile.placeholder.fullname': 'Tu nombre',
    'profile.placeholder.email': 'correo@ejemplo.com',
    'profile.placeholder.phone': 'Ej. +51 999 999 999',
    'profile.placeholder.address': 'Calle y número',
    'profile.success': 'Perfil actualizado correctamente',
    'profile.errorSave': 'No se pudo guardar el perfil',
    
    // Manage Store
    'manage.title': 'Gestionar Tienda',
    'manage.add': 'Agregar Tienda',
    'manage.field.branch': 'Sucursal',
    'manage.field.store': 'Tienda',
    'manage.field.address': 'Dirección',
    'manage.field.cityzip': 'Ciudad / Código Postal',
    'manage.field.phone': 'Teléfono',
    'manage.btn.update': 'Actualizar',
    'manage.btn.save': 'Guardar',
    'manage.btn.cancel': 'Cancelar',
    'manage.btn.edit': 'Editar',
    'manage.btn.delete': 'Eliminar',
    'manage.loading': 'Cargando...',
    'manage.error': 'No se pudieron cargar las tiendas',
    'manage.confirmDeletePrefix': 'Eliminar',
    'manage.deleteFailed': 'No se pudo eliminar',
    'manage.saveFailed': 'No se pudo guardar la tienda',
  },
  en: {
    'top.search': 'Search product, supplier, order',
    'user.profile': 'Profile',
    'user.logout': 'Logout',

    'sidebar.home': 'Home',
    'sidebar.stock': 'Stock Available',
    'sidebar.orders': 'Orders',
    'sidebar.recipes': 'Stores & Supplies',
    'sidebar.suppliers': 'Suppliers',

    'home.welcome': 'Welcome back',
    'home.kpi.total_profit': 'Total Profit',
    'home.kpi.revenue': 'Revenue',
    'home.kpi.sales': 'Sales',
    'home.kpi.net_purchases': 'Net purchase value',
    'home.kpi.net_sales': 'Net sales value',
    'home.kpi.profit_mom': 'Profit MoM',
    'home.kpi.profit_yoy': 'Profit YoY',
    'home.chart.title': 'Profit & Revenue',
    'home.chart.button': 'Weekly',
    'home.best.title': 'Best selling category',
    'home.best.see_all': 'See All',
    'home.best.col.category': 'Category',
    'home.best.col.turnover': 'Turn Over',
    'home.best.col.increase': 'Increase By',
    'chart.aria': 'Profit and Revenue line chart with two y-axes',

    'chart.revenue': 'Revenue',
    'chart.profit': 'Profit',

    'suppliers.title': 'Suppliers',
    'suppliers.col.supplier': 'Supplier',
    'suppliers.col.contact': 'Contact',
    'suppliers.col.phone': 'Phone',
    'suppliers.loading': 'Loading...',
    'suppliers.error': 'Failed to load suppliers',
    'suppliers.add': 'Add Supplier',
    'suppliers.btn.edit': 'Edit',
    'suppliers.btn.delete': 'Delete',
    'suppliers.field.name': 'Name',
    'suppliers.field.contact': 'Contact',
    'suppliers.field.phone': 'Phone',
    'suppliers.saveFailed': 'Failed to save supplier',
    'suppliers.deleteFailed': 'Failed to delete supplier',
    'suppliers.confirmDelete': 'Delete supplier',

    'stock.title': 'Stock Available',
    'stock.col.product': 'Product',
    'stock.col.quantity': 'Quantity',
    'stock.col.unit': 'Unit',
    'stock.loading': 'Loading...',
    'stock.error': 'Failed to load stock',
    'stock.add': 'Add Product',
    'stock.btn.edit': 'Edit',
    'stock.btn.delete': 'Delete',
    'stock.field.product': 'Product',
    'stock.field.quantity': 'Quantity',
    'stock.field.unit': 'Unit',
    'stock.saveFailed': 'Failed to save product',
    'stock.deleteFailed': 'Failed to delete product',
    'stock.confirmDelete': 'Delete product',
    'orders.title': 'Orders',
    'orders.col.id': 'ID',
    'orders.col.customer': 'Customer',
    'orders.col.status': 'Status',
    'orders.col.total': 'Total',
    'orders.loading': 'Loading...',
    'orders.error': 'Failed to load orders',
    'orders.add': 'Add Order',
    'orders.btn.edit': 'Edit',
    'orders.btn.delete': 'Delete',
    'orders.field.customer': 'Customer',
    'orders.field.status': 'Status',
    'orders.field.total': 'Total',
    'orders.saveFailed': 'Failed to save order',
    'orders.deleteFailed': 'Failed to delete order',
    'orders.confirmDelete': 'Delete order',
    'top.notifications': 'Notifications',
    'top.userMenuAria': 'User menu',
    'top.userActionsAria': 'User actions',

    'login.title': 'Log In',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.submit': 'Log In',
    'login.hint.no_account': "Don't have an account?",
    'login.hint.register_link': 'Register here',
    'login.errorInvalid': 'Invalid credentials',
    'login.errorGeneric': 'Something went wrong',
    'login.loading': 'Logging in...',

    'register.title': 'Register',
    'register.fullname': 'Full Name',
    'register.phone': 'Phone',
    'register.email': 'Email',
    'register.password': 'Password',
    'register.submit': 'Create account',
    'register.hint.have_account': 'Already have an account?',
    'register.hint.login_link': 'Log in',
    'register.errorRequired': 'Email and password are required',
    'register.success': 'Registration successful. You can now log in',
    'register.errorGeneric': 'Failed to register',
    'register.loading': 'Registering...',

    'profile.title': 'Profile',
    'profile.save': 'Save changes',
    'profile.errorLoad': 'Failed to load profile',
    'profile.errorSession': 'Invalid session. Please log in again.',
    'profile.subtitle': 'Manage your personal information',
    'profile.field.fullname': 'Full Name',
    'profile.field.email': 'Email',
    'profile.field.phone': 'Phone',
    'profile.field.address': 'Address',
    'profile.placeholder.fullname': 'Your name',
    'profile.placeholder.email': 'email@example.com',
    'profile.placeholder.phone': 'e.g. +1 555 555 5555',
    'profile.placeholder.address': 'Street and number',
    'profile.success': 'Profile updated successfully',
    'profile.errorSave': 'Failed to save profile',
    
    // Manage Store
    'manage.title': 'Manage Store',
    'manage.add': 'Add Store',
    'manage.field.branch': 'Branch',
    'manage.field.store': 'Store',
    'manage.field.address': 'Address',
    'manage.field.cityzip': 'City / Zip',
    'manage.field.phone': 'Phone',
    'manage.btn.update': 'Update',
    'manage.btn.save': 'Save',
    'manage.btn.cancel': 'Cancel',
    'manage.btn.edit': 'Edit',
    'manage.btn.delete': 'Delete',
    'manage.loading': 'Loading...',
    'manage.error': 'Failed to load stores',
    'manage.confirmDeletePrefix': 'Delete',
    'manage.deleteFailed': 'Failed to delete',
    'manage.saveFailed': 'Failed to save store',
  }
}

export function t(key) {
  const dict = tx[lang.value] || tx.es
  return dict[key] ?? key
}

// Formato monetario: recibe montos base en PEN y muestra en PEN o USD según idioma
export function fmtMoney(amountPEN, opts = {}) {
  const fraction = opts.fractionDigits ?? 0
  const value = isEN.value ? (Number(amountPEN) / PEN_PER_USD) : Number(amountPEN)
  const currency = isEN.value ? 'USD' : 'PEN'
  const locale = isEN.value ? 'en-US' : 'es-PE'
  return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: fraction }).format(value)
}

export function moneyPrefix() {
  return isEN.value ? '$' : 'S/'
}

export function formatNumber(amount) {
  const locale = isEN.value ? 'en-US' : 'es-PE'
  return new Intl.NumberFormat(locale).format(Number(amount))
}

export function monthsShort() {
  return isEN.value
    ? ['Sep','Oct','Nov','Dec','Jan','Feb','Mar']
    : ['Sep','Oct','Nov','Dic','Ene','Feb','Mar']
}