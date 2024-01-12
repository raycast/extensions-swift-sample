import Foundation
import RaycastSwiftMacros

@raycast func greet() {
  print("👋 Hello World! 👋")
}

@raycast func randomize(time: UInt) -> Float {
  Float(UInt.random(in: 0..<time))
}

@raycast func pickColor(name: String) throws -> Color {
  switch name {
  case "red": Color(red: 1, green: 0, blue: 0)
  case "green": Color(red: 0, green: 1, blue: 0)
  case "blue": Color(red: 0, green: 0, blue: 1)
  default: throw Color.Error.unsupportedColor
  }
}

struct Color: Encodable {
  let red: Float
  let green: Float
  let blue: Float

  enum Error: Swift.Error {
    case unsupportedColor
  }
}
