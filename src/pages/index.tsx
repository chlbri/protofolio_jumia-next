/* eslint-disable react/jsx-key */
import { FC } from 'react';
import AsideCTA from '../components/AsideCTA';
import { BtnBasket } from '../components/buttons/Basket';
import { BtnConnect } from '../components/buttons/Connect';
import { BtnHelp } from '../components/buttons/Help';
import { Btn_Search } from '../components/buttons/Search';
import { NavCategories } from '../components/Category';
import { HeaderPub } from '../components/HeaderPub';
import { Icon_Search } from '../components/icons/Search';
import { JumiaLogo } from '../components/JumiaLogo';

const Index: FC = () => {
  return (
    <div className="">
      <HeaderPub />
      <div className="bg-gray-100">
        <div className="max-w-[1200px] w-11/12 flex flex-col mx-auto">
          <div className="h-[77px] bg-white flex items-center w-full px-1 mb-[14px]">
            <JumiaLogo />
            <div className="w-[440px] h-[39px] rounded-lg border-2 border-gray-500 bg-gray-100 mr-2 flex items-center px-2 space-x-2 ">
              <Icon_Search />
              <input
                type="text"
                name="search"
                id="search"
                className="flex-1 bg-transparent  placeholder:text-sm focus:outline-none"
                placeholder="Cherchez un produit, une marque ou une catégorie"
                maxLength={50}
              />
            </div>
            <Btn_Search />
            <BtnConnect />
            <BtnHelp />
            <BtnBasket />
          </div>
          <div className="flex w-full space-x-2 py-1">
            <NavCategories />
            <div className="bg-gray-700 flex-grow rounded-md">
              {/* TODO: Carrousel */}
            </div>
            <AsideCTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
