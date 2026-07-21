// ============================================================
//  MERECIMENTO — JORNADA COMPLETA
//  Versão 2.0 — implementação definitiva
// ============================================================

// ─── CARDS DATA (63 practices) ───────────────────────────────
const cardsData = [
  // FASE 1 — Práticas 1-21
  { id:1,  title:"O Despertar da Permissão",          question:"Se eu realmente acreditasse que o Universo deseja me presentear sem exigir nada em troca, qual seria o meu maior medo? O que eu sinto que perderia se simplesmente dissesse 'sim' para receber agora?", release:"Eu reconheço a barreira invisível que construí para me proteger da grandeza. Eu libero e Espelho à Matriz Divina o medo de que o receber me torne vulnerável ou egoísta. Eu dou permissão a mim mesmo(a) para abrir a primeira porta da abundância sem culpa. Espelho à Matriz Divina.", phase:1 },
  { id:2,  title:"A Cura do Esforço Exaustivo",       question:"Onde eu aprendi que só mereço aquilo que me custa suor, dor e exaustão? Qual parte de mim ainda acredita que a facilidade é um sinal de que algo está errado ou de que sou menos valioso(a)?", release:"Eu dissolvo a crença de que o sofrimento é o único caminho para a recompensa. Eu entrego e Espelho à Matriz Divina o vício no esforço e a exaustão que carrego como um troféu. Eu me abro para a facilidade e o fluxo natural da vida. Espelho à Matriz Divina.", phase:1 },
  { id:3,  title:"O Fim da Dívida Invisível",         question:"O que me faz sentir que devo algo, a ponto de bloquear o meu próprio brilho? Se eu receber tudo o que desejo, o que me faz temer ofender ou deixar alguém para trás com o meu sucesso?", release:"Eu quebro os contratos de dívida invisível que me mantêm pequeno(a). Eu entrego e Espelho à Matriz Divina o peso da lealdade ao sofrimento alheio. Eu aceito que meu sucesso e minha alegria são a maior contribuição que posso dar ao mundo. Espelho à Matriz Divina.", phase:1 },
  { id:4,  title:"O Sacrifício do Ego",               question:"Em que lugar das minhas profundezas eu ainda acredito que o sofrimento é a única moeda de troca aceitável para a minha existência? Qual parte de mim teme que, se eu simplesmente receber sem esforço, eu perderei o meu valor diante do mundo ou a minha conexão com aqueles que ainda sofrem?", release:"Eu reconheço a face da minha Sombra que se alimenta do sacrifício para se sentir digna. Eu libero e Espelho à Matriz Divina a ilusão de que minha escassez serve a alguém ou que minha dor me torna mais 'santo'. Entrego e Espelho à Matriz Divina essa necessidade de barganhar com a vida. No lugar do esforço, eu escolho a fluidez. Espelho à Matriz Divina.", phase:1 },
  { id:5,  title:"A Dívida com o Passado",            question:"A quem, no meu sistema familiar ou na minha história, eu ainda estou tentando ser leal através da minha escassez? Existe em mim um medo infantil de que, ao receber em abundância, eu esteja 'traindo' aqueles que vieram antes de mim e que não tiveram o mesmo acesso? Onde eu confundo amor com repetição de sofrimento?", release:"Eu reconheço que a minha carência não cura a dor dos meus antepassados. Eu entrego e Espelho à Matriz Divina a necessidade de carregar pesos que não são meus para me sentir pertencente. Libero e Espelho à Matriz Divina a confusão entre amor e repetição de sofrimento. Eu escolho honrar minha linhagem através da minha felicidade. Espelho à Matriz Divina.", phase:1 },
  { id:6,  title:"O Medo do Vazio e da Inveja",       question:"Qual é o tamanho do pavor que sinto de que a 'conta chegue' logo após uma grande alegria? Eu me saboto e bloqueio o meu receber porque temo o olhar de julgamento alheio ou porque acredito que a felicidade é um recurso escasso que estou 'roubando' de alguém? Onde eu ainda vejo a Fonte Universal como um juiz punitivo e não como Fonte Infinita?", release:"Eu dissolvo a crença de que a alegria atrai a tragédia. Eu entrego e Espelho à Matriz Divina o vício emocional no sacrifício como forma de proteção. Libero e Espelho à Matriz Divina a ideia de que o Universo exige pagamento em sofrimento. Eu me abro para a graça que não exige contrapartida. Espelho à Matriz Divina.", phase:1 },
  { id:7,  title:"O Medo da \"Conta\" Invisível",     question:"Qual é o terror oculto que surge quando imagino que tudo deu certo para mim agora, sem que eu tenha oferecido nenhum sacrifício em troca? Eu acredito, em algum nível arcaico da minha psique, que a Fonte Universal é um mercador que cobra juros de dor pelo meu sucesso? O que eu temo perder se eu não tiver que lutar para ganhar?", release:"Eu dissolvo e Espelho à Matriz Divina, a crença de que a alegria sem esforço atrai a tragédia. Eu libero e também Espelho à Matriz Divina o vício emocional no sacrifício como forma de proteção e me abro para a graça que não exige pagamento. Espelho à Matriz Divina.", phase:1 },
  { id:8,  title:"A Somatização do Bloqueio",         question:"Em que ponto exato do meu corpo eu sinto um 'nó', um aperto ou uma retração quando recebo um elogio profundo ou um valor inesperado? O que esse bloqueio físico está tentando 'barrar' para me manter seguro no conhecido? De onde pode vir a voz que diz, dentro desse aperto, que isso não me pertence?", release:"Eu dou permissão para que minhas células relaxem a guarda. Eu entrego e Espelho à Matriz Divina a tensão que sustenta a identidade da carência. Libero e Espelho à Matriz Divina a voz interna que diz que o bem não me pertence. Eu permito que o meu corpo seja um canal seguro para a recepção. Espelho à Matriz Divina.", phase:1 },
  { id:9,  title:"A Máscara da Humildade",            question:"Onde eu confundo 'ser humilde' com 'ser pequeno'? Eu uso a minha escassez como uma máscara para ser aceito ou amado, temendo que, se eu brilhar e receber plenamente, eu me torne um alvo ou perca a conexão com aqueles que escolhem não expandir?", release:"Eu reconheço que me diminuir não eleva ninguém. Eu entrego e Espelho à Matriz Divina o pacto de mediocridade que fiz para me sentir seguro. Libero e Espelho à Matriz Divina o medo de ser 'demais' para o mundo. Eu permito que minha luz ocupe o espaço que lhe é de direito. Espelho à Matriz Divina.", phase:1 },
  { id:10, title:"O Medo da \"Húbris\" e o Castigo",  question:"Qual parte de mim ainda acredita que a vida é um jogo de soma zero, onde para eu ganhar algo, o destino precisa me tirar outra coisa em troca? Eu bloqueio o meu receber para 'evitar' um desastre futuro que meu medo projeta como pagamento?", release:"Eu dissolvo a ilusão de que a minha felicidade é um empréstimo que a vida cobrará com juros de dor. Eu entrego e Espelho à Matriz Divina o vício emocional de esperar pelo próximo tombo. Libero e Espelho à Matriz Divina o medo da retaliação invisível. Eu aceito que a abundância é um fluxo infinito que não me deve nada e ao qual eu nada devo. Eu recebo e desfruto com segurança. Espelho à Matriz Divina.", phase:1 },
  { id:11, title:"A Lealdade ao Sofrimento Materno/Paterno", question:"Ao fechar as mãos para o receber, a quem eu estou tentando 'fazer companhia' na dor? Eu sinto que receber o que meus pais não receberam seria uma forma de desonra ou superioridade sobre eles?", release:"Eu honro o destino de quem veio antes, mas escolho não repeti-lo. Eu entrego e Espelho à Matriz Divina a necessidade de sofrer para pertencer à minha linhagem. Libero e Espelho à Matriz Divina o peso da escassez ancestral. Eu sou livre para florescer em nome de todos. Espelho à Matriz Divina.", phase:1 },
  { id:12, title:"O Complexo do Impostor Arquetípico",question:"Qual é o segredo que eu guardo sobre mim mesmo que me faz sentir uma 'fraude' ao receber algo bom? O que eu acredito ser tão 'errado' em minha essência que torna qualquer bênção um erro de entrega do Universo?", release:"Eu dissolvo a imagem de que sou um erro ou um acidente. Eu entrego e Espelho à Matriz Divina a sensação de ser indigno da bondade da vida. Libero e Espelho à Matriz Divina a culpa por falhas do passado. Eu acolho minha humanidade e recebo o que me pertence por direito de existência. Espelho à Matriz Divina.", phase:1 },
  { id:13, title:"O Controle como Bloqueio",          question:"Eu tento controlar a forma como as coisas devem chegar a mim porque, no fundo, eu não confio no fluxo da vida? Onde a minha rigidez e o meu planejamento excessivo estão sufocando os milagres que não têm data marcada para acontecer?", release:"Eu solto as rédeas do 'como'. Eu entrego e Espelho à Matriz Divina a necessidade de ditar as regras para o Divino. Libero e Espelho à Matriz Divina o medo de ser surpreendido negativamente. Eu me coloco na postura receptiva de quem confia no fluxo. Espelho à Matriz Divina.", phase:1 },
  { id:14, title:"A Compulsão pela Busca",            question:"Onde eu me viciei na jornada de 'tentar curar' e esqueci de simplesmente usufruir? Eu uso a terapia, os cursos, etc. como uma forma de adiar o meu receber, acreditando que 'ainda falta limpar algo' antes de ser digno da abundância?", release:"Eu reconheço que a busca constante pode ser um escudo contra a entrega. Eu entrego e Espelho à Matriz Divina a crença de que algo em mim ainda está 'quebrado'. Libero e Espelho à Matriz Divina a necessidade de ser perfeito para colher os frutos. Eu recebo o que já está disponível agora. Espelho à Matriz Divina.", phase:1 },
  { id:15, title:"A Intolerância ao Prazer",          question:"Qual é o meu limite de bem-estar antes que eu comece a criar um problema para 'equilibrar' a balança? Eu suporto o prazer sem a necessidade de interrompê-lo com uma preocupação ou um julgamento sobre o futuro?", release:"Eu expando a minha capacidade de sustentar a alegria. Eu entrego e Espelho à Matriz Divina o medo de que o 'bom' dure pouco. Libero e Espelho à Matriz Divina a autossabotagem que surge após cada conquista. Eu autorizo o meu sistema nervoso a relaxar na segurança do prazer. Espelho à Matriz Divina.", phase:1 },
  { id:16, title:"O Corpo como Recipiente",           question:"Se o meu corpo fosse um cálice, qual é o tamanho da abertura que eu permito hoje? Onde eu contraio os meus músculos e fecho os meus poros para não ser 'invadido' pela bondade da vida, confundindo abertura com desproteção?", release:"Eu abro os portais do receber infinito em meu corpo. Eu entrego e Espelho à Matriz Divina a tensão que protege o meu coração do amor e da abundância. Libero e Espelho à Matriz Divina a memória celular de perigo ao receber. Eu permito que cada célula receba a nutrição da Fonte Universal. Espelho à Matriz Divina.", phase:1 },
  { id:17, title:"A Fantasia da Escassez Nobre",      question:"Em quais áreas eu ainda associo a falta de recursos com uma 'superioridade espiritual'? Eu temo que, ao ter muito, eu me torne 'igual aos outros' que eu julguei como superficiais ou egoístas?", release:"Eu quebro o voto de pobreza oculto que fiz para me sentir puro. Eu entrego e Espelho à Matriz Divina o julgamento contra quem prospera. Libero e Espelho à Matriz Divina a ideia de que a dor me torna mais 'espiritualizado'. A abundância é a minha natureza. Espelho à Matriz Divina.", phase:1 },
  { id:18, title:"O Receber do \"Nada\"",             question:"Eu consigo receber sem que haja um motivo, um porquê ou uma utilidade? Ou eu só me permito receber se for para ajudar alguém, para investir em algo ou para cumprir uma função?", release:"Eu me permito receber pelo simples prazer de existir. Eu entrego e Espelho à Matriz Divina a necessidade de justificar cada centavo ou cada carinho recebido. Libero e Espelho à Matriz Divina a utilidade como pré-requisito para o ganho. Eu recebo porque a Fonte jorra. Espelho à Matriz Divina.", phase:1 },
  { id:19, title:"A Sombra da \"Vítima Especial\"",   question:"Existe uma parte de mim que se sente 'especial' por sofrer tanto? Eu uso as minhas feridas e as minhas faltas como um troféu de resistência, temendo que, se eu receber tudo o que desejo, eu perderei a minha história de superação e me tornarei 'comum'?", release:"Eu abro mão do orgulho oculto na minha dor. Eu entrego e Espelho à Matriz Divina o vício em ser um mártir para ser visto. Libero e Espelho à Matriz Divina a necessidade de sofrer para ser digno. Eu permito que minha nova história seja escrita pela alegria. Espelho à Matriz Divina.", phase:1 },
  { id:20, title:"O Medo da Mudança de Identidade",  question:"Quem serei se eu não for mais a pessoa que 'luta por tudo'? Eu tenho medo do vazio que ficará quando a escassez for embora? Eu bloqueio o meu receber para não ter que lidar com a responsabilidade de ser alguém verdadeiramente potente e livre?", release:"Eu acolho o desconhecido. Eu entrego e Espelho à Matriz Divina o apego à identidade da carência. Libero e Espelho à Matriz Divina o medo de ser verdadeiramente potente. Eu me permito florescer sem amarras. Espelho à Matriz Divina.", phase:1 },
  { id:21, title:"A Projeção do Juiz",               question:"Onde eu ainda vejo a Fonte Universal como um pai severo ou uma mãe crítica que está sempre 'avaliando' se eu fiz o suficiente para ganhar um prêmio? Eu consigo perceber que esse juiz é apenas uma projeção das minhas vozes internas de cobrança?", release:"Eu retiro o chicote das mãos do meu Ego. Eu entrego e Espelho à Matriz Divina a imagem de um Universo punitivo. Libero e Espelho à Matriz Divina a necessidade de aprovação externa para prosperar. Eu me entrego ao fluxo da Fonte. Espelho à Matriz Divina.", phase:1 },

  // FASE 2 — Práticas 22-42
  { id:22, title:"A Resistência ao Desfrute Sem Culpa", question:"Por que eu sinto que preciso 'pagar' por um momento de felicidade com uma hora de preocupação logo em seguida? Onde eu aprendi que o prazer é perigoso ou que o descanso é preguiça? O que aconteceria se eu simplesmente desfrutasse, sem olhar para o relógio ou para a conta bancária mental?", release:"Eu me dou permissão para o desfrute puro. Eu entrego e Espelho à Matriz Divina o vínculo entre meu valor e minha produtividade. Libero e Espelho à Matriz Divina a culpa por descansar. Eu recebo o prazer como um nutriente da alma. Espelho à Matriz Divina.", phase:2 },
  { id:23, title:"A Reconciliação com a Falta",        question:"Eu consigo aceitar que a vida terá faltas e que isso não significa que eu 'fracassei' ou que 'não mereço'? Eu bloqueio o meu receber agora porque estou obcecado em preencher um buraco do passado que nunca será preenchido por coisas externas?", release:"Eu dissolvo e Espelho à Matriz Divina a ilusão de que a falta é um veredito sobre o meu merecimento ou um sinal de fracasso. Eu libero a obsessão em preencher o passado através do presente e abro mão da guarda que mantive sobre os meus 'buracos' internos. Eu me autorizo a ser preenchido pela vida, reconhecendo que a minha integridade não depende da ausência de faltas, mas da minha presença no agora. Espelho à Matriz Divina.", phase:2 },
  { id:24, title:"A Entrega Final",                    question:"O que aconteceria se, a partir de agora, eu parasse de tentar 'merecer' e simplesmente passasse a ser o canal por onde a vida se expressa? Se nunca foi sobre o que eu faço, mas sobre o quanto eu permito que a Fonte Universal atue através de mim, o que eu mudaria hoje?", release:"Eu desisto da guerra. Eu entrego e Espelho à Matriz Divina as armas do esforço excessivo. Libero e Espelho à Matriz Divina a resistência à minha própria natureza abundante. Eu apenas recebo. Eu apenas sou. Espelho à Matriz Divina.", phase:2 },
  { id:25, title:"O Esforço da Criança Produtiva",     question:"De onde vem a memória infantil de que o meu valor depende do quanto eu sou útil, perfeita ou faço pelos outros? O que faz a minha criança interna ainda acreditar que precisa se esgotar para ter o direito de ser vista e amada?", release:"Eu reconheço o cansaço de tentar comprar o afeto através da utilidade. Eu entrego e Espelho à Matriz Divina o registro de que o meu descanso gera abandono. Libero e Espelho à Matriz Divina o medo de não ser boa o suficiente apenas por existir. Eu me dou a permissão de receber sem precisar performar. Espelho à Matriz Divina.", phase:2 },
  { id:26, title:"A Culpa da Fartura",                 question:"O que me causa desconforto ou uma culpa quase religiosa quando a vida fica fácil, próspera e o dinheiro flui sem sacrifício? Onde aprendi que o dinheiro limpo e honrado só vem através do suor doloroso?", release:"Eu acolho a facilidade como o meu estado natural. Eu entrego e Espelho à Matriz Divina a culpa inconsciente por ter mais ou viver melhor que os meus antepassados. Libero e Espelho à Matriz Divina a associação entre escassez e integridade moral. Eu me abro para receber em abundância. Espelho à Matriz Divina.", phase:2 },
  { id:27, title:"O Medo do Controle Alheio",          question:"Qual memória da minha infância associou o ato de receber presentes ou ajuda a ficar 'devendo' algo a alguém ou ser manipulada? O que me faz preferir fazer tudo sozinha só para garantir que ninguém possa me cobrar nada depois?", release:"Eu limpo a distorção de que receber é perder a minha liberdade. Eu entrego e Espelho à Matriz Divina o medo de ficar em dívida emocional com o mundo. Libero e Espelho à Matriz Divina o escudo do 'eu faço tudo sozinha'. Eu aceito o suporte e a generosidade alheia com o coração leve. Espelho à Matriz Divina.", phase:2 },
  { id:28, title:"A Lealdade à Escassez do Clã",       question:"O que faz a minha criança interior sentir que enriquecer, prosperar ou viver no luxo é uma forma de traição ou exclusão da minha família de origem? Onde eu decidi repetir as dificuldades deles apenas para continuar pertencendo ao clã?", release:"Eu honro a história dos meus pais vivendo em fartura. Eu entrego e Espelho à Matriz Divina o pacto oculto de sofrer igual aos meus para me sentir aceita. Libero e Espelho à Matriz Divina o medo de ser excluída por ser próspera. Eu sou livre para florescer além do padrão familiar. Espelho à Matriz Divina.", phase:2 },
  { id:29, title:"O Vício no Ritmo do Caos",           question:"O que faz o meu sistema nervoso estranhar a paz, a estabilidade e a calmaria quando tudo está dando certo? Qual parte de mim foi condicionada na infância a só se mover sob o estresse de resolver incêndios e problemas?", release:"Eu me permito sentir que a paz é um lugar seguro. Eu entrego e Espelho à Matriz Divina o vício na adrenalina dos problemas e das preocupações. Libero e Espelho à Matriz Divina a necessidade de criar crises do nada para me sentir viva. Eu acolho a tranquilidade do fluxo. Espelho à Matriz Divina.", phase:2 },
  { id:30, title:"O Medo da Mudança de Identidade",   question:"Quem eu serei se a minha vida se tornar leve, rica e totalmente preenchida? O que me gera tanto medo de abrir mão da identidade daquela que 'vence os obstáculos' e 'aguenta firme' para apenas desfrutar do que já está disponível?", release:"Eu me permito ir além da persona que sobrevive. Eu entrego e Espelho à Matriz Divina o apego ao papel de vítima das circunstâncias ou de guerreira exausta. Libero e Espelho à Matriz Divina o pavor do desconhecido na calmaria. Eu aceito a minha nova identidade na abundância. Espelho à Matriz Divina.", phase:2 },
  { id:31, title:"A Intolerância ao Elogio e ao Amor",question:"O que me gera uma necessidade automática de justificar, diminuir ou recusar um elogio ou um gesto de amor verdadeiro? O que a minha criança interior aprendeu sobre não ser merecedora de admiração gratuita?", release:"Eu sou digna de ser amada e apreciada pelo que sou. Eu entrego e Espelho à Matriz Divina o desconforto e a esquiva diante do afeto genuíno. Libero e Espelho à Matriz Divina o hábito de apontar meus defeitos quando sou elogiada. Eu simplesmente recebo, agradeço e acolho. Espelho à Matriz Divina.", phase:2 },
  { id:32, title:"O Bloqueio do Desfrute e do Lazer", question:"O que ativa essa urgência interna ou uma culpa paralisante quando tento tirar um dia de folga ou gastar dinheiro comigo em algo que não seja uma obrigação? Onde aprendi que o prazer sem utilidade prática é um erro?", release:"O desfrute é o meu direito de nascença. Eu entrego e Espelho à Matriz Divina a cobrança interna por estar sempre produzindo algo. Libero e Espelho à Matriz Divina a rigidez que me impede de saborear a vida. Eu me dou o direito de descansar e brincar sem culpa. Espelho à Matriz Divina.", phase:2 },
  { id:33, title:"A Escolha por Migalhas Afetivas",   question:"Qual parte da minha criança interior aceita migalhas de atenção, tempo ou afeto nos relacionamentos por acreditar no fundo que pedir por transbordamento é exigir demais da vida?", release:"Eu sou feita para o transbordamento e não para a escassez. Eu entrego e Espelho à Matriz Divina o hábito de me contentar com o pouco por medo de ficar sem nada. Libero e Espelho à Matriz Divina a crença de que o amor pleno não está disponível para mim. Eu mereço reciprocidade. Espelho à Matriz Divina.", phase:2 },
  { id:34, title:"O Dinheiro que Entra e Desaparece", question:"Quais mecanismos me fazem dar um jeito de esvaziar a conta através de imprevistos, contas ou compras impulsivas toda vez que o meu saldo bancário ultrapassa um determinado limite de conforto?", release:"Eu sou um canal seguro para reter e multiplicar a riqueza. Eu entrego e Espelho à Matriz Divina o termostato financeiro baixo que me faz expulsar a abundância. Libero e Espelho à Matriz Divina a necessidade de esvaziar os meus bolsos para me manter no padrão conhecido. Espelho à Matriz Divina.", phase:2 },
  { id:35, title:"O Corpo que Carrega o Peso do Mundo",question:"Quais ganhos ocultos me fazem usar o meu corpo físico (através do cansaço crônico, gordura de proteção ou dores) como um escudo para sinalizar ao mundo que eu já estou sobrecarregada?", release:"O meu corpo é um templo de leveza e não um burro de carga. Eu entrego e Espelho à Matriz Divina o peso emocional que transformei em sintoma físico. Libero e Espelho à Matriz Divina a necessidade de adoecer ou engordar para colocar limites nos outros. Eu escolho a vitalidade. Espelho à Matriz Divina.", phase:2 },
  { id:36, title:"O Medo de Incomodar com a Própria Luz", question:"O que me faz ter medo de ofuscar, entristecer ou diminuir alguém se eu assumir toda a minha potência, beleza, riqueza e sucesso? O que me faz escolher me manter 'morna' para não despertar incômodo ao meu redor?", release:"A minha luz não diminui ninguém, ela ilumina o caminho. Eu entrego e Espelho à Matriz Divina o medo de despertar a inveja ou o desconforto alheio. Libero e Espelho à Matriz Divina o hábito de me encolher para caber nas expectativas dos outros. Eu brilho sem reservas. Espelho à Matriz Divina.", phase:2 },
  { id:37, title:"O Adiamento das Próprias Vontades",  question:"Quais amarras me fazem colocar minhas necessidades, meus sonhos e meus autocuidados sempre em último lugar na lista, adiados pelo bem-estar de todos os outros? Onde eu aprendi que me colocar em primeiro lugar é egoísmo?", release:"Se transbordar em mim, haverá mais para o mundo. Eu entrego e Espelho à Matriz Divina o vício em me colocar em segundo plano. Libero e Espelho à Matriz Divina o falso altruísmo que esconde o medo da rejeição. Eu me priorizo com amor e respeito. Espelho à Matriz Divina.", phase:2 },
  { id:38, title:"A Rejeição das Oportunidades Fáceis",question:"O que me leva a desconfiar, complicar ou recusar caminhos profissionais e financeiros que se apresentam de forma simples, fluida e sem nós? Qual crença me diz que se não for difícil, não tem valor?", release:"Eu aceito os presentes da vida com leveza. Eu entrego e Espelho à Matriz Divina a desconfiança crônica diante da facilidade. Libero e Espelho à Matriz Divina o vício em caminhos tortuosos e burocráticos para provar o meu mérito. O fluxo é simples. Espelho à Matriz Divina.", phase:2 },
  { id:39, title:"A Criança Invisível no Trabalho",    question:"O que me prende a salários baixos, falta de reconhecimento ou cargos abaixo da minha capacidade se eu entrego resultados brilhantes no meu trabalho? Qual parte de mim ainda espera que o 'chefe/pai' note o meu valor sem eu precisar me posicionar?", release:"Eu assumo o valor real da minha entrega. Eu entrego e Espelho à Matriz Divina a postura infantil de esperar passivamente pelo reconhecimento do outro. Libero e Espelho à Matriz Divina a necessidade de validação externa para cobrar o que é justo. Eu me posiciono no meu valor. Espelho à Matriz Divina.", phase:2 },
  { id:40, title:"O Pânico de Pedir Ajuda",            question:"O que acontece no meu estômago quando eu me vejo na necessidade de pedir ajuda, um favor ou um apoio a alguém? O que faz a minha mente ler o ato de pedir como humilhação ou fraqueza extrema?", release:"Pedir ajuda é um ato de coragem e conexão humana. Eu entrego e Espelho à Matriz Divina o orgulho ferido que me isola em uma falsa autossuficiência. Libero e Espelho à Matriz Divina a vergonha de expor as minhas vulnerabilidades. Eu aceito ser sustentada pela teia da vida. Espelho à Matriz Divina.", phase:2 },
  { id:41, title:"O Vício em Salvar os Outros",        question:"O que alimenta essa necessidade compulsiva de resolver a vida financeira ou emocional de parceiros, amigos e familiares, mesmo quando eles não me pediram ou continuam no mesmo padrão?", release:"Eu devolvo a cada um a dignidade do seu próprio destino. Eu entrego e Espelho à Matriz Divina o papel de salvadora que adotei para me sentir importante ou amada. Libero e Espelho à Matriz Divina a intromissão no aprendizado alheio. Eu foco na minha própria abundância. Espelho à Matriz Divina.", phase:2 },
  { id:42, title:"A Escassez de Tempo",                question:"O que sustenta essa eterna sensação de falta de tempo, correndo de um lado para o outro mesmo quando não há urgência real? O que a minha criança interna tanto teme escutar se ela parar e silenciar por uma hora?", release:"O tempo trabalha a meu favor e eu habito o momento presente. Eu entrego e Espelho à Matriz Divina o desespero interno mascarado de pressa e excesso de compromissos. Libero e Espelho à Matriz Divina o medo de encarar o meu próprio vazio. Eu descanso na quietude. Espelho à Matriz Divina.", phase:2 },

  // FASE 3 — Práticas 43-63
  { id:43, title:"A Trava dos Bens Materiais",         question:"O que me leva a guardar as minhas melhores roupas, perfumes e louças para uma 'ocasião especial' que nunca chega, enquanto uso o pior no meu dia a dia?", release:"A ocasião especial é o milagre de estar viva hoje. Eu entrego e Espelho à Matriz Divina a mentalidade de escassez que me faz guardar o bom para o futuro. Libero e Espelho à Matriz Divina a sensação de não ser digna de desfrutar do melhor agora. Eu uso e celebro o que tenho. Espelho à Matriz Divina.", phase:3 },
  { id:44, title:"O Bloqueio da Beleza e do Autoamor", question:"O que engatilha esse desconforto ou futilidade ao investir tempo e dinheiro na minha imagem, no meu guarda-roupa ou na minha autoestima? Onde aprendi que cuidar de mim me tornaria uma pessoa egoísta ou pecaminosa?", release:"A beleza é a expressão da harmonia divina em mim. Eu entrego e Espelho à Matriz Divina os julgamentos que associam o autocuidado à vaidade excessiva ou culpa. Libero e Espelho à Matriz Divina a negligência com a minha própria imagem. Eu me acolho e me embelezo com alegria. Espelho à Matriz Divina.", phase:3 },
  { id:45, title:"O Grande Salto: O Direito ao Transbordo", question:"Se o Universo é infinitamente abundante e eu sou parte dele, o que me faz continuar insistindo em viver na conta exata, medindo o amor, o dinheiro e a felicidade por medo de faltar?", release:"Eu sou a própria expressão do fluxo infinito. Eu entrego e Espelho à Matriz Divina a ilusão da falta, do limite e do controle. Libero e Espelho à Matriz Divina o medo de que o bem acabe se eu desfrutar demais. Eu confio, eu recebo e eu transbordo hoje e sempre. Espelho à Matriz Divina.", phase:3 },
  { id:46, title:"O Direito de Existir",               question:"O que eu sinto quando imagino que o meu espaço no mundo não precisa ser justificado pelo meu esforço constante? Como seria se eu simplesmente existisse e recebesse pelo fato de estar viva?", release:"Eu desfaço a mentira de que preciso pagar pelo ar que respiro ou pelo espaço que ocupo. Eu entrego e Espelho à Matriz Divina toda cobrança interna de utilidade. Eu me dou permissão para apenas ser. Espelho à Matriz Divina.", phase:3 },
  { id:47, title:"A Ilusão do Ganho Futuro",           question:"O que me impede de receber e ser feliz agora, antes de alcançar uma meta futura? Como eu posso viver a plenitude hoje, sem projetar a felicidade num horizonte distante?", release:"Eu desisto de adiar a minha abundância. Eu entrego e Espelho à Matriz Divina a ilusão do 'quando'. Eu abro as comportas do meu receber no único tempo que existe: o agora. Espelho à Matriz Divina.", phase:3 },
  { id:48, title:"O Medo do Brilho Solitário",         question:"Como seria prosperar e brilhar livremente, permitindo que a minha luz inspire as pessoas ao meu redor? O que eu experimento ao soltar o receio de incomodar ou afastar os outros com o meu crescimento?", release:"Eu libero o medo de brilhar e de me destacar. Eu entrego e Espelho à Matriz Divina o pacto silencioso de mediocridade. Minha abundância é um convite para que outros também expandam. Espelho à Matriz Divina.", phase:3 },
  { id:49, title:"A Moeda do Cuidado Alheio",          question:"O que me impede de aceitar ajuda e ser cuidada quando estou saudável, forte e alegre? Como seria permitir que o cuidado chegue até mim em todos os momentos?", release:"Eu escolho receber em plena saúde, força e alegria. Eu entrego e Espelho à Matriz Divina a necessidade de adoecer ou sofrer para obter atenção e apoio. Eu sou digno de cuidado a todo momento. Espelho à Matriz Divina.", phase:3 },
  { id:50, title:"O Julgamento da Abundância",         question:"O que me impede de abençoar a facilidade, o amor e a riqueza na vida das outras pessoas? Como eu posso celebrar o fluxo abundante ao meu redor para que ele também flua em minha direção?", release:"Eu abençoo a facilidade e a riqueza na vida de cada ser. Eu entrego e Espelho à Matriz Divina a inveja oculta vestida de crítica moral. Eu me abro para a mesma fluidez. Espelho à Matriz Divina.", phase:3 },
  { id:51, title:"A Lealdade à Escassez Cultural",     question:"Como seria abraçar a espiritualidade acompanhada da mais pura abundância material? O que sinto ao reconhecer que a expansão e a riqueza fortalecem o meu ser e a minha alma?", release:"Eu desfaço o voto coletivo de pobreza e sofrimento. Eu entrego e Espelho à Matriz Divina a falsa associação entre dor e santidade. O fluxo do Universo é infinito e eu faço parte dele. Espelho à Matriz Divina.", phase:3 },
  { id:52, title:"A Cobrança do Equilíbrio Perfeito",  question:"O que acontece quando eu apenas recebo, no silêncio e na gratidão, sem a urgência de retribuir imediatamente? Como seria permitir aos outros a alegria de me ofertar algo livremente?", release:"Eu aprendo a receber com as mãos abertas e o coração em paz, sem pressa de pagar. Eu entrego e Espelho à Matriz Divina a pressa de compensação. Eu permito que o fluxo circule naturalmente. Espelho à Matriz Divina.", phase:3 },
  { id:53, title:"O Medo da Perda",                    question:"Como seria confiar que o fluxo do Universo é inesgotável e constante? O que me impede de abraçar o amor e a prosperidade hoje, soltando o receio de perdas futuras?", release:"Eu dissolvo o medo da perda futura. Eu entrego e Espelho à Matriz Divina a ansiedade de controle sobre o amanhã. Eu recebo o que está aqui hoje e confio que a Fonte é inesgotável. Espelho à Matriz Divina.", phase:3 },
  { id:54, title:"A Fantasia da Autossuficiência",     question:"O que sinto ao baixar as minhas armaduras de autossuficiência e permitir que a teia da vida me sustente? Como seria experienciar a vulnerabilidade como uma porta de entrada para conexões profundas?", release:"Eu abro mão do escudo da autossuficiência rígida. Eu entrego e Espelho à Matriz Divina o orgulho que me isola. Eu me permito ser apoiado, amparado e nutrido pela teia da vida. Espelho à Matriz Divina.", phase:3 },
  { id:55, title:"O Peso dos Elogios",                 question:"Como seria receber um elogio com pura leveza e gratidão, acolhendo o meu próprio valor? O que eu experimento ao celebrar as minhas vitórias sem medo das expectativas?", release:"Eu recebo os elogios e o reconhecimento com gratidão e leveza. Eu entrego e Espelho à Matriz Divina a necessidade de me diminuir. Eu aceito o meu valor sem o peso da perfeição. Espelho à Matriz Divina.", phase:3 },
  { id:56, title:"A Necessidade de Barganhar",         question:"O que me impede de aceitar o amor que é doado livremente, sem favores, barganhas ou autoanulação? Como seria me sentir digna de ser amada apenas por ser quem eu sou?", release:"Eu cesso toda barganha por afeto. Eu entrego e Espelho à Matriz Divina o medo de não ser amado pelo que sou. Eu me abro para o amor que é doado sem condições ou cobranças. Espelho à Matriz Divina.", phase:3 },
  { id:57, title:"A Culpa da Facilidade",              question:"Como seria acolher a facilidade e a leveza como o estado natural da vida? O que acontece no meu coração quando percebo que a dor e o suor não são os únicos caminhos para o valor real?", release:"Eu acolho a facilidade como o estado natural do Universo. Eu entrego e Espelho à Matriz Divina a valorização da dor e do esforço extremo. Eu escolho a fluidez e a leveza. Espelho à Matriz Divina.", phase:3 },
  { id:58, title:"A Sombra da Autocrítica",            question:"O que eu ouço quando silenciosamente acolho a minha suficiência, sem a voz da autocrítica? Como seria abraçar os presentes que o Universo me oferece, acolhendo as minhas imperfeições com amor?", release:"Eu silencio a voz da autocrítica destrutiva. Eu entrego e Espelho à Matriz Divina a imagem de um Universo de amor e aceitação. Eu sou suficiente hoje. Espelho à Matriz Divina.", phase:3 },
  { id:59, title:"O Teto Financeiro",                  question:"Como eu posso expandir o meu recipiente emocional para reter e multiplicar recursos com conforto e fluidez? O que sinto ao reconhecer que o Universo deseja transbordar através de mim?", release:"Eu expando o meu recipiente financeiro e emocional. Eu entrego e Espelho à Matriz Divina todo limite auto-imposto de riqueza. Eu me abro para reter e multiplicar a abundância. Espelho à Matriz Divina.", phase:3 },
  { id:60, title:"A Lealdade à Escassez Materna",      question:"O que aconteceria se eu honrasse a história da minha mãe transbordando em amor e alegria abundante? Como seria florescer e viver com facilidade, honrando e abençoando o caminho dela?", release:"Eu honro a história da minha mãe sendo feliz e abundante. Eu entrego e Espelho à Matriz Divina a culpa por ter mais facilidade do que ela. Eu escolho florescer em abundância. Espelho à Matriz Divina.", phase:3 },
  { id:61, title:"A Lealdade ao Esforço Paterno",      question:"Como eu posso honrar o caminho dos meus pais acolhendo a leveza e a paz na minha própria jornada? O que sinto ao permitir que o sucesso flua até mim de maneira pacífica e gentil?", release:"Eu honro o trabalho e a dedicação do meu pai escolhendo a leveza e a prosperidade fluida. Eu entrego e Espelho à Matriz Divina o vício no esforço exaustivo. Eu escolho a paz. Espelho à Matriz Divina.", phase:3 },
  { id:62, title:"O Medo do Julgamento Divino",        question:"Como seria experimentar a divindade como pura Fonte de amor incondicional, livre de punições ou cobranças ocultas? O que me impede de repousar nesse amor infinito?", release:"Eu dissolvo a imagem de um Deus punitivo e barganhador. Eu entrego e Espelho à Matriz Divina o medo do castigo invisível. A Fonte é puro amor e doação incondicional. Espelho à Matriz Divina.", phase:3 },
  { id:63, title:"A Sombra da Humilhação",             question:"Como eu posso redescobrir a beleza e a coragem contidas no ato de receber auxílio? O que sinto ao permitir que a minha comunidade cuide de mim e seja uma extensão do meu próprio apoio?", release:"Eu reconheço a coragem e a beleza em pedir ajuda. Eu entrego e Espelho à Matriz Divina o medo da humilhação e a vergonha de ser vulnerável. Eu sou parte de uma comunidade. Espelho à Matriz Divina.", phase:3 },
];

