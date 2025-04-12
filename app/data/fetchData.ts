// lib/getAllProducts.ts
// interface itemFace {
//     id: number
//     name: string
//     price: number
//     image: string
//     category: string
//     featured: boolean
//     new: boolean
//     slug: string
//     Title: string
//     Description: string
//     url: string
//   }
type itemFace = {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  price: number;
  slug: string;
  image: {
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
};

export async function getAllProducts() {
  const res = await fetch("http://localhost:1337/api/products?populate=*", {
    next: { revalidate: 60 }, // For ISR (optional)
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();

  // Map Strapi format into your desired format
  const products = json.data.map((item: itemFace) => ({
    id: item.id,
    name: item.Title,
    description: item.Description,
    price: item.price,
    slug: item.slug.toLowerCase(),
    image: item.image?.url
      ? `http://localhost:1337${item.image.url}`
      : "/placeholder.png",
    features: ["Reliable", "Trustworthy"], // replace with actual if available
    new: true, // hardcoded example
    featured: false, // hardcoded example
    category: "default", // fallback
  }));

  console.log("hello world");
  console.log(products);

  return products;
}
