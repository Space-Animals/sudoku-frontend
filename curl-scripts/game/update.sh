curl "http://localhost:8000/games/${ID}/" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token ${TOKEN}" \
--data '{
  "cell": {
    "index": "'"${INDEX}"'",
    "value": "'"${VALUE}"'"
  },
  "over": "'"${OVER}"'"
}'

echo
