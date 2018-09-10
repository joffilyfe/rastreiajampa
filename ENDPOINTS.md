# GETTING TOKEN

```shell
curl 'https://apissl.bus4.com.br/api/dispositivo' \
-XPOST \
-H 'Referer: http://bus4.jpa.mapa.s3-website-us-east-1.amazonaws.com/' \
-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
-H 'Origin: http://bus4.jpa.mapa.s3-website-us-east-1.amazonaws.com' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/604.4.7 (KHTML, like Gecko) Version/11.0.2 Safari/604.4.7' \
-H 'Accept: application/json, text/javascript, */*; q=0.01' \
--data 'macaddress=177.180.248.81&cidade=jpa'
```

# GETTING BUS STOPS

```shell
curl 'https://apissl.bus4.com.br/api/listaparadasv2' \
-XPOST \
-H 'Referer: http://bus4.jpa.mapa.s3-website-us-east-1.amazonaws.com/' \
-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
-H 'Origin: http://bus4.jpa.mapa.s3-website-us-east-1.amazonaws.com' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/604.4.7 (KHTML, like Gecko) Version/11.0.2 Safari/604.4.7' \
-H 'Accept: application/json, text/javascript, */*; q=0.01' \
--data 'token=NS6SvGxxzdY5KRhpW7B5ENVRt5D7KFfy40T9i4oLcsgc9ysr4vBVzySA6oi1Dzms&cidade=jpa&latitude=-7.1183516&longitude=-34.8504913&zoom=15'
```

# GETTING BUS LINES AT BUS STOPS

```shell
curl 'https://apissl.bus4.com.br/api/localizemev2' \
-XPOST \
-H 'Referer: http://bus4.jpa.mapa.s3-website-us-east-1.amazonaws.com/' \
-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
-H 'Origin: http://bus4.jpa.mapa.s3-website-us-east-1.amazonaws.com' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/604.4.7 (KHTML, like Gecko) Version/11.0.2 Safari/604.4.7' \
-H 'Accept: application/json, text/javascript, */*; q=0.01' \
--data 'latitude=-7.1480000205338&longitude=-34.8436332587153&parada=TRA5100CIRCULARP41+I+5100&token=NS6SvGxxzdY5KRhpW7B5ENVRt5D7KFfy40T9i4oLcsgc9ysr4vBVzySA6oi1Dzms&cidade=jpa'
```

# GETTING BUS INFORMATION

```shell
curl 'https://apissl.bus4.com.br/api/paradas' \
-XPOST \
-H 'Referer: http://bus4.jpa.mapa.s3-website-us-east-1.amazonaws.com/' \
-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
-H 'Origin: http://bus4.jpa.mapa.s3-website-us-east-1.amazonaws.com' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/604.4.7 (KHTML, like Gecko) Version/11.0.2 Safari/604.4.7' \
-H 'Accept: application/json, text/javascript, */*; q=0.01' \
--data 'sentido=0&linha=REU5600&itinerario=MANGABEIRA+%2F+MANA%C3%8DRA+SHOPPING&parada=REU5600MANGABEIRA+%2F+MANA%C3%8DRA+SHOPPINGP19+I+5600&token=NS6SvGxxzdY5KRhpW7B5ENVRt5D7KFfy40T9i4oLcsgc9ysr4vBVzySA6oi1Dzms&cidade=jpa'
```