var CWC_MLCA = CWC_MLCA || {

  // Initialize
  "debug": "true", // set "debug" to "false" in production environment, set "debug" to "true" in development environment
  "version": "0.0.1", // set web application version here

  // Page View Event Information
  page: function(name, title, category, language) {
    this.dataLayer = this.dataLayer || [];
    this.dataLayer.push({
      event: "page",
      page: {
        "name": name, 
        "title": title, 
        "category": category, 
        "language": language
      }
    });
  },

  // Push Product Information
  product: function(products) {
    this.dataLayer = this.dataLayer || [];
    this.dataLayer.push({
      event: "product",
      products: products
    });
  },

  // Push Form Information
  form: function(action, name, formId, step, type) {
    this.dataLayer = this.dataLayer || [];
    this.dataLayer.push({
      "event": action,
      "form": {
        "name": name,
        "formId": formId, 
        "step": step,
        "type": type
      }
    });
  },

  // Push Event Information
  event: function(name, category, label, detail) {
    this.dataLayer = this.dataLayer || [];
    this.dataLayer.push({
      "event": "event",
      "action": {
        "name": name, 
        "category": category,
        "label": label,
        "detail": detail
      }
    });
  },

  // Push Transaction Information
  transaction: function(transaction) {
    this.dataLayer = this.dataLayer || [];
    this.dataLayer.push({
      "event": "transaction",
      "transaction": transaction
      /*
      "transaction": {
        "transactionId": transactionId, 
        "userId": userId, 
        "mount": mount, 
        "category": category, 
        "product": product 
      }
      */
    });
  },

  // Push Component Information
  component: function(name, componentId, description) {
    this.dataLayer = this.dataLayer || [];
    this.dataLayer.push({
      "event": "component",
      "component": {
        "name": name,
        "componentId": componentId, 
        "description": description
      }
    });
  },

  // Set User Information
  user: function(userId, userRole, userGroup, advisorId, status) {
    this.dataLayer = this.dataLayer || [];
    this.dataLayer.push({
      "event": "user",
      "user": {
        "userId": userId,
        "userRole": userRole,
        "userGroup": userGroup,
        "advisorId": advisorId, 
        "status": status
      }
    });
  },

  // Push Customer Information
  customer: function(customer) {
    this.dataLayer = this.dataLayer || [];
    this.dataLayer.push({
      "event": "customer",
      "customer": customer
    });
  }

};
