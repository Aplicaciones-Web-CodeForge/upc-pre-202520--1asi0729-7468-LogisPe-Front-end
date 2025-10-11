<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '../services/api'
import Logo from '@/assets/LogisLogo.svg'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const router = useRouter()

async function onSubmit() {
  errorMsg.value = ''
  loading.value = true
  try {
    const user = await loginUser(email.value.trim(), password.value)
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      alert(`Bienvenido ${user.fullName || user.email}`)
      router.push({ name: 'home' })
    } else {
      errorMsg.value = 'Credenciales inválidas'
    }
  } catch (e) {
    errorMsg.value = e.message || 'Ocurrió un error'
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
      <h2>Log In</h2>
      <form @submit.prevent="onSubmit" class="form">
        <label class="field">
          <span>Email</span>
          <input type="email" v-model="email" required placeholder="tucorreo@correo.com" />
        </label>
        <label class="field">
          <span>Password</span>
          <input type="password" v-model="password" required placeholder="••••••" />
        </label>
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
        <button class="btn" :disabled="loading" type="submit">{{ loading ? 'Ingresando...' : 'Log In' }}</button>
      </form>
      <p class="hint">
        ¿No tienes cuenta?
        <router-link to="/register">Regístrate aquí</router-link>
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
  max-width: 360px;
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