import { defineStore } from 'pinia'
export const useMainStore = defineStore('main', {
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