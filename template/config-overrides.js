const {
  override,
  prodDefaultConfig,
  devDefaultConfig
} = require("mcf-cra")

module.exports = override(
  prodDefaultConfig(),
  devDefaultConfig()
)