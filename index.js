/**
 * Creates a reducer from a map with action entries
 */
module.exports = function mapActionToReducer(reducers) {;
  return function(state, action) {
    if (typeof reducers[action.type] === 'function') {
      return reducers[action.type](state, action);
    } else {
      return state || reducers['default'];
    }
  }
}
