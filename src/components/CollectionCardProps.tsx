import React from "react";

interface CollectionCardProps {
  imageUrl: string;
  logoUrl: string;
  linkUrl: string;
  altText: string;
  isNew?: boolean;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  imageUrl,
  logoUrl,
  linkUrl,
  altText,
  isNew,
}) => {
  return (
    <div className="mb-4 w-full md:w-1/2 lg:w-1/5 p-2">
      <a href={linkUrl}>
        <div className="grow-on-hover relative text-white">
          <img className="w-full h-[200px]" src={imageUrl} alt={altText} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <img
              src={logoUrl}
              alt="Logo"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
          {isNew && (
            <div className="absolute bottom-0 left-0 w-full bg-black text-center text-white p-1 text-xs font-bold">
              NEW!
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default CollectionCard;
