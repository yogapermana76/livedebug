<template>
  <nav class="flex items-center justify-around flex-wrap bg-white p-4 shadow sticky content-center">
    <div class="flex items-center flex-grow mr-6">
      <img class="w-10 h-10" src="../assets/behance.svg">
    </div>
    <div class="w-full block lg:flex lg:items-center lg:w-auto mr-6">
      <div class="text-base lg:flex-grow">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-grey-darkest hover:text-grey no-underline mr-4"
        >Home</router-link>
        <router-link
          to="/collection"
          class="block mt-4 lg:inline-block lg:mt-0 text-grey-darkest hover:text-grey no-underline mr-4"
        >Collection</router-link>
        <router-link
          to="/favorite"
          class="block mt-4 lg:inline-block lg:mt-0 text-grey-darkest hover:text-grey no-underline mr-1"
        >Favorite</router-link>
        <span
          class="text=sm inline-block bg-indigo-lighter rounded-full px-2 text-sm text-white mr-2"
        >{{ counter }}</span>
        <!-- <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-grey hover:text-grey-darkest no-underline">
          Blog
        </a>-->
      </div>
      <div>
        <!-- <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">Download</a> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['counter']
}
</script>

<style>
</style>
