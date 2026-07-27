# Silly Map

A D&D-style interactive map extension for SillyTavern designed for better roleplay visualization. 

Silly Map bridges the gap between text and visuals by giving your characters a physical space to exist in. Using context-aware AI, the extension reads your chat, automatically determines which location fits, opens it, and places the characters there based on the story. 

## Key Features

* **Context-Aware Automation:** The AI analyzes the ongoing story and automatically moves characters around the map. Prefer to be the Dungeon Master? You can easily move everything manually at any time.
* **Dynamic Room Context:** Locations can consist of one or multiple rooms. When a player or NPC is in a room, your regular AI automatically receives hidden context about exactly what is in there. Because of this, not only do you see the environment, but the characters also "see" what is in the room and can naturally interact with it.
* **Universal Compatibility:** You don't need any specific character cards for this extension. As long as the location fits the story, you can drop any character in. It’s absolutely perfect for scenarios where most events happen in a single place (like a tavern, a spaceship, or a mansion).
* **Bring Your Own Maps:** Use AI-generated images, find ready-made D&D battlemaps online, or draw your own. 
* **Custom Location Editor:** The extension pairs with a dedicated web-based Builder to easily set up grids, rooms, and interactive objects for your custom locations.

---

## Extension Installation

To install the Silly Map extension into your SillyTavern instance, follow these steps:

### Method A: Install via SillyTavern UI (Recommended)
1. In SillyTavern, open **Extensions** → **Install extension**.
2. Paste this repository's Git URL and install.
3. Enable **Silly Map** and refresh the page.

### Method B: Manual install
1. Download the latest `.zip` archive of this repository (click **Code > Download ZIP** or grab the latest version from the **Releases** tab).
2. Extract the downloaded archive.
3. Move the extracted folder into your SillyTavern third-party extensions directory.
   * **Target Path:** `[SillyTavern-Folder]/public/scripts/extensions/third-party/Silly-Map/`
4. Restart your SillyTavern server and refresh your browser page.
5. Enable **Silly Map** in the Extensions menu.

---

## Installing Locations (Maps)

Once the extension is installed, you can populate it with custom maps and locations from the community.

You can browse and download new environments from the **[Silly Map Marketplace](https://silly-map.nero-dev.online)**. 

There are two ways to install maps from the marketplace:

### Method A: Direct Install (Recommended)
If you are using a compatible browser (like Chrome, Edge, or Opera that supports the File System Access API):
1. Find a map on the Marketplace and click **Install**.
2. Grant the browser permission to read/write to your local SillyTavern folder.
3. The map files will be automatically placed in the correct directory.

### Method B: Manual Fallback (ZIP)
If direct installation is not supported by your browser:
1. Click **Download ZIP** on the desired map page in the Marketplace.
2. Extract the map folder.
3. Place the extracted map folder into the appropriate Silly Map locations directory within your SillyTavern folder.
   * **Target Path:** `[SillyTavern-Folder]/public/scripts/extensions/third-party/Silly-Map/assets/locations/`
4. In SillyTavern, open the extension menu, click **"Add location"**, and enter the exact folder name. Alternatively, manually add the folder name to the `locations_index.json` file.

---

## Data Persistence & Storage

All your downloaded locations, custom maps, and layout configurations are stored locally within your SillyTavern server directory.

* **Database File:** `locations_index.json` (located in the `assets/` folder).
* **Note:** This file acts as the registry for all your map configurations. It is highly recommended to back up this file periodically to prevent data loss, especially if you are migrating your SillyTavern server to a new machine.