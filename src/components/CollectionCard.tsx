import React from "react";
import CollectionCard from "./CollectionCardProps";

const Collections: React.FC = () => {
  const collections = [
    {
      imageUrl: "/images/rooms/roomBiscotti.jpg",
      logoUrl: "/images/products/Durato_Durawood_Logo_V1.svg",
      linkUrl: "https://catalogo-flooring-store.vercel.app/?search=durawood",
      altText: "Durawood",
      isNew: true,
    },
    {
      imageUrl: "/images/rooms/roomBonbon.jpg",
      logoUrl: "/images/products/logoAzulTortuga.svg",
      linkUrl: "https://catalogo-flooring-store.vercel.app/?search=azul",
      altText: "Azul Tortuga",
      isNew: false,
    },
    {
      imageUrl: "/images/rooms/roomCaramel.jpg",
      logoUrl: "/images/products/logoPanzu.svg",
      linkUrl: "https://catalogo-flooring-store.vercel.app/?search=panzu",
      altText: "Panzu",
      isNew: false,
    },
    {
      imageUrl: "/images/rooms/roomMocha.jpg",
      logoUrl: "/images/products/logoVevoMax.svg",
      linkUrl: "https://catalogo-flooring-store.vercel.app/?search=vevo+max",
      altText: "Vevo Max",
      isNew: false,
    },
    {
      imageUrl: "/images/rooms/roomOyster.jpg",
      logoUrl: "/images/products/logoVevoXL.svg",
      linkUrl: "https://catalogo-flooring-store.vercel.app/?search=vevo+xl",
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
