var CWC_MLCA_SampleScenario = CWC_MLCA_SampleScenario || {

  pages: [
  {
    "sample": "Page view",
    "page":
    `
<hr style="width:500px;border:2px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">The sample page will push following code and data to page view data layer:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "pageLoad",<br />
&nbsp;&nbsp;page: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "digital-analytics:standard2020:sample-scenario:page-view",<br />
&nbsp;&nbsp;&nbsp;&nbsp;title: "Digital Analytics Standard2020 : Sample Scenario : Page View",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "Sample Scenario",<br />
&nbsp;&nbsp;&nbsp;&nbsp;language: "EN"<br />
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
<hr style="width:500px;border:2px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">The sample page will push following code and data to page view data layer and also user data layer:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "pageLoad",<br />
&nbsp;&nbsp;page: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "digital-analytics:standard2020:sample-scenario:page-view-user",<br />
&nbsp;&nbsp;&nbsp;&nbsp;title: "Digital Analytics Standard2020 : Sample Scenario : Page View & User",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "Sample Scenario",<br />
&nbsp;&nbsp;&nbsp;&nbsp;language: "EN"<br />
&nbsp;&nbsp;}<br />
});
</p>
</li>
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "user",<br />
&nbsp;&nbsp;user: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;userId: "user01234567",<br />
&nbsp;&nbsp;&nbsp;&nbsp;userRole: "role01234567",<br />
&nbsp;&nbsp;&nbsp;&nbsp;userGroup: "group01234567",<br />
&nbsp;&nbsp;&nbsp;&nbsp;advisorId: "advisor01234567",<br />
&nbsp;&nbsp;&nbsp;&nbsp;status: "login"<br />
&nbsp;&nbsp;}<br />
});
</p>
</li>
</ul>
    `
  },

  {
    "sample": "DataLayer of PDF download",
    "page":
    `
<hr style="width:500px;border:2px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">Click following download link will push following code and data to event data layer:</h5>
<h6 class="w3-text-blue"><a id="download-datalayer" href="policy-booklet-2020.pdf" target="_blank">Policy Booklet 2020</a></h6>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "download",<br />
&nbsp;&nbsp;action: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "download",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "pdf",<br />
&nbsp;&nbsp;&nbsp;&nbsp;label: "policy-booklet-2020.pdf",<br />
&nbsp;&nbsp;&nbsp;&nbsp;detail: "Policy Booklet 2020"<br />
&nbsp;&nbsp;}<br />
});
</p>
</li>
</ul>
<h5 class="w3-text-blue-grey">Also the sample page will push following code and data to page view data layer:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "pageLoad",<br />
&nbsp;&nbsp;page: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "digital-analytics:standard2020:sample-scenario:download-datalayer",<br />
&nbsp;&nbsp;&nbsp;&nbsp;title: "Digital Analytics Standard2020 : Sample Scenario : Download event use Data Layer",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "Sample Scenario",<br />
&nbsp;&nbsp;&nbsp;&nbsp;language: "EN"<br />
&nbsp;&nbsp;}<br />
});
</p>
</li>
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
<h5 class="w3-text-blue-grey">For this sample transaction, to push transaction and user, products data layer, use following code and data:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "transaction",<br />
&nbsp;&nbsp;transaction: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;transactionId: "t012",<br />
&nbsp;&nbsp;&nbsp;&nbsp;amount: "$120",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "transfer"<br />
&nbsp;&nbsp;}<br />
&nbsp;&nbsp;user: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;userId: "user01234567",<br />
&nbsp;&nbsp;&nbsp;&nbsp;userRole: "role01234567",<br />
&nbsp;&nbsp;&nbsp;&nbsp;userGroup: "group01234567",<br />
&nbsp;&nbsp;&nbsp;&nbsp;advisorID: "advisor01234567",<br />
&nbsp;&nbsp;&nbsp;&nbsp;status: "login"<br />
&nbsp;&nbsp;}<br />
&nbsp;&nbsp;products: [{<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "High-interest Saving Account",<br />
&nbsp;&nbsp;&nbsp;&nbsp;productId: "bs012",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "Bank Saving",<br />
&nbsp;&nbsp;&nbsp;&nbsp;group: "bank",<br />
&nbsp;&nbsp;&nbsp;&nbsp;coverage: "CDIC",<br />
&nbsp;&nbsp;&nbsp;&nbsp;value: "$2000",<br />
&nbsp;&nbsp;&nbsp;&nbsp;tipInfo: "New Client Earn 2.80%* Interest for the First 5 Months!"<br />
&nbsp;&nbsp;}]<br />
});
</p>
</li>
</ul>
<h5 class="w3-text-blue-grey">Also the sample page will push following code and data to page view data layer:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "pageLoad",<br />
&nbsp;&nbsp;page: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "digital-analytics:standard2020:sample-scenario:single-transaction-product",<br />
&nbsp;&nbsp;&nbsp;&nbsp;title: "Digital Analytics Standard2020 : Sample Scenario : Single Transaction Product",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "Sample Scenario",<br />
&nbsp;&nbsp;&nbsp;&nbsp;language: "EN"<br />
&nbsp;&nbsp;}<br />
});
</p>
</li>
</ul>
    `
  },

  {
    "sample": "Multiple transactions or products",
    "page":
    `
<hr style="width:500px;border:2px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">For this sample product, to push products array data layer, use following code and data:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;products: [{<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "Travel in Canada",<br />
&nbsp;&nbsp;&nbsp;&nbsp;productId: "ti01234",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "travel insurance",<br />
&nbsp;&nbsp;&nbsp;&nbsp;group: "insurance",<br />
&nbsp;&nbsp;&nbsp;&nbsp;coverage: "45 days",<br />
&nbsp;&nbsp;&nbsp;&nbsp;value: "$200",<br />
&nbsp;&nbsp;&nbsp;&nbsp;tipInfo: "family coverage: 45 days"<br />
&nbsp;&nbsp;},{<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "Travel in Canada",<br />
&nbsp;&nbsp;&nbsp;&nbsp;productId: "ti56789",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "travel insurance",<br />
&nbsp;&nbsp;&nbsp;&nbsp;group: "insurance",<br />
&nbsp;&nbsp;&nbsp;&nbsp;coverage: "10 days",<br />
&nbsp;&nbsp;&nbsp;&nbsp;value: "$100",<br />
&nbsp;&nbsp;&nbsp;&nbsp;tipInfo: "single coverage: 10 days"<br />
&nbsp;&nbsp;}]<br />
});
</p>
</li>
</ul>
<h5 class="w3-text-blue-grey">Also the sample page will push following code and data to page view data layer:</h5>
<ul class="w3-ul w3-dark-grey">
<li>
<p>
CWC_MLCA.dataLayer = CWC_MLCA.dataLayer || [];<br />
CWC_MLCA.dataLayer.push({<br />
&nbsp;&nbsp;event: "pageLoad",<br />
&nbsp;&nbsp;page: {<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "digital-analytics:standard2020:sample-scenario:multiple-transaction-product",<br />
&nbsp;&nbsp;&nbsp;&nbsp;title: "Digital Analytics Standard2020 : Sample Scenario : Multiple Transaction Product",<br />
&nbsp;&nbsp;&nbsp;&nbsp;category: "Sample Scenario",<br />
&nbsp;&nbsp;&nbsp;&nbsp;language: "EN"<br />
&nbsp;&nbsp;}<br />
});
</p>
</li>
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
    window.CWC_MLCA.page("digital-analytics:standard2020:sample-scenario:page-view-user", // page name
                         "Digital Analytics Standard2020 : Sample Scenario : Page View & User", // page title
                         "Sample Scenario", // page category 
                         "EN"); // page language
    window.CWC_MLCA.user("user01234567", // userId
                         "role01234567", // userRole
                         "group01234567", // userGroup 
                         "advisor01234567", // advisorId 
                         "login"); // status
  },
    
  // push sample data: pdf download
  downloadDataLayer: function() {
    window.CWC_MLCA.page("digital-analytics:standard2020:sample-scenario:download-datalayer", // page name
                         "Digital Analytics Standard2020 : Sample Scenario : Download event use Data Layer", // page title
                         "Sample Scenario", // page category 
                         "EN"); // page language
  },
    
  // HTML5 Attribute for PDF Download, 
  downloadAttribute: function() {
    window.CWC_MLCA.page("digital-analytics:standard2020:sample-scenario:download-attribute", // page name
                         "Digital Analytics Standard2020 : Sample Scenario : Download event use HTML5 Attributes", // page title
                         "Sample Scenario", // page category 
                         "EN"); // page language
  },
    
  // push sample data: single transaction product
  singleTransactionProduct: function() {
    window.CWC_MLCA.page("digital-analytics:standard2020:sample-scenario:single-transaction-product", // page name
                         "Digital Analytics Standard2020 : Sample Scenario : Single Transaction Product", // page title
                         "Sample Scenario", // page category 
                         "EN"); // page language
    window.CWC_MLCA.transaction(
        {transactionId: "t012", amount: "$120", category: "transfer"}, // Transaction information
        {userId: "user01234567", userRole: "role01234567", userGroup: "group01234567", advisorID: "advisor01234567", status: "login"}, // user information
        [{name: "High-interest Saving Account", productId: "bs012", category: "Bank Saving", group: "bank", coverage: "CDIC", value: "$2000", tipInfo: "New Client Earn 2.80%* Interest for the First 5 Months!"}] // products information
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
        name: "Travel in Canada",
        productId: "ti01234", 
        category: "travel insurance",
        group: "insurance",
        coverage: "45 days",
        value: "$200",
        tipInfo: "family coverage: 45 days"
      },{
        name: "Travel in Canada",
        productId: "ti56789", 
        category: "travel insurance",
        group: "insurance",
        coverage: "10 days",
        value: "$100",
        tipInfo: "single coverage: 10 days"
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

$(document).on("click", "#download-datalayer", function(){
  window.CWC_MLCA.event("download", // event tyoe
                        "download", // action name
                        "pdf", // action category 
                        "policy-booklet-2020.pdf", // action label 
                        "Policy Booklet 2020"); // action description
});
