import App from "./app.vue";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// vue plugin to render markdown
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
VMdPreview.use(vuepressTheme);
VMdPreview.use(createKatexPlugin());
VMdPreview.use(createCopyCodePlugin());
VMdPreview.use(createTodoListPlugin());
VMdPreview.use(createMermaidPlugin());
Vue.component("markdown-content", VMdPreview);

// vue router will be used to prevent page reload
const router = new VueRouter({
  mode: "history",
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
