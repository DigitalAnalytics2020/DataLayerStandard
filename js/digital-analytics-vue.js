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
    //var sampleScenarios = [];
    window.CWC_MLCA_SampleScenario.forEach(item => { this.pages[3].push(item.sample); });
    this.setCurrentCategoryPage(-1, -1);
    $.getJSON('json/digital_analytics.json').then((data) => {
      this.digital_analytics_2020 = data
      if (window.location.search.startsWith("?form")) {
        var form_actions = ["form-start", "form-step", "form-submit"];
        this.setCurrentCategoryPage(1, 4);
        if (window.location.search.startsWith("?form0=")) this.digital_analytics_2020[this.current_page].demo.formindex = 1;
        if (window.location.search.startsWith("?form1=")) this.digital_analytics_2020[this.current_page].demo.formindex = 2;
        if (window.location.search.startsWith("?form2=")) this.digital_analytics_2020[this.current_page].demo.formindex = 3;
        window.CWC_MLCA.form(form_actions[this.digital_analytics_2020[this.current_page].demo.formindex - 1], "demo application", "app012", "step-" + this.digital_analytics_2020[this.current_page].demo.formindex, "application");
        this.scrollPageBottom();
      }
    });
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
      window.CWC_MLCA.page(daPageName, daPageTitle, daPageCategory, daPageLanguage);
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
        window.CWC_MLCA_SampleScenario.forEach(item => { if (item.sample == this.current_page) description_body = item.page; });
      }
      return description_body;
    },      
    pageDemo: function () {
      var demo = null;
      if (this.digital_analytics_2020[this.current_page] !== undefined && this.digital_analytics_2020[this.current_page].demo !== undefined) {
        demo = {};
        demo.description = this.digital_analytics_2020[this.current_page].demo.description;
        if (this.digital_analytics_2020[this.current_page].demo.sample !== undefined && this.digital_analytics_2020[this.current_page].demo.sampleflag !== undefined) {
          demo.sampleflag = this.digital_analytics_2020[this.current_page].demo.sampleflag;
          demo.sample = "";
          this.digital_analytics_2020[this.current_page].demo.sample.forEach( function(line) {
            demo.sample += line + "<br />";
          });
        }
        if (this.digital_analytics_2020[this.current_page].demo.forms !== undefined && this.digital_analytics_2020[this.current_page].demo.formindex !== undefined) {
          demo.formindex = this.digital_analytics_2020[this.current_page].demo.formindex;
          demo.forms = this.digital_analytics_2020[this.current_page].demo.forms;
        }
      }
      return demo;
    },      
    setSampleDataLayer: function () {
      if (this.digital_analytics_2020[this.current_page] !== undefined && this.digital_analytics_2020[this.current_page].demo !== undefined) {
        if (this.digital_analytics_2020[this.current_page].demo.sample !== undefined && this.digital_analytics_2020[this.current_page].demo.sampleflag !== undefined) {
          this.digital_analytics_2020[this.current_page].demo.sampleflag = !this.digital_analytics_2020[this.current_page].demo.sampleflag;
          if (this.digital_analytics_2020[this.current_page].demo.sampleflag) {
            if (this.current_page == "Product") window.gbProduct("Travel in Canada", "ti012", "travel insurance", "insurance", "45 days", "$100", "single coverage: 45 days");
            if (this.current_page == "Event") window.CWC_MLCA.event("sample-event", "event", "Sample Event", "Sample Event 2020");
            if (this.current_page == "Transaction") window.gbTransaction("transaction012", "user012", "$120", "Transfer",  "bank saving");
            if (this.current_page == "Component") window.CWC_MLCA.component("CreditLineApprove", "component012", "line of credit approved");
            if (this.current_page == "User") window.CWC_MLCA.user("user01234567", "role01234567", "group01234567", "advisor01234567", "login");
            if (this.current_page == "Customer") window.gbCustomer("prospect", "F", "40", "non-smoke", "ON", "primary", "self-employed");
          }
        }
      }
      this.scrollPageBottom();
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
