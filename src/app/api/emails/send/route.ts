import { NextResponse } from 'next/server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email, name, message } = await request.json();

  if (!email || !name || !message) {
    return NextResponse.json('Dados inválidos!', { status: 400 });
  }

  try {
    const send = await resend.emails.send({
      from: email,
      to: 'muttiyuri@gmail.com',
      subject: 'Contato pelo site',
      text: message,
    });

    if (send.error) {
      return NextResponse.json(send.error.message, {
        status: 403,
      });
    }

    return NextResponse.json('Email enviado com sucesso!', { status: 200 });
  } catch (error) {
    return NextResponse.json('Erro ao enviar email!', { status: 500 });
  }
}
