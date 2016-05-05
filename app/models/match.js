import Model from 'ember-data/model';
import Ember from 'ember';
import attr from 'ember-data/attr';

export default Model.extend({
    matchDate:        DS.attr('date');
    mapName:          DS.attr('string');
    opponentTeamName: DS.attr('string');
    matchResult:      DS.attr('string');
    matchTime:        DS.attr('string');
    players:          DS.hasMany('player');
});
