"use client";

import { useState } from "react";

export const Form = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    if (e.target.files) {
      const file = e.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (result.success) {
          setImageUrls((prevUrls) => [...prevUrls, result.url]);
        } else {
          alert("Upload failed: " + result.message);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Upload failed due to an error.");
      } finally {
        setUploading(false);
      }
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    alert("URL copied to clipboard!");
  };

  return (
    <div>
      <label
        className="cursor-pointer bg-sky-100 dark:bg-sky-500/15 px-4 py-2 rounded-md shadow text-sm"
        title="Click here to select image"
      >
        <input
          className="hidden"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        {uploading ? "Uploading, please wait..." : "Click here to select image"}
      </label>
      <br />
      <div>
        {imageUrls.length > 0 && (
          <div>
            <h3>Uploaded Image URLs:</h3>
            <ul>
              {imageUrls.map((url, index) => (
                <li key={index}>
                  <a className="text-sm" href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                  <button
                    className="p-1 m-1 rounded-md shadow bg-sky-100 dark:bg-sky-500/15"
                    onClick={() => copyToClipboard(url)}
                  >
                    Copy URL
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
