percentual=$(df . | awk 'NR==2 {print $5}' | cut -d '%' -f 1)

if [ $percentual -gt 90 ]; then
  echo "Acima de 90%!"
else
  echo "Abaixo de 90%!"
fi;
