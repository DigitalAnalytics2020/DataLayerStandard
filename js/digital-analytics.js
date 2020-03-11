var CWC_MLCA = CWC_MLCA || {

  // Initialize dataLayer
  // set "debug" to "true" in development environment
  // set "debug" to "false" in production environment
  dataLayer: {
    "debug": "true"
  },

  // Set Site Information
  site: function() {
    this.dataLayer.site = {
      "brand": "Test Co.", 
      "name": "test", 
      "type": "desktop", 
      "environment": "development", 
      "version": "0.0.1", 
      "lastBuildDate": "2020-02-02" // need standardize format
    }
  },

  // Set Page Information
  page: function(name, title, category, language) {
    this.dataLayer.page = {
      "name": name, 
      "title": title, 
      "category": category, 
      "language": language 
    }
  }

};
