<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="feature-card shadow-3xl bg-white rounded-xl md:rounded-4xl 3xl:rounded-6xl transform md:-rotate-3 px-6 py-9 xl:px-6 xl:py-10 3xl:px-9 3xl:py-14">
    <div class="flex items-center justify-center bg-primary rounded-full w-14 h-14 2xl:w-20 2xl:h-20 p-3">
      <span :class="`icon-${icon}`" class="text-white text-4xl 2xl:text-5xl"></span>
    </div>
    <div class="text-2xl 2xl:text-3xl font-bold pt-6 pb-3">
      {{ title }}
    </div>
    <div class="text-lg 2xl:text-2xl pb-7 3xl:pb-16">
      {{ description }}
    </div>
  </div>
</template>
