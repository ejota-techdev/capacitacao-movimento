# Prompt de contexto do projeto

Você está trabalhando no projeto **capacitacao-movimento**, desenvolvido pelo
Grupo A na Capacitação TechDev 2026.2 da EJOTA. O cliente é fictício:
**Movimento Fisioterapia & Pilates**, uma clínica localizada em Botafogo.

## Objetivo do projeto

Construir a presença digital da clínica em etapas:

1. Um site institucional responsivo, com página inicial e página de serviços.
2. Um formulário para captação de leads.
3. Automações no n8n para registrar e consultar leads e gerar resumos.
4. Um agente de atendimento para orientar os visitantes e encaminhar contatos.
5. Documentação suficiente para que outra pessoa consiga operar, manter e repassar
   o projeto ao cliente.

Ao implementar qualquer mudança, preserve a identidade visual e o conteúdo
definidos nas imagens de referência da pasta `design/`. Prefira soluções simples,
acessíveis, responsivas e compatíveis com a arquitetura existente. Não invente
informações clínicas, preços, convênios ou dados de profissionais que não estejam
definidos no projeto.

## Organização do repositório

```text
/
├── README.md                 # Visão geral, processo de trabalho e entregas
├── presenca.md               # Registro relacionado à presença/participação
├── prompt.md                 # Este prompt de contexto e implementação
├── design/                   # Referências visuais exportadas do wireframe
│   ├── Header.png
│   ├── Hero.png
│   ├── Serviços.png
│   ├── Diferenciais.png
│   ├── Equipe.png
│   ├── Convênios e preços.png
│   ├── Contato.png
│   ├── Rodapé.png
│   ├── Botão WhatsApp fixo (agente).png
│   └── home_cap_dev.png
├── site-estatico/            # Implementação inicial em HTML, CSS e JavaScript
│   ├── index.html            # Página inicial
│   ├── servicos.html         # Página detalhada de serviços
│   ├── css/style.css         # Layout, componentes e responsividade
│   └── js/main.js            # Interações do menu mobile
├── site/                     # Aplicação Next.js planejada para a semana 2
├── n8n/                      # Exportações JSON dos fluxos de automação
│   └── README.md              # Convenções e cuidados com credenciais
└── docs/                     # Documentação operacional e de entrega
    └── README.md              # Índice dos documentos esperados
```

As pastas `site/`, `n8n/` e alguns documentos de `docs/` fazem parte das etapas
seguintes e podem ainda não existir ou estar incompletos. Não trate itens
planejados no `README.md` como se já estivessem implementados.

## Estado atual do site estático

- `site-estatico/index.html` contém a estrutura da home: cabeçalho, navegação,
  hero, serviços, diferenciais, equipe, convênios e preços, contato e rodapé.
- `site-estatico/servicos.html` é a página interna de serviços e ainda possui
  pontos marcados com `TODO`.
- `site-estatico/css/style.css` concentra as variáveis visuais, componentes,
  layout mobile-first e breakpoints para telas maiores.
- `site-estatico/js/main.js` controla a abertura e o fechamento do menu mobile,
  incluindo `aria-expanded`, `aria-label`, fechamento ao clicar em um link e
  suporte à tecla `Escape`.
- Algumas imagens do site ainda são representadas por placeholders e devem ser
  substituídas somente quando houver assets aprovados.

## Regras de implementação

- Siga estritamente as referências visuais em `design/`.
- Desenvolva com abordagem **mobile-first** e garanta boa adaptação para tablet
  e desktop.
- Preserve a paleta, tipografia, espaçamentos, hierarquia e proporções do design.
- Mantenha HTML semântico, navegação por teclado, foco visível, textos
  alternativos e atributos ARIA quando necessários.
- Reutilize classes e padrões já existentes antes de criar novos componentes.
- Mantenha o JavaScript em `site-estatico/js/main.js`; não adicione bibliotecas
  sem necessidade.
- Não coloque tokens, senhas, URLs de webhook ou outras credenciais no
  repositório. Credenciais devem permanecer nas configurações do n8n ou em
  arquivos locais ignorados pelo Git.
- Faça alterações pequenas e coerentes, sem modificar arquivos fora do escopo.
- Ao concluir uma alteração, verifique os links, a responsividade e a ausência de
  erros básicos de HTML, CSS e JavaScript.

## Fluxo de trabalho do projeto

- Trabalhe em uma branch específica para cada tarefa, como
  `feat/secao-servicos`, `fix/menu-celular` ou `docs/ata-rep`.
- Faça commits pequenos, com mensagens no presente e descrição objetiva.
- Abra um pull request para revisão; não faça commit diretamente na `main`.
- Para mudanças visuais, compare a implementação com os arquivos correspondentes
  em `design/`.
- Para mudanças de automação, documente o fluxo, seus gatilhos, credenciais,
  comportamento em caso de falha e testes realizados.

## Como responder às tarefas

Antes de editar, identifique os arquivos diretamente relacionados e respeite o
padrão já usado no projeto. Explique brevemente o que foi alterado, indique
eventuais limitações ou `TODOs` restantes e informe quais validações foram
executadas. Quando a tarefa envolver conteúdo clínico ou comercial ausente,
solicite os dados em vez de inventá-los.