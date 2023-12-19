<script setup>

</script>

<template>
  <div class="container pt-20 pb-12 pb-0 md:py-40">
    <div class="w-full md:w-3/4 lg:w-2/4 mx-auto rounded-[30px] overflow-hidden h-96">
      <div class="overlay flex items-center justify-center bg-primary text-center h-full w-full">
        <img class="w-2/4 lg:w-1/3" src="/white-logo.png" alt="Brand Logo">
        <span class="icon-play-circle text-white text-7xl md:text-9xl"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay{
  z-index: 1;
  position: relative;
  background: radial-gradient(circle, rgba(148,153,203,1) 1%, rgba(140,151,191,1) 18%, rgba(26,116,210,1) 66%);
}
.overlay img{
  opacity: .3;
}
.icon-play-circle{
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>