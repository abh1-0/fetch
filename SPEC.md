# Fetch Protocol Specification (v1.0.0-draft)

The Fetch Protocol is a lightweight, local-first API designed for universal printer and scanner communication. It relies on standard network protocols (mDNS for discovery and HTTP/JSON for communication).

## 1. Network Discovery

Fetch uses Multicast DNS (mDNS) / DNS-SD to broadcast printer availability on the local network.

- **Service Type**: `_fetch._tcp`
- **Port**: Typically `8000` or an ephemeral port.
- **TXT Records**:
  - `txtvers`: Version of the Fetch protocol (e.g., `1`).
  - `model`: Printer model name (e.g., `Fetch Reference Simulator`).
  - `status`: Current status (`idle`, `printing`, `error`).

## 2. HTTP REST API

Printers must expose a local REST API over HTTP/HTTPS.

### 2.1 Get Capabilities
- **Endpoint**: `GET /api/capabilities`
- **Response**: JSON describing supported features (color, duplex, media sizes).
```json
{
  "features": {
    "color": true,
    "duplex": true,
    "borderless": false
  },
  "mediaSizes": ["A4", "Letter", "Legal"],
  "resolutions": ["300dpi", "600dpi"]
}
```

### 2.2 Get Status
- **Endpoint**: `GET /api/status`
- **Response**: JSON detailing the current printer state and ink/toner levels.
```json
{
  "state": "idle",
  "alerts": [],
  "supplies": {
    "black": 85,
    "cyan": 40,
    "magenta": 60,
    "yellow": 90
  }
}
```

### 2.3 Submit Job
- **Endpoint**: `POST /api/jobs`
- **Headers**: `Content-Type: application/pdf` (or other supported mime types).
- **Body**: The document payload.
- **Response**: JSON containing a `jobId`.

### 2.4 Job Status
- **Endpoint**: `GET /api/jobs/:jobId`
- **Response**: Details about job progress (`pending`, `processing`, `completed`, `failed`).

## 3. Security (Optional Secure Mode)
- **Pairing**: Secure Mode requires a 6-digit PIN pair (for displays) or physical button confirmation.
- **Tokens**: Post-pairing, clients use an HTTP Bearer token for authorized endpoints.
