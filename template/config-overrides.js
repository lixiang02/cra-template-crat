const {
  override,
  customBuildConfig,
  customEntryConfig
} = require("mcf-cra")

module.exports = override(
  customBuildConfig(),
  customEntryConfig()
)