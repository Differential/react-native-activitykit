import Foundation
import ActivityKit
import ReactNativeActivityKitXC

struct KeyValue: Encodable, Decodable {
    var key: String
    var value: String
    
    func toJSONString() -> String? {
        do {
            let encodedData = try JSONEncoder().encode(self)
            return String(data: encodedData,
                          encoding: .utf8)
        } catch {
            return nil
        }
    }
}

@objc(ReactNativeActivityKit)
class ReactNativeActivityKit: NSObject {

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }
    
    @objc(request:withAttributesJSON:withResolver:withRejecter:)
    func request(stateJSON: String, attributesJSON: String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            do {
                let attributes = RNAKActivityAttributes(jsonString: attributesJSON)
                let contentState = RNAKActivityAttributes.ContentState(jsonString: stateJSON)
                
                let activity = try Activity<RNAKActivityAttributes>.request(
                    attributes: attributes,
                    contentState: contentState,
                    pushType: nil)
                
                // todo : figure out a better, more "Swifty" way to do this
                let activityId = "\"id\":\"\(activity.id)\""
                let state = "\"state\":\(stateJSON)"
                let attrs = "\"attributes\":\(attributesJSON)"

                resolve("{\(activityId),\(state),\(attrs)}")
            } catch (let error) {
                print("Error requesting React Native ActivityKit Live Activity \(error.localizedDescription)")
                print(error)
                // code, message, error
//                reject(<#String?#>, <#String?#>, <#Error?#>)
            }
        }
    }
    
    @objc(end:withResolver:withRejecter:)
    func end(activityId: String, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            Task {
                if let activity = Activity<RNAKActivityAttributes>.activities.first(where: { activity in
                    return activity.id == activityId
                }) {
                    print("[RNAK] Ending Activity")
                    await activity.end(dismissalPolicy: .immediate)
                }
            }
        }
    }
}
