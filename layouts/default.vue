<script setup>
const { data } = await useFetch(
  `${useRuntimeConfig().public.strapiUrl}/layout`,
  {
    transform: (res) => {
      return {
        title: res.title,
        desc: res.desc,
        pages: res.pages.map((page) => ({
          title: page.title,
          slug: page.slug,
        })),
      };
    },
  }
);
</script>

<template>
  <Body
    class="min-h-screen bg-gradient-to-br py-10 from-teal-400 to-indigo-600 font-open"
  >
    <Head>
      <Title>
        {{ data?.title }}
      </Title>
      <Meta name="description" :content="data?.desc" />
    </Head>
    <header v-if="data?.pages.length > 1">
      <nav class="grid place-items-center">
        <ul class="flex gap-3">
          <li v-for="page in data.pages">
            <NuxtLink
              active-class="font-bold"
              class="transition-colors hover:text-white"
              :to="page.slug === 'home' ? '/' : page.slug"
              >{{ page.title }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>
    <div class="container my-10 mx-auto">
      <slot />
    </div>
  </Body>
</template>
