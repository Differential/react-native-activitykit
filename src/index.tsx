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

// todo : I think that dismissalPolicies should be an enum. Gotta figure out how to handle that in TypeScript
// todo : We still need to handle a final state object being passed in and also ending an Activity at a specific time (.date), so maybe "args" could be a better option here instead of a single prop?
export function endActivity(identifier: string, options?: EndActivityOptions): Promise<ActivityKitActivity> {
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

export const ActivityDismissalPolicies: Record<string, ActivityDismissalPolicy> = {
  default: 'default',
  immediate: 'immediate',
  afterDate: 'afterDate'
}

export * from './types'