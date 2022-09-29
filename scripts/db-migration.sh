#! /bin/sh

# Ejecutar siempre desde la carpeta Scripts

echo "beginning"

cat ../runtime/db/authors/*.json | jq -c -s "." 1> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/books/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/categories/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/collections/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/languages/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/locations/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/members/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/petitions/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/quotes/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/reviews/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/subcategories/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json

cat ../runtime/db-migration/PinakesDB-temp.json | jq -c -s "{authors:.[0], books:.[1], categories:.[2], collections:.[3], languages:.[4], locations:.[5], members:.[6], petitions:.[7], quotes:.[8], reviews:.[9], subcategories:.[10]}" | jq "." 1> ../runtime/db-migration/PinakesDB.json
rm ../runtime/db-migration/PinakesDB-temp.json

echo "ending"
