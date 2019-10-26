create table users (
	user_id text,
	user_name text,
	created_at timestamp default now(),
	updated_at timestamp,
	primary key (user_id)
);