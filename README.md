# Iury Huebra - Developer Portfolio 💻

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=for-the-badge&logo=framer)

Bem-vindo ao repositório do meu Portfólio Pessoal de Desenvolvimento! Este site foi construído do zero utilizando as tecnologias mais modernas do ecossistema React para entregar alta performance, transições dinâmicas, acessibilidade multilinguagem e um visual premium focado no usuário.

## 🚀 Funcionalidades da Aplicação (Features)

- **UI/UX Avançada:** Design minimalista e elegante utilizando vidro (Glassmorphism), animações de rolagem fluidas com bibliotecas externas de física (Framer Motion) e hierarquia visual forte.
- **Multilíngue Dinâmico (i18n):** O site contém suporte nativo a Single-Page Internationalization com contexto React. Troca fluida do Português (pt-BR) para o Inglês (en-US) através do cliente com `localStorage`.
- **Animações "Orbital":** Um diagrama estelar construído via cálculos de Raio `(Radianos)` + CSS interagindo com todas as linguagens ativas de Frontend, Backend e Ferramentas usadas na minha carreira.
- **Build Estático & GitHub Pages:** Configurado 100% para deploy via Export Estático no Next.js App Router integrando Actions do CI/CD.

## 🛠 Bibliotecas e Stack Tecnológico

- **Framework:** `Next.js 15+` (App Router)
- **Linguagem:** `TypeScript`
- **Estilização:** `Tailwind CSS 4` e variáveis CSS root personalizadas (paletas interligadas).
- **Ícones:** `Lucide React` & `React-icons`
- **Animações:** `Framer Motion`

## ⚙️ Rodando o Projeto Localmente

1. Faça o clone do repositório
```bash
git clone https://github.com/iuryhuebra/developer-portfolio.git
cd developer-portfolio
```

2. Instale as dependências com o seu gerenciador de pacotes (eu uso o `pnpm`)
```bash
pnpm install
```

3. Inicie o servidor localmente
```bash
pnpm run dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu browser padrão e o projeto já estará visível!

## 🌐 Deploy (GitHub Action)

Este projeto está integrado ao Github Actions (`.github/workflows/deploy.yml`). A cada push para o braço (branch) principal, a plataforma criará um Build Otimizado do Node.js, transformará os pacotes e subirá automaticamente o diretório `/out` para rodar este aplicativo nos servidores de borda globais do GitHub.
