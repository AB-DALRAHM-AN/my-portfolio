import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import MessageUsEmail from "@/emails/HelloEmail"; // Ensure this path is correct
import EmailForMe from "@/emails/EmailForMe"; // Ensure this path is correct

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const emailForMeContent = EmailForMe({ name, email, message });
    const messageUsEmailContent = MessageUsEmail({ name });

    const data1 = await resend.emails.send({
      from: "A.A.A  <abdo@abdalrahman.tech>",
      to: [`${process.env.NEXT_PUBLIC_RESEND_TO_EMAIL}`],
      subject: `Message from your Portfolio.`,
      react: emailForMeContent,
    });

    const data2 = await resend.emails.send({
      from: "A.A.A  <abdo@abdalrahman.tech>",
      to: [`${email}`],
      subject: `Abdelrahman From HireQ`,
      react: messageUsEmailContent,
    });

    return NextResponse.json({ data1, data2 });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message." });
  }
}
