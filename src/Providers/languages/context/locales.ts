export const locales = {
  en: {},
  fr: {
    _common: {
      topNavBar: {
        btnSearch: 'Rechercher',
        btnHelp: 'Aide',
        btnBasket: 'Panier',
      },
    },
    index: {
      heroSection: {
        categoryNav: {
          market: 'Supermarché',
          home: 'Maison et bureau',
          smartphone: 'Téléphones et tablettes',
          electronics: 'Électronique',
          cleanBeauty: 'Hygiène et beauté',
          baby: 'Produits pour bébés',
          food: 'Agriculture et élévage',
          informatics: 'Informatique',
          fashionWomen: 'Mode Femme',
          fashionMen: 'Mode Homme',
          game: 'Jouets et jeux vidéos',
          others: 'Autres catégories',
        },
        assistanceNav: {
          assistance: {
            title: "Centre d'assistance",
            description: 'Guide du service client',
          },
          command: {
            title: 'Commandez au',
            description: '07 59 26 07 09',
          },
          sales: {
            title: 'Vendez sur Jumia',
            description: 'Ouvrez votre shop ici',
          },
        },
      },
      listSubsidiaries: {
        officalShops: {
          title: 'Boutiques officielles',
          icon: 'shopBag',
        },
        express: {
          title: 'Colis Express',
          icon: 'expressDelivery',
        },
        deals: {
          title: 'Jumia+ deals',
          icon: 'deals',
        },
        food: {
          title: 'Jumia+ food',
          icon: 'food',
        },
      },
      flash: {
        redAlert: {
          title: 'Ventes Flash',
          invite: 'se termine dans :',
          plus: 'voir plus',
        },
        bottomAlert: {
          invite:
            'Ce site web utilise des cookies. Pour plus d’informations sur la façon dont nous utilisons les cookies, vous pouvez lire notre',
          link: {
            text: 'politique de confidentialité',
            url: 'https://www.google.com',
          },
        },
      },
      topDeals: {
        redAlert: {
          title: 'Nos top deals',
        },
      },
    },
  },
} as const;
