import { Question } from '@/types/exam';

// ==========================================
// 1. HISTÓRIA (20 QUESTÕES BNCC / ENEM)
// ==========================================
export const HISTORIA_20_QUESTIONS: Question[] = [
  {
    id: 'his-q1',
    examId: 'historia-maratona-20q',
    number: 1,
    subject: 'História',
    area: 'humanas',
    topic: 'Era Vargas e Trabalhismo',
    bnccCode: 'EM13CHS201',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A Consolidação das Leis do Trabalho (CLT), outorgada em 1943 por Getúlio Vargas durante o Estado Novo, expressou uma estratégia política caracterizada por:',
    options: [
      { id: 'A', text: 'Conceder ampla liberdade de greve e desregulamentação sindical plena.' },
      { id: 'B', text: 'Conciliar a concessão de direitos sociais fundamentais com a tutela e controle rigoroso dos sindicatos pelo Estado.' },
      { id: 'C', text: 'Privilegiar os trabalhadores do campo em detrimento das categorias industriais urbanas.' },
      { id: 'D', text: 'Abolir a intervenção estatal nas relações entre patrões e empregados.' },
      { id: 'E', text: 'Extinguir a Justiça do Trabalho e as federações operárias de classe.' }
    ],
    correctAnswer: 'B',
    explanation: 'O modelo corporativista varguista instituiu garantias como salário mínimo, férias e jornada de 8h, mas subordinou a estrutura sindical ao Ministério do Trabalho.',
    keyConcept: 'Trabalhismo e corporativismo varguista'
  },
  {
    id: 'his-q2',
    examId: 'historia-maratona-20q',
    number: 2,
    subject: 'História',
    area: 'humanas',
    topic: 'Ditadura Militar e Redemocratização',
    bnccCode: 'EM13CHS202',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'A grande campanha popular das "Diretas Já" (1983-1984), que reuniu comícios de milhões de brasileiros no fim do regime militar, tinha como principal meta:',
    options: [
      { id: 'A', text: 'Aprovar a Emenda Dante de Oliveira para instituir o voto direto nas eleições presidenciais imediatas.' },
      { id: 'B', text: 'Aprovar a prorrogação do mandato do general João Figueiredo por mais um sexênio.' },
      { id: 'C', text: 'Fechar o Congresso Nacional e convocar uma junta militar provisória.' },
      { id: 'D', text: 'Revogar de imediato a Lei da Anistia sancionada em 1979.' },
      { id: 'E', text: 'Adotar o regime parlamentarista com plebiscito no mesmo mês.' }
    ],
    correctAnswer: 'A',
    explanation: 'A campanha das Diretas Já mobilizou a sociedade civil pela aprovação da emenda constitucional apresentada pelo deputado Dante de Oliveira visando eleições presidenciais diretas.',
    keyConcept: 'Movimento Diretas Já e redemocratização brasileira'
  },
  {
    id: 'his-q3',
    examId: 'historia-maratona-20q',
    number: 3,
    subject: 'História',
    area: 'humanas',
    topic: 'Brasil Colônia e Economia Açucareira',
    bnccCode: 'EM13CHS102',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'O modelo de colonização implementado pela coroa portuguesa no litoral nordestino no século XVI baseou-se na plantation, caracterizada pelo tripé:',
    options: [
      { id: 'A', text: 'Policultura camponesa, trabalho livre assalariado e mercado consumidor interno.' },
      { id: 'B', text: 'Pequena propriedade familiar, escravidão indígena temporária e subsistência.' },
      { id: 'C', text: 'Latifúndio monocultor, mão de obra escravizada de matriz africana e produção voltada à exportação.' },
      { id: 'D', text: 'Coletivismo comunitário, manufaturas urbanas e navegação fluvial.' },
      { id: 'E', text: 'Mineração intensiva, ausência de comércio ultramarino e servidão feudal.' }
    ],
    correctAnswer: 'C',
    explanation: 'A empresa colonial portuguesa no Brasil estruturou-se sob o sistema de plantation: grandes extensões de terra (latifúndio), monocultura do açúcar, trabalho compulsório escravo e mercado externo.',
    keyConcept: 'Estrutura da plantation agroexportadora colonial'
  },
  {
    id: 'his-q4',
    examId: 'historia-maratona-20q',
    number: 4,
    subject: 'História',
    area: 'humanas',
    topic: 'República Oligárquica e Coronelismo',
    bnccCode: 'EM13CHS203',
    difficulty: 'Médio',
    triWeight: 1.05,
    statement: 'Na Primeira República brasileira (1889-1930), o fenômeno social do "coronelismo" exercia controle eleitoral principalmente através do:',
    options: [
      { id: 'A', text: 'Sufrágio universal secreto fiscalizado por auditores internacionais.' },
      { id: 'B', text: 'Voto de cabresto possibilitado pelo voto aberto e redes de dependência e clientelismo local.' },
      { id: 'C', text: 'Voto eletrônico com biometria nos distritos rurais do Nordeste.' },
      { id: 'D', text: 'Controle exclusivo exercido por marinheiros e sindicatos fabris de imigrantes.' },
      { id: 'E', text: 'Alistamento obrigatório feminino garantido pela Constituição de 1891.' }
    ],
    correctAnswer: 'B',
    explanation: 'O voto aberto na Constituição de 1891 permitia aos chefes políticos locais (coronéis) coagir eleitores dependentes por favores materiais ou ameaça, originando o "voto de cabresto".',
    keyConcept: 'Coronelismo e voto de cabresto na República Velha'
  },
  {
    id: 'his-q5',
    examId: 'historia-maratona-20q',
    number: 5,
    subject: 'História',
    area: 'humanas',
    topic: 'Revolução Francesa e Cidadania',
    bnccCode: 'EM13CHS103',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A "Declaração dos Direitos do Homem e do Cidadão" proclamada em 1789 na França consagrou juridicamente o princípio de que:',
    options: [
      { id: 'A', text: 'A autoridade monárquica de direito divino prevalece sobre a vontade popular.' },
      { id: 'B', text: 'Os homens nascem e permanecem livres e iguais em direitos, fundamentando o Estado de Direito.' },
      { id: 'C', text: 'Apenas a nobreza e o alto clero possuem legitimidade para redigir decretos.' },
      { id: 'D', text: 'A escravidão nas colônias antilhanas seria perpétua e irrevogável.' },
      { id: 'E', text: 'A propriedade privada individual deve ser inteiramente confiscada pela Coroa.' }
    ],
    correctAnswer: 'B',
    explanation: 'O artigo 1º da Declaração estabelece a igualdade jurídica formal e a liberdade inalienável contra os privilégios estamentais do Antigo Regime.',
    keyConcept: 'Princípios iluministas da Revolução Francesa'
  },
  {
    id: 'his-q6',
    examId: 'historia-maratona-20q',
    number: 6,
    subject: 'História',
    area: 'humanas',
    topic: 'Brasil Império e Crise Escravista',
    bnccCode: 'EM13CHS104',
    difficulty: 'Médio',
    triWeight: 1.2,
    statement: 'Em 1850, o Parlamento Imperial brasileiro aprovou a Lei Eusébio de Queirós e a Lei de Terras. O impacto conjunto dessas duas leis foi:',
    options: [
      { id: 'A', text: 'A interrupção do tráfico transatlântico de escravizados e a mercantilização da terra, exigindo compra monetária para posse legal.' },
      { id: 'B', text: 'A libertação imediata de todos os cativos com doação governamental de lotes agrícolas.' },
      { id: 'C', text: 'O estímulo ao livre apossamento de terras devolutas por ex-escravizados e colonos pobres.' },
      { id: 'D', text: 'A extinção sumária da Guarda Nacional e a instauração da República.' },
      { id: 'E', text: 'A expulsão definitiva dos cafeicultores da Província de São Paulo.' }
    ],
    correctAnswer: 'A',
    explanation: 'A Lei Eusébio de Queirós extinguiu o tráfico negreiro transatlântico e a Lei de Terras determinou que terras públicas só poderiam ser adquiridas por compra, impedindo o acesso à terra para imigrantes e libertos.',
    keyConcept: 'Transição do trabalho e acesso fundiário no Segundo Reinado'
  },
  {
    id: 'his-q7',
    examId: 'historia-maratona-20q',
    number: 7,
    subject: 'História',
    area: 'humanas',
    topic: 'Guerra Fria e Bipolaridade',
    bnccCode: 'EM13CHS205',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'A Guerra Fria caracterizou-se pela disputa ideológica, científica e geopolítica mundial entre duas superpotências, representadas pelos blocos liderados por:',
    options: [
      { id: 'A', text: 'Reino Unido e Império Otomano.' },
      { id: 'B', text: 'Estados Unidos (capitalista) e União Soviética (socialista).' },
      { id: 'C', text: 'Alemanha Nazista e Japão Imperial.' },
      { id: 'D', text: 'França Republicana e Império Austro-Húngaro.' },
      { id: 'E', text: 'China Maoísta e Índia Britânica.' }
    ],
    correctAnswer: 'B',
    explanation: 'A ordem bipolar do pós-Segunda Guerra opôs os EUA e a URSS em alianças militares (OTAN x Pacto de Varsóvia) e corrida armamentista/espacial sem conflito direto no território de ambas.',
    keyConcept: 'Ordem bipolar da Guerra Fria'
  },
  {
    id: 'his-q8',
    examId: 'historia-maratona-20q',
    number: 8,
    subject: 'História',
    area: 'humanas',
    topic: 'Revolução Industrial e Movimento Operário',
    bnccCode: 'EM13CHS105',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'O processo de industrialização britânico no século XVIII e XIX transformou as relações de trabalho, gerando a emergência do operariado fabril e a reação luddita, que consistia em:',
    options: [
      { id: 'A', text: 'Negociação salarial coletiva mediada por cortes judiciais eleitas.' },
      { id: 'B', text: 'Destruição deliberada de máquinas e teares mecânicos vistos como causas da miséria e do desemprego operário.' },
      { id: 'C', text: 'Migração voluntária em massa dos trabalhadores ingleses para as fazendas de algodão indianas.' },
      { id: 'D', text: 'Criação do Partido Trabalhista britânico por decreto do Parlamento real.' },
      { id: 'E', text: 'Adesão irrestrita dos operários ao modelo de artesanato feudal medieval.' }
    ],
    correctAnswer: 'B',
    explanation: 'O luddismo (1811-1816) foi um movimento de resistência operária espontânea em que artesãos e tecelões quebravam máquinas industriais fabris.',
    keyConcept: 'Resistência luddita na Primeira Revolução Industrial'
  },
  {
    id: 'his-q9',
    examId: 'historia-maratona-20q',
    number: 9,
    subject: 'História',
    area: 'humanas',
    topic: 'Cidadania e Constituição Cidadã de 1988',
    bnccCode: 'EM13CHS206',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A Constituição Brasileira de 1988, apelidada por Ulysses Guimarães de "Constituição Cidadã", inovou expressivamente ao consagrar:',
    options: [
      { id: 'A', text: 'A censura prévia governamental em matérias jornalísticas de interesse nacional.' },
      { id: 'B', text: 'A saúde como direito de todos e dever do Estado através do SUS e a garantia de demarcação de terras indígenas e quilombolas.' },
      { id: 'C', text: 'O mandato presidencial hereditário sem necessidade de sufrágio universal.' },
      { id: 'D', text: 'A eliminação do habeas corpus em investigações financeiras.' },
      { id: 'E', text: 'A cassação de direitos políticos de cidadãos analfabetos.' }
    ],
    correctAnswer: 'B',
    explanation: 'A Carta de 1988 consolidou um amplo catálogo de direitos fundamentais, instituiu o SUS público e universal e reconheceu a posse imemorial das terras originárias indígenas.',
    keyConcept: 'Avanços sociais da Carta Constitucional de 1988'
  },
  {
    id: 'his-q10',
    examId: 'historia-maratona-20q',
    number: 10,
    subject: 'História',
    area: 'humanas',
    topic: 'Mineração e Inconfidência Mineira',
    bnccCode: 'EM13CHS106',
    difficulty: 'Médio',
    triWeight: 1.05,
    statement: 'No século XVIII, a revolta colonial conhecida como Inconfidência Mineira (1789) teve entre suas motivações econômicas mais imediatas:',
    options: [
      { id: 'A', text: 'A ameaça da decretação da "derrama" por Portugal para cobrar cem arrobas anuais de ouro em atraso.' },
      { id: 'B', text: 'A rejeição ao Tratado de Methuen assinado entre Espanha e França.' },
      { id: 'C', text: 'A exigência de retorno à capital imperial em Salvador na Bahia.' },
      { id: 'D', text: 'O encerramento imediato do cultivo de cana-de-açúcar na comarca do Rio das Mortes.' },
      { id: 'E', text: 'O apoio unânime à manutenção do monopólio da Companhia de Jesus no ensino.' }
    ],
    correctAnswer: 'A',
    explanation: 'A decretação iminente da derrama pelo Visconde de Barbacena inflamou as elites letradas e proprietárias de Vila Rica influenciadas pelos ideais iluministas e pela independência dos EUA.',
    keyConcept: 'A Inconfidência Mineira e a derrama colonial'
  },
  // 11 a 20
  {
    id: 'his-q11',
    examId: 'historia-maratona-20q',
    number: 11,
    subject: 'História',
    area: 'humanas',
    topic: 'Idade Média e Sistema Feudal',
    bnccCode: 'EM13CHS107',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'A sociedade feudal na Europa Ocidental organizava-se em uma estrutura estamental rigidamente dividida entre as ordens que rezam (clero), guerreiam (nobreza) e:',
    options: [
      { id: 'A', text: 'Trabalham e sustentam as demais ordens (servos e camponeses).' },
      { id: 'B', text: 'Governam as repúblicas industriais do Mediterrâneo.' },
      { id: 'C', text: 'Controlam o sistema bancário digital de crédito mútuo.' },
      { id: 'D', text: 'Comandam os exércitos profissionais assalariados de Roma.' },
      { id: 'E', text: 'Exercem exclusividade nas universidades laicas do norte europeu.' }
    ],
    correctAnswer: 'A',
    explanation: 'A tríplice ordem medieval (bellatores, oratores e laboratores) estipulava que a base produtiva servil custeava materialmente a Igreja e os senhores feudais.',
    keyConcept: 'Estrutura estamental do feudalismo europeu'
  },
  {
    id: 'his-q12',
    examId: 'historia-maratona-20q',
    number: 12,
    subject: 'História',
    area: 'humanas',
    topic: 'Renascimento Cultural e Humanismo',
    bnccCode: 'EM13CHS108',
    difficulty: 'Médio',
    triWeight: 1.05,
    statement: 'O Renascimento cultural iniciado na Península Itálica no século XIV colocou em evidência o antropocentrismo, que preconizava:',
    options: [
      { id: 'A', text: 'A submissão incondicional do conhecimento científico aos dogmas da fé dogmática.' },
      { id: 'B', text: 'O ser humano como centro das reflexões racionais e agente de transformação do mundo.' },
      { id: 'C', text: 'O isolamento total dos artistas em monastérios fechados sem contato secular.' },
      { id: 'D', text: 'A destruição completa das heranças filosóficas da Grécia e de Roma antigas.' },
      { id: 'E', text: 'A recusa de qualquer forma de pintura, escultura ou estudo da anatomia.' }
    ],
    correctAnswer: 'B',
    explanation: 'O antropocentrismo e humanismo renascentistas resgataram o valor da observação experimental, da arte clássica greco-romana e da centralidade da experiência humana.',
    keyConcept: 'Humanismo e antropocentrismo no Renascimento'
  },
  {
    id: 'his-q13',
    examId: 'historia-maratona-20q',
    number: 13,
    subject: 'História',
    area: 'humanas',
    topic: 'Crise de 1929 e o New Deal',
    bnccCode: 'EM13CHS207',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'A quebra da Bolsa de Nova York em 1929 demonstrou o esgotamento do liberalismo clássico do "laissez-faire". A resposta do presidente Franklin Roosevelt com o New Deal consistiu em:',
    options: [
      { id: 'A', text: 'Intervenção vigorosa do Estado na economia através de obras públicas, regulação bancária e seguro-desemprego.' },
      { id: 'B', text: 'Extinção completa da moeda e adoção do escambo agrícola obrigatório.' },
      { id: 'C', text: 'Estatização incondicional de todas as indústrias e fazendas do país sob modelo soviético.' },
      { id: 'D', text: 'Aumento irrestrito das taxas de juros e cortes em aposentadorias de veteranos.' },
      { id: 'E', text: 'Fechamento de todas as fronteiras e expulsão sumária de industriais privados.' }
    ],
    correctAnswer: 'A',
    explanation: 'Inspirado em ideias keynesianas, o New Deal norte-americano utilizou investimentos estatais em infraestrutura (Tennessee Valley) e seguridade social para recuperar o poder de consumo.',
    keyConcept: 'New Deal e intervenção estatal pós-crise de 1929'
  },
  {
    id: 'his-q14',
    examId: 'historia-maratona-20q',
    number: 14,
    subject: 'História',
    area: 'humanas',
    topic: 'Segunda Guerra Mundial e Totalitarismo',
    bnccCode: 'EM13CHS208',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'Os regimes totalitários nazi-fascistas que emergiram na Europa no entreguerras (1919-1939) tinham como traços distintivos comuns:',
    options: [
      { id: 'A', text: 'A defesa do pluripartidarismo, liberdade de imprensa irrestrita e pacifismo diplomático.' },
      { id: 'B', text: 'Nacionalismo extremado, militarismo, culto à personalidade do líder e perseguição violenta a opositores e minorias.' },
      { id: 'C', text: 'Desarmamento civil voluntário e subordinação das Forças Armadas à Liga das Nações.' },
      { id: 'D', text: 'Aliança diplomática permanente e fraterna com os sindicatos socialistas revolucionários.' },
      { id: 'E', text: 'Abertura de fronteiras a refugiados de perseguições raciais ou religiosas.' }
    ],
    correctAnswer: 'B',
    explanation: 'O nazi-fascismo fundamentou-se no partido único, propaganda ideológica estatal, antissemitismo sistemático (no caso nazista) e repressão por polícias políticas secretas.',
    keyConcept: 'Totalitarismo e autoritarismo na Europa'
  },
  {
    id: 'his-q15',
    examId: 'historia-maratona-20q',
    number: 15,
    subject: 'História',
    area: 'humanas',
    topic: 'Descolonização Afro-Asiática',
    bnccCode: 'EM13CHS209',
    difficulty: 'Difícil',
    triWeight: 1.25,
    statement: 'A Conferência de Bandung realizada na Indonésia em 1955 tornou-se um marco histórico fundamental do processo de descolonização por:',
    options: [
      { id: 'A', text: 'Ratificar a subordinação total dos povos africanos ao Império Britânico.' },
      { id: 'B', text: 'Reunir nações recém-independentes da Ásia e África contra o colonialismo, dando origem ao Movimento dos Países Não Alinhados.' },
      { id: 'C', text: 'Propor a entrada formal de todos os países do Terceiro Mundo na Organização do Tratado do Atlântico Norte (OTAN).' },
      { id: 'D', text: 'Restabelecer o pacto colonial nas antigas possessões francesas na Indochina.' },
      { id: 'E', text: 'Organizar uma expedição militar conjunta para intervir na Guerra da Coreia.' }
    ],
    correctAnswer: 'B',
    explanation: 'Bandung articulou os povos afro-asiáticos contra o imperialismo e a submissão aos blocos hegemônicos de Washington ou Moscou, criando o princípio do Não Alinhamento.',
    keyConcept: 'Conferência de Bandung e Terceiro Mundo'
  },
  {
    id: 'his-q16',
    examId: 'historia-maratona-20q',
    number: 16,
    subject: 'História',
    area: 'humanas',
    topic: 'JK e o Desenvolvimentismo',
    bnccCode: 'EM13CHS210',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'O governo de Juscelino Kubitschek (1956-1961), sintetizado no lema "50 anos em 5", impulsionou a modernização brasileira através do Plano de Metas, priorizando:',
    options: [
      { id: 'A', text: 'Transportes (rodovias), energia e a atração de montadoras multinacionais de automóveis, além da construção de Brasília.' },
      { id: 'B', text: 'A reforma agrária radical e a desativação da malha viária rodoviária.' },
      { id: 'C', text: 'A proibição do ingresso de capitais estrangeiros no setor industrial de base.' },
      { id: 'D', text: 'A transferência da capital federal para a cidade de Salvador na Bahia.' },
      { id: 'E', text: 'O confisco de todas as contas poupança dos trabalhadores bancários.' }
    ],
    correctAnswer: 'A',
    explanation: 'O Plano de Metas de JK consolidou o modelo rodoviarista brasileiro, o polo automotivo do ABC paulista, a expansão hidrelétrica e inaugurou Brasília em 1960.',
    keyConcept: 'Plano de Metas e desenvolvimentismo de JK'
  },
  {
    id: 'his-q17',
    examId: 'historia-maratona-20q',
    number: 17,
    subject: 'História',
    area: 'humanas',
    topic: 'Grécia Antiga e Democracia Ateniense',
    bnccCode: 'EM13CHS109',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'A democracia ateniense no período clássico (século V a.C.) distinguia-se das democracias contemporâneas porque:',
    options: [
      { id: 'A', text: 'Era direta para os cidadãos na Eclésia, mas excluía rigorosamente mulheres, escravizados e estrangeiros (metecos).' },
      { id: 'B', text: 'Concedia direitos políticos universais a todas as pessoas residentes na pólis, inclusive escravas.' },
      { id: 'C', text: 'Era governada exclusivamente por generais eleitos por sufrágio secreto dos camponeses pobres.' },
      { id: 'D', text: 'Funcionava por voto representativo digital através de assembleias distritais.' },
      { id: 'E', text: 'Proibia qualquer debate público e punia a oratória com banimento perpétuo.' }
    ],
    correctAnswer: 'A',
    explanation: 'Apesar de pioneira na isonomia e isegoria na Assembleia popular (Eclésia), a cidadania ateniense era altamente restritiva, abrangendo apenas homens adultos livres filhos de pais atenienses.',
    keyConcept: 'Limites da cidadania na democracia ateniense clássica'
  },
  {
    id: 'his-q18',
    examId: 'historia-maratona-20q',
    number: 18,
    subject: 'História',
    area: 'humanas',
    topic: 'Revolta da Chibata (1910)',
    bnccCode: 'EM13CHS211',
    difficulty: 'Difícil',
    triWeight: 1.25,
    statement: 'Em 1910, marinheiros liderados por João Cândido Felisberto ("o Almirante Negro") sublevaram navios de guerra da Marinha no Rio de Janeiro. A Revolta da Chibata protestava contra:',
    options: [
      { id: 'A', text: 'Os castigos corporais físicos com chibatadas aplicados prioritariamente a marinheiros negros e mestiços, além de má alimentação e soldos baixos.' },
      { id: 'B', text: 'A vacinação sanitária obrigatória contra a varíola na orla da Baía de Guanabara.' },
      { id: 'C', text: 'A proclamação da República e a deposição da família imperial orleanista.' },
      { id: 'D', text: 'A compra de encouraçados modernos britânicos do modelo Dreadnought.' },
      { id: 'E', text: 'O apoio do governo brasileiro aos Aliados na Primeira Guerra Mundial.' }
    ],
    correctAnswer: 'A',
    explanation: 'A Revolta da Chibata denunciou as reminiscências dos métodos escravistas vigentes na Marinha de Guerra brasileira contra a marujada subalterna.',
    keyConcept: 'A Revolta da Chibata e tensões raciais pós-Abolição'
  },
  {
    id: 'his-q19',
    examId: 'historia-maratona-20q',
    number: 19,
    subject: 'História',
    area: 'humanas',
    topic: 'Queda do Muro de Berlim e Fim da URSS',
    bnccCode: 'EM13CHS212',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A queda do Muro de Berlim em novembro de 1989 e as reformas de Glasnost (abertura política) e Perestroika (reestruturação econômica) na URSS simbolizaram:',
    options: [
      { id: 'A', text: 'O encerramento simbólico da Guerra Fria e a desintegração do bloco socialista no Leste Europeu.' },
      { id: 'B', text: 'A vitória militar irrestrita do Pacto de Varsóvia sobre as forças da OTAN na Europa.' },
      { id: 'C', text: 'A divisão definitiva da Alemanha em quatro zonas de ocupação permanente.' },
      { id: 'D', text: 'A criação da Comunidade dos Estados Independentes com a preservação integral da Cortina de Ferro.' },
      { id: 'E', text: 'O isolamento diplomático da União Europeia perante os Estados Unidos.' }
    ],
    correctAnswer: 'A',
    explanation: 'A queda do Muro precipitou a reunificação alemã (1990) e o fim da União Soviética (1991), reconfigurando a geopolítica global em uma ordem multipolar.',
    keyConcept: 'Desintegração do bloco soviético e fim da Guerra Fria'
  },
  {
    id: 'his-q20',
    examId: 'historia-maratona-20q',
    number: 20,
    subject: 'História',
    area: 'humanas',
    topic: 'Cultura Afro-Brasileira e Resistência Quilombola',
    bnccCode: 'EM13CHS110',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'A formação de comunidades quilombolas no Brasil colonial e imperial, como o Quilombo dos Palmares, representou historicamente:',
    options: [
      { id: 'A', text: 'Uma colaboração formal entre capitães do mato e escravizados para abastecer os engenhos açucareiros.' },
      { id: 'B', text: 'Espaços autônomos de resistência ativa à escravidão, preservação cultural de matrizes africanas e reconstrução da dignidade humana.' },
      { id: 'C', text: 'Feitorias mercantis administradas pela Companhia das Índias Ocidentais holandesa.' },
      { id: 'D', text: 'Acampamentos provisórios criados pela Coroa portuguesa para abrigo militar em guerras de fronteira.' },
      { id: 'E', text: 'Instituições de caridade geridas exclusivamente por missionários jesuítas na Capitania de Pernambuco.' }
    ],
    correctAnswer: 'B',
    explanation: 'Os quilombos foram formas autônomas e permanentes de insurgência política, social e econômica contra o sistema escravocrata colonial.',
    keyConcept: 'Resistência quilombola e protagonismo negro'
  }
];

