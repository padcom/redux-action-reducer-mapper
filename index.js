/**
 * Creates a reducer from a map with action entries
 */
module.exports = function mapActionToReducer(reducers) {;
  return function(state, action) {
    console.log(typeof reducers[action.type]);
    if (typeof reducers[action.type] === 'function') {
      console.log('FUNCTION!!');
      return reducers[action.type](state, action);
    } else {
      console.log('not a function?');
      return state || reducers['default'];
    }
  }
}
