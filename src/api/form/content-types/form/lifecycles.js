module.exports = {
  async afterCreate(event) { // Connected to "Save" button in admin panel
  const { result } = event;
  
  try{
  await strapi.plugins['email'].services.email.send({
  to: 'contact@trico-ontheroad.com',
  from: 'contact@trico-ontheroad.com',
  subject: `Nouveau message d'un internaute`,
  text: `${result.name} (${result.email}) a laissé un message: ${result.message}`,
  })
  } catch(err) {
  
  console.log(err);
  }
  }
  }