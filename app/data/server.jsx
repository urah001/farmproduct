// lib/getAllProducts.ts or utils/getAllProducts.ts

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getAllProducts() {
  const res = await fetch(`${API_URL}/api/products?populate=*`);
  const json = await res.json();

  const data = json.data || [];

  const allProducts = data.map((item) => {
    const attributes = item.attributes;

    return {
      id: item.id,
      new: attributes.new || false,
      featured: attributes.featured || false,
      name: attributes.name || "No Name",
      price: attributes.price || 0,
      image: attributes.image?.data?.attributes?.url
        ? `${API_URL}${attributes.image.data.attributes.url}?height=600&width=600`
        : "/placeholder.svg",
      category: attributes.category || "unknown",
      slug: attributes.slug || `product-${item.id}`,
      description: attributes.description || "",
      features: attributes.features || [],
      //   new
      //   new
      //   new
      // id: item.id,
      // name: item.attributes?.name || item.Title || "Unknown Product",
      // price: item.attributes?.price || item.price || 0,
      // image: item.attributes?.image?.data?.attributes?.url
      //   ? `${API_URL}${item.attributes.image.data.attributes.url}`
      //   : item.image?.url
      //   ? `${API_URL}${item.image.url}`
      //   : "/placeholder.svg",
      // category: item.attributes?.category || item.Category || "Uncategorized",
      // featured: item.attributes?.featured || item.Featured || false,
      // new: item.attributes?.new || item.New || false,
      // slug: item.attributes?.Slug || item.slug || "",
    };
  });

  return allProducts;
}
