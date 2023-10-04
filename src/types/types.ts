export interface TaskType {
  id: number;
  title: string;
}
export interface AddTaskProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  taskCount: number;
  setTaskCount: React.Dispatch<React.SetStateAction<number>>;
  taskNumber: number;
  setTaskNumber: React.Dispatch<React.SetStateAction<number>>;
}
export interface TaskListProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  taskCount: number;
  setTaskCount: React.Dispatch<React.SetStateAction<number>>;
}
export interface TaskProps {
  data: TaskType;
  onDelete: (id: number) => void;
}
