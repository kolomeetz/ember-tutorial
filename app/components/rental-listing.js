import Component from '@ember/component';

export default Component.extend({
  isWide: false,

  actions: {
    toggleImageSize() {
      console.log('toggled');
      this.toggleProperty('isWide');
    }
  }
});
