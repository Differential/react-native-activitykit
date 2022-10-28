import ActivityKit

public typealias JSONObject = [String:Any]

public struct RNAKActivityAttributes: ActivityAttributes {
    
    public init() {
        self.jsonString = nil
    }
    
    public init(jsonString: String) {
        self.jsonString = jsonString
    }
    
    public typealias RNAKActivityAttributesStatus = ContentState

    // State : these are dynamic values that influence changes in the UI over the lifecycle of an activity
    public struct ContentState: Codable, Hashable {
        public init(jsonString: String) {
            self.jsonString = jsonString
        }
        
        private let jsonString: String
        
        public var json: JSONObject? {
            get {
                do {
                    let jsonStringData = Data(self.jsonString.utf8)
                    let serialized = try JSONSerialization.jsonObject(with: jsonStringData, options: .mutableContainers) as! [String:Any]
                    return serialized
                } catch {
                    print("[react-native-activity-kit] Could not decode State JSON String to object")
                }
                
                return nil
            }
        }
    }
    
    // Attributes : these are static values established at the creation of the Activity
    private let jsonString: String?
    
    public var json: JSONObject? {
        get {
            do {
                if let jsonString = self.jsonString {
                    let jsonStringData = Data(jsonString.utf8)
                    let serialized = try JSONSerialization.jsonObject(with: jsonStringData, options: .mutableContainers) as! [String:Any]
                    return serialized
                }
            } catch {
                print("[react-native-activity-kit] Could not decode Attributes JSON String to object")
            }
            
            return nil
        }
    }
}

public let RNAKTest = RNAKActivityAttributes()
