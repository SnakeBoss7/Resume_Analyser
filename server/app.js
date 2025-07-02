const express = require('express');
const app = express();
const cors = require('cors');
const upload = require('./middleware/multer');
const multer = require('multer');
const resumeRoutes = require('./routes/resumeRoutes')
const dotenv = require('dotenv');
const chat_bot = require('./routes/chatBot')
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//for upload only in future use 
app.post('/',upload.single('resume'),(req,res)=>
    {
        
        if(!req.file) {
            console.log('not so perfetct')
            return res.status(400).json({ status: 'error', message: 'No file uploaded' });
        }
        console.log('perfetct')
        res.status(200).json({ status: 'success', message: 'File uploaded successfully', file: req.file });
    })

// single resume related query 
app.use('/api/resume',resumeRoutes);
app.use((err,req,res,next)=>
        {
            if(err instanceof multer.MulterError || err.message === 'Unsupported File Type')
                {
                    console.log('middleware ran')
                    res.status(400).json({status:'error', message:'unsupported file'});
                }
})
    app.listen(process.env.PORT, (err) => {
        if (err) {
        console.error('Error starting the server:', err);
        return
    }else{
        console.log('Server is running on port 5000');
    }
});
