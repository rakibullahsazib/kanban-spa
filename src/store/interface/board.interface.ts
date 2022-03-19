import { Task } from "./task.interface";

export interface BoardRequest {
  name: string;
  description: string;
}
export interface BoardBrief extends BoardRequest {
  id: string;
  createdAt: Date;
}
export interface BoardDetail extends BoardBrief {
  stages: StageDetail[];
}

export interface StageRequest {
  name: string;
}
export interface StageDetail extends StageRequest {
  id: string;
  tasks: Task[];
}
