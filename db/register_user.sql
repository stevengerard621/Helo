insert into helo_users (
    username,
    user_password
) values (
    ${username},
    ${hash}
)
returning id, username;