// ─── 21 DOORS DATA ────────────────────────────────────────────
const doorsData = {
  "1": {
    title: "O Portal da Permissão",
    body: "Ao cruzar este primeiro portal, sinta a energia do alívio envolver seu peito. Você está escolhendo abrir mão da necessidade de controlar tudo e permitindo que o fluxo natural do bem-estar encontre o seu endereço.",
    engagement: "Sua jornada está apenas começando, mas a constância já está abrindo caminhos invisíveis. Continue firme! O que mais o aguarda no próximo portal?"
  },
  "2": {
    title: "A Fonte da Autoaceitação",
    body: "Aqui, você se desfaz do peso das cobranças excessivas. Respire fundo e repita: 'Eu sou o suficiente exatamente como sou agora, e mereço repousar na segurança de quem sou.'",
    engagement: "A cada dia de prática, as barreiras da autocrítica caem. Mantenha sua prática diária para revelar o próximo portal sagrado!"
  },
  "3": {
    title: "O Templo da Fluidez",
    body: "Neste portal, a rigidez se dissolve em água límpida. Você aprende a navegar com a correnteza da vida, confiando que cada curva traz exatamente o aprendizado e a abundância de que você precisa.",
    engagement: "O fluxo não para quando você se compromete consigo mesma. Continue praticando para descobrir novos mistérios de leveza!"
  },
  "4": {
    title: "O Altar do Merecimento",
    body: "Sinta a luz dourada deste altar preenchendo suas células. O receber não é um prêmio pelo seu suor, é o seu estado natural de existência. Permita-se ser nutrida sem precisar pagar com esforço.",
    engagement: "Sua constância é a chave que abre essas portas secretas. Continue seu ciclo diário de evolução e destranque o próximo segredo!"
  },
  "5": {
    title: "O Portal da Conexão Vital",
    body: "Conecte-se com a teia invisível que sustenta toda a vida. Você não está sozinha e não precisa carregar o mundo nas costas. Há suporte, amor e facilidade disponíveis para você agora.",
    engagement: "Você está evoluindo a cada dia. Mantenha o ritmo e deixe-se surpreender pelo que o próximo portal vai revelar!"
  },
  "6": {
    title: "A Câmara do Silêncio Nutritivo",
    body: "Entre e repouse no silêncio sagrado. É na quietude da mente que as sementes do seu receber ganham força para brotar. Não há nada a fazer aqui, apenas respirar e ser.",
    engagement: "A paz é um hábito que se cultiva diariamente. Continue sua prática constante e prepare-se para o próximo portal de poder!"
  },
  "7": {
    title: "O Portal da Liberdade Ancestral",
    body: "Ao abrir este portal, você liberta a si mesma e a toda a sua linhagem das lealdades à escassez e ao sofrimento. Você escolhe honrar o passado brilhando intensamente no presente.",
    engagement: "Você concluiu o ciclo de portais da Fase 1! O seu comprometimento é inspirador. Continue praticando para desbravar os mistérios da Fase 2!"
  },
  "8": {
    title: "O Despertar da Criança Livre",
    body: "Resgate a espontaneidade e a alegria pura que habitam em você. Deixe que a sua criança interna brinque, crie e se maravilhe com as pequenas sutilezas da via, sem o peso das obrigações adultas.",
    engagement: "A sua criança interior sorri a cada dia de prática concluída. Continue firme no caminho diário para reencontrar o seu brilho original!"
  },
  "9": {
    title: "O Santuário da Autocompaixão",
    body: "Acolha suas vulnerabilidades com ternura infinita. Você não precisa ser perfeita para ser digna de amor e de proteção. Trate-se com a doçura que você sempre ofereceu aos outros.",
    engagement: "A constância é um ato de amor próprio profundo. Continue sua jornada e veja as próximas portas se abrirem com facilidade!"
  },
  "10": {
    title: "O Portal da Fartura Natural",
    body: "Reconheça a fartura que já existe ao seu redor e dentro de você. O Universo é infinitamente abundante e não economiza milagres. Abra os braços para receber a sua cota de presentes sem reservas.",
    engagement: "A abundância ama a consistência. Siga praticando sem interrupções e destranque mais um nível de prosperidade!"
  },
  "11": {
    title: "O Portal do Cuidado Sagrado",
    body: "Coloque-se em primeiro lugar na sua lista de prioridades. Cuidar de si mesma não é egoísmo, é a única forma de transbordar valor real para o mundo. O seu cálice precisa estar cheio primeiro.",
    engagement: "Sua dedicação diária está gerando um magnetismo poderoso. O que o próximo portal reserva para você? Continue praticando!"
  },
  "12": {
    title: "O Escudo da Proteção Invisível",
    body: "Sinta-se segura e guardada pela inteligência amorosa do Universo. O medo do julgamento ou da inveja alheia não pode tocar a sua essência quando você habita plenamente a sua verdade e o seu valor.",
    engagement: "Praticar todo dia cria uma barreira impenetrável de luz ao seu redor. Continue firme e revele o próximo portal protetor!"
  },
  "13": {
    title: "O Portal do Desfrute Divino",
    body: "Aprenda a saborear o momento presente sem culpa. O descanso, o lazer e a celebração são nutrientes essenciais para a sua alma. A vida é feita para ser vivida com deleite e prazer.",
    engagement: "Viver com leveza exige treino e constância. Mantenha sua dedicação diária e deixe o próximo portal se manifestar!"
  },
  "14": {
    title: "A Porta da Integração Interna",
    body: "Una todas as suas partes: suas luzes, suas sombras e a sua história. Tudo o que você viveu trouxe você até esta versão potente e receptiva. Você está inteira e pronta para o transbordo.",
    engagement: "Parabéns! Você abriu todas as portas da Fase 2. A sua constância é formidável. Siga para a Fase 3 e desvele os códigos mais profundos do seu receber!"
  },
  "15": {
    title: "O Templo do Receber Infinito",
    body: "Abra bem os canais do seu ser. Sinta que você é um recipiente ilimitado, conectado diretamente à fonte jorrante de toda a criação. Não há limites para o amor, a paz e a prosperidade que você pode conter.",
    engagement: "Você entrou no ciclo final dos portais! Sua determinação está destravando novas realidades. Continue praticando diariamente!"
  },
  "16": {
    title: "O Portal da Gratidão Ativa",
    body: "A gratidão não é apenas um sentimento, é uma frequência criadora. Ao agradecer pelo que já tem e pelo que ainda está a caminho, você sintoniza seu campo vibracional na abundância pura.",
    engagement: "A cada 3 dias, um novo portal celebra sua vitória diária. Mantenha a sequência e descubra a próxima revelação!"
  },
  "17": {
    title: "A Câmara do Transbordo",
    body: "Quando você se permite receber em abundância, você se torna um canal de bênçãos para todos ao seu redor. O seu transbordamento inspira e eleva o mundo, sem esforço, apenas por ressonância.",
    engagement: "Você está muito perto de dominar a arte do receber. Continue praticando para ver o próximo portal se iluminar!"
  },
  "18": {
    title: "O Portal da Entrega e Confiança",
    body: "Solte o controle do 'como' e do 'quando'. Entregue seus desejos ao Universo com a certeza de que tudo se organiza da melhor forma no tempo perfeito. Confie no fluxo invisível que cuida de tudo.",
    engagement: "Confiar é praticar dia após dia. Mantenha o seu compromisso de constância e acesse o próximo segredo sagrado!"
  },
  "19": {
    title: "O Portal do Brilho Magnético",
    body: "Deixe a sua luz brilhar sem medo. O seu crescimento não diminui ninguém; pelo contrário, abre portas para que outros também escolham brilhar. Seja a referência viva da facilidade e do sucesso.",
    engagement: "Seu brilho fica mais radiante a cada prática diária concluída. Faltam poucas portas, continue focado no fluxo!"
  },
  "20": {
    title: "O Portal da Co-criação Consciente",
    body: "Você e a Fonte Universal trabalham em perfeita parceria. Suas intenções claras, somadas à sua abertura para receber, moldam a realidade física com graça, beleza e extrema leveza.",
    engagement: "Quase lá! A constância levou você ao penúltimo portal. Mantenha a determinação para abrir o portal final da jornada!"
  },
  "21": {
    title: "O Portal da Plenitude Absoluta",
    body: "Você alcançou o portal da integração final. O merecimento nunca foi algo a ser conquistado, mas uma verdade eterna a ser relembrada. Você é parte da Fonte, abundante por natureza, livre e em paz.",
    engagement: "Parabéns extraordinários! Você abriu todos os 21 portais de constância da jornada. Sua dedicação inabalável provou que você está pronta para viver no fluxo infinito do seu receber!"
  }
};

