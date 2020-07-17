curl "http://localhost:8000/games/" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token ${TOKEN}" \

echo
