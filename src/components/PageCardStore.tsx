"use client"
import { cartContext } from "@/app/context/CartContext";
import { cn } from "@/helpers/classnames";
import { Book } from "@/interfaces/book";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface Props {
  book: Book;
}

const PageCardStore = ({ book }: Props) => {
  const { addCartProducts } = useContext(cartContext);
  const router = useRouter();

  const { id } = book;
  const { title, description, price, image, stock } = book.attributes;
  const { url, width, height } = image.data.attributes.formats.medium;

  const handleClickAddToCart = () => {
    addCartProducts({id, title, price})
    router.push("/cart")
  }

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="rounded-t-lg w-full"
        src={url}
        alt={`imagen de  ${title}`}
        width={width}
        height={height}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-gray-500 mb-2 text-lg">Precio: ${price}</p>
        <p className="text-gray-500 mb-2 text-lg">Stock: {stock}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
      <button
        onClick={handleClickAddToCart}
        className={cn(
          "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          stock === 0 && "pointer-events-none opacity-50"
        )}
      >
        {stock === 0 ? "Sin stock" : "Comprar"}
      </button>
    </div>
  );
};

export default PageCardStore;
