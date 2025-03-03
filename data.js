var heroImages=[
    "2700/layout-engine/2022-05/Group-33704.jpg",
    "720/layout-engine/2023-07/pharmacy-WEB.jpg",
    "720/layout-engine/2023-07/Pet-Care_WEB.jpg",
    "720/layout-engine/2023-03/babycare-WEB.jpg"
];
var homePageData=[
    "12/paan-corner_web.png","11/Slice-2_10.png","11/Slice-3_9.png","11/Slice-4_9.png","11/Slice-5_4.png","11/Slice-6_5.png","11/Slice-7_3.png","11/Slice-8_4.png","11/Slice-9_3.png","11/Slice-10.png","11/Slice-11.png","11/Slice-12.png","11/Slice-14.png","11/Slice-15.png","11/Slice-17.png","11/Slice-18.png","11/Slice-19.png","11/Slice-20.png"
];
var products=[
    {id:1,imgLink:"app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",name:"Amul Taaza Toned Fresh Milk",qty:"500ml",price:"28"},
    {id:2,imgLink:"app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",name:"Amul Gold Full Cream Fresh Milk",qty:"500ml",price:"34"},
    {id:3,imgLink:"app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",name:"Amul Masti Pouch Curd",qty:"400g",price:"35"},
    {id:4,imgLink:"app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562",name:"Mother Diary Toned Milk",qty:"500ml",price:"28"},
    {id:5,imgLink:"app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",name:"Amul Salted Butter",qty:"100g",price:"60"},
    {id:6,imgLink:"app/assets/products/sliding_images/jpeg/ba929c05-aba2-4838-b674-e2072089022b.jpg?ts=1712325614",name:"Mother Dairy Cow Fresh Milk",qty:"500ml",price:"29"},
    {id:7,imgLink:"app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212",name:"Harvest Gold - White Bread",qty:"350g",price:"30"},
    {id:8,imgLink:"app/assets/products/sliding_images/jpeg/8f6bfafc-ad44-422a-8e96-7e2d2994012a.jpg?ts=1707998856",name:"Mother Dairy Full Cream Fresh Milk",qty:"500ml",price:"34"},
    {id:9,imgLink:"app/images/products/sliding_image/86446a.jpg?ts=1687948913",name:"Mother Dairy Classic Pouch Curd",qty:"400g",price:"35"},
    {id:10,imgLink:"app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592",name:"Amul Cow Fresh Milk",qty:"500ml",price:"29"},
    {id:11,imgLink:"app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212",name:"Harvest Gold White Bread",qty:"700g",price:"60"},
    {id:12,imgLink:"app/images/products/sliding_image/329549a.jpg?ts=1690805806",name:"Mother Dairy Classic Cup Curd",qty:"400g",price:"50"},
    {id:13,imgLink:'app/images/products/sliding_image/519582a.jpg?ts=1690830565',name:'Orion Turtle Mexican Lime Corn Chips',qty:'115 g',price:'95'},
    {id:14,imgLink:'app/assets/products/sliding_images/jpeg/c7221d26-16ce-4b85-802a-b4a5aaabae13.jpg',name:'Orion Korean Kimchi K Snack Onion Rings',qty:'70 g',price:'54'},
    {id:15,imgLink:'app/assets/products/sliding_images/jpeg/c23856bf-cdf5-475d-9545-023bff8694d3.jpg?ts=1723100848',name:'Kabs Jackpot Cheese Balls',qty:'60 g',price:'65'},
    {id:16,imgLink:'app/assets/products/sliding_images/jpeg/fe49d6ac-194c-4caf-b46d-48c1a3e6a17b.jpg?ts=1723798983',name:'Kabs Jackpot Chilli Lemon Stix Crips',qty:'80 g',price:'65'},
    {id:17,imgLink:'app/assets/products/sliding_images/jpeg/79f7319a-f048-48db-ab5a-00a6d2911ea3.jpg?ts=1723098575',name:'Kettle Studio Crushed Peprika with Exotic..',qty:'113 g',price:'199'},
    {id:18,imgLink:'app/assets/products/sliding_images/jpeg/a0f592fe-d783-42e1-b1a4-1efccdc52721.jpg?ts=1723100072',name:'DOKi Kerala Fry Buffalo Jerky',qty:'30 g',price:'199'},
    {id:19,imgLink:'app/assets/products/sliding_images/jpeg/6cfea237-c302-477c-a05e-0c0be2f1f4f3.jpg?ts=1717975459',name:'Cheetos Flamin Hot Crunchy Crisps',qty:'99.2 g',price:'499'},
    {id:20,imgLink:'app/images/products/sliding_image/519579a.jpg?ts=1690828992',name:'Orion Turtle Masala Corn Chips',qty:'115 g',price:'95'},
    {id:21,imgLink:'app/assets/products/sliding_images/jpeg/6807f54d-f711-49ca-9635-514ac9b72d7f.jpg?ts=1724850859',name:'Orion Turtle Spicy Devil Corn Chips',qty:'115 g',price:'95'},
    {id:22,imgLink:'app/assets/products/sliding_images/jpeg/bc76ce9d-9d2c-42eb-a1d5-6464618fe978.jpg?ts=1723100846',name:'Cheetos Flamin Hot Crunchy Puffs',qty:'28.3 g',price:'161'},
    {id:23,imgLink:'app/assets/products/sliding_images/jpeg/e24eda9c-3cc7-4e66-bc2b-80383eb85a80.jpg?ts=1715152398',name:'Frooti Mango Drink',qty:"125ml",price:'40'},
    {id:24,imgLink:'app/assets/products/sliding_images/jpeg/b330c04e-0e5f-4733-a43f-9351772763d8.jpg?ts=1721201147',name:'7UP Nimbooz with Lemon Juice',qty:"350ml",price:'20'},
    {id:25,imgLink:'app/assets/products/sliding_images/jpeg/41b6af78-5d96-4f4e-bceb-325192c3081a.jpg?ts=1721410091',name:'Coca-Cola Soft Drink (300 ml)',qty:"300ml",price:'40'},
    {id:26,imgLink:'app/images/products/sliding_image/19507a.jpg?ts=1689328439',name:'Amul Masti Spiced Salted Buttermilk',qty:"200ml",price:'15'},
    {id:27,imgLink:'app/assets/products/sliding_images/jpeg/f5041215-7194-401d-9026-92c784791f75.jpg',name:'Coca-Cola Soft Drink',qty:"250ml",price:'20'},
    {id:28,imgLink:'app/assets/products/sliding_images/jpeg/0f87f19e-66da-48cd-8c75-343abf732948.jpg?ts=1707312325',name:'Sprite Lime Flavored Soft Drink 750 ml',qty:"750ml",price:'40'},
    {id:29,imgLink: 'app/assets/products/sliding_images/jpeg/0ad88094-c4ea-48fd-b866-46da87d6739d.jpg?ts=1711970525',name:'Pepsi Soft Drink',qty:"750ml",price:'40'},
    {id:30,imgLink:'da/cms-assets/cms/product/085fb059-2dce-4369-8ce5-d1d423722c0e.jpg?ts=1736750776',name:'Nescafe Cafe Style Cold Coffee, Iced Latte',qty:"170ml",price:'46'},
    {id:31,imgLink:'da/cms-assets/cms/product/7825901f-c9d7-48f2-9de2-d6d264bf8546.jpg?ts=1736761610',name:'Nescafe Cafe Style Cold Coffee, Iced Frappe',qty:"170ml",price:'46'},
    {id:32,imgLink:'app/assets/products/sliding_images/jpeg/cfeaa68b-2ce1-4c1e-95c5-450bbb9bb281.jpg?ts=1708591243',name:'Coca-Cola Soft Drink (750 ml) - Pack of 2',qty:"2*750ml",price:'79'}
];
var categoriesProducts=[
    {
        id: 1,
        name: "Dairy & Breakfast",
        products: [1,2,3,4,5,6,7,8,9,10,11,12],
        imgLink: "922_1643384380004.png"
    },
    {
        id: 2,
        name: "Snacks & Munchies",
        products: [13,14,15,16,17,18,19,20,21,22],
        imgLink: "940_1643445382163.png"
    },
    {
        id: 3,
        name: "Cold Drinks & Jucies",
        products: [23,24,25,26,27,28,29,30,31,32],
        imgLink: "1323_1692947258191.png"
    }
];