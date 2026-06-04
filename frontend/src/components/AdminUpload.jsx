import { useState } from "react";

function AdminUpload() {
    const [pdf, setPdf] = useState(null);

    async function handleUpload() {
        if (!pdf) {
            alert("Please select a PDF file");
            return;
        }

        const formData = new FormData();
        formData.append("pdf", pdf);

        try {
            const response = await fetch(
                "http://localhost:5000/api/upload-pdf",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            console.log(data);
            alert("PDF Uploaded Successfully!");
        } catch (error) {
            console.log(error);
            alert("Upload Failed");
        }
    }

    return (
        <div
            style={{
                backgroundColor: "black",
                width: "450px",
                margin: "30px auto",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
        >
            <h2>Admin PDF Upload</h2>

            <input
                type="file"
                accept=".pdf"
                onChange={(e) => setPdf(e.target.files[0])}
            />

            <br />
            <br />


            <button onClick={handleUpload}>
                Upload PDF
            </button>
        </div>
    );
}

export default AdminUpload;