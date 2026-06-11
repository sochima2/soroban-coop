import {
  Banknote,
  Blocks,
  CircleDollarSign,
  Code2,
  Coins,
  GitBranch,
  Github,
  Handshake,
  Landmark,
  LockKeyhole,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Vote,
  Wallet,
  Zap,
} from 'lucide-react';

export const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why Soroban', href: '#why-soroban' },
  { label: 'Roadmap', href: '#roadmap' },
] as const;

export const features = [
  {
    title: 'Cooperative Groups',
    description: 'Launch member-owned savings circles with transparent rules, roles, and contribution schedules.',
    icon: Users,
  },
  {
    title: 'Secure Contributions',
    description: 'Coordinate deposits with smart-contract-backed accounting and tamper-resistant balances.',
    icon: LockKeyhole,
  },
  {
    title: 'Transparent Voting',
    description: 'Give every member a clear voice in approvals, spending decisions, and governance changes.',
    icon: Vote,
  },
  {
    title: 'Smart Withdrawals',
    description: 'Automate withdrawal flows that respect cooperative policies and member-approved proposals.',
    icon: Wallet,
  },
  {
    title: 'On-Chain Records',
    description: 'Keep auditable histories of groups, contributions, votes, and payouts on Stellar Soroban.',
    icon: Blocks,
  },
  {
    title: 'Low-Cost Transactions',
    description: 'Use Stellar rails to make cooperative finance practical for communities of every size.',
    icon: CircleDollarSign,
  },
] as const;

export const steps = [
  {
    eyebrow: 'Step 1',
    title: 'Create or Join a Cooperative',
    description: 'Start a savings group, define membership rules, and invite trusted contributors.',
    icon: Handshake,
  },
  {
    eyebrow: 'Step 2',
    title: 'Contribute Funds Securely',
    description: 'Members deposit on schedule while Soroban contracts track balances and obligations.',
    icon: Coins,
  },
  {
    eyebrow: 'Step 3',
    title: 'Vote and Manage Shared Funds',
    description: 'Review proposals, vote transparently, and release funds according to group consensus.',
    icon: Landmark,
  },
] as const;

export const sorobanBenefits = [
  { title: 'Fast transactions', description: 'Designed for responsive cooperative workflows.', icon: Zap },
  { title: 'Low fees', description: 'Keep more value inside community-owned savings pools.', icon: Banknote },
  { title: 'Smart contracts', description: 'Encode contribution, voting, and withdrawal rules.', icon: Code2 },
  { title: 'Security', description: 'Use deterministic execution and auditable state changes.', icon: ShieldCheck },
  { title: 'Financial inclusion', description: 'Enable trusted savings infrastructure for underserved communities.', icon: Sparkles },
] as const;

export const roadmap = [
  { phase: 'Phase 1', title: 'Group Creation' },
  { phase: 'Phase 2', title: 'Contributions' },
  { phase: 'Phase 3', title: 'Governance & Voting' },
  { phase: 'Phase 4', title: 'Withdrawals' },
  { phase: 'Phase 5', title: 'Wallet Integration' },
  { phase: 'Phase 6', title: 'Mainnet Launch' },
] as const;

export const communityCards = [
  {
    title: 'Open Source',
    description: 'Transparent primitives for builders who believe cooperative finance should be inspectable.',
    icon: Github,
  },
  {
    title: 'Contributors Welcome',
    description: 'Help shape contracts, interfaces, documentation, testing, governance, and community education.',
    icon: GitBranch,
  },
  {
    title: 'GitHub Integration',
    description: 'Track issues, review pull requests, and coordinate the roadmap with an open builder workflow.',
    icon: Network,
  },
] as const;

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Documentation', href: '#how-it-works' },
  { label: 'Community', href: '#community' },
] as const;

export const RocketIcon = Rocket;
