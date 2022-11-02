import Foundation
import ActivityKit
import ReactNativeActivityKitXC

@objc(ReactNativeActivityKit)
class ReactNativeActivityKit: NSObject {

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }
    
    @objc(request:attributesJSON:)
    func request(stateJSON: String, attributesJSON: String) {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            do {
                let attributes = RNAKActivityAttributes(jsonString: attributesJSON)
                let contentState = RNAKActivityAttributes.ContentState(jsonString: stateJSON)
                
                let activity = try Activity<RNAKActivityAttributes>.request(
                    attributes: attributes,
                    contentState: contentState,
                    pushType: nil)
                
                print("Starting a Live Activity")
            } catch (let error) {
                print("Error requesting React Native ActivityKit Live Activity \(error.localizedDescription)")
                print(error)
            }
        }
    }
    
    @objc(end:)
    func end(id: String) {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            Task {
                if let activity = Activity<RNAKActivityAttributes>.activities.first(where: { activity in
                    return activity.id == id
                }) {
                    // todo : figure out how to support concurency here
                    await activity.end()
                }
            }
        }
    }
}
