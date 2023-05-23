const express = require("express");
const app=express()
const router=express.Router();
const recipecontroller=require('../controllers/recipecontrollers');
router.get('/',recipecontroller.homepage)
router.get('/categories',recipecontroller.exploreCategories)
router.get('/recipe/:id',recipecontroller.explorerecipe)
router.get('/categories/:id',recipecontroller.exploreCategoriesById);
router.get('/submitrecipe',recipecontroller.submitrecipe);
router.post('/Submit',recipecontroller.Submit);
router.post('/Search',recipecontroller.exploresearch);
// app.use(router);

module.exports=router;