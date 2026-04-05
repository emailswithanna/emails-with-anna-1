import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "./template";
import { config } from "@/config";
import { sanityFetch } from "@/sanity/lib/live";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const contactEmail = (await sanityFetch({ query: '*[_type == "siteSettings"][0].contactEmail', params: {} }))
      ?.data as string | null; 
  
    await resend.emails.send({
      from: `contact@${config.domain}`,
      to: contactEmail || config.contactEmail,
      subject: `New Message from ${name}`,
      react: ContactEmail({
        name,
        email,
        message
      }),
      replyTo: email
    });

    return NextResponse.json({ message: "Contact form submitted successfully." }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}