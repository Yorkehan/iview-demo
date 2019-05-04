// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
import iviewArea from 'iview-area'
import VueFriendlyIframe from 'vue-friendly-iframe'

import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// 如果需要配合 ECharts 扩展使用，只需要直接引入扩展包即可
// 以 ECharts-GL 为例：
// 需要安装依赖：npm install --save echarts-gl，并添加如下引用
import 'echarts-gl'
import { initRouter } from '@/libs/router-util' // ①新增  引入动态菜单渲染
// 注册组件后即可使用
Vue.component('v-chart', ECharts)

// 实际打包时应该不引入mock
/* eslint-disable */
Vue.component('vue-friendly-iframe',VueFriendlyIframe);
 if (process.env.NODE_ENV !== 'production') require('@/mock');
Vue.use(iviewArea);
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
});
Vue.use(TreeTable);
Vue.use(VOrgTree);
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue);
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App),
  mounted() {
    initRouter() // 新增 调用方法,动态生成路由,
  }
})
