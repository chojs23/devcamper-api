// @desc   Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc   Get single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Sho all bootcamps" });
};

// @desc   Create all bootcamps
// @route  POST /api/v1/bootcamps
// @access Public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc   Update all bootcamps
// @route  PUT /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};

// @desc   Delete all bootcamps
// @route  DELETE /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
};
