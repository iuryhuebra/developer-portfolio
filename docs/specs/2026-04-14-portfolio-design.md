# Developer Portfolio — Design Spec

## Objetivo

Criar um portfólio pessoal para desenvolvedor que demonstre capacidades técnicas e projetos de forma visualmente impactante. O site deve transmitir profissionalismo, modernidade e domínio técnico.

## Stack

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Fontes:** Google Fonts (Inter, Space Grotesk, JetBrains Mono)

## Estilo Visual

**Dark Mode Minimalista & Cyberpunk Suave**

O design é predominantemente escuro com acentos de cor neon (cyan e purple). O visual transmite um "feeling dev" através de tipografia monoespaçada em destaque, bordas precisas e forte contraste. Não é cyberpunk agressivo — é uma versão refinada e profissional.

### Paleta de Cores

| Token               | Valor                                          | Uso                              |
|----------------------|------------------------------------------------|----------------------------------|
| `--bg-primary`       | `#0a0a0f`                                      | Fundo principal                  |
| `--bg-secondary`     | `#12121a`                                      | Cards e superfícies elevadas     |
| `--bg-tertiary`      | `#1a1a2e`                                      | Hover states, destaques sutis    |
| `--text-primary`     | `#e4e4e7`                                      | Texto principal (contraste ≥7:1) |
| `--text-secondary`   | `#a1a1aa`                                      | Texto secundário (contraste ≥4.5:1) |
| `--accent-primary`   | `#00f0ff`                                      | Bordas ativas, indicadores, glow |
| `--accent-secondary` | `#7c3aed`                                      | Gradients, sotaques secundários  |
| `--accent-gradient`  | `linear-gradient(135deg, #00f0ff, #7c3aed)`    | CTAs, indicadores ativos         |
| `--border-subtle`    | `rgba(255, 255, 255, 0.06)`                    | Bordas de cards e divisores      |
| `--border-hover`     | `rgba(0, 240, 255, 0.3)`                       | Bordas ao hover                  |

### Tipografia

| Uso           | Fonte           | Peso      | Tamanho base     |
|---------------|-----------------|-----------|------------------|
| Display (h1)  | Space Grotesk   | 700       | 48-72px          |
| Headings      | Space Grotesk   | 600-700   | 24-36px          |
| Body          | Inter           | 400       | 16px             |
| Labels        | Inter           | 500       | 14px             |
| Code/Mono     | JetBrains Mono  | 400-500   | 14-16px          |

### Spacing

Sistema de 4/8px: `4, 8, 12, 16, 24, 32, 48, 64, 96`

### Efeitos

- **Glow hover:** `box-shadow: 0 0 20px rgba(0, 240, 255, 0.15)`
- **Glow forte (active):** `box-shadow: 0 0 40px rgba(0, 240, 255, 0.25)`
- **Bordas:** `1px solid rgba(255, 255, 255, 0.06)` — hover: `rgba(0, 240, 255, 0.3)`
- **Backdrop blur (navbar):** `backdrop-filter: blur(12px)`
- **Border radius:** `8px` para cards, `12px` para containers maiores, `9999px` para pills/badges
- **Transições:** `150-300ms ease-out` para interações, `400ms` para scroll reveals
- **Scroll reveal:** elementos entram de baixo com fade e translate-y sutil

## Estrutura de Páginas

Single Page Application com as seguintes seções (scroll vertical, sidebar fixa na lateral):

### 1. Sidebar (Navegação)

- Barra fixa vertical na lateral esquerda, fina (~60-72px de largura)
- Ícones para cada seção (Lucide icons) com tooltip ao hover mostrando o nome
- Dot indicator ou linha iluminada marcando a seção ativa (detectada via Intersection Observer)
- Na parte inferior: ícones de redes sociais (GitHub, LinkedIn)
- **Mobile:** colapsa para bottom nav com 5 ícones (um para cada seção)

### 2. Hero Section

