import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("short");
    const collection = db.collection("contacts");

    await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return Response.json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    return Response.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const secret = request.headers.get("x-admin-secret");

  if (secret !== process.env.ADMIN_SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const client = await clientPromise;
  const db = client.db("bitlinks");

  const messages = await db
    .collection("contacts")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json(messages);
}