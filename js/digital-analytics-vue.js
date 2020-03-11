// digital-analytics-vue.js
var digital_analytics = new Vue({
  el: '#digital_analytics',
  data: {
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
  },
  methods: {
    setCurrentCategoryPage: function (categoryIndex, pageIndex) {
      this.current_category_index = categoryIndex;
      this.current_page = null;
      if (categoryIndex >= 0) this.current_page = this.pages[categoryIndex][pageIndex];
      console.log("wz:setCurrentCategoryPage:" + this.current_category_index + "|" + this.current_page);
    },
    showMenuBar: function (showFlag) {
      if (showFlag) {
        this.$refs.menuSidebar.style.display = "block";
        this.$refs.menuOverlay.style.display = "block";
      } else {
        this.$refs.menuSidebar.style.display = "none";
        this.$refs.menuOverlay.style.display = "none";
      }
      console.log("wz:showMenuBar:" + showFlag + "|" + this.$refs.menuSidebar);
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
