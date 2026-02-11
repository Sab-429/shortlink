import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(req) {
  try {

    const body = await req.json()

    const client = await clientPromise

    const db = client.db("short")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shorturl: body.shorturl })

    if (doc) {
      return NextResponse.json({
        success: false,
        message: "URL already exists!"
      })
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl
    })

    return NextResponse.json({
      success: true,
      message: "URL Generated Successfully"
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server Error"
    }, { status: 500 })
  }
}
