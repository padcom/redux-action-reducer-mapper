A mapper that makes it easy to create reducers based on a set of closures mapped to actions.

Use it instead of a gigantic and highly complex (in terms of cyclomatic code complexity) ```switch``` statement:

```
import mapActionToReducer from 'redux-action-reducer-mapper';

const reducer = mapActionToReducer({
  'default': '',
  'MY_ACTION': (state, action) => action.payload
})
```

is an equivalent of

```
const reducer = (state = '', action) => {
  switch(action.type) {
    case 'MY_ACTION':
      return action.payload;
    default:
      return state;
  }
}
```

This reveals that if no action matched the previous state is returned.
