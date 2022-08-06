const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/uploads');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + '_' + file.originalname)
        }
    }),
    fileFilter: (req, file, cb) => {
        const extensionsImg = ['image/png', 'image/jpeg', 'image/jpg'].find(
            accepted => accepted == file.mimetype
        );

        if (extensionsImg) return cb(null, true);

        return cb(null, false);
    }
}));