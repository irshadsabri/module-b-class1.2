const data =      
[
   {
       "id": 9,
       "title": "Electronic Bronze Chips",
       "price": 808,
       "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four-wheel drive",
       "image_url": "https://i.imgur.com/R3iobJA.jpeg"
   },
   {
       "id": 11,
       "title": "Awesome Bronze Car",
       "price": 382,
       "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
       "image_url": "https://i.imgur.com/cBuLvBi.jpeg"
   },
   {
       "id": 12,
       "title": "Recycled Rubber Cheese",
       "price": 30,
       "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
       "image_url": "https://i.imgur.com/KeqG6r4.jpeg"
   }
];


console.log("Data to Console:");

data.forEach(item => {

   
   console.log("id:", item.id);
   console.log("title:", item.title);
   console.log("price:", item.price);
   console.log("description:", item.description);
   console.log("image_url:", item.image_url);
   console.log("\n");
   
});