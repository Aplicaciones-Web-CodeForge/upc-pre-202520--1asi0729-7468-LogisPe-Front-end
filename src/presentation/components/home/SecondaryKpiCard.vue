<template>
  <article class="card">
    <div class="value">{{ prefix }}{{ formatted }}</div>
    <div class="hint">{{ hint }}</div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value:  { type: Number, required: true },
  hint:   { type: String,  required: true },
  prefix: { type: String,  default: '₹' }
})
const formatted = computed(() => Number(props.value).toLocaleString('en-IN'))
</script>

<style scoped>
.card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.04)}
.value{font:600 18px/1.2 Inter,system-ui,sans-serif}
.hint{margin-top:4px;font:500 12px/1 Inter,system-ui,sans-serif;color:#6b7280}
</style>
