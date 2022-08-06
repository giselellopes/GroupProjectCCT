const { Router } = require('express');
const router = Router();
const { createProject, getAllProjects } = require('../public/controllers/project-controller')

const upload = require('../public/utils/UploadImage');

router.post("/projects", upload.single('image'), createProject);
router.get("/projects", getAllProjects);


module.exports = router