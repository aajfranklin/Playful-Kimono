module.exports = {
  api: {
    baseUrl: 'https://kimono-server.herokuapp.com/',
    endpoints: {
      kimonos: '/kimonos',
      presignedUrl: '/presignedUrl'
    }
  },
  errors: {
    getKimonos: 'There was a problem loading the gallery. Please try again. If the problem persists, please contact *CONTACT_EMAIL*'
  },
  designSteps: {
    EMPTY: 'empty',
    EDITING: 'editing',
    SIGNING: 'signing',
    SUBMITTED: 'submitted'
  }
}