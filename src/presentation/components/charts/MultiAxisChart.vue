<template>
  <div class="chart-wrap" role="img" :aria-label="t('chart.aria')">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import Chart from 'chart.js/auto'
import { t, fmtMoney, isEN } from '@/utils/i18n'

const props = defineProps({
  labels:   { type: Array, required: true },
  revenue:  { type: Array, required: true },
  profit:   { type: Array, required: true },
  height:   { type: Number, default: 340 }
})

const canvas = ref(null)
let chart

const fmt = (v) => fmtMoney(v)

function makeConfig() {
  return {
    type: 'line',
    data: {
      labels: props.labels,
      datasets: [
        { label: t('chart.revenue'), data: props.revenue, yAxisID: 'y',  borderWidth: 2, tension: 0.4, pointRadius: 3 },
        { label: t('chart.profit'),  data: props.profit,  yAxisID: 'y1', borderWidth: 2, borderDash: [4,3], tension: 0.4, pointRadius: 3 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: true, labels: { boxWidth: 12 } },
        tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${fmt(c.parsed.y)}` } }
      },
      scales: {
        x: { grid: { display: false } },
        y:  { position: 'left',  ticks: { callback: (v) => fmt(v) } },
        y1: { position: 'right', grid: { drawOnChartArea: false }, ticks: { callback: (v) => fmt(v) } }
      }
    }
  }
}

onMounted(() => {
  chart = new Chart(canvas.value.getContext('2d'), makeConfig())
  canvas.value.height = props.height
})

onBeforeUnmount(() => { chart && chart.destroy() })

watch(() => [props.labels, props.revenue, props.profit], () => {
  if (!chart) return
  chart.data.labels = props.labels
  chart.data.datasets[0].data = props.revenue
  chart.data.datasets[1].data = props.profit
  chart.update()
}, { deep: true })

// Actualiza etiquetas del gráfico cuando cambia el idioma
watch(isEN, () => {
  if (!chart) return
  chart.data.datasets[0].label = t('chart.revenue')
  chart.data.datasets[1].label = t('chart.profit')
  chart.update()
})
</script>

<style scoped>
.chart-wrap{width:100%;height:340px}
canvas{display:block;width:100%;height:100%}
</style>
