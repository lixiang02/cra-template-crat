const {
  override,
  customBuildConfig,
  customEntryConfig,
  fixBabelImports
} = require("mcf-cra")

const treeShaking = () => config => {
  const isProdMode = process.env.NODE_ENV === 'production'
  if(isProdMode && process.env.MODE !== 'cjs'){
    fixBabelImports('antd', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,//自动打包相关的样式 默认为 style:'css'
    })(config),
    fixBabelImports('@mcf/component', {
      libraryName: '@mcf/components',
      libraryDirectory: 'lib',
      camel2DashComponentName: false
    })(config)
  }
  return config
}

module.exports = override(
  customBuildConfig(),
  customEntryConfig(),
  treeShaking()
)