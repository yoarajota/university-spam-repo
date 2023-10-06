p1=$1;
p2=$2;

percentual=$(df "$p2" | awk 'NR==2 {print $5}' | cut -d '%' -f 1);
if [ $percentual -gt "$p1" ]; then
  echo "Acima"
else 
  echo "Abaixo
fi;
