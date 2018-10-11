help:
	@echo '  init'
	@echo '        install npm and dependencies'
	@echo '  test'
	@echo '        run jest tests'

init:
	@echo 'Installing pipenv and all dependencies'
	npm install

lint:
	@echo 'Linting code'
	./node_modules/.bin/eslint src/

test:
	@echo 'Running tests'
	npm test -- --coverage
