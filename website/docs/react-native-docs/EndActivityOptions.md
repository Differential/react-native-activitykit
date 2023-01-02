### @type `Object`

| prop | type | required | description | Apple Docs |
| --- | --- | --- | --- | --- |
| dismissalPolicy | [ActivityDismissalPolicy](/docs/react-native-docs/ActivityDismissalPolicy) | - | Describes when the system should remove a Live Activity that ended | [ActivityUIDismissalPolicy](https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy) |
| dismissalDate | Date | - | The system removes the Live Activity that ended at the specified time within a four-hour window. Only applicable when `dismissalPolicy` is set to "afterDate". | [ActivityUIDismissalPolicy.after(date)](https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy/after(_:)) |
| finalContentState | Object | - | The latest and final dynamic content for the Live Activity that ended. | [Activity.ContentState](https://developer.apple.com/documentation/activitykit/activity/contentstate-swift.typealias) |
