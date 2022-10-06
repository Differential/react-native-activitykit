//
//  TitleView.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/6/22.
//

import SwiftUI

struct TitleView: View {
  
  var orderStatus: OrderStatus = .preparing
  
  var body: some View {
    VStack(alignment: .leading) {
      Text("David's")
        .font(TitleFont)
        .foregroundColor(Color("TextPrimary"))
      Text("\(orderStatus.rawValue)")
        .font(SubheadlineFont)
        .foregroundColor(Color("TextSecondary"))
    }
  }
}

struct TitleView_Previews: PreviewProvider {
    static var previews: some View {
        TitleView()
    }
}
