<script setup>
const { data: page } = await usePage("home");
</script>

<template>
  <div class="flex flex-col gap-5">
    <SectionRenderer v-for="section in page.sections" :section="section" />
  </div>
</template>
