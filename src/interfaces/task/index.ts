import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  assigned_to?: string;
  created_by?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user_task_assigned_toTouser?: UserInterface;
  user_task_created_byTouser?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  assigned_to?: string;
  created_by?: string;
  organization_id?: string;
}
