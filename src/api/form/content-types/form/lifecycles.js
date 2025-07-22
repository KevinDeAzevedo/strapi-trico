module.exports = {
  async afterCreate(event) { // Connected to "Save" button in admin panel
  const { result } = event;
  
  try{
  await strapi
    .plugin("email")
    .service("email")
    .send({
      to: "postmaster@trico-ontheroad.com",
      from: "postmaster@trico-ontheroad.com",
      subject: `Nouveau message d'un internaute`,
      text: `${result.name} (${result.email}) a laissé un message: ${result.message}`,
    });
  } catch(err) {
  
  console.log(err);
  }
  }
  }