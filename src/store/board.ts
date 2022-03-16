import { defineStore } from 'pinia'
export const useBoardStore = defineStore('board', {
  state: () => {
    return {
      boards: [
        {
          id: 1,
          name: 'Board 1',
          icon: 'board.svg',
          isFavorite: true
        },
        {
          id: 2,
          name: 'Board 2',
          icon: 'board.svg',
          isFavorite: false
        }
      ],
      currentBoard: {
        id: 1,
        name: 'Board 1',
        icon: 'board.svg'
      },
    }
  },
  getters: {},
  actions: {
    setCurrentBoard(boardId: number) {
      // To do: get Board details
      for (const board of this.boards) {
        if (board.id === boardId) {
          this.currentBoard = board
          return
        }
      }
    },
    toggleBoardFavorite(boardId: number) {
      // To do: get Board details
      for (const board of this.boards) {
        if (board.id === boardId) {
          board.isFavorite = !board.isFavorite
          return
        }
      }
    },
    deleteBoard(boardId: number) {
      for (var i = 0; i < this.boards.length; i++) {
        if (this.boards[i].id === boardId) {
          this.boards.splice(i, 1)
          return
        }
      }
    }
  }
})