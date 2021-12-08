import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client("https://devmarlon.prismic.io/api/v2", {
    accessToken:
      process.env.PRISMIC_ACCESS,
  });

  return prismic;
}
