// digital-analytics-vue.js
var digital_analytics = new Vue({
  el: '#digital_analytics',
  data: {
    digital_analytics_2020: {},
    page_categories: ["System Object", "JSO (JavaScript Object)", "HTML5 data-analytics-* Attributes"],
    pages: [
      [ "URL", "Timestamp", "Other" ],
      [ "Root", "Site", "Page", "Products", "Forms", "Events", "Transaction", "Components", "Users", "Customers" ],
      [ "Redirect", "Exit", "Download", "Click", "Content" ]
    ],
    show_menu_bar: true,
    current_category_index: -1,
    current_page: null
  },
  mounted: function() {
    this.setCurrentCategoryPage(-1, -1);
    $.getJSON('json/digital_analytics.json').then((data) => {
      this.digital_analytics_2020 = data
      if (window.location.search.startsWith("?form")) {
        this.setCurrentCategoryPage(1, 4);
        if (window.location.search.startsWith("?form0=")) this.digital_analytics_2020[this.current_page].demo.formindex = 1;
        if (window.location.search.startsWith("?form1=")) this.digital_analytics_2020[this.current_page].demo.formindex = 2;
        if (window.location.search.startsWith("?form2=")) this.digital_analytics_2020[this.current_page].demo.formindex = 3;
        window.CWC_MLCA.form("demo application", "app012", "step-" + this.digital_analytics_2020[this.current_page].demo.formindex, "application");
        window.CWC_MLCA.event("Demo Application Submit", "submit", "Demo Application Step-" + this.digital_analytics_2020[this.current_page].demo.formindex, "Demo Application Submit Step-" + this.digital_analytics_2020[this.current_page].demo.formindex);
        this.scrollPageBottom();
      }
    });
    window.CWC_MLCA.site();
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
        daPageName += (categoryIndex == 0 ? "system-object" : (categoryIndex == 1 ? "data-layer" : "html5-attribute"));
        daPageTitle += " : " + this.page_categories[categoryIndex];
        daPageCategory = this.page_categories[categoryIndex];
        if (pageIndex < 0) this.current_page = "View detail of " + this.page_categories[categoryIndex];
        else {
          this.current_page = this.pages[categoryIndex][pageIndex];
          daPageName += ":" + this.current_page.toLowerCase();
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
            if (this.current_page == "Products") window.CWC_MLCA.product("Travel in Canada", "ti01234567", "travel insurance", "insurance", "45 days", "$100", "single coverage: 45 days");
            if (this.current_page == "Events") window.CWC_MLCA.event("submit-ti012", "submit", "Travel Insurance", "Travel Insurance Prompt 2020");
            if (this.current_page == "Transaction") {
              window.CWC_MLCA.transaction("transaction012", "user012", "$120", "Transfer",  "bank saving");
              window.CWC_MLCA.event("transaction-pb012", "transaction", "Money Transfer", "Money Transfer Transaction Saving 2020");
            }
            if (this.current_page == "Components") window.CWC_MLCA.component("CreditLineApprove", "component012", "line of credit approved");
            if (this.current_page == "Users") window.CWC_MLCA.user("user01234567", "role01234567", "group01234567", "advisor01234567", "login");
            if (this.current_page == "Customers") window.CWC_MLCA.customer("prospect", "F", "40", "non-smoke", "ON", "primary", "self-employed");
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
    }
  }
});
