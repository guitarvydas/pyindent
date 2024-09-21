#	'ensure that formatted text option in draw.io is disabled everywhere'

D2J=./das2json/mac/das2json

all: scm2py

scm2py: scm2py.drawio py0d.py
	${D2J} scm2py.drawio
	python3 main.py . 0D/python "test.scm" main scm2py.drawio.json

## house-keeping

clean:
	rm -rf *.json
	rm -rf *~
	rm -rf junk*
	rm -rf __pycache__

install-js-requires:
	npm install yargs prompt-sync ohm-js

