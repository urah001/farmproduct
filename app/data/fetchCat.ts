/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getAllCategory() {
  const res = await fetch("http://localhost:1337/api/categories?populate=*", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch category");

  const json = await res.json();

  const category = json.data.map((item: any) => ({
    id: item.id,
    name: item.name,
    slug: item.slug.toLowerCase(),
    image: item.image?.url
      ? `http://localhost:1337${item.image.url}`
      : "/placeholder.png",
    products: item.products.map((p: any) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      price: p.price,
      // optionally use the category image if product has none
    })),
  }));

  return category;
}
