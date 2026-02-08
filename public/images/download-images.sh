#!/bin/bash
images=(
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378201361.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378123936.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378146575.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378349238.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378523322.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378193508.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378321980.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378559359.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378566565.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378645267.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378657725.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378711353.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378755035.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378788836.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378824047.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/1715337885551.jpg"
"https://cdn.krbo.eu/homesinflorence/images/2/803/17153378861224.jpg"
)

counter=1
for url in "${images[@]}"; do
  filename=$(printf "guido-monaco-%02d.jpg" $counter)
  echo "Downloading $filename..."
  curl -s -o "$filename" "$url"
  counter=$((counter + 1))
done

echo "✅ Downloaded ${#images[@]} images"
