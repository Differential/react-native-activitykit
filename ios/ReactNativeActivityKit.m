#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReactNativeActivityKit, NSObject)

RCT_EXTERN_METHOD(request:(NSString *)stateJSON attributesJSON:(NSString *))
RCT_EXTERN_METHOD(end:(NSString *))
RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
