//
//  OrderStatusIndicatorView.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/6/22.
//

import SwiftUI

struct OrderStatusIndicatorView: View {
  var isActive = false
  var systemImage: String
  
  var body: some View {
    VStack {
      Image(systemName: systemImage)
        .font(.system(size: 10))
        .foregroundColor(foregroundColor)
    }.frame(width: size, height: size)
      .background(backgroundColor)
      .clipShape(Circle())
  }
  
  var size: CGFloat {
    get {
      return isActive ? 24 : 20
    }
  }
  
  var backgroundColor: Color {
    get {
      return self.isActive ? Color("OrderStatusIndicatorActive") : Color("OrderStatusIndicatorInactive")
    }
  }
  
  var foregroundColor: Color {
    get {
      return self.isActive ? Color("OrderStatusForegroundActive") : Color("OrderStatusForegroundInactive")
    }
  }
}

struct OrderStatusIndicatorView_Previews: PreviewProvider {
    static var previews: some View {
      OrderStatusIndicatorView(systemImage: "fork.knife")
    }
}
