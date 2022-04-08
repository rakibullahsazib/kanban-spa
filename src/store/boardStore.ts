import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import { BoardBrief, BoardDetail, BoardRequest, BoardUpdateRequest, StageRequest, StageUpdateRequest, TaskStatus } from './interface/board.interface'
import { TaskRequest, TaskUpdateRequest } from './interface/board.interface';
import { updateOrdersInArr } from '../helpers/updateOrdersInArr';
import { HasOrderAndId } from './interface/common.interface';
import { fake_boards, fake_currentBoard, fake_taskStatuses } from '../fakeData/board.fake';
export interface BoardStoreState {
  boards: BoardBrief[];
  currentBoard: BoardDetail | undefined;
  taskStatuses: TaskStatus[]
}

export const useBoardStore = defineStore('board', {
  state: (): BoardStoreState => {
    return {
      boards: [],
      currentBoard: undefined,
      taskStatuses: []
    }
  },
  getters: {
    // getSortedBoards: (state: BoardStoreState) => {
    //   [...state.boards].sort((a: BoardBrief, b: BoardBrief) => a.order - b.order)
    // }
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
    async getCurrentBoard() {
      this.currentBoard = fake_currentBoard
    },
    async getBoards() {
      this.boards = [...fake_boards]
      this.boards.sort((a, b) => b.order - a.order)  
    },
    addBoard(board: BoardRequest) {
      // console.log('add board')
      this.boards.unshift({
        id: uuid(),
        createdAt: new Date().toISOString(),
        ...board,
      })
      // if this is the first board then set current board to this
      if (this.boards.length === 1) {
        this.setCurrentBoard(this.boards[0].id)
      }
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
    bulkUpdateBoardOrder() {
      const updatesNeeded: HasOrderAndId[] = updateOrdersInArr(this.boards)
      console.log(updatesNeeded)
    },
    deleteBoard(boardId: string) {
      // if deleting current board first change the current board to another one or undefined
      if (boardId === this.currentBoard?.id) {
        if (boardId !== this.boards[0]?.id) {
          this.setCurrentBoard(this.boards[0]?.id)
        } else {
          this.setCurrentBoard(this.boards[1]?.id)
        }
      }
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
    bulkUpdateTaskOrder(stageId: string) {
      if (!this.currentBoard) return
      const stageIndex = this.currentBoard?.stages.findIndex((e) => e.id === stageId)
      if (stageIndex === undefined) return
      const updatesNeeded: HasOrderAndId[] = updateOrdersInArr(this.currentBoard.stages[stageIndex].tasks)
      console.log(updatesNeeded)
    },
    deleteTask(stageId: string, taskId: string) {
      const stageIndex = this.currentBoard?.stages.findIndex((e) => e.id === stageId)
      if (!this.currentBoard || stageIndex === undefined) return
      const taskIndex = this.currentBoard.stages[stageIndex].tasks.findIndex((e) => e.id === taskId)
      if (taskIndex === undefined) return
      this.currentBoard.stages[stageIndex].tasks.splice(taskIndex, 1)
    },
    getTaskStatuses() {
      this.taskStatuses = fake_taskStatuses
    }
  }
})