export const HISTORIA_10_QUESTIONS: Question[] = HISTORIA_20_QUESTIONS.slice(0, 10).map((q) => ({
  ...q,
  examId: 'historia-focado-10q'
}));

export const HISTORIA_5_QUESTIONS: Question[] = HISTORIA_20_QUESTIONS.slice(0, 5).map((q) => ({
  ...q,
  examId: 'historia-rapido-5q'
}));

// ==========================================
// 2. GEOGRAFIA (20 QUESTÕES BNCC / ENEM)
// ==========================================
export const GEOGRAFIA_20_QUESTIONS: Question[] = [
  {
    id: 'geo-q1',
    examId: 'geografia-maratona-20q',
    number: 1,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Biomas Brasileiros e Cerrado',
    bnccCode: 'EM13CHS301',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'O bioma Cerrado, conhecido como a "caixa d’água do Brasil", abriga nascentes estratégicas de bacias hidrográficas vitais e destaca-se vegetalmente por:',
    options: [
      { id: 'A', text: 'Floresta perenifólia densa com árvores retilíneas gigantescas de mais de 60 metros.' },
      { id: 'B', text: 'Vegetação caducifólia arbórea com troncos tortuosos, casca espessa e raízes profundas adaptadas à alternância entre estação seca e chuvosa.' },
      { id: 'C', text: 'Campos limpos desprovidos de arbustos sob clima subtropical com geadas frequentes.' },
      { id: 'D', text: 'Vegetação halófila exclusiva de manguezais litorâneos sujeitos a marés salinas diárias.' },
      { id: 'E', text: 'Formação de coníferas com acículas finas adaptadas a invernos com neve permanente.' }
    ],
    correctAnswer: 'B',
    explanation: 'O Cerrado (savana brasileira) possui árvores com raízes profundas que alcançam o lençol freático e casca espessa corticosa para proteção contra o fogo natural.',
    keyConcept: 'Adaptações edafoclimáticas da vegetação do Cerrado'
  },
  {
    id: 'geo-q2',
    examId: 'geografia-maratona-20q',
    number: 2,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Urbanização e Metropolização',
    bnccCode: 'EM13CHS302',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'O intenso processo de metropolização brasileiro da segunda metade do século XX gerou a integração física e funcional de municípios limítrofes, fenômeno geográfico denominado:',
    options: [
      { id: 'A', text: 'Conurbação urbana.' },
      { id: 'B', text: 'Desmetropolização periférica.' },
      { id: 'C', text: 'Inversão térmica rural.' },
      { id: 'D', text: 'Macrocefalia insular.' },
      { id: 'E', text: 'Gentríficação agraria.' }
    ],
    correctAnswer: 'A',
    explanation: 'A conurbação é o encontro ou união espacial de duas ou mais cidades contíguas decorrente da expansão horizontal das malhas urbanas metropolitanas.',
    keyConcept: 'Processo de conurbação e gestão metropolitana'
  },
  {
    id: 'geo-q3',
    examId: 'geografia-maratona-20q',
    number: 3,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Matriz Energética Brasileira',
    bnccCode: 'EM13CHS303',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'Em comparação com a média mundial, a matriz de geração elétrica do Brasil destaca-se pela alta participação de fontes renováveis, com primazia histórica da energia:',
    options: [
      { id: 'A', text: 'Nuclear decorrente de reatores a urânio enriquecido no litoral sul.' },
      { id: 'B', text: 'Hidrelétrica, impulsionada pela abundância de rios de planalto com elevado potencial de queda d’água.' },
      { id: 'C', text: 'Termelétrica movida a carvão mineral de alto teor calorífico da bacia amazônica.' },
      { id: 'D', text: 'Geotérmica gerada pela atividade vulcânica contínua nas serras litorâneas.' },
      { id: 'E', text: 'Maremotriz originada no represamento de estuários do semiárido nordestino.' }
    ],
    correctAnswer: 'B',
    explanation: 'A matriz elétrica brasileira tem cerca de 60-65% de sua geração vinda de hidrelétricas, complementada pelo rápido crescimento solar e eólico.',
    keyConcept: 'Fontes renováveis e matriz hidrelétrica brasileira'
  },
  {
    id: 'geo-q4',
    examId: 'geografia-maratona-20q',
    number: 4,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Climatologia: O Fenômeno El Niño',
    bnccCode: 'EM13CHS304',
    difficulty: 'Médio',
    triWeight: 1.2,
    statement: 'O fenômeno climático de escala planetária denominado El Niño caracteriza-se pelo aquecimento anômalo das águas do Oceano Pacífico Equatorial e provoca no Brasil:',
    options: [
      { id: 'A', text: 'Secas severas no semiárido nordestino e norte da Amazônia, combinadas a chuvas volumosas e enchentes na Região Sul.' },
      { id: 'B', text: 'Nevascas constantes em todo o Centro-Oeste e estiagem prolongada nos pampas gaúchos.' },
      { id: 'C', text: 'Inundações catastróficas generalizadas no sertão da Bahia e congelamento dos rios da bacia do Prata.' },
      { id: 'D', text: 'Estabilidade pluviométrica rigorosa sem qualquer variação nas médias anuais em nenhum estado.' },
      { id: 'E', text: 'Cessação absoluta dos ventos alísios na costa leste do Atlântico Norte.' }
    ],
    correctAnswer: 'A',
    explanation: 'O El Niño altera a célula de circulação de Walker, inibindo chuvas no Norte/Nordeste brasileiro e intensificando frentes frias no Sul.',
    keyConcept: 'Impactos atmosféricos do El Niño no território brasileiro'
  },
  {
    id: 'geo-q5',
    examId: 'geografia-maratona-20q',
    number: 5,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Fronteira Agrícola e Matopiba',
    bnccCode: 'EM13CHS305',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'A expansão da fronteira agrícola moderna no Brasil no século XXI consolidou a região produtora conhecida pela sigla "MATOPIBA", que engloba porções dos estados de:',
    options: [
      { id: 'A', text: 'Maranhão, Tocantins, Piauí e Bahia.' },
      { id: 'B', text: 'Mato Grosso, Paraná, Rio Grande do Sul e Acre.' },
      { id: 'C', text: 'Minas Gerais, Alagoas, Paraíba e Amapá.' },
      { id: 'D', text: 'Mato Grosso do Sul, Rondônia, Santa Catarina e Ceará.' },
      { id: 'E', text: 'Manaus, Sergipe, Rio de Janeiro e Espírito Santo.' }
    ],
    correctAnswer: 'A',
    explanation: 'MATOPIBA é o acrônimo formado pelas iniciais dos estados do Maranhão, Tocantins, Piauí e Bahia, polo do agronegócio de grãos em áreas planas de Cerrado.',
    keyConcept: 'Expansão do agronegócio na fronteira do MATOPIBA'
  },
  {
    id: 'geo-q6',
    examId: 'geografia-maratona-20q',
    number: 6,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Cartografia e Escalas Geográficas',
    bnccCode: 'EM13CHS306',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'Em um mapa cartográfico construído na escala numérica 1:50.000, uma distância linear medida entre duas cidades na régua é de 4 cm. A distância real em linha reta no terreno corresponde a:',
    options: [
      { id: 'A', text: '2 km' },
      { id: 'B', text: '20 km' },
      { id: 'C', text: '200 metros' },
      { id: 'D', text: '0,2 km' },
      { id: 'E', text: '5 km' }
    ],
    correctAnswer: 'A',
    explanation: 'D = d × E. Distância real = 4 cm × 50.000 = 200.000 cm. Convertendo para metros: 2.000 m. Convertendo para quilômetros: 2 km.',
    keyConcept: 'Cálculo de distâncias reais em escala cartográfica'
  },
  {
    id: 'geo-q7',
    examId: 'geografia-maratona-20q',
    number: 7,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Demografia e Transição Demográfica',
    bnccCode: 'EM13CHS307',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A evolução da pirâmide etária da população brasileira nas últimas três décadas revela uma base que vem se estreitando e um topo em expansão contínua. Esse perfil demográfico resulta de:',
    options: [
      { id: 'A', text: 'Queda na taxa de fecundidade e aumento contínuo da expectativa de vida ao nascer.' },
      { id: 'B', text: 'Elevação expressiva da mortalidade infantil e emigração de todos os jovens.' },
      { id: 'C', text: 'Aumento da natalidade rural e colapso das aposentadorias urbanas.' },
      { id: 'D', text: 'Estagnação total da longevidade média da população idosa.' },
      { id: 'E', text: 'Crescimento vegetativo exponencial similar ao do século XIX.' }
    ],
    correctAnswer: 'A',
    explanation: 'A transição demográfica brasileira é impulsionada pela redução das taxas de fecundidade (hoje em torno de 1,6 filho por mulher) e pelo avanço da expectativa de vida média.',
    keyConcept: 'Envelhecimento populacional e transição demográfica no Brasil'
  },
  {
    id: 'geo-q8',
    examId: 'geografia-maratona-20q',
    number: 8,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Globalização e Meio Técnico-Científico-Informacional',
    bnccCode: 'EM13CHS308',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'O geógrafo brasileiro Milton Santos conceituou o período contemporâneo como o "meio técnico-científico-informacional", cuja marca espacial preponderante é:',
    options: [
      { id: 'A', text: 'A união íntima entre ciência, tecnologia e fluxos telecomunicacionais instantâneos moldando seletivamente os territórios globais.' },
      { id: 'B', text: 'O isolamento das cidades do litoral em relação ao comércio internacional de mercadorias.' },
      { id: 'C', text: 'A volta à dependência estrita da tração animal para transportes nas grandes metrópoles.' },
      { id: 'D', text: 'A distribuição perfeitamente equitativa da banda larga em todos os pontos do planeta.' },
      { id: 'E', text: 'A eliminação das fronteiras nacionais e o desmantelamento das bolsas financeiras.' }
    ],
    correctAnswer: 'A',
    explanation: 'O meio técnico-científico-informacional de Milton Santos expressa a hegemonia da tecnologia de informação e da ciência aplicada na organização do espaço geográfico.',
    keyConcept: 'Conceito de meio técnico-científico-informacional'
  },
  {
    id: 'geo-q9',
    examId: 'geografia-maratona-20q',
    number: 9,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Dinâmica Geológica e Tectônica de Placas',
    bnccCode: 'EM13CHS309',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'O território continental do Brasil é considerado sismicamente estável e livre de grandes abalos sísmicos catastróficos porque:',
    options: [
      { id: 'A', text: 'Localiza-se no centro da Placa Tectônica Sul-Americana, distante das bordas de colisão convergente.' },
      { id: 'B', text: 'Possui cadeias montanhosas jovens do período Terciário que absorvem todas as ondas de choque.' },
      { id: 'C', text: 'O solo brasileiro é constituído inteiramente de areia movediça que não transmite vibração magmática.' },
      { id: 'D', text: 'Situa-se no limite transformante da Placa de Nazca com a Dorsal Mesoatlântica.' },
      { id: 'E', text: 'Está situado diretamente sobre a Fossa das Marianas.' }
    ],
    correctAnswer: 'A',
    explanation: 'Por repousar sobre a porção intraplaca da Placa Sul-Americana, o Brasil não vivencia orogênese recente nem vulcanismo ativo.',
    keyConcept: 'Estabilidade tectônica intraplaca do relevo brasileiro'
  },
  {
    id: 'geo-q10',
    examId: 'geografia-maratona-20q',
    number: 10,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Impactos Ambientais Urbanos: Ilhas de Calor',
    bnccCode: 'EM13CHS310',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'O fenômeno microclimático urbano da "ilha de calor", comum nas grandes metrópoles como São Paulo e Rio de Janeiro, é provocado principalmente por:',
    options: [
      { id: 'A', text: 'Impermeabilização do solo por asfalto e concreto, escassez de áreas verdes e elevada emissão de poluentes e calor antrópico.' },
      { id: 'B', text: 'Excesso de lagoas de retenção e reflorestamento de todas as calçadas das periferias.' },
      { id: 'C', text: 'Presença de ventos alísios permanentes que resfriam exclusivamente as regiões rurais do entorno.' },
      { id: 'D', text: 'Uso maciço de telhados brancos refletores e energia solar em 100% dos edifícios centrais.' },
      { id: 'E', text: 'Aumento expressivo da umidade relativa do ar nas zonas comerciais centrais.' }
    ],
    correctAnswer: 'A',
    explanation: 'Materiais com baixo albedo (asfalto, concreto) absorvem radiação térmica durante o dia e a liberam lentamente à noite, elevando as temperaturas centrais em relação à periferia verde.',
    keyConcept: 'Causas físicas das ilhas de calor urbanas'
  },
  // 11 a 20
  {
    id: 'geo-q11',
    examId: 'geografia-maratona-20q',
    number: 11,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Bioma Caatinga e Semiárido',
    bnccCode: 'EM13CHS311',
    difficulty: 'Médio',
    triWeight: 1.05,
    statement: 'A Caatinga é o único bioma exclusivamente brasileiro. Suas plantas xerófitas, como o mandacaru e o xiquexique, apresentam como adaptação à escassez hídrica:',
    options: [
      { id: 'A', text: 'Folhas transformadas em espinhos para reduzir a perda de água por evapotranspiração e tecidos para armazenamento hídrico.' },
      { id: 'B', text: 'Folhas latifoliadas gigantescas que maximizam a transpiração contínua.' },
      { id: 'C', text: 'Raízes aéreas respiratórias pneumatóforas para captação de oxigênio em manguezais.' },
      { id: 'D', text: 'Ausência total de fotossíntese e dependência exclusiva de simbiose com algas marinhas.' },
      { id: 'E', text: 'Perda total de casca nos caules e floração permanente sob chuvas torrenciais diárias.' }
    ],
    correctAnswer: 'A',
    explanation: 'As xerófitas da Caatinga desenvolveram cutícula espessa, parênquima aquífero e redução de folhas a espinhos para suportar os períodos prolongados de estiagem.',
    keyConcept: 'Adaptações morfofisiológicas da vegetação xerófila da Caatinga'
  },
  {
    id: 'geo-q12',
    examId: 'geografia-maratona-20q',
    number: 12,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Geopolítica: Os BRICS',
    bnccCode: 'EM13CHS312',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'O agrupamento internacional dos BRICS (que reúne Brasil, Rússia, Índia, China, África do Sul e novos membros incorporados) atua na diplomacia global com a proposta central de:',
    options: [
      { id: 'A', text: 'Promover uma ordem geopolítica multipolar, reforçar a representatividade dos países do Sul Global e criar alternativas ao sistema financeiro tradicional de Bretton Woods.' },
      { id: 'B', text: 'Impor o dólar norte-americano como moeda única obrigatória em todas as transações comerciais mútuas.' },
      { id: 'C', text: 'Subordinar todas as decisões de comércio exterior às diretrizes imediatas do parlamento da União Europeia.' },
      { id: 'D', text: 'Constituir uma aliança militar formal para substituir o Conselho de Segurança da ONU.' },
      { id: 'E', text: 'Extinguir os bancos de desenvolvimento e eliminar o comércio bilateral de commodities agrícolas.' }
    ],
    correctAnswer: 'A',
    explanation: 'Os BRICS articulam a cooperação econômica e diplomática entre economias emergentes com iniciativas como o Novo Banco de Desenvolvimento (NBD) em busca de multipolaridade.',
    keyConcept: 'Atuação dos BRICS e a multipolaridade geopolítica'
  },
  {
    id: 'geo-q13',
    examId: 'geografia-maratona-20q',
    number: 13,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Clima Equatorial e Floresta Amazônica',
    bnccCode: 'EM13CHS313',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'A circulação atmosférica que transporta gigantescos volumes de vapor de água da bacia amazônica para as regiões Centro-Oeste e Sudeste do Brasil é conhecida como:',
    options: [
      { id: 'A', text: 'Rios Voadores.' },
      { id: 'B', text: 'Corrente de Humboldt.' },
      { id: 'C', text: 'Geleiras Fluviais.' },
      { id: 'D', text: 'Ventos Monçônicos do Sertão.' },
      { id: 'E', text: 'Brisa Terrestre Noturna.' }
    ],
    correctAnswer: 'A',
    explanation: 'Os "rios voadores" são massas de ar carregadas de vapor d’água geradas pela evapotranspiração da Floresta Amazônica, desviadas pela Cordilheira dos Andes rumo ao centro-sul.',
    keyConcept: 'Rios voadores e regime de chuvas no Brasil'
  },
  {
    id: 'geo-q14',
    examId: 'geografia-maratona-20q',
    number: 14,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Relevo Brasileiro: Planaltos, Planícies e Depressões',
    bnccCode: 'EM13CHS314',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'De acordo com a classificação do relevo brasileiro proposta pelo geógrafo Jurandyr Ross, as unidades onde os processos de erosão superam os de sedimentação são denominadas:',
    options: [
      { id: 'A', text: 'Planaltos e depressões.' },
      { id: 'B', text: 'Planícies fluviais e costeiras exclusivamente.' },
      { id: 'C', text: 'Dorsais meso-oceânicas e fossas submarinas.' },
      { id: 'D', text: 'Dobramentos modernos alpinos.' },
      { id: 'E', text: 'Grápens vulcânicos ativos.' }
    ],
    correctAnswer: 'A',
    explanation: 'Na taxonomia de Jurandyr Ross, planaltos e depressões são compartimentos em que predomina o desgaste erosivo, enquanto nas planícies predomina a sedimentação.',
    keyConcept: 'Classificação geomorfológica de Jurandyr Ross'
  },
  {
    id: 'geo-q15',
    examId: 'geografia-maratona-20q',
    number: 15,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Problemas Ambientais: Arenização e Desertificação',
    bnccCode: 'EM13CHS315',
    difficulty: 'Difícil',
    triWeight: 1.2,
    statement: 'O processo de degradação do solo verificado no sudoeste do Rio Grande do Sul (Pampa), originado pelo manejo inadequado de solos arenosos frágeis, é denominado tecnicamente:',
    options: [
      { id: 'A', text: 'Arenização (formação de bancos de areia móveis).' },
      { id: 'B', text: 'Desertificação sob clima hiperárido com dunas salinas.' },
      { id: 'C', text: 'Salinização de manguezais estuarinos.' },
      { id: 'D', text: 'Permafrost sazonal de baixa altitude.' },
      { id: 'E', text: 'Laterização vulcânica basáltica.' }
    ],
    correctAnswer: 'A',
    explanation: 'A arenização nos Campos Sulinos decorre do pisoteio excessivo do gado e monoculturas sobre depósitos areníticos sob clima úmido, diferindo da desertificação em clima árido.',
    keyConcept: 'Processo de arenização nos Pampas gaúchos'
  },
  {
    id: 'geo-q16',
    examId: 'geografia-maratona-20q',
    number: 16,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Estrutura Fundiária e Concentração de Terras',
    bnccCode: 'EM13CHS316',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A análise do Índice de Gini da estrutura fundiária brasileira (superior a 0,85) demonstra que o espaço agrário do país é marcado por:',
    options: [
      { id: 'A', text: 'Severa concentração fundiária, onde uma reduzida porcentagem de estabelecimentos (latifúndios) ocupa a maior parcela da área agricultável total.' },
      { id: 'B', text: 'Distribuição perfeitamente equitativa de propriedades entre minifundiários familiares.' },
      { id: 'C', text: 'Extinção completa das propriedades com mais de 100 hectares.' },
      { id: 'D', text: 'Predomínio de cooperativas comunais sem títulos de propriedade privada.' },
      { id: 'E', text: 'Inexistência de conflitos socioterritoriais pela posse da terra.' }
    ],
    correctAnswer: 'A',
    explanation: 'O Censo Agropecuário confirma que menos de 1% dos proprietários rurais detêm quase metade das terras produtivas no Brasil, revelando forte desigualdade fundiária.',
    keyConcept: 'Concentração fundiária e índice de Gini agrário no Brasil'
  },
  {
    id: 'geo-q17',
    examId: 'geografia-maratona-20q',
    number: 17,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Divisão Regional do Brasil: Complexos Geoeconômicos',
    bnccCode: 'EM13CHS317',
    difficulty: 'Médio',
    triWeight: 1.05,
    statement: 'A regionalização do Brasil em três Complexos Geoeconômicos (ou Regiões Geoeconômicas), proposta pelo geógrafo Pedro Pinchas Geiger em 1967, divide o país em:',
    options: [
      { id: 'A', text: 'Amazônia, Nordeste e Centro-Sul.' },
      { id: 'B', text: 'Norte, Sul e Leste industrial.' },
      { id: 'C', text: 'Litoral Atlântico, Sertão Árido e Pantanal.' },
      { id: 'D', text: 'Região Cafeeira, Região Açucareira e Região da Borracha.' },
      { id: 'E', text: 'Região Platina, Bacia Amazônica e Bacia do São Francisco.' }
    ],
    correctAnswer: 'A',
    explanation: 'A divisão de Geiger considera aspectos histórico-econômicos e não respeita os limites estaduais político-administrativos do IBGE.',
    keyConcept: 'Complexos geoeconômicos de Pedro Pinchas Geiger'
  },
  {
    id: 'geo-q18',
    examId: 'geografia-maratona-20q',
    number: 18,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Fusos Horários no Território Brasileiro',
    bnccCode: 'EM13CHS318',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'O Brasil adota atualmente quatro fusos horários oficiais (todos a oeste de Greenwich). Quando em Brasília (fuso oficial GMT-3) os relógios marcam 15 horas, no estado do Acre (GMT-5) são:',
    options: [
      { id: 'A', text: '13 horas.' },
      { id: 'B', text: '17 horas.' },
      { id: 'C', text: '12 horas.' },
      { id: 'D', text: '15 horas.' },
      { id: 'E', text: '18 horas.' }
    ],
    correctAnswer: 'A',
    explanation: 'Como o Acre está no fuso GMT-5 (duas horas a oeste de Brasília GMT-3), o horário é duas horas mais cedo: 15h - 2h = 13h.',
    keyConcept: 'Cálculo de fusos horários do Brasil'
  },
  {
    id: 'geo-q19',
    examId: 'geografia-maratona-20q',
    number: 19,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Geopolítica da Água e Aquífero Guarani',
    bnccCode: 'EM13CHS319',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'O Aquífero Guarani constitui uma das maiores reservas subterrâneas de água doce do planeta. Localizado na Bacia Sedimentar do Paraná, seu reservatório é compartilhado entre:',
    options: [
      { id: 'A', text: 'Brasil, Argentina, Paraguai e Uruguai.' },
      { id: 'B', text: 'Brasil, Bolívia, Peru e Colômbia.' },
      { id: 'C', text: 'Chile, Equador, Venezuela e Guiana.' },
      { id: 'D', text: 'Estados Unidos, Canadá e México.' },
      { id: 'E', text: 'Brasil, Cuba, Jamaica e Haiti.' }
    ],
    correctAnswer: 'A',
    explanation: 'O Aquífero Guarani é um manancial transfronteiriço compartilhado pelos quatro países membros originários do Mercosul.',
    keyConcept: 'Recursos hídricos transfronteiriços do Aquífero Guarani'
  },
  {
    id: 'geo-q20',
    examId: 'geografia-maratona-20q',
    number: 20,
    subject: 'Geografia',
    area: 'humanas',
    topic: 'Problemas Ambientais: Inversão Térmica',
    bnccCode: 'EM13CHS320',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'A "inversão térmica", que frequentemente agrava episódios de poluição atmosférica severa no inverno em capitais como São Paulo, é um processo meteorológico em que:',
    options: [
      { id: 'A', text: 'Uma camada de ar quente se sobrepõe a uma camada de ar frio próxima ao solo, bloqueando as correntes de convecção ascendentes que dispersam poluentes.' },
      { id: 'B', text: 'O solo se torna mais quente que a atmosfera superior, gerando furacões com granizo contínuo.' },
      { id: 'C', text: 'As chuvas ácidas evaporam antes de atingir a copa das árvores nas serras.' },
      { id: 'D', text: 'Os ventos do mar empurram o ozônio estratosférico para dentro das tubulações residenciais de água.' },
      { id: 'E', text: 'Ocorre a eliminação completa dos raios ultravioleta nas zonas rurais da periferia.' }
    ],
    correctAnswer: 'A',
    explanation: 'Na inversão térmica o ar frio e denso fica aprisionado próximo à superfície por um estrato superior de ar mais aquecido, impedindo a convecção e aprisionando partículas tóxicas.',
    keyConcept: 'Mecanismo físico da inversão térmica urbana'
  }
];

