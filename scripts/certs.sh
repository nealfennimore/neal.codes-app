openssl req \
    -newkey rsa:2048 -nodes -keyout "certs/$1.key "\
    -out "certs/$1.csr"