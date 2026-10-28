'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  // Estado para o menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para o formulário de leads
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    interesse: '',
  });

  // Estado de envio do formulário (loading, sucesso, erro)
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: '',
  });

  // Efeito para fechar o menu mobile ao pressionar a tecla 'Escape'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Manipulador de mudança dos inputs do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envio do formulário para a API interna /api/lead
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          loading: false,
          success: true,
          message: 'Avaliação agendada com sucesso! Entraremos em contato.',
        });
        setFormData({ nome: '', whatsapp: '', email: '', interesse: '' });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || 'Erro ao enviar o formulário.',
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: 'Ocorreu um erro de rede. Tente novamente mais tarde.',
      });
    }
  };

  return (
    <>
      {/* CABEÇALHO */}
      <header className="header">
        <div className="container">
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-controls="menu-principal"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="nav-toggle-bar" aria-hidden="true"></span>
            <span className="nav-toggle-bar" aria-hidden="true"></span>
            <span className="nav-toggle-bar" aria-hidden="true"></span>
          </button>

          <nav className="nav" aria-label="Navegação principal">
            <ul
              className={`nav-list ${isMenuOpen ? 'is-open' : ''}`}
              id="menu-principal"
              onClick={(e) => {
                if (e.target.closest('a')) setIsMenuOpen(false);
              }}
            >
              <li><a href="#inicio" className="nav-link active">Início</a></li>
              <li><a href="#servicos" className="nav-link">Serviços</a></li>
              <li><a href="#equipe" className="nav-link">Equipe</a></li>
              <li><a href="#precos" className="nav-link">Convênios e preços</a></li>
              <li><a href="#contato" className="nav-link">Contato</a></li>
              <li className="nav-cta-item">
                <a href="#agendar" className="btn btn-dark btn-nav-cta">Agendar avaliação</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main id="inicio">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <p className="eyebrow">Fisioterapia e pilates em Botafogo</p>
              <h1 className="hero-title">Cuidado de verdade para você se movimentar sem dor</h1>
              <p className="hero-description">
                Avaliação completa antes de qualquer tratamento e turmas de pilates com no máximo 3 alunos.
              </p>
              <div className="hero-buttons">
                <a href="#agendar" className="btn btn-dark">Agendar avaliação</a>
                <a href="#agendar" className="btn btn-outline">Aula experimental grátis</a>
              </div>
            </div>
            <div className="hero-media">
              <div className="placeholder hero-placeholder" role="img" aria-label="Foto do espaço da clínica">
                [ imagem ] Foto do espaço da clínica
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="section section-white" id="servicos">
          <div className="container">
            <h2 className="section-title">Nossos serviços</h2>
            <p className="section-sub">Tratamentos individuais e acompanhamento próximo.</p>
            <div className="cards-3">
              <article className="card">
                <div className="placeholder card-placeholder" role="img" aria-label="Foto do serviço de fisioterapia">[ imagem ] Foto do serviço</div>
                <h3 className="card-title">Fisioterapia ortopédica</h3>
                <p className="card-text">Recuperação de lesões, dores e pós-operatório de joelho e ombro.</p>
                <a className="card-link" href="/servicos">Saiba mais <span aria-hidden="true">→</span></a>
              </article>
              <article className="card">
                <div className="placeholder card-placeholder" role="img" aria-label="Foto do serviço de pilates">[ imagem ] Foto do serviço</div>
                <h3 className="card-title">Pilates</h3>
                <p className="card-text">Fortalecimento e postura em turmas de até 3 alunos ou aulas individuais.</p>
                <a className="card-link" href="/servicos">Saiba mais <span aria-hidden="true">→</span></a>
              </article>
              <article className="card">
                <div className="placeholder card-placeholder" role="img" aria-label="Foto do serviço de RPG">[ imagem ] Foto do serviço</div>
                <h3 className="card-title">RPG</h3>
                <p className="card-text">Reeducação postural global para dores crônicas e postura.</p>
                <a className="card-link" href="/servicos">Saiba mais <span aria-hidden="true">→</span></a>
              </article>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">Por que a Movimento</h2>
            <div className="cards-3 cards-diff">
              <article className="card card-flat">
                <h3 className="card-title">Turmas de até 3 alunos</h3>
                <p className="card-text">Atenção individual em cada aula de pilates.</p>
              </article>
              <article className="card card-flat">
                <h3 className="card-title">Avaliação completa</h3>
                <p className="card-text">Todo tratamento começa entendendo o seu caso.</p>
              </article>
              <article className="card card-flat">
                <h3 className="card-title">Equipe especializada</h3>
                <p className="card-text">3 fisioterapeutas e 2 instrutoras de pilates.</p>
              </article>
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="section section-white" id="equipe">
          <div className="container">
            <h2 className="section-title">Nossa equipe</h2>
            <div className="cards-3">
              <article className="card">
                <div className="placeholder card-placeholder" role="img" aria-label="Foto de Dra. Carla Menezes">[ imagem ] Foto</div>
                <h3 className="card-title">Dra. Carla Menezes</h3>
                <p className="card-text">Fisioterapeuta e fundadora</p>
              </article>
              <article className="card">
                <div className="placeholder card-placeholder" role="img" aria-label="Foto do profissional">[ imagem ] Foto</div>
                <h3 className="card-title">Nome do profissional</h3>
                <p className="card-text">Fisioterapeuta</p>
              </article>
              <article className="card">
                <div className="placeholder card-placeholder" role="img" aria-label="Foto da profissional">[ imagem ] Foto</div>
                <h3 className="card-title">Nome do profissional</h3>
                <p className="card-text">Instrutora de pilates</p>
              </article>
            </div>
          </div>
        </section>

        {/* CONVÊNIOS E PREÇOS */}
        <section className="section section-gray" id="precos">
          <div className="container precos-container">
            <div className="precos-text">
              <h2 className="section-title">Convênios e preços</h2>
              <p className="precos-desc">Aceitamos Amil e SulAmérica para fisioterapia, com pedido médico. Para outros planos, emitimos recibo para reembolso.</p>
            </div>
            <a href="/servicos#precos" className="btn btn-outline">Ver preços</a>
          </div>
        </section>

        {/* CONTATO E FORMULÁRIO DE LEAD */}
        <section className="section section-white" id="contato">
          <div className="container">
            <h2 className="section-title">Agende sua avaliação</h2>
            <p className="section-sub">Preencha e nossa equipe responde pelo WhatsApp.</p>
            <div className="contato-grid">
              
              {/* FORMULÁRIO */}
              <div className="form-card" id="agendar">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="whatsapp">WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      placeholder="(21) 90000-0000"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="voce@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="interesse">Interesse</label>
                    <select
                      id="interesse"
                      name="interesse"
                      value={formData.interesse}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Selecione: fisioterapia, pilates ou RPG</option>
                      <option value="fisioterapia">Fisioterapia</option>
                      <option value="pilates">Pilates</option>
                      <option value="rpg">RPG</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-dark btn-full" disabled={status.loading}>
                    {status.loading ? 'Enviando...' : 'Enviar'}
                  </button>

                  {status.message && (
                    <p className={`form-feedback ${status.success ? 'success' : 'error'}`}>
                      {status.message}
                    </p>
                  )}

                  <p className="form-note">
                    Ao enviar, você concorda em ser contatado pela clínica. Não pedimos informações de saúde neste formulário.
                  </p>
                </form>
              </div>

              {/* INFORMAÇÕES DE CONTATO */}
              <div className="contato-info">
                <div className="info-block">
                  <h3 className="info-title">Endereço</h3>
                  <p className="info-text">Rua Voluntários da Pátria, Botafogo – Rio de Janeiro (2º andar, sem elevador)</p>
                </div>
                <div className="info-block">
                  <h3 className="info-title">Horário</h3>
                  <p className="info-text">Seg a sex, 7h às 21h · Sáb, 8h às 12h</p>
                </div>
                <div className="info-block">
                  <h3 className="info-title">Contato</h3>
                  <p className="info-text">
                    <a href="https://wa.me/5500000000000" target="_blank" rel="noopener">WhatsApp</a> · <a href="https://instagram.com/movimento.fisio" target="_blank" rel="noopener">@movimento.fisio</a>
                  </p>
                </div>
                <div className="placeholder map-placeholder" role="img" aria-label="Mapa da clínica no Google Maps">[ imagem ] Mapa (Google Maps)</div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer-logo">MOVIMENTO</p>
          <div className="footer-col">
            <p className="footer-heading">Movimento</p>
            <p className="footer-text">Fisioterapia & Pilates</p>
            <p className="footer-text">Botafogo – Rio de Janeiro</p>
          </div>
          <nav className="footer-col" aria-label="Navegação do rodapé">
            <p className="footer-heading">Navegação</p>
            <ul className="footer-list">
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#equipe">Equipe</a></li>
              <li><a href="#precos">Convênios e preços</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
          <div className="footer-col">
            <p className="footer-heading">Contato</p>
            <ul className="footer-list">
              <li><a href="https://wa.me/5500000000000" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="https://instagram.com/movimento.fisio" target="_blank" rel="noopener">Instagram @movimento.fisio</a></li>
              <li>Seg a sex, 7h às 21h</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a href="https://wa.me/5500000000000" className="btn-whatsapp-fixed" target="_blank" rel="noopener">
        WhatsApp
      </a>
    </>
  );
}