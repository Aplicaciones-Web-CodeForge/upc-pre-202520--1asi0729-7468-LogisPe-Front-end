<template>
  <article class="card">
    <div class="value" :class="{ accent }">{{ formatted }}</div>
    <div class="label">{{ label }}</div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { fmtMoney } from '@/utils/i18n'

const props = defineProps({
  value:   { type: Number, required: true },
  label:   { type: String,  required: true },
  accent:  { type: Boolean, default: false }
})
const formatted = computed(() => fmtMoney(props.value))
</script>

<style scoped>
.card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.value{font:600 20px/1.2 Inter,system-ui,sans-serif}
.value.accent{color:#4f46e5}
.label{margin-top:4px;font:500 12px/1 Inter,system-ui,sans-serif;color:#6b7280}
</style>
