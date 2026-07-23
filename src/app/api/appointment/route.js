import { NextResponse } from "next/server";
import { appointmentSchema, flattenZodError } from "@/lib/validation";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);

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

    // Email, admin notification, patient acknowledgement, CAPTCHA, and rate limiting
    // can be connected here using the environment variables in .env.example.
    return NextResponse.json({
      ok: true,
      message:
        "Appointment request saved in demo mode. Connect Resend, Nodemailer, or your appointment system before production launch."
    });
  } catch (_error) {
    return NextResponse.json(
      { message: "Unable to process this request right now. Please try again or call the clinic." },
      { status: 500 }
    );
  }
}
