"use server";

import { cookies } from "next/headers";

// حفظ التوكن
export async function setToken(token) {
  cookies().set("token", token, {
    httpOnly: true, // ما يتقراش من الجافاسكربت
    secure: true, // يستخدم في https
    sameSite: "lax", // حماية من CSRF
    path: "/", // متاح في كل المشروع
    maxAge: 60 * 60 * 24 * 7, // أسبوع كامل
  });
}

// جلب التوكن
export async function getToken() {
  return cookies().get("token")?.value || null;
}

// مسح التوكن
export async function removeToken() {
  cookies().delete("token");
}
