const express = require('express');
const app = express();

//middleware
const multer = require('multer');
const upload = require('./middleware/multer');

//routes
const resumeRoutes = require('./routes/resumeRoutes')
const authRoutes = require('./routes/authRoute')
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// CORS 
const cors = require('cors');
const allowedOrigins = [
  'http://localhost:3000',
  'https://resume-analyser-dv83.vercel.app', // your Vercel frontend
];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// {Routes usage}

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
// auth {sign In}
app.use('/api/auth',authRoutes)
app.use((err,req,res,next)=>
        {
            
            if(err instanceof multer.MulterError || err.message === 'Unsupported File Type')
                {
                    console.log('middleware ran')
                    res.status(400).json({status:'error', message:'unsupported file'});
                }
})

// listing the PORT 
    app.listen(PORT, (err) => {
        if (err) {
        console.error('Error starting the server:', err);
        return
    }else{
        console.log('Server is running on port 5000');
    }
});
