//
//  OrderStatusActivityAttributes.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/5/22.
//


import ActivityKit

enum OrderStatus : String {
  case preparing = "Preparing your order"
  case delivering = "On our way"
  case completed = "Order delivered"
}

struct OrderStatusActivityAttributes: ActivityAttributes {
    
    public typealias OrderStatusActivityAttributesStatus = ContentState

    // State : these are dynamic values that influence changes in the UI over the lifecycle of an activity
    public struct ContentState: Codable, Hashable {
      var numberOfPizzas: Int
      var arrivalRangeStart: String
      var arrivalRangeEnd: String
      var status: String
    }
    
    // Attributes : these are static values established at the creation of the Activity
}
