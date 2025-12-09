"use client"
import { consumeDynamicAccess } from 'next/dist/server/app-render/dynamic-rendering'
import React, { useState } from 'react'

const shorten = () => {
    const [url,seturl] = useState("")
    const [shorturl,setshorturl] = useState("")
    const [generated,setgenerated] = useState(false)

    const generate = () =>{
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    console.log(result)
    alert(result.message)
  })
  .catch((error) => console.error(error));
    }
  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-5 bg-amber-50'>
        <input type="text"
        value={url}
        className='p-4 focus:outline-purple-400'
        placeholder = 'Enter your URL'
        onChange={e =>{seturl(e.target.value)}}/>
      </div>
      <div className='flex flex-col bg-amber-50 rounded-lg'>
        <input type="text"
        value={shorturl}
        className='p-4 focus:outline-purple-500'
        placeholder='Enter your preferred short url'
        onChange={e =>{setshorturl(e.target.value)}}/>
      </div>
      <div className='flex flex-col'>
        <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Generate</button>
      </div>
      {generated && <div className='bg-green-200 p-4 rounded-lg'>
        <p>Your shortened URL is:</p>
        <a className='text-blue-600 underline' href={generated} target="_blank" rel="noopener noreferrer">{generated}</a>
      </div>}
    </div>
  )
}

export default shorten
