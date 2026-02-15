VERSION=v22.22.0
OS=linux
ARCH=arm64
curl -OL https://nodejs.org/dist/${VERSION}/node-${VERSION}-${OS}-${ARCH}.tar.gz
tar -xzf node-${VERSION}-${OS}-${ARCH}.tar.gz
mv node-${VERSION}-${OS}-${ARCH} /usr/local/nodejs
rm node-${VERSION}-${OS}-${ARCH}.tar.gz
