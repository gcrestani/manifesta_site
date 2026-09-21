# Intualia

Landing page estática baseada no protótipo aprovado em `C:\sources\manifesta\docs\deliverables\intualia-landing-prototype`. HTML, CSS e JavaScript sem dependências de build.

## Prévia local

Com Node.js instalado, execute `node preview.cjs` nesta pasta e abra http://127.0.0.1:4173. Para conferir o comportamento em subdiretório do GitHub Pages, abra http://127.0.0.1:4173/manifesta_site/.

## Publicação

A prévia é local; esta alteração não publica o site. Após revisão, o conteúdo estático da raiz pode ser servido diretamente pelo GitHub Pages. O arquivo `CNAME` mantém `intualia.com`. Não há rotas de aplicação, backend ou etapas de build. Os links de páginas e assets são relativos.

## Conteúdo e referências

- Logo original: `C:\sources\manifesta\assets\branding\intualia-symbol.png`.
- Telas originais: `daily-check-in-implemented.png`, `intention-tracking-implemented-detail.png` e `emotional-exploration-practice.png`, de `C:\sources\manifesta\docs\deliverables`. PNGs copiados sem alterações, exibidos integralmente e com a proporção original. São renderizações do app com dados demonstrativos.
- Ícones Material: fonte original do SDK Flutter usado pelo app; licença em `assets/fonts/materialicons_license.txt`.
- DM Sans: mantido o carregamento via Google Fonts, com fontes de sistema como alternativa.
- Download Android: `https://play.google.com/store/apps/details?id=com.intualia.app`, identificador confirmado pelo responsável. A disponibilidade pública da listagem precisa ser conferida antes da publicação.
- Suporte: `manifestatecnologia@gmail.com`, conforme `lib/core/config/app_brand.dart` do app.
- iOS: “Disponível em breve”, sem data ou link para uma loja ainda não confirmada.
- Conteúdo jurídico e domínio preservados. Apenas os links relativos e o identificador Android foram atualizados nas páginas jurídicas. As páginas existentes citam tanto `privacidade@intualia.app` quanto `privacidade@intualia.com`; essa divergência preexistente foi preservada para revisão pelo responsável.

## Interações

FAQ com `details`/`summary`, navegação por âncoras e foco visível por teclado. Animações de entrada discretas executam uma única vez por seção e respeitam `prefers-reduced-motion`, inclusive quando a preferência muda. Todo o conteúdo permanece disponível sem JavaScript. No celular, as capturas ficam em uma coluna, sem carrossel.
