<script setup>
/* Datos estáticos (mock) */
const cards = [
  {
    branch: 'Singanallur Branch',
    store: 'Lisy Store',
    address1: '1A/ Krishnarajapuram, 3 rd street sulur',
    cityzip: 'Coimbatore - 6313403',
    phone: '044 - 653578'
  },
  {
    branch: 'Slur Branch',
    store: 'Lisy Store',
    address1: '54 Ramani colony, 3 rd street sulur',
    cityzip: 'Coimbatore - 63133452',
    phone: '044 - 653763'
  },
  {
    branch: 'Gaandipuram Branch',
    store: 'Lisy Store',
    address1: '32/ Venkatasamy layout, 3 rd street sulur',
    cityzip: 'Coimbatore - 6313403',
    phone: '044 - 653578'
  }
];
</script>

<template>
  <div class="manage">
    <!-- Header -->
    <div class="head-row">
      <h2>Manage Store</h2>
      <button type="button" class="btn-add">Add Store</button>
    </div>

    <!-- Cards -->
    <div class="grid">
      <div v-for="(c, i) in cards" :key="i" class="col-12">
        <div class="store-card">
          <div class="grid align-items-center">
            <!-- Bloque branch -->
            <div class="col-12 md:col-3">
              <div class="branch-box">
                <span class="branch-text">{{ c.branch }}</span>
              </div>
            </div>

            <!-- Detalle -->
            <div class="col-12 md:col-8">
              <div class="detail">
                <div class="store-name">{{ c.store }}</div>
                <div class="line">{{ c.address1 }}</div>
                <div class="line">{{ c.cityzip }}</div>
                <div class="line">{{ c.phone }}</div>
              </div>
            </div>

            <!-- Edit -->
            <div class="col-12 md:col-1 text-right">
              <button type="button" class="btn-edit">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contenedor blanco, tipografía negra */
.manage { background: #ffffff; color: #111827; }

/* Cabecera */
.head-row {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 1rem;
}
h2 { margin: 0; font-weight: 700; font-size: 1.35rem; color: #111827; }

/* Botón Add rojo (mock) */
.btn-add {
  background: #d32f2f;
  border: 1px solid #d32f2f;
  color: #ffffff;
  padding: .6rem 1rem;
  border-radius: .5rem;
  font-weight: 600;
}

/* Card BLANCA con relieve suave */
.store-card {
  background: #ffffff;              /* <- blanco */
  border: 1px solid #e5e7eb;        /* borde leve */
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,.05); /* sombra leve */
  padding: 1.25rem;
  margin-bottom: 1rem;
  color: #111827;                   /* texto negro */
}

/* Bloque gris claro para el branch */
.branch-box {
  background: #eef2f6;              /* gris claro */
  border-radius: 10px;
  padding: 1.1rem 1rem;
  min-height: 72px;
  display: flex; align-items: center;
}
.branch-text { color: #111827; font-weight: 700; }

/* Detalles en negro */
.detail .store-name { font-weight: 700; margin-bottom: .4rem; color: #111827; }
.detail .line       { color: #111827; line-height: 1.35; }

/* Botón Edit NEGRO */
.btn-edit {
  background: white;              /* negro */
  color: #ffffff;
  border: 1px solid #111827;
  border-radius: .5rem;
  padding: .45rem .9rem;
  font-weight: 600;
}
.btn-edit:hover { background: #000; border-color: #000; }

/* Fijamos negro para cualquier texto interno que herede estilos externos oscuros */
.store-card :deep(*) { color: inherit; }
</style>
