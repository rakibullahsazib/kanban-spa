import { BoardBrief, BoardDetail } from "../store/interface/board.interface";

export const fake_boards: BoardBrief[] = [
  {
    id: '1',
    createdAt: new Date().toISOString(),
    name: 'Board 1',
    description: 'Board 1 Description',
    order: 4
  },
  {
    id: '2',
    createdAt: new Date().toISOString(),
    name: 'Board 2',
    description: 'Board 2 Description',
    order: 2
  },
  {
    id: '3',
    createdAt: new Date().toISOString(),
    name: 'Board 3',
    description: 'Board 3 Description',
    order: 3
  },
  {
    id: '4',
    createdAt: new Date().toISOString(),
    name: 'Board 4',
    description: 'Board 4 Description',
    order: 1
  },
  {
    id: '5',
    createdAt: new Date().toISOString(),
    name: 'Board 5',
    description: 'Board 5 Description',
    order: 5
  },
]

export const fake_currentBoard: BoardDetail = {
  id: '2',
  createdAt: new Date().toISOString(),
  name: 'Board 2',
  description: 'Board 2 Description',
  order: 2,
  stages: [
    {
      id: '1',
      name: 'Backlog',
      order: 1,              
      tasks: []
    }
  ]
}