#! /bin/sh

# Ejecutar siempre desde la carpeta Scripts

echo "beginning"

cat ../runtime/db/authors/*.json | jq -c "." > ../runtime/db-export/authors.jsonl
cat ../runtime/db/books/*.json | jq -c "." > ../runtime/db-export/books.jsonl
cat ../runtime/db/categories/*.json | jq -c "." > ../runtime/db-export/categories.jsonl
cat ../runtime/db/collections/*.json | jq -c "." > ../runtime/db-export/collections.jsonl
cat ../runtime/db/languages/*.json | jq -c "." > ../runtime/db-export/languages.jsonl
cat ../runtime/db/locations/*.json | jq -c "." > ../runtime/db-export/locations.jsonl
cat ../runtime/db/members/*.json | jq -c "." > ../runtime/db-export/members.jsonl
cat ../runtime/db/petitions/*.json | jq -c "." > ../runtime/db-export/petitions.jsonl
cat ../runtime/db/quotes/*.json | jq -c "." > ../runtime/db-export/quotes.jsonl
cat ../runtime/db/reviews/*.json | jq -c "." > ../runtime/db-export/reviews.jsonl
cat ../runtime/db/subcategories/*.json | jq -c "." > ../runtime/db-export/subcategories.jsonl

echo "ending"
