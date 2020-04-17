// Customized products data for GB project
function gbProduct(name, productId, category, group, coverage, value, tipInfo) {
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
}

// Customized customer data for GB project
function gbCustomer(customerStatus, gender, age, smokeStatus, province, profile, employment) {
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
