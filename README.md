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

- `index.html` — versão **redesenhada** (feita no Claude Designer), publicada como prévia.
- `Estudio Satisfacao Site Final (offline).html` — arquivo original exportado do Claude Designer, autocontido.
- `index-clone-original.html` — clone estático do site original (antes do redesign), mantido como referência.
- `wp-content/` e `wp-includes/` — assets do clone original (`index-clone-original.html`).

## Rodando localmente

```bash
python3 -m http.server 8080
# abrir http://localhost:8080
```
