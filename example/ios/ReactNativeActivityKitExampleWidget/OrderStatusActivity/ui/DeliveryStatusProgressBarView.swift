//
//  DeliverStatusProgressBarView.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/6/22.
//

import SwiftUI
import WidgetKit

struct DeliveryStatusProgressBarView: View {
  var orderStatus: OrderStatus = .preparing
  
  var body: some View {
      HStack {
        OrderStatusIndicatorView(isActive: true,
                             systemImage: "fork.knife")
        
        if orderStatus == .preparing {
          ProgressBarView(steps: 1)
        } else {
          ProgressBarView(steps: 4)
        }
        
        
        OrderStatusIndicatorView(isActive: orderStatus == .delivering || orderStatus == .completed,
                             systemImage: "car.fill")
        
        if orderStatus == .delivering {
          ProgressBarView(steps: 1)
        } else if orderStatus == .completed {
          ProgressBarView(steps: 4)
        } else {
          ProgressBarView(steps: 0)
        }
        
        OrderStatusIndicatorView(isActive: orderStatus == .completed,
                             systemImage: "checkmark")
          
      }
  }
}

struct DeliverStatusProgressBarView_Previews: PreviewProvider {
    static var previews: some View {
      Group {
        DeliveryStatusProgressBarView(orderStatus: .preparing)
        DeliveryStatusProgressBarView(orderStatus: .delivering)
        DeliveryStatusProgressBarView(orderStatus: .completed)
      }
      .previewContext(WidgetPreviewContext(family: .systemMedium))
      .previewLayout(.sizeThatFits)
    }
}
