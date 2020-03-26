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
    this.dataLayer.events = this.dataLayer.events || [];
    this.dataLayer.events.push({
      "event": "product",
      "product": {
        "name": name,
        "productId": productId, 
        "category": category,
        "group": group,
        "coverage": coverage,
        "value": value,
        "tipInfo": tipInfo
      }
    });
  },

  // Push Form Information
  form: function(name, formId, step, type) {
    this.dataLayer.events = this.dataLayer.events || [];
    this.dataLayer.events.push({
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
    this.dataLayer.events = this.dataLayer.events || [];
    this.dataLayer.events.push({
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
    this.dataLayer.events = this.dataLayer.events || [];
    this.dataLayer.events.push({
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

  // Push Component Information
  component: function(name, componentId, description) {
    this.dataLayer.events = this.dataLayer.events || [];
    this.dataLayer.events.push({
      "event": "component",
      "component": {
        "name": name,
        "componentId": componentId, 
        "description": description
      }
    });
  },

  // Push User Information
  user: function(userId, userRole, userGroup, advisorId, status) {
    this.dataLayer.events = this.dataLayer.events || [];
    this.dataLayer.events.push({
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
  customer: function(customerStatus, gender, age, smokeStatus, province, profile, employment) {
    this.dataLayer.events = this.dataLayer.events || [];
    this.dataLayer.events.push({
      "event": "customer",
      "customer": {
        "customerStatus": customerStatus,
        "gender": gender,
        "age": age,
        "smokeStatus": smokeStatus,
        "province": province,
        "profile": profile, 
        "employment": employment
      }
    });
  }

};
