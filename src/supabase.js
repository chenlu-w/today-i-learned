import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hhimfkuzmranzghdvpyt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoaW1ma3V6bXJhbnpnaGR2cHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2Mzk2MzksImV4cCI6MjAxMjIxNTYzOX0.GxM9hZXuBhwpQQIKS3SoHTvAVGbYreXe2sJo5DxA8QI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
