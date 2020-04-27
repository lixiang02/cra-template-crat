#0.3.5

  框架升级版本:使用`@mcf/core` 代替 `mcf-core` 包使用,移除老`mcf-core`.

  + 修改文件 package.json

```diff
  "private": false,
   "dependencies": {
     "@babel/runtime": "^7.4.0",
+    "@mcf/core": "^0.2.8",
     "antd": "3.5.1",
     "mcf-components": "^1.3.2",
-    "mcf-core": "^0.2.0",
     "mcf-crud": "^1.3.1",
     "mcf-utils": "^1.3.4",
     "react": "16.3.0",
```

  + 修改文件 app.js

```diff
diff --git a/app.js b/app.js
index a267959..fbddf33 100644
--- a/app.js
+++ b/app.js
@@ -3,7 +3,7 @@ import {HashRouter as Router, Switch, Route} from 'react-router-dom';
 import {Provider} from 'react-redux';
 import {createHashHistory} from 'history';
 import {IntlProvider} from 'react-intl';
-import {StoreManage} from 'mcf-core';
+import {StoreManager} from '@mcf/core';
 import {createLogger} from 'redux-logger';
 import * as Module from './src/';
 import * as tongfangConfigs from '@capaa/tongfang-configs';
@@ -11,7 +11,7 @@ import '@capaa/tongfang-configs/dist/cjs/main.css';
 global.CAPAA_TONGFANGCONFIG_PATH = '/tongfang/config';
 
 const logger = createLogger();
-const store = new StoreManage(createHashHistory(), null, [logger]);
+const store = new StoreManager(createHashHistory(), null, [logger]);
 
 export default class App extends Component {
   render() {
```

  + 修改文件 src/containter.js

```diff
  diff --git a/src/container.js b/src/container.js
index 33c4926..53b24f8 100644
--- a/src/container.js
+++ b/src/container.js
@@ -4,9 +4,10 @@ import ListView from './views/List.view';
 import messages from './locales';
 import {namespace} from './model';
 import {ModuleContainer, ModuleModel} from 'mcf-module';
+import {Selector} from '@mcf/core'
 
 const {connect, bindActionCreators, defaultMergeProps} = ModuleContainer;
-const {reducerItemSelector, reducerListSelector} = ModuleModel;
+const { reducerItemSelector, reducerListSelector } = Selector;
 
 export const mapStateToProps = (state, props) => {
   return {
```P
  + 修改文件 src/module.js

```diff
diff --git a/src/model.js b/src/model.js
index 9efe1e4..166ed6f 100644
--- a/src/model.js
+++ b/src/model.js
@@ -1,6 +1,6 @@
-import {ModuleModel} from 'mcf-module'
+import {ORMModel} from '@mcf/core'
 
-const {attr,BaseModel} = ModuleModel
+const { attr, BaseModel } = ORMModel
 export const namespace = "tongfang"
 
 export default class tongfang extends BaseModel {
```
