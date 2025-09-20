"use server";

import { getToken } from "@/services";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// تجهيز الهيدر
async function getHeaders(isFormData = false) {
  const headers = {};

  // content type
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  // token من الكوكي
  const token = await getToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

// جلب البيانات (GET)
export async function getData({ url }) {
  try {
    const headers = await getHeaders();
    const response = await fetch(`${API_URL}${url}`, { headers });
    const data = await response.json();
    return { code: response.status, success: true, data };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// إرسال البيانات (POST)
export async function postData({ url, data, isFormData }) {
  try {
    const headers = await getHeaders(isFormData);
    const body = isFormData
      ? getFormData(data || {})
      : JSON.stringify(data || {});

    const response = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers,
      body,
    });

    const resData = await response.json();
    return { code: response.status, success: true, data: resData };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// helper لتحويل object لـ FormData
function getFormData(data) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
}
