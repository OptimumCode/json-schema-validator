# Connect to Codespaces using JetBrains IDE

## Pre-requirements

1. You need to have [gh CLI](https://cli.github.com/) installed.
2. JetBrains IDE that can connect to remote host via SSH

## Steps

1. Create Codespace in GitHub. You can do it either via the UI or using gh CLI.
2. Create local SSH server that is connected to the Codespace you need.
  ```bash
  gh cs ssh --server-port <port>
  ```
  For example,
  ```bash
  gh cs ssh --server-port 30042
  ```
  You will see something like this:
  ```text
  $ gh cs ssh --server-port 30042
  ? Choose codespace: OptimumCode/json-schema-validator (main): redesigned zebra
  Connection Details: ssh vscode@localhost [-p 30042 -o NoHostAuthenticationForLocalhost=yes -o PasswordAuthentication=no]
  ```
3. Connect to Codespace using the displayed connection details.