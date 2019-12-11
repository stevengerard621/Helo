create table helo_users (
    id serial primary key,
    username varchar(100),
    user_password VARCHAR(100),
    profile_pic text
    )

create table helo_posts (
    id serial primary key,
    title VARCHAR(100),
    img TEXT,
    cont TEXT,
    author_id INTEGER REFERENCES helo_users (id)
    )