import React from "react";
import PuchaseCard from "../../components/cards/purchase-card";
import NFTDropdown from "../../components/dropdowns/nft-dropdown";
import NftTableDropdown from "../../components/dropdowns/nft-table-dropdown";

const product = {
  image: {
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
    imageAlt: "Back of women's Basic Tee in black.",
  },
  details: [
    {
      name: "About cosmetic queens",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet eius blanditiis non est eos a molestiae facere veritatis consequatur.",
    },
    {
      name: "Details",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet eius blanditiis non est eos a molestiae facere veritatis consequatur.",
    },
  ],
};

const Release: React.FC = () => {
  return (
    <>
      <div className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="mt-2 lg:col-span-5 lg:row-start-1">
            <h2 className="sr-only">NFT</h2>
            <div>
              <img
                src={product.image.imageSrc}
                className="lg:col-span-2 lg:row-span-2 rounded-lg"
              />
            </div>
            <NFTDropdown {...{ product }} />
          </div>
          <div className="mt-2 lg:col-span-7">
            <PuchaseCard />
          </div>
          <div className="col-span-12">
            <NftTableDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Release;
