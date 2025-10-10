<script setup>
import { ref } from 'vue'
import { registerUser } from '../services/api'
import Logo from '@/assets/LogisLogo.svg'

const email = ref('')
const fullName = ref('')
const phone = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

async function onSubmit() {
  errorMsg.value = ''
  loading.value = true
  try {
    const user = { email: email.value.trim(), fullName: fullName.value.trim(), phone: phone.value.trim(), password: password.value }
    if (!user.email || !user.password) {
      errorMsg.value = 'Email y contraseña son obligatorios'
    } else {
      await registerUser(user)
      alert('Registro exitoso. Ya puedes iniciar sesión')
    }
  } catch (e) {
    errorMsg.value = e.message || 'No se pudo registrar'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="auth-wrapper">
    <div class="logo-area" aria-label="Logo">
      <img :src="Logo" alt="LogisPe Logo" />
    </div>
    <div class="card">
      <h2>Register</h2>
      <form @submit.prevent="onSubmit" class="form">
        <label class="field">
          <span>Email</span>
          <input type="email" v-model="email" required placeholder="tucorreo@correo.com" />
        </label>
        <label class="field">
          <span>Full Name</span>
          <input type="text" v-model="fullName" placeholder="Nombre completo" />
        </label>
        <label class="field">
          <span>Phone</span>
          <input type="tel" v-model="phone" placeholder="Número de teléfono" />
        </label>
        <label class="field">
          <span>Password</span>
          <input type="password" v-model="password" required placeholder="••••••" />
        </label>
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
        <button class="btn" :disabled="loading" type="submit">{{ loading ? 'Registrando...' : 'Register Now' }}</button>
      </form>
      <p class="hint">
        ¿Ya tienes cuenta?
        <router-link to="/login">Inicia sesión</router-link>
      </p>
    </div>
  </section>
</template>

<style scoped>
.auth-wrapper {
  display: grid;
  place-items: center;
  padding: 40px 16px;
}
.logo-area {
  width: 110px;
  height: 110px;
  margin-bottom: 12px;
  display: grid;
  place-items: center;
}
.logo-area img { width: 100%; height: 100%; object-fit: contain; }
.card {
  width: 100%;
  max-width: 420px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  background: #fff;
}
.form { display: grid; gap: 12px; }
.field { display: grid; gap: 6px; }
input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.btn {
  background: #c62828;
  color: #fff;
  border: none;
  padding: 10px 12px;
  border-radius: 6px;
}
.btn[disabled] { opacity: 0.7; }
.hint { margin-top: 10px; font-size: 0.9rem; }
.error { color: #c62828; }
</style>