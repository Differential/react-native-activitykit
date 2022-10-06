//
//  DashView.swift
//  ReactNativeActivityKitExampleWidgetExtension
//
//  Created by Caleb Panza on 10/6/22.
//

import SwiftUI

struct DashView: View {
  var isActive = false
  
  var body: some View {
    RoundedRectangle(cornerRadius: 50)
      .fill(Color(isActive ? "DashActive" : "DashInactive"))
      .frame(height: 5)
  }
}

struct DashView_Previews: PreviewProvider {
    static var previews: some View {
        DashView()
    }
}