// ─── TARGET PHRASE (FASE 3) ────────────────────────────────────
const TARGET_PHRASE = Array.from("EU PERMITO RECEBER TUDO 🤲");

// ─── APPLICATION STATE ─────────────────────────────────────────
let state = {
  completedCards: [],       // array of card IDs (number), deduped
  savedRever: [],           // IDs saved for review
  lastCompletedDate: null,  // "YYYY-MM-DD" — prevents same-day double count
  streakCount: 0,           // consecutive calendar days
  streakLastDate: null,     // "YYYY-MM-DD" of last streak day
  premiumUnlocked1: false,  // test → full Phase 1
  premiumUnlocked2: false,  // Phase 2
  premiumUnlocked3: false,  // Phase 3
  shuffledOrder: [],        // shuffled indices for Phase 1
  userName: null,
  startDate: null,
  unlockedDoors: [],        // array of door ID strings already used (never repeat)
  unlockedPhraseIndices: [],// array of {index, cardId}
  pendingPasswordAfterDoor: null, // "phase1"|"phase2"|"phase3"|null
  doorsPending: 0,          // how many door events are queued (for safety)
};

// ─── AUDIO ENGINE ──────────────────────────────────────────────
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Crystal/bell touch sound
function playClickSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.12, t);
  masterGain.connect(audioCtx.destination);
  [1318.51, 1567.98].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0, t + i * 0.03);
    g.gain.linearRampToValueAtTime(1, t + i * 0.03 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.03 + 0.4);
    osc.connect(g); g.connect(masterGain);
    osc.start(t + i * 0.03); osc.stop(t + i * 0.03 + 0.5);
  });
}

