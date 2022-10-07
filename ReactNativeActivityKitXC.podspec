Pod::Spec.new do |s|
  s.name         = "ReactNativeActivityKitXC"
  s.version      = "0.0.1"
  s.summary      = "Package description"
  s.homepage     = "https://github.com"
  s.license      = { :type => 'MIT', :file => 'LICENSE' }
  s.authors      = { "Caleb Panza" => "caleb.panza@icloud.com" }

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "https://github.com.git", :tag => "#{s.version}" }

  s.source_files = "xcode/**/*.{h,m,mm,swift}"
end