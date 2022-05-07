<script setup lang="ts">
import { ComponentSectionContactForm } from "~~/models/types";

const { section } = defineProps<{
  section: ComponentSectionContactForm;
}>();
</script>

<template>
  <pre>
  {{ section }}
  </pre>
</template>
