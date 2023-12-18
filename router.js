const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberControllers");
const productController = require("./controllers/productController");
const restaurantController = require("./controllers/restaurantControllers");
const orderController = require("./controllers/orderController");
const followController = require("./controllers/followController");
const communityController = require("./controllers/communityController");
const uploader_member = require("./utils/upload-multer")("members");
const uploader_community = require("./utils/upload-multer")("community");

/********************************
 *      REST API                *
 *********************************/

//memberga dahldor routerlar

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get(
  "/member/:id",
  memberController.retrieveAuthMember,
  memberController.getChosenMember
);

//Product related routers
router.post(
  "/products",
  memberController.retrieveAuthMember,
  productController.getAllProducts
);
router.get(
  "/products/:id",
  memberController.retrieveAuthMember,
  productController.getChosenProduct
);

//Restaurant related routers
router.get(
  "/restaurants",
  memberController.retrieveAuthMember,
  restaurantController.getRestaurants
);
router.get(
  "/restaurants/:id",
  memberController.retrieveAuthMember,
  restaurantController.getChosenRestaurant
);

//order related routers
router.post(
  "/orders/create",
  memberController.retrieveAuthMember,
  orderController.createOrder
);
router.get(
  "/orders",
  memberController.retrieveAuthMember,
  orderController.getMyOrders
);
router.post(
  "/orders/edit",
  memberController.retrieveAuthMember,
  orderController.editChosenOrder
);

//community related routers
router.post(
  "/community/image",
  uploader_community.single("community_image"),
  communityController.imageInsertion
);
router.post(
  "/community/create",
  memberController.retrieveAuthMember,
  communityController.createArticle
);
router.get(
  "/community/articles",
  memberController.retrieveAuthMember,
  communityController.getMemberArticles
);
router.get(
  "/community/target",
  memberController.retrieveAuthMember,
  communityController.getArticles
);
router.get(
  "/community/single-article/:art_id",
  memberController.retrieveAuthMember,
  communityController.getChosenArticle
);

//following related routers
router.post(
  "/follow/subscribe",
  memberController.retrieveAuthMember,
  followController.subscribe
);
router.post(
  "/follow/unsubscribe",
  memberController.retrieveAuthMember,
  followController.unsubscribe
);
module.exports = router;
