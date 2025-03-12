run:
	docker compose up --build

stop:
	docker compose down

restart:
	docker compose down && docker compose up --build

migrate:
	docker compose exec app npm run typeorm -- migration:run -d ./data-source.ts

generate-migration:
	docker compose exec app npm run typeorm migration:generate -- -n MigrationName

teste:
	docker compose exec app npm run test

lint:
	docker compose exec app npm run lint -- --fix

format:
	docker compose exec app npx prettier --write "src/**/*.ts"

clean:
	rm -rf dist

install:
	npm install

