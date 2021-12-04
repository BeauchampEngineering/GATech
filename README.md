# Portal Manager
An prototype system to assist with the management and organization of manufacturing equipment.

## Authorship <br />
Georgia Tech Junior Design 2021 <br />

Developed in Collaboration with Beauchamp Engineering <br />

Team 1133: Edward Jahoda, Aarun Srinivas, Himanish Reddy, Craig Nyazema, Ryan Ding <br />

## Installation Guide <br />
**Hardware Requirements:** <br />
  - Modern computation hardware (standard specs are acceptable)
  - Internet connection

**Software Requirements:** <br />
  - Web browser
  - Text editor
  - [Heroku](https://devcenter.heroku.com/articles/git#prerequisites-install-git-and-the-heroku-cli) (recommended for server hosting)
  - [git](https://git-scm.com/) (recommended for version control)
  - [github](https://github.com/) (recommended for managing git repositories)
  - [Android Studio Emulators](https://docs.expo.dev/workflow/android-studio-emulator/) (recommended for running application on computer)
 
**Dependencies** <br />
  - [Node.js](https://nodejs.org/en/) and any necessary dependencies.
  - [React Native Framework](https://reactnative.dev/docs/environment-setup). Expo Cli is recommended, though React Native Cli is also sufficient.  
  - React Native modules (see Build Instructions)

**Download** <br />

  - Download application file from the Release Notes (.ipa for iOS, .apk for Android).

**Build Instructions** <br />
  - Server (required if our server goes down)
    1. Upload contents of admin-web subfolder to github repository
    2. [Deploy repository with Heroku](https://devcenter.heroku.com/articles/git#prerequisites-install-git-and-the-heroku-cli)
  
  - Administrative Web Application <br />
    ```
    # cd into the directory ../GATech/admin-web/src
    
    # install dependencies
    npm install
    ```
  - Mobile Application <br />
    ```
    # cd into the directory ../GATech/app
    
    # install dependencies
    npm install --force
    
    # (optional) follow terminal instructions to build .ipa or .apk
    # for ios, see: https://docs.expo.dev/classic/building-standalone-apps/#if-you-choose-to-build-for-ios
    expo build:[ios:android]
    ```
 **Installation** <br />
   - To install mobile application on physical or virutal hardware, follow the installation instructions for your operating system and hardware. 
   - .ipa is for iOS, .apk is for Android
   - *To run application (and not necessarily install), see below*

 **Running the Application** <br />
   - Administrative Website 
   
      ```
      # cd into the directory ../GATech/admin-web/src
    
      # start
      npm start
      ```
      
   - Mobile Application
     ```
     # cd into the directory ../GATech/app
     npm start
     
     # running on physical phone
     # on the newly opened "Expo Developer" window on your browser, change "Connection" from "LAN" to "Tunnel"
     # (phone) install Expo Go from app store
     # (phone) scan QR code with camera and open link in Expo Go
     
     # running on emulator (Andriod Studio, computer)
     
     # If not done already, create virtual machine:
     # Configure -> AVD Manager -> Create Virtual Device
     # Pick device from Phone category and keep clicking the "next" button
     # Click finish
     
     # Configure -> AVD Manager
     # Click green arrow button next to desired device
     # Once device has booted up,on Expo Developer Browser Window, click "Run on Android Device/Emulator"
     ```
    
    
**Troubleshooting** <br />
   - Contact us via email.

## Release Notes v1.0.0 <br />
**Features:** <br />

- Minimalist Administrative Website (admin-web subdirectory)
  1. Create new user using email address and password.
  2. View all users in system.
  3. Create "group" with at least two users.
  4. View all groups in system.
  5. Assign groups to "assets". Each group can be assigned multiple assets, and each asset can be assigned to multiple groups.
  6. Delete groups from the system.
  7. Given an asset name, create a new asset.
  8. Given an asset id, simulate a fault by propagating notification.
  9. Given an asset id, simulate a fix by propagating notification.
  10. Download the database as a csv file.
  11. Populate the database using a csv file. Given the necessary assumptions made during development, the csv file will likely need significant preprocessing, and the functionality will likely need significant revision.
 
 
- Mobile Application (app subdirectory)
  1. Home Screen
      - (User) View recent log entries for assigned assets.
      - (User) View recent faults for assigned assets.
      - (User) View recent fixes for assigned assets.
      - (User) Receive real-time notifications for faults and fixes for assigned assets.
      - (User) Navigate to page for asset by clicking on entry.
      
  2. Assets Page
      - (User) View scroll-list of assigned assets.
      - (User) Search for assigned asset using asset name.
      - (User) Search for assigned asset using keyword found in log.
      - (User) View page for specific asset.
      - (User) In page for specific asset, view prior log entries.
      - (User) In page for specific asset, add new text log entry.

  3. Groups Page
      - (User) View assigned groups.
      - (User) For any assigned group, view all the users in the group.
      - (User) Send messages, which are delivered to all users in a group.
      - (User) For each group, view messages sent by another user in the same group.

  4. QR Scanner
      - Be redirected to page for asset after scanning corresponding QR code.

- Server (server subdirectory)
  1. Backend support for all of the above using persistent data storage and management.

**Bug Fixes:**
  - Adjusted fonts and colors for mobile application.
  - Fixed issue with navigation bar where pages no longer display after access.
  - Adjusted error message for scanned invalid QR codes.
  - Fixed bug where sent group messages only update after manually refreshing the page.
  - Adjusted UI presentation of group messages.
  - Fixed bug where fault/fix notifications failed to display properly.

**Known Bugs:**
  - Pages break if the "Assets" page is not first accessed using the navigation bar (prior to any other tasks).
  - A logged-in user is unable to log out.
  - New data (new users, groups) occasionally is lost after disconnection.



