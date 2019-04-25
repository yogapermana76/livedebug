<template>
  <div class="container mx-auto pt-5">
    <h3 class="text-dark text-xl mb-4">My Favorite Project</h3>
    <div class="flex flex-wrap justify-between item-center content-center">
      <gallery
        v-for="(favorite, index) in favorites"
        :key="index"
        :name="favorite.name"
        :covers="favorite.covers"
        :description="favorite.description"
      >
        <div slot="action">
          <div class="border-b border-grey-light mb-2 py-2"></div>
          <div class="flex justify-between">
            <div>
              <p class="text-sm text-grey-dark mb-1">Views</p>
              <p class="text-lg text-dark font-semibold">{{ favorite.stats.views}}</p>
            </div>

            <div>
              <p class="text-sm text-grey-dark mb-1">Appreciations</p>
              <p class="text-lg text-dark font-semibold">{{ favorite.stats.appreciations}}</p>
            </div>

            <div>
              <p class="text-sm text-grey-dark mb-1">Comments</p>
              <p class="text-lg text-dark font-semibold">{{ favorite.stats.comments}}</p>
            </div>
          </div>
        </div>
      </gallery>
    </div>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery.vue";

export default {
  props: ["favorites"],

  components: {
    Gallery
  },

  mounted() {}
};
</script>

<style>
</style>
