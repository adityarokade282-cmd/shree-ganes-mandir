/*
# Create tables for Shree Ganesh Mandir website

1. New Tables
- `puja_bookings`: Stores devotee puja booking requests submitted via the online booking form.
  - id (uuid, primary key)
  - devotee_name (text, not null)
  - mobile_number (text, not null)
  - email (text, not null)
  - puja_type (text, not null)
  - preferred_date (date, not null)
  - preferred_time (time, not null)
  - number_of_devotees (int, default 1)
  - message (text, nullable)
  - status (text, default 'pending')
  - created_at (timestamptz, default now())

- `donations`: Stores donation records from the donation section.
  - id (uuid, primary key)
  - donor_name (text, not null)
  - mobile_number (text, not null)
  - email (text, not null)
  - amount (numeric, not null)
  - message (text, nullable)
  - status (text, default 'pending')
  - created_at (timestamptz, default now())

- `prasad_orders`: Stores prasad order requests.
  - id (uuid, primary key)
  - customer_name (text, not null)
  - mobile_number (text, not null)
  - email (text, not null)
  - prasad_name (text, not null)
  - quantity (int, default 1)
  - address (text, nullable)
  - status (text, default 'pending')
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on all tables.
- This is a single-tenant (no-auth) app — allow anon + authenticated CRUD so the anon-key frontend can read and write.
*/

CREATE TABLE IF NOT EXISTS puja_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  devotee_name text NOT NULL,
  mobile_number text NOT NULL,
  email text NOT NULL,
  puja_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time time NOT NULL,
  number_of_devotees int NOT NULL DEFAULT 1,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE puja_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_puja_bookings" ON puja_bookings;
CREATE POLICY "anon_select_puja_bookings" ON puja_bookings FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_puja_bookings" ON puja_bookings;
CREATE POLICY "anon_insert_puja_bookings" ON puja_bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_puja_bookings" ON puja_bookings;
CREATE POLICY "anon_update_puja_bookings" ON puja_bookings FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_puja_bookings" ON puja_bookings;
CREATE POLICY "anon_delete_puja_bookings" ON puja_bookings FOR DELETE
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name text NOT NULL,
  mobile_number text NOT NULL,
  email text NOT NULL,
  amount numeric(10,2) NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_donations" ON donations;
CREATE POLICY "anon_select_donations" ON donations FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_donations" ON donations;
CREATE POLICY "anon_insert_donations" ON donations FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_donations" ON donations;
CREATE POLICY "anon_update_donations" ON donations FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_donations" ON donations;
CREATE POLICY "anon_delete_donations" ON donations FOR DELETE
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS prasad_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  mobile_number text NOT NULL,
  email text NOT NULL,
  prasad_name text NOT NULL,
  quantity int NOT NULL DEFAULT 1,
  address text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE prasad_orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_prasad_orders" ON prasad_orders;
CREATE POLICY "anon_select_prasad_orders" ON prasad_orders FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_prasad_orders" ON prasad_orders;
CREATE POLICY "anon_insert_prasad_orders" ON prasad_orders FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_prasad_orders" ON prasad_orders;
CREATE POLICY "anon_update_prasad_orders" ON prasad_orders FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_prasad_orders" ON prasad_orders;
CREATE POLICY "anon_delete_prasad_orders" ON prasad_orders FOR DELETE
TO anon, authenticated USING (true);