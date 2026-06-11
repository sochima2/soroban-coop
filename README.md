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


> Decentralized cooperative savings and community fund management built on Soroban.

## Vision

Millions of people across Africa and other developing regions rely on cooperative savings groups, rotating savings schemes (Ajo, Esusu, Chama), and community funds to save money and support one another.

Unfortunately, many of these systems still rely on manual record keeping, trust-based management, and centralized control, which can lead to disputes, fraud, and lack of transparency.

SorobanCoop brings cooperative finance on-chain using Soroban smart contracts, creating a transparent, secure, and community-owned savings platform.

---

# Problem

Traditional cooperative savings groups face several challenges:

* Lack of transparency
* Manual bookkeeping
* Missing contribution records
* Fraud and fund mismanagement
* Difficult withdrawal approvals
* Limited accountability

These issues reduce trust and make it harder for communities to scale their financial activities.

---

# Solution

SorobanCoop enables communities to create and manage savings groups directly on Stellar using Soroban smart contracts.

Members can:

* Create cooperative groups
* Join existing groups
* Contribute funds
* Track balances transparently
* Vote on withdrawals
* Monitor treasury activity
* Audit all financial actions on-chain

---

# Why Soroban?

Soroban provides the ideal foundation for community finance:

* Low transaction costs
* Fast settlement
* Secure smart contracts
* Stellar ecosystem integration
* Global accessibility
* Scalability for micro-transactions

---

# Features

### Cooperative Group Creation

Create decentralized savings groups with customizable rules.

### Membership Management

Manage participants and group membership.

### Contributions

Record and track member contributions transparently.

### Governance

Community-driven voting for fund decisions.

### Withdrawal Requests

Require approval before funds leave the treasury.

### Transparent Treasury

Every contribution and withdrawal is visible and auditable.

### On-Chain Accountability

Reduce disputes through verifiable records.

---

# Current Development Status

## Completed

* Project architecture planning
* Smart contract design
* Governance model design
* Cooperative workflow design
* Roadmap definition
* Contributor structure planning

## In Progress

* Group management contract
* Contribution tracking system
* Treasury management
* Governance module

## Planned

* Wallet integration
* Frontend dashboard
* Analytics
* Notifications
* Mobile support

---

# Architecture

User

↓

Frontend (React + TypeScript)

↓

Freighter Wallet

↓

Soroban Smart Contracts

↓

Stellar Network

---

# Roadmap

## Phase 1 — Foundation

Goal:

Create the core cooperative infrastructure.

Tasks:

* Project setup
* Smart contract structure
* Group creation
* Membership system

Status: In Progress

---

## Phase 2 — Contributions

Goal:

Enable secure member deposits.

Tasks:

* Contribution tracking
* Balance management
* Treasury accounting

Status: Planned

---

## Phase 3 — Governance

Goal:

Community-controlled decision making.

Tasks:

* Proposal creation
* Voting mechanisms
* Approval thresholds

Status: Planned

---

## Phase 4 — Withdrawals

Goal:

Secure access to community funds.

Tasks:

* Withdrawal requests
* Approval workflows
* Fund distribution

Status: Planned

---

## Phase 5 — Frontend

Goal:

User-friendly cooperative management.

Tasks:

* Dashboard
* Group pages
* Contribution tracking UI
* Voting interface

Status: Planned

---

## Phase 6 — Wallet Integration

Goal:

Enable blockchain interactions.

Tasks:

* Freighter integration
* Transaction signing
* User authentication

Status: Planned

---

## Phase 7 — Testing

Goal:

Production readiness.

Tasks:

* Unit testing
* Integration testing
* Contract security review

Status: Planned

---

## Phase 8 — Testnet Launch

Goal:

Community testing.

Tasks:

* Deploy to Soroban Testnet
* Gather feedback
* Improve UX

Status: Planned

---

## Phase 9 — Mainnet Release

Goal:

Launch a production-ready cooperative platform.

Tasks:

* Final audit
* Documentation
* Mainnet deployment

Status: Future

---

# Contributing

We welcome contributors of all experience levels.

Areas to contribute:

* Soroban smart contracts
* Rust development
* Frontend engineering
* Documentation
* Testing
* UI/UX design

Check the Issues tab for beginner-friendly and advanced tasks.

---

# Impact

SorobanCoop aims to improve financial inclusion by helping communities manage collective savings transparently and securely.

By leveraging Soroban, we hope to provide a modern infrastructure layer for cooperative finance that is accessible, auditable, and community-owned.

---

# Built With

* Soroban
* Stellar
* Rust
* React
* TypeScript
* Tailwind CSS

---

# License

MIT


