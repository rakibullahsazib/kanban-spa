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
  checklist: TaskChecklistItem[];
}

export interface TaskChecklistItemRequest {
  name: string;
}
export interface TaskChecklistItem extends TaskChecklistItemRequest {
  id: string;
  completed: boolean;
}

export interface TaskStatus{
  id: string;
  name: string;
  icon: string;
}
