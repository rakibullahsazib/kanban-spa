import { defineStore } from 'pinia'
export const useWorkspaceStore = defineStore('workspace', {
  state: () => {
    return {
      workspaces: [
        {
          id: 1,
          name: 'Workspace 1',
          icon: 'workspace.svg'
        },
        {
          id: 2,
          name: 'Workspace 2',
          icon: 'workspace.svg'
        }
      ],
      currentWorkspace: {
        id: 1,
        name: 'Workspace 1',
        icon: 'workspace.svg'
      },
    }
  },
  getters: {},
  actions: {
    setCurrentWorkspace(workspaceId: number) {
      // To do: get Workspace details
      for (const workspace of this.workspaces) {
        if (workspace.id === workspaceId) {
          this.currentWorkspace = workspace
          return
        }
      }
    }
  }
})