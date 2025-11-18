import express from "express";
const router = express.Router();

// TEMP route
router.get("/", (req, res) => {
  res.send("Order routes working");
});

export default router;
