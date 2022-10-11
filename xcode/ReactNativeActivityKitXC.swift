import ActivityKit

public struct RNAKActivityAttributes: ActivityAttributes {
    
    public init() {
        self.test = "Hello There!"
    }
    
    
    
    public typealias RNAKActivityAttributesStatus = ContentState

    // State : these are dynamic values that influence changes in the UI over the lifecycle of an activity
    public struct ContentState: Codable, Hashable {
        public init() {
            self.test = "General Kenobi"
        }
        
        let test: String
    }
    
    // Attributes : these are static values established at the creation of the Activity
    let test: String
}

public let RNAKTest = RNAKActivityAttributes()
