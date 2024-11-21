import React, { useState } from "react";

const App = () => {
  const [pdfUrl, setPdfUrl] = useState(
    "https://drive.google.com/uc?export=download&id=1LOieuHxs1EU_5ZFO6un9u10PWJrDQsLL"
  );

  const handleInputChange = (e) => {
    const inputLink = e.target.value;
    const match = inputLink.match(/\/file\/d\/(.+?)\//);
    if (match) {
      const fileId = match[1];
      const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
      setPdfUrl(directLink);
    } else {
      setPdfUrl("");
      alert("Invalid Google Drive link!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>PDF Viewer</h1>
      <input
        type="text"
        placeholder="Paste Google Drive link here"
        style={{ width: "60%", padding: "10px", margin: "10px" }}
        onChange={handleInputChange}
      />
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          style={{ width: "80%", height: "600px", border: "1px solid #ccc" }}
          title="PDF Viewer"
        />
      )}
    </div>
  );
};

export default App;
