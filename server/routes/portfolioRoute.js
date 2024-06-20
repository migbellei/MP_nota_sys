const express = require("express");
const router = express.Router();
const {portfolioPage1, portfolioPage2, portfolioPage3, portfolioPage4, portfolioPage5, portfolioPage6, portfolioPage7, portfolioPage8, portfolioPage9, portfolioPage10} = require('../controllers/indexController');

router.get('/1', (req,res) => {
    portfolioPage1(req,res);
})

router.get('/2', (req,res) => {
    portfolioPage2(req,res);
})

router.get('/3', (req,res) => {
    portfolioPage3(req,res);
})

router.get('/4', (req,res) => {
    portfolioPage4(req,res);
})

router.get('/5', (req,res) => {
    portfolioPage5(req,res);
})

router.get('/6', (req,res) => {
    portfolioPage6(req,res);
})

router.get('/7', (req,res) => {
    portfolioPage7(req,res);
})

router.get('/8', (req,res) => {
    portfolioPage8(req,res);
})

router.get('/9', (req,res) => {
    portfolioPage9(req,res);
})

router.get('/10', (req,res) => {
    portfolioPage10(req,res);
})

module.exports = router;