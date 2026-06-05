import pool from "@/lib/db";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    await pool.query(
        "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
        [name, email, message]
    )

    return Response.json({
      success: true,
      message: "Message saved successfully",
    },{status: 200});
  } catch (error) {
    console.log(error)
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

  const result = await pool.query(
    "SELECT * FROM contacts ORDER BY created_at DESC"
  )
  return Response.json(result.rows);
}