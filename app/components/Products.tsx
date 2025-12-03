import React from "react";

type Product = {
  name: string;
  link: string;
};

type ProductsProps = {
  products?: Product[];
  title?: string;
};

const productsArr = [
  { name: "Education Loans", link: "#" },
  { name: "Travel Insurance", link: "#" },
  { name: "Forex Cards", link: "#" },
  { name: "International SIM", link: "#" },
  { name: "Remittance Support", link: "#" },
];

const Products: React.FC<ProductsProps> = ({
  products = productsArr,
  title = "Financial Products (B2C)",
}) => {
  return (
    <div className="w-full container mx-auto my-4 md:my-6 px-(--padding-x) md:px-0 text-center md:text-left space-y-[12px]">
      <h3 className="text-[19px] md:text-[28px] font-bold">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="border rounded-lg bg-white p-4 flex flex-col justify-between min-h-[74px]"
          >
            <div className="font-medium text-[16px] mb-2 text-left">
              {product.name}
            </div>
            <a
              href={product.link}
              className="text-blue-500 text-sm flex items-center gap-1 hover:underline transition"
            >
              Learn more{" "}
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
