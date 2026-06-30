# Fetch 🖨️

> **One protocol. Every printer. Every feature.**

Fetch is an open-source printing protocol and ecosystem designed to make printing and scanning simple, universal, and manufacturer-independent.

No proprietary apps. No cloud accounts. No vendor lock-in.

---

## Why?

Modern printers are unnecessarily complicated.

Every manufacturer has its own app, setup process, drivers, and ecosystem. Even basic tasks like connecting a new printer can be frustrating.

Fetch aims to solve this by creating one open protocol that every printer and every app can use.

## Vision

Imagine buying a printer.

1. Connect it to Wi-Fi.
2. Open any Fetch-compatible app.
3. Your printer appears instantly.
4. Press **Print**.

That's it.

No searching for drivers.

No downloading manufacturer software.

No creating an account.

---

## Features

- Universal printing
- Universal scanning
- Cross-platform support
- Automatic printer discovery
- Local-first operation
- No cloud dependency
- Open protocol
- Open-source ecosystem
- Feature parity across all Fetch-compatible apps

---

## Design Principles

### Universal

Every Fetch-compatible printer should work with every Fetch-compatible application.

### Feature Equality

If a printer supports a feature, every Fetch-compatible application must be able to access it.

Examples include:

- Duplex printing
- Borderless printing
- Print quality
- Paper size
- Paper type
- Glossy paper
- Color profiles
- Ink levels
- Maintenance tools
- Scanning
- OCR
- Photo printing

Manufacturers should not artificially limit features to their own software.

### Local First

Fetch is designed to work entirely on your local network.

- No cloud services
- No accounts
- No Internet connection required

### Cross Platform

- Android
- iOS
- Windows
- macOS
- Linux
- ChromeOS

### Automatic Discovery

Fetch uses existing local network discovery technologies wherever possible.

Compatible printers should appear automatically without requiring IP addresses or manual configuration.

### Security

#### Default Mode

- Local discovery
- Instant printing

#### Optional Secure Mode

- 6-digit PIN pairing (for printers with displays)
- Physical button confirmation (for printers without displays)

Once paired, devices remain trusted until removed.

---

## Fetch Certified

A printer may display the **Fetch Certified** badge only if it meets all certification requirements.

Requirements include:

- Full protocol compatibility
- Accurate capability reporting
- Feature equality
- Reliable interoperability

---

## Roadmap

### Phase 1

- Protocol specification
- Printer discovery
- Capability definitions
- Basic printing

### Phase 2

- Scanning
- OCR support
- Print queue management
- PDF generation

### Phase 3

- Android SDK
- Desktop SDK
- Embedded SDK
- Reference implementations

### Phase 4

- Certification tools
- Compliance testing
- Community printer database

---

## Repository Structure

```text
docs/
examples/
reference/

README.md
SPEC.md
ROADMAP.md
CONTRIBUTING.md
LICENSE
```

---

## Contributing

Contributions are welcome.

Whether you're:

- A developer
- A hardware engineer
- A printer manufacturer
- A designer
- A technical writer
- A student with an idea

Feel free to open an issue, submit a pull request, or start a discussion.

---

## Current Status

> **Status:** Early concept

The Fetch protocol is currently in the design phase.

The specification will continue evolving as the project grows.

---

## License

This project is intended to be released under an open-source license.

The final license will be selected before the first stable release.

---

## Philosophy

> **A printer's capabilities belong to the user, not to the manufacturer's app.**

Fetch exists to make printing simple, open, and universal.
