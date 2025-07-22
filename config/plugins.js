module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "postmaster@trico-ontheroad.com",
        defaultReplyTo: "postmaster@trico-ontheroad.com",
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        country: {
          field: "slug",
          references: "name",
        },
        location: {
          field: "slug",
          references: "title",
        },
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  seo: {
    enabled: true,
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
      },
    },
  },
  // ...
});