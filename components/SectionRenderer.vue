<script setup lang="ts">
import { PageSectionsDynamicZone } from "~~/models/types";

const { section } = defineProps<{
  section: PageSectionsDynamicZone;
}>();
</script>

<template>
  <SectionCard
    v-if="section.__component === 'section.hero'"
    :section="section"
  />
  <SectionStack
    v-else-if="section.__component === 'section.stack'"
    :section="section"
  />
  <SectionContactForm
    v-else-if="section.__component === 'section.contact-form'"
    :section="section"
  />
</template>
