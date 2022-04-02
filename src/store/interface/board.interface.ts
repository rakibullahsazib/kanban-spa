export interface BoardRequest {
  name: string;
  description: string;
  order: number;
}
export interface BoardUpdateRequest {
  name?: string;
  description?: string;
}
export interface BoardBrief extends BoardRequest {
  id: string;
  createdAt: string;
}
export interface BoardDetail extends BoardBrief {
  stages: StageDetail[];
}

// Stage
export interface StageRequest {
  name: string;
  order: number;
}
export interface StageUpdateRequest {
  name: string;
}
export interface StageDetail extends StageRequest {
  id: string;
  tasks: TaskDetail[];
}

// Task
export interface TaskRequest{
  name: string;
  description: string;
  color: string;
  order: number;
  stageId: string;
  assignee: string;
  statusId: string;
  dueDate: string; // ISO
}
export interface TaskUpdateRequest{
  name?: string;
  description?: string;
  color?: string;
  stageId?: string;
  assignee?: string;
  statusId?: string;
  dueDate?: string; // ISO
}
export interface TaskDetail extends TaskRequest{
  id: string;
  // checklist: TaskChecklistItem[];
}

// export interface TaskChecklistItemRequest {
//   name: string;
//   taskId: string;
// }
// export interface TaskChecklistItem extends TaskChecklistItemRequest {
//   id: string;
//   completed: boolean;
// }

export interface TaskStatus{
  id: string;
  name: string;
  icon: string;
}
