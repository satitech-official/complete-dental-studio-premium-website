import { NextResponse } from "next/server";
import { contactSchema, flattenZodError } from "@/lib/validation";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Please check the highlighted fields and try again.",
          errors: flattenZodError(parsed.error)
        },
        { status: 400 }
      );
    }

    if (parsed.data.company) {
      return NextResponse.json({ message: "Spam check failed." }, { status: 400 });
    }

    // Connect email delivery, moderation, CAPTCHA, and rate limiting here.
    return NextResponse.json({
      ok: true,
      message:
        "Your inquiry has been received in demo mode. The production email provider can be connected from .env.example."
    });
  } catch (_error) {
    return NextResponse.json(
      { message: "Unable to process this request right now. Please try again or call the clinic." },
      { status: 500 }
    );
  }
}
