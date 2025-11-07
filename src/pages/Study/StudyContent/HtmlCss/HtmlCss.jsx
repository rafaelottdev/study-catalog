import styles from "./HtmlCss.module.css"

const HtmlCss = () => {
    return (
        <section className={styles.htmlcss_container}>
            <article className={styles.html_tags_article}>
                <h3>Tags HTML</h3>

                <ul className={styles.html_tags_list}>
                    <li>title: Titulo da Pagina</li>

                    <li>p: Parágrafo</li>

                    <li>h1: Titulo de Nivel 1</li>

                    <li>h2: Titulo de Nivel 2</li>

                    <li>h3: Titulo de Nivel 3</li>

                    <li>h4: Titulo de Nivel 4</li>

                    <li>h5: Titulo de Nivel 5</li>

                    <li>h6: Titulo de Nivel 6</li>

                    <li>br: Quebra de Linha</li>

                    <li>hr: Linha Horizontal</li>

                    <li>picture: Varias Imagens / Responsivo</li>

                    <li>source: media: Imagem Responsiva</li>

                    <li>img: Imagem</li>

                    <li>figcaption: Legenda da imagem</li>

                    <li>figure: permitir legendas nas imagens</li>

                    <li>link: favicon : Favicon</li>

                    <li>strong: Destaque</li>

                    <li>em: Italico</li>

                    <li>mark: Marca Texto</li>

                    <li>small: Texto Pequeno</li>

                    <li>del: Texto Deletado</li>

                    <li>ins: Texto Destacado</li>

                    <li>sup: Texto / Numero Menor em Cima</li>

                    <li>sub: Texto / Numero Menor em Baixo</li>

                    <li>code: Texto Mono-Espaçado</li>

                    <li>pre: Texto Literal</li>

                    <li>q: Entre Aspas / Citações</li>

                    <li>blockquote: Citações Completas</li>

                    <li>abbr: Colocar Significado / Sigla</li>

                    <li>bdo: Texto Invertido</li>

                    <li>ol: Listas Ordenadas</li>

                    <li>ul: Listas Não Ordenadas</li>

                    <li>li: Itens da Lista</li>

                    <li>dl: Lista de Definição</li>

                    <li>dt: Termo</li>

                    <li>dd: Descrição</li>

                    <li>a: Link</li>

                    <li>audio: Gera um Audio</li>

                    <li>source: src: Caminho e Tipo do Audio</li>

                    <li>video: Gera um Video</li>

                    <li>source: src: Caminho e Tipo do Video</li>

                    <li>header: Cabeçalho</li>

                    <li>main: Conteudo Principal</li>

                    <li>footer: Rodapé</li>

                    <li>nav: Menu / Links de Navegação</li>

                    <li>section: Seção</li>

                    <li>article: Artigo</li>

                    <li>aside: Conteúdo Periférico</li>

                    <li>div: Caixa</li>

                    <li>span: Seção</li>

                    <li>var: Define uma Varialvel</li>

                    <li>details:</li>

                    <li>sumary:</li>
                </ul>
            </article>

            <article className={styles.css_selectors_article}>
                <h3>Seletores CSS</h3>

                <ul className={styles.css_selectors_list}>
                    <li>background-color: Cor de Fundo</li>

                    <li>color: Cor da Letra</li>

                    <li>font-family: Fonte do Texto</li>

                    <li>text-align: Alinhamento do Texto</li>

                    <li>font-size: Tamanho da Fonte</li>

                    <li>text-decoration: Decoração do Texto</li>

                    <li>background-image linear-gradient: Cor de Fundo Degrade</li>

                    <li>background-image radial-gradient: Cor de Fundo Degrade</li>

                    <li>background-attachment: Tipo do Fundo</li>

                    <li>height: Altura</li>

                    <li>width: Largura</li>

                    <li>font-weight: Peso da Fonte</li>

                    <li>font-style: Estilo da Fonte</li>

                    <li>text-indent: Indentação do Texto</li>

                    <li>display: Como Vai Aparecer na Tela</li>

                    <li>content: Conteudo</li>

                    <li>border: Borda</li>

                    <li>border-width: Largura da Borda</li>

                    <li>border-style: Estilo da Borda</li>

                    <li>border-color: Cor da Borda</li>

                    <li>border-top: Borda de Cima</li>

                    <li>border-right: Borda da Direita</li>

                    <li>border-bottom: Borda de baixo</li>

                    <li>border-left: Borda da Esquerda</li>

                    <li>padding: Preenchimento</li>

                    <li>padding-top: Preenchimento de Cima</li>

                    <li>padding-right: Preenchimento da Direita</li>

                    <li>padding-bottom: Preenchimento de Baixo</li>

                    <li>padding-left: Preenchimento da esquerda</li>

                    <li>margin: Margem</li>

                    <li>margin-top: Margem de Cima</li>

                    <li>margin-right: Margem da Direita</li>

                    <li>margin-bottom: Margem de Baixo</li>

                    <li>margin-left: Margem da Esquerda</li>

                    <li>outline: Linha</li>

                    <li>outline-width: Largura da Linha</li>

                    <li>outline-style: Estilo da Linha</li>

                    <li>outline-color: Cor da Linha</li>

                    <li>box-shadow: Sombra da Caixa</li>

                    <li>text-shadow: Sombra no Texto</li>

                    <li>border-radius: Arredondamento da Borda</li>

                    <li>border-top-right-radius: Arredondamento da Borda do Topo Direito</li>

                    <li>border-top-left-radius: Arredondamento da Borda do Topo Esquerdo</li>

                    <li>border-bottom-right-radius: Arredondamento da Borda em Baixo Direita</li>

                    <li>border-bottom-left-radius: Arredondamento da Borda em Baixo Esquerda</li>

                    <li>border-image-source url: Borda Personalizada</li>

                    <li>border-image-slice: Fatia a Borda</li>

                    <li>border-image-repeat: Repetição da Borda</li>

                    <li>max-width: Largura Maxima</li>

                    <li>min-width: Largura Minima</li>

                    <li>max-height: Altura Maxima</li>

                    <li>min-height: Altura Minima</li>

                    <li>transition-duration: Duração da Transição</li>

                    <li>line-height: Altura Entre as Linhas</li>

                    <li>list-style-position: Posição dos Elementos da Lista</li>

                    <li>list-style-type: Estilo dos Elementos da Lista</li>

                    <li>columns: Colunas</li>

                    <li>position: Posição</li>

                    <li>top: Distancia do Topo</li>

                    <li>left: Distancia da Esquerda</li>

                    <li>opacity: opacidade</li>

                    <li>white-space: comportamento dos espaços em branco</li>

                    <li>text-overflow: comportamento do conteudo que ultrapassou o container</li>
                </ul>
            </article>

            <section className={styles.notes_container}>
                <h3>Notas Soltas</h3>

                <p>rem( px ) - função que transforma pixel em rem</p>

                <p>elemento-pai__nome-proprio - pra melhorar a hierarquia e pro google identificar melhor os elementos. *quando for botar a classe em um elemento filho, botar primeiro o nome da classe do elemento pai, dois underline e o nome da classe que voce quiser dar</p>

                <p>quando não tem underline-underline (seguindo a convenção) apesar de ser considerado filho direto, ele não necessariamente tem uma relação direta com o elemento pai</p>

                <p>360 de tamanho é o maximo que devemos nos preocupar com a responsividade (porem caso queira algo a mais, da pra ir até 320)</p>

                <p>o ponto (.) no grid area representa um espaço vazio, sem nada</p>

                <p>flex-wrap: wrap; - quebra a tag inteira ao inves de quebrar no meio da palavra</p>

                <p>vertical-align: text-bottom - alinha o texto com o icone na parte de baixo</p>

                <p>viewBox=' '</p>

                <p>fill: ;</p>

                <p>currentColor - assumi a cor do elemento pai pra si mesmo</p>

                <p>fill: currentColor;</p>

                <p>cuidado com imagens, ela pode distorcer quando usar flex-box. Flex-box tenta fazer com que o flex-item ocupe toda e extenção</p>

                <p>o flex-box ao inves de trabalhar com tamanhos fixos, ele trabalha com expaços e proporcoes, fazendo o calculo sozinho, *pega o que tem livre e destribui pra mim*</p>

                <p>
                    cascata
                    herança
                    especificidade
                </p>

                <p>!important</p>

                <p>atributo data-   (no html)</p>

                <p>
                    [ ] - brackets (no css)
                    serve pra capturar atributos no css? atributos data- ou todos os tipo?
                </p>

                <p>translate3d( ) - tem mais performance que o translate? como funciona?</p>

                <p>offset (importante)</p>

                <p>attr() - css</p>

                <p>tabindex - atributo</p>
            </section>
        </section>
    )
}

export default HtmlCss
