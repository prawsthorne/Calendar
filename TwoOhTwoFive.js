// filepath: /c:/Users/peter/Documents/GitHub/Calendar/convert.js
const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');

async function createPdf() {
  const htmlPath = 'TwoOhTwoFive.html';
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([792, 1224]); // 11x17 inches in points (72 points per inch)

  const { width, height } = page.getSize();
  const fontSize = 12;

  page.drawText(htmlContent, {
    x: 50,
    y: height - 50 - fontSize,
    size: fontSize,
    color: rgb(0, 0, 0),
    maxWidth: width - 100,
    lineHeight: 14,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('TwoOhTwoFive.pdf', pdfBytes);
  console.log('PDF generated successfully!');
}

createPdf();