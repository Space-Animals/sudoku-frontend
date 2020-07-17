curl "http://localhost:8000/games/" \
--include \
--header "Content-Type: application/json" \
--header "Authorization: Token ${TOKEN}" \
--request POST \
--data '{}'


echo
