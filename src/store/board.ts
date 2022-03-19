import { defineStore } from 'pinia'
import { BoardBrief, BoardDetail, BoardRequest } from './interface/board.interface'
import { v4 as uuid } from 'uuid'
export interface BoardStoreState {
  boards: BoardBrief[];
  currentBoard: BoardDetail | undefined;
}

export const useBoardStore = defineStore('board', {
  state: (): BoardStoreState => {
    return {
      boards: [],
      currentBoard: undefined,
    }
  },
  getters: {
    getSortedBoards: (state: BoardStoreState) => {
      [...state.boards].sort((a: BoardBrief, b: BoardBrief) => a.createdAt.getTime() - b.createdAt.getTime())
    }
  },
  actions: {
    setCurrentBoard(boardId: string) {
      // To do: get Board details
      for (const board of this.boards) {
        if (board.id === boardId) {
          this.currentBoard = {
            ...board,
            stages: [
              {
                id: uuid(),
                name: 'Stage 1',               
                tasks: [{
                  id: uuid(),
                  createdAt: new Date(),
                  color: '#aaa',
                  name: 'Task 1',
                  description: 'My Task 1 Descripiton',
                  stageId: uuid(),
                  checklist: [
                    {
                      id: uuid(),
                      name: 'Job 1'
                    },
                    {
                      id: uuid(),
                      name: 'Job 2'
                    }
                  ],
                  assigneeId: uuid(),
                  statusId: uuid(),
                  dueDate: new Date()
                }]
              }
            ]
          }
          return
        }
      }
    },
    // toggleBoardFavorite(boardId: number) {
    //   // To do: get Board details
    //   for (const board of this.boards) {
    //     if (board.id === boardId) {
    //       board.isFavorite = !board.isFavorite
    //       return
    //     }
    //   }
    // },
    addBoard(board: BoardRequest) {
      this.boards.push({
        id: uuid(),
        createdAt: new Date(),
        ...board,
      })
    },
    // deleteBoard(boardId: number) {
    //   for (var i = 0; i < this.boards.length; i++) {
    //     if (this.boards[i].id === boardId) {
    //       this.boards.splice(i, 1)
    //       return
    //     }
    //   }
    // }
  }
})