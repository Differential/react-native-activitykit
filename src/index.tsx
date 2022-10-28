import { NativeModules, Platform } from 'react-native';

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
  state: Record<string, unknown>,
  attributes: Record<string, unknown> = {}
): string {
  return ReactNativeActivityKit.request(
    JSON.stringify(state),
    JSON.stringify(attributes)
  );
}

export function updateActivity(
  identifier: string,
  state: Record<string, unknown>
) {
  ReactNativeActivityKit.update(identifier, JSON.stringify(state));
}

export function endActivity(identifier: string) {
  ReactNativeActivityKit.end(identifier);
}
