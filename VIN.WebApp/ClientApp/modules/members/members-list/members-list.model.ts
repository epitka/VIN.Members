import { IMember } from '../member.model';

export interface IMemberList {
    data: IMember[];
    pageNumber: number;
    pageSize: number;
    rowCount: number;
}