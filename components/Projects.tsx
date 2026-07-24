"use client";

import { useState } from "react";
import type { SVGProps, ReactElement } from "react";
import { Reveal } from "@/components/Reveal";
import { IconGithub, IconFilter } from "@/components/icons";
import {
  IconGoggles,
  IconRadio,
  IconChain,
  IconServer,
  IconBrain,
} from "@/components/icons";

type Category = "All" | "AI/ML" | "Wireless" | "Blockchain" | "XR" | "Web";

interface Project {
  title: string;
  subtitle: string;
  categories: Category[];
  supervisor?: string;
  tech: string[];
  bullets: string[];
  badge?: string;
  featured?: boolean;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}

const projects: Project[] = [
  {
    title: "ArchViz-XR",
    subtitle: "AI-Powered XR Framework for Scientific Knowledge Visualisation",
    categories: ["XR", "AI/ML"],
    icon: IconGoggles,
    tech: ["NLP", "Computer Vision", "Scene Graphs", "XR/AR", "Voice Interaction"],
    bullets: [
      "Designed an automated semantic-to-spatial XR compilation pipeline that transforms research paper diagrams into immersive 3D AR experiences using NLP, computer vision, and scene graph generation.",
      "Developed multimodal AI modules for entity extraction, relationship reasoning, spatial scene construction, and adaptive content generation, eliminating manual AR authoring.",
      "Implemented interactive visualisation with AI-generated explanations, voice interaction, and real-time exploration of Transformer architectures and scientific workflows.",
    ],
    badge: "Draft manuscript",
    featured: true,
  },
  {
    title: "GNN-DRL & GNN-SPN",
    subtitle: "AI-Based Resource Allocation for V2X Networks",
    categories: ["Wireless", "AI/ML"],
    supervisor: "Prof. Rajarshi Mahapatra",
    icon: IconRadio,
    tech: ["Graph Neural Networks", "Deep RL", "TensorFlow", "V2X", "6G"],
    bullets: [
      "Implemented Graph Neural Network-integrated Deep Reinforcement Learning (GNN-DRL) and GNN with Successive Policy Networks (GNN-SPN) for dynamic radio resource allocation in high-mobility V2X communication networks.",
      "Evaluated performance under varying vehicle densities using V2I throughput, latency, interference management, packet delivery ratio, and reliability metrics.",
      "Conducted comparative analysis against conventional DRL approaches, demonstrating improved spectrum utilisation, network stability, and communication efficiency through graph-based learning.",
    ],
    badge: "Under review — IEEE ANTS 2026",
    featured: true,
  },
  {
    title: "EduChain",
    subtitle: "Blockchain-Based Academic Credential Verification",
    categories: ["Blockchain", "Web"],
    supervisor: "Mrs. Divya Shukla",
    icon: IconChain,
    tech: ["Ethereum", "Solidity", "Hardhat", "IPFS", "FastAPI", "Next.js"],
    bullets: [
      "Developed a blockchain-based credential verification platform using Ethereum smart contracts for secure certificate issuance, verification, and revocation.",
      "Integrated IPFS with SHA-256 cryptographic hashing to provide tamper-evident storage while enabling decentralised document retrieval.",
      "Built a FastAPI backend with a wallet-authenticated Next.js frontend using Ethers.js, enabling trustless verification without centralised intermediaries.",
    ],
    badge: "Under review — Computer Networks",
  },
  {
    title: "LendFundz",
    subtitle: "Loan Management & Financial Workflow Automation Platform",
    categories: ["Web"],
    supervisor: "Dr. Nachiket Tapas",
    icon: IconServer,
    tech: ["Django", "PostgreSQL", "REST API", "OTP Auth"],
    bullets: [
      "Developed a fintech platform supporting end-to-end loan lifecycle management, approval workflows, EMI computation, and repayment tracking.",
      "Built scalable backend services using Django and PostgreSQL with REST APIs for seamless frontend integration.",
      "Implemented OTP-based authentication, role-based access control, and secure session management for financial applications.",
    ],
  },
  {
    title: "ParkEase",
    subtitle: "Real-Time Smart Parking Allocation System",
    categories: ["AI/ML", "Web"],
    supervisor: "Mr. Abhinaw Jagtap",
    icon: IconServer,
    tech: ["Computer Vision", "OpenCV", "Concurrency Control"],
    bullets: [
      "Developed a computer vision-based smart parking system for real-time parking space detection and reservation management.",
      "Implemented concurrency control mechanisms to prevent duplicate reservations and ensure data consistency.",
      "Designed automated parking allocation and live slot availability monitoring for smart-city applications.",
    ],
  },
  {
    title: "Mental Health Detector",
    subtitle: "Journal Sentiment Analysis Application",
    categories: ["AI/ML"],
    supervisor: "Mr. Ramakant Ganjeshwar",
    icon: IconBrain,
    tech: ["NLP", "Machine Learning", "Matplotlib"],
    bullets: [
      "Developed an AI-driven sentiment analysis application to monitor emotional and behavioural patterns from personal journal entries.",
      "Applied NLP techniques for text preprocessing, feature extraction, and sentiment classification.",
      "Built visualisation dashboards to track longitudinal mood trends and behavioural changes.",
    ],
  },
];

const filters: Category[] = ["All", "AI/ML", "Wireless", "Blockchain", "XR", "Web"];

export function Projects() {
  const [active, setActive] = useState<Category>("All");
  const visible = projects.filter((p) => active === "All" || p.categories.includes(active));

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28 border-t border-line">
      <Reveal>
        <p className="eyebrow mb-3">projects.list()</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          Projects
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <span className="mr-1 flex items-center gap-1.5 text-xs font-mono text-ink-faint">
            <IconFilter className="w-3.5 h-3.5" />
            filter:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                active === f
                  ? "bg-teal text-white"
                  : "border border-line text-ink-soft hover:border-teal hover:text-teal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={100 + i * 70}>
            <div
              className={`group flex h-full flex-col rounded-xl border p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
                p.featured
                  ? "border-teal/30 bg-gradient-to-br from-surface to-teal-tint"
                  : "border-line bg-surface hover:border-teal/40"
              }`}
            >
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-teal-tint text-teal">
                  <p.icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink group-hover:text-teal transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-soft mt-0.5">{p.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-2.5 mb-5 flex-1">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-faint" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {p.badge && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-tint px-3 py-1 font-mono text-xs font-medium text-gold">
                  {p.badge}
                </span>
              )}

              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-line">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.supervisor && (
                <p className="mt-3 text-xs text-ink-faint">Supervisor: {p.supervisor}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/ruthvikreddyv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-semibold text-ink hover:border-teal hover:text-teal transition-colors"
          >
            <IconGithub className="w-4 h-4" />
            See more on GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
