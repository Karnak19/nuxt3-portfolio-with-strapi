<script setup lang="ts">
import { ComponentSectionStack } from "~~/models/types";

const { section } = defineProps<{
  section: ComponentSectionStack;
}>();
</script>

<template>
  <pre>
  {{ section }}
  </pre>
</template>
