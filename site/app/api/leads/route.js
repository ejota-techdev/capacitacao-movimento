import { NextResponse } from 'next/server';

export async function GET() {
  try {
    if (!process.env.N8N_LEADS_URL || !process.env.N8N_TOKEN) {
      console.error('N8N_LEADS_URL ou N8N_TOKEN não configuradas.');
      return NextResponse.json(
        { message: 'Erro de configuração no servidor.' },
        { status: 500 }
      );
    }

    const response = await fetch(process.env.N8N_LEADS_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.N8N_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: 'Não foi possível buscar a lista de leads.' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Erro na rota GET /api/leads:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor ao consultar leads.' },
      { status: 500 }
    );
  }
}
