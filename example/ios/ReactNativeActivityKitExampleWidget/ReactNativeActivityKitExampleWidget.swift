//
//  ReactNativeActivityKitExampleWidget.swift
//  ReactNativeActivityKitExampleWidget
//
//  Created by Caleb Panza on 10/5/22.
//

import ActivityKit
import SwiftUI
import WidgetKit

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
      ActivityConfiguration(for: OrderStatusActivityAttributes.self) { context in
        let orderStatus = stringToOrderStatus(context.state.status)
        
        OrderStatusLiveActivityView(arrivalRangeStart: context.state.arrivalRangeStart,
                                    arrivalRangeEnd: context.state.arrivalRangeEnd,
                                    orderStatus: orderStatus)
      } dynamicIsland: { context in
        let orderStatus = stringToOrderStatus(context.state.status)
        
        return DynamicIsland {
          // Create the expanded view.
          DynamicIslandExpandedRegion(.leading) {
            TitleView(orderStatus: orderStatus)
              .padding(16)
          }

          DynamicIslandExpandedRegion(.trailing) {
            ArrivalTimeView(label: "Arrives",
                            arrivalRangeStart: context.state.arrivalRangeStart,
                            arrivalRangeEnd: context.state.arrivalRangeEnd)
              .padding(16)
          }

          DynamicIslandExpandedRegion(.bottom) {
            DeliveryStatusProgressBarView(orderStatus: orderStatus)
              .padding(16)
          }
        } compactLeading: {
          Text("Compact Leading")
        } compactTrailing: {
          Text("Compact Trailing")
        } minimal: {
          Image(systemName: systemImage)
            .foregroundColor(foregroundColor())
        }
        .keylineTint(.yellow)
      }
    }
}
