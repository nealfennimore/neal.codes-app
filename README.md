## Deployment

Ensure `neal.codes` and `neal.codes_location` files exist within `nginx/vhost.d`. 

```sh
ln -s .env.production.sample .env

docker-machine create --driver digitalocean \
    --digitalocean-access-token $DIGITAL_OCEAN_TOKEN \
    --digitalocean-backups \
    --digitalocean-monitoring \
    --digitalocean-region "sfo2" \
    neal.codes.docker
```

## Updating

```sh
docker-compose -f docker-compose.yml -f docker-compose.prod.yml restart
```