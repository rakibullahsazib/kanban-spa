export interface TaskRequest{
  name: string;
  color: string;
  description: string;
  stageId: string;
  checklist: TaskChecklistItem[];
  assigneeId: string | undefined;
  statusId: string;
  dueDate: Date;
}
export interface Task extends TaskRequest{
  id: string;
  createdAt: Date;
}

export interface TaskChecklistItemRequest {
  name: string;
}
export interface TaskChecklistItem extends TaskChecklistItemRequest {
  id: string;
}

export interface TaskStatus{
  id: string;
  name: string;
  icon: string;
}
