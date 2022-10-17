import { Student } from 'models';
import { ListParams, ListResponse } from 'models/common';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students';
    return axiosClient.get(url, { params });
  }, 
  getbyId(id: string): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  }, 
  add(data: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.post(url, data);
  }, 
  update(data: Partial<Student>): Promise<Student> {
    const url = `/students/${data.id}`;
    return axiosClient.patch(url, data);
  }, 
  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  }, 
}

export default studentApi;
