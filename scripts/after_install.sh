cd /home/ubuntu/nodejs
sudo docker stop sample_app
sudo docker rmi sample_node
sudo docker build . -t sample_node