const express = require('express');
const router = express.Router();
const parser = require('../services/resumeParse');
const fs = require('fs').promises;
const upload = require('../middleware/multer');
const resumeMatching = require('../services/regex');
const chat_bot = require('../services/LessToken_ai');
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
                res.status(200).json({status:'success',data});
            })
        }catch(err)
        {
            cosnole.log(err);
            res.status(400).json({status:'failed'});

        }
    })

module.exports = router;