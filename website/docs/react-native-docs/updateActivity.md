`updateActivity(identifier, contentState)`

Updates an existing activity. Wrapper for the [Activity.update](https://developer.apple.com/documentation/activitykit/activity/update(using:)) method from ActivityKit

Returns the [Activity](/docs/react-native-docs/ActivityKitActivity) that was updated.

### Props
| prop | type | required | default | description |
| --- | --- | --- | --- | --- |
| identifier | string | ✅ | - | Identifier of the Activity that you want to update. Provided in the return value of the [startActivity](/docs/react-native-docs/startActivity) method |
| contentState | Object | ✅ | - | Content that you want to display when updating your Activity |

---

### Update an existing Activity
```js
import { updateActivity } from 'react-native-activitykit';

const updatedActivity = await updateActivity("activity-id", { status: "My New Status" })
```

---

### todos
Add support for specifying an [AlertConfiguration](https://developer.apple.com/documentation/activitykit/alertconfiguration)