export const GEOGRAFIA_10_QUESTIONS: Question[] = GEOGRAFIA_20_QUESTIONS.slice(0, 10).map((q) => ({
  ...q,
  examId: 'geografia-focado-10q'
}));

export const GEOGRAFIA_5_QUESTIONS: Question[] = GEOGRAFIA_20_QUESTIONS.slice(0, 5).map((q) => ({
  ...q,
  examId: 'geografia-rapido-5q'
}));

// ==========================================
// 3. BIOLOGIA (20 QUESTÕES BNCC / ENEM)
// ==========================================
export const BIOLOGIA_20_QUESTIONS: Question[] = [
  {
    id: 'bio-q1',
    examId: 'biologia-maratona-20q',
    number: 1,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Fotossíntese e Cloroplastos',
    bnccCode: 'EM13CNT201',
    difficulty: 'Médio',
    triWeight: 1.2,
    statement: 'Na etapa fotoquímica (fase clara) da fotossíntese que ocorre nos tilacoides dos cloroplastos, a fotólise da água resulta na liberação imediata de:',
    options: [
      { id: 'A', text: 'Gás oxigênio (O2) para a atmosfera, além de prótons H+ e elétrons para a cadeia transportadora.' },
      { id: 'B', text: 'Gás carbônico (CO2) consumido pelas raízes.' },
      { id: 'C', text: 'Moléculas inteiras de glicose de cadeia ramificada.' },
      { id: 'D', text: 'Ácido lático que reduz o pH do estroma.' },
      { id: 'E', text: 'Gás nitrogênio (N2) sintetizado pelas mitocôndrias.' }
    ],
    correctAnswer: 'A',
    explanation: 'A quebra da molécula de H2O pela energia luminosa (fotólise da água/reação de Hill) libera O2 gasoso e fornece elétrons para a fotofosforilação que gera ATP e NADPH.',
    keyConcept: 'Etapa fotoquímica e fotólise da água'
  },
  {
    id: 'bio-q2',
    examId: 'biologia-maratona-20q',
    number: 2,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Genética Mendeliana e Cruzamentos',
    bnccCode: 'EM13CNT202',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Em um cruzamento entre dois indivíduos heterozigotos para um gene com dominância completa (Aa × Aa), qual é a probabilidade teórica esperada de obter descendentes com o fenótipo dominante?',
    options: [
      { id: 'A', text: '75% (3/4)' },
      { id: 'B', text: '25% (1/4)' },
      { id: 'C', text: '50% (1/2)' },
      { id: 'D', text: '100% (4/4)' },
      { id: 'E', text: '0%' }
    ],
    correctAnswer: 'A',
    explanation: 'O cruzamento Aa × Aa produz genótipos 1 AA : 2 Aa : 1 aa. Os genótipos AA e Aa manifestam o fenótipo dominante, totalizando 3 em 4 (75%).',
    keyConcept: 'Primeira Lei de Mendel e proporções fenotípicas'
  },
  {
    id: 'bio-q3',
    examId: 'biologia-maratona-20q',
    number: 3,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Ecologia e Magnificação Trófica',
    bnccCode: 'EM13CNT203',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Poluentes químicos não biodegradáveis e lipossolúveis (como o inseticida DDT ou o mercúrio metálico) acumulam-se em concentrações crescentes ao longo das cadeias alimentares. Esse fenômeno é chamado:',
    options: [
      { id: 'A', text: 'Bioacumulação ou magnificação trófica, afetando em maior grau os consumidores de topo.' },
      { id: 'B', text: 'Eutrofização artificial de rios perenes.' },
      { id: 'C', text: 'Sucessão ecológica primária em rochas nuas.' },
      { id: 'D', text: 'Biorremediação simbiótica por líquens.' },
      { id: 'E', text: 'Amensalismo acidental por fungos filamentosos.' }
    ],
    correctAnswer: 'A',
    explanation: 'Como a substância não é metabolizada nem excretada, sua concentração por unidade de biomassa se multiplica nos níveis tróficos superiores (predadores de topo).',
    keyConcept: 'Magnificação trófica de compostos persistentes'
  },
  {
    id: 'bio-q4',
    examId: 'biologia-maratona-20q',
    number: 4,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Imunologia: Vacinas versus Soros',
    bnccCode: 'EM13CNT204',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'A diferença imunológica fundamental entre uma vacina preventiva e um soro terapêutico (como o soro antiofídico) reside no fato de que a vacina:',
    options: [
      { id: 'A', text: 'Contém antígenos atenuados ou inativados que estimulam o organismo a produzir seus próprios anticorpos e células de memória (imunização ativa).' },
      { id: 'B', text: 'Contém anticorpos prontos produzidos em outro organismo para ação curativa imediata sem gerar memória (imunização passiva).' },
      { id: 'C', text: 'Destrói diretamente os glóbulos brancos para conter processos alérgicos sistêmicos.' },
      { id: 'D', text: 'Age instantaneamente em menos de 10 minutos contra toxinas de veneno de cascavel.' },
      { id: 'E', text: 'É administrada exclusivamente por via endovenosa em unidades de terapia intensiva.' }
    ],
    correctAnswer: 'A',
    explanation: 'A vacina promove imunização ativa e duradoura através de células de memória, enquanto o soro oferece imunização passiva temporária com anticorpos prontos para emergências.',
    keyConcept: 'Diferenças imunológicas entre vacinas e soros'
  },
  {
    id: 'bio-q5',
    examId: 'biologia-maratona-20q',
    number: 5,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Biologia Celular e Organelas',
    bnccCode: 'EM13CNT205',
    difficulty: 'Médio',
    triWeight: 1.05,
    statement: 'A organela citoplasmática responsável pela respiração celular aeróbia, que possui DNA circular próprio e capacidade de autorreplicação (teoria da endossimbiose), é:',
    options: [
      { id: 'A', text: 'Mitocôndria.' },
      { id: 'B', text: 'Complexo Golgiense.' },
      { id: 'C', text: 'Retículo endoplasmático liso.' },
      { id: 'D', text: 'Lisossomo primário.' },
      { id: 'E', text: 'Centríolo mitótico.' }
    ],
    correctAnswer: 'A',
    explanation: 'As mitocôndrias produzem ATP por fosforilação oxidativa e, segundo a teoria endossimbiótica de Lynn Margulis, originaram-se de bactérias aeróbias ancestrais fagocitadas.',
    keyConcept: 'Estrutura mitocondrial e teoria endossimbiótica'
  },
  {
    id: 'bio-q6',
    examId: 'biologia-maratona-20q',
    number: 6,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Evolução Biológica e Seleção Natural',
    bnccCode: 'EM13CNT206',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'O uso indiscriminado e frequente de antibióticos por seres humanos tem provocado o aumento de "superbactérias" resistentes. Do ponto de vista evolutivo neodarwinista, os antibióticos:',
    options: [
      { id: 'A', text: 'Atuam como agentes seletores que eliminam as bactérias sensíveis, permitindo que as variantes mutantes pré-existentes resistentes sobrevivam e se proliferem.' },
      { id: 'B', text: 'Estimulam as bactérias a sofrerem mutações intencionais adaptativas para resistir ao fármaco (lamarckismo).' },
      { id: 'C', text: 'Criam novos genes do zero dentro do citoplasma bacteriano por indução química direta.' },
      { id: 'D', text: 'Fortalecem as paredes celulares das bactérias através de deposição de sais minerais.' },
      { id: 'E', text: 'Inativam o sistema imune do paciente, permitindo que vírus se transformem em bactérias.' }
    ],
    correctAnswer: 'A',
    explanation: 'A variabilidade genética pré-existe na população bacteriana. O antibiótico seleciona os indivíduos com genes de resistência (seleção natural direcional).',
    keyConcept: 'Seleção natural na resistência bacteriana a antibióticos'
  },
  {
    id: 'bio-q7',
    examId: 'biologia-maratona-20q',
    number: 7,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Fisiologia Humana e Sistema Circulatório',
    bnccCode: 'EM13CNT207',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'No coração humano de quatro cavidades, o sangue venoso rico em gás carbônico (CO2) vindo do corpo através das veias cavas entra primeiramente no:',
    options: [
      { id: 'A', text: 'Átrio direito.' },
      { id: 'B', text: 'Ventrículo esquerdo.' },
      { id: 'C', text: 'Átrio esquerdo.' },
      { id: 'D', text: 'Ventrículo direito.' },
      { id: 'E', text: 'Arco aórtico.' }
    ],
    correctAnswer: 'A',
    explanation: 'O sangue desoxigenado retorna pelas veias cavas ao átrio direito, passa pela valva tricúspide para o ventrículo direito e é bombeado para os pulmões pela artéria pulmonar.',
    keyConcept: 'Circulação cardíaca humana e trajeto do sangue'
  },
  {
    id: 'bio-q8',
    examId: 'biologia-maratona-20q',
    number: 8,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Ácidos Nucleicos e Código Genético',
    bnccCode: 'EM13CNT208',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Durante a síntese proteica, se uma trinca de bases (códon) no RNA mensageiro for 5\'-AUG-3\', o anticódon correspondente presente no RNA transportador será:',
    options: [
      { id: 'A', text: '3\'-UAC-5\'' },
      { id: 'B', text: '3\'-TAC-5\'' },
      { id: 'C', text: '3\'-GUA-5\'' },
      { id: 'D', text: '3\'-CAU-5\'' },
      { id: 'E', text: '3\'-AUG-5\'' }
    ],
    correctAnswer: 'A',
    explanation: 'Pelo pareamento de bases no RNA (A pareia com U e G pareia com C), o códon 5\'-AUG-3\' pareia de forma antiparalela com o anticódon 3\'-UAC-5\', codificando a metionina.',
    keyConcept: 'Pareamento de bases no processo de tradução genética'
  },
  {
    id: 'bio-q9',
    examId: 'biologia-maratona-20q',
    number: 9,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Impactos Ambientais: Eutrofização de Corpos Hídricos',
    bnccCode: 'EM13CNT209',
    difficulty: 'Médio',
    triWeight: 1.2,
    statement: 'O despejo excessivo de esgoto doméstico e fertilizantes agrícolas com nitrogênio e fósforo em lagoas provoca eutrofização, cuja consequência ecológica direta que causa a mortandade de peixes é:',
    options: [
      { id: 'A', text: 'Proliferação de algas superficiais, bloqueio da luz solar e queda drástica do oxigênio dissolvido pela decomposição bacteriana aeróbia.' },
      { id: 'B', text: 'Aumento da transparência da água e congelamento do leito aquático.' },
      { id: 'C', text: 'Diminuição do pH para zero, transformando a água em ácido sulfúrico concentrado.' },
      { id: 'D', text: 'Morte de todas as bactérias anaeróbias do sedimento lacustre.' },
      { id: 'E', text: 'Elevação da salinidade para níveis semelhantes aos do Mar Morto.' }
    ],
    correctAnswer: 'A',
    explanation: 'A proliferação de fitoplâncton forma uma camada que bloqueia a fotossíntese profunda. As algas mortas alimentam bactérias decompositoras aeróbias, esgotando o oxigênio e asfixiando os peixes.',
    keyConcept: 'Fases e impactos da eutrofização artificial'
  },
  {
    id: 'bio-q10',
    examId: 'biologia-maratona-20q',
    number: 10,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Biotecnologia: Enzimas de Restrição e CRISPR',
    bnccCode: 'EM13CNT210',
    difficulty: 'Difícil',
    triWeight: 1.25,
    statement: 'A engenharia genética molecular utiliza as "enzimas de restrição" (endonucleases) como ferramentas fundamentais de manipulação gênica porque elas têm a capacidade de:',
    options: [
      { id: 'A', text: 'Clivar o DNA em sequências nucleotídicas específicas (sítios de reconhecimento palindrômicos).' },
      { id: 'B', text: 'Unir fragmentos de DNA gerando ligações fosfodiéster de forma inespecífica.' },
      { id: 'C', text: 'Sintetizar fitas de RNA a partir de moldes de proteínas celulares.' },
      { id: 'D', text: 'Duplicar telômeros humanos durante a meiose gamética.' },
      { id: 'E', text: 'Inibir a tradução proteica destruindo ribossomos bacterianos.' }
    ],
    correctAnswer: 'A',
    explanation: 'As enzimas de restrição agem como "tesouras biológicas", cortando o DNA em sequências palindrômicas específicas para inserção de genes recombinantes.',
    keyConcept: 'Enzimas de restrição na biologia molecular'
  },
  // 11 a 20
  {
    id: 'bio-q11',
    examId: 'biologia-maratona-20q',
    number: 11,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Divisão Celular: Mitose versus Meiose',
    bnccCode: 'EM13CNT211',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'A meiose é uma divisão celular essencial para organismos de reprodução sexuada, pois além de formar gametas haploides (n), promove variabilidade genética através do:',
    options: [
      { id: 'A', text: 'Crossing-over (permutação gênica) entre cromátides não irmãs de cromossomos homólogos na prófase I.' },
      { id: 'B', text: 'Duplicação do número de centrômeros na telófase mitótica.' },
      { id: 'C', text: 'Bloqueio da transcrição do RNA mensageiro durante o período G1 da interfase.' },
      { id: 'D', text: 'Pareamento de cromossomos não homólogos durante a metáfase II.' },
      { id: 'E', text: 'Clonagem exata do material genético sem qualquer recombinação alélica.' }
    ],
    correctAnswer: 'A',
    explanation: 'O crossing-over ou recombinação meiótica na prófase I recombina alelos maternos e paternos, gerando novas combinações genéticas nos gametas.',
    keyConcept: 'Crossing-over e variabilidade na meiose'
  },
  {
    id: 'bio-q12',
    examId: 'biologia-maratona-20q',
    number: 12,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Parasitologia e Saúde Pública: Doença de Chagas',
    bnccCode: 'EM13CNT212',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A Doença de Chagas é causada pelo protozoário flagelado Trypanosoma cruzi. A transmissão clássica ao ser humano ocorre quando o inseto vetor (barbeiro):',
    options: [
      { id: 'A', text: 'Defeca próximo ao local da picada, e a pessoa coça a pele, permitindo que os parasitas presentes nas fezes penetrem no orifício da ferida ou mucosas.' },
      { id: 'B', text: 'Injeta diretamente o protozoário pelas glândulas salivares durante a sucção de sangue arterial.' },
      { id: 'C', text: 'Deposita ovos embrionados na corrente sanguínea através da picada na ponta dos dedos.' },
      { id: 'D', text: 'Transmite o vírus através de gotículas de saliva suspensas no ar refrigerado.' },
      { id: 'E', text: 'Alimenta-se exclusivamente de néctar e pólen contaminado por larvas de nematódeos.' }
    ],
    correctAnswer: 'A',
    explanation: 'O barbeiro evacua durante ou após a refeição sanguínea. O prurido faz a pessoa coçar a lesão, conduzindo o T. cruzi das fezes para a corrente sanguínea.',
    keyConcept: 'Mecanismo de transmissão vetorial do Trypanosoma cruzi'
  },
  {
    id: 'bio-q13',
    examId: 'biologia-maratona-20q',
    number: 13,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Fisiologia Vegetal e Fitormônios',
    bnccCode: 'EM13CNT213',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Dentre os hormônios vegetais, o etileno desempenha papel fisiológico fundamental no cotidiano agrícola ao atuar como o principal responsável por:',
    options: [
      { id: 'A', text: 'Estimular o amadurecimento dos frutos e a abscisão (queda) foliar.' },
      { id: 'B', text: 'Induzir o alongamento celular das raízes sob a luz solar direta.' },
      { id: 'C', text: 'Impedir a germinação de sementes mantendo a dormência invernal.' },
      { id: 'D', text: 'Promover a absorção ativa de cloreto de sódio pelas folhas das gimnospermas.' },
      { id: 'E', text: 'Acelerar a síntese de clorofila durante a noite.' }
    ],
    correctAnswer: 'A',
    explanation: 'O etileno é um hormônio gasoso que induz degradação de amido e clorofila e síntese de aromas, amadurecendo frutos e promovendo a abscisão.',
    keyConcept: 'Funções do fitormônio etileno'
  },
  {
    id: 'bio-q14',
    examId: 'biologia-maratona-20q',
    number: 14,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Sistema Imunológico e Anticorpos',
    bnccCode: 'EM13CNT214',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'As células do sistema imunológico que se diferenciam a partir de linfócitos B e são especializadas na secreção massiva de anticorpos (imunoglobulinas) no sangue são chamadas:',
    options: [
      { id: 'A', text: 'Plasmócitos.' },
      { id: 'B', text: 'Plaquetas megacariocíticas.' },
      { id: 'C', text: 'Hemácias anucleadas.' },
      { id: 'D', text: 'Osteoclastos ósseos.' },
      { id: 'E', text: 'Neurônios dopaminérgicos.' }
    ],
    correctAnswer: 'A',
    explanation: 'Quando os linfócitos B encontram o antígeno compatível e recebem estímulo dos linfócitos T auxiliares (CD4+), diferenciam-se em plasmócitos secretores de anticorpos específicos.',
    keyConcept: 'Diferenciação de linfócitos B em plasmócitos'
  },
  {
    id: 'bio-q15',
    examId: 'biologia-maratona-20q',
    number: 15,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Botânica: Vasos Condutores (Xilema e Floema)',
    bnccCode: 'EM13CNT215',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Nas plantas vasculares (traqueófitas), o tecido responsável pela condução da seiva bruta (água e sais minerais) das raízes até as folhas é o:',
    options: [
      { id: 'A', text: 'Xilema (ou lenho), constituído por células mortas impregnadas de lignina.' },
      { id: 'B', text: 'Floema (ou líber), que transporta apenas lipídios polares para os frutos.' },
      { id: 'C', text: 'Parênquima aquífero clorofiliano subepidérmico.' },
      { id: 'D', text: 'Colênquima elástico das gemas apicais.' },
      { id: 'E', text: 'Esclerênquima de revestimento estomático.' }
    ],
    correctAnswer: 'A',
    explanation: 'O xilema transporta água e sais (seiva mineral/bruta) de forma ascendente impulsionado pela teoria da coesão-tensão de Dixon.',
    keyConcept: 'Condução de seiva bruta pelo xilema'
  },
  {
    id: 'bio-q16',
    examId: 'biologia-maratona-20q',
    number: 16,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Genética: Grupos Sanguíneos Sistema ABO',
    bnccCode: 'EM13CNT216',
    difficulty: 'Médio',
    triWeight: 1.05,
    statement: 'Um indivíduo portador do tipo sanguíneo O possui em suas hemácias e em seu plasma sanguíneo, respectivamente:',
    options: [
      { id: 'A', text: 'Ausência de aglutinogênios (antígenos A e B) nas hemácias e presença de aglutininas anti-A e anti-B no plasma.' },
      { id: 'B', text: 'Presença de aglutinogênios A e B nas hemácias e ausência de anticorpos no plasma.' },
      { id: 'C', text: 'Apenas aglutinogênio A nas hemácias e anticorpo anti-A no plasma.' },
      { id: 'D', text: 'Presença exclusiva de fator Rh positivo sem proteínas de membrana.' },
      { id: 'E', text: 'Presença de aglutinogênio B e aglutinina anti-B simultaneamente na hemácia.' }
    ],
    correctAnswer: 'A',
    explanation: 'O indivíduo tipo O (genótipo ii) não expressa antígenos A nem B em suas hemácias, possuindo anticorpos naturais anti-A e anti-B em seu soro, sendo doador universal de hemácias.',
    keyConcept: 'Antígenos e anticorpos do sistema ABO'
  },
  {
    id: 'bio-q17',
    examId: 'biologia-maratona-20q',
    number: 17,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Zoologia: Artrópodes e Exoesqueleto',
    bnccCode: 'EM13CNT217',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'O filo dos artrópodes é o mais diverso do reino animal. Seu crescimento corporal ocorre de maneira descontínua em degraus devido à presença de um:',
    options: [
      { id: 'A', text: 'Exoesqueleto de quitina que necessita ser trocado periodicamente pelo processo de muda (ecdise).' },
      { id: 'B', text: 'Endoesqueleto ósseo calcificado com medula hemopoética contínua.' },
      { id: 'C', text: 'Esqueleto hidrostático de colágeno sem carapaça rígida.' },
      { id: 'D', text: 'Crescimento exponencial permanente sem necessidade de descartar tecidos.' },
      { id: 'E', text: 'Manto calcário secretado por glândulas pedunculadas.' }
    ],
    correctAnswer: 'A',
    explanation: 'A cutícula rígida de quitina protege contra dessecação e predadores, mas impõe a necessidade de mudas periódicas (ecdises) reguladas pelo hormônio ecdisona.',
    keyConcept: 'Ecdise e exoesqueleto nos artrópodes'
  },
  {
    id: 'bio-q18',
    examId: 'biologia-maratona-20q',
    number: 18,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Metabolismo Energético: Fermentação Lática',
    bnccCode: 'EM13CNT218',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Durante exercícios musculares vigorosos e anaeróbios, quando o suprimento de oxigênio é insuficiente para a fosforilação oxidativa mitocondrial, as células musculares produzem ATP através de:',
    options: [
      { id: 'A', text: 'Fermentação lática no citosol, gerando acúmulo temporário de lactato.' },
      { id: 'B', text: 'Fermentação alcoólica com produção massiva de etanol nas fibras brancas.' },
      { id: 'C', text: 'Fotofosforilação cíclica com absorção de raios infravermelhos.' },
      { id: 'D', text: 'Degradação imediata da queratina epidérmica em ureia.' },
      { id: 'E', text: 'Digestão autofágica dos ribossomos musculares.' }
    ],
    correctAnswer: 'A',
    explanation: 'A fermentação lática reduz o piruvato a lactato oxidando o NADH a NAD+, permitindo que a glicólise continue fornecendo 2 ATPs por glicose em condições de hipóxia.',
    keyConcept: 'Glicólise anaeróbia e fermentação muscular'
  },
  {
    id: 'bio-q19',
    examId: 'biologia-maratona-20q',
    number: 19,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Relações Ecológicas: Mutualismo versus Comensalismo',
    bnccCode: 'EM13CNT219',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'A associação entre fungos e algas microscópicas (ou cianobactérias) formando líquens é um exemplo clássico de relação ecológica interespecífica harmônica do tipo:',
    options: [
      { id: 'A', text: 'Mutualismo obrigatório (ambos se beneficiam e a sobrevivência isolada é inviável na natureza).' },
      { id: 'B', text: 'Parasitismo letal (o fungo destrói a alga em poucas horas).' },
      { id: 'C', text: 'Comensalismo alimentar (apenas um se beneficia sem afetar o outro).' },
      { id: 'D', text: 'Competição intraespecífica por espaço em galhos secos.' },
      { id: 'E', text: 'Predatismo predatório com ingestão mecânica da biomassa.' }
    ],
    correctAnswer: 'A',
    explanation: 'Nos líquens, a alga/cianobactéria fornece matéria orgânica fotossintetizada e o fungo garante proteção, umidade e fixação mineral, caracterizando simbiose mutualística obrigatória.',
    keyConcept: 'Mutualismo obrigatório nos líquens'
  },
  {
    id: 'bio-q20',
    examId: 'biologia-maratona-20q',
    number: 20,
    subject: 'Biologia',
    area: 'natureza',
    topic: 'Fisiologia Humana: Regulação Hormonal da Glicose',
    bnccCode: 'EM13CNT220',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Após uma refeição rica em carboidratos, a elevação da glicemia estimula as células beta das ilhotas pancreáticas a secretarem o hormônio:',
    options: [
      { id: 'A', text: 'Insulina, que promove a captação celular de glicose e a síntese de glicogênio hepático.' },
      { id: 'B', text: 'Glucagon, que estimula a quebra do glicogênio em glicose livre na corrente sanguínea.' },
      { id: 'C', text: 'Adrenalina, que bloqueia o transporte de açúcar para os miócitos.' },
      { id: 'D', text: 'Tiroxina, que transforma glicose em cristais insolúveis de oxalato de cálcio.' },
      { id: 'E', text: 'Ocitocina, que impede a absorção intestinal de monossacarídeos.' }
    ],
    correctAnswer: 'A',
    explanation: 'A insulina é o hormônio hipoglicemiante que estimula os transportadores GLUT-4 a internalizarem glicose nas células musculares e adiposas, e ativa a glicogênese no fígado.',
    keyConcept: 'Homeostase glicêmica por ação da insulina pancreática'
  }
];

