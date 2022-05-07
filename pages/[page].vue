<script setup>
const route = useRoute();
const { data } = await usePage(route.params.page);
</script>

<template>
  <div class="flex flex-col gap-5">
    <SectionRenderer v-for="section in data.sections" :section="section" />
  </div>
</template>
