// TODO: error messages (consistent content, contact email)

module.exports = {
  api: {
    baseUrl: 'https://kimono-server.herokuapp.com',
    endpoints: {
      kimonos: '/kimonos'
    }
  },
  errors: {
    getKimonos: 'There was a problem loading the gallery. Please try again. If the problem persists, please contact *CONTACT_EMAIL*'
  }
}