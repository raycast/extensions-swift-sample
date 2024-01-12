// swift-tools-version: 5.9
import PackageDescription

let package = Package(
  name: "SampleCode",
  platforms: [
    .macOS(.v12)
  ],
  dependencies: [
    .package(url: "https://github.com/raycast/raycast-extension-macro.git", branch: "dev")
  ],
  targets: [
    .executableTarget(
      name: "SampleCode",
      dependencies: [
        .product(name: "RaycastSwiftMacros", package: "raycast-extension-macro"),
        .product(name: "RaycastSwiftPlugin", package: "raycast-extension-macro"),
      ]
    ),
  ]
)
