# Nodejs library for Graphene 

  Provide a library and useful commands for graphene testing

# Install required libs:
  npm install


Commands
-------------

  Last Blocks
  ----------
  
  * Usage:
  ```
  node bin/lastBocks.js url nLastBlocks  
  ```

  * Example
  ```
  node bin/lastBlocks.js ws://127.0.0.1:8090 10
  ```

  Flood the network
  ----------
  
  * Usage:
  ```
  node bin/flood.js account url-wallet [nTxBlock]
  ```

  * Example:
  ```
  node bin/flood.js spartako ws://127.0.0.1:8099 10
  ```