# Habit Tracker — Painel Educacional de Controle de Hábitos

### Projeto de Desenvolvimento Web | HTML5 · CSS3 · JavaScript

---

## 1. Apresentação do projeto

O **Habit Tracker** é um projeto educacional de desenvolvimento web que tem como proposta oferecer um painel de controle de hábitos, utilizando tecnologias fundamentais do desenvolvimento front-end.

A aplicação foi concebida para proporcionar uma interface digital voltada ao acompanhamento de hábitos, apresentando uma experiência de utilização organizada e acessível.

O desenvolvimento utiliza HTML5, CSS3 e JavaScript, demonstrando a aplicação prática dessas tecnologias na construção de uma interface web interativa.

Além dos aspectos visuais e funcionais, o projeto considera a importância da organização do código, da usabilidade e da acessibilidade digital, especialmente para usuários que utilizam tecnologias assistivas.

## 2. Objetivos

O projeto possui como objetivos:

- Desenvolver uma aplicação web educacional para acompanhamento de hábitos.
- Aplicar conhecimentos de estruturação com HTML5.
- Utilizar CSS3 para composição visual, organização e apresentação da interface.
- Implementar interações por meio de JavaScript.
- Desenvolver uma experiência de navegação clara e intuitiva.
- Considerar práticas de acessibilidade para leitores de tela.
- Compreender o processo de desenvolvimento e manutenção de uma aplicação front-end.

## 3. Processo de desenvolvimento

O desenvolvimento do Habit Tracker considera diferentes etapas, desde a definição da proposta até a validação da aplicação.

### 3.1. Planejamento e definição da proposta

A primeira etapa consiste em definir a finalidade do sistema: oferecer um ambiente digital para acompanhamento de hábitos.

Nessa fase, são considerados os objetivos da aplicação, a organização das informações e a experiência esperada durante a utilização.

A preocupação principal é desenvolver uma interface funcional, evitando uma estrutura desorganizada ou visualmente confusa.

### 3.2. Estruturação com HTML5

O HTML5 constitui a base estrutural da aplicação.

Sua responsabilidade é organizar os elementos que compõem a interface, estabelecendo uma hierarquia lógica entre títulos, seções, textos, controles e demais componentes.

A utilização de elementos semânticos permite que navegadores e tecnologias assistivas compreendam melhor a organização do conteúdo.

### 3.3. Desenvolvimento visual com CSS3

O CSS3 é responsável pela apresentação visual do Habit Tracker.

Nessa etapa, são trabalhados aspectos como:

- Organização dos componentes da interface.
- Hierarquia visual das informações.
- Espaçamentos e alinhamentos.
- Tipografia e legibilidade.
- Cores e contrastes.
- Adaptação da apresentação a diferentes dimensões de tela.

O objetivo é proporcionar uma interface visualmente organizada, mantendo a clareza das informações e a facilidade de utilização.

### 3.4. Implementação de interações com JavaScript

O JavaScript é utilizado para implementar a lógica de funcionamento da aplicação.

É por meio dele que os elementos da interface podem responder às ações realizadas pelo usuário.

A lógica deve permanecer organizada e separada da estrutura HTML e da apresentação CSS, facilitando a manutenção e a evolução do projeto.

### 3.5. Acessibilidade e validação

A acessibilidade é considerada parte do processo de desenvolvimento, e não apenas um acabamento visual.

A estrutura da aplicação deve permitir que usuários de diferentes condições de acesso consigam compreender o conteúdo e utilizar os recursos disponíveis.

Essa etapa envolve a avaliação da navegação por teclado, da identificação dos controles, da organização dos títulos e da comunicação das alterações realizadas na interface.

---

## 4. Compatibilidade com NVDA e acessibilidade digital

Um dos aspectos considerados no projeto é a utilização de tecnologias assistivas, especialmente o **NVDA (NonVisual Desktop Access)**.

O NVDA é um leitor de tela gratuito e de código aberto para Windows, desenvolvido para permitir que pessoas cegas ou com baixa visão utilizem computadores por meio de informações apresentadas em voz sintetizada e outros recursos de acessibilidade.

Sua utilização em páginas web depende de uma estrutura HTML adequada e de informações que possam ser interpretadas corretamente pelo navegador e pela tecnologia assistiva.

### 4.1. Como o NVDA interpreta páginas web

Ao acessar uma página, o NVDA pode utilizar diferentes modos de interação.

**Modo de navegação (Browse Mode)**

Permite explorar o conteúdo da página como um documento estruturado.

O usuário pode navegar pelos títulos, links, textos, regiões e outros elementos disponíveis.

**Modo de foco (Focus Mode)**

É utilizado durante a interação com controles, como campos de texto, caixas de seleção e outros elementos de formulário.

Nesse modo, as teclas pressionadas podem ser encaminhadas diretamente ao controle em utilização, em vez de serem interpretadas como comandos de navegação do leitor de tela.

A alternância entre esses modos permite que o usuário leia o conteúdo e interaja com os controles da aplicação.

### 4.2. Práticas de acessibilidade consideradas

Para favorecer a compatibilidade com NVDA, o desenvolvimento deve observar os seguintes critérios:

**HTML semântico**

Utilizar elementos apropriados para cada finalidade, como:

- `header`
- `nav`
- `main`
- `section`
- `footer`
- `button`
- `label`

A semântica permite que tecnologias assistivas identifiquem melhor a estrutura e a função dos componentes.

**Hierarquia de títulos**

Organizar os títulos de maneira lógica, utilizando níveis como `h1`, `h2` e `h3`.

