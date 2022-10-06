//
//  OrderStatusLiveActivityView.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/5/22.
//

import SwiftUI
import WidgetKit

let HeadlineFont = Font.custom("Apercu-Bold", size: 17)
let SubheadlineFont = Font.custom("Apercu-Medium", size: 15)
let TitleFont = Font.custom("Analog Script Clean PERSONAL", size: 27)

struct OrderStatusIndicator: View {
  var isActive = false
  var systemImage: String
  
  var body: some View {
    VStack {
      Image(systemName: "fork.knife")
        .font(.system(size: 10))
        .foregroundColor(foregroundColor())
    }.frame(width: size(), height: size())
      .background(backgroundColor())
      .clipShape(Circle())
  }
  
  private func size() -> CGFloat {
    return self.isActive ? 24 : 20
  }
  
  private func backgroundColor() -> Color {
    return self.isActive ? Color("OrderStatusIndicatorActive") :Color("OrderStatusIndicatorInactive")
  }
  
  private func foregroundColor() -> Color {
    return self.isActive ? Color("OrderStatusForegroundActive") :Color("OrderStatusForegroundInactive")
  }
}

struct Dash: View {
  
  var isActive = false
  
  var body: some View {
    RoundedRectangle(cornerRadius: 50)
      .fill(Color(isActive ? "DashActive" : "DashInactive"))
      .frame(height: 5)
  }
  
}

struct ProgressBar: View {
  
  var steps = 0
  
  var body: some View {
    HStack(spacing: 4) {
      Dash(isActive: steps > 0)
      Dash(isActive: steps > 1)
      Dash(isActive: steps > 2)
      Dash(isActive: steps > 3)
    }
  }
}

struct OrderStatusLiveActivityView: View {
  var arrivalRangeStart: String
  var arrivalRangeEnd: String
  var orderStatus: OrderStatus = .preparing
  
    var body: some View {
      VStack(alignment: .leading, spacing: 10) {
        
        
        HStack(alignment: .top) {
          VStack(alignment: .leading) {
            Text("David's")
              .font(TitleFont)
              .foregroundColor(Color("TextPrimary"))
            Text("\(orderStatus.rawValue)")
              .font(SubheadlineFont)
              .foregroundColor(Color("TextSecondary"))
          }
          
          Spacer()
          
          Text("Arrives\n\(arrivalRangeStart)-\(arrivalRangeEnd)")
            .font(HeadlineFont)
            .foregroundColor(Color("TextPrimary"))
            .multilineTextAlignment(.trailing)
        }
        
        ZStack(alignment: .center) {
          
          HStack {
            OrderStatusIndicator(isActive: true,
                                 systemImage: "fork.knife")
            
            if orderStatus == .preparing {
              ProgressBar(steps: 1)
            } else {
              ProgressBar(steps: 4)
            }
            
            
            OrderStatusIndicator(isActive: orderStatus == .delivering || orderStatus == .completed,
                                 systemImage: "car.fill")
            
            if orderStatus == .delivering {
              ProgressBar(steps: 1)
            } else if orderStatus == .completed {
              ProgressBar(steps: 4)
            } else {
              ProgressBar(steps: 0)
            }
            
            OrderStatusIndicator(isActive: orderStatus == .completed,
                                 systemImage: "fork.knife")
              
          }
          
        }

      }
      .padding(16)
      .background(Color("OrderStatusBackground"))
    }
}

struct OrderStatusLiveActivityView_Previews: PreviewProvider {
  
  static var arrivalRangeStart = "10:45"
  static var arrivalRangeEnd = "11:00pm"
  
  static var orderStatus: OrderStatus = .completed
  
  static var previews: some View {
    OrderStatusLiveActivityView(arrivalRangeStart: arrivalRangeStart,
                                arrivalRangeEnd: arrivalRangeEnd,
                                orderStatus: orderStatus)
      .previewContext(WidgetPreviewContext(family: .systemMedium))
    }
}
