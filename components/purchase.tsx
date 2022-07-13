import {
  BanIcon,
  DotsVerticalIcon,
  RefreshIcon,
  ShareIcon,
  TagIcon,
} from "@heroicons/react/solid";
import ActivityIndicator from "components/activity-indicator";
import Button from "components/button";
import EthLogo from "components/logo/eth-logo";
import StyledLink from "components/styled-link";
import { ethers } from "ethers";
import useMaticPriceCalculation from "hooks/useMaticPriceCalculation";
import React from "react";

interface Props {
  createdBy?: string;
  price?: string;
  name?: string;
  submitPurchase: (address: string) => Promise<void | Error>;
  tokenId: string;
  minting: boolean;
  maxSupply: string;
  totalSold: string;
}

export default function Puchase({
  createdBy,
  name,
  price,
  submitPurchase,
  tokenId,
  minting,
  totalSold,
  maxSupply,
}: Props) {
  const formattedPrice = price
    ? ethers.utils.formatEther(price.toString())
    : "";

  const convertedPrice = useMaticPriceCalculation(parseFloat(formattedPrice));
  const soldOut = parseInt(maxSupply) === parseInt(totalSold);

  return (
    <>
      <h2 className="sr-only">NFT</h2>
      <div>
        <div className="flex justify-between items-center pb-6">
          <h1 className="font-extrabold text-3xl">{name}</h1>
          <span className="flex">
            <button
              type="button"
              className="flex justify-center items-center p-4 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <RefreshIcon
                className="h-5 w-5 text-slate-900"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="-ml-px flex justify-center p-4 items-center border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <ShareIcon
                className="h-5 w-5 text-slate-900"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="-ml-px flex justify-center items-center pl-5 pr-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <DotsVerticalIcon
                className="-ml-1 mr-2 h-5 w-5 text-slate-900"
                aria-hidden="true"
              />
            </button>
          </span>
        </div>

        <div className="py-4">
          <p>
            Owned By{" "}
            <StyledLink
              openInNewTab={true}
              href={`${process.env.NEXT_PUBLIC_POLYGON_SCAN}/address/${createdBy}`}
              className="text-blue-500"
            >
              {createdBy}
            </StyledLink>
          </p>
        </div>
      </div>
      <div className="grid bg-slate-50 lg:grid-cols-4 border-[1px] border-b-slate-200 rounded-md">
        <div className="lg:col-span-7 p-4">
          <p>Mint Price</p>
          <div className="flex items-center">
            <EthLogo />
            <p className="ml-2 text-2xl font-bold">
              {formattedPrice}
              <span className="font-normal text-sm text-gray-400">
                {" "}
                {convertedPrice}
              </span>
            </p>
          </div>
        </div>
        <div className="p-4 col-span-2">
          <Button
            type="button"
            isLoading={minting}
            disabled={soldOut}
            onClick={() => submitPurchase(tokenId)}
            className="w-full border-2 hover:shadow-md hover:transition transition bg-white rounded-md px-4 py-2 col-span-2"
          >
            {minting ? (
              // diplsay loading state whilst minting
              <>
                <ActivityIndicator className="h-5 w-5 inline mr-2 animate-spin text-blue-400" />
                <span className="text-blue-400">Loading</span>
              </>
            ) : !soldOut ? (
              //If not loading and you are able to mint then show mint
              <>
                <TagIcon className="h-4 inline text-blue-400 mr-2" />
                <span className="text-blue-400">Mint</span>
              </>
            ) : (
              //If sold out then show to the user that all nfts are sold
              <>
                <BanIcon className="h-4 inline text-red-400 mr-2" />
                <span className="text-red-400">Sold Out</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
