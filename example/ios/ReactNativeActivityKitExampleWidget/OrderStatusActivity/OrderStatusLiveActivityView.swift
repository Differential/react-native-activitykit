//
//  OrderStatusLiveActivityView.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/5/22.
//

import SwiftUI
import WidgetKit

struct OrderStatusLiveActivityView: View {
  var arrivalRangeStart: String
  var arrivalRangeEnd: String
  var orderStatus: OrderStatus = .preparing
  
    var body: some View {
      VStack(alignment: .leading, spacing: 10) {
        
        HStack(alignment: .top) {
          TitleView(orderStatus: orderStatus)
          
          Spacer()
          
          ArrivalTimeView(label: "Arrives",
                          arrivalRangeStart: arrivalRangeStart,
                          arrivalRangeEnd: arrivalRangeEnd)
        }
        
        DeliveryStatusProgressBarView(orderStatus: orderStatus)

      }
      .padding(16)
      .background(Color("OrderStatusBackground"))
    }
}

struct OrderStatusLiveActivityView_Previews: PreviewProvider {
  
  static var arrivalRangeStart = "10:45"
  static var arrivalRangeEnd = "11:00pm"
  
  static var previews: some View {
    Group {
      OrderStatusLiveActivityView(arrivalRangeStart: arrivalRangeStart,
                                  arrivalRangeEnd: arrivalRangeEnd,
                                  orderStatus: .preparing)
      OrderStatusLiveActivityView(arrivalRangeStart: arrivalRangeStart,
                                  arrivalRangeEnd: arrivalRangeEnd,
                                  orderStatus: .delivering)
      OrderStatusLiveActivityView(arrivalRangeStart: arrivalRangeStart,
                                  arrivalRangeEnd: arrivalRangeEnd,
                                  orderStatus: .completed)
    }.previewContext(WidgetPreviewContext(family: .systemMedium))
  }
}
