## Deployment

Ensure `neal.codes` and `neal.codes_location` files exist within `nginx/vhost.d`. 

```sh
ln -s .env.production.sample .env

docker-machine create --driver digitalocean \
    --digitalocean-access-token $DIGITAL_OCEAN_TOKEN \
    --digitalocean-backups \
    --digitalocean-monitoring \
    --digitalocean-region "sfo2" \
    $DIGITAL_OCEAN_NEAL_CODES
```

## Updating

```sh
ln -sf .env.production.sample .env
eval "$(docker-machine env $DIGITAL_OCEAN_NEAL_CODES)"
docker-machine ssh $DIGITAL_OCEAN_NEAL_CODES "cd /mnt/volume-sfo2-01/app && git pull"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml restart
```