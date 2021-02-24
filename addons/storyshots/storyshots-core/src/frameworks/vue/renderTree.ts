import Vue from 'vue';

// this is defined in @storybook/vue but not exported,
// and we need it to inject args into the story component's props
const VALUES = 'STORYBOOK_VALUES';

function getRenderedTree(story: any) {
  const component = story.render();

  // @ts-ignore
  const vm = new Vue({
    // @ts-ignore
    render(h) {
      return h(component);
    },
  });

  // @ts-ignore
  vm[VALUES] = story.args;

  return vm.$mount().$el;
}

export default getRenderedTree;
