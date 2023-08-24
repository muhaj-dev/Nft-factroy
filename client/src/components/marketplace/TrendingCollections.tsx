import { trendingCollection } from "@/data/collection";
import { orbitron } from "@/fonts/fonts";
import CollectionCard from "../CollectionCard";
import Link from "next/link";

const TrendingCollection = () => {
  return (
    <div className="mx-auto">
      <div className="text-center mb-8">
        <h2 className={`${orbitron.className} text-3xl`}>
          Trending Collections
        </h2>
        <p>
          Explore series of our regularly updated trending collection for you
        </p>
      </div>
      <div className="w-3/4 mx-auto">
        <div className={`grid grid-cols-3 gap-6 ${orbitron.className}`}>
          {trendingCollection.map(({ title, source }) => (
            <CollectionCard title={title} source={source}>
              <div className="flex justify-between">
                <div>
                  <p>Floor</p>
                  <p>0.05 ETH</p>
                </div>
                <div>
                  <p>Total Volume</p>
                  <p>14.1K ETH</p>
                </div>
              </div>
              <div className="my-6 underline text-center">View Details</div>
            </CollectionCard>
          ))}
        </div>
        <div className="flex justify-end my-8">
          <Link href="/">
            <p className="underline">See more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
