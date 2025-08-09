import { NextRequest, NextResponse } from "next/server";
import * as Yup from "yup";
import { validateContactForm } from "@/lib/validation";
import { sendContactEmails } from "@/lib/mail-service";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request data
    const validatedData = await validateContactForm(body);

    // Send emails
    const result = await sendContactEmails(validatedData);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle Yup validation errors
    if (error instanceof Yup.ValidationError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle SMTP configuration errors
    if (
      error instanceof Error &&
      error.message.includes("Missing required environment variables")
    ) {
      console.error("SMTP Configuration Error:", error.message);
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
