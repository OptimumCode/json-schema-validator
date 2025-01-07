#!/bin/bash

set -e

if [[ "$DETEKT_VERSION" == "" ]]; then
	echo "Privide detekt version in DETEKT_VERSION env variable"
	exit 1
fi
if [[ "$KTLINT_VERSION" == "" ]]; then
	echo "Provide ktlint version in KTLINT_VERSION env variable"
	exit 1
fi
TOOLS="$(pwd)/tools"
mkdir -p ${TOOLS}
echo "Installing detekt $DETEKT_VERSION"
jar_destination="${TOOLS}/lib/detekt"
mkdir -p ${jar_destination}
curl -sSL -o ${jar_destination}/detekt-cli.jar "https://github.com/detekt/detekt/releases/download/v${DETEKT_VERSION}/detekt-cli-${DETEKT_VERSION}-all.jar"

entrypoint_script="${TOOLS}/detekt-cli"
cat > "$entrypoint_script" << EOM
java -jar ${jar_destination}/detekt-cli.jar \$@
EOM
chmod +x "$entrypoint_script"
detekt-cli --version

echo "Installing ktlint $KTLINT_VERSION"
curl -sSLO "https://github.com/pinterest/ktlint/releases/download/$KTLINT_VERSION/ktlint" && chmod a+x ktlint && mv ktlint ${TOOLS}/
ktlint --version

export PATH="$PATH:$TOOLS"