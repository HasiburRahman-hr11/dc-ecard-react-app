import React, { useState } from "react";
import "./Footer.css";
import html2pdf from "html2pdf.js";

const Footer = () => {
  const [generating , setGenerating] = useState(false)
  const handleSaveAsPDF = () => {
    setGenerating(true);
    // Get the content to be converted to PDF
    const content = document.getElementById("content-to-pdf");

    // Options for the PDF generation
    const options = {
      margin: [0, 0], // Set margin to zero
      filename: "vansh-bhutan.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Generate PDF
    html2pdf()
      .from(content)
      .set(options)
      .outputPdf("datauristring")
      .then((pdfDataUri) => {
        // Open PDF in new tab
        setGenerating(false);
        const newTab = window.open();
        newTab.document.write(
          `<object width="100%" height="100%" data="${pdfDataUri}" type="application/pdf"></object>`
        );
      });
  };
  return (
    <footer className="bg-dark text-white footer">
      <div className="max-1920">
        <div className="container">
          <div className="flex justify-between align-center">
            <p>Copyright © 2023 Design Cell , All rights reserved</p>
            <button className="save-pdf" onClick={handleSaveAsPDF}>
              {generating ? 'Creating...' : 'Save As PDF'}
              
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
