import axios from 'axios';

export const createMemo = ({title, body}) => axios.post('/memo', {title,body});
export const getInitialMemo = () => axios.get('/memo/?_sort=id&_order=DESC&_limit=20');
export const getRecentMemo = (cursor) => axios.get(`/memo/?id_gte=${cursor+1}&_sort=id&_order=DESC&`);
export const updateMemo = ({id, memo: { title, body }}) => axios.put(`/memo/${id}`, {title, body}); // 메모를 업데이트한다.
export const deleteMemo = (id) => axios.delete(`/memo/${id}`); // 메모를 삭제한다.
export const getPreviousMemo = (endCursor) => axios.get(`/memo/?_sort=id&_order=DESC&_limit=20&id_lte=${endCursor-1}`); // endCursor 기준 이전 작성된 메모를 불러온다