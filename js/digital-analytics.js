var CWC_MLCA = CWC_MLCA || {

  // Initialize dataLayer
  // set "debug" to "true" in development environment
  // set "debug" to "false" in production environment
  dataLayer: {
    "debug": "true"
  },

  // Set Site Information
  site: function(brand, name, type, environment, version, lastBuildDate) {
    this.dataLayer.site = {
      "brand": brand, 
      "name": name, 
      "type": type, 
      "environment": environment, 
      "version": version, 
      "lastBuildDate": lastBuildDate
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
  product: function(name, productId, category, group, coverage, value, tipInfo) {
    this.dataLayer.products = this.dataLayer.products || [];
    this.dataLayer.products.unshift({
      "name": name,
      "productId": productId, 
      "category": category,
      "group": group,
      "coverage": coverage,
      "value": value,
      "tipInfo": tipInfo
    });
  },

  // Push Form Information
  form: function(name, formId, step, type) {
    this.dataLayer.actions = this.dataLayer.actions || [];
    this.dataLayer.actions.push({
      "event": "form",
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
    this.dataLayer.actions = this.dataLayer.actions || [];
    this.dataLayer.actions.push({
      "event": "event",
      "action": {
        "name": name, 
        "category": category,
        "label": label,
        "detail": detail
      }
    });
  },

  // Set Transaction Information
  transaction: function(transactionId, userId, mount, category, product) {
    this.dataLayer.actions = this.dataLayer.actions || [];
    this.dataLayer.actions.push({
      "event": "transaction",
      "transaction": {
        "transactionId": transactionId, 
        "userId": userId, 
        "mount": mount, 
        "category": category, 
        "product": product 
      }
    });
  },

  // Set Component Information
  component: function(name, componentId, description) {
    this.dataLayer.component = {
      "name": name,
      "componentId": componentId, 
      "description": description
    }
  },

  // Set User Information
  user: function(userId, userRole, userGroup, advisorId, status) {
    this.dataLayer.user = {
      "userId": userId,
      "userRole": userRole,
      "userGroup": userGroup,
      "advisorId": advisorId, 
      "status": status
    }
  },

  // Set Customer Information
  customer: function(customerStatus, gender, age, smokeStatus, province, profile, employment) {
    this.dataLayer.customer = {
      "customerStatus": customerStatus,
      "gender": gender,
      "age": age,
      "smokeStatus": smokeStatus,
      "province": province,
      "profile": profile, 
      "employment": employment
    }
  }

};
