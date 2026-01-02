
export enum AppRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  SECTION_HEAD = 'SECTION_HEAD',
  SECTIONAL_HEAD = 'SECTIONAL_HEAD',
  PRINCIPAL = 'PRINCIPAL',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  role: AppRole;
  email: string;
  avatar?: string;
}

export interface ApprovalItem {
  id: string;
  type: 'SLC_REQUEST' | 'STAFF_RESIGNATION' | 'LEAVE_REQUEST' | 'RESOURCE_REQUISITION';
  requester: string;
  detail: string;
  date: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface Message {
  id: string;
  sender: 'USER' | 'SYSTEM';
  text: string;
  isError?: boolean;
}
