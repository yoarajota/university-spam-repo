#!/bin/bash

start cmd /k "cd front && npm run dev"

start cmd /k "cd back && npm run dev"

exit 0