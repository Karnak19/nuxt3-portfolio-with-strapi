<script setup lang="ts">
type Section = {
  id: number;
  firstname: string;
  lastname: string;
  company: string;
  job: string;
  description: string;
  avatar: {
    id: number;
    name: string;
    url: string;
  };
};

const {
  public: { strapiUrl },
} = useRuntimeConfig();

const props = defineProps<{
  section: Section;
}>();
</script>

<template>
  <div class="grid place-items-center text-slate-900">
    <main
      class="bg-white/60 backdrop-blur-xl p-10 grid gap-2 rounded-md border-2 border-white/20"
    >
      <div class="grid place-items-center">
        <img
          class="rounded-full h-32 w-32 bg-slate-900 text-white text-center"
          :src="strapiUrl + section.avatar.url"
          alt="Basile Vernouillet portrait"
        />
      </div>
      <div id="name" class="grid place-items-center text-3xl font-prompt">
        <h1>{{ section.firstname }} {{ section.lastname }}</h1>
      </div>
      <div
        id="job"
        class="grid place-items-center text-lg text-slate-900/50 pb-2"
      >
        <h2>{{ section.job }} @ {{ section.company }}</h2>
      </div>
      <div
        id="socials"
        class="grid place-items-center border-t-2 border-white pt-4"
      >
        <ul class="flex w-full justify-between">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Karnak19"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/basile-vernouillet/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/basile_vern/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/BVernouillet"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
