import DetailedPage from "@/components/DetailedPage/DetailedPage";
import MenuPageHeader from "@/components/MenuPage/MenuPageHeader";
import { client } from "@/sanity/lib/client";

async function getData(slug) {
  const query = `*[_type == 'product' && slug == '${slug}' ] [0] {
    _id,
      title,
      kkal,
      price,
      description,
      slug,
      energy,
      "image": image.asset->url
    } `;

  const data = await client.fetch(query);

  return data;
}
const DetailedMenu = async ({ params }) => {
  const product = await getData(params.slug);

  console.log(product);

  return (
    <section className="w-full bg-secondary4/50 flex flex-col p-10">
      <MenuPageHeader />
      <DetailedPage product={product} />
    </section>
  );
};

export default DetailedMenu;
