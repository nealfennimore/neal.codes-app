openssl req \
       -key "./certs/$1.key" \
       -new \
       -x509 -days 365 -out "./certs/$1.crt"