module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        location: {
          field: 'slug',
          references: 'title',
        },
        article: {
          field: 'slug',
          references: 'title',
        }
      },
    },
  },
  seo: {
    enabled: true,
  },
  // ...
});