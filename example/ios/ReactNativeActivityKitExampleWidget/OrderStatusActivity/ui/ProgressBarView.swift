//
//  ProgressBarView.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/6/22.
//

import SwiftUI

struct ProgressBarView: View {
  var steps = 0
  
  var body: some View {
    HStack(spacing: 4) {
      DashView(isActive: steps > 0)
      DashView(isActive: steps > 1)
      DashView(isActive: steps > 2)
      DashView(isActive: steps > 3)
    }
  }
}

struct ProgressBarView_Previews: PreviewProvider {
    static var previews: some View {
      Group {
        ProgressBarView(steps: 0)
        ProgressBarView(steps: 1)
        ProgressBarView(steps: 2)
        ProgressBarView(steps: 3)
        ProgressBarView(steps: 4)
      }
      .previewLayout(.sizeThatFits)
          
    }
}
