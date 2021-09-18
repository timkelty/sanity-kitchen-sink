export default {
  widgets: [
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
                  buildHookId: '61454ce7cb908d7b091d1104',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5abn4pe9',
                  apiId: '5df83aa8-ea71-4de4-8b12-bc2e281b7387'
                },
                {
                  buildHookId: '61454ce71d7f0966a7fc9cc7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6wqpgc6p',
                  apiId: 'e975caa8-156a-4173-9505-80a57c3b02ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/timkelty/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6wqpgc6p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
