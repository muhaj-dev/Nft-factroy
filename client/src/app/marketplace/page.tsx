import TopNavigation from "@/common/navs/top/TopNavigation";
import React from "react";
import TrendingCollection from "@/components/marketplace/TrendingCollections";
import SearchCollection from "@/components/marketplace/SearchCollection";
import Footer from "@/components/Footer";
import NSMECollection from "@/components/marketplace/NSMECollection";
import TopSellers from "@/components/marketplace/TopSellers";

const MarketPlace: React.FC = () => {
  return (
    <>
      <TopNavigation />
      <div>
        <SearchCollection />
        <TrendingCollection />
        <NSMECollection />
        <TopSellers />
        <Footer />
      </div>
    </>
  );
};

export default MarketPlace;
