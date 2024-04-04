import Foundation
import RaycastSwiftMacros

@raycast func noop() {
}

@raycast func greeting(name: String, isFormal: Bool) -> String {
  "Hello \(isFormal ? "Mr/Ms" : "") \(name)!"
}

@raycast func greetings(names: [String]) -> [String] {
  names.map { "Hello \($0)!" }
}

@raycast func delayedGreeting(name: String, seconds: Double) async throws -> String {
  guard seconds >= .zero else { throw CancellationError() }
  try await Task.sleep(nanoseconds: UInt64(seconds * 1_000_000_000))
  return "... Hello \(name)!"
}

@raycast func pickColorThrowsEnum(name: String) throws -> Color {
  switch name {
  case "red": Color(red: 1, green: 0, blue: 0)
  case "green": Color(red: 0, green: 1, blue: 0)
  case "blue": Color(red: 0, green: 0, blue: 1)
  default: throw Color.Error.unsupportedColor
  }
}

@raycast func pickColorThrowsString(name: String) throws -> Color {
  switch name {
  case "red": Color(red: 1, green: 0, blue: 0)
  case "green": Color(red: 0, green: 1, blue: 0)
  case "blue": Color(red: 0, green: 0, blue: 1)
  default: throw "\(name) is not supported color"
  }
}

@raycast func optionals(value: String?) async -> String? {
  return value
}

struct Color: Encodable {
  let red: Float
  let green: Float
  let blue: Float

  enum Error: Swift.Error {
    case unsupportedColor
  }
}

/// - attention: This is frown upon in Swift :)
extension String: Swift.Error { }
