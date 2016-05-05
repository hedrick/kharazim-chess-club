import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  realName: attr('string'),
  bnet: attr('string'),
  hero: attr('string')
});
