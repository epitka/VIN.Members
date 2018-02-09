import { IMember } from './member.model';

export interface IMemberList {
    data: IMember[];
    pageIndex: number;
    pageSize: number;
    count: number;
}