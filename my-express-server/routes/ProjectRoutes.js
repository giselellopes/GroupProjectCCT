const { Router } = require('express');
const router = Router();
const { createProject } = require('../public/controllers/project-controller')

const upload = require('../public/utils/UploadImage');

router.post("/projects", upload.single('image'), createProject);

module.exports = router