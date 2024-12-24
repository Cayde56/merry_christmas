import Router from "express";

const router = Router()

router.get("/", (req, res) => res.render("index"));
router.get("/year", (req, res) => res.render('year'))
router.get("/2024", (req, res) => res.render("2024"))

export default router;
