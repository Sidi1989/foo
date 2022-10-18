#! /bin/sh

# Ejecutar siempre desde la carpeta Scripts

echo "beginning"

cat ../runtime/db/authors/*.json | jq -c -s "." 1> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/books/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/collections/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/locations/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/members/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/petitions/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/quotes/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json
cat ../runtime/db/reviews/*.json | jq -c -s "." 1>> ../runtime/db-migration/PinakesDB-temp.json

cat ../runtime/db-migration/PinakesDB-temp.json | jq -c -s "{authors:.[0], books:.[1], collections:.[2], locations:.[3], members:.[4], petitions:.[5], quotes:.[6], reviews:.[7]}" | jq "." 1> ../runtime/db-migration/PinakesDB.json
rm ../runtime/db-migration/PinakesDB-temp.json

echo "ending"
