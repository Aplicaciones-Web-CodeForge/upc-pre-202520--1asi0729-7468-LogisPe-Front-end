<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '../services/api'
import { t, isEN } from '@/utils/i18n'
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
      alert(`${isEN.value ? 'Welcome' : 'Bienvenido'} ${user.fullName || user.email}`)
      router.push({ name: 'home' })
    } else {
      errorMsg.value = t('login.errorInvalid')
    }
  } catch (e) {
    errorMsg.value = e.message || t('login.errorGeneric')
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
      <h2>{{ t('login.title') }}</h2>
      <form @submit.prevent="onSubmit" class="form">
        <label class="field">
          <span>{{ t('login.email') }}</span>
          <input type="email" v-model="email" required placeholder="email@example.com" />
        </label>
        <label class="field">
          <span>{{ t('login.password') }}</span>
          <input type="password" v-model="password" required placeholder="••••••" />
        </label>
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
        <button class="btn" :disabled="loading" type="submit">{{ loading ? t('login.loading') : t('login.submit') }}</button>
      </form>
      <p class="hint">
        {{ t('login.hint.no_account') }}
        <router-link to="/register">{{ t('login.hint.register_link') }}</router-link>
      </p>
    </div>
  </section>
</template>

<style scoped>
.auth-wrapper {
  display: grid; place-items: center; padding: 40px 16px; background: var(--surface-2);
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
  width:100%; max-width:380px; border:1px solid var(--border); border-radius:12px; padding:22px; background:var(--surface); box-shadow:var(--shadow);
}
.form { display:grid; gap:12px }
.field { display:grid; gap:6px }
input {
  padding:.6rem .7rem; border:1px solid var(--border); border-radius:.5rem; background:#fff;
}
.btn {
  background: var(--brand-red); color:#fff; border:none; padding:.6rem .9rem; border-radius:.6rem; font-weight:600;
}
.btn[disabled] { opacity: 0.7; }
.hint { margin-top: 10px; font-size: 0.9rem; }
.error { color: var(--brand-red); }
</style>