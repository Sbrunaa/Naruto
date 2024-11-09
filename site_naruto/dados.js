let dados = [
    {
        titulo: "Naruto Uzumaki",
        texto:"Naruto Uzumaki é um jovem ninja da Vila da Folha que, apesar de ser rejeitado por abrigar a Nove Caudas dentro de si, sonha em se tornar Hokage.",
        vila: "Oculta da folha",
        cla:"Uzumaki",
        img:"imagens/Naruto.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Jiraiya",
        texto:"Jiraiya é um dos lendários Sannin de Konoha, mestre de Naruto Uzumaki e uma figura carismática e poderosa. Conhecido por suas habilidades em Ninjutsu.",
        vila: "Oculta da folha",
        cla:"",
        img:"imagens/jiraiya.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Sasuke Uchiha",
        texto:" Sasuke Uchiha é um dos últimos membros do clã Uchiha e rival de Naruto Uzumaki. Motivado pela vingança contra seu irmão Itachi, que dizimou seu clã, Sasuke busca poder a qualquer custo.",
        vila: "Oculta da folha",
        cla:"Uchiha",
        img: "imagens/Sasuke.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Sakura Harumo",
        texto:"Sakura começa como uma kunoichi com pouca habilidade, mas se torna uma ninja médica excepcional e uma das principais discípulas de Tsunade. Sua força física é impressionante.",
        vila: "Oculta da folha",
        cla:"Harumo",
        img: "imagens/sakura.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: " Kakashi Hatake",
        texto:"Kakashi é um jounin experiente e o famoso Ninja Copiador, conhecido por seu Sharingan, que ele adquiriu de um amigo. Ele tem uma personalidade calma e ensina seus alunos lições importantes sobre o trabalho em equipe.",
        vila: "Oculta da folha",
        cla:"Hatake",
        img: "imagens/kakashi.jfif",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Tsunade Senju",
        texto:"Tsunade é uma lendária ninja médica e uma das Sannin, ao lado de Jiraiya e Orochimaru. Ela é conhecida por sua força imensa e habilidades de cura, além de seu amor por jogos de azar.",
        vila: "Oculta da folha",
        cla:"Senju",
        img: "imagens/tsunadejpg.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Shikamaru Nara",
        texto:"Shikamaru é um ninja altamente inteligente e estrategista, conhecido por suas habilidades com jutsus de sombra. Embora tenha uma personalidade preguiçosa, ele se destaca em situações que exigem planejamento tático.",
        vila: "Oculta da folha",
        cla:"Nara",
        img: "imagens/skikamaru.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Hinata Hyuga",
        texto:"Hinata pertence ao clã Hyuga, famoso por seu dojutsu, o Byakugan. Ela é tímida e introvertida, especialmente em relação a Naruto, por quem nutre sentimentos. Ao longo da série, ela desenvolve uma grande força de vontade.",
        vila: "Oculta da folha",
        cla:"Hyuga",
        img: "imagens/hinata.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Neji Hyuga",
        texto:"Neji é um membro prodígio do clã Hyuga e primo de Hinata. No início, ele acredita fortemente no destino, mas, após uma batalha com Naruto, muda sua visão de mundo e se torna um ninja dedicado a proteger sua vila e seus amigos.",
        vila: "Oculta da folha",
        cla:"Hyuga",
        img: "imagens/neji.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Rock Lee",
        texto:"Rock Lee é um ninja que não consegue usar ninjutsu ou genjutsu, mas compensa isso com extrema habilidade em taijutsu (lutas físicas).",
        vila: "Oculta da folha",
        cla:"Lee",
        img: "imagens/rock-lee.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: " Ino Yamanaka",
        texto:"Ino é uma ninja do clã Yamanaka, especializada em jutsus de manipulação mental. Ela é amiga de infância de Sakura e tem uma rivalidade amigável com ela. Ino é parte do trio de amigos junto com Shikamaru e Choji.",
        vila: "Oculta da folha",
        cla:"Yamanaka",
        img: "imagens/ino.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Choji Akimichi",
        texto:"Membro do clã Akimichi, Choji é um ninja que pode aumentar seu tamanho durante as batalhas, utilizando técnicas de transformação corporal. Apesar de seu amor por comida, ele é um guerreiro leal e valoriza seus amigos acima de tudo.",
        vila: "Oculta da folha",
        cla:"Akimichi",
        img: "imagens/choji.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Might Guy",
        texto:"Might Guy é o mestre de Rock Lee e um jounin da Vila da Folha conhecido por sua imensa habilidade em taijutsu. Ele é energético e possui uma rivalidade amigável com Kakashi, além de ser extremamente leal aos seus alunos.",
        vila: "Oculta da folha",
        cla:"",
        img: "imagens/guy.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Asuma Sarutobi",
        texto:"Asuma é um jounin da Vila da Folha e líder do time composto por Shikamaru, Ino e Choji. Filho do Terceiro Hokage, ele é conhecido por suas habilidades com lâminas e tem uma relação próxima com seus alunos.",
        vila: "Oculta da folha",
        cla:"Sarutobi",
        img: "imagens/asuma.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Iruka Umino",
        texto:"Iruka é o professor da Academia Ninja e uma das primeiras figuras paternas de Naruto. Ele sempre se preocupou com Naruto e desempenhou um papel fundamental no desenvolvimento emocional do protagonista.",
        vila: "Oculta da folha",
        cla:"Umino",
        img: "imagens/iruka.jpg",
        link:"https://pt.wikipedia.org/wiki/Naruto"
    },
];
