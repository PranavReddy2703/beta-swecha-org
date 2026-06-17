#!/bin/bash

# Exit code tracker
STATUS=0

echo "Starting Spec Kit Validation..."
echo "=============================="

# Check if specs directory exists
if [ ! -d "specs" ]; then
    echo "❌ Error: 'specs/' directory not found."
    exit 1
fi

# Locate all feature spec subfolders
FEATURE_FOLDERS=$(find specs -maxdepth 1 -mindepth 1 -type d)

if [ -z "$FEATURE_FOLDERS" ]; then
    echo "⚠️ Warning: No features found in 'specs/'."
    exit 0
fi

# Required files in each feature directory
REQUIRED_FILES=("spec.md" "plan.md" "tasks.md" "data-model.md" "research.md")

for folder in $FEATURE_FOLDERS; do
    FEATURE_NAME=$(basename "$folder")
    echo "Checking feature: $FEATURE_NAME..."
    
    # Check for all required files
    for req_file in "${REQUIRED_FILES[@]}"; do
        file_path="$folder/$req_file"
        if [ ! -f "$file_path" ]; then
            echo "  ❌ Missing required file: $req_file"
            STATUS=1
        else
            # Check for un-filled placeholder markers
            if grep -E "\[Feature Name\]|\[Item\]|\[User Role Name\]" "$file_path" > /dev/null; then
                echo "  ❌ File contains unresolved placeholder markers: $req_file"
                STATUS=1
            else
                echo "  ✅ $req_file is valid"
            fi
        fi
    done
    echo "------------------------------"
done

if [ $STATUS -eq 0 ]; then
    echo "🎉 Validation passed! All features conform to the specifications."
else
    echo "❌ Validation failed! Please fix the errors listed above."
fi

exit $STATUS
