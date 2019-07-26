import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const rental = {
  image: 'fake.png',
  title: 'test-title',
  owner: 'test-owner',
  type: 'test-type',
  city: 'test-city',
  bedrooms: 3
};

module('Integration | Component | rental-listing', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.rental = rental;
  });

  test('should display rental details', async function (assert) {
    await render(hbs`<RentalListing @rental={{this.rental}} />`);
    assert.equal(this.element.querySelector('.listing h3').textContent.trim(), rental.title, `Title: ${rental.title}`);
    assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), `Owner: ${rental.owner}`, `Owner: ${rental.owner}`);
  });

  test('should toggle wide class on click', async function (assert) {
    const image = () => this.element.querySelector('.image.wide');

    await render(hbs`<RentalListing @rental={{this.rental}} />`);
    assert.notOk(image(), 'initially rendered small');

    await click('.image');
    assert.ok(image(), 'rendered wide after click');

    await click('.image');
    assert.notOk(image(), 'rendered small after second click');
  });
});
