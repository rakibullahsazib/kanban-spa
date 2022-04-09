import { defineStore } from 'pinia'
import { useBoardStore } from './boardStore'
import { useUserStore } from './userStore'
export const useRootStore = defineStore('root', {
  state: () => {
    return {
      currentDropdown: '',
      previousRouteName: '',
    }
  },
  actions: {
    toggleCurrentDropdown(dropdown: string) {
      console.log('toggle', this.currentDropdown)
      if (dropdown === this.currentDropdown) {
        this.currentDropdown = ''
      } else {
        this.currentDropdown = dropdown
      }
    },
    resetStores() {
      console.log('reset')
      useUserStore().$reset
      useBoardStore().$reset
      this.$reset
    }
  }
})