// Harp-like magical reveal sound
function playMagicSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.12, t);
  masterGain.connect(audioCtx.destination);
  [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0, t + i * 0.05);
    g.gain.linearRampToValueAtTime(0.8, t + i * 0.05 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.05 + 0.9);
    osc.connect(g); g.connect(masterGain);
    osc.start(t + i * 0.05); osc.stop(t + i * 0.05 + 1.1);
  });
}

// Telegram-like light particle dissolution — gentle shimmer
function playDissolveSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.08, t);
  masterGain.connect(audioCtx.destination);
  // Bright, ascending shimmer
  [1046.5, 1318.51, 1567.98, 2093.0].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.linearRampToValueAtTime(freq * 1.5, t + 1.2);
    g.gain.setValueAtTime(0, t + i * 0.08);
    g.gain.linearRampToValueAtTime(0.6, t + i * 0.08 + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.08 + 1.0);
    osc.connect(g); g.connect(masterGain);
    osc.start(t + i * 0.08); osc.stop(t + i * 0.08 + 1.3);
  });
}

// Discrete achievement chime
function playSuccessChime() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.15, t);
  masterGain.connect(audioCtx.destination);
  [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0, t + i * 0.1);
    g.gain.linearRampToValueAtTime(0.9, t + i * 0.1 + 0.04);
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 1.8);
    osc.connect(g); g.connect(masterGain);
    osc.start(t + i * 0.1); osc.stop(t + i * 0.1 + 2.0);
  });
}

