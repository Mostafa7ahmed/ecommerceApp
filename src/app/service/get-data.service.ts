import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }


  // subcategory data .

  subCategorisFilterData = [
    { id: 1, categories: 'appliances', subcategories: 'mobile' },
    { id: 2, categories: 'appliances', subcategories: 'smart tv' },
    { id: 3, categories: 'appliances', subcategories: 'air cooler' },
    { id: 4, categories: 'appliances', subcategories: 'refrigerator' },
    { id: 5, categories: 'fashion', subcategories: 'tshirt' },
    { id: 6, categories: 'fashion', subcategories: 'jeans' },
    { id: 7, categories: 'homeandfurniture', subcategories: 'sofa' },
    { id: 8, categories: 'homeandfurniture', subcategories: 'table' },
    { id: 9, categories: 'homeandfurniture', subcategories: 'cover' },
    { id: 10, categories: 'toys', subcategories: 'puzzle' },
    { id: 11, categories: 'toys', subcategories: 'cars' },
    { id: 12, categories: 'toys', subcategories: 'toys' }
  ];



  // category data 
  
    categoriesData = [
      {
        id: 1,
        name: 'Fashion',
        img: '../../assets/images/categoriesimg/fashion.webp',
        code: 'fashion',
      },
      {
        id: 2,
        name: 'Home & Furniture',
        img: '../../assets/images/categoriesimg/home.webp',
        code: 'homeandfurniture',
      },
      {
        id: 3,
        name: 'Appliance',
        img: '../../assets/images/categoriesimg/appliance.webp',
        code: 'appliances',
      },
      {
        id: 4,
        name: 'Toys',
        img: '../../assets/images/categoriesimg/toys.webp',
        code: 'toys',
      },
    ];
  






     // product details 

  productData = [
    {
      pdId: 8565,
      pdName: "SAMSUNG Galaxy F04 (Opal Green, 64 GB)",
      pdDesc: "With the stunning features of the Samsung Galaxy F04 smartphone, discover what it means to have a flawless user experience",
      pdPrice: 11499,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/samasungmobile.webp"
    },
    {
      pdId: 8566,
      pdName: "Apple iPhone 15 (Blue, 128 GB)",
      pdDesc: "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy.",
      pdPrice: 79900,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/appleiphone15.webp"
    },
    {
      pdId: 8567,
      pdName: "BAJAJ 36 L Room/Personal Air Cooler  (White, Platini Coolest - Torque PX 97)",
      pdDesc: "Bajaj PX 97 torque is a durable, compact and portable room cooler that can be placed in offices as well in bedrooms for effective cooling, it is constructed from corrosion-free, engineered thermoplastic material",
      pdPrice: 7450,
      pdCategory: "appliances",
      pdSubCategory: "air cooler",
      pdImg: "../../assets/images/productimg/aircooler.webp"
    },

    {
      pdId: 8568,
      pdName: "SONY 125.7 cm (50 inch)",
      pdDesc: "You can enjoy the brilliant colours and explore new worlds in 4K resolution on this Sony Google TV. The powerful X1 4K processor brings every colour to life so that you can enjoy your favourite content.",
      pdPrice: 74000,
      pdCategory: "appliances",
      pdSubCategory: "smart tv",
      pdImg: "../../assets/images/productimg/smartvsony.webp"
    },
    {
      pdId: 8569,
      pdName: "SAMSUNG 256 L Frost Free Double Door 3 Star Convertible Refrigerator with Convertible, Digital Inverter with Display  (Luxe Black, RT30C3733BX/HL)",
      pdDesc: "You can stock up on your weekly groceries and easily store them in the Samsung Refrigerator. Moreover, you can even store additional groceries and other food items in this refrigerator by converting the freezer into a fridge",
      pdPrice: 44990,
      pdCategory: "appliances",
      pdSubCategory: "refrigerator",
      pdImg: "../../assets/images/productimg/refrigeratorsamsung.webp"
    },
    {
      pdId: 8570,
      pdName: "Nokia 130 Music Dual Sim, Music Player, Wireless FM Radio and Dedicated Music Buttons",
      pdDesc: "130 Music Dual Sim, Music Player, Wireless FM Radio and Dedicated Music Buttons",
      pdPrice: 2199,
      pdCategory: "appliances",
      pdSubCategory: "mobile",
      pdImg: "../../assets/images/productimg/nokiamobile.webp"
    },
    {
      pdId: 8571,
      pdName: "Men Solid Round Neck Pure Cotton Dark Green T-Shirt",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 200,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/men-fashion-2.webp",
      pdSize: ["S", "M", "L", "XL"]
    },
    {
      pdId: 8572,
      pdName: "Men Printed Round Neck Cotton Blend Blue T-Shirt",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 500,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/men-fashion-3.webp",
      pdSize: ["S", "M", "L", "XL"]

    },
    {
      pdId: 8573,
      pdName: "Women Solid Round Neck Pure Cotton Purple T-Shirt",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 800,
      pdCategory: "fashion",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/images/productimg/women-fashion-1.webp",
      pdSize: ["S", "M", "L", "XL"]
    },
    {
      pdId: 8574,
      pdName: "Men Regular Mid Rise Blue Jeans",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 550,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "../../assets/images/productimg/men-fashion-jeans-1.webp",
      pdSize: [30, 32, 34]
    },
    {
      pdId: 8575,
      pdName: "Women Flared Mid Rise Blue Jeans",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 1500,
      pdCategory: "fashion",
      pdSubCategory: "jeans",
      pdImg: "../../assets/images/productimg/women-fashion-jeans-1.webp",
      pdSize: [26, 28, 30, 32, 34]
    },
    {
      pdId: 8576,
      pdName: "Cortina Polyester Striped Sofa Cover  (Brown / Drak Brown Pack of 1)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 1500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-cover-1.webp",
    },
    {
      pdId: 8577,
      pdName: "Cortina Cotton Curtain for , Boho Curtain with Stainless Steel Rings Curtain Fabric  (Brown, 153 m)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 2500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-curtain-2.webp",
    },
    {
      pdId: 8578,
      pdName: "Decorum 204 TC Microfiber Double Floral Flat Bedsheet  (Pack of 1, Green)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 2500,
      pdCategory: "homeandfurniture",
      pdSubCategory: "cover",
      pdImg: "../../assets/images/productimg/hnf-cover-2.webp",
    },
    {
      pdId: 8579,
      pdName: "Seventh Heaven Milan 3 Seater Sofa",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 15000,
      pdCategory: "homeandfurniture",
      pdSubCategory: "sofa",
      pdImg: "../../assets/images/productimg/hnf-sofa-1.webp",
    },
    {
      pdId: 8580,
      pdName: "Allie Wood Solid Wood Study Table",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 10000,
      pdCategory: "homeandfurniture",
      pdSubCategory: "table",
      pdImg: "../../assets/images/productimg/hnf-table-1.webp",
    },
    {
      pdId: 8581,
      pdName: "spincart Mini Monster",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 300,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "../../assets/images/productimg/toy-1.webp",
    },
    {
      pdId: 8582,
      pdName: "PP INFINITY Ford 12V Electric Ride On Car For Kids With Remote Control, Music Light 1-6 Yrs Car Battery Operated Ride On  (Black)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 25000,
      pdCategory: "toys",
      pdSubCategory: "cars",
      pdImg: "../../assets/images/productimg/toy-2.webp",
    },
    {
      pdId: 8583,
      pdName: "BOZICA Wooden Educational Creative learning A To Z English Alphabets Board Puzzle  (27 Pieces)",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 700,
      pdCategory: "toys",
      pdSubCategory: "puzzle",
      pdImg: "../../assets/images/productimg/toy-3.webp",
    },
    {
      pdId: 8584,
      pdName: "Aapaga Action Figure Super Heros Toy Set",
      pdDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque placeat asperiores sint molestiae expedita facilis, illum voluptas optio amet cumque veniam itaque commodi vel incidunt sed deserunt, ea unde laudantium.",
      pdPrice: 500,
      pdCategory: "toys",
      pdSubCategory: "toys",
      pdImg: "../../assets/images/productimg/toy-4.webp",
    },
  ];
   
}
