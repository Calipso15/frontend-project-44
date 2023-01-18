brain-games: 
	node bin/brain-games.js
install: 
	npm ci
publish:
	npm publish --dry-run
make lint:
	npx eslint .