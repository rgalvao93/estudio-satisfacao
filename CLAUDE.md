# Estúdio Satisfação — referência do projeto

> Documento vivo. **Atualize a cada mudança estrutural** (nova página, novo token de cor,
> renomeação de componente, nova convenção).

## 1. Visão geral

- **O que é:** site institucional (estático, HTML/CSS/JS puro, sem build) de uma **barbearia /
  SPA masculino** chamada **Estúdio Satisfação**, com duas unidades: **Carapicuíba** e **Barueri** (SP).
- **Objetivo:** apresentar a marca e os serviços e **converter em agendamento** (Trinks online,
  WhatsApp e telefone por unidade). Prova social: **4,9★ · 168 avaliações no Google**.
- **Público-alvo:** homens que buscam cuidado (cabelo, barba, sobrancelha) num ambiente sóbrio,
  privativo e sofisticado.
- **Natureza:** é um **protótipo/clone estático** do site publicado (WordPress + Elementor na
  Hostinger). Serve para prototipar melhorias e mostrar ao dono antes de aplicar no WordPress real.
  Publicado como referência no **GitHub Pages** (`master`, raiz) — ver [DEPLOY](#7-deploy).

## 2. Estrutura de pastas e arquivos

```
index.html        Home (banner + prova social + prévia de serviços + teasers)
servicos.html     Serviços — 6 serviços em seções âncora (#cabelo-barba-bigode, #sobrancelha, …)
sobre.html        Sobre / A experiência (texto institucional + 3 pilares + avaliações)
unidades.html     Unidades / Localização (2 cards com mapa Google + contatos)
contato.html      Contato (formas de contato por unidade: WhatsApp, telefone, Trinks, Instagram)
styles.css        Design system inteiro: @font-face + tokens :root + componentes + responsivo
script.js         Reveal on-scroll (IntersectionObserver), sombra da nav ao rolar, troca de foto
                  do menu de serviços no hover (#menuList / #menuViewer)
images/           Fotos e ícones. Reais do estúdio: estudio-{hero,retrato,interior,barba}.*
                  Placeholders Pexels (P&B): servico-*.jpg. Ícones: icone-*.svg. Logo: logo-satisfacao.webp
fonts/            asset-*.woff2 (Cinzel, Cinzel Decorative, Fira Sans)
.claude/          settings.local.json (hooks/permissões) + hooks/deploy-guard.sh (guardrail de deploy)
```

**Referência (não editar):** `index-clone-original.html`, `index-bundled-original.html`,
`Estudio Satisfacao Site Final (offline).html`, `wp-content/`, `wp-includes/`. São o clone
WordPress original e fontes de conteúdo real (avaliações, textos, fotos).

## 3. Paleta oficial (hex reais — `:root` em styles.css)

Identidade **preto e branco com cinza nos detalhes**; a cor **só entra em UI, nunca nas fotos**
(todas as fotos levam `filter: grayscale(1)`). O mapa do Google é exibido **em cores**.

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#0A0A0A` | fundo mais escuro (footer, base) |
| `--char` | `#141414` | superfície escura (hero copy, menu, page-header) |
| `--char-2` | `#1C1C1C` | superfície escura elevada (avaliações, cta-bar, selo) |
| `--paper` | `#F4F4F2` | superfície clara principal |
| `--paper-2` | `#EAEAE7` | superfície clara alternada (linhas de serviço `.alt`) |
| `--accent` | `#C9C9C9` | cinza claro neutro (estrelas, nº do menu, detalhes) |
| `--accent-lo` | `#6E6E6E` | cinza médio |
| `--accent-hi` | `#FFFFFF` | branco / ênfase máxima |
| **`--brand`** | **`#C0271D`** | **vermelho da marca sobre fundo claro / fundo de botão** (texto branco = AA) |
| **`--brand-dk`** | **`#E4574C`** | **vermelho sobre fundo escuro** (eyebrow, nav, hover, palavra-marca do hero) — AA |
| `--brand-deep` | `#A81E22` | hover do botão vermelho |
| `--on-dk` / `--on-dk-mut` / `--on-dk-dim` | `#F2F2F2` / `#A6A6A6` / `#6F6F6F` | texto sobre escuro |
| `--on-lt` / `--on-lt-mut` | `#141414` / `#5A5A5A` | texto sobre claro (mut = mínimo AA em fundo claro) |
| `--wa` / `--wa-ink` | `#1C1C1C` / `#FFFFFF` | botão WhatsApp monocromático |

Onde o vermelho entra: `.btn-gold` (CTA primário), eyebrows, ícones das unidades, número/hover
do menu, hover de links, nav ativa/underline, foco (`:focus-visible`), moldura da foto de
experiência, hover dos pilares, `num-tag` dos serviços, `<b>` da cta-bar, headings do footer.

**Tipografia:** `--f-flourish` = *Cinzel Decorative* (só hero/marca); `--f-display` = *Cinzel*
(títulos de seção, nomes de unidade); `--f-body` = *Fira Sans* (corpo); utilitário = Fira Sans
500 uppercase com tracking (`.eyebrow`, labels).

## 4. Convenções de nomenclatura (classes/componentes)

- **Idioma:** classes em inglês curto minúsculo com hífen (`hero-copy`, `unit-card`,
  `service-row`, `menu-viewer`, `cta-bar`). BEM leve (bloco + elemento por classe simples).
- **Design tokens:** custom properties `--grupo-modificador` (`--brand-dk`, `--on-lt-mut`, `--s-3`).
- **Escalas:** espaçamento `--s-1`..`--s-7`; raios `--r-sm/-card/-pill`; `--maxw`, `--pad-x`, `--ease`.
- **Contexto de cor de texto:** utilitários `.on-dark` / `.on-light` ajustam a cor de subtítulos e
  eyebrows conforme o fundo.
- **Botões:** `.btn` + variante — `.btn-gold` (primário vermelho), `.btn-dark` (escuro secundário),
  `.btn-ghost-dk` / `.btn-ghost-lt` (contorno), `.btn-wa` (WhatsApp mono), `.btn-sm` (menor).
- **Animação:** `.reveal` / `.reveal-stagger` (entram ao rolar via `is-visible`); respeitam
  `prefers-reduced-motion`.
- **Componentes de página (repetidos inline por página):** `.site-nav`, `.site-footer`,
  `.cta-bar`, `.page-header`. Ver observação de manutenção abaixo.

## 5. Páginas e funções (com `<title>`/meta próprios)

| Arquivo | Página | Função |
|---|---|---|
| `index.html` | **Home** | Banner (foto inteira) + avaliações + teaser da experiência + prévia dos serviços (menu com hover) + CTA de unidades |
| `servicos.html` | **Serviços** | Os 6 serviços em detalhe, cada um com âncora própria, foto, descrição, duração/valor e CTA |
| `sobre.html` | **Sobre** | Texto institucional da experiência + pilares (Modernidade/Exclusividade/Conforto) + avaliações |
| `unidades.html` | **Unidades** | 2 cards com mapa do Google (colorido) + telefone/horário + Agendar/WhatsApp/Como chegar |
| `contato.html` | **Contato** | Formas de contato por unidade (WhatsApp, telefone `tel:`, Trinks) + Instagram |

Navegação (nav + footer): Início · Serviços · Sobre · Unidades · Contato · **Agendar** (→ unidades).

## 6. Observações de manutenção

- **Chrome repetido inline:** `nav`, `footer` e `cta-bar` são **copiados em cada página** (padrão
  já existente no projeto, melhor para SEO/robustez sem build). **Ao alterar um deles, replique nas
  5 páginas.** Alternativa futura: injeção via JS (DRY) — avaliar trade-off de SEO/FOUC.
- **Fotos sempre em P&B** (`filter: grayscale(1)`). Para trocar uma foto, substitua o arquivo em
  `images/` mantendo o nome, ou ajuste o `src`. `servico-*.jpg` são placeholders Pexels; trocar por
  fotos reais do estúdio quando houver (o dono citou o Facebook como fonte).
- **Serviços em uma página só** (seções âncora), não uma página por serviço — decisão para evitar
  páginas “magras” e diluir SEO. Se quiser subpáginas dedicadas por serviço, dá para dividir depois.
- **Contraste:** textos sobre fundo claro devem ficar ≥ AA (usar `--on-lt` / `--on-lt-mut`, não
  cinzas mais claros que `#6E6E6E`).

## 7. Deploy

- **GitHub Pages** serve de `master` (raiz): <https://rgalvao93.github.io/estudio-satisfacao/>.
  Deploy = `git push origin master` (o Pages rebuilda sozinho).
- **REGRA:** nunca fazer deploy sem antes validar com um **agente de teste** (subagente
  general-purpose que checa build end-to-end). Um hook (`.claude/hooks/deploy-guard.sh`) **bloqueia
  `git push`**; após a validação aprovar, o deploy é feito com `DEPLOY_OK=1 git push origin master`.
- Testar localmente: `python3 -m http.server 8080` → <http://localhost:8080>.
