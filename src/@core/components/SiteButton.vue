<script setup>
defineProps({
  outlined: {
    type: Boolean,
    default: false
  },
  reversePrimary: {
    type: Boolean,
    default: false
  }
})

const primaryBtnClasses = 'text-white bg-primary'
const outlineBtnClasses = 'bg-transparent outline outline-2 outline-primary hover:outline-white text-white'
const reversePrimaryBtnClasses = 'bg-white text-primary'
</script>

<template>
  <button
      :class="[outlined ? outlineBtnClasses : reversePrimary ? reversePrimaryBtnClasses : primaryBtnClasses]"
      class=" rounded-4xl text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl font-bold px-3 sm:px-5 py-2 lg:px-6 2xl:px-9.5 2xl:py-3.5"
  >
    <slot />
  </button>
</template>

<style scoped>
button{
  transition: all .3s ease-in;
}
button.bg-primary:hover{
  box-shadow: 0 3px 9px 1px theme('colors.primary');
  transform: translateY(-3px);
}

button.bg-white:hover{
  box-shadow: 0 3px 9px 1px theme('colors.white');
  transform: translateY(-3px);
}
</style>