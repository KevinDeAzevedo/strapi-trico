module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'contact@trico-ontheroad.com',
        defaultReplyTo: 'contact@trico-ontheroad.com',
      },
    },
  },
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