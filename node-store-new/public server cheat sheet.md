# Public Server (DigitalOcean) cheat sheet

backend/frontend location: /var/www/{sitename}  
nginx config location: /etc/nginx  
langus sudo password: Black dogs purple rain  
standard react app port (bts): 3005  

### General commands:
`sudo npm install -g npm`: update npm  

### Deploying React App to Production:
copy all files (except for node modules) to the server
`sudo npm install`: install all packages listed in package.json file  
`sudo npm audit fix`: fixes vulnerabilities automatically identified  
`pm2 stop all`: stops all processes so maximum ram is devoted to npm build  
`sudo npm run build`: builds production optimised version of react app for deployment  
`pm2 serve {build location} {port}`: beings pm2 process serving react app  
tip: be in the build director and use . as the build location 
`pm2 start {id of backend server}`: Start the back end server again  

A guide if you need help: https://andrewpark.ca/blog/create-and-deploy-a-react-app/  
https://pm2.io/doc/en/runtime/guide/development-tools/?utm_source=pm2&utm_medium=website&utm_campaign=rebranding

### Deploying Node Server to Production:
`sudo npm install`: install all packages listed in package.json file  
`pm2 start {filename}`: starts server as process if not already a process  
remember to update database authentication to production command.  

### Updating nginx configurations
`sudo systemctl reload nginx`: after changes have been made, this reloads the config files used by nginx implementing changes.

### pm2 commands list:
`pm2 list`: lists all processes and their status  
`pm2 monit`: monitor all processes  
`pm2 stop {id}`: stop specific process  
`pm2 restart {id}`: restart specific process  
`pm2 delete {id}`: delete specific process  
`pm2 start {file_name}`: start file name as process  


### mongodb commands & info:
User Accounts:
username password (priviledges)
admin xedTWrsC9hFyZ1hZ (admin)
bts_backend gHRcSObRNNw72DmI (rw-all)

### SSH connection details

### Linux commands list:
`sudo rm -rf {directory}`: deletes directory and containing files 
sudo chmod -R a+rwx /path/to/folder   