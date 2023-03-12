module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        country: {
          field: 'slug',
          references: 'name',
        },
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
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
      },
    }
 }
  // ...
});