- Ocupa viewport inteira (`min-h-dvh`)
- Nome do desenvolvedor em tipografia grande (Space Grotesk, 48-72px)
- Subtítulo com **typewriter effect**: texto fixo "Eu construo " + palavra rotacionando (ex: `"aplicações web"`, `"APIs escaláveis"`, `"interfaces modernas"`) usando JetBrains Mono
- CTA sutil: link/botão "Ver Projetos" com borda gradient
- Scroll indicator animado (chevron ou mouse icon pulsando) no bottom
- Background: gradiente radial sutil do center para as bordas (do `--bg-tertiary` para `--bg-primary`)

### 3. Skills Section — Visualização Orbital

- Elemento central (pode ser o nome ou "Stack" ou um ícone) com tecnologias orbitando em anéis concêntricos
- Cada tecnologia é um ícone SVG com label
- Anéis agrupados por categoria: Frontend (anel interno), Backend (anel médio), Tools (anel externo)
- Animação de rotação lenta e contínua (respeitando `prefers-reduced-motion`)
- Hover em uma tech: destaque com glow, pausa a rotação daquele item, mostra tooltip com nome e proficiência
- **Mobile fallback:** Grid de badges agrupados por categoria (a órbita fica muito pequena)

### 4. Projects Section — Casos de Estudo

- 3-5 projetos featured
- Cada projeto é um bloco grande verticalmente:
  - Screenshot/mockup do projeto (imagem ocupando ~60% da largura ou full-width)
  - Título do projeto (Space Grotesk, bold)
  - Badges com as tecnologias usadas (pills com border subtle)
  - Parágrafo curto descrevendo o problema e a solução
  - Links: "Ver Demo" e "Ver Código" (GitHub) com ícones
- Scroll reveal: cada case study entra com animação ao entrar no viewport
- Separação visual entre projetos com espaçamento generoso (96px+)

### 5. Experience Section — Timeline Horizontal

- Faixa horizontal com scroll controlado (botões de seta nos lados ou drag)
- Cada nó na timeline é um card:
  - Período (ex: "2023 - Presente")
  - Cargo
  - Empresa
  - Descrição curta (2-3 linhas)
- Linha conectora horizontal com dots nos nós
- O nó ativo (mais recente) tem destaque com glow do accent-primary
- Scroll-snap para alinhar cada card
- **Mobile:** funciona com swipe horizontal nativo

### 6. Contact Section

- Headline chamativa: "Vamos conversar?" ou similar (Space Grotesk, grande)
- Subtítulo curto
- Row de ícones grandes: Email, LinkedIn, GitHub (e opcionalmente outros)
- Cada ícone é um link externo com hover effect (glow + scale sutil 1.05)
- Opcionalmente: endereço de email como texto clicável (`mailto:`)

## Responsividade

| Breakpoint | Comportamento |
|------------|---------------|
| < 768px    | Sidebar → bottom nav; Orbital skills → grid; Timeline → swipe cards |
| 768-1024px | Sidebar slim; Layout ajustado |
| > 1024px   | Full layout com sidebar |

## Acessibilidade

- Contraste mínimo de 4.5:1 para texto, 3:1 para elementos decorativos
- `prefers-reduced-motion`: desabilitar animações contínuas (órbita, typewriter), manter scroll reveals como fade simples
- `aria-label` em todos os ícones/botões
- Skip-to-content link
- Ordem de tab lógica seguindo a sidebar
- Alt text em todas as imagens de projetos

## Performance

- Lazy load nas imagens de projetos (abaixo do fold)
- Fontes com `font-display: swap` e preload nas críticas (Inter, Space Grotesk)
- Next.js Image component para otimização automática
- Intersection Observer para scroll reveals (sem bibliotecas pesadas)
- Framer Motion com tree-shaking (importar apenas o necessário)

## Anti-Patterns a Evitar

- Emoji como ícones → usar Lucide React
- Cores hardcoded → usar tokens Tailwind customizados
- Animações > 500ms → manter 150-300ms
- Hover-only interactions → garantir que funcione via tap/click
- Texto < 16px no body → manter 16px mínimo
- Horizontal scroll acidental no mobile → conter dentro da timeline apenas
