const express = require('express');
const router = express.Router();
const parser = require('../services/resumeParse');
const fs = require('fs');
const upload = require('../middleware/multer');
const resumeMatching = require('../services/regex');
router.post('/analyze',upload.single('resume'),async (req,res)=>
    {
        console.log("reached analyse");
        // console.log(req.body);
        // console.log(req.file);
          if(!req.file) {
            console.log('not so perfetct')
            return res.status(400).json({ status: 'error', message: 'No file uploaded' });
        }
        let data = await parser(req.file.filename);
        console.log(data);
        let sec_data= await resumeMatching(data);
        console.log(sec_data);
         sec_data.forEach((section) => {
            if(section.section_content === '') 
                {
                    
                };
         })
         const actual_data ={
"Name": "Rahul Dharwal",
"ATS_Score": 50,
"Role_Match": "30%",
"Keywords_Found": 8,
"Overall_Grade": "B-",
"Best_Role_Fit": {
"Title": "Junior Front-end Developer",
"Match": "40%",
"Experience_Level": "Entry-level (0-2 years)",
"Salary_Range": " $70K - $90K"
},
"ATS_Compatibility": {
"ATS_Score": 55,
"Format_Compatible": false,
"Keywords_Present": true,
"Clear_Structure": false,
"Missing_Skills": false
},
"Skills_Analysis": {
"Top_Skills_Found": ["JavaScript", "React", "HTML", "CSS"],
"Missing_Skills": ["Angular", "TypeScript", "Responsive Web Design", "UI/UX Design"]
},
"Section_by_Section_Breakdown": {
"Contact": "100%",
"Summary": "0%",
"Experience": "0%",
"Skills": "80%",
"Education": "40%",
"Projects": "80%"
},
"Strengths": [
"Strong foundation in programming languages",
"Familiarity with React and front-end development",
"Ability to build responsive UI"
],
"Improvements": [
"Add a professional summary or objective statement",
"Consider including relevant work experience or internships",
"Emphasize transferable skills and achievements"
],
"Suggestions": [
"Highlight relevant projects and achievements",
"Emphasize front-end development skills",
"Consider including online courses or certifications"
]
};
        res.status(200).json({status:'success', message:'File uploaded successfully', data: actual_data, file: req.file});
// let system_promt = fs.readFileSync(path.join(__dirname, '../Prompts/Single_system.txt'), 'utf-8');

        // console.log(system_promt);
   
        // res.status(200).json({data});
    })

module.exports = router;