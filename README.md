# Gunicorn Configuration Project

This project contains configuration for Gunicorn WSGI HTTP Server.

## Configuration Details

- Workers: 4
- Bind Address: 0.0.0.0:8000
- Timeout: 120 seconds

## Setup
1. Install requirements
2. Run Gunicorn with the config file:
```bash
gunicorn -c gunicorn_config.py your_app:app
```

## Deployment
This project is deployed on GitHub Pages. You can view it at:
https://khaledmohamed44.github.io/m_pack22

To deploy new changes:
```bash
npm run deploy
```
# khaled
