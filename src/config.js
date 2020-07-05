module.exports = {
  api: {
    baseUrl: 'https://kimono-server.herokuapp.com',
    endpoints: {
      kimonos: '/kimonos',
      presignedUrl: '/presignedUrl'
    }
  },
  errors: {
    getKimonos: 'There was a problem loading the gallery. Please refresh the page. If the problem persists, please contact info@playfulkimono.com'
  },
  designSteps: {
    EMPTY: 'empty',
    EDITING: 'editing',
    SIGNING: 'signing',
    SUBMITTED: 'submitted'
  }
}