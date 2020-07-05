module.exports = {
  api: {
    baseUrl: 'https://kimono-server.herokuapp.com',
    endpoints: {
      kimonos: '/kimonos',
      presignedUrl: '/presignedUrl'
    }
  },
  errors: {
    getKimonos: 'There was a problem loading the gallery. Please refresh the page. If the problem persists, please contact info@playfulkimono.com.',
    submitKimono: 'There was a problem uploading your kimono. Please refresh the page and try again. If the problem persists, please contact info@playfulkimono.com.'
  },
  designSteps: {
    EMPTY: 'empty',
    EDITING: 'editing',
    SIGNING: 'signing',
    SUBMITTING: 'submitting',
    SUBMITTED: 'submitted'
  }
}