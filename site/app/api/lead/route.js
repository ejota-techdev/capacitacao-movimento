import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    if (!process.env.N8N_LEAD_URL) {
      console.error('N8N_LEAD_URL não configurada.');
      return NextResponse.json(
        { message: 'Erro de configuração no servidor.' },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Validação básica dos campos
    if (!body.nome || !body.whatsapp || !body.email || !body.interesse) {
      return NextResponse.json(
        { message: 'Preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    // Repassa os dados para a URL do Webhook 1 do n8n
    const response = await fetch(process.env.N8N_LEAD_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Erro na comunicação com a automação.' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Lead registrado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro na rota POST /api/lead:', error);
    return NextResponse.json(
      { message: 'Erro interno no servidor.' },
      { status: 500 }
    );
  }
}