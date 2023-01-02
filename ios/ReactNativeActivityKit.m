#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReactNativeActivityKit, NSObject)

RCT_EXTERN_METHOD(
                  request:(NSString *)contentStateJSON
                  withAttributesJSON:(NSString *)attributesJSON
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(
                  end:(NSString *)activityId
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(
                  end:(NSString *)activityId
                  withContentStateJSON:(NSString *)contentStateJSON
                  withDismissalPolicy:(NSString *)dismissalPolicy
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(
                  endAll:(NSString *)contentStateJSON
                  withDismissalPolicy:(NSString *)dismissalPolicy
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(
                  update:(NSString *)activityId
                  withContentStateJSON:(NSString *)contentStateJSON
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
