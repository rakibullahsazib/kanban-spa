import { defineStore } from 'pinia'
export const useRootStore = defineStore('root', {
  state: () => {
    return {
      currentDropdown: ''
    }
  },
  actions: {
    toggleCurrentDropdown(dropdown: string) {
      if (dropdown === this.currentDropdown) {
        this.currentDropdown = ''
      } else {
        this.currentDropdown = dropdown
      }
    }
  }
})