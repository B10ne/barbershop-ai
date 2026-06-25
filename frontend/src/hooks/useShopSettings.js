// hooks/useShopSettings.js
// ─────────────────────────────────────────────────────────
// Fetch & simpan data tabel `settings` (shop_name, logo_url,
// favicon_url, address, whatsapp, instagram, email, opening_hours)
// ─────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from "react";

const API = "http://127.0.0.1:8000";   // ganti sesuai base URL backend

const DEFAULT_SETTINGS = {
   shop_name:     "",
   logo_url:      "",
   favicon_url:   "",
   address:       "",
   whatsapp:      "",
   instagram:     "",
   email:         "",
   opening_hours: "",
};

export default function useShopSettings() {

   const [settings, setSettings]   = useState(DEFAULT_SETTINGS);
   const [loading,  setLoading]    = useState(true);
   const [saving,   setSaving]     = useState(false);
   const [error,    setError]      = useState(null);
   const [success,  setSuccess]    = useState(false);

   // ── Fetch ───────────────────────────────────────────────
   const fetchSettings = useCallback(async () => {
      setLoading(true);
      setError(null);
      try {
         const res  = await fetch(`${API}/settings`);
         if (!res.ok) throw new Error("Gagal memuat pengaturan");
         const data = await res.json();
         // backend bisa mengembalikan objek tunggal atau array[0]
         setSettings(Array.isArray(data) ? data[0] : data);
      } catch (err) {
         setError(err.message);
      } finally {
         setLoading(false);
      }
   }, []);

   useEffect(() => { fetchSettings(); }, [fetchSettings]);

   // ── Apply favicon & title ke <head> ────────────────────
   useEffect(() => {
      if (settings.shop_name) {
         document.title = settings.shop_name;
      }
      if (settings.favicon_url) {
         let link = document.querySelector("link[rel~='icon']");
         if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
         }
         link.href = settings.favicon_url;
      }
   }, [settings.shop_name, settings.favicon_url]);

   // ── Save ────────────────────────────────────────────────
   const saveSettings = useCallback(async (formData) => {
      setSaving(true);
      setError(null);
      setSuccess(false);
      try {
         const res = await fetch(`${API}/settings`, {
            method:  "PUT",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(formData),
         });
         if (!res.ok) throw new Error("Gagal menyimpan pengaturan");
         const data = await res.json();
         setSettings(Array.isArray(data) ? data[0] : data);
         setSuccess(true);
         setTimeout(() => setSuccess(false), 3000);
      } catch (err) {
         setError(err.message);
      } finally {
         setSaving(false);
      }
   }, []);

   return { settings, loading, saving, error, success, saveSettings, refetch: fetchSettings };
}