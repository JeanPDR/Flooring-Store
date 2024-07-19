import React from "react";
import CollectionCard from "./CollectionCardProps";

const Collections: React.FC = () => {
  const collections = [
    {
      imageUrl: "/images/rooms/roomBiscotti.jpg",
      logoUrl: "/images/products/Durato_Durawood_Logo_V1.svg",
      linkUrl: "products/durawood/index.html",
      altText: "Durawood",
      isNew: true,
    },
    {
      imageUrl: "/images/rooms/roomBonbon.jpg",
      logoUrl: "/images/products/logoAzulTortuga.svg",
      linkUrl: "products/another/index.html",
      altText: "Azul Tortuga",
      isNew: false,
    },
    {
      imageUrl: "/images/rooms/roomCaramel.jpg",
      logoUrl: "/images/products/logoPanzu.svg",
      linkUrl: "products/another/index.html",
      altText: "Panzu",
      isNew: false,
    },
    {
      imageUrl: "/images/rooms/roomMocha.jpg",
      logoUrl: "/images/products/logoVevoMax.svg",
      linkUrl: "products/another/index.html",
      altText: "Vevo Max",
      isNew: false,
    },
    {
      imageUrl: "/images/rooms/roomOyster.jpg",
      logoUrl: "/images/products/logoVevoXL.svg",
      linkUrl: "products/another/index.html",
      altText: "Vevo XL",
      isNew: false,
    },
  ];

  return (
    <div className="  container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-2">
        {collections.map((collection, index) => (
          <CollectionCard
            key={index}
            imageUrl={collection.imageUrl}
            logoUrl={collection.logoUrl}
            linkUrl={collection.linkUrl}
            altText={collection.altText}
            isNew={collection.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
