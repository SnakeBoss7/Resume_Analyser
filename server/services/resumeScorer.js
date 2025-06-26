const { Together } = require('together-ai');
require('dotenv').config();

if (!process.env.TOGETHER_API_KEY) {
  console.error(" TOGETHER_API_KEY not set in .env");
  process.exit(1);
}

const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

async function runResumeEvaluation() {
  const chatStream = await together.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an expert resume evaluator trained in ATS (Applicant Tracking System) optimization and modern hiring standards. Your job is to analyze resumes strictly for ATS compatibility, keyword alignment, formatting clarity, and structural soundness. Evaluate from the perspective of real-world ATS systems like Workday, Greenhouse, or Lever. Identify any missing critical skills relevant to the job type (e.g., if resume targets front-end roles but React or Git is missing, say so in cons).

Break down improvement suggestions into clear categories:
- improvement_in_skills
- improvement_in_formatting
- other_improvements

Output only in JSON. Do not include any explanations, introductions, or commentary. No soft language or polite phrasing. Return only factual observations in a strict JSON structure.`
      },
      {
        role: "user",
        content: `Analyze the resume text below for:
- ATS effectiveness (score out of 100)
- Strengths (pros)
- Weaknesses (cons — including any missing technologies relevant to a front-end role)
- Actionable improvements broken into:
  - improvement_in_skills
  - improvement_in_formatting
  - other_improvements

🛑 Output strictly in JSON format only with this structure:

{
  "ats_score": "",
  "pros": ["Strength 1", "Strength 2"],
  "cons": ["Weakness 1", "Weakness 2"],
  "improvement_in_skills": ["Skill-related fix 1", "Skill-related fix 2"],
  "improvement_in_formatting": ["Formatting fix 1", "Formatting fix 2"],
  "other_improvements": ["Other fix 1", "Other fix 2"]
}

=== Resume Text Starts ===

Rahul Dharwal
rahuldharwal12005@gmail.com
7814761718
2005-08-19

Education
BCA, DAV COLLEGE2023 – 2026
Chandigarh, India
12th class, NON-MEDICAL, GSSS DHEERA2022 – 2023
Himanchal, India
10th class, Gyandeep Public school2020 – 2021
Chandigarh, India

Skills
Languages: C, C++, JavaScript, SQL
Database: SQL
Web Development: HTML, CSS, React

Projects
Weather App
• Real-time weather updates (temperature, wind, humidity, etc.)
• Embedded map
• Responsive UI built with React
• AI-based location-fact

Movie Search Engine
• Fetching various movie data and displaying it

Languages
• Hindi
• English

Interests
• Gaming
• Music
• Travelling

=== Resume Text Ends ===`
      }
    ],
    model: "meta-llama/Llama-Vision-Free",
    stream: true
  });

  let output = "";

  for await (const token of chatStream) {
    const text = token.choices[0]?.delta?.content || "";
    process.stdout.write(text); // live streaming output
    output += text;
  }

  console.log("\n\n=== Final Parsed JSON ===");

  try {
    const parsed = JSON.parse(output);
    console.log(JSON.stringify(parsed, null, 2)); // prettified JSON
    return parsed;
  } catch (e) {
    console.error("\n❌ Failed to parse output as JSON:", e.message);
  }
}

runResumeEvaluation();
