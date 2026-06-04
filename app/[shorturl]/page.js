import pool from "@/lib/db";
import { notFound, redirect } from "next/navigation";

export default async function ShortURLPage({ params}) {
  const { shorturl} = await params;

  const result = await pool.query(
    "SELECT url FROM urls WHERE shorturl = $1",
    [shorturl]
  );
  if (result.rowCount.length > 0) {
    return notFound()
  }
  redirect(result.rows[0].url)
}