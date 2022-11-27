import { NativeModules, Platform } from 'react-native';
import type { ActivityKitActivity, EndActivityOptions, ActivityDismissalPolicy } from './types'

const LINKING_ERROR =
  `The package 'react-native-activitykit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ReactNativeActivityKit = NativeModules.ReactNativeActivityKit
  ? NativeModules.ReactNativeActivityKit
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

export function multiply(a: number, b: number): Promise<number> {
  return ReactNativeActivityKit.multiply(a, b);
}

/**
 * Starts a Live Activity. Wrapper for the Activity.request method from ActivityKit
 * @see https://developer.apple.com/documentation/activitykit/activity/request(attributes:contentstate:pushtype:)
 * 
 * @param {!Object} contentState - An object that contains the dynamic content of a Live Activity
 * @param {!Object} [attributes={}] - An object that contains the static content of a Live Activity
 * @returns {Promise<Object>} Activity that was started
 *
 * @todo add support for specifying a PushType
 *
 * @example <caption>Starting a Live Activity with dynamic and static content</caption>
 * const activity = await startActivity({ status: "Dynamic Status" }, { label: "My Static Label "})
 * 
 * @example <caption>Starting a Live Activity with dynamic content only</caption>
 * const activity = await startActivity({ status: "Dynamic Status" })
 * 
 */
export function startActivity(
  contentState: Record<string, unknown>,
  attributes: Record<string, unknown> = {}
): Promise<ActivityKitActivity> {
  return ReactNativeActivityKit.request(
    JSON.stringify(contentState),
    JSON.stringify(attributes)
  ).then((res: string) => {
    try {
      return JSON.parse(res)
    } catch (e) {
      throw new Error("[react-native-activitykit] Could not parse response from startActivity")
    }
  });
}

/**
 * Updates an existing activity. Wrapper for the Activity.update method from ActivityKit
 * @see https://developer.apple.com/documentation/activitykit/activity/update(using:)
 * 
 * @param {!string} identifier - Identifier of the Activity that you want to update. Provided in the return value of the {@link startActivity} method
 * @param {!Object} contentState - Content that you want to display when updating your Activity
 * @returns {Promise<Object>} 
 * 
 * @todo add support for specifying an AlertConfiguration
 * 
 * @example <caption>Update an existing Activity</caption>
 * const newActivity = await updateActivity("activity-id", { status: "My New Status" })
 */
export function updateActivity(
  identifier: string,
  contentState: Record<string, unknown>
): Promise<ActivityKitActivity> {
  return ReactNativeActivityKit.update(
    identifier,
    JSON.stringify(contentState)
  ).then((res: string) => {
    try {
      return JSON.parse(res)
    } catch (e) {
      throw new Error("[react-native-activitykit] Could not parse response from updateActivity")
    }
  });
}

/**
 * Ends an active Live Activity. Wrapper for the Activity.end method from ActivityKit
 * @see https://developer.apple.com/documentation/activitykit/activity/end(using:dismissalpolicy:)
 * 
 * @param {!string} identifier 
 * @param {?Object} options - Options to end the Activity with
 * @param {?string} [options.dismissalPolicy="default"] - Specifies the Activity DismissalPolicy that you'd like to end your Activity with
 * @param {?Object} options.finalContentState - The final piece of dynamic content to display on your Activity after it's ended. Note, this will not display if the `dismissalPolicy` is set to "immediate"
 * @returns {Promise<Object>} 
 * 
 * @todo add support for the `afterDate` DismissalPolicy
 * 
 * @example <caption>End an Activity immediately</caption>
 * const finalActivityState = await endActivity("activity-id", { dismissalPolicy: "immediate" })
 * 
 * @example <caption>End an Activity with a final content state</caption>
 * const finalActivityState = await endActivity("activity-id", {
 *  dismissalPolicy: "default",
 *  finalContentState: {
 *    status: "My Final Status"
 *  }
 * })
 */
export function endActivity(
  identifier: string,
  options?: EndActivityOptions
): Promise<ActivityKitActivity> {
  const dismissalPolicy = options?.dismissalPolicy || "default"
  const finalContentState = options?.finalContentState ? JSON.stringify(options.finalContentState) : ""

  return ReactNativeActivityKit.end(identifier, finalContentState, dismissalPolicy).then((res: string) => {
    try {
      return JSON.parse(res)
    } catch (e) {
      throw new Error("[react-native-activitykit] Could not parse response from endActivity")
    }
  });
}

/**
 * Ends all currently active Activities. There is no ActivityKit equivilant, but instead this is a method provided by react-native-activitykit for convenience. Best used when trying to wipe/clean up data.
 * 
 * @param {?Object} options - The options that will be used when ending each Activity
 * @returns {Promise<Array<Object>>} An array of each Activity that was ended.
 * 
 * @example <caption>End all Activities with default options</caption>
 * const activities = await endActivities()
 * 
 * @example <caption>End all Activities immediately</caption>
 * const activities = await endActivities({ dismissalPolicy: "immediate" })
 * 
 * @example <caption>End all Activities with the same final Content State</caption>
 * const activities = await endActivities({
 *  dismissalPolicy: "default",
 *  finalContentState: {
 *    status: "Final Status shared by ALL Activities"
 *  }
 * })
 */
export function endActivities(options?: EndActivityOptions): Promise<ActivityKitActivity[]> {
  const dismissalPolicy = options?.dismissalPolicy || "default"
  const finalContentState = options?.finalContentState ? JSON.stringify(options.finalContentState) : ""

  return ReactNativeActivityKit.endAll(finalContentState, dismissalPolicy).then((res: string) => {
    try {
      const activities: string[] = JSON.parse(res)
      return activities.map((activity: string) => JSON.parse(activity))
    } catch (e) {
      throw new Error("[react-native-activitykit] Could not parse response from endActivities")
    }
  });
}

/**
 * String keys for ActivityUIDismissalPolicy values
 * @see https://developer.apple.com/documentation/activitykit/activityuidismissalpolicy
 * 
 * @type {{ default: string, immediate: string, afterDate: string }}
 */
export const ActivityDismissalPolicies: Record<string, ActivityDismissalPolicy> = {
  default: 'default',
  immediate: 'immediate',
  afterDate: 'afterDate'
}

export * from './types'