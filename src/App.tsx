import { defineComponent, ref } from "vue";

export const App = defineComponent({
  setup() {
    const count = ref(0);
    const onclick = () => {
      count.value += 1;
    };
    return () => (
      <h1>
        {count.value}
        <button onClick={onclick}>+1</button>
      </h1>
    );
  },
});
