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
    $.getJSON('json/digital_analytics.json').then((data) => {this.digital_analytics_2020 = data});
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
