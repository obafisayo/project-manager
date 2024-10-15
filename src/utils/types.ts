import { Moment } from "moment";

export interface Person {
    name: string;
}

export type ConfigType = TaskT | ProjectT;

export interface TaskT {
    id: string;
    project_id: string;
    title: string;
    description: string;
    dueDate: string | Date;
    issuesCount: number;
    avatars: string[];
    creator: string;
    priority: 'low' | 'medium' | 'high';
    status: 'Pending' | 'Completed';
}

export interface ProjectT {
    id: string;
    title: string;
    description: string;
    startDate: string | Date;
    dueDate: Moment;
    roles?: string;
    type?: string;
    issuesCount: number;
    avatars?: string[];
}
