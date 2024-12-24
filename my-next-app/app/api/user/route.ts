import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // You can add zod validation here for input validation

    const user = await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    console.log(user.id);

    // Send status 200 with a success message
    return NextResponse.json(
      { message: "Signed up successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during signup:", error);

    // Handle errors and send a 500 status if something goes wrong
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const user = await client.user.findFirst({});

    if (user) {
      return NextResponse.json(
        { name: user.username, email: user.username },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching user:", error);

    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
