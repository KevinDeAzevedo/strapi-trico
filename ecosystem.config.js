module.exports = {
  apps: [
    {
      name: "strapi-trico-1345",
      exec_mode: "cluster",
      instances: 1,
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
      exp_backoff_restart_delay: 100,
    },
  ],
};