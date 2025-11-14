<script setup>
import { ref } from 'vue'
import { registerUser } from '../services/api'
import { t } from '@/utils/i18n'
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
      errorMsg.value = t('register.errorRequired')
    } else {
      await registerUser(user)
      alert(t('register.success'))
    }
  } catch (e) {
    errorMsg.value = e.message || t('register.errorGeneric')
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
      <h2>{{ t('register.title') }}</h2>
      <form @submit.prevent="onSubmit" class="form">
        <label class="field">
          <span>{{ t('register.email') }}</span>
          <input type="email" v-model="email" required placeholder="email@example.com" />
        </label>
        <label class="field">
          <span>{{ t('register.fullname') }}</span>
          <input type="text" v-model="fullName" :placeholder="t('register.fullname')" />
        </label>
        <label class="field">
          <span>{{ t('register.phone') }}</span>
          <input type="tel" v-model="phone" :placeholder="t('register.phone')" />
        </label>
        <label class="field">
          <span>{{ t('register.password') }}</span>
          <input type="password" v-model="password" required placeholder="••••••" />
        </label>
        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
        <button class="btn" :disabled="loading" type="submit">{{ loading ? t('register.loading') : t('register.submit') }}</button>
      </form>
      <p class="hint">
        {{ t('register.hint.have_account') }}
        <router-link to="/login">{{ t('register.hint.login_link') }}</router-link>
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
  width:100%; max-width:420px; border:1px solid var(--border); border-radius:12px; padding:22px; background:var(--surface); box-shadow:var(--shadow);
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