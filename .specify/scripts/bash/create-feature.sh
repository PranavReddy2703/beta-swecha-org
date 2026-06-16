#!/bin/bash

# Exit on any error
set -e

# Verify argument count
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <feature-name>"
    echo "Example: $0 002-search-filters"
    exit 1
fi

FEATURE_NAME=$1
SPECS_DIR="specs/$FEATURE_NAME"
TEMPLATES_DIR=".specify/templates"

# Verify templates directory exists
if [ ! -d "$TEMPLATES_DIR" ]; then
    echo "Error: Templates directory '$TEMPLATES_DIR' does not exist."
    exit 1
fi

# Create target directory
if [ -d "$SPECS_DIR" ]; then
    echo "Error: Directory '$SPECS_DIR' already exists."
    exit 1
fi

mkdir -p "$SPECS_DIR"

echo "Creating new feature spec kit at '$SPECS_DIR'..."

# Copy templates and rename
cp "$TEMPLATES_DIR/spec-template.md" "$SPECS_DIR/spec.md"
cp "$TEMPLATES_DIR/plan-template.md" "$SPECS_DIR/plan.md"
cp "$TEMPLATES_DIR/tasks-template.md" "$SPECS_DIR/tasks.md"
cp "$TEMPLATES_DIR/data-model-template.md" "$SPECS_DIR/data-model.md"
cp "$TEMPLATES_DIR/research-template.md" "$SPECS_DIR/research.md"

# Replace feature name placeholder in the copies
# Use standard sed or compatible alternative
for file in "$SPECS_DIR"/*.md; do
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s/\[Feature Name\]/$FEATURE_NAME/g" "$file"
    else
        sed -i "s/\[Feature Name\]/$FEATURE_NAME/g" "$file"
    fi
done

echo "Feature '$FEATURE_NAME' successfully initialized!"
ls -la "$SPECS_DIR"
