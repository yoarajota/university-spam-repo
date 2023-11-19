#!/bin/bash

# Open a new terminal and navigate to the 'front' directory, then run 'npm run dev'
start cmd /k "cd front && npm run dev"

# Open a new terminal and navigate to the 'back' directory, then run 'npm run dev'
start cmd /k "cd back && npm run dev"

exit 0