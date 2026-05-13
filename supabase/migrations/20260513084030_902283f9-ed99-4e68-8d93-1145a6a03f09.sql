-- Add new columns to job_applications
ALTER TABLE public.job_applications
  ADD COLUMN IF NOT EXISTS course_of_study text,
  ADD COLUMN IF NOT EXISTS date_of_birth date,
  ADD COLUMN IF NOT EXISTS cgpa text,
  ADD COLUMN IF NOT EXISTS gender text,
  ADD COLUMN IF NOT EXISTS current_location text,
  ADD COLUMN IF NOT EXISTS willing_to_relocate boolean,
  ADD COLUMN IF NOT EXISTS age integer,
  ADD COLUMN IF NOT EXISTS date_of_graduation date,
  ADD COLUMN IF NOT EXISTS available_start_date date,
  ADD COLUMN IF NOT EXISTS university text,
  ADD COLUMN IF NOT EXISTS cv_url text;

-- Make legacy fields optional
ALTER TABLE public.job_applications
  ALTER COLUMN track DROP NOT NULL,
  ALTER COLUMN cover_note DROP NOT NULL;

-- Create public bucket for CVs
INSERT INTO storage.buckets (id, name, public)
VALUES ('cvs', 'cvs', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for CVs
CREATE POLICY "Anyone can upload a CV"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'cvs');

CREATE POLICY "CVs are publicly readable"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'cvs');

CREATE POLICY "Admins can delete CVs"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'cvs' AND public.has_role(auth.uid(), 'admin'));
