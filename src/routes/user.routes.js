import express from "express";
import verifyToken from "../middleware/auth.middle.js";

const router = express.Router();

// only accessible ot admin
router.get("/admin", verifyToken, (req, res) => {
  res.send("Welcome Admin");
});
// only accessible ot admin and manager
router.get("/manager", verifyToken, (req, res) => {
  res.send("Welcome  and manager");
});
//  accessible to all
router.get("/user", verifyToken, (req, res) => {
  res.send("Welcome user");
});

export default router;
