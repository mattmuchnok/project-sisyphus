create table "public"."asdf" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone default now()
);


alter table "public"."asdf" enable row level security;

CREATE UNIQUE INDEX asdf_pkey ON public.asdf USING btree (id);

alter table "public"."asdf" add constraint "asdf_pkey" PRIMARY KEY using index "asdf_pkey";