// Soft door opening — no creak, gentle whoosh + light chime
function playDoorOpenSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.15, t);
  masterGain.connect(audioCtx.destination);

  // Soft whoosh
  const bufSize = audioCtx.sampleRate * 1.0;
  const buf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.sin(Math.PI * i / bufSize);
  }
  const noise = audioCtx.createBufferSource();
  noise.buffer = buf;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(800, t);
  filter.frequency.linearRampToValueAtTime(400, t + 1.0);
  filter.Q.value = 2;
  noise.connect(filter); filter.connect(masterGain);
  noise.start(t); noise.stop(t + 1.0);

  // Light bell follow-up
  setTimeout(() => {
    if (!audioCtx) return;
    const t2 = audioCtx.currentTime;
    const g2 = audioCtx.createGain();
    g2.gain.setValueAtTime(0.18, t2);
    g2.connect(audioCtx.destination);
    [1046.5, 1318.51, 1567.98].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t2);
      g.gain.setValueAtTime(0, t2 + i * 0.06);
      g.gain.linearRampToValueAtTime(1, t2 + i * 0.06 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, t2 + i * 0.06 + 0.7);
      osc.connect(g); g.connect(g2);
      osc.start(t2 + i * 0.06); osc.stop(t2 + i * 0.06 + 0.8);
    });
  }, 600);
}

// Soft puzzle piece snap
function playPieceSnapSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.1, t);
  masterGain.connect(audioCtx.destination);
  // Soft click
  const osc1 = audioCtx.createOscillator();
  const g1 = audioCtx.createGain();
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(800, t);
  osc1.frequency.exponentialRampToValueAtTime(400, t + 0.08);
  g1.gain.setValueAtTime(1, t);
  g1.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
  osc1.connect(g1); g1.connect(masterGain);
  osc1.start(t); osc1.stop(t + 0.15);
  // Shimmer
  setTimeout(() => {
    if (!audioCtx) return;
    const t2 = audioCtx.currentTime;
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0.1, t2);
    g.connect(audioCtx.destination);
    [1046.5, 1318.51].forEach((f, i) => {
      const o = audioCtx.createOscillator();
      const gg = audioCtx.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(f, t2);
      gg.gain.setValueAtTime(0.8, t2 + i * 0.04);
      gg.gain.exponentialRampToValueAtTime(0.001, t2 + i * 0.04 + 0.5);
      o.connect(gg); gg.connect(g);
      o.start(t2 + i * 0.04); o.stop(t2 + i * 0.04 + 0.6);
    });
  }, 120);
}

// ─── CANVAS FX ─────────────────────────────────────────────────
const canvas = document.getElementById('fx-canvas');
const ctx2d = canvas.getContext('2d');
let particles = [];
let confettis = [];

class LightParticle {
  constructor(x, y, w, h) {
    this.x = x + Math.random() * w;
    this.y = y + Math.random() * h;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = -Math.random() * 2.0 - 0.5;
    this.size = Math.random() * 3 + 1;
    this.alpha = 1;
    this.decay = Math.random() * 0.012 + 0.006;
    // Soft luminous colors — white, gold, pale pink
    const hue = Math.random() < 0.5 ? 45 + Math.random() * 20 : 330 + Math.random() * 30;
    this.color = `hsl(${hue}, 90%, ${80 + Math.random() * 20}%)`;
  }
  update() { this.x += this.vx; this.y += this.vy; this.alpha -= this.decay; }
  draw() {
    ctx2d.save();
    ctx2d.globalAlpha = Math.max(0, this.alpha);
    ctx2d.shadowColor = this.color;
    ctx2d.shadowBlur = 6;
    ctx2d.fillStyle = this.color;
    ctx2d.beginPath();
    ctx2d.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx2d.fill();
    ctx2d.restore();
  }
}

class Confetti {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -100 - 20;
    this.size = Math.random() * 6 + 3;
    this.vx = (Math.random() - 0.5) * 3;
    this.vy = Math.random() * 3.5 + 2;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.12;
    const h = Math.random() < 0.5 ? 40 + Math.random() * 15 : Math.random() * 360;
    this.color = `hsl(${h}, 85%, 65%)`;
  }
  update() { this.x += this.vx; this.y += this.vy; this.rotation += this.rotSpeed; }
  draw() {
    ctx2d.save();
    ctx2d.translate(this.x, this.y);
    ctx2d.rotate(this.rotation);
    ctx2d.fillStyle = this.color;
    ctx2d.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx2d.restore();
  }
}

function createDissolveParticles(x, y, w, h) {
  const count = Math.min(200, Math.floor(w * h * 0.04));
  for (let i = 0; i < count; i++) particles.push(new LightParticle(x, y, w, h));
}

function triggerConfetti(count) {
  for (let i = 0; i < count; i++) confettis.push(new Confetti());
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function loop() {
  ctx2d.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => { p.update(); p.draw(); return p.alpha > 0; });
  confettis = confettis.filter(c => { c.update(); c.draw(); return c.y < canvas.height + 20; });
  requestAnimationFrame(loop);
}

// ─── HELPERS ───────────────────────────────────────────────────
function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function getYesterdayString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function addDays(dateStr, days) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}
function formatFriendlyDate(dateStr) {
  const [, m, d] = dateStr.split('-');
  return `${d}/${m}`;
}

// ─── STATE PERSISTENCE ─────────────────────────────────────────
function loadState() {
  const saved = localStorage.getItem('merecimento_state_v2');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    } catch (e) {
      console.error('Erro ao carregar estado', e);
    }
  }
  if (!state.shuffledOrder || state.shuffledOrder.length !== 21) shuffleDeck();
  if (!state.unlockedDoors) state.unlockedDoors = [];
  if (!state.unlockedPhraseIndices) state.unlockedPhraseIndices = [];
  // Ensure completedCards contains only numbers (legacy compat)
  state.completedCards = [...new Set(state.completedCards.map(Number))];
}
function saveState() {
  localStorage.setItem('merecimento_state_v2', JSON.stringify(state));
}

