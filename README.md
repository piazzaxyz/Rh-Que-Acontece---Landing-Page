# RH que Acontece — Landing Page

Landing Page profissional da **RH que Acontece**, consultoria estratégica de RH com foco em Inteligência Artificial, fundada por Caroline Scholl.

---

## Tecnologias

- [Next.js 16](https://nextjs.org/) com Turbopack
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) — animações de entrada e scroll
- [Motion / Framer Motion](https://motion.dev/) — animação do componente `RotatingText`
- [Lucide React](https://lucide.dev/) — ícones

---

## Estrutura de Componentes

```
examples:
components/
├── hero-section.tsx       # Seção principal com título animado e RotatingText
├── RotatingText.tsx       # Componente de texto rotativo com stagger animation
├── footer.tsx             # Rodapé com links rápidos e redes sociais
└── ui-utils.tsx           # Primitivos reutilizáveis: GoldDivider, Section, TagBadge
```

---

## Instalação

```bash
# Instalar dependências
npm install

# Dependências específicas do projeto
npm install gsap motion lucide-react
```

---

## Rodando localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Componente RotatingText

O `RotatingText` é usado na hero section para animar frases de forma sequencial dentro de um chip dourado.

```tsx
<RotatingText
  texts={["Com IA.", "Com Dados.", "Com Estratégia.", "Com Propósito."]}
  mainClassName="bg-gold text-black-deep px-4 py-1.5 rounded-xl font-bold uppercase"
  staggerFrom="last"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.02}
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2200}
/>
```

**Props principais:**

| Prop | Tipo | Descrição |
|---|---|---|
| `texts` | `string[]` | Lista de textos a rotacionar |
| `rotationInterval` | `number` | Intervalo em ms entre trocas |
| `staggerFrom` | `first \| last \| center \| random` | Direção do efeito stagger |
| `staggerDuration` | `number` | Delay entre cada caractere |
| `loop` | `boolean` | Se reinicia após o último texto |
| `auto` | `boolean` | Se a rotação é automática |
| `splitBy` | `characters \| words \| lines` | Como o texto é dividido para animar |

---

## Design System

As cores seguem variáveis customizadas definidas no `tailwind.config`:

| Token | Uso |
|---|---|
| `gold` | Cor primária — textos, bordas, destaques |
| `gold-dark` | Gradientes e variações escuras do dourado |
| `black-deep` | Fundo principal |
| `black-mid` | Fundo de seções secundárias e footer |
| `white-ice` | Textos descritivos |
| `gray-mid` | Textos de baixa ênfase (copyright etc.) |

---

## Scripts

```bash
npm run dev       # Desenvolvimento com Turbopack
npm run build     # Build de produção
npm run start     # Servidor de produção
npm run lint      # Lint com ESLint
```

---

## Licença

Todos os direitos reservados © 2025 RH que Acontece — Caroline Scholl.
