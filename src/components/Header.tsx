// components/Header.tsx
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-gray-100 p-4">
      <div className="flex-1 flex justify-center">
        <Image src="/images/Transparent-Logo.avif" alt="Logo" width={50} height={50} />
      </div>
      <a href="mailto:contact@pnvflooringstore.com" className="flex-2 text-center bg-blue-500 text-white py-2 px-4 rounded-md font-bold">
        contact@pnvflooringstore.com
      </a>
      <div className="flex-1 flex justify-center items-center space-x-2">
        <p className="tracking-wider">Questions? Call</p>
        <a href="tel:+6562137247" className="text-blue-500 font-bold tracking-wider">656-213-7247</a>
      </div>
    </header>
  );
};

export default Header;
