import { shallowMount, createLocalVue } from "@vue/test-utils";
import { Store } from "vuex-mock-store";
import VueCompositionApi from "@vue/composition-api";
import TestComponent from "@/components/TestComponent.vue";

const localVue = createLocalVue();
localVue.use(VueCompositionApi);

const store = new Store({
    state: { count: 0 },
    getters: { count: 10 }
});

// add other mocks here so they are accessible in every component
const mocks = {
    $store: store
};

describe("testing", () => {
    shallowMount(TestComponent, {
        localVue,
        mocks
    });
    test("just waiting for mount success", () => {
        expect(1).toBe(1);
    });
});
