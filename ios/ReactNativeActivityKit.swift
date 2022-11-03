import Foundation
import ActivityKit
import ReactNativeActivityKitXC

@available(iOS 16.1, *)
func encodeActivityToString(activity: Activity<RNAKActivityAttributes>) -> String? {
    do {
        let encodedAttributes = try JSONEncoder().encode(activity.attributes.jsonString)
        let attributesJSONString = String(data: encodedAttributes,
                                          encoding: .utf8)
        let encodedContentState = try JSONEncoder().encode(activity.contentState.jsonString)
        let contentStateJSONString = String(data: encodedContentState,
                                            encoding: .utf8)
        
        let activityIdKey = "\"id\":\"\(activity.id)\""
        let attributesKey = "\"attributes\":\(attributesJSONString ?? "{}")"
        let contentStateKey = "\"state\":\(contentStateJSONString ?? "{}")"
        
        
        return"{\([activityIdKey, attributesKey, contentStateKey].joined(separator: ","))}"
    } catch {
        
    }
    
    return nil
}

@objc(ReactNativeActivityKit)
class ReactNativeActivityKit: NSObject {

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }
    
    @objc(request:withAttributesJSON:withResolver:withRejecter:)
    func request(stateJSON: String, attributesJSON: String, resolve: RCTPromiseResolveBlock,reject: RCTPromiseRejectBlock) -> Void {
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
                resolve(encodeActivityToString(activity: activity))
            } catch (let error) {
                reject(nil, nil, error)
            }
        }
    }
    
    @objc(end:withResolver:withRejecter:)
    func end(activityId: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            Task {
                if let activity = Activity<RNAKActivityAttributes>.activities.first(where: { activity in
                    return activity.id == activityId
                }) {
                    await activity.end(dismissalPolicy: .immediate)
                    resolve(encodeActivityToString(activity: activity))
                } else {
                    reject(nil, "Couldn't end Activity. No Activity found matching id: \(activityId)", nil)
                }
            }
        }
    }
    
    @objc(update:withContentStateJSON:withResolver:withRejecter:)
    func update(activityId: String, contentStateJSON: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            Task {
                if let activity = Activity<RNAKActivityAttributes>.activities.first(where: { activity in
                    return activity.id == activityId
                }) {
                    let updatedContentState = RNAKActivityAttributes.ContentState(jsonString: contentStateJSON)

                    await activity.update(using: updatedContentState)
                    
                    resolve(encodeActivityToString(activity: activity))
                } else {
                    reject(nil, "Couldn't update Activity. No Activity found matching id: \(activityId)", nil)
                }
            }
        }
    }
}
