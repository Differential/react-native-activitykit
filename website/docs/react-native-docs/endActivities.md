`endActivities(options)`

Ends all currently active Activities. There is no ActivityKit equivilant, but instead this is a method provided by react-native-activitykit for convenience. Best used when trying to wipe/clean up data.

An array containing each [Activity](/docs/react-native-docs/ActivityKitActivity) that was ended.

### Props
| prop | type | required | default | description |
| --- | --- | --- | --- | --- |
| options | [[EndActivityOptions]](/docs/react-native-docs/EndActivityOptions) | - | `{ dismissalPolicy: "default", finalContentState: "" }` | An array containing each Activity that was ended. |

---

### Update an existing Activity
```js
import { updateActivity } from 'react-native-activitykit';

const updatedActivity = await updateActivity("activity-id", { status: "My New Status" })
```

---

### todos
Add support for the [afterDate](https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy/after(_:)) DismissalPolicy