import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = schema.safeParse(json);
  if (!parsed.success)
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    );

  // TODO: 이메일 발송(Resend / Nodemailer) 또는 DB 저장(Supabase)
  // await sendMail(parsed.data)

  return NextResponse.json({ ok: true });
}
