ALTER TABLE public.job_applications
  ADD COLUMN IF NOT EXISTS nysc_status text;