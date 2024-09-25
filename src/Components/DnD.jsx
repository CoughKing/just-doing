import React, { useState, useRef } from "react";

function DnD() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef();
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
  };
  const handleUpload = () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files[]", file));
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      {files.length > 0 ? (
        <div className="max-w-md p-4 m-auto bg-green-600 mt-5">
          <ol>
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ol>
          <div className=" flex justify-between">
            <button
              className="m-2 p-2 bg-blue-700 rounded-xl"
              onClick={handleUpload}
            >
              Upload
            </button>
            <button
              className="m-2 p-2 bg-red-600 rounded-xl"
              onClick={() => setFiles([])}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-md m-auto p-4 bg-green-800 mt-5">
          <div className=" flex flex-col justify-center items-center gap-6 mx-1 sm:mx-6 py-2">
            <h3 className="text-4xl font-serif text-center font-bold">
              {" "}
              Upload Multiple Images of an Object for 3d Scene Reconstruction
            </h3>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(e.target.files)}
              accept=".png, .jpg, .jpeg"
              hidden
              ref={inputRef}
            />
            <button
              onClick={() => inputRef.current.click()}
              className="text-2xl font-bold rounded-3xl p-2 bg-red-800"
            >
              Upload Images
            </button>
            <div
              className="flex flex-col border-dashed border border-black"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              OR, Drop Files Here
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DnD;
