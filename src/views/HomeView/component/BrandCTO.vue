<script setup>
import { CTOSectionContent, buttonsLabel} from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
</script>

<template>
  <section class="container text-center py-20 2xl:py-26">
    <h2 class="text-primary text-3xl lg:text-4xl xl:text-5xl 3xl:text-5.5xl">
      {{ CTOSectionContent.heading }}
    </h2>

    <hr class="w-1/6 sm:w-[6%] mx-auto border-2 border-primary mt-6 lg:mt-9 3xl:mt-12 mb-3 lg:mb-5 3xl:mb-8">

    <p class="text-lg 2xl:text-2xl">
      {{ CTOSectionContent.text }}
    </p>

    <div class="text-center pt-10 lg:pt-16">
      <SiteButton>
        {{ buttonsLabel.ctaBtn }}
      </SiteButton>
    </div>
  </section>
</template>
