#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReactNativeActivityKit, NSObject)

RCT_EXTERN_METHOD(
                  request:(NSString *)stateJSON
                  withAttributesJSON:(NSString *)attributesJSON
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(
                  end:(NSString *)activityId
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(
                  update:(NSString *)activityId
                  withStateJSON:(NSString *)stateJSON
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
