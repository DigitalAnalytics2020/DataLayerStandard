var CWC_MLCA_SampleScenario = CWC_MLCA_SampleScenario || {

  pages: [
  {
    "sample": "Page view",
    "page":
    `
<hr style="width:500px;border:2px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">This page use following code and data:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "pageLoad",<br />
&nbsp;&nbsp;page: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;"name": "digital-analytics:standard2020:sample-scenario:page-view",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"title": "Digital Analytics Standard2020 : Sample Scenario : Page View",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"category": "Sample Scenario",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"language": "EN"<br />
&nbsp;&nbsp;}<br />
});
</p>
</li>
</ul>
    `
  },

  {
    "sample": "Page with user login",
    "page":
    `
<hr style="width:200px;border:3px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">under-construction</h5>
<ul class="w3-ul w3-dark-grey">
<li>under-construction</li>
</ul>
    `
  },

  {
    "sample": "DataLayer of PDF download",
    "page":
    `
<hr style="width:200px;border:3px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">under-construction</h5>
<ul class="w3-ul w3-dark-grey">
<li>under-construction</li>
</ul>
    `
  },

  {
    "sample": "HTML5 Attributes of PDF download",
    "page":
    `
<hr style="width:200px;border:3px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">under-construction</h5>
<ul class="w3-ul w3-dark-grey">
<li>under-construction</li>
</ul>
    `
  },

  {
    "sample": "Single transaction or product",
    "page":
    `
<hr style="width:500px;border:2px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">Customized transaction data layer implementation:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
var CWC_MLCA_GB = CWC_MLCA_GB || {<br />
&nbsp;&nbsp;// Customized transaction data for GB project<br />
&nbsp;&nbsp;transaction: function(transactionId, userId, mount, category, product) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;window.CWC_MLCA.transaction(<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"transactionId": transactionId,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"userId": userId,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"mount": mount,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": category,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product": product<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
&nbsp;&nbsp;&nbsp;&nbsp;);<br />
&nbsp;&nbsp;},<br />
}
</p>
</li>
</ul>
<h5 class="w3-text-blue-grey">Sample code to push transaction data use implemented transaction function:</h5>
<ul class="w3-ul w3-dark-grey">
<li>var userId = "user012";</li>
<li>var mount = "$120";</li>
<li>var category = "Transfer";</li>
<li>var product = "bank saving";</li>
<li>window.CWC_MLCA_GB.transaction(transactionId, userId, mount, category,  product);</li>
</ul>
<h5 class="w3-text-blue-grey">Also push page view data:</h5>
<ul class="w3-ul w3-dark-grey">
<li>var name = "digital-analytics:standard2020:sample-scenario:single-transaction-product";</li>
<li>var title = "Digital Analytics Standard2020 : Sample Scenario : Single Transaction Product";</li>
<li>var category = "Sample Scenario";</li>
<li>var language = "EN";</li>
<li>window.CWC_MLCA.page(name, title, category, language);</li>
</ul>
    `
  },

  {
    "sample": "Multiple transactions or products",
    "page":
    `
<hr style="width:500px;border:2px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">Customized products data layer implementation:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
var CWC_MLCA_GB = CWC_MLCA_GB || {<br />
&nbsp;&nbsp;// Customized products data for GB project<br />
&nbsp;&nbsp;product: function(name, productId, category, group, coverage, value, tipInfo) {<br />
&nbsp;&nbsp;&nbsp;&nbsp;window.CWC_MLCA.product(<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[{<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": name,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"productId": productId,<br /> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": category,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"group": group,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"coverage": coverage,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"value": value,<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"tipInfo": tipInfo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}]<br />
&nbsp;&nbsp;&nbsp;&nbsp;);<br />
&nbsp;&nbsp;},<br />
}
</p>
</li>
</ul>
<h5 class="w3-text-blue-grey">Sample code to push product array data use implemented product function:</h5>
<ul class="w3-ul w3-dark-grey">
<li>var name = "Travel in Canada";</li>
<li>var productId = "ti012";</li>
<li>var category = "travel insurance";</li>
<li>var group = "insurance";</li>
<li>var coverage = "45 days";</li>
<li>var value = "$100";</li>
<li>var tipInfo = "single coverage: 45 days";</li>
<li>window.CWC_MLCA_GB.product(name, productId, category, group, coverage, value, tipInfo)</li>
</ul>
<h5 class="w3-text-blue-grey">Also push page view data:</h5>
<ul class="w3-ul w3-dark-grey">
<li>var name = "digital-analytics:standard2020:sample-scenario:multiple-transaction-product";</li>
<li>var title = "Digital Analytics Standard2020 : Sample Scenario : Multiple Transaction Product";</li>
<li>var category = "Sample Scenario";</li>
<li>var language = "EN";</li>
<li>window.CWC_MLCA.page(name, title, category, language);</li>
</ul>
    `
  },

  {
    "sample": "Site search",
    "page":
    `
<hr style="width:200px;border:3px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">under-construction</h5>
<ul class="w3-ul w3-dark-grey">
<li>under-construction</li>
</ul>
    `
  },

  {    
    "sample": "Form submission",
    "page":
    `
<hr style="width:200px;border:3px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">under-construction</h5>
<ul class="w3-ul w3-dark-grey">
<li>under-construction</li>
</ul>
    `
  }
  ],

  // push sample data: page view
  pageView: function() {
    window.CWC_MLCA.page("digital-analytics:standard2020:sample-scenario:page-view", // page name
                         "Digital Analytics Standard2020 : Sample Scenario : Page View", // page title
                         "Sample Scenario", // page category 
                         "EN"); // page language
  },
    
  // push sample data: page view with user login
  pageUserView: function() {
    console.log("SampleScenario:pageUserView");
  },
    
  // push sample data: pdf download
  pdfDownload: function() {
    console.log("SampleScenario:pdfDownload");
  },
    
  // HTML5 Attribute PDF Download, no function needed
  //pdfDownloadAttribute: function() {
  //  console.log("SampleScenario:pdfDownloadAttribute");
  //},
    
  // push sample data: single transaction product
  singleTransactionProduct: function() {
    window.CWC_MLCA.page("digital-analytics:standard2020:sample-scenario:single-transaction-product", // page name
                         "Digital Analytics Standard2020 : Sample Scenario : Single Transaction Product", // page title
                         "Sample Scenario", // page category 
                         "EN"); // page language
    window.CWC_MLCA.transaction(
        {"transactionId": "t012", "amount": "$120", "category": "transfer"}, // Transaction information
        {"userId": "user01234567", "userRole": "role01234567", "userGroup": "group01234567", "advisorID": "advisor01234567", "status": "login"}, // user information
        [{"name": "High-interest Saving Account", "productId": "bs012", "category": "Bank Saving", "group": "bank", "coverage": "CDIC", "value": "$2000", "tipInfo": "New Client Earn 2.80%* Interest for the First 5 Months!"}] // products information
    );
  },
    
  // push sample data: multiple transaction product
  multipleTransactionProduct: function() {
    window.CWC_MLCA.page("digital-analytics:standard2020:sample-scenario:multiple-transaction-product", // page name
                         "Digital Analytics Standard2020 : Sample Scenario : Multiple Transaction Product", // page title
                         "Sample Scenario", // page category 
                         "EN"); // page language
    window.CWC_MLCA.product(
      [{
        "name": "Travel in Canada",
        "productId": "ti01234", 
        "category": "travel insurance",
        "group": "insurance",
        "coverage": "45 days",
        "value": "$200",
        "tipInfo": "family coverage: 45 days"
      },{
        "name": "Travel in Canada",
        "productId": "ti56789", 
        "category": "travel insurance",
        "group": "insurance",
        "coverage": "10 days",
        "value": "$100",
        "tipInfo": "single coverage: 10 days"
      }]
    );
  },
    
  // push sample data: site search
  siteSearch: function() {
    console.log("SampleScenario:siteSearch");
  },
    
  // push sample data: form submission
  formSubmission: function() {
    console.log("SampleScenario:formSubmission");
  }

}
