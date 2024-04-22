import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import MessageUsEmail from "@/emails/HelloEmail";
import { EmailForMe } from "@/emails/EmailForMe";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "A.A.A  <abdo@abdalrahman.tech>",
      to: [`${process.env.NEXT_PUBLIC_RESEND_TO_EMAIL}`],
      subject: `Message from your Portfolio.`,
      react: EmailForMe({ name, email, message }),
    });

    await resend.emails.send({
      from: "A.A.A  <abdo@abdalrahman.tech>",
      to: [`${email}`],
      subject: `Abdalrahman From HireQ`,
      react: MessageUsEmail({ name }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message." });
  }
}
