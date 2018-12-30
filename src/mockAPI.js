const products = [
  {
    id: 0,
    imageUrl: "https://static.meijer.com/Media/000/41250/0004125010200_1_A1C1_0600.png",
    name: "Milk 1 liter",
    quantity: 5,
    price: 1,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 1,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91Euv1Km6HL._SX522AA522_PIbundle-40,TopRight,0,0_AA522_SH20_.jpg",
    name: "Orange juice 500ml",
    quantity: 18,
    price: 15,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 2,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/2u6f79FD-vdyJc98rZxSD3NaxmY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/16/730/n/1922195/08cb4b14_DSCF5472/i/Eggs.jpg",
    name: "Eggs",
    quantity: 10,
    price: 5,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 3,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/ALw00VRuD-Ckbq7p1GS-DrO_ZYc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/15/985/n/1922195/4ab242ba96b69687_Spinach/i/Spinach.jpg",
    name: "Spinach",
    quantity: 1,
    price: 2,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 4,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/xesT0MNTbDqrnWODNSZQuGPJRys/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/15/988/n/1922195/627a2639d6aff928_DSCF2696/i/Apples.jpg",
    name: "Apples",
    quantity: 15,
    price: 16,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 5,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/jp7VktX1Q5V251DBn695kBOEnJQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/15/992/n/1922195/9eec99de2ad7bc31_DSCF2718/i/Parmesan-Cheese.jpg",
    name: "Parmesan Cheese",
    quantity: 11,
    price: 52,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 6,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/hsIyUsi1lX5AvwT-sOz1gYx6EOo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/16/730/n/1922195/d8eae429_Pasta-Carbonara-with-Leeks-LARGE/i/Pasta.jpg",
    name: "Pasta",
    quantity: 51,
    price: 4,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 7,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/SzOuthbKG0g0xcVrMG8REkV-kiU/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/16/730/n/1922195/c6eaf3be_Garlic-and-Thyme/i/Garlic-Fresh-Herbs.jpg",
    name: "Garlic and Fresh Herbs",
    quantity: 30,
    price: 5,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 8,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/_JCSpqyiK8IMVcBIwXEQJ9UmzoI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/15/030/n/1922195/535abb3eaa1a861a_Chickpeas-Drying-on-a-Towel/i/Chickpeas-Other-Canned-Beans.jpg",
    name: "Chickpeas and Other Canned Beans",
    quantity: 20,
    price: 50,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 9,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/RtN50yEXtjVqGIx0_ER-5WJLUqo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/16/771/n/1922195/209959b5_chick/i/Boneless-Skinless-Chicken-Breasts.jpg",
    name: "Boneless, Skinless Chicken Breasts",
    quantity: 14,
    price: 3,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 10,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/RIpb8QKgaZD3Ni0oCQwYB4MUtgQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/16/730/n/1922195/b9a56f3f_Lemon-Zest/i/Lemons.jpg",
    name: "Lemons",
    quantity: 100,
    price: 50,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 11,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/m9h7so6k_NAMRg3BZ0AhB81aS_o/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/15/016/n/1922195/76b66b4b50953fda_DSCF2729/i/Veggies-Roast.jpg",
    name: "Veggies to Roast",
    quantity: 3,
    price: 23,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 12,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/msc2eVjA-1b104zguKNgVvQ7n68/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/16/730/n/1922195/fafa5670_Salmon-with-Cabbage-Before-Cooking/i/Frozen-Fish.jpg",
    name: "Frozen Fish",
    quantity: 345,
    price: 5,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 13,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/ItLOAD6oVYkgmavEmbGNoEeiCL0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/16/795/n/1922195/0cd9aa48_Bulletproof-Coffee/i/Coffee.jpg",
    name: "Coffee",
    quantity: 10,
    price: 12,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 14,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/KTXx3vYAzickuTxahT0OQuasdNQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/16/737/n/1922195/bead3e77_Screen_Shot_2015-04-16_at_9.40.58_AM/i/Dark-Chocolate.png",
    name: "Dark Chocolate",
    quantity: 2,
    price: 188,
    insertionTime: "2018-01-11T11:57:39.616Z"
  },
  {
    id: 15,
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/Gc1qz5hPXt_9qn95j4zltduL6vs/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/15/037/n/1922195/ddf3021ac0ea8527_quinoa/i/Quinoa-Brown-Rice.jpg",
    name: "Quinoa and Brown Rice",
    quantity: 5,
    price: 12,
    insertionTime: "2018-01-11T11:57:39.616Z"
  }
];


export function getProducts() {
  return products;
}
