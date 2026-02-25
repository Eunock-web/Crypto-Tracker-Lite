<div align="center">

# 🪙 Crypto Tracker Lite

**A sleek, real-time cryptocurrency tracking app built with React Native & Expo.**

[![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020?logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react&logoColor=white)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![NativeWind](https://img.shields.io/badge/NativeWind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://www.nativewind.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## 📖 Overview

**Crypto Tracker Lite** is a modern mobile application that lets you monitor live cryptocurrency prices, track market activity, and manage your personal watchlist — all from a clean, dark-themed UI.

It fetches real-time data from the [CoinGecko API](https://www.coingecko.com/en/api) and persists your favorites locally using AsyncStorage, so your watchlist is always there when you need it.

---

## ✨ Features

- 📈 **Live Prices** — Real-time data for the top 50 cryptocurrencies by market cap
- 🔍 **Search & Filter** — Instantly search by name or symbol, and filter by All / Top 10 / Favorites
- ⭐ **Favorites Watchlist** — Star any coin to add it to your personal watchlist, persisted across sessions
- 📊 **Detailed View** — Per-coin details including market cap, 24h high/low, trading volume, circulating supply, and all-time high
- 💾 **Offline Persistence** — Favorites are saved locally via `AsyncStorage` and restored on every launch
- 🌑 **Dark Theme** — Premium dark UI with a deep space color palette

---

## 📸 Screenshots

> _Add your screenshots here_

| Home | Favorites | Details |
|------|-----------|---------|
| ![Home]() | ![Favorites]() | ![Details]() |

---

## 🏗️ Tech Stack

| Technology | Role |
|---|---|
| [Expo](https://expo.dev) (SDK 54) | App framework & build toolchain |
| [React Native](https://reactnative.dev) (0.81) | Cross-platform mobile UI |
| [Expo Router](https://expo.github.io/router) | File-based navigation |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [NativeWind v4](https://www.nativewind.dev) | Tailwind CSS styling for React Native |
| [CoinGecko API](https://www.coingecko.com/en/api) | Free cryptocurrency market data |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage) | Persistent local storage |
| [EAS Build](https://docs.expo.dev/build/introduction) | Cloud builds for Android & iOS |

---

## 📁 Project Structure

```
crypto-tracker-lite/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx        # Home screen — live prices, search & filter
│   │   └── favoris.tsx      # Favorites screen — personal watchlist
│   ├── details.tsx          # Coin detail screen
│   └── _layout.tsx          # Root layout & navigation
├── components/
│   └── ui/
│       ├── CoinList.tsx     # Coin list item with price & favorite toggle
│       ├── CategorieCard.tsx # Filter category pill
│       └── DetailCard.tsx   # Stat card for detail screen
├── context/
│   └── FavoritesContext.tsx # Global favorites state & AsyncStorage logic
├── types/
│   └── index.ts             # Shared TypeScript types (CoinData, etc.)
├── constants/               # App-wide constants
├── hooks/                   # Custom React hooks
├── assets/                  # Icons, images, fonts
├── app.json                 # Expo app configuration
├── eas.json                 # EAS build profiles
└── tailwind.config.js       # NativeWind / Tailwind configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) — `npm install -g expo-cli`
- [Expo Go](https://expo.dev/go) app on your phone (for quick testing)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/crypto-tracker-lite.git
cd crypto-tracker-lite

# 2. Install dependencies
npm install

# 3. Start the development server
npx expo start
```

Then scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS).

### Running on a specific platform

```bash
# Android emulator
npx expo start --android

# iOS simulator (macOS only)
npx expo start --ios

# Web browser
npx expo start --web
```

---

## 📦 Build & Distribution

This project uses **EAS Build** for production-ready builds.

```bash
# Install EAS CLI
npm install -g eas-cli

# Log in to your Expo account
eas login

# Build for Android (preview APK)
eas build -p android --profile preview

# Build for iOS
eas build -p ios --profile preview
```

Build profiles are defined in [`eas.json`](./eas.json).

---

## 🔌 API

This app uses the free tier of the **CoinGecko API** — no API key required.

| Endpoint | Usage |
|---|---|
| `/coins/markets` | Fetch top coins by market cap with price data |

> **Note:** The free tier has rate limits. For production use, consider adding a caching layer or upgrading to a paid plan.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'feat: add my new feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Eunock**

</div>
