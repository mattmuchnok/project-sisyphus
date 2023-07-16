create policy "Enable read access for all users"
on "public"."asdf"
as permissive
for select
to public
using (true);




