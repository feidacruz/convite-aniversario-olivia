# Convite Digital Interativo - Aniversário de 1 Ano da Olivia

Este é um convite digital interativo para o aniversário de 1 ano da Olivia com o tema "Jardim Encantado". O convite foi projetado para ser compartilhado facilmente pelo WhatsApp e oferece uma experiência interativa para os convidados.

## Características

- **Design temático de Jardim Encantado**: Cores vibrantes, elementos florais e uma estética infantil alegre.
- **Interatividade**: Inclui um mini-jogo de quebra-cabeça para entreter os convidados.
- **Confirmação de presença**: Formulário RSVP embutido para facilitar a organização da festa.
- **Responsivo**: Funciona bem em dispositivos móveis e desktops.

## Instruções de Uso

### 1. Personalização do Convite

- **Foto da Olivia**: Substitua o placeholder da foto por uma imagem real da sua filha.
  - Adicione a foto em `public/images/` com o nome `olivia-photo.jpg`
  - No arquivo `js/script.js`, descomente a linha com `backgroundImage` no método `initPuzzle()`

- **Informações da Festa**: As informações já estão preenchidas conforme solicitado:
  - Data: 26/04/2025
  - Horário: 13:00h
  - Local: Av Hilário Pereira de Souza 492 - Osasco / Condominio Jardins do Brasil - Salão de festas infantil Sub condomínio Amazônia

- **Personalização com nomes dos convidados**: Você pode criar versões personalizadas do convite editando o HTML para incluir o nome de cada convidado.

### 2. Hospedagem

Para compartilhar o convite pelo WhatsApp, você precisa hospedá-lo na internet. Aqui estão algumas opções gratuitas:

- **GitHub Pages**: Crie um repositório no GitHub e ative o GitHub Pages.
- **Netlify**: Faça upload do projeto para o Netlify (www.netlify.com).
- **Vercel**: Hospede o projeto no Vercel (vercel.com).

### 3. Compartilhamento

Após hospedar o convite, você receberá uma URL. Compartilhe essa URL via WhatsApp com seus convidados.

Exemplo de mensagem:
```
Olá! A Olivia está fazendo 1 aninho e você está convidado para a festa com tema de Jardim Encantado! 
Para ver o convite interativo, acesse: [LINK_DO_CONVITE]
```

## Estrutura do Projeto

- `index.html` - Página principal do convite
- `css/style.css` - Estilos e aparência visual
- `js/script.js` - Funcionalidades interativas
- `public/images/` - Imagens e SVGs utilizados no convite

## Personalização Técnica

### Editar Elementos Visuais

1. **Cores**: As cores principais podem ser alteradas no arquivo `css/style.css`.
   - Cor principal do título: `.name { color: #6c81ff; }`
   - Cor secundária: `.interactive-section h3 { color: #6c81ff; }`
   - Cor dos botões: `.button { background-color: #a7e9af; color: #3a7240; }`

2. **Fontes**: As fontes utilizadas são 'Pacifico' (para títulos) e 'Quicksand' (para texto), importadas do Google Fonts.
   - Para alterar, modifique o link no `<head>` do HTML e atualize as referências no CSS.

### Personalizar o Mini-Jogo

O quebra-cabeça é um jogo simples de 2x2 peças:

1. Para aumentar a dificuldade, mude `const puzzleSize = 2;` para `3` ou `4` no arquivo `js/script.js`.
2. Para usar a foto real da Olivia no quebra-cabeça, descomente as linhas:
   ```javascript
   // piece.style.backgroundImage = 'url("/public/images/olivia-photo.jpg")';
   // piece.style.backgroundPosition = `${-col * 100}% ${-row * 100}%`;
   ```

### Configurar o Formulário RSVP

Para receber as confirmações de presença, você pode:

1. Implementar um backend simples para armazenar as respostas (requer conhecimentos de programação).
2. Usar um serviço de formulários como Formspree, simplesmente alterando a tag `<form>` para:
   ```html
   <form action="https://formspree.io/seu-email@exemplo.com" method="POST">
   ```

## Solução de Problemas

- **Imagens não aparecem**: Verifique se os caminhos estão corretos e se as imagens foram carregadas corretamente.
- **Quebra-cabeça não funciona**: Abra o console do navegador (F12) para verificar erros de JavaScript.
- **Problemas de exibição em celulares**: Teste em diferentes dispositivos e ajuste o CSS conforme necessário.

## Ferramentas Utilizadas

- HTML5, CSS3 e JavaScript puro
- SVG para gráficos vetoriais
- Google Fonts para tipografia
- Animate.css para animações

---

Aproveite o convite digital da Olivia! Se precisar de ajuda ou tiver dúvidas, entre em contato. 