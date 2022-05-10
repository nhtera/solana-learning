Gen Solana key:
```
solana-keygen new --force
```

Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none): 

Wrote new keypair to /home/tien/.config/solana/id.json
=========================================================================
pubkey: HYigydKvfodSjBXJJpox5NcixphEWDJESxxCBFZDKrdR
=========================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
always miracle book dish help canal holiday shy legend intact mom veteran
=========================================================================


Get solana config:
```
solana config get
 ```

Config File: /home/tien/.config/solana/cli/config.yml
RPC URL: https://api.mainnet-beta.solana.com
WebSocket URL: wss://api.mainnet-beta.solana.com/ (computed)
Keypair Path: /home/tien/.config/solana/id.json
Commitment: confirmed

Set to mainnet
```
solana config set --url mainnet-beta
```

Set to devnet
```
solana config set --url devnet
```

Get balance:
```
solana balance HYigydKvfodSjBXJJpox5NcixphEWDJESxxCBFZDKrdR --url https://api.devnet.solana.com
```

Airdrop:
```
solana airdrop 1 HYigydKvfodSjBXJJpox5NcixphEWDJESxxCBFZDKrdR --url https://api.devnet.solana.com
```

Create fungible token:
```
spl-token create-token
```

Creating token DvsUqaq4aRy2QfW5Lw4FvZyyy3Vg3yj7khWvXHCFfXHs
Signature: AtJb5UoFpAeoq2tVnGEob4z2umR2fpWg7HLVtdoDzHdbRTASJ3HLFQZJBSMVtPraAr4w2Z4eXsACPmgTRhJuLPs

Create account:
```
spl-token create-account DvsUqaq4aRy2QfW5Lw4FvZyyy3Vg3yj7khWvXHCFfXHs
```
Creating account AGg7E8CXywV8g5fvwFpeuoez2sWeMkZH7FuTc3koh2Qw
Signature: 3MTP73zK67bFNpaSWd7U4JmHaSeHC2iFhKLGH6UteGPyg2NyTYsBsLkCK7g7jQUtAu4XKX8vxEe9gdvK9cJKQvoE

Mint token:
```
spl-token mint DvsUqaq4aRy2QfW5Lw4FvZyyy3Vg3yj7khWvXHCFfXHs 1000
```

Minting 1000 tokens
  Token: DvsUqaq4aRy2QfW5Lw4FvZyyy3Vg3yj7khWvXHCFfXHs
  Recipient: AGg7E8CXywV8g5fvwFpeuoez2sWeMkZH7FuTc3koh2Qw
Signature: 3QBZaRhXMDEnjyi2ZsMDoZaV2ivVjMcQVbdJ33b9K9zec3Nxhn8PxYGVeHq6JHY9vgU5KfjJi2YppjpTEAms6ZQe

Fixed supply
```
spl-token authorize DvsUqaq4aRy2QfW5Lw4FvZyyy3Vg3yj7khWvXHCFfXHs mint --disable
```

Create non-fungible token:

```
spl-token create-token --decimals 0
```
Creating token 2RXooq5YmYnQceCi5H8fRjghi3eJKRHx9nYcvNSgViJE
Signature: 39WQWXmTQe2nxRYJYLzk8kDKVKEEow8DWTTdteFPnxkMfFSeQwEsyDtVMF28m5xUAvYyXCGRQxuTYp5xv5ujyt3D

Create account:
```
spl-token create-account 2RXooq5YmYnQceCi5H8fRjghi3eJKRHx9nYcvNSgViJE
```
Creating account E7ZEAbCKnECQbXvFSd3mNBM9U3zDDt3Ufvnmv1cQ28DR
Signature: 4WNvtWBktViAVecbCZZWAiHNeC63WWFMaChgZMNsHWDkDufuCWGNgKbjtmp58bp3NLBazLd99t2yTuK21rGBjxiw

Mint token:
```
spl-token mint 2RXooq5YmYnQceCi5H8fRjghi3eJKRHx9nYcvNSgViJE 1
```
Minting 1 tokens
  Token: 2RXooq5YmYnQceCi5H8fRjghi3eJKRHx9nYcvNSgViJE
  Recipient: E7ZEAbCKnECQbXvFSd3mNBM9U3zDDt3Ufvnmv1cQ28DR
Signature: 3TTE8RZTcYgXdYCfquBn4AGvE4Zip2LpfayTijpRgEg1azSk9ViegWQWnDebmAwxiyp6pQAcaPdhTKUFqAZ2duWx

Fixed supply
```
spl-token authorize 2RXooq5YmYnQceCi5H8fRjghi3eJKRHx9nYcvNSgViJE mint --disable
```
Updating 2RXooq5YmYnQceCi5H8fRjghi3eJKRHx9nYcvNSgViJE
  Current mint authority: HYigydKvfodSjBXJJpox5NcixphEWDJESxxCBFZDKrdR
  New mint authority: disabled
Signature: 4yrHXCRU5XUuF5dUMAX9phuMuJDxF9oUgjuaMDP6V5MuWJxbnY5qqzeqkuKxVbczboBtEsqHvGKeTqpHSftHavxW