// ─── DECK SHUFFLE ──────────────────────────────────────────────
function shuffleDeck() {
  const arr = Array.from({ length: 21 }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  state.shuffledOrder = arr;
  saveState();
}

// ─── PHASE CONTROL ─────────────────────────────────────────────
let currentPhase = 1;
let bypassDailyLock = false;

// ─── UI: STREAK ────────────────────────────────────────────────
function updateStreakUI() {
  const dots = document.querySelectorAll('#streak-icons .streak-dot');
  const cyclePos = state.streakCount % 3;
  const activeCount = (state.streakCount > 0 && state.streakCount % 3 === 0) ? 3 : cyclePos;
  dots.forEach((dot, i) => dot.classList.toggle('active', i < activeCount));
}

// ─── UI: PROGRESS & CALENDAR ───────────────────────────────────
function updateProgressAndCalendar() {
  if (!state.userName || !state.startDate) return;
  const total = state.completedCards.length;
  const pct = Math.min(100, Math.round((total / 63) * 100));
  const progressContainer = document.getElementById('progress-bar-container');
  const progressText = document.getElementById('progress-text');
  const progressFill = document.getElementById('progress-fill');
  if (progressContainer) {
    progressContainer.style.display = 'block';
    progressText.innerHTML = `Seu Progresso: <strong>${total} de 63</strong> práticas concluídas (<strong>${pct}%</strong>)`;
    progressFill.style.width = `${pct}%`;
  }

  const calendarGrid = document.getElementById('calendar-grid');
  if (!calendarGrid) return;
  calendarGrid.innerHTML = '';
  const todayStr = getTodayString();
  for (let day = 1; day <= 63; day++) {
    const scheduledDate = addDays(state.startDate, day - 1);
    const friendlyDate = formatFriendlyDate(scheduledDate);
    const dayEl = document.createElement('div');
    let cls = 'future', statusText = 'Pendente';
    if (day <= total) { cls = 'completed'; statusText = 'Concluído ✔️'; }
    else if (day === total + 1) {
      if (scheduledDate === todayStr) { cls = 'today'; statusText = 'Hoje 🔥'; }
      else if (scheduledDate < todayStr) { cls = 'late'; statusText = 'Atrasado ⚠️'; }
    } else if (scheduledDate < todayStr) { cls = 'late'; statusText = 'Atrasado ⚠️'; }
    dayEl.className = `calendar-day ${cls}`;
    dayEl.innerHTML = `<span class="calendar-day-num">Dia ${String(day).padStart(2,'0')}</span><span class="calendar-day-date">${friendlyDate}</span><span class="calendar-day-status">${statusText}</span>`;
    calendarGrid.appendChild(dayEl);
  }
}

function updatePersonalization() {
  if (!state.userName) return;
  const subtitle = document.getElementById('app-subtitle');
  if (subtitle) subtitle.innerHTML = `Olá, <strong>${state.userName}</strong>! Rompa as barreiras ocultas do esforço e abra portais seguros para o fluxo infinito do seu receber.`;
}

// ─── RENDER: PHASE TABS ────────────────────────────────────────
function renderPhaseTabs() {
  const tab2 = document.getElementById('tab-fase2');
  const tab3 = document.getElementById('tab-fase3');
  if (tab2) { tab2.textContent = state.premiumUnlocked2 ? 'Fase 2' : 'Fase 2 🔒'; tab2.classList.toggle('locked', !state.premiumUnlocked2); }
  if (tab3) { tab3.textContent = state.premiumUnlocked3 ? 'Fase 3' : 'Fase 3 🔒'; tab3.classList.toggle('locked', !state.premiumUnlocked3); }
  [1, 2, 3].forEach(p => {
    const t = document.getElementById(`tab-fase${p}`);
    if (t) t.classList.toggle('active', p === currentPhase);
  });
  ['section-fase1', 'section-fase2', 'section-fase3'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.style.display = (i + 1 === currentPhase) ? 'block' : 'none';
  });
}

// ─── RENDER: PHASE 1 CARDS ─────────────────────────────────────
function renderPhase1() {
  const grid = document.getElementById('cards-grid-diario');
  if (!grid) return;
  grid.innerHTML = '';
  const todayStr = getTodayString();
  const alreadyToday = state.lastCompletedDate === todayStr;

  // Update status message
  const statusMsg = document.getElementById('status-message');
  if (statusMsg) {
    if (state.userName) {
      if (alreadyToday && !bypassDailyLock) {
        statusMsg.innerHTML = `Olá, <strong>${state.userName}</strong>! Você já concluiu a prática de hoje. Volte amanhã para abrir um novo portal!`;
      } else {
        statusMsg.innerHTML = `Olá, <strong>${state.userName}</strong>! Respire fundo, sintonize com seu coração e escolha uma carta.`;
      }
    } else {
      statusMsg.textContent = 'Respire fundo, sintonize com seu coração e escolha uma carta.';
    }
  }

  state.shuffledOrder.forEach(cardIndex => {
    const cardData = cardsData[cardIndex];
    if (!cardData || cardData.id > 21) return;
    if (state.completedCards.includes(cardData.id)) return; // already done, skip

    const isPremiumLocked = state.completedCards.length >= 3 && !state.premiumUnlocked1;
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.dataset.id = cardData.id;

    const lockOverlay = isPremiumLocked ? `<div class="card-lock-overlay"><div class="card-lock-icon">🔒</div><div class="card-lock-text">Fase 1</div></div>` : '';
    wrapper.innerHTML = `<div class="card"><div class="card-face card-back"><div class="card-back-ornament"></div>${lockOverlay}</div><div class="card-face card-front"><div class="card-front-header">DIA ${String(cardData.id).padStart(2,'0')}</div><div class="card-front-title">${cardData.title}</div><div class="card-front-footer">✦</div></div></div>`;
    wrapper.addEventListener('click', () => handleCardClick(cardData.id, wrapper));
    grid.appendChild(wrapper);
  });
}

// ─── RENDER: PHASE 2 PUZZLE ────────────────────────────────────
function renderPhase2() {
  renderPuzzleBoard();
  renderPuzzleTray();
}

// Puzzle board: 7 cols × 3 rows = 21 slots, always visible
function renderPuzzleBoard() {
  const board = document.getElementById('puzzle-board');
  if (!board) return;
  board.innerHTML = '';

  // Image dimensions: ratio 16:6 (approximately 7:2.7 pieces)
  // Grid is 7 cols × 3 rows
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 7; col++) {
      const pieceIndex = row * 7 + col; // 0-20
      const cardId = 22 + pieceIndex;    // 22-42
      const isCompleted = state.completedCards.includes(cardId);
      const cardData = cardsData.find(c => c.id === cardId);

      const slot = document.createElement('div');
      slot.className = `puzzle-slot ${isCompleted ? 'completed' : 'empty'}`;
      slot.dataset.col = col;
      slot.dataset.row = row;
      slot.dataset.cardId = cardId;

      if (isCompleted) {
        // Show image portion — backgroundSize = 700% 300% (7 cols × 3 rows)
        const posX = col === 0 ? 0 : (col / 6) * 100;
        const posY = row === 0 ? 0 : (row / 2) * 100;
        slot.style.backgroundImage = "url('./quebracabeca.png')";
        slot.style.backgroundSize = '700% 300%';
        slot.style.backgroundPosition = `${posX}% ${posY}%`;
        slot.title = cardData ? cardData.title : '';

        // Clickable to reopen card
        slot.style.cursor = 'pointer';
        slot.addEventListener('click', () => {
          playClickSound();
          openCardModal(cardId, true);
        });

        // Glow animation class for recently completed
        if (state._recentlyCompleted === cardId) {
          slot.classList.add('just-completed');
          state._recentlyCompleted = null;
        }
      } else {
        // Show outline only
        slot.innerHTML = `<div class="puzzle-slot-outline"><span class="puzzle-slot-num">${pieceIndex + 1}</span></div>`;
      }

      board.appendChild(slot);
    }
  }
}

// Puzzle tray: available (non-completed) pieces as cards
function renderPuzzleTray() {
  const grid = document.getElementById('cards-grid-avancado');
  if (!grid) return;
  grid.innerHTML = '';

  const isPhaseLocked = !state.premiumUnlocked2;

  for (let id = 22; id <= 42; id++) {
    const cardData = cardsData.find(c => c.id === id);
    if (!cardData) continue;
    if (state.completedCards.includes(id)) continue; // already on board

    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper puzzle-card-wrapper';
    wrapper.dataset.id = id;

    const lockOverlay = isPhaseLocked ? `<div class="card-lock-overlay"><div class="card-lock-icon">🔒</div><div class="card-lock-text">Fase 2</div></div>` : '';
    wrapper.innerHTML = `<div class="card"><div class="card-face card-back" style="border-radius:4px;"><div class="card-back-ornament"></div>${lockOverlay}</div><div class="card-face card-front" style="border-radius:4px;"><div class="card-front-header">PEÇA ${String(id - 21).padStart(2,'0')}</div><div class="card-front-title">${cardData.title}</div><div class="card-front-footer">🧩</div></div></div>`;
    wrapper.addEventListener('click', () => handleCardClick(id, wrapper));
    grid.appendChild(wrapper);
  }

  // Message if all done
  if (grid.children.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:2rem;grid-column:1/-1;">✨ Todas as peças foram encaixadas! Olhe o quadro completo acima. ✨</p>';
  }
}

// ─── RENDER: PHASE 3 ───────────────────────────────────────────
function renderPhase3() {
  renderPhrase();
  const grid = document.getElementById('cards-grid-fase3');
  if (!grid) return;
  grid.innerHTML = '';

  const isPhaseLocked = !state.premiumUnlocked3;

  for (let id = 43; id <= 63; id++) {
    const cardData = cardsData.find(c => c.id === id);
    if (!cardData) continue;
    if (state.completedCards.includes(id)) continue;

    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.dataset.id = id;

    const lockOverlay = isPhaseLocked ? `<div class="card-lock-overlay"><div class="card-lock-icon">🔒</div><div class="card-lock-text">Fase 3</div></div>` : '';
    wrapper.innerHTML = `<div class="card"><div class="card-face card-back" style="border-radius:4px;"><div class="card-back-ornament"></div>${lockOverlay}</div><div class="card-face card-front" style="border-radius:4px;"><div class="card-front-header">DIA ${String(id).padStart(2,'0')}</div><div class="card-front-title">${cardData.title}</div><div class="card-front-footer">✦</div></div></div>`;
    wrapper.addEventListener('click', () => handleCardClick(id, wrapper));
    grid.appendChild(wrapper);
  }
}

function renderPhrase() {
  const container = document.getElementById('phrase-container');
  if (!container) return;
  if (!state.premiumUnlocked3) { container.style.display = 'none'; return; }
  container.style.display = 'flex';
  container.innerHTML = '';
  for (let i = 0; i < TARGET_PHRASE.length; i++) {
    const ch = TARGET_PHRASE[i];
    const unlockData = state.unlockedPhraseIndices && state.unlockedPhraseIndices.find(x => (typeof x === 'object' ? x.index : x) === i);
    const isUnlocked = !!unlockData;
    if (ch === ' ') {
      const space = document.createElement('div');
      space.className = 'phrase-char space';
      container.appendChild(space);
      continue;
    }
    const charBox = document.createElement('div');
    charBox.className = `phrase-char ${isUnlocked ? 'revealed' : ''}`;
    charBox.textContent = isUnlocked ? ch : '';
    if (isUnlocked && typeof unlockData === 'object' && unlockData.cardId) {
      charBox.style.cursor = 'pointer';
      charBox.title = 'Clique para rever a prática';
      charBox.addEventListener('click', () => openCardModal(unlockData.cardId, true));
    }
    container.appendChild(charBox);
  }
}

// ─── RENDER: PHASE DOORS ───────────────────────────────────────
function renderPhaseDoors() {
  const container1 = document.getElementById('doors-fase1');
  const container2 = document.getElementById('doors-fase2');
  const container3 = document.getElementById('doors-fase3');

  if (container1) container1.innerHTML = '';
  if (container2) container2.innerHTML = '';
  if (container3) container3.innerHTML = '';

  const renderDoorsForPhase = (container, startDoorId, endDoorId) => {
    if (!container) return;

    const titleEl = document.createElement('h3');
    titleEl.className = 'phase-doors-title';
    titleEl.textContent = 'Portais de Constância';
    container.appendChild(titleEl);

    const gridEl = document.createElement('div');
    gridEl.className = 'phase-doors-grid';

    const allDoorKeys = Object.keys(doorsData).sort((a, b) => Number(a) - Number(b));
    const phaseDoorKeys = allDoorKeys.filter(k => {
      const id = Number(k);
      return id >= startDoorId && id <= endDoorId;
    });

    phaseDoorKeys.forEach((doorId) => {
      const isUnlocked = state.unlockedDoors.includes(doorId);
      const door = doorsData[doorId];

      const card = document.createElement('div');
      card.className = `phase-door-card ${isUnlocked ? 'unlocked opened' : 'locked'}`;
      card.dataset.doorId = doorId;

      card.innerHTML = `
        <div class="phase-door-frame-mini">
          <div class="phase-door-behind-mini">✨</div>
          <div class="phase-door-mini">
            <div class="phase-door-knocker-mini">${isUnlocked ? '✦' : '🔒'}</div>
            <div class="phase-door-number">${doorId}</div>
          </div>
        </div>
        <div class="phase-door-label-mini">Portal ${doorId}</div>
      `;

      if (isUnlocked) {
        card.addEventListener('click', () => {
          playClickSound();
          document.getElementById('door-practice-title').textContent = door.title;
          document.getElementById('door-practice-body').innerHTML = door.body;
          document.getElementById('door-practice-engagement').textContent = door.engagement || '';
          document.getElementById('modal-door-practice').classList.add('active');
        });
      } else {
        card.addEventListener('click', () => {
          alert('Este portal está trancado. Mantenha 3 dias consecutivos de práticas diárias sem falhas para destravá-lo!');
        });
      }

      gridEl.appendChild(card);
    });

    container.appendChild(gridEl);
  };

  renderDoorsForPhase(container1, 1, 7);
  renderDoorsForPhase(container2, 8, 14);
  renderDoorsForPhase(container3, 15, 21);
}

