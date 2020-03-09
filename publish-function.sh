#!/usr/bin/env bash

set -e

# Prints a usage message.
function print_usage() {
    cat <<EOF
Usage:
    publish-function.sh FUNCTION
EOF
}

# Validate the command-line arguments.
if [[ $# -ne 1 ]]; then
    print_usage >&2
    exit 1
fi

# Validate the function name argument.
function_name="$1"
if [[ ! -d "$function_name" ]]; then
    echo "$function_name does not exist" >&2
    exit 1
fi

# Create the zip file for the function.
pushd "$function_name"
zip "../$function_name.zip" *
popd

# Publish the function
aws lambda update-function-code --function-name "$function_name" --zip-file "fileb://$function_name.zip" --publish

# Delete the zip file.
rm -f "$function_name.zip"
