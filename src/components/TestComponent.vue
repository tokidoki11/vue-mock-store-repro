<template>
  <div>
    <div>{{item}}</div>
    <button @click="add">CLICK TO ADD</button>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  onMounted,
  onBeforeUnmount
} from "@vue/composition-api";
export default defineComponent({
  setup(_, context) {
    let focusWatcher = null;
    const data = reactive({
      item: computed(() => context.root.$store.getters["count"])
    });

    function add() {
      context.root.$store.dispatch("increment");
    }

    onMounted(() => {
      focusWatcher = context.root.$store.watch(
        (_, getters) => getters["count"],
        newVal => {
          alert(newVal)
        }
      );
    });

    onBeforeUnmount(()=>{
      if(focusWatcher !== null) focusWatcher()
    })

    return { ...toRefs(data), add };
  }
});
</script>
