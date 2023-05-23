// const express = require("express");
// const app=express()
// const Company = require('../routes/recipe');
// router=exports.homepage;
require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');

exports.homepage=async(req,res)=>{
    try{
        const limitnumber=5;
        const categories= await Category.find({}).limit(limitnumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitnumber);
        const indian = await Recipe.find({ 'category': 'indian' }).limit(limitnumber);
   
    const chinese = await Recipe.find({ 'category': 'chinese' }).limit(limitnumber);

    const food = { latest, indian, chinese };

    res.render('home', { title: 'Cooking Blog - Home', categories, food } );
       
    }
    catch(error){
        res.status(500).send({message : error.message||"error occured"})
    }
};
exports.exploreCategories=async(req,res)=>{
    try{
        const limitnumber=5;
        
        const categories= await Category.find({}).limit(limitnumber);
        res.render("categories",{title:'Cooking blog-catergories',categories});
    }
    catch(error){
        res.status(500).send({message : error.message||"error occured"})
    }
};
exports.explorerecipe=async(req,res)=>{
    try{
        let recipeid=req.params.id;
        console.log(recipeid)
        const recipe= await Recipe.findById(recipeid);
       
       
        res.render("recipe",{title:'Cooking blog-Recipe',recipe});
    }
    catch(error){
        res.status(500).send({message : error.message||"error occured"})
    }
};
exports.exploreCategoriesById = async(req, res) => { 
    try {
      let categoryId = req.params.id;
      console.log(categoryId)
      const limitNumber = 20;
      const categoryById = await Recipe.find({'category': categoryId }).limit(limitNumber);
      res.render('categories', { title: 'Cooking Blog - Categoreis', categoryById } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }

  } 
  exports.exploresearch = async(req, res) => {
    try {
      let searchTerm = req.body.search;
     
      res.render('Search', { title: 'Cooking Blog - Search', recipe } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
    
  }
  exports.submitrecipe=async(req,res)=>{
    // console.log("hello")
    try{
      res.render('submitrecipe',{title:'Submit Your Recipe Here'}
      );
  }catch(error){
    res.satus(500).send({message: error.message || "Error Occured" });
  }

    }
 
    exports.Submit=async(req,res)=>{
      const { name, image } = req.body;
      console.log(req.body.name)
      if (!name || !image) {
        return res.status(400).send('Name and image are required');
      }
      try {
        // Save data to database
        const category = new Category({ name, image });
        await category.save();
        return res.send('Data saved');
      } catch (error) {
        console.error(error);
        return res.status(500).send('Server error');
      }
      // console.log("hello")
    };
    

    
  
// async function insertdummycategory(){
//     try{
//         await Category.insertMany([ let recipe = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
//             {
//             "name":"indian",
//              "image":"https://image.shutterstock.com/z/stock-photo-rajasthani-traditional-cuisine-dal-baati-also-know-as-dal-bati-or-daal-baati-churma-on-wooden-780441559.jpg"

//         },
//         {
//             "name":"chinese",
//              "image":"chinese-food.jpg"

//         },
//         {
//             "name":"american",
//              "image":"american-food.jpg"

//         },
//         {
//             "name":"spanish",
//              "image":"spanish-food.jpg"

//         },
//         {
//             "name":"mexican",
//              "image":"mexican-food.jpg"

//         },
//     ]);
//     }
//     catch(error){
//         console.log('err',+error);
//     }
// }

// insertdummycategory();
// async function insertdummy(){
//     try{
//         await Category.insertMany([
//             {
//             "name":"CHOLE",
//              "image":"chole.jpg"
//         },
//         {
//             "name":"DAL FRY",
//              "image":"dal fry.jpg"

//         },
//         {
//             "name":"Dal Makkhani",
//              "image":"dal makkhani.jpg"

//         },
//         {
//             "name":"KADHAI PANEER",
//              "image":"kadhaipaneer.jpg"

//         },
//         {
//             "name":"MALAI KOFTA",
//              "image":"malaikofta.jpg"

//         },
//     ]);
//     }
//     catch(error){
//                 console.log('err',+error);
//             }
//         }
//         insertdummy();
// async function insertdummyRecipe(){
//         try{ 
//             await Recipe.insertMany([
//             {  
//                 "name":"CHOLE",
//                 "description":`Soak overnight chole and cook in pressure cooker, add bay leaf,black pepper, cloves to cooker when you Cook chole it gives nice aroma add some salt and oil 1 tspoon, it helps chole to cook fast and soft
//                 Make paste of onion and tomato. I prefer to fry onion and tomato till meshy as it gives thickness and richness to gravy
//                 Give 5/6 whistles to chole keep aside.heat kadai don't use shallow pan because chole should get enough space to cook in gravy.add oil when it is hot add onion paste and tomato paste and saute.add ginger garlic paste.
//                 Then add cumin powder, coriander powder, turmeric powder, Red chilly powder, chole masala,salt saute all this till it leaves oil then add chole
//                 Mix well,add water as the consistency you want cook till all gravy becomes rich add tamarind paste it's optional but gives nice taste.add little water as we are going to add fresh cream.add fresh cream mix well and swith off the flame.serve hot with paratha,nan,roti or Rice anything goes perfect with punjabi chole..yum
                
                
//                 source:https://eat.andreamutiara.com/recipe/4786-steps-to-make-jamie-oliver-punjabi-chole/
//                 `,
//                 "email":"arorakhushi@gmail.com",
//                 "ingredients":[
//                     "Take 200 gm chole",
//                     "Get 2 medium sized onions",
//                     "Take 3 big tomatoes",
//                     "Make ready Garlic and ginger paste 1 tspoon",
//                     "Make ready Cumin powder1tspoon",
//                     "Prepare Coariander seed powder 1 tspoon",
//                     "Take Chole masala 1 tspoon",
//                     "Make ready Red chili powder 1 tspoon",
//                     "Prepare to taste Salt",
//                     "Make ready Bay leaf3/4, black pepper 6/7, cloves 3,4",
//                     "Prepare 2 tablespoons Fresh cream",
//                     "Get Tamarind paste 1(optional)",
//                     "Prepare 3 tablespoons Oil",
//                 ],
//                 "category":"indian",
//                  "image":"chole.jpg"
//             },
//             {
//                 "name":"DAL FRY",
//                  "description":`Put the dal, water and turmeric in a large saucepan, over a medium heat. Bring to the boil, then simmer uncovered for 1¼ hours, until the dal is soft, stirring every few minutes to make sure the dal doesn’t stick to the bottom of the pan.
//                  Mash lightly with a potato masher, then turn off the heat and set aside.
//                  To make the tadka, heat the oil in a frying pan (skillet) over a medium heat. Add the cumin seeds, then after a few seconds, add the onions and fry for 8 minutes, stirring well so that they brown evenly. Add the garlic and fry for a further minute, then add the crushed fennel seeds, chilli powder and ground coriander and stir well. Add the tomato and fry for 2-3 minutes until soft, then add the ginger and fry for a further 1 minute.
//                  Pour the tadka mix over the cooked dal. Add enough boiling water to thin out the dal; about 80–100 ml (3 floz /⅓ cup–7 fl oz/scant ½ cup). Simmer for a couple of minutes to heat through, season to taste and garnish with fresh coriander. Serve warm with roti or rice.\
                 
//                  source:https://www.jamieoliver.com/recipes/lentil-recipes/tadka-dal/
//                  `,
//                  "email":"arorakhushi@gmail.com",
//                  "ingredients":[
//                     "250 g (9 oz/1 ¼ cups) chana dal",
//                     "1 litre (34 fl oz/4 cups) water",
//                     "1 teaspoon ground turmeric",
//                     "FOR THE TADKA",
//                     "3 tablespoons vegetable oil",
//                     "1 teaspoon cumin seeds",
//                     "110 g (3¾ oz) white onions , thinly sliced",
//                     "4 garlic cloves , thinly sliced",
//                     "1 teaspoon fennel seeds , coarsely crushed",
//                     "½ teaspoon Kashmiri chilli powder or mild chilli powder",
//                     "1 teaspoon ground coriander",
//                     "90 g (3¼ oz) tomato , finely chopped",
//                     "2.5 cm (1in) ginger root , sliced into matchsticks",
//                     "salt , to taste",
//                     "chopped coriander (cilantro) , to garnish",
//                  ],
//                  "category":"indian",
//                  "image":"dal fry.jpg"
    
//             },
//             {
//                 "name":"Dal Makkhani",
//                  "description":`Soak dal and rajmah overnight. Prepare ingredients as mentioned in the list
//                  Wash dal and rajmah and pressure-cook in excess water for one whistle. Remove from fire and cool slightly, drain and discard the water.
//                  Add 4 cups water and salt and pressure cook for another 30 minutes, till the dal is well cooked.
//                  In a karahi, heat ghee and fry the chopped ginger, garlic and onion till golden brown. Add green chillies and red chilli powder and fry for a minute. Add the tomato puree and cook till the ghee separates. Add to the dal and bring to a boil, then add MAGGI Masala-ae-Magic and add salt to taste. Simmer for a few minutes.
//                  Remove from fire and mix in the cream. Garnish with coriander leaves and serve hot with rotis or parathas.


//           source:https://www.maggi.in/recipes/dal-makhani/?utm_source=Google&utm_medium=cpc&utm_campaign=IN_MAGG_mgg_en_GO_NonBrand_EX_NA_CON_FLWDRS_NA_Compete_NA&gclid=CjwKCAjwsMGYBhAEEiwAGUXJafkD1Nj3TE6UEILH0gnKX_HGK6BTzB0JsU-HDqW0qtva8LAftEf15xoCkicQAvD_BwE&gclsrc=aw.ds` ,
//           "email":"arorakhushi@gmail.com",
//                  "ingredients":[
//                     "1 Sachet MAGGI Masala-ae-Magic",
//                     "1 cup Sabut Urad Dal",
//                     "0.25 cup Rajmah",
//                     "1 pinch Salt (To Taste) ",
//                     "4 cup Water ",
//                     "2 tablespoon Ghee",
//                     "1 teaspoon  Ginger (Chopped)",
//                     "1  teaspoon Garlic (Chopped)",
//                     "1 Onion (Finely Chopped)",
//                     "3 Green Chillies",
//                     "2 teaspoon Red Chilli Powder",
//                     "5 tablespoon Tomato Puree",
//                     "0.5 cup Cream",
//                     "2 tablespoon Coriander Leaves (Coriandrum Sativum)"],
//                     "category":"indian",
//                     "image":"dal makkhani.jpg"
    
//             },
//             {
//                   "name":"KADHAI PANEER",
//                    "description":`First make the kadhai masala. Put the spices in a dry frying pan (skillet) and dry-roast over a low heat for 3–4 minutes until fragrant, stirring well to make sure they are evenly toasted. Leave to cool, then grind in a spice grinder to a coarse mix. Set aside.
//                    Put the tomatoes and tomato purée in a blender and blend to a smooth, fine paste. Set aside.
//                    Heat 2 tablespoons of the oil in a large frying pan over a medium heat, then add the red onion and peppers and fry for 5 minutes until they begin to soften, stirring well. Add the diced paneer, along with 3 tablespoons of the kadhai masala (or a touch more if you prefer it spicy). Stir well, but make sure not to break up the paneer. Cook for 2 minutes to soften, then turn off the heat and set aside.
//                    Heat the remaining 3 tablespoons of oil in a wok or kadhai over a medium heat. Add the cumin seeds and two-thirds of the ginger matchsticks and fry for a few seconds, then add the white onions and fry for 12–14 minutes until they soften and change colour, stirring well to make sure they don’t stick to the bottom of the pan.
//                    Add the blended tomato purée and cook for another 12 minutes until the mixture thickens and reduces slightly. Add the chilli powder, turmeric, ground coriander and sugar, season to taste and cook for a couple of minutes, stirring well. Now add the paneer and pepper mix and stir together over a low heat for 2–3 minutes.
//                    Turn off the heat, add the kasoori methi and the remaining ginger matchsticks and stir well. Garnish with fresh coriander and serve in the thali with tadka dal, phulkas and raita
                   
//                    source:https://www.jamieoliver.com/recipes/paneer-recipes/punjabi-kadhai-paneer/
//                    `,
//                    "email":"arorakhushi@gmail.com",
//                   "ingredients":[
//                     "300 g (10½oz) tomatoes , roughly chopped",
//                     "2 heaped tablespoons tomato purée (paste) " ,                  
//                     "5 tablespoons vegetable oil",
//                     "80 g (3oz) red onion , thinly sliced",
//                     "300 g (10½oz) mixed (bell) peppers , thinly sliced",
//                     "450 g (1lb) paneer , cut into bite-sized cubes",
//                     "1 teaspoon cumin seeds",
//                     "7.5 cm (3in) ginger root , cut into matchsticks",
//                     "120 g (4oz) white onions , finely chopped",
//                     "1 teaspoon Kashmiri chilli powder",
//                     "¼ teaspoon ground turmeric",
//                     "1 teaspoon ground coriander",
//                     "pinch of sugar",
//                     "salt , to taste",
//                     "2 tablespoons kasoori methi",
//                     "chopped coriander (cilantro) , to garnish",
//                     "FOR THE KADHAI MASALA",
//                     "3 dried red Kashmiri chillies",
//                     "2 tablespoons coriander seeds",
//                     "2 teaspoons cumin seeds",
//                     "1 teaspoon whole black peppercorns",
//                     "7/8 green cardamom pods , seeds only",
//                   ],
//                   "category":"indian",
//                  "image":"kadhaipaneer.jpg"
    
//             },
//             {
//                 "name":"MALAI KOFTA",
//                 "description":`In a bowl, combine grated paneer and potatoes, 1/2 teaspoon red chilli powder, 1/4 teaspoon turmeric powder, 1/2 teaspoon garam masala powder, 1/2 teaspoon sabji masala, salt and mix it well.
//                 Now add all purpose flour into it and mix it and form a dough.
//                 Now cut small balls from it and then flatten those balls and into it stuff chopped, almonds, pistachios and cashew nuts and raisins and make balls of it and deep fry them.
//                 In a grinder, add tomatoes, almonds and cashew nuts and grind it into fine paste.
//                 Now heat 1-2 tablespoon oil in a pan, into it and cumin seeds, bay leaves, green cardamom and cloves and allow it to crackle.
//                 Now add tomato paste, salt, turmeric powder, red chilli powder, coriander powder, sabji masala, garam masala powder, dry fenugreek leaves and honey in it and saute it for 10-15 minutes in low flame.
//                 Now add cream in it and cook it for another 2 minutes or till it start leaving sides of the pan.
//                 Now add water as per your need and cook it for 8-10 minutes.
//                 Then add fry balls in it and cook it for 2-3 minutes and switch of the flame.
//                 Your malai kofta is ready to serve.


//                 source:https://restunastore.com/
//                 `,
//                 "email":"arorakhushi@gmail.com",
//                 "ingredients":[
//                     "Prepare Paneer/Cottage cheese (grated)",
//                     "Prepare Potatoes (grated)",
//                     "Take All purpose flour",
//                     "Prepare Salt",
//                     "Prepare Tomatoes (medium size and chopped)",
//                     "Make ready Turmeric powder",
//                     "Prepare Red chilli powder",
//                     "Take Coriander powder",
//                     "Make ready Garam masala powder",
//                     "Take Dry fenugreek leaves",
//                     "Prepare Cumin seeds",
//                     "Prepare Sabji masala",
//                     "Get Green cardamom",
//                     "Get Sugar/ Honey",
//                     "Take Cream",
//                     "Prepare Bay leaves",
//                     "Take Cinnamon stick",
//                     "Take Almonds (4-5 finely chopped)",
//                     "Make ready Cashew nuts (2-3 finely chopped)",
//                     "Make ready Pistachios (finely chopped)",
//                     "Make ready Raisins",
//                     "Take Oil",
                    
//                 ],
//                 "category":"indian",
//                  "image":"malaikofta.jpg"
    
//             },
//             {
//                "name":"Bean curd with Laus spicy Ma Po sauce",
//                "description":`
//              To make the marinade, place the ingredients in a large bowl with 2 tablespoons of water and a pinch of sea salt and white pepper. Mix to combine.
//             Immerse the pork in the marinade, and set aside.
//              Soak the shiitake mushrooms in a hot water for 30 minutes.
//              To make the ma po sauce, soak the dried chillies in water to soften. Place the black beans in another bowl of water and leave to soak for 15 minutes.
//              Meanwhile, prepare your ma po bean curd. Cut the curd into 2.5cm cubes and place in a bowl of hot water for 4 minutes. Drain and set aside.
//              Return to the ma po sauce. Deseed, roughly chop and blend the red pepper in a food processor with a splash of water until it forms a purée.
//              Heat 2 tablespoons of oil in a wok over a medium–high heat and deep-fry the peppercorns for 1 to 2 minutes, until fragrant.
//              Drain the oil, grind the peppercorns in a pestle and mortar, then transfer to a bowl.
//              Peel the garlic, then peel and dice the onion. Drain the softened chillies, then dice along with the fresh chillies.
//                 Using the pestle and mortar again, grind the garlic, shallot, onion and chillies until combined.
//                 Heat 2 tablespoons of the oil in the wok until just smoking. Add the ground shallot mixture and stir-fry over a low heat for 2 to 3 minutes, until fragrant.
//                 Drain and stir in the soaked black beans, the ground bean paste and remaining oil, one spoonful at a time, and stir-fry until everything is combined.
//                 Add the oyster sauce, sugar, ½ tablespoon of salt and the puréed pepper, and stir-fry for another 5 minutes.
//                 Lastly, stir in the ground peppercorns. You wont need all of this sauce – store what you don’t use in a sterilised jar.
//                 To prepare the pork, peel and very finely chop the garlic, then peel and finely grate the ginger. Drain the shiitake mushrooms, remove the stalks and roughly chop. Rinse and finely chop the preserved veg.
//                 Heat the oil in the wok and stir fry the pork over a high heat for 4 minutes, or until about 80 per cent cooked.
//                 Reduce the heat to medium and add the garlic, ginger, mushroom, preserved veg, shaoxing wine, stock and 2 to 3 tablespoons of your ma po sauce. Cook, stirring, for 20 seconds.
//                 Add ¼ teaspoon of salt and all the bean curd ingredients apart from the cornflour, and simmer for 1–1½ minutes, until the curd has absorbed all the flavours.
//                 Combine the cornflour with 2 tablespoons of water to make a paste, then stir it into the pan until the sauce is slightly thickened.
//                 Transfer to a serving dish, finely slice and sprinkle over the spring onion, then serve with steamed rice.
//             `,
//             "email":"khsuhi@gmail.com",
//             "ingredients":[
//                  "200 g higher welfare minced pork",
//                 "2 medium dried shiitake mushrooms",
//                 "2 cloves of garlic",
//                 "1cm piece of ginger",
//                 "20 g sichuan preserved vegetable (see tip)",
//                 "2 tablespoons vegetable oil",
//                 "1 tablespoon shaoxing wine",
//                 "180 ml chicken stock or water",
//                 "½ tablespoon oyster sauce",
//                 "½ a spring onion",
//                 "MARINADE",
//                 "1 tablespoon vegetable oil",
//                 "1 teaspoon potato flour or cornflour",
//                 "1 pinch of sugar",
//                 "MA PO BEAN CURD",
//                 "500 g bean curd",
//                 "1 teaspoon sugar",
//                 "1 teaspoon dark soy sauce",
//                 "1 tablepsoon cornflour",
//                 "MA PO SAUCE",
//                 "6 dried red chillies",
//                 "2 tablespooons black beans",
//                 "1 large red pepper",
//                 "6 tablespoons vegetable oil",
//                 "1 teaspoon dried red peppercorns or sich",
//                 "5 cloves of garlic",
//                 "½ a small onion",
//                 "6 fresh Bird eye chillies",
//                 "1 tablespoon dried shallot",
//                 "3 tablespoons ground bean paste",
//                 "2 tablespoons oyster sauce",
//                 "3 tablespoons sugar",
//             ],
//             "category":"chinese",
//             "image":"paneer.webp"

//             },
//             {
//                 "name":"Pork & black beans",
//                 "description":`
//              In a bowl, combine the rice wine, sesame oil, cornflour and 1 tablespoon of the soy sauce.
//              Slice the pork into discs, about 1cm thick, then toss through the marinade. Set aside.
//              Slice the white part of the spring onions on the diagonal, then slice the green part into ribbons. Place in a bowl of ice cold water.
//              Deseed the peppers, then cut each half into 8 wedges. Peel and very thinly slice the garlic, then slice the chilli on the diagonal. Peel and chop the ginger into matchsticks.
//              Heat a large wok or large frying pan until smoking hot, add the peppers and fry for 4 minutes, or until slightly charred.
//              Add 1 tablespoon of the groundnut oil to the wok and stir to coat the peppers. Leave for 1 minute, then transfer the peppers to a plate.
//              Lift the pork out of the marinade with a large slotted spoon and carefully add to the wok. Stir fry for 3 to 4 minutes, or until golden, moving it every 20 seconds or so. Transfer the pork to a plate and set aside.
//              Add the rest of the groundnut oil and the chilli oil to the wok. Quickly add the garlic, chilli, dried chilli (if using), ginger and white part of the spring onion, then stir fry for 30 seconds.
//              Stir in the sugar, 3 tablespoons of water and the remaining soy sauce. Bring the mixture to the boil, then return the pork and peppers to the wok. Add the black beans, then stir fry for 3 minutes.
//                  Meanwhile, toast the sesame seeds in a dry frying pan.
//                  Serve with jasmine rice and garnish with toasted sesame seeds and the green part of the spring onion.


//                 source:https://www.jamieoliver.com/recipes/pork-recipes/pork-black-beans/

//                 `,
//                 "email":"arorakhushi@gamil.com",
//                 "ingredients":[
//                     "2 tablespoons shaoxing rice wine",
//                     "1 tablespoon sesame oil",
//                     "2 teaspoons cornflour",
//                     "3 tablespoons low salt soy sauce",
//                     "400 g higher welfare pork fillet",
//                     "½ a bunch of spring onions",
//                     "2 green peppers",
//                     "5 cloves of garlic",
//                     "1 long fresh red chilli",
//                     "5cm piece of ginger",
//                     "2 tablespoons groundnut oil",
//                     "1 tablespoon Asian chilli oil",
//                     "1 teaspoon dried chilli flakes",
//                     "1 teaspoon soft brown sugar",
//                     "2 tablespoons Asian fermented black beans (see tip)",
//                     "1 tablespoon sesame seeds",
//                 ],
//                 "category":"chinese",
//                 "image":"bean.webp"
//             }
//         ]);
//         }
//         catch(error){
//                     console.log('err',+error);
//                 }
//     };
//  insertdummyRecipe();