module.exports = {
  api: {
    baseUrl: 'http://localhost:1337',
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