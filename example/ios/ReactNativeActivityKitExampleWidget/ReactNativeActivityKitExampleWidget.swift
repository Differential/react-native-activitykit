//
//  ReactNativeActivityKitExampleWidget.swift
//  ReactNativeActivityKitExampleWidget
//
//  Created by Caleb Panza on 10/5/22.
//

import ActivityKit
import SwiftUI
import WidgetKit
import ReactNativeActivityKitXC

func stringToOrderStatus(_ str: String) -> OrderStatus {
  if str == "delivering" {
    return .delivering
  }
  
  if str == "completed" {
    return .completed
  }
  
  return .preparing
}

@main
struct ReactNativeActivityKitExampleWidget: Widget {
    let kind: String = "ReactNativeActivityKitExampleWidget"

    var body: some WidgetConfiguration {
      ActivityConfiguration(for: RNAKActivityAttributes.self) { context in
//        let orderStatus = stringToOrderStatus(context.state.status)
        
//        OrderStatusLiveActivityView(arrivalRangeStart: "10:00",
//                                    arrivalRangeEnd: "11:45pm",
//                                    orderStatus: .preparing)
        
        if let json = context.state.json,
           let stateLabel = json["status"] as? String {
          if let attr = context.attributes.json,
            let attributeLabel = attr["status"] as? String {
            VStack {
              Text(stateLabel)
              Text(attributeLabel)
            }
          } else {
            Text(stateLabel)
          }
          
        } else {
          Text("Didn't work")
        }
      } dynamicIsland: { context in
//        let orderStatus = stringToOrderStatus(context.state.status)
//        let orderStatus: OrderStatus = .preparing
//        let arrivalRangeStart = "10:00"
//        let arrivalRangeEnd = "11:45pm"
        
        return DynamicIsland {
          // Create the expanded view.
          DynamicIslandExpandedRegion(.leading) {
//            TitleView(orderStatus: orderStatus)
//              .padding(16)
//              .preferredColorScheme(.dark)
            Text("Hello")
          }

          DynamicIslandExpandedRegion(.trailing) {
//            ArrivalTimeView(label: "Arrives",
//                            arrivalRangeStart: arrivalRangeStart,
//                            arrivalRangeEnd: arrivalRangeEnd)
//              .padding(16)
//              .preferredColorScheme(.dark)
            Text("Hello")
          }

          DynamicIslandExpandedRegion(.bottom) {
//            DeliveryStatusProgressBarView(orderStatus: orderStatus)
//              .padding(16)
//              .preferredColorScheme(.dark)
            Text("Hello")
          }
        } compactLeading: {
//          if orderStatus == .delivering {
//            return Image(systemName: "knife.fork")
//              .foregroundColor(Color("Saucy"))
//              .preferredColorScheme(.dark)
//          } else if orderStatus == .completed {
//            return Image(systemName: "knife.fork")
//              .foregroundColor(Color("Saucy"))
//              .preferredColorScheme(.dark)
//          } else {
//            return Image(systemName: "knife.fork")
//              .foregroundColor(Color("Saucy"))
//              .preferredColorScheme(.dark)
//          }
          Text("Hello")
        } compactTrailing: {
//          Text(orderStatus.rawValue)
//            .foregroundColor(Color("Saucy"))
//            .preferredColorScheme(.dark)
          Text("Hello")
        } minimal: {
//          if orderStatus == .delivering {
//            return Image(systemName: "knife.fork")
//              .foregroundColor(Color("Saucy"))
//              .preferredColorScheme(.dark)
//          } else if orderStatus == .completed {
//            return Image(systemName: "knife.fork")
//              .foregroundColor(Color("Saucy"))
//              .preferredColorScheme(.dark)
//          } else {
//            return Image(systemName: "knife.fork")
//              .foregroundColor(Color("Saucy"))
//              .preferredColorScheme(.dark)
//          }
          Text("Hello")
        }
      }
    }
}
