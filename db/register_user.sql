insert into helo_users (
    username,
    user_password
) values (
    ${email},
    ${hash}
)
returning id, username;