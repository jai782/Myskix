import axios from "axios";

const API_URL = "http://localhost:3000/api/reports";

export const getReports = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getReportByDate = async (startDate, endDate) => {
  const response = await axios.get(API_URL, {
    params: {
      startDate,
      endDate,
    },
  });

  return response.data;
};

export const exportPdf = async () => {
  const response = await axios.get(`${API_URL}/pdf`);

  return response.data;
};

export const exportExcel = async () => {
  const response = await axios.get(`${API_URL}/excel`);

  return response.data;
};
