export const usePage = (slug?: string) => useFetch("/api/pages/" + slug);
