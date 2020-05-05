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
                  buildHookId: '5eb0b5164e4ed1fedb9275bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-71j7kts5',
                  apiId: '35aae401-784e-4ced-ada6-953cf9b532a7'
                },
                {
                  buildHookId: '5eb0b51613d750cd5fc575d5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-snsbx39p',
                  apiId: 'efdbf20c-8408-4cb1-a43e-d3e581e53442'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cesargdm/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-snsbx39p.netlify.app',
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
