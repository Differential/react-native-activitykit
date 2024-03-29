import ActivityKit

public typealias JSONObject = [String:Any]

public struct RNAKActivityAttributes: ActivityAttributes {
    
    public init() {
        self.jsonString = nil
    }
    
    public init(jsonString: String) {
        self.jsonString = jsonString
    }
    
    public typealias RNAKActivityAttributesContentState = ContentState

    // State : these are dynamic values that influence changes in the UI over the lifecycle of an activity
    public struct ContentState: Codable, Hashable {
        public init(jsonString: String) {
            self.jsonString = jsonString
        }
        
        public let jsonString: String
        
        public var json: JSONObject? {
            get {
                print("jsonString: \(self.jsonString)")
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
    public let jsonString: String?
    
    public var json: JSONObject? {
        get {
            do {
                print("jsonString: \(self.jsonString)")
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