export const BIOLOGIA_10_QUESTIONS: Question[] = BIOLOGIA_20_QUESTIONS.slice(0, 10).map((q) => ({
  ...q,
  examId: 'biologia-focado-10q'
}));

export const BIOLOGIA_5_QUESTIONS: Question[] = BIOLOGIA_20_QUESTIONS.slice(0, 5).map((q) => ({
  ...q,
  examId: 'biologia-rapido-5q'
}));

// ==========================================
// 4. FÍSICA (20 QUESTÕES BNCC / ENEM)
// ==========================================
export const FISICA_20_QUESTIONS: Question[] = [
  {
    id: 'fis-q1',
    examId: 'fisica-maratona-20q',
    number: 1,
    subject: 'Física',
    area: 'natureza',
    topic: 'Eletrodinâmica: Primeira Lei de Ohm e Potência',
    bnccCode: 'EM13CNT101',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Um chuveiro elétrico residencial opera sob tensão de 220 V dissipando uma potência de 4400 W. Para adaptá-lo ao modo "Verão" e reduzir a potência para 2200 W mantendo a mesma tensão de 220 V, a resistência elétrica interna do aparelho deve ser:',
    options: [
      { id: 'A', text: 'Reduzida à metade.' },
      { id: 'B', text: 'Duplicada.' },
      { id: 'C', text: 'Mantida com o mesmo valor ôhmico.' },
      { id: 'D', text: 'Quadruplicada.' },
      { id: 'E', text: 'Reduzida a um quarto.' }
    ],
    correctAnswer: 'B',
    explanation: 'Pela relação P = U² / R, como U é mantido em 220 V, a potência P é inversamente proporcional à resistência R. Para reduzir a potência à metade (4400 W -> 2200 W), a resistência deve dobrar.',
    keyConcept: 'Potência elétrica e Primeira Lei de Ohm'
  },
  {
    id: 'fis-q2',
    examId: 'fisica-maratona-20q',
    number: 2,
    subject: 'Física',
    area: 'natureza',
    topic: 'Mecânica: Conservação da Energia Mecânica',
    bnccCode: 'EM13CNT102',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Um objeto de massa 2 kg é solto a partir do repouso do alto de um edifício de 20 metros de altura em um local onde a gravidade g = 10 m/s². Desprezando a resistência do ar, a velocidade do objeto imediatamente antes de tocar o solo é:',
    options: [
      { id: 'A', text: '20 m/s' },
      { id: 'B', text: '10 m/s' },
      { id: 'C', text: '40 m/s' },
      { id: 'D', text: '14,1 m/s' },
      { id: 'E', text: '200 m/s' }
    ],
    correctAnswer: 'A',
    explanation: 'Pela conservação da energia mecânica: Ep = Ec -> m·g·h = m·v²/2 -> v² = 2·g·h = 2 × 10 × 20 = 400 -> v = 20 m/s (ou 72 km/h).',
    keyConcept: 'Conservação de energia mecânica em queda livre'
  },
  {
    id: 'fis-q3',
    examId: 'fisica-maratona-20q',
    number: 3,
    subject: 'Física',
    area: 'natureza',
    topic: 'Ondulatória: Equação Fundamental da Onda',
    bnccCode: 'EM13CNT103',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'Uma emissora de rádio FM transmite seu sinal sonoro na frequência de 100 MHz (100 × 10^6 Hz). Sabendo que as ondas eletromagnéticas propagam-se na velocidade da luz c = 3,0 × 10^8 m/s, o comprimento de onda desse sinal no ar é:',
    options: [
      { id: 'A', text: '3,0 metros' },
      { id: 'B', text: '0,33 metros' },
      { id: 'C', text: '30 metros' },
      { id: 'D', text: '300 metros' },
      { id: 'E', text: '0,03 metros' }
    ],
    correctAnswer: 'A',
    explanation: 'Pela equação fundamental da ondulatória v = λ·f -> λ = v / f = (3,0 × 10^8) / (1,0 × 10^8) = 3,0 metros.',
    keyConcept: 'Equação fundamental da propagação de ondas eletromagnéticas'
  },
  {
    id: 'fis-q4',
    examId: 'fisica-maratona-20q',
    number: 4,
    subject: 'Física',
    area: 'natureza',
    topic: 'Dinâmica: Segunda Lei de Newton',
    bnccCode: 'EM13CNT104',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Um veículo de 1200 kg trafega em linha reta e é acelerado por uma força resultante constante de 3600 N. Qual é a aceleração desenvolvida pelo veículo durante essa aceleração?',
    options: [
      { id: 'A', text: '3,0 m/s²' },
      { id: 'B', text: '0,33 m/s²' },
      { id: 'C', text: '4,8 m/s²' },
      { id: 'D', text: '12,0 m/s²' },
      { id: 'E', text: '2,4 m/s²' }
    ],
    correctAnswer: 'A',
    explanation: 'Pela 2ª Lei de Newton Fr = m·a -> a = Fr / m = 3600 N / 1200 kg = 3,0 m/s².',
    keyConcept: 'Aplicação fundamental da Segunda Lei de Newton'
  },
  {
    id: 'fis-q5',
    examId: 'fisica-maratona-20q',
    number: 5,
    subject: 'Física',
    area: 'natureza',
    topic: 'Termologia: Calorimetria e Trocas de Calor',
    bnccCode: 'EM13CNT105',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Quantas calorias de calor sensível são necessárias para aquecer 500 g de água pura de 20 °C até 80 °C? (Considere o calor específico da água c = 1,0 cal/g·°C).',
    options: [
      { id: 'A', text: '30.000 cal' },
      { id: 'B', text: '40.000 cal' },
      { id: 'C', text: '10.000 cal' },
      { id: 'D', text: '50.000 cal' },
      { id: 'E', text: '25.000 cal' }
    ],
    correctAnswer: 'A',
    explanation: 'Equação fundamental da calorimetria: Q = m·c·ΔT = 500 g × 1 cal/g·°C × (80 - 20) °C = 500 × 60 = 30.000 cal (30 kcal).',
    keyConcept: 'Cálculo de calor sensível por calorimetria'
  },
  {
    id: 'fis-q6',
    examId: 'fisica-maratona-20q',
    number: 6,
    subject: 'Física',
    area: 'natureza',
    topic: 'Óptica Geométrica: Lentes e Miopia',
    bnccCode: 'EM13CNT106',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'Uma pessoa míope possui o globo ocular mais alongado que o normal, fazendo com que os raios luminosos paralelos de objetos distantes convirjam antes da retina. O tipo de lente oftálmica adequado para corrigir esse defeito visual é:',
    options: [
      { id: 'A', text: 'Divergente.' },
      { id: 'B', text: 'Convergente.' },
      { id: 'C', text: 'Plano-paralela sem poder dióptrico.' },
      { id: 'D', text: 'Cilíndrica bifocal espelhada.' },
      { id: 'E', text: 'Convergente com curvatura positiva dupla.' }
    ],
    correctAnswer: 'A',
    explanation: 'Lentes divergentes (de vergência negativa) divergem levemente os feixes antes de atingirem a córnea, deslocando o ponto de foco para trás exatamente sobre a retina.',
    keyConcept: 'Correção óptica de miopia com lentes divergentes'
  },
  {
    id: 'fis-q7',
    examId: 'fisica-maratona-20q',
    number: 7,
    subject: 'Física',
    area: 'natureza',
    topic: 'Efeito Doppler em Ondas Sonoras',
    bnccCode: 'EM13CNT107',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Quando uma ambulância com a sirene ligada aproxima-se rapidamente de um observador parado na calçada, o som ouvido por ele parece mais agudo. Esse efeito físico decorre do fato de que a frequência percebida:',
    options: [
      { id: 'A', text: 'É maior que a frequência real emitida pela fonte, devido à compressão aparente das frentes de onda (Efeito Doppler).' },
      { id: 'B', text: 'É menor que a frequência real emitida, pois a velocidade do som diminui no ar.' },
      { id: 'C', text: 'Permanece rigorosamente igual, alterando apenas a intensidade sonora em decibéis.' },
      { id: 'D', text: 'Cai para a faixa de infrassons inaudíveis para o ouvido humano.' },
      { id: 'E', text: 'Aumenta porque a sirene consome mais energia da bateria com o carro em movimento.' }
    ],
    correctAnswer: 'A',
    explanation: 'Pelo Efeito Doppler sonoro, a aproximação relativa entre fonte e observador diminui o comprimento de onda aparente, aumentando o número de frentes de onda recebidas por segundo (som mais agudo).',
    keyConcept: 'Efeito Doppler sonoro em aproximação de fontes'
  },
  {
    id: 'fis-q8',
    examId: 'fisica-maratona-20q',
    number: 8,
    subject: 'Física',
    area: 'natureza',
    topic: 'Hidrostática: Princípio de Arquimedes e Empuxo',
    bnccCode: 'EM13CNT108',
    difficulty: 'Médio',
    triWeight: 1.2,
    statement: 'Um bloco de ferro maciço de volume 0,002 m³ é completamente submerso na água (densidade d = 1000 kg/m³ e gravidade g = 10 m/s²). De acordo com o Princípio de Arquimedes, a intensidade da força de empuxo exercida pela água sobre o bloco é:',
    options: [
      { id: 'A', text: '20 N' },
      { id: 'B', text: '2 N' },
      { id: 'C', text: '200 N' },
      { id: 'D', text: '2000 N' },
      { id: 'E', text: '0,2 N' }
    ],
    correctAnswer: 'A',
    explanation: 'Pelo Princípio de Arquimedes, o empuxo E é igual ao peso do volume de líquido deslocado: E = d_líquido × V_submerso × g = 1000 × 0,002 × 10 = 20 N.',
    keyConcept: 'Cálculo do empuxo hidrostático de Arquimedes'
  },
  {
    id: 'fis-q9',
    examId: 'fisica-maratona-20q',
    number: 9,
    subject: 'Física',
    area: 'natureza',
    topic: 'Eletrostática: Lei de Coulomb',
    bnccCode: 'EM13CNT109',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Duas cargas elétricas puntiformes idênticas no vácuo interagem com uma força repulsiva de intensidade F quando separadas por uma distância d. Se a distância entre elas for dobrada para 2d, a nova força eletrostática entre as cargas será:',
    options: [
      { id: 'A', text: 'F / 4' },
      { id: 'B', text: 'F / 2' },
      { id: 'C', text: '2 F' },
      { id: 'D', text: '4 F' },
      { id: 'E', text: 'F' }
    ],
    correctAnswer: 'A',
    explanation: 'Pela Lei de Coulomb F = k·|q1·q2| / d², a força é inversamente proporcional ao quadrado da distância. Dobrando a distância (2d)² = 4d², a força fica reduzida a um quarto (F/4).',
    keyConcept: 'Proporcionalidade inversa com o quadrado da distância na Lei de Coulomb'
  },
  {
    id: 'fis-q10',
    examId: 'fisica-maratona-20q',
    number: 10,
    subject: 'Física',
    area: 'natureza',
    topic: 'Cinemática Escalar: Movimento Uniforme',
    bnccCode: 'EM13CNT110',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'Um trem de passageiros de 200 metros de comprimento desloca-se com velocidade escalar constante de 20 m/s. Quanto tempo o trem leva para atravessar completamente um túnel reto de 600 metros de extensão?',
    options: [
      { id: 'A', text: '40 segundos' },
      { id: 'B', text: '30 segundos' },
      { id: 'C', text: '10 segundos' },
      { id: 'D', text: '50 segundos' },
      { id: 'E', text: '20 segundos' }
    ],
    correctAnswer: 'A',
    explanation: 'Para atravessar completamente o túnel, o trem deve percorrer a distância total igual ao comprimento do túnel mais o comprimento do próprio trem: Δs = 600 + 200 = 800 m. Δt = Δs / v = 800 / 20 = 40 s.',
    keyConcept: 'Travessia de corpos extensos em movimento uniforme'
  },
  // 11 a 20
  {
    id: 'fis-q11',
    examId: 'fisica-maratona-20q',
    number: 11,
    subject: 'Física',
    area: 'natureza',
    topic: 'Termodinâmica: Primeira Lei da Termodinâmica',
    bnccCode: 'EM13CNT111',
    difficulty: 'Médio',
    triWeight: 1.2,
    statement: 'Um gás ideal confinado em um cilindro com êmbolo móvel recebe 1500 J de calor de uma fonte térmica e realiza um trabalho de expansão de 900 J sobre o meio externo. A variação da energia interna (ΔU) desse gás foi de:',
    options: [
      { id: 'A', text: '+600 J' },
      { id: 'B', text: '+2400 J' },
      { id: 'C', text: '-600 J' },
      { id: 'D', text: '+900 J' },
      { id: 'E', text: '0 J' }
    ],
    correctAnswer: 'A',
    explanation: 'Pela 1ª Lei da Termodinâmica: ΔU = Q - W = 1500 J - 900 J = +600 J. A energia interna do gás aumentou em 600 J.',
    keyConcept: 'Balanço energético na Primeira Lei da Termodinâmica'
  },
  {
    id: 'fis-q12',
    examId: 'fisica-maratona-20q',
    number: 12,
    subject: 'Física',
    area: 'natureza',
    topic: 'Eletromagnetismo: Indução de Faraday',
    bnccCode: 'EM13CNT112',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'As usinas geradoras hidrelétricas e eólicas convertem energia mecânica de rotação em energia elétrica baseando-se no princípio da Lei da Indução de Faraday, segundo a qual uma corrente elétrica é induzida em uma espira quando:',
    options: [
      { id: 'A', text: 'Ocorre uma variação temporal do fluxo magnético que atravessa a área delimitada pela espira.' },
      { id: 'B', text: 'Um campo magnético constante e estático permanece imutável por dias.' },
      { id: 'C', text: 'A espira é mantida em repouso absoluto no zero absoluto térmico.' },
      { id: 'D', text: 'Ocorre aquecimento por efeito Joule sem qualquer presença de ímãs.' },
      { id: 'E', text: 'Todas as linhas de campo elétrico são anuladas por isolantes de borracha.' }
    ],
    correctAnswer: 'A',
    explanation: 'A Lei de Faraday-Lenz estabelece que a força eletromotriz induzida é proporcional à taxa de variação temporal do fluxo magnético (ε = -dΦ/dt).',
    keyConcept: 'Indução eletromagnética e Lei de Faraday'
  },
  {
    id: 'fis-q13',
    examId: 'fisica-maratona-20q',
    number: 13,
    subject: 'Física',
    area: 'natureza',
    topic: 'Mecânica: Gravitação Universal de Newton',
    bnccCode: 'EM13CNT113',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'A aceleração da gravidade na superfície de um planeta esférico de massa M e raio R é expressa por g = G·M / R². Se um planeta hipotético possuir a mesma massa da Terra, mas raio correspondente ao dobro do raio terrestre (2R), sua gravidade superficial será:',
    options: [
      { id: 'A', text: 'Um quarto da gravidade terrestre (g / 4).' },
      { id: 'B', text: 'A metade da gravidade terrestre (g / 2).' },
      { id: 'C', text: 'O dobro da gravidade terrestre (2 g).' },
      { id: 'D', text: 'O quádruplo da gravidade terrestre (4 g).' },
      { id: 'E', text: 'Idêntica à gravidade terrestre.' }
    ],
    correctAnswer: 'A',
    explanation: 'Como g é inversamente proporcional a R², dobrando o raio para 2R a aceleração da gravidade fica dividida por 2² = 4, tornando-se g/4.',
    keyConcept: 'Gravidade superficial e Lei da Gravitação Universal'
  },
  {
    id: 'fis-q14',
    examId: 'fisica-maratona-20q',
    number: 14,
    subject: 'Física',
    area: 'natureza',
    topic: 'Circuitos Elétricos: Associação de Resistores em Paralelo',
    bnccCode: 'EM13CNT114',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'Dois resistores ôhmicos de resistências R1 = 6 Ω e R2 = 3 Ω são ligados em paralelo aos terminais de uma bateria ideal de 12 V. A resistência equivalente da associação e a corrente elétrica total fornecida pela bateria são, respectivamente:',
    options: [
      { id: 'A', text: 'Req = 2 Ω e itotal = 6 A' },
      { id: 'B', text: 'Req = 9 Ω e itotal = 1,33 A' },
      { id: 'C', text: 'Req = 4,5 Ω e itotal = 2,67 A' },
      { id: 'D', text: 'Req = 18 Ω e itotal = 0,66 A' },
      { id: 'E', text: 'Req = 1 Ω e itotal = 12 A' }
    ],
    correctAnswer: 'A',
    explanation: 'Em paralelo: Req = (R1 × R2) / (R1 + R2) = (6 × 3) / (6 + 3) = 18 / 9 = 2 Ω. A corrente total: i = U / Req = 12 V / 2 Ω = 6 A.',
    keyConcept: 'Associação de resistores em paralelo e corrente total'
  },
  {
    id: 'fis-q15',
    examId: 'fisica-maratona-20q',
    number: 15,
    subject: 'Física',
    area: 'natureza',
    topic: 'Óptica: Refração e Lei de Snell-Descartes',
    bnccCode: 'EM13CNT115',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Quando um raio de luz monocromática passa do ar (meio menos refringente com n = 1,0) para a água (meio mais refringente com n = 1,33) com incidência oblíqua, o raio refratado:',
    options: [
      { id: 'A', text: 'Aproxima-se da reta normal e sua velocidade de propagação diminui.' },
      { id: 'B', text: 'Afasta-se da reta normal e sua velocidade de propagação aumenta.' },
      { id: 'C', text: 'Continua sem qualquer desvio e sua frequência dobra.' },
      { id: 'D', text: 'Reflete-se 100% de volta ao ar sem refratar nenhuma fração de luz.' },
      { id: 'E', text: 'Transforma-se em raios gama por fusão fotoelétrica.' }
    ],
    correctAnswer: 'A',
    explanation: 'Ao ingressar em um meio de maior índice de refração (n2 > n1), a velocidade da luz diminui (v = c/n) e, pela Lei de Snell n1·sen(θ1) = n2·sen(θ2), o raio aproxima-se da normal (θ2 < θ1).',
    keyConcept: 'Refração luminosa e Lei de Snell-Descartes'
  },
  {
    id: 'fis-q16',
    examId: 'fisica-maratona-20q',
    number: 16,
    subject: 'Física',
    area: 'natureza',
    topic: 'Trabalho e Potência Mecânica',
    bnccCode: 'EM13CNT116',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Um guindaste eleva uma carga de 500 kg até uma altura de 10 metros em um intervalo de tempo de 20 segundos em velocidade constante (adote g = 10 m/s²). A potência mecânica média desenvolvida pelo motor do guindaste é:',
    options: [
      { id: 'A', text: '2500 W' },
      { id: 'B', text: '5000 W' },
      { id: 'C', text: '1250 W' },
      { id: 'D', text: '50.000 W' },
      { id: 'E', text: '250 W' }
    ],
    correctAnswer: 'A',
    explanation: 'Trabalho realizado W = m·g·h = 500 × 10 × 10 = 50.000 J. Potência média P = W / Δt = 50.000 J / 20 s = 2500 W (2,5 kW).',
    keyConcept: 'Cálculo de potência mecânica na elevação de cargas'
  },
  {
    id: 'fis-q17',
    examId: 'fisica-maratona-20q',
    number: 17,
    subject: 'Física',
    area: 'natureza',
    topic: 'Dilatação Térmica Linear dos Sólidos',
    bnccCode: 'EM13CNT117',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'Trilhos de trem de ferro possuem juntas de dilatação para evitar que os trilhos enverguem sob o calor do verão. Uma barra metálica de comprimento inicial 100 metros com coeficiente de dilatação linear α = 12 × 10^-6 °C^-1 é aquecida de 15 °C para 45 °C. A variação de comprimento (ΔL) da barra foi de:',
    options: [
      { id: 'A', text: '0,036 m (3,6 cm)' },
      { id: 'B', text: '0,36 m (36 cm)' },
      { id: 'C', text: '0,012 m (1,2 cm)' },
      { id: 'D', text: '0,0036 m (0,36 cm)' },
      { id: 'E', text: '0,12 m (12 cm)' }
    ],
    correctAnswer: 'A',
    explanation: 'ΔL = L0 × α × ΔT = 100 m × (12 × 10^-6 °C^-1) × (45 - 15) °C = 100 × 12 × 10^-6 × 30 = 0,036 m = 3,6 cm.',
    keyConcept: 'Dilatação linear de corpos sólidos'
  },
  {
    id: 'fis-q18',
    examId: 'fisica-maratona-20q',
    number: 18,
    subject: 'Física',
    area: 'natureza',
    topic: 'Física Moderna: O Efeito Fotoelétrico',
    bnccCode: 'EM13CNT118',
    difficulty: 'Difícil',
    triWeight: 1.25,
    statement: 'Albert Einstein foi laureado com o Prêmio Nobel de Física em 1921 pela explicação do Efeito Fotoelétrico. De acordo com a teoria quântica formulada por ele:',
    options: [
      { id: 'A', text: 'A luz é composta por pacotes discretos de energia chamados fótons (E = h·f), e a ejeção de elétrons depende da frequência da luz incidente superar uma frequência de corte.' },
      { id: 'B', text: 'A emissão de elétrons só ocorre se a intensidade luminosa for mantida constante por pelo menos dez horas.' },
      { id: 'C', text: 'Os elétrons são criados espontaneamente no interior dos núcleos atômicos pelo calor residual.' },
      { id: 'D', text: 'A luz comporta-se exclusivamente como uma onda clássica contínua sem propriedades corpusculares.' },
      { id: 'E', text: 'Qualquer feixe de luz vermelha ejeta elétrons com energia cinética infinita.' }
    ],
    correctAnswer: 'A',
    explanation: 'Einstein propôs que a energia luminosa é quantizada em fótons. Se a energia do fóton (h·f) superar a função trabalho do metal, o elétron é ejetado instantaneamente.',
    keyConcept: 'Quantização da luz e Efeito Fotoelétrico de Einstein'
  },
  {
    id: 'fis-q19',
    examId: 'fisica-maratona-20q',
    number: 19,
    subject: 'Física',
    area: 'natureza',
    topic: 'Dinâmica: Quantidade de Movimento e Colisões',
    bnccCode: 'EM13CNT119',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Em um sistema isolado de forças externas, durante uma colisão perfeitamente inelástica entre dois corpos, o que acontece com a quantidade de movimento total e a energia cinética do sistema?',
    options: [
      { id: 'A', text: 'A quantidade de movimento se conserva, mas parte da energia cinética é dissipada na forma de calor e deformação mecânica.' },
      { id: 'B', text: 'Tanto a quantidade de movimento quanto a energia cinética se conservam integralmente.' },
      { id: 'C', text: 'A quantidade de movimento cai a zero e a energia cinética dobra.' },
      { id: 'D', text: 'A energia cinética se conserva, mas a quantidade de movimento é destruída.' },
      { id: 'E', text: 'Nenhuma grandeza física se conserva em colisões inelásticas.' }
    ],
    correctAnswer: 'A',
    explanation: 'Em qualquer colisão isolada, a quantidade de movimento (momento linear) se conserva (Q_antes = Q_depois). Na colisão inelástica os corpos se unem e a perda de energia cinética é máxima.',
    keyConcept: 'Conservação da quantidade de movimento em colisões'
  },
  {
    id: 'fis-q20',
    examId: 'fisica-maratona-20q',
    number: 20,
    subject: 'Física',
    area: 'natureza',
    topic: 'Eletromagnetismo: Força Magnética de Lorentz',
    bnccCode: 'EM13CNT120',
    difficulty: 'Médio',
    triWeight: 1.2,
    statement: 'Uma partícula com carga elétrica positiva q move-se com velocidade v perpendicularmente às linhas de indução de um campo magnético uniforme B. A trajetória descrita pela partícula nessa região é:',
    options: [
      { id: 'A', text: 'Circular uniforme, pois a força magnética atua perpendicularmente à velocidade como uma resultante centrípeta pura.' },
      { id: 'B', text: 'Retilínea acelerada com velocidade crescente rumo ao polo norte magnético.' },
      { id: 'C', text: 'Parabólica idêntica à de um projétil em queda livre no vácuo.' },
      { id: 'D', text: 'Repouso imediato por frenagem magnética dissipativa.' },
      { id: 'E', text: 'Espiral convergente que colapsa no centro em menos de 1 segundo.' }
    ],
    correctAnswer: 'A',
    explanation: 'A Força de Lorentz F = q·v·B·sen(90°) é sempre perpendicular ao vetor velocidade instantânea v. Não realiza trabalho e altera apenas a direção do vetor v, gerando MCU.',
    keyConcept: 'Movimento circular de cargas elétricas em campos magnéticos uniformes'
  }
];

