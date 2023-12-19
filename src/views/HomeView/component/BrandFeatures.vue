<script setup>
import SiteButton from "@/@core/components/SiteButton.vue";
import SiteFeatureCard from "@/@core/components/SiteFeatureCard.vue";
import { brandFeaturesContent, buttonsLabel } from "@/@core/constants/home-view";
</script>

<template>
  <section id="features" class="relative pt-20 md:pt-28">
    <div class="features-bg bg-tertiary hidden md:block" />
    <div class="container">
      <div class="grid lg:grid-cols-3 gap-20 lg:gap-32">
        <div class="lg:col-span-2 order-2 lg:order-1">
          <div class="grid md:grid-cols-2 gap-7 3xl:gap-10">
            <div class="flex flex-col gap-7 3xl:gap-10">
              <SiteFeatureCard
                  :title="brandFeaturesContent.features[0].title"
                  :icon="brandFeaturesContent.features[0].icon"
                  :description="brandFeaturesContent.features[0].description"
              />
              <SiteFeatureCard
                  :title="brandFeaturesContent.features[2].title"
                  :icon="brandFeaturesContent.features[2].icon"
                  :description="brandFeaturesContent.features[2].description"
              />
            </div>

            <div class="flex flex-col gap-7 3xl:gap-10 transform -translate-y-7 mt-7 md:mt-0">
              <SiteFeatureCard
                  :title="brandFeaturesContent.features[1].title"
                  :icon="brandFeaturesContent.features[1].icon"
                  :description="brandFeaturesContent.features[1].description"
              />
              <SiteFeatureCard
                  :title="brandFeaturesContent.features[3].title"
                  :icon="brandFeaturesContent.features[3].icon"
                  :description="brandFeaturesContent.features[3].description"
              />
            </div>

          </div>
        </div>
        <div class="lg:col-span-1 flex items-center order-1 lg:order-2">
            <div>
              <h4 class="text-3xl xl:text-4xl 3xl:text-5xl font-bold pb-5 lg:pb-8 2xl:pb-10">
                {{ brandFeaturesContent.heading }}
              </h4>
              <SiteButton>
                {{ buttonsLabel.ctaBtn }}
              </SiteButton>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-bg{
  width: 800px;
  height: 500px;
  border-radius: 100px;
  position: absolute;
  left: -200px;
  top: 30%;
  opacity: .1;
  transform: rotate(-22deg);
}
</style>