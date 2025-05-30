import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/books",  // 백엔드 API 주소
  timeout: 5000,
});

// 도서 목록 가져오기
export const fetchBooks = async (title = "") => {
  try {
    const response = await api.get(`?title=${title}`);
    return response.data;
  } catch (error) {
    console.error("fetchBooks error:", error);
    throw error;
  }
};

// 도서 상세 조회
export const fetchBookById = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

// 도서 등록
export const createBook = async (bookData) => {
  const response = await api.post("", bookData);
  return response.data;
};

// 도서 수정
export const updateBook = async (id, bookData) => {
  const response = await api.put(`/${id}`, bookData);
  return response.data;
};

// 도서 삭제
export const deleteBook = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
