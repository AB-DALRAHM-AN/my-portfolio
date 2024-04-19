import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import MessageUsEmail from "@/emails/HelloEmail";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: `${process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL}`,
    to: `${process.env.NEXT_PUBLIC_RESEND_TO_EMAIL}`,
    subject: `Message from your Portfolio.`,
    react: MessageUsEmail({ name, email, message }),
  });

  return NextResponse.json({ success: true });
}
