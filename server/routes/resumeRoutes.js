const express = require('express');
const router = express.Router();
const parser = require('../services/resumeParse');
const fs = require('fs').promises;
const upload = require('../middleware/multer');
const resumeMatching = require('../services/regex');
const chat_bot = require('../services/LessToken_ai');

// to upload + analyze (multer + parser + ai analyze)
router.post('/analyze',upload.single('resume'),async (req,res)=>
    {
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
            cosnole.log(err);
            res.status(400).json({status:'failed'});

        }
    })

router.post('/query',(req,res)=>
    {
        console.log(req.body);
           try
        {   // getting all the prompts ready 
            let Resume_text = req.body.parsedText;
            let query =  'ANSWER IN LESS THAN 50 words' + req.body.query;

            chat_bot(Resume_text,query).then((response) =>
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