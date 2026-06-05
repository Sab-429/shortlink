import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {url,shorturl} = await req.json()

    if(!url || !shorturl){
      return NextResponse.json(
        {success: false,
          message: "URL and shorturl are required"
        },{status: 400}
      )
    }

    const existing = await pool.query(
      "SELECT id FROM urls WHERE shorturl = $1",
      [shorturl]
    );

    if(existing.rows.length > 0) {
      return NextResponse.json({
        success: false,
        message: "Short URL already exists"
      })
    }
    await pool.query(
      "INSERT INTO urls (url, shorturl) VALUES ($1, $2)",
      [url, shorturl]
    );

    return NextResponse.json({
      success: true,
      message: "Short URL generated successfully"
    });
  }catch(error){
    console.log(error);
    return NextResponse.json(
      { 
        success: false,
        message: "Server Error"
      },{status: 500}
    )
  }
}