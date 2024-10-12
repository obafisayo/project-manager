export interface Person {
    name: string;
}

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
    dueDate: string | Date;
    issuesCount: number;
    avatars: string[];
}
