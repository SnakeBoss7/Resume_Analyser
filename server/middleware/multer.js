const multer = require('multer');
const fs = require('fs');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(fs.existsSync('uploads') === false) {
            fs.mkdirSync('uploads');
        }
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const fileFilter = (req,file,cb)=>
    {
    const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
        'image/jpeg',
        'image/png',
        'image/gif'
    ];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Unsupported File Type'), false);
    }
    }
const upload = multer({ storage, fileFilter });
module.exports = upload;