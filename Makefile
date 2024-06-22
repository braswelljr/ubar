# check for eslint
HASESLINT := $(shell which eslint 2> /dev/null)
# check for prettier
HASPRETTIER := $(shell which prettier 2> /dev/null)
# check for stylelint
HASSTYLELINT := $(shell which stylelint 2> /dev/null)

# check for eslint
ifdef HASESLINT
	ESLINT := eslint
else
	ESLINT := npx eslint
endif

# check for prettier
ifdef HASPRETTIER
	PRETTIER := prettier
else
	PRETTIER := npx prettier
endif

# check for stylelint
ifdef HASSTYLELINT
	STYLELINT := stylelint
else
	STYLELINT := npx stylelint
endif

CLEAN_ITEMS = .next/ out/ .turbo/ dist/ public/sw.js public/sw.js.map \
              public/workbox-*.js public/workbox-*.js.map yarn-error.log \
              .swc/ .eslintcache .prettiercache .contentlayercache \
              .contentlayercache.lock .contentlayer .stylelintcache \
              .stylelintignorecache .stylelintignorecache.lock .stylelintcache

# # Start pg_ctl if not already running
# pg_ctl status || pg_ctl start
.PHONY: dev
dev: # clean previous build files
	@make clean
	pnpm run start

.PHONY: build
build:
	pnpm run build

.PHONY:lint/fix
lint/fix:
	pnpm run lint:fix

.PHONY:lint
lint:
	pnpm run lint


.PHONY: format
format:
	pnpm run format

.PHONY: clean
clean:
	rm -rf $(CLEAN_ITEMS)

.PHONY: verbose-clean
verbose-clean:
	rm -rf $(CLEAN_ITEMS) node_modules pnpm-lock.yaml package-lock.json yarn.lock bun.lockb
