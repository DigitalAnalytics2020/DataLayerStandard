// digital-analytics-vue.js
var digital_analytics = new Vue({
  el: '#digital_analytics',
  data: {
    digital_analytics_2020: {},
    page_categories: ["System Object", "JSO (JavaScript Object)", "HTML5 data-analytics-* Attributes"],
    pages: [],
    show_menu_bar: true,
    current_category_index: -1,
    current_page: null
  },
  mounted: function() {
    var pageSystem = [ "URL", "Timestamp", "Other" ];
    var pageDataLayer = [ "Root", "Site", "Page", "Products", "Forms", "Events", "Transaction", "Components", "Users", "Customers" ];
    var pageAttribute = [ "Redirect", "Exit", "Download", "Click", "Content" ];
    this.pages.push(pageSystem);
    this.pages.push(pageDataLayer);
    this.pages.push(pageAttribute);
    this.setCurrentCategoryPage(-1, -1);
    $.getJSON('json/digital_analytics.json').then((data) => {this.digital_analytics_2020 = data});
  },
  methods: {
    setCurrentCategoryPage: function (categoryIndex, pageIndex) {
      this.current_category_index = categoryIndex;
      this.current_page = null;
      if (categoryIndex >= 0) {
        if (pageIndex < 0) this.current_page = "View detail of " + this.page_categories[categoryIndex];
        else this.current_page = this.pages[categoryIndex][pageIndex];
      }
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
