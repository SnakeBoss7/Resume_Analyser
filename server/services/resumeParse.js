const fs = require('fs');
const mammoth = require('mammoth');
const pdf = require('pdf-parse');
const Tesseract = require('tesseract.js');

const parser = async (filename) => {
    const file_path = `/home/snake/Workspace/WEB/Projects/Resume_Analyser/server/uploads/${filename}`;
    const { fileTypeFromBuffer } = await import('file-type');
    const buffer = fs.readFileSync(file_path);
    const file_type = await fileTypeFromBuffer(buffer);
    console.log('File type:', file_type.ext);

    if (!file_type) {
        throw new Error('Could not determine file type');
    }
    switch (file_type.ext) {
        case 'docx':
            const docxResult = await mammoth.extractRawText({ buffer });
            return docxResult.value;
        case 'pdf':
            const pdfResult = await pdf(buffer);
            return pdfResult.text;
        case 'jpg':
        case 'jpeg':
        case 'png':
            const imageResult = await Tesseract.recognize(file_path, 'eng');
            console.log(imageResult.data.text);
            return imageResult.data.text;
        default:
            throw new Error('Unsupported file type');
    }
};
module.exports = parser;