const content = {
  bannerSection: {
    title: 'Olá, sou Jonas Siqueira ツ',
    description: 'Front-end Developer',
    image: {
      url: '/images/programming.svg',
      alt:
        'Ilustração de um desenvolvedor em frente a um computador com várias linhas de código.',
    },
    button: {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/jonas-siqueira-marcelino/',
    },
  },
  aboutSection: {
    title: 'Sobre mim',
    description:
      'Olá, tenho 24 anos, sou formado em Análise e Desenvolvimento de Sistemas e atualmente cursando Inglês na instituição de ensino de idiomas inFlux.',
  },
  contactSection: {
    title: 'Contato',
    description:
      'Fique a vontade para entrar em contato sempre que precisar ;D.',
    contacts: [
      {
        link: 'mailto:jonascska07@gmail.com',
        icon: 'https://cdn-icons-png.flaticon.com/512/561/561127.png',
        alt: 'Icone email',
      },
      {
        link: 'https://www.linkedin.com/in/jonas-siqueira-marcelino/',
        icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        alt: 'Icone linkedin',
      },
      {
        link: 'https://github.com/JonasYo',
        icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        alt: 'Icone github',
      },
    ],
  },
  serviceSection: {
    title: 'Tecnologias',
    description: 'Tecnologias que possuo experiência.',
    listTechnological: [
      {
        iconUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        title: 'React JS',
        description:
          'É uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas.',
      },
      {
        iconUrl:
          'https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png',
        title: 'Next JS',
        description:
          'É uma estrutura da web de desenvolvimento front-end React de código aberto.',
      },
      {
        iconUrl:
          'https://ih1.redbubble.net/image.404020083.1876/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u7.jpg',
        title: 'Jest',
        description:
          'É um framework de teste em JavaScript que é mantida pelo Facebook.',
      },
      {
        iconUrl: 'https://testing-library.com/img/octopus-128x128.png',
        title: 'React Testing Library',
        description:
          'Disponibiza várias APIs para manipular os componentes e incentivar melhores práticas de teste.',
      },
      {
        iconUrl: 'https://d37oro8yophbdb.cloudfront.net/CFProdCode-7585',
        title: 'Strapi',
        description:
          'O Strapi é um CMS de código aberto baseado no Node. js para gerenciamento de conteúdo.',
      },
      {
        iconUrl:
          'https://seeklogo.com/images/C/contentful-logo-C395C545BF-seeklogo.com.png',
        title: 'Contentful CMS',
        description:
          'É uma plataforma de gerenciamento de conteúdo flexível paga.',
      },
    ],
  },
};

export default content;
