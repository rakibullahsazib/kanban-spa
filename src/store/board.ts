import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { BoardBrief, BoardDetail, BoardRequest, BoardUpdateRequest, StageRequest, StageUpdateRequest } from './interface/board.interface'
import { TaskRequest, TaskUpdateRequest } from './interface/task.interface';
import { updateOrdersInArr } from '../helpers/updateOrdersInArr';
import { HasOrderAndId } from './interface/common.interface';
import { getMaxOrder } from '../helpers/arrayMethods';
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
                name: 'Backlog',
                order: 1,              
                tasks: []
              }
            ]
          }
          return
        }
      }
    },
    addBoard(board: BoardRequest) {
      this.boards.push({
        id: uuid(),
        createdAt: new Date(),
        ...board,
      })
    },
    updateBoard(boardId: string, payload: BoardUpdateRequest) {
      const boardIndex = this.boards.findIndex((b) => b.id === boardId)
      this.boards[boardIndex] = {
        ...this.boards[boardIndex],
        ...payload
      }
      // if current board is updated then we need to update current board properties too
      if (this.currentBoard?.id === boardId) {
        let k: keyof BoardUpdateRequest
        for (k in payload) {
          this.currentBoard[k] = payload[k] || ''
        }
      }
    },
    deleteBoard(boardId: string) {
      const boardIndex = this.boards.findIndex((b) => b.id === boardId)
      this.boards.splice(boardIndex, 1)
    },
    addStage(stage: StageRequest) {
      if (!this.currentBoard) return
      this.currentBoard.stages.push({
        ...stage,
        id: uuid(),
        tasks: []
      })
    },
    updateStage(stageId: string, payload: StageUpdateRequest) {
      const stageIndex = this.currentBoard?.stages.findIndex((e) => e.id === stageId)
      if (!this.currentBoard || stageIndex === undefined) return
      this.currentBoard.stages[stageIndex] = {
        ...this.currentBoard?.stages[stageIndex],
        ...payload
      }
    },
    bulkUpdateStageOrder() {
      if (!this.currentBoard) return
      const updatesNeeded: HasOrderAndId[] = updateOrdersInArr(this.currentBoard.stages)
      console.log(updatesNeeded)
    },
    deleteStage(stageId: string) {
      const stageIndex = this.currentBoard?.stages.findIndex((e) => e.id === stageId)
      if (!this.currentBoard || stageIndex === undefined || this.currentBoard.stages[stageIndex].name === 'Backlog') return
      this.currentBoard.stages.splice(stageIndex, 1)
    },
    addTask(task: TaskRequest) {
      const stageIndex = this.currentBoard?.stages.findIndex((e) => e.id === task.stageId)
      if (!this.currentBoard || stageIndex === undefined) return
      this.currentBoard.stages[stageIndex].tasks.push({
        id: uuid(),
        checklist: [],
        ...task,
      })
    },
    updateTask(stageId: string, taskId: string, payload: TaskUpdateRequest) {
      const stageIndex = this.currentBoard?.stages.findIndex((e) => e.id === stageId)
      if (!this.currentBoard || stageIndex === undefined) return
      const taskIndex = this.currentBoard.stages[stageIndex].tasks.findIndex((e) => e.id === taskId)
      if (taskIndex === undefined) return
      this.currentBoard.stages[stageIndex].tasks[taskIndex] = {
        ...this.currentBoard.stages[stageIndex].tasks[taskIndex],
        ...payload
      }
    },
    deleteTask(stageId: string, taskId: string) {
      const stageIndex = this.currentBoard?.stages.findIndex((e) => e.id === stageId)
      if (!this.currentBoard || stageIndex === undefined) return
      const taskIndex = this.currentBoard.stages[stageIndex].tasks.findIndex((e) => e.id === taskId)
      if (taskIndex === undefined) return
      this.currentBoard.stages[stageIndex].tasks.splice(taskIndex, 1)
    },
  }
})