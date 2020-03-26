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
  },

  // Push Product Information
  product: function(name, productID, category, group, coverage, value, tipInfo) {
    this.dataLayer.products = this.dataLayer.products || [];
    this.dataLayer.products.unshift({
      "name": name,
      "productID": productID, 
      "category": category,
      "group": group,
      "coverage": coverage,
      "value": value,
      "tipInfo": tipInfo
    });
  },

  // Push Form Information
  form: function(name, appID, step, type) {
    this.dataLayer.apps = this.dataLayer.apps || [];
    this.dataLayer.apps.unshift({
      "name": name,
      "appID": appID, 
      "step": step,
      "type": type
    });
  },

  // Push Event Information
  event: function(action, category, name, detail) {
    this.dataLayer.events = this.dataLayer.events || [];
    this.dataLayer.events.unshift({
      "action": action, 
      "category": category,
      "name": name,
      "detail": detail
    });
  },

  // Set Transaction Information
  transaction: function(transactionID, userID, mount, category, product) {
    this.dataLayer.transaction = {
      "transactionID": transactionID, 
      "userID": userID, 
      "mount": mount, 
      "category": category, 
      "product": product 
    }
  },

  // Push Component Information
  component: function(name, componentID, description) {
    this.dataLayer.components = this.dataLayer.components || [];
    this.dataLayer.components.unshift({
      "name": name,
      "componentID": componentID, 
      "description": description
    });
  },

  // Push User Information
  user: function(userID, userRole, userGroup, advisorID, status) {
    this.dataLayer.users = this.dataLayer.users || [];
    this.dataLayer.users.unshift({
      "userID": userID,
      "userRole": userRole,
      "userGroup": userGroup,
      "advisorID": advisorID, 
      "status": status
    });
  },

  // Push Customer Information
  customer: function(customerStatus, gender, age, smokeStatus, province, profile, employment) {
    this.dataLayer.customers = this.dataLayer.customers || [];
    this.dataLayer.customers.unshift({
      "customerStatus": customerStatus,
      "gender": gender,
      "age": age,
      "smokeStatus": smokeStatus,
      "province": province,
      "profile": profile, 
      "employment": employment
    });
  }

};
