# Revisão de conteúdo — Azultech Engenharia

Verificação em 14/10/2026.

## Dados institucionais
- Razão social: Azultech Engenharia Ltda.
- CNPJ: 28.366.602/0001-86.
- Fundação: 08/08/2017 (informada pelo cliente e corroborada nos cadastros abaixo).
- Sede: Avenida Anacé, 136, Jardim Umarizal, São Paulo – SP, CEP 05755-090.
- O site antigo descreve a região como Campo Limpo. O bairro cadastral informado pelo cliente, Jardim Umarizal, prevalece no endereço.
- WhatsApp comercial: (11) 93921-7592.
- E-mail comercial: contato@azultechengenharia.com.br.
- Instagram: https://www.instagram.com/azultechengenharia
- Pagamento anunciado: até 18x sem juros no cartão; condições a consultar na proposta.
- Atendimento anunciado: bairros de São Paulo e cidades da região listados em src/lib/company.ts.

## Fontes
- Site institucional: https://www.azultechengenharia.com.br/
- Contato: https://www.azultechengenharia.com.br/contato/
- Cadastro: https://casadosdados.com.br/solucao/cnpj/azultech-engenharia-ltda-28366602000186
- Cadastro de conferência: https://www.econodata.com.br/consulta-empresa/28366602000186-azultech-engenharia-ltda
- Apartamentos e camas suspensas: https://www.azultechengenharia.com.br/mezaninos-para-apartamentos-na-zona-sul-morumbi-santo-amaro-sp/
- Reforma de portões: https://www.azultechengenharia.com.br/reformas-de-portoes-de-aluminio-na-zona-sul-morumbi-santo-amaro-sp/
- Hidráulica: https://www.azultechengenharia.com.br/servicos-de-hidraulica-na-zona-sul-morumbi-santo-amaro-sp/

O site institucional confirma fabricação, instalação e manutenção, mezaninos comerciais/residenciais, camas suspensas, coberturas metálicas e de vidro, esquadrias Blindex, box, fechamentos de áreas e sacadas fixos/retráteis, portões, elétrica, hidráulica, gesso e alvenaria. Parte das páginas individuais retornou HTTP 406 ou timeout. Os textos foram reescritos sem transportar especificações não confirmadas do cadastro anterior.

O Instagram bloqueou o acesso automatizado. Seu link foi confirmado no site institucional; biografia, posts, número de seguidores e datas não foram assumidos. Os telefones e o e-mail cadastrais alternativos encontrados em agregadores não substituem o contato comercial publicado pela própria empresa.

## Dados anteriores sem comprovação
CNPJ de exemplo, CREA fictício, 15 anos de atuação, 500 obras, nota Google 5.0, depoimentos de exemplo e promessas de atendimento em 24h não são exibidos. Horários, garantias, marcas parceiras, espessuras de vidro, cargas estruturais, entregas em 48h e certificações não foram confirmados e foram retirados dos textos públicos. Registros históricos de leads e depoimentos no SQLite foram preservados; os depoimentos de exemplo não são usados no site.

## Dicas
Os artigos são novos textos editoriais com fontes indicadas na própria página:
- Crea-SP: https://www.creasp.org.br/arquivos/cartilhas/condominio.pdf
- Abravidro: https://www.deolhonoboxe.com.br/vidraceiro/o-programa-vidraceiro/
- Sabesp: https://www.sabesp.com.br/servicos/variacoes-de-consumo

## Imagens e identidade
14 imagens ilustrativas geradas com a ferramenta integrada imagegen. Arquivos em public/images/services/*.webp. Prompts em docs/image-prompts.json. Não representam obras realizadas pela empresa.
O símbolo original é usado no cabeçalho com um wordmark legível; favicon próprio substitui a identidade do template.
Portfólio removido dos menus; a URL antiga redireciona para serviços.
Rodapé: Desenvolvido por Struture Studios, com link https://struturestudios.com/.

## Ajuste visual solicitado
Design anterior ao redesenho minimalista restaurado a partir do commit 9a7a613, mantendo dados institucionais corrigidos, ícones, favicon, imagens dos serviços e artigos. Cards e menu por subcategorias voltaram ao formato original, com acesso a Todos os serviços. Portfólio e depoimentos sem comprovação continuam fora da apresentação pública.

## Fotos, galerias e orçamento por WhatsApp
Foto da equipe fornecida pelo cliente aplicada à apresentação da equipe e à história da empresa, sem alterações de conteúdo. Logo original integral preservado em public/logo-original.png.
42 imagens em 14 galerias; fontes individuais em docs/gallery-sources.json. Fotos selecionadas do site anterior e imagens ilustrativas identificadas na interface. Três imagens ilustrativas complementares foram geradas pela ferramenta integrada imagegen; prompts no mesmo manifesto.
Todos os formulários usam Nome Completo, Endereço, Serviço desejado, Tipo de imóvel e Descrição adicional opcional. O envio abre a conversa comercial no WhatsApp com texto formatado; o visitante confirma o envio no aplicativo. Não grava novos leads pelo formulário.
Data completa de fundação e área de atendimento prioritário retiradas da apresentação. Cards com imagens, contraste reforçado no hero e movimentos reduzidos quando solicitado pelo sistema.
Validação: build, composição/encoding da mensagem e descrição opcional, 14 galerias com 3 imagens, navegação por setas/miniaturas/teclado, formulário no celular, logo original, ausência de overflow e de erros JavaScript. O teste do WhatsApp interceptou a navegação, sem enviar mensagens.

## Header, equipe e mapa calculado
Header reduzido para 60 px. Slogan inferior do logo oculto por recorte CSS, preservando o arquivo original. Legenda abaixo da foto da equipe removida. Carrosséis preenchem a largura das imagens e o espaçamento entre descrição, galeria e benefícios foi ajustado.
Apresentação da equipe reescrita; compromisso redesenhado com imagem ilustrativa gerada por imagegen, salva em public/images/compromisso-oficina.webp, com prompt em docs/commitment-image.json.
Raio calculado para os pontos de referência das 25 localidades de atendimento: máximo de 16,5578 km até Cotia, arredondado para cima ao próximo múltiplo de 5 km = 20 km. Método Haversine, distâncias em linha reta; não representa trajetos rodoviários nem os limites integrais dos municípios. Pontos, fontes e cálculo registrados em docs/coverage-calculation.json. Centro obtido do mapa Google incorporado ao contato do site anterior (latitude -23.618166, longitude -46.7571253). Vila Nova Conceição representada pela Praça Pereira Coutinho, cuja localização no bairro é confirmada pela Prefeitura: https://prefeitura.sp.gov.br/web/vila_mariana/w/noticias/14724.
Mapa interativo com Leaflet 1.9.4 e tiles OpenStreetMap; círculo de 20.000 metros, localização da sede e controles de zoom. A disponibilidade para cada endereço continua sujeita a consulta.
Verificação em navegador: header 60 px, carrossel sem barras laterais, círculo e tiles carregados, ausência de rolagem horizontal no celular e de erros JavaScript. Todos os 25 pontos calculados estão dentro do raio exibido.