// ─── RENDER: MAIN GRID ─────────────────────────────────────────
function renderGrid() {
  renderPhaseTabs();
  if (currentPhase === 1) renderPhase1();
  else if (currentPhase === 2) renderPhase2();
  else if (currentPhase === 3) renderPhase3();
  renderPhaseDoors();
}

// ─── RENDER: HISTORY TAB ───────────────────────────────────────
function renderReverGrid() {
  const reverGrid = document.getElementById('rever-grid');
  const reverCount = document.getElementById('rever-count');
  if (!reverGrid) return;

  reverGrid.innerHTML = '';
  if (reverCount) reverCount.textContent = state.completedCards.length;

  // Conquered doors section
  const conquistasSection = document.getElementById('conquistas-section');
  const doorsReverList = document.getElementById('doors-rever-list');
  if (conquistasSection && doorsReverList) {
    if (!state.unlockedDoors || state.unlockedDoors.length === 0) {
      conquistasSection.style.display = 'none';
    } else {
      conquistasSection.style.display = 'block';
      doorsReverList.innerHTML = '';
      state.unlockedDoors.forEach(doorId => {
        const practice = doorsData[doorId];
        if (!practice) return;
        const btn = document.createElement('button');
        btn.className = 'hotmart-card door-card';
        btn.innerHTML = `<div class="hotmart-card-icon">✨</div><div class="hotmart-card-title">Portal ${doorId}</div><div class="hotmart-card-subtitle">${practice.title}</div>`;
        btn.addEventListener('click', () => {
          document.getElementById('door-practice-title').textContent = practice.title;
          document.getElementById('door-practice-body').innerHTML = practice.body;
          document.getElementById('door-practice-engagement').textContent = practice.engagement || '';
          document.getElementById('modal-door-practice').classList.add('active');
        });
        doorsReverList.appendChild(btn);
      });
    }
  }

  // All 63 cards
  for (let id = 1; id <= 63; id++) {
    const cardData = cardsData.find(c => c.id === id);
    if (!cardData) continue;
    const isCompleted = state.completedCards.includes(id);
    const cardEl = document.createElement('div');
    if (isCompleted) {
      cardEl.className = 'hotmart-card';
      const phaseLabel = cardData.phase === 1 ? 'Fase 1' : cardData.phase === 2 ? 'Fase 2' : 'Fase 3';
      cardEl.innerHTML = `<div class="hotmart-card-header">${phaseLabel}</div><div class="hotmart-card-num">${String(id).padStart(2,'0')}</div><div class="hotmart-card-title">${cardData.title}</div>`;
      cardEl.addEventListener('click', () => openCardModal(id, true));
    } else {
      cardEl.className = 'hotmart-card placeholder-card';
      const phaseLabel = cardData.phase === 1 ? 'Fase 1' : cardData.phase === 2 ? 'Fase 2' : 'Fase 3';
      cardEl.innerHTML = `<div class="hotmart-card-header" style="opacity:0.5;">${phaseLabel}</div><div style="font-size:2rem;margin:auto;opacity:0.3;">🔒</div><div class="hotmart-card-title" style="opacity:0.5;">Pendente</div>`;
    }
    reverGrid.appendChild(cardEl);
  }
}

// ─── CARD CLICK HANDLER ────────────────────────────────────────
function handleCardClick(cardId, element) {
  const cardData = cardsData.find(c => c.id === cardId);
  if (!cardData) return;

  // Check locks
  if (cardData.phase === 1 && !state.premiumUnlocked1 && state.completedCards.length >= 3) {
    document.getElementById('modal-password-1').classList.add('active');
    return;
  }
  if (cardData.phase === 2 && !state.premiumUnlocked2) {
    document.getElementById('modal-password').classList.add('active');
    return;
  }
  if (cardData.phase === 3 && !state.premiumUnlocked3) {
    document.getElementById('modal-password-3').classList.add('active');
    return;
  }

  // Already completed → read-only
  if (state.completedCards.includes(cardId)) {
    openCardModal(cardId, true);
    return;
  }

  // Daily lock
  const todayStr = getTodayString();
  if (state.lastCompletedDate === todayStr && !bypassDailyLock) {
    alert('Você já realizou a sua prática diária hoje! Permita-se integrar a energia de hoje. Retorne amanhã.');
    return;
  }

  playClickSound();
  const cardInner = element.querySelector('.card');
  if (cardInner) {
    element.classList.add('flipped');
    setTimeout(() => {
      openCardModal(cardId, false);
      element.classList.remove('flipped');
    }, 900);
  } else {
    // Puzzle slot interaction
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
      element.style.transform = '';
      openCardModal(cardId, false);
    }, 150);
  }
}

// ─── ACTIVE CARD MODAL ─────────────────────────────────────────
let activeCardId = null;
const modalCard = document.getElementById('modal-card');

function openCardModal(cardId, readOnly) {
  const cardData = cardsData.find(c => c.id === cardId);
  if (!cardData) return;
  activeCardId = cardId;

  document.getElementById('modal-card-day').textContent = `CARTA ${String(cardData.id).padStart(2,'0')}`;
  document.getElementById('modal-card-title').textContent = cardData.title;
  document.getElementById('modal-question-content').textContent = cardData.question;
  document.getElementById('modal-release-content').textContent = cardData.release;

  const closeBtn = document.getElementById('modal-close-btn');
  const showReleaseBtn = document.getElementById('btn-show-release');
  const dissolveBtn = document.getElementById('btn-dissolve');
  const releaseSection = document.getElementById('modal-section-release');
  const questionSection = document.getElementById('modal-section-question');
  const reverOptions = document.getElementById('rever-options-container');

  closeBtn.style.display = 'block';
  document.getElementById('modal-question-content').classList.remove('dissolving');
  document.getElementById('modal-release-content').classList.remove('dissolving');
  questionSection.style.display = 'block';

  if (readOnly) {
    showReleaseBtn.style.display = 'none';
    dissolveBtn.style.display = 'none';
    reverOptions.style.display = 'none';
    releaseSection.classList.add('active');
  } else {
    showReleaseBtn.style.display = 'block';
    dissolveBtn.style.display = 'none';
    reverOptions.style.display = 'none';
    releaseSection.classList.remove('active');
  }

  modalCard.classList.add('active');
}

function closeModalCard() {
  modalCard.classList.remove('active');
  activeCardId = null;
  renderGrid();
}

function showReleaseSection() {
  document.getElementById('btn-show-release').style.display = 'none';
  document.getElementById('modal-section-question').style.display = 'none';
  document.getElementById('modal-section-release').classList.add('active');
  document.getElementById('btn-dissolve').style.display = 'block';
  document.getElementById('rever-options-container').style.display = 'flex';
}

// ─── DISSOLUTION ───────────────────────────────────────────────
function handleDissolution() {
  const dissolveBtn = document.getElementById('btn-dissolve');
  const closeBtn = document.getElementById('modal-close-btn');
  dissolveBtn.disabled = true;
  closeBtn.style.display = 'none';

  playDissolveSound();

  const releaseContent = document.getElementById('modal-release-content');
  releaseContent.classList.add('dissolving');
  const rect = releaseContent.getBoundingClientRect();
  createDissolveParticles(rect.left, rect.top, rect.width, rect.height);

  setTimeout(() => {
    const saveToRever = document.getElementById('chk-save-rever').checked;
    const result = executeCardCompletion(activeCardId, saveToRever);

    closeBtn.style.display = 'block';
    dissolveBtn.disabled = false;
    closeModalCard();

    // After close, check what to show next
    const total = state.completedCards.length;
    setTimeout(() => {
      if (result.triggerDoor) {
        showDoorRewardScreen(result.doorId);
      } else if (total >= 3 && !state.premiumUnlocked1) {
        document.getElementById('modal-password-1').classList.add('active');
      } else if (total >= 21 && !state.premiumUnlocked2) {
        document.getElementById('modal-password').classList.add('active');
      } else if (total >= 42 && !state.premiumUnlocked3) {
        document.getElementById('modal-password-3').classList.add('active');
      }
    }, 800);
  }, 1400);
}

// ─── CARD COMPLETION LOGIC — THE CORE FIX ─────────────────────
// Count is ALWAYS derived from state.completedCards.length (never ++)
// Streak is calendar-day based: one day = one streak point, regardless of session
function executeCardCompletion(cardId, saveToRever) {
  const todayStr = getTodayString();
  const yesterdayStr = getYesterdayString();

  playSuccessChime();

  // 1. Add to completedCards (deduplicated by ID)
  if (!state.completedCards.includes(cardId)) {
    state.completedCards.push(cardId);
  }

  // 2. Update daily lock
  state.lastCompletedDate = todayStr;

  // 3. Save for review
  if (saveToRever && !state.savedRever.includes(cardId)) {
    state.savedRever.push(cardId);
  }

  // If streak was already at 3, reset to 0 before calculating new day
  if (state.streakCount >= 3) {
    state.streakCount = 0;
  }

  // 4. Streak calculation — purely calendar-day based (except when bypassDailyLock is enabled for testing)
  if (state.streakLastDate === yesterdayStr || (bypassDailyLock && state.streakLastDate === todayStr)) {
    // Continuation from yesterday, or same-day completion when bypassDailyLock is active
    state.streakCount += 1;
    state.streakLastDate = todayStr;
  } else if (state.streakLastDate !== todayStr) {
    // First card ever, or streak broken (missed a day)
    state.streakCount = 1;
    state.streakLastDate = todayStr;
  }
  // If streakLastDate === todayStr and bypassDailyLock is false → same day completion, keep streakCount unchanged

  // 5. Phase 3 unlocked phrase letter
  if (cardId >= 43 && cardId <= 63) {
    if (!state.unlockedPhraseIndices) state.unlockedPhraseIndices = [];
    const nonSpaceIndices = [];
    for (let i = 0; i < TARGET_PHRASE.length; i++) {
      if (TARGET_PHRASE[i] !== ' ') nonSpaceIndices.push(i);
    }
    const available = nonSpaceIndices.filter(i => !state.unlockedPhraseIndices.find(x => (typeof x === 'object' ? x.index : x) === i));
    if (available.length > 0) {
      const pick = available[Math.floor(Math.random() * available.length)];
      state.unlockedPhraseIndices.push({ index: pick, cardId });
    }
  }

  // 6. Puzzle piece animation flag
  if (cardId >= 22 && cardId <= 42) {
    state._recentlyCompleted = cardId;
  }

  // 7. Door trigger logic — PURELY based on streakCount reaching 3
  let triggerDoor = false;
  let doorId = null;

  if (state.streakCount === 3) {
    const allDoorKeys = Object.keys(doorsData).sort((a, b) => Number(a) - Number(b));
    const unusedDoors = allDoorKeys.filter(k => !state.unlockedDoors.includes(k));
    if (unusedDoors.length > 0) {
      doorId = unusedDoors[0];
      triggerDoor = true;
      // Record this door as unlocked immediately
      state.unlockedDoors.push(doorId);
    }
  }

  saveState();
  updateStreakUI();
  updateProgressAndCalendar();

  return { triggerDoor, doorId };
}

