export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603292a9d1886a8f668e5e81',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-k7tqigjc',
                  apiId: '112122d8-79c2-42e0-896d-46a7a874dea9'
                },
                {
                  buildHookId: '603292a937d81564e92efeb1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7hk34xva',
                  apiId: '5cba7d12-7072-481f-a6f5-cee464a64233'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pbanikk/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7hk34xva.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
