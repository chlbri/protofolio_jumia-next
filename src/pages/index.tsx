import { FC } from 'react';
import { BtnBasket } from '../components/buttons/Basket';
import { BtnConnect } from '../components/buttons/Connect';
import { BtnHelp } from '../components/buttons/Help';
import { Btn_Search } from '../components/buttons/Search';
import { HeaderPub } from '../components/HeaderPub';
import { JumiaLogo } from '../components/JumiaLogo';

const Index: FC = () => {
  return (
    <div className="">
      <HeaderPub />
      <div className="bg-white">
        <div className="max-w-[1200px] w-11/12 flex flex-col mx-auto">
          <div className="h-[77px] flex items-center  mx-auto mb-[14px]">
            <JumiaLogo />
            <div className="w-[440px] h-[39px] rounded-lg border-2 border-gray-500 bg-gray-100 mr-2"></div>

            <Btn_Search />
            <BtnConnect />
            <BtnHelp />
            <BtnBasket />
          </div>
          <div className="">
            <nav className="bg-white p-4 shadow-lg w-max rounded">
              <div>Supermarché</div>
              <div>Maison et bureau</div>
              <div>Téléphone et tablettes</div>
              <div>Électronique</div>
              <div>Beauté et hygiène</div>
              <div>Produits pour bébé</div>
              <div>Agriculture</div>
              <div>Informatique</div>
              <div>Mode femme</div>
              <div>Mode homme</div>
              <div>{'Jouet & jeux vidéos'}</div>
              <div>Autres catégories</div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
