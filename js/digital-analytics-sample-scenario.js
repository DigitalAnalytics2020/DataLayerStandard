var CWC_MLCA_SampleScenario = CWC_MLCA_SampleScenario || {

  pages: [
  {
    "sample": "Page view",
    "page":
    `
<hr style="width:200px;border:3px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">This page use following code and data:</h5>
<ul class="w3-ul w3-dark-grey">
<li>var name = "digital-analytics:standard2020:sample-scenario:page-view";</li>
<li>var title = "Digital Analytics Standard2020 : Sample Scenario : Page View";</li>
<li>var category = "Sample Scenario";</li>
<li>var language = "EN";</li>
<li>window.CWC_MLCA.page(name, title, category, language);</li>
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
<hr style="width:200px;border:3px solid lightgrey" class="w3-round-small">
<h5 class="w3-text-blue-grey">under-construction</h5>
<ul class="w3-ul w3-dark-grey">
<li>under-construction</li>
</ul>
    `
  },

  {
    "sample": "Multiple transactions or products",
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

  // push sample page view data
  pageView: function() {
    window.CWC_MLCA.page("digital-analytics:standard2020:sample-scenario:page-view", // page name
                         "Digital Analytics Standard2020 : Sample Scenario : Page View", // page title
                         "Sample Scenario", // page category 
                         "EN"); // page language
  }

}
