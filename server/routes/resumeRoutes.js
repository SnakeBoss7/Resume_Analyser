const express = require('express');
const router = express.Router();
const parser = require('../services/resumeParse');
const fs = require('fs').promises;
const upload = require('../middleware/multer');
const resumeMatching = require('../services/regex');
const chat_bot = require('../services/LessToken_ai');
const exp_chat_bot = require('../services/highToken_ai')

// to upload + analyze (multer + parser + ai analyze)
router.post('/analyze',upload.single('resume'),async (req,res)=>
    {
        console.log('Headers:', req.headers);
console.log('Body:', req.body);
console.log('File:', req.file);
console.log('Files:', req.files);
        if (!req.file) {
            console.log('No file uploaded');
            return res.status(400).json({ status: 'error', message: 'No file uploaded' });
        }  
        console.log('File received:', req.file.filename);
        console.log('reached analyzer')
        try
        {   // getting all the prompts ready 
            let Resume_text = await parser(req.file.filename);
            console.log(Resume_text);
            let sys_prompt = await fs.readFile('./Prompts/system/system_prompt.txt','utf-8');
            //calling chatbot for skills and role specification

            chat_bot(sys_prompt,Resume_text).then((response) =>
                {
                response= response.replaceAll('```json','').replaceAll('```','').trim();
                data = JSON.parse(response);
                res.status(200).json({status:'success',data,text:Resume_text});
            })
        }catch(err)
        {
            console.log(err);
            res.status(400).json({status:'failed'});

        }
    })

router.post('/query',(req,res)=>
    {
        console.log(req.body);
           try
        {   // getting all the prompts ready 
            let Resume_text = req.body.parsedText;
            let query =  'STRICTLY ANSWER IN LESS THAN 50 words NO MORE !!!!' + req.body.query;

            exp_chat_bot(Resume_text,query).then((response) =>
                {
                    console.log(response);
                res.status(200).json({status:'success',response});
            })
        }catch(err)
        {
            cosnole.log(err);
            res.status(400).json({status:'failed'});

        }
    })

module.exports = router;