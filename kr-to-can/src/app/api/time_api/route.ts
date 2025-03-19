import { NextResponse } from "next/server";

export async function GET() {
    // const url = new URL(req.url);
    // const city = url.searchParams.get("city");
    // const detailed = url.searchParams.get("detailed");

    // If the city is not provided, return an error
    // If external API is not available, return an error
    return NextResponse.json({ message: "Hello from Next.js API Route!" });
}