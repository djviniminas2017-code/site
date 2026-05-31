# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Instalar dependências
python -m pip install -r requirements.txt

# Rodar o servidor de desenvolvimento
python app.py
# Acesse em http://localhost:5000
```

## Arquitetura

Site institucional Flask com 4 rotas estáticas (`/`, `/sobre`, `/servicos`, `/contato`), cada uma renderizando um template Jinja2.

- `app.py` — única entrada da aplicação, define as 4 rotas
- `templates/base.html` — template base com navbar, footer e botão flutuante do WhatsApp; todos os outros templates estendem este
- `static/css/style.css` — todo o CSS customizado usando variáveis CSS (`--primary`, `--accent`); Bootstrap 5 é carregado via CDN
- `static/js/main.js` — efeito de scroll na navbar e animação de entrada dos cards via IntersectionObserver

## Personalização pendente

Substituir nos templates antes de publicar:
- `55SEUNUMERO` → número real do WhatsApp (formato `5511999999999`)
- `contato@fcsengenharia.com.br` → e-mail real
- `@fcsengenharia` → usuário real do Instagram/LinkedIn
- `CREA-XX 000000/D` → registro real no footer (`base.html`)
- Logo: arquivo em `static/images/Logo.png.jpeg` (referenciado em `base.html` como `logo.png` — ajustar nome se necessário)
