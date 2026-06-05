"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    if(!url || !shorturl) return alert("Both fields are required")

    const res = await fetch("api/generate", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url, shorturl})
    })
    const data = await res.json();
    alert(data.message);

    if(data.success){
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
      setUrl("");
      setShortUrl("")
    }
  }

  return(
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URL</h1>

      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter your long URL"
        className="p-4 rounded-lg focus:outline-purple-400 bg-white"
      />

      <input
        type="text"
        value={shorturl}
        onChange={(e) => setShorturl(e.target.value)}
        placeholder="Enter preferred short code"
        className="p-4 rounded-lg focus:outline-purple-500 bg-white"
      />

      <button
        onClick={generate}
        className="bg-purple-500 rounded-lg p-3 font-bold text-white hover:bg-purple-600"
      >
        Generate
      </button>

      {generated && (
        <div className="bg-green-200 p-4 rounded-lg">
          <p>Your shortened URL:</p>
          <a href={generated} className="text-blue-600 underline" target="_blank">
            {generated}
          </a>
        </div>
      )}
    </div>
  );

}