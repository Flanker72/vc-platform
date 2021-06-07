import { reactive } from "@nuxtjs/composition-api";

const blades = reactive({
   all: [],
   current: {}
});

export function registerBlade(options) {
   blades.all.push(options);
}

export function openBlade(options) {
   blades.current = options;
}