export const FISICA_10_QUESTIONS: Question[] = FISICA_20_QUESTIONS.slice(0, 10).map((q) => ({
  ...q,
  examId: 'fisica-focado-10q'
}));

export const FISICA_5_QUESTIONS: Question[] = FISICA_20_QUESTIONS.slice(0, 5).map((q) => ({
  ...q,
  examId: 'fisica-rapido-5q'
}));

// ==========================================
// 5. QUÍMICA (20 QUESTÕES BNCC / ENEM)
// ==========================================
export const QUIMICA_20_QUESTIONS: Question[] = [
  {
    id: 'qui-q1',
    examId: 'quimica-maratona-20q',
    number: 1,
    subject: 'Química',
    area: 'natureza',
    topic: 'Estequiometria e Relações de Massa',
    bnccCode: 'EM13CNT301',
    difficulty: 'Médio',
    triWeight: 1.2,
    statement: 'Na queima completa de 1 mol de gás metano (CH4 + 2 O2 -> CO2 + 2 H2O), sabendo que as massas molares são C = 12 g/mol, H = 1 g/mol e O = 16 g/mol, qual é a massa de gás carbônico (CO2) produzida a partir da combustão de 32 g de metano?',
    options: [
      { id: 'A', text: '88 g' },
      { id: 'B', text: '44 g' },
      { id: 'C', text: '22 g' },
      { id: 'D', text: '176 g' },
      { id: 'E', text: '64 g' }
    ],
    correctAnswer: 'A',
    explanation: 'Massa molar do CH4 = 16 g/mol. Logo, 32 g de CH4 correspondem a 2 mols de metano. Pela estequiometria 1 mol CH4 produz 1 mol CO2 (44 g). Assim, 2 mols de CH4 produzem 2 × 44 g = 88 g de CO2.',
    keyConcept: 'Cálculo estequiométrico em reações de combustão'
  },
  {
    id: 'qui-q2',
    examId: 'quimica-maratona-20q',
    number: 2,
    subject: 'Química',
    area: 'natureza',
    topic: 'Soluções: Concentração Molar',
    bnccCode: 'EM13CNT302',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Um químico dissolve 58,5 g de cloreto de sódio (NaCl, massa molar = 58,5 g/mol) em água destilada suficiente para completar o volume de 500 mL (0,5 L) de solução aquosa. A concentração em quantidade de matéria (molaridade) dessa solução é:',
    options: [
      { id: 'A', text: '2,0 mol/L' },
      { id: 'B', text: '1,0 mol/L' },
      { id: 'C', text: '0,5 mol/L' },
      { id: 'D', text: '4,0 mol/L' },
      { id: 'E', text: '0,1 mol/L' }
    ],
    correctAnswer: 'A',
    explanation: 'Número de mols n = m / M = 58,5 g / 58,5 g/mol = 1,0 mol. Molaridade M = n / V = 1,0 mol / 0,5 L = 2,0 mol/L.',
    keyConcept: 'Cálculo de concentração molar de soluções'
  },
  {
    id: 'qui-q3',
    examId: 'quimica-maratona-20q',
    number: 3,
    subject: 'Química',
    area: 'natureza',
    topic: 'Equilíbrio Químico e Princípio de Le Chatelier',
    bnccCode: 'EM13CNT303',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Considere o equilíbrio químico da síntese da amônia pelo processo Haber-Bosch: N2(g) + 3 H2(g) <=> 2 NH3(g) (reversível, exotérmica com ΔH < 0). Para deslocar o equilíbrio no sentido de aumentar a produção de NH3, deve-se:',
    options: [
      { id: 'A', text: 'Aumentar a pressão total sobre o sistema (diminuir o volume) e reduzir a temperatura.' },
      { id: 'B', text: 'Diminuir a pressão total e elevar a temperatura do reator.' },
      { id: 'C', text: 'Remover continuamente o gás nitrogênio N2 do sistema.' },
      { id: 'D', text: 'Adicionar um gás nobre inerte à pressão constante.' },
      { id: 'E', text: 'Elevar a temperatura sem alterar a concentração dos reagentes.' }
    ],
    correctAnswer: 'A',
    explanation: 'O aumento de pressão desloca para o lado de menor volume gasoso (4 mols -> 2 mols de gás). Como a reação é exotérmica (libera calor), o abaixamento da temperatura favorece a síntese de NH3.',
    keyConcept: 'Deslocamento de equilíbrio pelo Princípio de Le Chatelier'
  },
  {
    id: 'qui-q4',
    examId: 'quimica-maratona-20q',
    number: 4,
    subject: 'Química',
    area: 'natureza',
    topic: 'Química Orgânica: Funções Oxigenadas',
    bnccCode: 'EM13CNT304',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'O vinagre comercial contém cerca de 4% a 5% de ácido acético (ácido etanoico, CH3COOH). O grupo funcional característico que confere as propriedades ácidas a esse composto é a:',
    options: [
      { id: 'A', text: 'Carboxila (-COOH).' },
      { id: 'B', text: 'Hidroxila ligada a carbono saturado formando álcool (-OH).' },
      { id: 'C', text: 'Carbonila entre dois carbonos formando cetona (-C(=O)-).' },
      { id: 'D', text: 'Amina primária (-NH2).' },
      { id: 'E', text: 'Éter alcóxi (-O-).' }
    ],
    correctAnswer: 'A',
    explanation: 'A carboxila (união de carbonila C=O e hidroxila -OH no mesmo carbono) caracteriza os ácidos carboxílicos, capazes de ionizar e liberar prótons H+ em solução.',
    keyConcept: 'Identificação da função carboxila nos ácidos orgânicos'
  },
  {
    id: 'qui-q5',
    examId: 'quimica-maratona-20q',
    number: 5,
    subject: 'Química',
    area: 'natureza',
    topic: 'Termoquímica: Reações Endo e Exotérmicas',
    bnccCode: 'EM13CNT305',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'A queima do etanol combustível nos motores de automóveis libera grande quantidade de energia térmica para movimentar os pistões. Esse processo químico é classificado termodinamicamente como:',
    options: [
      { id: 'A', text: 'Exotérmico, apresentando variação de entalpia negativa (ΔH < 0).' },
      { id: 'B', text: 'Endotérmico, apresentando variação de entalpia positiva (ΔH > 0).' },
      { id: 'C', text: 'Isotérmico sem nenhuma troca de calor com a vizinhança.' },
      { id: 'D', text: 'Adiabático perpétuo com entalpia nula (ΔH = 0).' },
      { id: 'E', text: 'Endotérmico com absorção total da radiação ultravioleta.' }
    ],
    correctAnswer: 'A',
    explanation: 'Reações de combustão liberam calor para o ambiente. A entalpia dos produtos é menor que a entalpia dos reagentes, logo ΔH = Hprodutos - Hreagentes < 0 (exotérmica).',
    keyConcept: 'Caracterização de processos exotérmicos na termoquímica'
  },
  {
    id: 'qui-q6',
    examId: 'quimica-maratona-20q',
    number: 6,
    subject: 'Química',
    area: 'natureza',
    topic: 'Eletroquímica: Pilha de Daniell e Potencial Padrão',
    bnccCode: 'EM13CNT306',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Na clássica pilha eletroquímica de Daniell (Zn / Zn²⁺ // Cu²⁺ / Cu), sabendo que os potenciais padrão de redução são E°(Zn²⁺/Zn) = -0,76 V e E°(Cu²⁺/Cu) = +0,34 V, o eletrodo que sofre oxidação (ânodo) e a força eletromotriz (ΔE°) da pilha são:',
    options: [
      { id: 'A', text: 'Eletrodo de Zinco (ânodo) e ΔE° = +1,10 V' },
      { id: 'B', text: 'Eletrodo de Cobre (ânodo) e ΔE° = -0,42 V' },
      { id: 'C', text: 'Eletrodo de Zinco (cátodo) e ΔE° = +0,42 V' },
      { id: 'D', text: 'Eletrodo de Cobre (cátodo) e ΔE° = +2,20 V' },
      { id: 'E', text: 'Eletrodo de Platina com ΔE° = 0,00 V' }
    ],
    correctAnswer: 'A',
    explanation: 'O zinco possui menor potencial de redução (-0,76 V), portanto oxida no ânodo (Zn -> Zn²⁺ + 2e⁻). O cobre reduz no cátodo. ΔE° = E°maior - E°menor = +0,34 - (-0,76) = +1,10 V.',
    keyConcept: 'Funcionamento de pilhas galvânicas e cálculo da ddp'
  },
  {
    id: 'qui-q7',
    examId: 'quimica-maratona-20q',
    number: 7,
    subject: 'Química',
    area: 'natureza',
    topic: 'Cinética Química e Catalisadores',
    bnccCode: 'EM13CNT307',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Nos escapamentos dos veículos modernos, o catalisador converte gases nocivos (como CO e óxidos de nitrogênio) em gases menos tóxicos (CO2 e N2). A função físico-química de um catalisador é:',
    options: [
      { id: 'A', text: 'Aumentar a velocidade da reação fornecendo um caminho alternativo com menor energia de ativação, sem ser consumido no processo global.' },
      { id: 'B', text: 'Aumentar a variação de entalpia (ΔH) tornando a reação mais endotérmica.' },
      { id: 'C', text: 'Deslocar o equilíbrio químico para aumentar o rendimento teórico máximo de produtos.' },
      { id: 'D', text: 'Ser integralmente transformado em reagente após a primeira queima.' },
      { id: 'E', text: 'Diminuir a frequência de colisões efetivas entre as moléculas gasosas.' }
    ],
    correctAnswer: 'A',
    explanation: 'O catalisador não altera o ΔH nem a constante de equilíbrio; ele acelera a taxa de reação ao abaixar a energia de ativação necessária para formar o complexo ativado.',
    keyConcept: 'Mecanismo de ação dos catalisadores químicos'
  },
  {
    id: 'qui-q8',
    examId: 'quimica-maratona-20q',
    number: 8,
    subject: 'Química',
    area: 'natureza',
    topic: 'Ligações Químicas e Forças Intermoleculares',
    bnccCode: 'EM13CNT308',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A água (H2O) possui ponto de ebulição anormalmente elevado (100 °C) quando comparada a outros hidretos de calcogênios de maior massa molecular, como o sulfeto de hidrogênio (H2S, ebulição em -60 °C). Isso ocorre porque entre as moléculas de água existem intensas:',
    options: [
      { id: 'A', text: 'Ligações de hidrogênio decorrentes da forte polaridade entre o hidrogênio e o oxigênio altamente eletronegativo.' },
      { id: 'B', text: 'Ligações iônicas com transferência permanente de elétrons.' },
      { id: 'C', text: 'Interações de dispersão de London de baixíssima intensidade.' },
      { id: 'D', text: 'Ligações metálicas com nuvem eletrônica deslocalizada.' },
      { id: 'E', text: 'Repulsões nucleares de Coulomb que atraem as moléculas.' }
    ],
    correctAnswer: 'A',
    explanation: 'A ligação de hidrogênio (H ligado a F, O ou N) é uma interação intermolecular forte que exige maior quantidade de energia térmica para romper e vaporizar o líquido.',
    keyConcept: 'Influência das ligações de hidrogênio nas propriedades físicas da água'
  },
  {
    id: 'qui-q9',
    examId: 'quimica-maratona-20q',
    number: 9,
    subject: 'Química',
    area: 'natureza',
    topic: 'Química Ambiental: Chuva Ácida',
    bnccCode: 'EM13CNT309',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A queima de combustíveis fósseis com alto teor de enxofre (como carvão mineral e óleo diesel) emite dióxido de enxofre (SO2). Na atmosfera, o SO2 oxida a SO3 e reage com o vapor de água formando:',
    options: [
      { id: 'A', text: 'Ácido sulfúrico (H2SO4), o principal constituinte das chuvas ácidas danosas a ecossistemas e monumentos.' },
      { id: 'B', text: 'Hidróxido de sódio (NaOH), neutralizando a atmosfera.' },
      { id: 'C', text: 'Cloreto de potássio (KCl) que fertiliza o solo.' },
      { id: 'D', text: 'Gás ozônio atóxico de odor agradável.' },
      { id: 'E', text: 'Bicarbonato de cálcio insolúvel.' }
    ],
    correctAnswer: 'A',
    explanation: 'A reação SO3 + H2O -> H2SO4 gera ácido sulfúrico concentrado nas gotículas das nuvens, reduzindo o pH da chuva para valores inferiores a 4,5.',
    keyConcept: 'Origem química dos ácidos na chuva ácida'
  },
  {
    id: 'qui-q10',
    examId: 'quimica-maratona-20q',
    number: 10,
    subject: 'Química',
    area: 'natureza',
    topic: 'Tabela Periódica: Eletronegatividade e Raio Atômico',
    bnccCode: 'EM13CNT310',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Na Tabela Periódica dos elementos químicos, qual é o elemento que possui a maior eletronegatividade (capacidade de atrair elétrons em uma ligação covalente)?',
    options: [
      { id: 'A', text: 'Flúor (F)' },
      { id: 'B', text: 'Frâncio (Fr)' },
      { id: 'C', text: 'Césio (Cs)' },
      { id: 'D', text: 'Hélio (He)' },
      { id: 'E', text: 'Cloro (Cl)' }
    ],
    correctAnswer: 'A',
    explanation: 'O flúor (F) localiza-se no topo superior direito da família dos halogênios (família 17) e tem a maior eletronegatividade da tabela periódica (valor 4,0 na escala de Pauling).',
    keyConcept: 'Eletronegatividade dos elementos na Tabela Periódica'
  },
  // 11 a 20
  {
    id: 'qui-q11',
    examId: 'quimica-maratona-20q',
    number: 11,
    subject: 'Química',
    area: 'natureza',
    topic: 'Química Orgânica: Isomeria Plana e Espacial',
    bnccCode: 'EM13CNT311',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Os compostos butan-1-ol e etoxietano (éter dietílico) possuem a mesma fórmula molecular (C4H10O), porém pertencem a funções orgânicas distintas (álcool e éter). Esse caso é classificado como isomeria plana de:',
    options: [
      { id: 'A', text: 'Função.' },
      { id: 'B', text: 'Cadeia.' },
      { id: 'C', text: 'Posição.' },
      { id: 'D', text: 'Compensação (metameria).' },
      { id: 'E', text: 'Tautomeria.' }
    ],
    correctAnswer: 'A',
    explanation: 'Compostos que compartilham a mesma fórmula molecular mas pertencem a grupos funcionais diferentes (ex: álcool e éter, ou aldeído e cetona) apresentam isomeria de função.',
    keyConcept: 'Isomeria plana de função em compostos orgânicos'
  },
  {
    id: 'qui-q12',
    examId: 'quimica-maratona-20q',
    number: 12,
    subject: 'Química',
    area: 'natureza',
    topic: 'Radioatividade: Emissões Alfa, Beta e Gama',
    bnccCode: 'EM13CNT312',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Quando um núcleo atômico instável de Urânio-238 (92 U 238) emite uma partícula alfa (2 α 4), o núcleo filho resultante é o Tório, que possui número atômico e número de massa iguais a:',
    options: [
      { id: 'A', text: 'Z = 90 e A = 234' },
      { id: 'B', text: 'Z = 94 e A = 242' },
      { id: 'C', text: 'Z = 91 e A = 238' },
      { id: 'D', text: 'Z = 88 e A = 230' },
      { id: 'E', text: 'Z = 92 e A = 236' }
    ],
    correctAnswer: 'A',
    explanation: 'Pela 1ª Lei da Radioatividade (Lei de Soddy): a emissão alfa reduz o número atômico Z em 2 unidades (92 - 2 = 90) e o número de massa A em 4 unidades (238 - 4 = 234).',
    keyConcept: 'Primeira Lei da Radioatividade e decaimento alfa'
  },
  {
    id: 'qui-q13',
    examId: 'quimica-maratona-20q',
    number: 13,
    subject: 'Química',
    area: 'natureza',
    topic: 'Equilíbrio Iônico: Conceito de pH e pOH',
    bnccCode: 'EM13CNT313',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'Uma solução aquosa de ácido clorídrico (HCl) a 25 °C apresenta concentração de íons hidrogênio [H+] = 1,0 × 10^-3 mol/L. O pH dessa solução e seu caráter químico são:',
    options: [
      { id: 'A', text: 'pH = 3 (ácido)' },
      { id: 'B', text: 'pH = 11 (básico)' },
      { id: 'C', text: 'pH = 7 (neutro)' },
      { id: 'D', text: 'pH = 1 (muito ácido)' },
      { id: 'E', text: 'pH = 10 (alcalino)' }
    ],
    correctAnswer: 'A',
    explanation: 'pH = -log[H+] = -log(1,0 × 10^-3) = 3. Como o valor de pH é menor que 7 a 25 °C, a solução é francamente ácida.',
    keyConcept: 'Cálculo logarítmico de pH e escala de acidez'
  },
  {
    id: 'qui-q14',
    examId: 'quimica-maratona-20q',
    number: 14,
    subject: 'Química',
    area: 'natureza',
    topic: 'Química Verde e Polímeros Biodegradáveis',
    bnccCode: 'EM13CNT314',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'O ácido polilático (PLA) é um polímero termoplástico biodegradável obtido a partir de recursos vegetais renováveis como o amido de milho e cana-de-açúcar. Em relação aos plásticos derivados de petróleo como o polietileno, a principal vantagem ecológica do PLA é:',
    options: [
      { id: 'A', text: 'Ser passível de compostagem biológica por microrganismos, degradando-se em água e CO2 em poucos meses.' },
      { id: 'B', text: 'Permanecer inalterado por 500 anos no solo sem sofrer degradação química.' },
      { id: 'C', text: 'Emitir gases halogenados clorofluorcarbonetos (CFCs) ao derreter.' },
      { id: 'D', text: 'Não poder ser moldado termicamente sob nenhuma temperatura.' },
      { id: 'E', text: 'Consumir óleo cru fóssil em 98% da sua composição molecular.' }
    ],
    correctAnswer: 'A',
    explanation: 'Biopolímeros como o PLA reduzem a pegada de carbono fóssil e diminuem o acúmulo de microplásticos perenes em aterros e oceanos através da biodegradação enzimática.',
    keyConcept: 'Princípios da Química Verde e plásticos biodegradáveis'
  },
  {
    id: 'qui-q15',
    examId: 'quimica-maratona-20q',
    number: 15,
    subject: 'Química',
    area: 'natureza',
    topic: 'Funções Inorgânicas: Reações de Neutralização',
    bnccCode: 'EM13CNT315',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'A reação química estequiométrica entre uma solução de hidróxido de cálcio [Ca(OH)2] e ácido sulfúrico (H2SO4) produz como produtos sal e água, cuja fórmula do sal formado é:',
    options: [
      { id: 'A', text: 'CaSO4 (sulfato de cálcio)' },
      { id: 'B', text: 'CaS (sulfeto de cálcio)' },
      { id: 'C', text: 'Ca(SO3)2 (sulfitato de cálcio)' },
      { id: 'D', text: 'CaH2 (hidreto de cálcio)' },
      { id: 'E', text: 'CaO (óxido de cálcio)' }
    ],
    correctAnswer: 'A',
    explanation: 'Ca(OH)2 + H2SO4 -> CaSO4 + 2 H2O. O cátion bivalente Ca²⁺ une-se ao ânion sulfato SO4²⁻ formando o sulfato de cálcio CaSO4 (componente do gesso).',
    keyConcept: 'Reações inorgânicas de neutralização total'
  },
  {
    id: 'qui-q16',
    examId: 'quimica-maratona-20q',
    number: 16,
    subject: 'Química',
    area: 'natureza',
    topic: 'Propriedades Coligativas: Crioscopia e Ebulioscopia',
    bnccCode: 'EM13CNT316',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Em países de inverno rigoroso, adiciona-se cloreto de sódio (sal de cozinha) sobre as pistas com gelo para derretê-lo e prevenir acidentes. Esse procedimento fundamenta-se na propriedade coligativa denominada:',
    options: [
      { id: 'A', text: 'Crioscopia (abaixamento da temperatura de congelamento do solvente pela presença de um soluto).' },
      { id: 'B', text: 'Ebulioscopia (elevação do ponto de ebulição do solvente).' },
      { id: 'C', text: 'Tonoscopia (aumento da pressão de vapor do líquido puro).' },
      { id: 'D', text: 'Osmose reversa forçada por campos elétricos.' },
      { id: 'E', text: 'Sublimação forçada de gases nobres congelados.' }
    ],
    correctAnswer: 'A',
    explanation: 'A adição de soluto não volátil diminui o ponto de fusão do solvente (efeito crioscópico), fazendo com que a água permaneça líquida mesmo abaixo de 0 °C.',
    keyConcept: 'Efeito crioscópico nas propriedades coligativas'
  },
  {
    id: 'qui-q17',
    examId: 'quimica-maratona-20q',
    number: 17,
    subject: 'Química',
    area: 'natureza',
    topic: 'Química Orgânica: Reações de Saponificação',
    bnccCode: 'EM13CNT317',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A fabricação artesanal de sabão através da reação entre triglicerídeos (óleos ou gorduras) e uma base forte como a soda cáustica (NaOH) sob aquecimento é denominada tecnicamente:',
    options: [
      { id: 'A', text: 'Saponificação (ou hidrólise alcalina de ésteres), gerando sais de ácidos graxos e glicerol.' },
      { id: 'B', text: 'Polimerização por adição catalítica de alcenos.' },
      { id: 'C', text: 'Craqueamento catalítico térmico de parafinas.' },
      { id: 'D', text: 'Fermentação acética anaeróbia.' },
      { id: 'E', text: 'Esterificação direta de Fischer com ácido clorídrico concentrado.' }
    ],
    correctAnswer: 'A',
    explanation: 'A hidrólise alcalina de triacilgliceróis cliva as ligações éster, produzindo o sal de sódio do ácido graxo (o sabão anfifílico) e propano-1,2,3-triol (glicerina).',
    keyConcept: 'Mecanismo da reação de saponificação'
  },
  {
    id: 'qui-q18',
    examId: 'quimica-maratona-20q',
    number: 18,
    subject: 'Química',
    area: 'natureza',
    topic: 'Modelos Atômicos Históricos',
    bnccCode: 'EM13CNT318',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'O experimento clássico de bombardeamento de uma fina lâmina de ouro com partículas alfa carregadas positivamente levou Ernest Rutherford a propor o modelo atômico com:',
    options: [
      { id: 'A', text: 'Um núcleo central diminuto, denso e positivo, cercado por uma vasta eletrosfera praticamente vazia.' },
      { id: 'B', text: 'Uma esfera maciça e indivisível semelhante a uma bola de bilhar (Dalton).' },
      { id: 'C', text: 'Uma massa positiva fluida contínua incrustada de elétrons como um pudim de passas (Thomson).' },
      { id: 'D', text: 'Órbitas estacionárias quantizadas por números quânticos azimutais (Bohr).' },
      { id: 'E', text: 'Ausência total de cargas elétricas no interior da matéria.' }
    ],
    correctAnswer: 'A',
    explanation: 'Como a maioria das partículas alfa atravessou a lâmina sem sofrer desvios e poucas ricochetearam, Rutherford demonstrou o caráter nuclear e a vacuidade do átomo.',
    keyConcept: 'Modelo atômico planetário de Rutherford'
  },
  {
    id: 'qui-q19',
    examId: 'quimica-maratona-20q',
    number: 19,
    subject: 'Química',
    area: 'natureza',
    topic: 'Química Orgânica: Petróleo e Fracionamento',
    bnccCode: 'EM13CNT319',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'Nas refinarias de petróleo, a separação dos diversos derivados (como gás liquefeito, gasolina, querosene, óleo diesel e asfalto) baseia-se na técnica física de:',
    options: [
      { id: 'A', text: 'Destilação fracionada em torres com pratos, aproveitando as diferentes temperaturas de ebulição das frações hidrocarbônicas.' },
      { id: 'B', text: 'Filtração a vácuo com membranas de osmose celular.' },
      { id: 'C', text: 'Centrifugação rotativa de alta velocidade em cubas de cobre.' },
      { id: 'D', text: 'Levigação magnética em leitos de areia lavada.' },
      { id: 'E', text: 'Decantação gravitacional sem qualquer aquecimento.' }
    ],
    correctAnswer: 'A',
    explanation: 'O petróleo cru aquecido sobe pela torre de fracionamento; as frações mais leves e voláteis condensam no topo em temperaturas mais baixas e as mais pesadas na base.',
    keyConcept: 'Destilação fracionada na indústria do petróleo'
  },
  {
    id: 'qui-q20',
    examId: 'quimica-maratona-20q',
    number: 20,
    subject: 'Química',
    area: 'natureza',
    topic: 'Gases Ideais: Equação de Clapeyron',
    bnccCode: 'EM13CNT320',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Um balão meteorológico indeformável de 24,6 litros contém 1,0 mol de gás hélio à temperatura de 300 K. Considerando a constante universal dos gases ideais R = 0,082 atm·L/mol·K, a pressão exercida pelo gás no interior do balão é:',
    options: [
      { id: 'A', text: '1,0 atm' },
      { id: 'B', text: '2,0 atm' },
      { id: 'C', text: '0,5 atm' },
      { id: 'D', text: '5,0 atm' },
      { id: 'E', text: '10,0 atm' }
    ],
    correctAnswer: 'A',
    explanation: 'Pela Equação de Clapeyron P·V = n·R·T -> P = (n·R·T) / V = (1,0 × 0,082 × 300) / 24,6 = 24,6 / 24,6 = 1,0 atm.',
    keyConcept: 'Aplicação da Equação de Estado dos Gases Ideais'
  }
];

export const QUIMICA_10_QUESTIONS: Question[] = QUIMICA_20_QUESTIONS.slice(0, 10).map((q) => ({
  ...q,
  examId: 'quimica-focado-10q'
}));

export const QUIMICA_5_QUESTIONS: Question[] = QUIMICA_20_QUESTIONS.slice(0, 5).map((q) => ({
  ...q,
  examId: 'quimica-rapido-5q'
}));

// ==========================================
// 6. INGLÊS (10 QUESTÕES BNCC / ENEM)
// ==========================================
export const INGLES_10_QUESTIONS: Question[] = [
  {
    id: 'ing-q1',
    examId: 'ingles-focado-10q',
    number: 1,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Leitura e Interpretação: Conectivos (Linking Words)',
    bnccCode: 'EM13LGG401',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'No trecho: "Solar energy is becoming increasingly affordable; however, storing electricity efficiently during rainy seasons remains a technological hurdle.", o conectivo em destaque "however" expressa a ideia de:',
    options: [
      { id: 'A', text: 'Contraste, adversidade ou oposição.' },
      { id: 'B', text: 'Conclusão lógica de um raciocínio anterior.' },
      { id: 'C', text: 'Adição de novos elementos idênticos.' },
      { id: 'D', text: 'Condição temporária indispensável.' },
      { id: 'E', text: 'Exemplo ilustrativo de uso cotidiano.' }
    ],
    correctAnswer: 'A',
    explanation: '"However" é uma conjunção/advérbio de transição adversativa equivalente a "no entanto", "porém" ou "entretanto", introduzindo um contraste com a oração anterior.',
    keyConcept: 'Linking words de contraste e oposição em língua inglesa'
  },
  {
    id: 'ing-q2',
    examId: 'ingles-focado-10q',
    number: 2,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Falsos Cognatos (False Friends)',
    bnccCode: 'EM13LGG402',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'Na frase: "The researcher actually discovered the origin of the fossil after years of field investigation", a palavra "actually" traduz-se corretamente para o português como:',
    options: [
      { id: 'A', text: 'Na verdade / realmente.' },
      { id: 'B', text: 'Atualmente / nos dias de hoje.' },
      { id: 'C', text: 'Acidentalmente / por acaso.' },
      { id: 'D', text: 'Ativamente com vigor físico.' },
      { id: 'E', text: 'Antecipadamente no prazo estipulado.' }
    ],
    correctAnswer: 'A',
    explanation: '"Actually" é um clássico falso amigo (false friend). Não significa "atualmente" (que em inglês é "currently" ou "nowadays"), mas sim "na realidade", "de fato" ou "realmente".',
    keyConcept: 'Identificação de falsos cognatos na leitura em inglês'
  },
  {
    id: 'ing-q3',
    examId: 'ingles-focado-10q',
    number: 3,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Interpretação Textual: Compreensão Global',
    bnccCode: 'EM13LGG403',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Read the sentence: "Artificial Intelligence will not necessarily replace human teachers; rather, it has the potential to relieve them of mundane administrative chores so they can focus on pedagogical mentoring." According to the author, AI tools in education will:',
    options: [
      { id: 'A', text: 'Liberar os educadores de tarefas burocráticas rotineiras para que se dediquem mais à mentoria dos estudantes.' },
      { id: 'B', text: 'Substituir 100% dos professores de ensino fundamental até o final desta década.' },
      { id: 'C', text: 'Aumentar a carga burocrática e proibir o contato direto entre alunos e tutores humanos.' },
      { id: 'D', text: 'Eliminar todas as avaliações pedagógicas escritas em sala de aula.' },
      { id: 'E', text: 'Demitir gestores escolares que não utilizem inteligência artificial diariamente.' }
    ],
    correctAnswer: 'A',
    explanation: 'O texto aponta que a IA atuará como apoio aliviando tarefas monótonas ("mundane administrative chores"), permitindo aos professores priorizar a orientação pedagógica humana.',
    keyConcept: 'Compreensão global de textos de opinião contemporâneos'
  },
  {
    id: 'ing-q4',
    examId: 'ingles-focado-10q',
    number: 4,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Verbos Modais: Obrigação e Recomendação',
    bnccCode: 'EM13LGG404',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Em: "Citizens should verify information across reliable sources before sharing news on social media", o verbo modal "should" transmite a ideia de:',
    options: [
      { id: 'A', text: 'Conselho, recomendação ou sugestão prudente.' },
      { id: 'B', text: 'Obrigação militar com sanção penal imediata.' },
      { id: 'C', text: 'Habilidade física inata adquirida na infância.' },
      { id: 'D', text: 'Permissão formal concedida por uma autoridade judicial.' },
      { id: 'E', text: 'Impossibilidade absoluta de realização do evento.' }
    ],
    correctAnswer: 'A',
    explanation: 'O modal "should" é empregado primariamente para expressar conselhos e recomendações ("deveria / deveriam").',
    keyConcept: 'Uso de verbos modais (modal verbs) em língua inglesa'
  },
  {
    id: 'ing-q5',
    examId: 'ingles-focado-10q',
    number: 5,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Voz Passiva em Textos Científicos',
    bnccCode: 'EM13LGG405',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'A frase na voz passiva: "Penicillin was discovered by Alexander Fleming in 1928" tem como forma ativa correspondente no passado simples:',
    options: [
      { id: 'A', text: 'Alexander Fleming discovered penicillin in 1928.' },
      { id: 'B', text: 'Alexander Fleming had been discovering penicillin in 1928.' },
      { id: 'C', text: 'Alexander Fleming will discover penicillin in 1928.' },
      { id: 'D', text: 'Alexander Fleming discovers penicillin in 1928.' },
      { id: 'E', text: 'Penicillin discovers Alexander Fleming in 1928.' }
    ],
    correctAnswer: 'A',
    explanation: 'O sujeito da ativa torna-se o agente da passiva (by Fleming), o objeto direto vira sujeito da passiva (penicillin) e o verbo passa para "was + particípio".',
    keyConcept: 'Conversão entre voz ativa e voz passiva'
  },
  {
    id: 'ing-q6',
    examId: 'ingles-focado-10q',
    number: 6,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Expressões Idiomáticas (Idioms)',
    bnccCode: 'EM13LGG406',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'Quando alguém afirma em uma reunião de negócios: "Let’s not beat around the bush; we need to address our budget deficit immediately", a expressão idiomática "beat around the bush" significa:',
    options: [
      { id: 'A', text: 'Fazer rodeios, enrolar ou evitar ir direto ao ponto principal.' },
      { id: 'B', text: 'Cuidar do jardim e podar árvores da praça.' },
      { id: 'C', text: 'Gastar dinheiro de forma descontrolada em festas.' },
      { id: 'D', text: 'Concordar silenciosamente com tudo o que foi proposto.' },
      { id: 'E', text: 'Encerrar a reunião e ir para casa sem almoçar.' }
    ],
    correctAnswer: 'A',
    explanation: '"To beat around the bush" é o equivalente em inglês a "fazer rodeios", "ficar de enrolação" em vez de tratar com clareza o tema fulcral.',
    keyConcept: 'Expressões idiomáticas do inglês cotidiano'
  },
  {
    id: 'ing-q7',
    examId: 'ingles-focado-10q',
    number: 7,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Leitura de Infográfico e Dados Quantitativos',
    bnccCode: 'EM13LGG407',
    difficulty: 'Fácil',
    triWeight: 0.9,
    statement: 'No trecho: "According to the UNESCO report, two-thirds of the world’s school-age children have no internet connection at home", a fração "two-thirds" equivale matematicamente a:',
    options: [
      { id: 'A', text: 'Dois terços (aproximadamente 66,7% do total).' },
      { id: 'B', text: 'Metade (50% do total).' },
      { id: 'C', text: 'Um quarto (25% do total).' },
      { id: 'D', text: 'Três quartos (75% do total).' },
      { id: 'E', text: 'Dois quintos (40% do total).' }
    ],
    correctAnswer: 'A',
    explanation: '"Two-thirds" corresponde rigorosamente à fração 2/3 (66,67%).',
    keyConcept: 'Numerais fracionários e estatísticas em inglês'
  },
  {
    id: 'ing-q8',
    examId: 'ingles-focado-10q',
    number: 8,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Orações Condicionais (Second Conditional)',
    bnccCode: 'EM13LGG408',
    difficulty: 'Médio',
    triWeight: 1.15,
    statement: 'A frase hipotética: "If governments invested more in renewable infrastructure, carbon emissions would decline significantly" expressa uma condição:',
    options: [
      { id: 'A', text: 'Hipotética no presente com consequência provável no futuro (Second Conditional).' },
      { id: 'B', text: 'Irreversível situada no passado que não pode mais ser alterada.' },
      { id: 'C', text: 'Científica invariável sempre verdadeira no presente contínuo.' },
      { id: 'D', text: 'De certeza absoluta garantida por tratado internacional irrevogável.' },
      { id: 'E', text: 'De proibição legal imposta por assembleia constituinte.' }
    ],
    correctAnswer: 'A',
    explanation: 'A 2ª condicional (If + past simple, would + verbo) descreve situações imaginárias ou hipotéticas no presente/futuro.',
    keyConcept: 'Estrutura gramatical da Second Conditional'
  },
  {
    id: 'ing-q9',
    examId: 'ingles-focado-10q',
    number: 9,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Sinônimos e Vocabulário Contextual',
    bnccCode: 'EM13LGG409',
    difficulty: 'Fácil',
    triWeight: 0.95,
    statement: 'Na oração: "Access to clean drinking water is vital for preventing child malnutrition", a palavra "vital" pode ser substituída sem alteração de sentido por:',
    options: [
      { id: 'A', text: 'Crucial (essencial / indispensável).' },
      { id: 'B', text: 'Optional (dispensável / opcional).' },
      { id: 'C', text: 'Hazardous (perigoso / danoso).' },
      { id: 'D', text: 'Superficial (secundário).' },
      { id: 'E', text: 'Rare (escasso / raro).' }
    ],
    correctAnswer: 'A',
    explanation: '"Vital" significa absolutamente indispensável, sendo sinônimo exato de "crucial" ou "essential".',
    keyConcept: 'Sinonímia e léxico contextual em língua inglesa'
  },
  {
    id: 'ing-q10',
    examId: 'ingles-focado-10q',
    number: 10,
    subject: 'Inglês',
    area: 'linguagens',
    topic: 'Leitura Crítica de Campanhas Ambientais',
    bnccCode: 'EM13LGG410',
    difficulty: 'Médio',
    triWeight: 1.1,
    statement: 'Em um anúncio ecológico com o slogan: "There is no Planet B: rethink your consumption habits today", a intenção comunicativa principal é:',
    options: [
      { id: 'A', text: 'Alertar para a finitude dos recursos da Terra e conscientizar os cidadãos a reduzirem o desperdício.' },
      { id: 'B', text: 'Anunciar a descoberta de um novo planeta habitável pelos telescópios espaciais.' },
      { id: 'C', text: 'Incentivar o consumo ilimitado de plásticos descartáveis.' },
      { id: 'D', text: 'Proibir viagens espaciais tripuladas civis.' },
      { id: 'E', text: 'Vender pacotes turísticos para satélites de Júpiter.' }
    ],
    correctAnswer: 'A',
    explanation: 'A expressão "There is no Planet B" é uma metáfora universal que alerta para a urgência da sustentabilidade e conservação do único planeta onde podemos viver.',
    keyConcept: 'Compreensão de mensagens persuasivas e ambientais'
  }
];

export const INGLES_5_QUESTIONS: Question[] = INGLES_10_QUESTIONS.slice(0, 5).map((q) => ({
  ...q,
  examId: 'ingles-rapido-5q'
}));
