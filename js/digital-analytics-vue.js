// digital-analytics-vue.js
var digital_analytics = new Vue({
  el: '#digital_analytics',
  data: {
    digital_analytics_2020: {},
    page_categories: ["System Object", "JSO (JavaScript Object)", "HTML5 data-analytics-* Attributes", "Sample Scenario"],
    pages: [
      [ "URL", "Timestamp", "Other" ],
      [ "Root", "Static Variable", "Page", "Product", "Form", "Event", "Transaction", "Component", "User", "Customer" ],
      [ "Redirect", "Exit", "Download", "Click", "Content" ],
      []
    ],
    show_menu_bar: true,
    current_category_index: -1,
    current_page: null
  },
  mounted: function() {
    window.CWC_MLCA_SampleScenario.pages.forEach(item => { this.pages[3].push(item.sample); });
    $.getJSON('json/digital_analytics.json').then((data) => {this.digital_analytics_2020 = data});
    this.setCurrentCategoryPage(-1, -1);
  },
  methods: {
    setCurrentCategoryPage: function (categoryIndex, pageIndex) {
      var daPageName = "digital-analytics:standard2020:";
      var daPageTitle = "Digital Analytics Standard 2020";
      var daPageCategory = "";
      var daPageLanguage = "EN";
      this.current_category_index = categoryIndex;
      this.current_page = null;
      if (categoryIndex < 0) {
        daPageName += "home";
        daPageTitle += " : Home Page";
        daPageCategory = "Home";
      } else {
        daPageName += (categoryIndex == 0 ? "system-object" : (categoryIndex == 1 ? "data-layer" : (categoryIndex == 2 ? "html5-attribute" : "sample-scenario")));
        daPageTitle += " : " + this.page_categories[categoryIndex];
        daPageCategory = this.page_categories[categoryIndex];
        if (pageIndex < 0) this.current_page = "View detail of " + this.page_categories[categoryIndex];
        else {
          this.current_page = this.pages[categoryIndex][pageIndex];
          daPageName += ":" + this.current_page.toLowerCase().split(" ").join("-");
          daPageTitle += " - " + this.current_page;
        }
      }
      if (categoryIndex >= 3 && pageIndex >= 0) { // handle sample scenario
        if (pageIndex == 0) window.CWC_MLCA_SampleScenario.pageView();
        if (pageIndex == 1) window.CWC_MLCA_SampleScenario.pageUserView();
        if (pageIndex == 2) window.CWC_MLCA_SampleScenario.pdfDownload();
        //if (pageIndex == 3) window.CWC_MLCA_SampleScenario.pageView(); // no JavaScript code needed for HTML5 Attribute sample
        if (pageIndex == 4) window.CWC_MLCA_SampleScenario.singleTransactionProduct();
        if (pageIndex == 5) window.CWC_MLCA_SampleScenario.multipleTransactionProduct();
        if (pageIndex == 6) window.CWC_MLCA_SampleScenario.siteSearch();
        if (pageIndex == 7) window.CWC_MLCA_SampleScenario.formSubmission();
      } 
      else window.CWC_MLCA.page(daPageName, daPageTitle, daPageCategory, daPageLanguage); // push page view data for non-sample pages
    },
    showMenuBar: function (showFlag) {
      if (showFlag) {
        this.$refs.menuSidebar.style.display = "block";
        this.$refs.menuOverlay.style.display = "block";
      } else {
        this.$refs.menuSidebar.style.display = "none";
        this.$refs.menuOverlay.style.display = "none";
      }
    },
    pageDescription: function () {
      var description_body = null;
      if (this.digital_analytics_2020[this.current_page] !== undefined) {
        description_body = "";
        this.digital_analytics_2020[this.current_page].description.forEach( function(line) {
          description_body += line + "<br />";
        });
      } else if (this.pages[3].includes(this.current_page)) {
        window.CWC_MLCA_SampleScenario.pages.forEach(item => { if (item.sample == this.current_page) description_body = item.page; });
      }
      return description_body;
    },      
    scrollPageTop: function () {
      $('html, body').animate({scrollTop: 0}, 'fast');
    },
    scrollPageBottom: function () {
      $('html, body').animate({scrollTop: document.body.scrollHeight}, 'fast');
    }
  },
  computed: {
    classCaretDownSO: function () {
      return {
        'fa-caret-down': this.current_category_index == 0
      }
    },
    classCaretRightSO: function () {
      return {
        'fa-caret-right': this.current_category_index != 0
      }
    },
    classCaretDownDL: function () {
      return {
        'fa-caret-down': this.current_category_index == 1
      }
    },
    classCaretRightDL: function () {
      return {
        'fa-caret-right': this.current_category_index != 1
      }
    },
    classCaretDownHA: function () {
      return {
        'fa-caret-down': this.current_category_index == 2
      }
    },
    classCaretRightHA: function () {
      return {
        'fa-caret-right': this.current_category_index != 2
      }
    },
    classCaretDownSS: function () {
      return {
        'fa-caret-down': this.current_category_index == 3
      }
    },
    classCaretRightSS: function () {
      return {
        'fa-caret-right': this.current_category_index != 3
      }
    }
  }
});
