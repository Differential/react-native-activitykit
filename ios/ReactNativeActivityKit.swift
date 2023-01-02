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
        let contentStateKey = "\"contentState\":\(contentStateJSONString ?? "{}")"
        
        
        return"{\([activityIdKey, attributesKey, contentStateKey].joined(separator: ","))}"
    } catch {
        
    }
    
    return nil
}

@available(iOS 16.1, *)
let ActivityDismissalPolicyMap: [String:ActivityUIDismissalPolicy] = [
    "default": .default,
    "immediate": .immediate,
]

@objc(ReactNativeActivityKit)
class ReactNativeActivityKit: NSObject {
    
    @objc(request:withAttributesJSON:withResolver:withRejecter:)
    func request(contentStateJSON: String,
                 attributesJSON: String,
                 resolve: RCTPromiseResolveBlock,
                 reject: RCTPromiseRejectBlock
    ) -> Void {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            do {
                let attributes = RNAKActivityAttributes(jsonString: attributesJSON)
                let contentState = RNAKActivityAttributes.ContentState(jsonString: contentStateJSON)
                
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
    func end(activityId: String,
             resolve: @escaping RCTPromiseResolveBlock,
             reject: @escaping RCTPromiseRejectBlock
    ) -> Void {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            Task {
                if let activity = await self.findAndEndActivity(id: activityId, dismissalPolicy: .default) {
                    resolve(encodeActivityToString(activity: activity))
                } else {
                    reject(nil, "Couldn't end Activity. No Activity found matching id: \(activityId)", nil)
                }
            }
        }
    }
    
    @objc(end:withContentStateJSON:withDismissalPolicy:withResolver:withRejecter:)
    func end(activityId: String,
             contentStateJSON: String,
             dismissalPolicy: String,
             resolve: @escaping RCTPromiseResolveBlock,
             reject: @escaping RCTPromiseRejectBlock
    ) -> Void {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            Task {
                if let activity = await self.findAndEndActivity(id: activityId,
                                                                using: RNAKActivityAttributes.ContentState(jsonString: contentStateJSON),
                                                                dismissalPolicy: ActivityDismissalPolicyMap[dismissalPolicy] ?? .default) {
                    resolve(encodeActivityToString(activity: activity))
                } else {
                    reject(nil, "Couldn't end Activity. No Activity found matching id: \(activityId)", nil)
                }
            }
        }
    }
    
    @objc(endAll:withDismissalPolicy:withResolver:withRejecter:)
    func endAll(contentStateJSON: String,
                dismissalPolicy: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock
    ) -> Void {
        // ActivtyKit is only available in iOS 16.1 or later
        if #available(iOS 16.1, *) {
            Task {
                var finalActivities: [Activity<RNAKActivityAttributes>] = []
                
                for activity in Activity<RNAKActivityAttributes>.activities {
                    if let activity = await self.findAndEndActivity(id: activity.id,
                                                                    using: RNAKActivityAttributes.ContentState(jsonString: contentStateJSON),
                                                                    dismissalPolicy: ActivityDismissalPolicyMap[dismissalPolicy] ?? .default) {
                        finalActivities.append(activity)
                    } else {
                        reject(nil, "Couldn't end Activity in `endAll`. No Activity found matching id: \(activity.id)", nil)
                    }
                }
                
                let activitiesJSON: [String] = finalActivities.map { activity in
                    return encodeActivityToString(activity: activity)!
                }
                
                do {
                    let encodedActivites = try JSONEncoder().encode(activitiesJSON)
                    let activitiesJSONString = String(data: encodedActivites,
                                                      encoding: .utf8)
                    
                    resolve(activitiesJSONString)
                } catch {
                    reject(nil, "Couldn't map all finished activities to return value", nil)
                }
            }
        }
    }
    
    @objc(update:withContentStateJSON:withResolver:withRejecter:)
    func update(activityId: String,
                contentStateJSON: String,
                resolve: @escaping RCTPromiseResolveBlock,
                reject: @escaping RCTPromiseRejectBlock
    ) -> Void {
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
    
    @available(iOS 16.1, *)
    func findAndEndActivity(id: String,
                            using: Activity<RNAKActivityAttributes>.ContentState? = nil,
                            dismissalPolicy: ActivityUIDismissalPolicy = .default
    ) async -> Activity<RNAKActivityAttributes>? {
        if let activity = Activity<RNAKActivityAttributes>.activities.first(where: { activity in
            return activity.id == id
        }) {
            await activity.end(using: using, dismissalPolicy: dismissalPolicy)
            return activity
        }
        
        return nil
    }
}
