---
title: My Portable Dev Setup — Mac Mini, Tailscale, RustDesk, and an AI on WhatsApp
description: How I built a portable dev environment using a Mac Mini, Tailscale, RustDesk, and an AI agent — accessible from anywhere with just my phone.
pubDate: 2025-02-13
tags: [dev-setup, tailscale, rustdesk, remote-work]
---

I have a Mac Mini sitting in a remote location. I can be anywhere in the world — a café in Lisbon, an airport in Seoul, a hotel in San Francisco — and still have full access to it. Not "check a file" access. Full, unrestricted, use-it-like-I'm-sitting-in-front-of-it access.

Here's how.

## The Stack

- **Mac Mini** — always on, always connected, sitting in a fixed location
- **Tailscale** — creates a private network layer over the internet so I can reach it from anywhere
- **RustDesk** — gives me a full remote desktop when I need the GUI
- **OpenClaw** — an AI agent running on the Mac Mini that I can talk to from my phone

Each piece solves a different problem. Together, they make location irrelevant.

## Tailscale: Your Own Private Internet

The core of this setup is Tailscale. It creates a virtual mesh network — a subnet that exists on top of the public internet, but only *you* can see it.

Every device you add to your Tailscale network (your phone, your laptop, your Mac Mini) gets a stable IP address on this private network. These devices can talk to each other directly, no matter where they physically are. Behind a hotel NAT? Fine. On a restrictive corporate or school network that blocks inbound connections? Doesn't matter. Tailscale punches through.

This is the key thing: **even on enterprise or school networks that lock down most traffic, Tailscale works.** It uses WireGuard under the hood and is smart about NAT traversal. In most cases it establishes a direct peer-to-peer connection. When it can't (because the network is truly hostile), it falls back to encrypted relay servers. Either way, you get through.

Once Tailscale is running, my Mac Mini is always reachable at its Tailscale IP — `100.x.x.x` — from any of my devices. I can SSH into it, hit local web servers, transfer files, whatever. It's as if every device I own is on the same LAN.

### Tailscale Lock

On top of the standard encryption, I have **Tailscale Lock** (TailLock) enabled. This means that even if someone compromised Tailscale's coordination server, they couldn't add a rogue device to my network. Every new device needs to be cryptographically signed by an existing trusted device before it's allowed in. It's an extra layer of security that makes the network truly mine.

## SSH From Anywhere

Because Tailscale gives me a stable private IP for the Mac Mini, SSH just works:

```
ssh yumi@100.x.x.x
```

This works from my laptop at a coffee shop, from my phone using Termius, from a library computer — anywhere I can run Tailscale (or even just reach the Tailscale network via a relay).

On networks that block SSH (port 22) or non-standard ports? Tailscale's traffic runs over HTTPS-friendly ports and protocols. The SSH connection is tunneled through the Tailscale mesh, so the campus firewall never even sees it as SSH. To the network, it looks like normal encrypted traffic.

No port forwarding. No dynamic DNS. No exposing anything to the public internet. The Mac Mini has zero public-facing ports — it's invisible to the outside world but instantly reachable to me.

## RustDesk: Full Desktop When You Need It

Sometimes I need the GUI — Xcode, a browser with specific state, apps that don't have CLI equivalents. That's where RustDesk comes in.

RustDesk is an open-source remote desktop tool. I run the RustDesk server on my own infrastructure (or just use direct connections over Tailscale), so my screen data never touches a third party's servers. Connect over Tailscale, and it's fast and private.

From my iPad or any laptop, I get the full macOS desktop, responsive enough to actually work in.

## OpenClaw: Dev From Your Phone

This is the part that surprised me the most.

OpenClaw is an AI agent that runs on my Mac Mini. It has access to the filesystem, can run shell commands, manage git repos, edit code, search the web, and more. And I talk to it through **WhatsApp**.

That means I can be on a train with nothing but my phone and:

- Ask it to check on a running process
- Have it write and commit code
- Debug something by having it read logs and suggest fixes
- Create files, run scripts, manage infrastructure
- Search documentation, summarize pages, draft messages

It's not a chatbot giving generic advice. It's an agent with access to my actual machine, running real commands, editing real files. Discord, Telegram, WhatsApp — whatever messaging app I have open, that's my terminal now.

I've used it to spin up web servers, fix bugs, write documentation, and manage projects — all from my phone while commuting. The Mac Mini does the heavy lifting; I just tell it what to do.

## Why This Matters

The traditional "developer setup" assumes you're sitting at your desk. This setup assumes you're not.

- **Tailscale** makes the Mac Mini reachable from anywhere, securely, even through restrictive networks
- **Tailscale Lock** ensures only my devices can join the network
- **SSH over Tailscale** gives me a full terminal without exposing any ports to the internet
- **RustDesk** gives me the full desktop when the terminal isn't enough
- **OpenClaw** lets me develop from my phone when I don't even have a laptop

The Mac Mini draws 10-15W idle. It's silent, small, and always on. Combined with these tools, it's a portable dev environment that I carry in my pocket — because the interface is just a chat window on my phone.

Location doesn't matter anymore. The computer is always there. I just need a way to talk to it.
