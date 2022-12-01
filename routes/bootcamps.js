const router = require("express").Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  bootcampPhotoUpload,
} = require("../controllers/bootcamps");

const Bootcamp = require("../models/Bootcamp");
const advancedResults = require("../middleware/advancedResult");

// Include other resource routers
const courseRouter = require("./courses");
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers
router.use("/:bootcampId/courses", courseRouter);

router
  .route("/:id/photo")
  .put(protect, authorize(["publisher", "admin"]), bootcampPhotoUpload);

router
  .route("/")
  .get(advancedResults(Bootcamp, "courses"), getBootcamps)
  .post(protect, authorize(["publisher", "admin"]), createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, authorize(["publisher", "admin"]), updateBootcamp)
  .delete(protect, authorize(["publisher", "admin"]), deleteBootcamp);

module.exports = router;
