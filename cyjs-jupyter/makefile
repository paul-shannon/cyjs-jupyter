default:
	(cd js; npm update)
	(cd js; webpack --config webpack.config.js)
	pip install -e .
	(cd js; npm install)
	jupyter nbextension install --py cyjs
	jupyter nbextension enable --py --sys-prefix cyjs
	jupyter notebook cyjs.ipynb 

clean:
	- rm -rf js/node_modules/*
	- rm -rf js/dist/*
	- rm -rf cyjs/static/*
	- rm -rf cyjs/__pycache__