// ─── DOOR REWARD SCREEN (SINGLE AUTO-DOOR) ────────────────────
function showDoorRewardScreen(doorId) {
  const practice = doorsData[doorId];
  if (!practice) return;

  triggerConfetti(120);

  const label = document.getElementById('single-door-label');
  if (label) label.textContent = practice.title;

  // Reset door to closed
  const doorWrapper = document.getElementById('single-door-wrapper');
  if (doorWrapper) doorWrapper.classList.remove('opened');

  const doorsScreen = document.getElementById('doors-screen');
  doorsScreen.classList.add('active');

  // Auto-open after 1.5s
  setTimeout(() => {
    playDoorOpenSound();
    if (doorWrapper) doorWrapper.classList.add('opened');

    setTimeout(() => {
      // Show practice modal
      document.getElementById('door-practice-title').textContent = practice.title;
      document.getElementById('door-practice-body').innerHTML = practice.body;
      document.getElementById('door-practice-engagement').textContent = practice.engagement || '';
      document.getElementById('modal-door-practice').classList.add('active');

      // Record this door as used
      if (!state.unlockedDoors.includes(doorId)) {
        state.unlockedDoors.push(doorId);
        saveState();
      }
    }, 1800);
  }, 1500);
}

function closeDoorPractice() {
  document.getElementById('modal-door-practice').classList.remove('active');
  document.getElementById('doors-screen').classList.remove('active');
  playSuccessChime();

  // Reset streak to 0 upon claiming/closing the door practice
  state.streakCount = 0;
  saveState();
  updateStreakUI();

  const total = state.completedCards.length;

  // After door is done, check if password modal needed
  setTimeout(() => {
    if (total >= 3 && !state.premiumUnlocked1) {
      document.getElementById('modal-password-1').classList.add('active');
    } else if (total >= 21 && !state.premiumUnlocked2) {
      document.getElementById('modal-password').classList.add('active');
    } else if (total >= 42 && !state.premiumUnlocked3) {
      document.getElementById('modal-password-3').classList.add('active');
    }
  }, 800);

  renderGrid();
  renderReverGrid();
}

// ─── PASSWORD UNLOCK ───────────────────────────────────────────
function attemptUnlock1() {
  const pass = document.getElementById('input-password-1').value.trim().toLowerCase().replace(/\s+/g, '');
  const errorEl = document.getElementById('password-error-1');
  if (pass === 'acessandoreceber') {
    state.premiumUnlocked1 = true;
    saveState();
    document.getElementById('modal-password-1').classList.remove('active');
    renderGrid();
    triggerConfetti(100);
    alert('Parabéns! A Fase 1 completa foi desbloqueada com sucesso!');
  } else {
    errorEl.textContent = 'Senha incorreta. Tente novamente.';
  }
}

function attemptUnlock2() {
  const pass = document.getElementById('input-password').value.trim().toLowerCase().replace(/\s+/g, '');
  const errorEl = document.getElementById('password-error');
  if (pass === 'soupermissao') {
    state.premiumUnlocked2 = true;
    saveState();
    document.getElementById('modal-password').classList.remove('active');
    currentPhase = 2;
    renderGrid();
    triggerConfetti(100);
    alert('Parabéns! A Fase 2 — Criança Interior — foi desbloqueada!');
  } else {
    errorEl.textContent = 'Chave incorreta. Tente novamente.';
  }
}

function attemptUnlock3() {
  const pass = document.getElementById('input-password-3').value.trim().toLowerCase().replace(/\s+/g, '');
  const errorEl = document.getElementById('password-error-3');
  if (pass === 'eurecebo') {
    state.premiumUnlocked3 = true;
    saveState();
    document.getElementById('modal-password-3').classList.remove('active');
    currentPhase = 3;
    renderGrid();
    triggerConfetti(100);
    alert('Parabéns! A Fase 3 — O Código do Receber — foi desbloqueada!');
  } else {
    errorEl.textContent = 'Chave incorreta. Tente novamente.';
  }
}

// ─── TAB SWITCHING ─────────────────────────────────────────────
function switchTab(tab) {
  document.getElementById('tab-draw').classList.toggle('active', tab === 'draw');
  document.getElementById('tab-rever').classList.toggle('active', tab === 'rever');
  document.getElementById('section-draw').style.display = tab === 'draw' ? 'block' : 'none';
  const rever = document.getElementById('section-rever');
  rever.classList.toggle('active', tab === 'rever');
  if (tab === 'rever') renderReverGrid();
}

function switchPhase(phase) {
  if (phase === 2 && !state.premiumUnlocked2) {
    document.getElementById('modal-password').classList.add('active');
    return;
  }
  if (phase === 3 && !state.premiumUnlocked3) {
    document.getElementById('modal-password-3').classList.add('active');
    return;
  }
  currentPhase = phase;
  renderGrid();
}

// ─── SHUFFLE ANIMATION ─────────────────────────────────────────
function triggerShuffleAnimation() {
  if (currentPhase !== 1) return;
  const grid = document.getElementById('cards-grid-diario');
  const cards = grid.querySelectorAll('.card-wrapper');
  if (cards.length === 0) return;

  const rectGrid = grid.getBoundingClientRect();
  const centerX = rectGrid.width / 2;
  const centerY = rectGrid.height / 2;

  cards.forEach(card => {
    const rc = card.getBoundingClientRect();
    const tx = centerX - (rc.left - rectGrid.left) - rc.width / 2;
    const ty = centerY - (rc.top - rectGrid.top) - rc.height / 2;
    const rot = (Math.random() - 0.5) * 360;
    card.style.transition = 'transform 0.4s ease-in-out, opacity 0.4s';
    card.style.transform = `translate(${tx}px,${ty}px) rotate(${rot}deg) scale(0.1)`;
    card.style.opacity = '0';
  });

  setTimeout(() => {
    shuffleDeck();
    renderGrid();
    const newCards = document.querySelectorAll('#cards-grid-diario .card-wrapper');
    newCards.forEach((card, i) => {
      card.style.transition = 'none';
      card.style.transform = 'scale(0.1)';
      card.style.opacity = '0';
      setTimeout(() => {
        card.style.transition = 'transform 0.5s cubic-bezier(0.175,0.885,0.32,1.275), opacity 0.5s';
        card.style.transform = 'scale(1)';
        card.style.opacity = '1';
      }, i * 40);
    });
  }, 500);
}


// ─── INIT ──────────────────────────────────────────────────────
function init() {
  loadState();
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  loop();

  // Audio init on first interaction
  document.body.addEventListener('click', () => initAudio(), { once: true });

  // Restore phase
  if (state.premiumUnlocked3) currentPhase = 3;
  else if (state.premiumUnlocked2) currentPhase = 2;
  else currentPhase = 1;

  // Navigation tabs
  document.getElementById('tab-draw').addEventListener('click', () => switchTab('draw'));
  document.getElementById('tab-rever').addEventListener('click', () => switchTab('rever'));

  // Phase tabs
  [1, 2, 3].forEach(p => {
    const btn = document.getElementById(`tab-fase${p}`);
    if (btn) btn.addEventListener('click', () => switchPhase(p));
  });

  // Card modal controls
  document.getElementById('modal-close-btn').addEventListener('click', () => { playClickSound(); closeModalCard(); });
  document.getElementById('btn-show-release').addEventListener('click', () => { playMagicSound(); showReleaseSection(); });
  document.getElementById('btn-dissolve').addEventListener('click', handleDissolution);

  // Password modals
  document.getElementById('modal-password-close-1').addEventListener('click', () => document.getElementById('modal-password-1').classList.remove('active'));
  document.getElementById('btn-submit-password-1').addEventListener('click', attemptUnlock1);
  document.getElementById('input-password-1').addEventListener('keypress', e => { if (e.key === 'Enter') attemptUnlock1(); });

  document.getElementById('modal-password-close').addEventListener('click', () => document.getElementById('modal-password').classList.remove('active'));
  document.getElementById('btn-submit-password').addEventListener('click', attemptUnlock2);
  document.getElementById('input-password').addEventListener('keypress', e => { if (e.key === 'Enter') attemptUnlock2(); });

  document.getElementById('modal-password-close-3').addEventListener('click', () => document.getElementById('modal-password-3').classList.remove('active'));
  document.getElementById('btn-submit-password-3').addEventListener('click', attemptUnlock3);
  document.getElementById('input-password-3').addEventListener('keypress', e => { if (e.key === 'Enter') attemptUnlock3(); });

  // Door practice close
  document.getElementById('btn-close-door-practice').addEventListener('click', closeDoorPractice);

  // Calendar modal
  document.getElementById('btn-open-calendar').addEventListener('click', () => {
    const txt = document.getElementById('calendar-start-date-text');
    if (txt && state.startDate) {
      const [y, m, d] = state.startDate.split('-');
      txt.textContent = `Data Inicial: ${d}/${m}/${y}`;
    }
    updateProgressAndCalendar();
    document.getElementById('modal-calendar').classList.add('active');
  });
  document.getElementById('modal-calendar-close').addEventListener('click', () => document.getElementById('modal-calendar').classList.remove('active'));

  // Shuffle
  document.getElementById('btn-shuffle').addEventListener('click', triggerShuffleAnimation);

  // Restart
  document.getElementById('btn-restart-journey').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja recomeçar toda a jornada? Todo o progresso será perdido.')) {
      localStorage.removeItem('merecimento_state_v2');
      location.reload();
    }
  });

  // Welcome screen
  const welcomeOverlay = document.getElementById('welcome-overlay');
  const btnStart = document.getElementById('btn-start-journey');
  const nameInput = document.getElementById('welcome-name');

  if (state.userName) {
    welcomeOverlay.classList.add('inactive');
    setTimeout(() => { welcomeOverlay.style.display = 'none'; }, 800);
    updatePersonalization();
    updateProgressAndCalendar();
  }

  btnStart.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) { alert('Por favor, digite seu nome para iniciar a jornada!'); return; }
    state.userName = name;
    state.startDate = getTodayString();
    saveState();
    welcomeOverlay.classList.add('inactive');
    setTimeout(() => { welcomeOverlay.style.display = 'none'; }, 800);
    updatePersonalization();
    updateProgressAndCalendar();
    renderGrid();
    triggerConfetti(80);
  });
  nameInput.addEventListener('keypress', e => { if (e.key === 'Enter') btnStart.click(); });


  updateStreakUI();
  renderGrid();
  renderReverGrid();

  // On load: restore password modal if needed
  const total = state.completedCards.length;
  if (state.userName) {
    if (total >= 3 && !state.premiumUnlocked1) {
      setTimeout(() => document.getElementById('modal-password-1').classList.add('active'), 1200);
    } else if (total >= 21 && !state.premiumUnlocked2) {
      setTimeout(() => document.getElementById('modal-password').classList.add('active'), 1200);
    } else if (total >= 42 && !state.premiumUnlocked3) {
      setTimeout(() => document.getElementById('modal-password-3').classList.add('active'), 1200);
    }
  }

  // Push notifications
  if ('Notification' in window) {
    document.body.addEventListener('click', () => {
      if (Notification.permission === 'default') Notification.requestPermission();
    }, { once: true });
  }
}

init();
