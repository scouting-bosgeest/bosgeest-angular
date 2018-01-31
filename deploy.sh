#!/usr/bin/env bash
ng build --prod
echo "### Deploying to amsterdam.oxserver.eu"
scp -r dist/* top60@amsterdam.ox:public_html/
echo "### Finished deployment"
