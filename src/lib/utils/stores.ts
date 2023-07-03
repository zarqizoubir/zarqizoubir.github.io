import { writable, type Writable } from "svelte/store";




function createHireUsOptionStore() {
    const { set, update, subscribe }: Writable<string[]> = writable([])

    function addOption(op: string) {
        update(n => [...n, op])
    }
    return {
        subscribe,
        addOption,
    }
}


export const hireUsOptions = createHireUsOptionStore()