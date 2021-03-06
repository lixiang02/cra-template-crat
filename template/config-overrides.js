const {
  override,
  overrideDevServer,
  customBuildConfig,
  customEntryConfig,
  customBabelLoaderInclude,
  customProxyConfig,
  fixBabelImports,
  addWebpackAlias
} = require("@mcfed/cra")
const path = require('path')
const paths = require('react-scripts/config/paths')

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

module.exports = 

module.exports = {
  webpack: override(
    customBuildConfig(),
    customEntryConfig(),
    treeShaking(),
    addWebpackAlias({
      'mcf-module': path.join(paths.appNodeModules, 'mcf-module'),
      'react-intl': path.join(paths.appNodeModules, 'react-intl')  
    }),
    customBabelLoaderInclude([path.resolve(__dirname, './app')])
  ),
  devServer: overrideDevServer(
    customProxyConfig({
      [process.env.npm_package_config_API_SERVER]: {
        target: process.env.npm_package_config_MOCK_SERVER
      }
    })
  )
};