Isso facilita a navegação por seções utilizando os comandos de navegação do NVDA.

**Identificação dos campos**

Cada campo de entrada deve possuir uma identificação compreensível.

Sempre que aplicável, utilizar a associação explícita entre `label` e `input`, por meio dos atributos `for` e `id`.

Exemplo:

```html
<label for="habit-name">
    Nome do hábito
</label>

<input
    type="text"
    id="habit-name"
    name="habit-name"
>
```

Dessa maneira, o leitor de tela consegue identificar o propósito do campo durante a navegação.

**Navegação pelo teclado**

Os recursos da aplicação devem ser acessíveis sem depender exclusivamente do mouse.

A tecla `Tab` permite avançar entre controles interativos, enquanto `Shift + Tab` permite retornar ao controle anterior.

Botões e outros controles nativos devem manter seu comportamento convencional de teclado.

**Indicação visual de foco**

O elemento que recebe o foco do teclado deve possuir uma indicação visual perceptível.

Isso auxilia usuários que navegam sem mouse e também beneficia pessoas com baixa visão.

**Comunicação de mensagens dinâmicas**

Quando uma ação provocar uma alteração importante na interface, como a confirmação de uma operação ou a apresentação de um erro, essa informação deverá ser disponibilizada às tecnologias assistivas.

Recursos como `role="status"`, `role="alert"` e regiões `aria-live` podem ser utilizados adequadamente para comunicar essas alterações.

**Imagens e elementos gráficos**

Imagens informativas devem possuir descrições alternativas adequadas por meio do atributo `alt`.

Elementos puramente decorativos não devem gerar informações desnecessárias durante a leitura da página.

### 4.3. Como deve ser realizada a validação com NVDA?

A compatibilidade não deve ser presumida apenas pela utilização de HTML5, CSS3 ou JavaScript.

Para verificar o comportamento da aplicação, recomenda-se realizar testes com o NVDA e um navegador compatível, como Google Chrome ou Mozilla Firefox.

A validação deve considerar:

1. Abrir a aplicação com o NVDA ativado.
2. Verificar se o título e a organização geral da página são anunciados corretamente.
3. Percorrer os títulos e as seções utilizando a navegação rápida.
4. Percorrer todos os controles utilizando `Tab` e `Shift + Tab`.
5. Verificar a identificação dos campos e botões.
6. Testar a utilização dos controles sem recorrer ao mouse.
7. Verificar se mensagens de confirmação e erros são anunciadas.
8. Confirmar que nenhuma interação impede a continuidade da navegação.

O objetivo é garantir que a experiência de utilização seja compreensível tanto para usuários que navegam visualmente quanto para aqueles que utilizam leitores de tela.

**Nota de acessibilidade:** a compatibilidade deve ser avaliada por testes reais com tecnologias assistivas. Não se deve declarar conformidade integral com NVDA ou WCAG sem uma verificação técnica apropriada.

---

## 5. Tecnologias utilizadas

| Tecnologia | Aplicação no projeto |
|---|---|
| HTML5 | Estrutura e organização dos elementos da página. |
| CSS3 | Estilização, apresentação visual e adaptação da interface. |
| JavaScript | Implementação das interações e lógica da aplicação. |
| NVDA | Tecnologia assistiva considerada nos critérios de acessibilidade. |

## 6. Manutenção e evolução

O Habit Tracker é um projeto educacional que pode receber melhorias progressivas conforme novas necessidades sejam identificadas.

Sua evolução deve considerar:

- Organização e legibilidade do código.
- Manutenção da separação entre HTML, CSS e JavaScript.
- Revisão das interações.
- Verificação de compatibilidade entre navegadores.
- Testes de navegação por teclado.
- Validação com NVDA.
- Aperfeiçoamento da experiência de utilização.

A manutenção deve preservar a clareza estrutural e evitar alterações que prejudiquem a acessibilidade da interface.

## 7. Responsabilidade pelo desenvolvimento

**Desenvolvido por Arthur Santos Lopes**

Aluno do curso **Programador Full-Stack — Jovem Aprendiz**, no SENAI-RS, unidade de Santa Cruz do Sul.

O projeto foi desenvolvido como uma aplicação educacional de desenvolvimento web, com o propósito de aplicar conhecimentos de HTML5, CSS3 e JavaScript na construção de um painel digital de acompanhamento de hábitos.

A proposta também considera a importância da acessibilidade na construção de aplicações web, buscando proporcionar uma experiência de utilização mais inclusiva e compatível com tecnologias assistivas.

---

## 8. Referências técnicas de acessibilidade

As orientações de acessibilidade devem considerar a documentação oficial e os padrões internacionais:

- NVDA — Guia oficial do usuário: https://www.nvaccess.org/files/nvda/documentation/userGuide.html
- W3C WAI — Identificação de controles de formulários: https://www.w3.org/WAI/tutorials/forms/labels/
- W3C WAI — Estruturação de páginas: https://www.w3.org/WAI/tutorials/page-structure/
- W3C WCAG — Acessibilidade por teclado: https://www.w3.org/WAI/WCAG22/Understanding/keyboard
- W3C WCAG — Comunicação de mensagens de estado: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html

---

**Projeto:** Habit Tracker — Painel Educacional de Controle de Hábitos

**Tecnologias:** HTML5, CSS3 e JavaScript

**Desenvolvimento:** Arthur Santos Lopes

**Instituição de formação:** SENAI-RS — Santa Cruz do Sul

*Documentação técnica e descritiva do projeto educacional Habit
