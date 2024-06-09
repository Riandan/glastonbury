#!/bin/bash

# Get the script's own filename
script_name=$(basename "$0")

# Initialize a counter
counter=1

# Loop through all files in the current directory
for file in *; do
  # Check if it's a regular file (not a directory or other type) and not the script itself
  if [ -f "$file" ] && [ "$file" != "$script_name" ]; then
    # Extract the file extension
    extension="${file##*.}"
    
    # Rename the file with an incremental number and original extension
    new_filename="$counter.$extension"
    mv "$file" "$new_filename"
    
    # Increment the counter
    counter=$((counter + 1))
  fi
done

echo "Files have been renamed."

# Check for dependencies
if ! command -v identify &> /dev/null; then
    echo "ImageMagick is not installed. Please install it and try again."
    exit 1
fi

if ! command -v jq &> /dev/null; then
    echo "jq is not installed. Please install it and try again."
    exit 1
fi

# Initialize an empty JSON array
json_array="[]"

# Loop through all image files in the current directory
for file in *.{jpg,jpeg,png,gif}; do
    # Check if the file exists to avoid errors if no matching files are found
    if [ -f "$file" ]; then
        # Get image dimensions
        dimensions=$(identify -format "%w %h" "$file")
        width=$(echo $dimensions | cut -d' ' -f1)
        height=$(echo $dimensions | cut -d' ' -f2)

        # Create a JSON object for the image
        json_object=$(jq -n \
            --arg src "/images/gallery/$file" \
            --arg width "$width" \
            --arg height "$height" \
            '{src: $src, width: ($width | tonumber), height: ($height | tonumber)}')

        # Add the JSON object to the JSON array
        json_array=$(echo "$json_array" | jq --argjson obj "$json_object" '. += [$obj]')
    fi
done

# Write the JSON array to a file
echo "$json_array" > images.json

echo "Image metadata has been written to images.json."

