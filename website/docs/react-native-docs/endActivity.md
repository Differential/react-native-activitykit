`endActivity(identifier, options)`

Ends an active Live Activity. Wrapper for the [Activity.end](https://developer.apple.com/documentation/activitykit/activity/end(using:dismissalpolicy:)) method from ActivityKit

Returns the final [Activity](/docs/react-native-docs/ActivityKitActivity) that was ended.

### Props
| prop | type | required | default | description |
| --- | --- | --- | --- | --- |
| identifier | string | ✅ | - | Identifier of the Activity that you want to end. Provided in the return value of the [startActivity](/docs/react-native-docs/startActivity) method |
| options | [EndActivityOptions](/docs/react-native-docs/EndActivityOptions) | - | `{ dismissalPolicy: "default", finalContentState: "" }` | Options to end the Activity with |

---

### Update an existing Activity
```js
import { updateActivity } from 'react-native-activitykit';

const updatedActivity = await updateActivity("activity-id", { status: "My New Status" })
```

---

### todos
Add support for the [afterDate](https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy/after(_:)) DismissalPolicy