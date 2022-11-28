`startActivity(contentState, attributes)`

Starts a Live Activity. Wrapper for the [Activity.request](https://developer.apple.com/documentation/activitykit/activity/request(attributes:contentstate:pushtype:)) method from ActivityKit.

Returns the [Activity](/docs/react-native-docs/ActivityKitActivity) that was started.

### Props

| prop | type | required | default | description |
| --- | --- | --- | --- | --- |
| contentState | Object | ✅ | - | An object that contains the dynamic content of a Live Activity |
| attributes | Object | ✅ | `{}` | An object that contains the static content of a Live Activity |

---

### Starting a Live Activity with dynamic and static content
```js
import { startActivity } from 'react-native-activitykit';

const activity = await startActivity({ status: "Dynamic Status" }, { label: "My Static Label "})
```

---

### Starting a Live Activity with dynamic and static content
```js
import { startActivity } from 'react-native-activitykit';

const activity = await startActivity({ status: "Dynamic Status" }, { label: "My Static Label "})
```

---

### *todos*

Add support for specififying the Activity [PushType](https://developer.apple.com/documentation/activitykit/pushtype)