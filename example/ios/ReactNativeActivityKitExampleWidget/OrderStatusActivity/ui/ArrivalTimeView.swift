//
//  ArrivalTimeView.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/6/22.
//

import SwiftUI

struct ArrivalTimeView: View {
  var label: String = "Arrives"
  var arrivalRangeStart: String
  var arrivalRangeEnd: String
  
  var body: some View {
    Text("\(label)\n\(arrivalRangeStart)-\(arrivalRangeEnd)")
      .font(HeadlineFont)
      .foregroundColor(Color("TextPrimary"))
      .multilineTextAlignment(.trailing)
  }
}

struct ArrivalTimeView_Previews: PreviewProvider {
    static var previews: some View {
        ArrivalTimeView(arrivalRangeStart: "10:00",
                        arrivalRangeEnd: "11:45am")
    }
}
