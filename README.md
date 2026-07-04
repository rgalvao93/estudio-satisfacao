# Estúdio Satisfação — clone estático do site

Este repositório é um **clone estático** (HTML/CSS/JS/imagens) do site publicado em
[estudiosatisfacao.com](https://estudiosatisfacao.com/), obtido em 03/07/2026 via `wget`.

## Contexto importante

O site original roda em **WordPress + Elementor** (hospedado na Hostinger). Este clone
contém apenas o HTML final renderizado e os assets estáticos referenciados por ele — **não**
é o tema/plugins do WordPress, e não tem backend (formulários, etc. não funcionam).

Ele serve como base para:
- Prototipar melhorias de design e conteúdo (ex.: no Claude / Claude Designer).
- Mostrar as mudanças propostas ao dono do estúdio antes de implementá-las no WordPress real.

Para aplicar as mudanças no site "de verdade", será necessário recriar/editar no
WordPress (ou migrar para outra stack), usando este protótipo como referência visual.

## Estrutura

- `index.html` — página inicial (hero, avaliações, experiência, prévia de serviços, unidades).
- `servicos.html` — página dedicada de serviços, com descrição, duração/valor (placeholder) e foto de cada um dos 6 serviços.
- `styles.css` — CSS compartilhado entre as páginas (fontes, reset, animações de entrada ao rolar, efeitos de hover).
- `script.js` — anima seções ao entrar na tela (IntersectionObserver) e adiciona sombra no menu ao rolar.
- `images/` — fotos e ícones usados pelas páginas (nomes descritivos, fáceis de trocar).
- `fonts/` — arquivos de fonte (`.woff2`) usados pelas páginas.
- `Estudio Satisfacao Site Final (offline).html` — arquivo original exportado do Claude Designer
  (formato "bundle": imagens e fontes codificadas em base64, desempacotadas via JS no navegador).
  Mantido só como referência — **não é o arquivo a editar**, pois não é hand-editável.
- `index-bundled-original.html` — cópia do bundle acima, como estava publicado antes da limpeza.
- `index-clone-original.html` — clone estático do site original (antes do redesign), mantido como referência.
- `wp-content/` e `wp-includes/` — assets do clone original (`index-clone-original.html`).

### Trocando imagens

Basta substituir o arquivo correspondente em `images/` (mantendo o mesmo nome) ou editar o
atributo `src`/`background-image` no `index.html` apontando para uma nova imagem (local ou uma
URL de banco de imagens público, ex. Unsplash/Pexels).

As 6 fotos de `images/servico-*.jpg` (cards de "Nossos Serviços") vêm do banco gratuito
[Pexels](https://www.pexels.com) (licença Pexels: uso comercial livre, atribuição não
obrigatória). São placeholders — trocar por fotos reais do estúdio quando disponíveis.

## Rodando localmente

```bash
python3 -m http.server 8080
# abrir http://localhost:8080
```
