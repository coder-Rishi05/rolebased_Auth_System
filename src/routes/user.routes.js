import express from "express";
import verifyToken from "../middleware/auth.middle.js";
import authorizeRole from "../middleware/roleMiddleware.js";

const router = express.Router();

// only accessible ot admin
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
  res.send("Welcome Admin");
});
// only accessible ot admin and manager
router.get("/manager", verifyToken, authorizeRole("admin","manager"),(req, res) => {
  res.send("Welcome  and manager");
});
//  accessible to all
router.get("/user", verifyToken, authorizeRole("admin","manager","user"),(req, res) => {
  res.send("Welcome user");
});

export default router;
