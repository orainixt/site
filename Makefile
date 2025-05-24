MONGO_FOLDER = dbData/

webpack: 
	cd client ; ./node_modules/.bin/webpack --watch

server: 
	cd server ; nodemon 

create-mongo: 
	cd server ; mkdir ${MONGO_FOLDER}

clean-mongo: 
	cd server ; rm -f ${MONGO_FOLDER}

mongo: 
	cd server ; mongod --dbpath ${MONGO_FOLDER}



help: 
	@echo "<= Available commands =>"
	@echo "   make webpack -> bundle the client webpack "
	@echo "   make server  -> launch the server         "

.PHONY: webpack server help