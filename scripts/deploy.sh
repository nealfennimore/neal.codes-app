ln -sf .env.production.sample .env
eval "$(docker-machine env $DIGITAL_OCEAN_NEAL_CODES)"
docker-machine ssh $DIGITAL_OCEAN_NEAL_CODES "cd /mnt/volume-sfo2-01/app && git pull"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml restart
docker-compose logs -f