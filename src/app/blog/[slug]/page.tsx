import PageHeading from "@/components/PageHeading";
import { fetchApi } from "@/helpers/fetch-api";
import { formatDate } from "@/helpers/format-data";
import { Post } from "@/interfaces/post";
import { notFound } from "next/navigation";
import {MDXRemote} from 'next-mdx-remote/rsc'

const getData = async (slug = "") => {
  const path = "/posts";
  const urlParamsObject = {
    populate: "*",
    filters: {
      slug: slug,
    },
  };
  const { data } = await fetchApi(path, urlParamsObject);
  return data[0];
};

interface Props {
  params: { slug: string };
}

const Slug = async ({ params }: Props) => {
  const { slug } = params;
  const post: Post = await getData(slug);

  if (!post) {
    return notFound();
  }

  const { title, description, body, createdAt, image } = post.attributes;
  //const { url }= image.data.attributes.url;

  return (
    <div className="space-y-8">
      <PageHeading text={title} />
      <p className="text-gray-500">{formatDate(createdAt)}</p>
      <img src="" alt="Imagen" />
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <div className="prose">
        {/* <MDXRemote source={}/> */}
      </div>
    </div>
  );
};

export default Slug;
