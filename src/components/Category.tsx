/* eslint-disable react/jsx-key */
import { FC, SVGProps } from 'react';
import {
  Icon_Agriculture,
  Icon_Apple,
  Icon_Baby,
  Icon_BeautyClean,
  Icon_FashionM,
  Icon_FashionW,
  Icon_Games,
  Icon_HomeOffice,
  Icon_Informatics,
  Icon_Others,
  Icon_Smartphone,
  Icon_TV,
} from './icons';

type Props = {
  children: [SVGProps<SVGSVGElement>, string];
};

export const Category: FC<Props> = ({ children }) => {
  const child1 = children[0];
  const child2 = children[1];
  return (
    <div className="flex space-x-1 items-center cursor-pointer">
      <div className="w-[25px] justify-center">{child1}</div>
      <span className="hover:text-poussin transition-colors duration-100 ease-in">
        {child2}
      </span>
    </div>
  );
};

export const NavCategories: FC = () => {
  return (
    <nav className="bg-white px-5 py-3 shadow-lg w-max rounded space-y-2">
      <Category>{[<Icon_Apple />, 'Supermarché']}</Category>
      <Category>{[<Icon_HomeOffice />, 'Maison et bureau']}</Category>
      <Category>
        {[<Icon_Smartphone />, 'Téléphone et tablettes']}
      </Category>
      <Category>{[<Icon_TV />, 'Électronique']}</Category>
      <Category>{[<Icon_BeautyClean />, 'Beauté et hygiène']}</Category>
      <Category>{[<Icon_TV />, 'Beauté et hygiène']}</Category>
      <Category>{[<Icon_Baby />, 'Produits pour bébé']}</Category>
      <Category>{[<Icon_TV />, 'Électronique']}</Category>
      <Category>
        {[<Icon_Agriculture />, 'Agriculture et Élevage']}
      </Category>
      <Category>{[<Icon_Informatics />, 'Informatique']}</Category>
      <Category>{[<Icon_FashionW />, 'Mode femme']}</Category>
      <Category>{[<Icon_FashionM />, 'Mode homme']}</Category>
      <Category>{[<Icon_Games />, 'Jouet & jeux vidéos']}</Category>
      <Category>{[<Icon_Others />, 'Autres catégories']}</Category>
    </nav>
  );
};
