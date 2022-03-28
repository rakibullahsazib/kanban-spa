import { BoardBrief, BoardDetail, TaskStatus } from "../store/interface/board.interface";

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
      tasks: [
        {
          id: '1',
          name: 'Backlog Task 1',
          description: 'Backlog Task 1 description',
          color: '#99F997',
          order: 1,
          stageId: '1',
          assignee: 'Rakib Sazib',
          statusId: '3',
          dueDate: new Date().toISOString(),
          checklist: [
            {
              id: '1',
              name: 'Checklist 1',
              completed: true
            },
            {
              id: '2',
              name: 'Checklist 2',
              completed: true
            }
          ]
        },
        {
          id: '2',
          name: 'Backlog Task 2',
          description: 'Backlog Task 2 description',
          color: '#99F997',
          order: 2,
          stageId: '1',
          assignee: 'Rakib',
          statusId: '1',
          dueDate: new Date().toISOString(),
          checklist: [
            {
              id: '3',
              name: 'Checklist 3',
              completed: true
            },
            {
              id: '4',
              name: 'Checklist 4',
              completed: false
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Stage 2',
      order: 2,              
      tasks: []
    },
    {
      id: '3',
      name: 'Stage 3',
      order: 3,              
      tasks: []
    },
  ]
}

export const fake_taskStatuses: TaskStatus[] = [
  {
    id: '1',
    name: 'Ongoing',
    icon: 'ongoing.svg'
  },
  {
    id: '2',
    name: 'Stuck',
    icon: 'stuck.svg'
  },
  {
    id: '3',
    name: 'Completed',
    icon: 'completed.svg'
  }
] 