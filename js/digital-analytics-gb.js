var CWC_MLCA_GB = CWC_MLCA_GB || {

  // Customized products data for GB project
  product: function(name, productId, category, group, coverage, value, tipInfo) {
    window.CWC_MLCA.product(
      [{
        "name": name,
        "productId": productId, 
        "category": category,
        "group": group,
        "coverage": coverage,
        "value": value,
        "tipInfo": tipInfo
      }]
    );
  },

  // Customized transaction data for GB project
  transaction: function(transactionId, userId, mount, category, product) {
    window.CWC_MLCA.transaction(
      {
        "transactionId": transactionId, 
        "userId": userId, 
        "mount": mount, 
        "category": category, 
        "product": product 
      }
    );
  },

  // Customized customer data for GB project
  customer: function(customerStatus, gender, age, smokeStatus, province, profile, employment) {
    window.CWC_MLCA.customer(
      {
        "customerStatus": customerStatus,
        "gender": gender,
        "age": age,
        "smokeStatus": smokeStatus,
        "province": province,
        "profile": profile, 
        "employment": employment
      }
    );
  }

}
