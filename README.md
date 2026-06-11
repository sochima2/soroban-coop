# SorobanCoop

SorobanCoop is a decentralized cooperative savings and contribution platform built on Stellar Soroban. It helps communities create shared savings groups, contribute together, vote transparently, and manage cooperative funds with auditable records.

## Landing page

This repository includes a modern React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React landing page. It is dark by default, responsive, and uses Stellar-inspired blue, purple, and cyan gradients.

### Run locally

```bash
npm install
npm run dev
```

`npm start` is also available as an alias for `npm run dev`.


### Troubleshooting local npm commands

If npm reports `EJSONPARSE`, your local `package.json` or a copied lockfile is invalid JSON. Replace `package.json` with the committed version, delete any partially generated `package-lock.json`, then run:

```bash
node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8')); console.log('package.json OK')"
npm install
npm run dev
```

### Production build

```bash
npm run build
```

### Vercel deployment

The repository includes `vercel.json` so Vercel installs dependencies, runs `npm run build`, and serves the generated `dist` directory. If a previous deployment shows a blank page or build failure, redeploy after pulling these package and Vercel configuration updates.

## Contract view usage

The Rust `views` module exposes `get_event_participants`, a read-only helper that accepts an `event_id`, retrieves the `EventParticipants(event_id)` storage entry, and returns all participants for that event.

```rust
use soroban_coop::views::{get_event_participants, CoopStorage};

let mut storage = CoopStorage::default();
storage.create_event(7);
storage.add_participant(7, "alice".to_string()).unwrap();

let participants = get_event_participants(&storage, 7).unwrap();
assert_eq!(participants, vec!["alice".to_string()]);
```

New events initialized with `CoopStorage::create_event` return an empty list until participants are added. Missing events return `ContractError::EventNotFound`.

### Run Rust tests

```bash
cargo test
```
