import { getPage } from "~~/api";

export default async (req) => {
  const page = await getPage(req.context.params.slug);

  return page;
};
