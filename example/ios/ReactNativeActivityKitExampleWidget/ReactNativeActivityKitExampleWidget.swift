//
//  ReactNativeActivityKitExampleWidget.swift
//  ReactNativeActivityKitExampleWidget
//
//  Created by Caleb Panza on 10/5/22.
//

import ActivityKit
import SwiftUI
import WidgetKit

@main
struct ReactNativeActivityKitExampleWidget: Widget {
    let kind: String = "ReactNativeActivityKitExampleWidget"

    var body: some WidgetConfiguration {
      ActivityConfiguration(for: OrderStatusActivityAttributes.self) { context in
            Text("hello there!")
//        OrderStatusLiveActivityView(arrivalRangeStart: context.state.arrivalRangeStart,
//                                    arrivalRangeEnd: context.state.arrivalRangeEnd)
      } dynamicIsland: { context in
          DynamicIsland {
              // Create the expanded view.
              DynamicIslandExpandedRegion(.leading) {
                  Text("Leading")
              }
              
              DynamicIslandExpandedRegion(.trailing) {
                Text("Trailing")
              }
              
              DynamicIslandExpandedRegion(.center) {
                Text("Center")
              }
              
              DynamicIslandExpandedRegion(.bottom) {
                Text("Bottom")
              }
          } compactLeading: {
              Text("Compact Leading")
          } compactTrailing: {
            Text("Compact Trailing")
          } minimal: {
            Text("Min")
          }
          .keylineTint(.yellow)
      }
    }
}
