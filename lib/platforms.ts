export type NextStep = {
  title: string
  body: string
  action?: { label: string; href: string }
}

export type Platform = {
  id: string
  name: string
  description: string
  logo: string
  logoBg: string
  pluginType: "native" | "custom" | "api"
  steps: Step[]
  connectionNote?: string
  whatNext?: NextStep[]
}

export type Step = {
  id: number
  title: string
  body: string
  image?: string
  codeBlocks?: { label: string; value: string }[]
  tip?: string
  action?: { label: string; href?: string }
}

export const PLATFORMS: Platform[] = [
  {
    id: "shopify",
    name: "Shopify",
    description: "Install via the Shopify App Store — native plugin",
    logo: "/logos/shopify.svg",
    logoBg: "bg-[#f0f8ee]",
    pluginType: "native",
    steps: [
      {
        id: 1,
        title: "Find TrueLoyal in the Shopify App Store",
        body: "Search for 'TrueLoyal Loyalty Rewards' in the Shopify App Store. Click Install to begin.",
        image: "https://files.readme.io/84db2514963754768114bca24e91e57acbf88b9b479e43a72efb15aca2781c55-Shopify_App_Store.png",
        action: { label: "Open Shopify App Store", href: "https://apps.shopify.com" },
        tip: "Make sure you're logged into the correct Shopify store before installing.",
      },
      {
        id: 2,
        title: "Select your store and install",
        body: "Select the store you want to connect TrueLoyal to, then click Install to authorize the app.",
        image: "https://files.readme.io/a5b50ef37beb628dceb2bfccb99d5943f31ad31930861d4f69e4bf9b560bdd45-Shopify_Install.png",
      },
      {
        id: 3,
        title: "Complete the setup wizard",
        body: "TrueLoyal will launch a setup wizard. Click through each screen and enter your store details when prompted.",
        image: "https://files.readme.io/402821be5a55690ba679ba0769c8760a4482675eaaca0946642292ec7fe5df40-image.png",
      },
      {
        id: 4,
        title: "Enter your enterprise activation code",
        body: "Enter the 8-digit enterprise activation code provided by your TrueLoyal onboarding manager.",
        image: "https://files.readme.io/8f0c1c06aa8110a9a7fb10096917b17bd1775f7533b553e6c293e3e1bd99f81f-image.png",
        tip: "Don't have your activation code? Contact your TrueLoyal onboarding manager.",
      },
      {
        id: 5,
        title: "Enable the app extension",
        body: "Click the arrow button to enable the Shopify app extension, then click the 'Go to Shopify' link.",
        image: "https://files.readme.io/ba3a158f6bbd9e462e1c7a5fbe9f29e5108f6e8ba368ec542cbe4cdde4e69090-WelcomeAboard.png",
      },
      {
        id: 6,
        title: "Turn on the Loyalty app extension in Shopify",
        body: "In your Shopify theme editor, enable the 'Loyalty app extension' toggle and save your changes.",
        image: "https://files.readme.io/115b95b1e4ed55d197a8bdd5605161617dea9dbe58995c0e8ec218e2497426e8-AppEmbedd.png",
        tip: "Make sure to click Save after toggling — unsaved changes won't take effect.",
      },
      {
        id: 7,
        title: "Mark as complete and launch",
        body: "Return to the TrueLoyal setup wizard and click 'Mark as complete'. Preview your site, then click Launch when ready.",
        image: "https://files.readme.io/911255573c3c7031962069364f9cce4ea99ea34f3895556ee9a189f8acba9d15-MarkAsComplete.png",
      },
    ],
    whatNext: [
      {
        title: "Set up your Activities",
        body: "Before testing, make sure at least one earning activity is active — typically 'Made a Purchase'. Go to TrueLoyal Admin → Activities and confirm the activity is enabled and has a points rule configured.",
        action: { label: "Open Activities", href: "https://app.trueloyal.com" },
      },
      {
        title: "Set up your Rewards",
        body: "Make sure at least one reward is active and available for redemption. Go to TrueLoyal Admin → Rewards and confirm a reward is published with a points cost set.",
        action: { label: "Open Rewards", href: "https://app.trueloyal.com" },
      },
      {
        title: "Place a test transaction",
        body: "In Shopify, go to Settings → Payments and enable the Bogus Gateway for testing. Place a test order using a registered member account. Use the credit card number 1 to simulate a successful transaction.",
        action: { label: "Shopify Bogus Gateway docs", href: "https://help.shopify.com/en/manual/checkout-settings/test-orders" },
      },
      {
        title: "Confirm points were awarded",
        body: "After the order is processed, go to TrueLoyal Admin → Activity and check that the transaction appears and points were awarded to the member. Allow up to 5 minutes for the first sync.",
        action: { label: "Open Activity Log", href: "https://app.trueloyal.com" },
      },
      {
        title: "Test redemption",
        body: "Log into the storefront as the test member and open the loyalty dashboard. Verify the points balance is correct, then redeem a reward. Confirm the coupon code is issued and can be applied at checkout.",
      },
    ],
  },
  {
    id: "vtex",
    name: "VTEX",
    description: "Configure via VTEX IO — native app",
    logo: "/logos/vtex.svg",
    logoBg: "bg-[#fff0f4]",
    pluginType: "native",
    steps: [
      {
        id: 1,
        title: "Get the TrueLoyal Connector from the VTEX App Store",
        body: "Go to apps.vtex.com, search for 'Zinrelo Connector', and click Get App. Enter your store URL when prompted.",
        image: "https://files.readme.io/fd0e895-image.png",
        action: { label: "Open VTEX App Store", href: "https://apps.vtex.com/zinrelopartnerus-zinrelo-connector/p" },
      },
      {
        id: 2,
        title: "Go to the install page",
        body: "Click 'Go to Install Page' to authorize the app in your VTEX admin. Log in with your VTEX credentials if prompted.",
        image: "https://files.readme.io/844523cc9bd04c59f2b84daa46b549fc551b203efe4d7a3c1309cb8d61f5aca6-8092f8d-image.png",
      },
      {
        id: 3,
        title: "Install via App Management",
        body: "In VTEX admin, go to Apps → Extension Hub → App Management. Search for 'TrueLoyal Connector' and click Install.",
        image: "https://files.readme.io/7ec8743da86904e974ea55ae1abf425e38e6d6bc49655a63679a6788d7a852c9-image.png",
        tip: "You need Admin Super (Owner) permissions to install apps.",
      },
      {
        id: 4,
        title: "Generate VTEX Application Keys",
        body: "Go to Account Settings → Application Keys → Manage Keys → Generate New. Label the key, assign the Owner (Admin Super) role, and click Generate. Save the key and token — you'll need them in the next step.",
        image: "https://files.readme.io/96f2115-image.png",
        tip: "Only Super Admins can generate application keys. The token is only shown once — copy it before closing.",
      },
      {
        id: 5,
        title: "Configure the TrueLoyal Connector settings",
        body: "Open the TrueLoyal Connector app settings. Enable the loyalty rewards module, then enter your Partner ID, API Key, and the VTEX App Key and Token you just generated.",
        image: "https://files.readme.io/03c2365fbfa6c7a21e3f43d0159472bc5ffda506f22a852d72cea2dc94a58bdc-ad512bb-image.png",
        tip: "Your Partner ID and API Key are in TrueLoyal Admin → General → Settings.",
      },
      {
        id: 6,
        title: "Add the loyalty dashboard to your storefront",
        body: "In your store's theme code, add the 'zinrelo-dashboard' block to the My Account page and any other pages where the dashboard should appear.",
        image: "https://files.readme.io/868062c-image.png",
        tip: "Adding the block to the My Account page is required. Product and cart page blocks are optional.",
      },
      {
        id: 7,
        title: "Set up in-cart redemption",
        body: "Go to Promotions → Create Promotion → Regular. Enter the reward name, set the discount type to match your TrueLoyal reward type (Nominal = Fixed Amount), and add the reward ID from TrueLoyal admin. Under Marketing Tags, add the reward_id.",
        image: "https://files.readme.io/30c56b6-image.png",
        tip: "The reward ID in VTEX must exactly match the redemption ID in TrueLoyal admin.",
      },
    ],
    whatNext: [
      {
        title: "Set up your Activities",
        body: "Before testing, confirm at least one earning activity is active — typically 'Made a Purchase'. Go to TrueLoyal Admin → Activities and verify the activity is enabled with a points rule.",
        action: { label: "Open Activities", href: "https://app.trueloyal.com" },
      },
      {
        title: "Set up your Rewards",
        body: "Confirm at least one reward is active and published with a points cost. Go to TrueLoyal Admin → Rewards.",
        action: { label: "Open Rewards", href: "https://app.trueloyal.com" },
      },
      {
        title: "Place a test order",
        body: "Place a test order in your VTEX store using a registered member account. VTEX has a sandbox/test environment you can use to simulate transactions without real payments.",
      },
      {
        title: "Confirm points were awarded",
        body: "After the order is processed, go to TrueLoyal Admin → Activity and confirm the transaction appears and points were awarded. Allow up to 5 minutes for the first sync.",
        action: { label: "Open Activity Log", href: "https://app.trueloyal.com" },
      },
      {
        title: "Test redemption",
        body: "Log in as the test member and open the loyalty dashboard. Verify the points balance, redeem a reward, and confirm the discount applies correctly at checkout via the VTEX promotion you configured.",
      },
    ],
  },
  {
    id: "bigcommerce",
    name: "BigCommerce",
    description: "Install from the BigCommerce App Marketplace",
    logo: "/logos/bigcommerce.svg",
    logoBg: "bg-[#f0f0f5]",
    pluginType: "native",
    steps: [
      {
        id: 1,
        title: "Find TrueLoyal in the BigCommerce App Marketplace",
        body: "In your BigCommerce admin, go to Apps → Marketplace and search for TrueLoyal. Click Get This App to begin installation.",
        image: "https://files.readme.io/e75ef46c8024f8647891677ad7c54bc4ac3b8029ac263bcfb10a5b80f518d85d-BC_App_Store.png",
        action: { label: "Open BigCommerce App Marketplace", href: "https://www.bigcommerce.com/apps/" },
      },
      {
        id: 2,
        title: "Complete installation and note your Partner ID",
        body: "After installation, BigCommerce will generate a TrueLoyal Partner ID and redirect you to the TrueLoyal console. If you already have a TrueLoyal account, replace the auto-generated Partner ID with your actual Partner ID in both JavaScripts on the page.",
        image: "https://files.readme.io/86ee51cf53f5b900f3b162c296f3e045d27c1016e356975f84b16b9b36828214-Afterinstall.png",
        tip: "Your Partner ID is in TrueLoyal Admin → General → Settings. Use this — not the auto-generated one.",
      },
      {
        id: 3,
        title: "Complete the setup wizard",
        body: "Follow the guided setup wizard to configure your loyalty program basics — program name, currency, earning rules, and branding.",
        image: "https://files.readme.io/0305cb7b3ed426baf398b79475a1e3885d1616849ddd75dc54775fa4a7643e06-Wizard.png",
      },
      {
        id: 4,
        title: "Activate your program in TrueLoyal admin",
        body: "Once the wizard is complete, go to TrueLoyal Admin and review your Activities and Rewards. When ready, activate the program.",
        action: { label: "Open TrueLoyal Admin", href: "https://app.trueloyal.com" },
      },
      {
        id: 5,
        title: "Set up in-cart rewards (recommended)",
        body: "To let members redeem points directly at checkout, go to Storefront → My Themes → Edit Theme Files. Find templates/components/cart/totals.html and paste the TrueLoyal in-cart code snippet. Contact your onboarding manager for the exact code block.",
        image: "https://files.readme.io/2e4f8e3-1.png",
        tip: "Note: when a member removes a coupon, points take up to 15 minutes to restore. Order returns do not automatically refund redeemed points.",
      },
    ],
    whatNext: [
      {
        title: "Set up your Activities",
        body: "Confirm at least one earning activity is active — typically 'Made a Purchase'. Go to TrueLoyal Admin → Activities and verify a points rule is configured.",
        action: { label: "Open Activities", href: "https://app.trueloyal.com" },
      },
      {
        title: "Set up your Rewards",
        body: "Confirm at least one reward is published with a points cost. Go to TrueLoyal Admin → Rewards.",
        action: { label: "Open Rewards", href: "https://app.trueloyal.com" },
      },
      {
        title: "Place a test order",
        body: "In BigCommerce admin, go to Settings → Payments and enable the Test Payment Gateway. Place a test order using a registered member account to trigger a points transaction.",
      },
      {
        title: "Confirm points were awarded",
        body: "After the order processes, go to TrueLoyal Admin → Activity and confirm the transaction appears and points were awarded. Allow up to 5 minutes for the first sync.",
        action: { label: "Open Activity Log", href: "https://app.trueloyal.com" },
      },
      {
        title: "Test redemption",
        body: "Log in as the test member and open the loyalty dashboard. Verify the points balance, redeem a reward, and confirm the coupon applies at checkout.",
      },
    ],
  },
  {
    id: "woocommerce",
    name: "WooCommerce",
    description: "Install via WordPress plugin",
    logo: "/logos/woocommerce.svg",
    logoBg: "bg-[#f7f0f7]",
    pluginType: "native",
    steps: [
      {
        id: 1,
        title: "Install the TrueLoyal plugin from WordPress",
        body: "In your WordPress admin, go to Plugins → Add New Plugin. Search for 'TrueLoyal' and click Install Now.",
        image: "https://files.readme.io/c756ca9b3f7b99fc82f7a8faff9172ea85b9748e234ac64e416e9240e994dd3d-image.png",
      },
      {
        id: 2,
        title: "Activate the plugin",
        body: "Once installed, click Activate. You should see TrueLoyal appear in your active plugins list.",
        image: "https://files.readme.io/4df7e7d2d0b0c34dae448c69718105a21d7cce7dee1d8e2174d175a475e0b946-image.png",
      },
      {
        id: 3,
        title: "Open TrueLoyal settings and enter your credentials",
        body: "Go to WooCommerce → Settings → TrueLoyal tab. Enable the integration, then enter your Partner ID, API Key, and API Key Identifier.",
        image: "https://files.readme.io/5f7a23d1cda2d6ea5b16580100e394d7b8dc8725eeedfc7bdf8e0ae3149f3006-Untitled_design_1.png",
        tip: "Your Partner ID and API Key are in TrueLoyal Admin → General → Settings. The API Key Identifier is the label you assigned when generating the key.",
      },
      {
        id: 4,
        title: "Enable points display on product pages",
        body: "In the TrueLoyal settings tab, enable the reward points toggle for product pages. Customise the display text using the {{EARN_POINTS}} placeholder to show how many points a purchase earns.",
        image: "https://files.readme.io/b5fcb9b-image.png",
        tip: "Example: 'Earn {{EARN_POINTS}} points with this purchase.'",
      },
      {
        id: 5,
        title: "Enable cart page rewards",
        body: "Enable the cart page rewards toggle. Customise the display text using {{AVAILABLE_POINTS}} to show the member's redeemable balance on the cart.",
        image: "https://files.readme.io/2854f28-image.png",
      },
      {
        id: 6,
        title: "Configure webhooks",
        body: "Go to WooCommerce → Settings → Advanced → Webhooks and click Add Webhook. Set status to Active, select the required order topics (order.created, order.status_processing, order.partially_refunded), enter the webhook delivery URL from TrueLoyal admin, and save.",
        image: "https://files.readme.io/b3d05b1-image.png",
        tip: "Contact your TrueLoyal onboarding manager for the webhook delivery URL specific to your store.",
      },
      {
        id: 7,
        title: "Set up reward coupons in WooCommerce",
        body: "For each TrueLoyal reward, create a matching coupon in WooCommerce → Coupons → Add Coupon. Set the discount type (Fixed Cart, Percentage, or Free Shipping), limit usage to 1 per coupon and 1 per user, and make sure the coupon code matches exactly what's configured in TrueLoyal admin.",
        image: "https://files.readme.io/8e76acb-image_1.png",
        tip: "Coupon codes are case-sensitive — double-check they match on both sides exactly.",
      },
    ],
    whatNext: [
      {
        title: "Set up your Activities",
        body: "Confirm at least one earning activity is active — typically 'Made a Purchase'. Go to TrueLoyal Admin → Activities and verify a points rule is configured.",
        action: { label: "Open Activities", href: "https://app.trueloyal.com" },
      },
      {
        title: "Set up your Rewards",
        body: "Confirm at least one reward is published and the coupon code matches the one you created in WooCommerce. Go to TrueLoyal Admin → Rewards.",
        action: { label: "Open Rewards", href: "https://app.trueloyal.com" },
      },
      {
        title: "Place a test order",
        body: "In WooCommerce → Settings → Payments, enable the Cheque gateway for testing. Place a test order as a registered member account to trigger a points transaction.",
      },
      {
        title: "Confirm points were awarded",
        body: "After the order is placed, go to TrueLoyal Admin → Activity and confirm the transaction appears and points were awarded. Allow up to 5 minutes for the first sync.",
        action: { label: "Open Activity Log", href: "https://app.trueloyal.com" },
      },
      {
        title: "Test redemption",
        body: "Log in as the test member, open the loyalty dashboard, redeem a reward, and confirm the generated coupon code applies correctly at WooCommerce checkout.",
      },
    ],
  },
  {
    id: "magento",
    name: "Magento / Adobe Commerce",
    description: "Install via Composer or manual module upload",
    logo: "/logos/magento.svg",
    logoBg: "bg-[#fff5f0]",
    pluginType: "native",
    steps: [
      {
        id: 1,
        title: "Get the extension from Magento Marketplace",
        body: "Visit the Magento Marketplace, find the TrueLoyal Loyalty Rewards extension, select edition Open Source (CE) and version 2.4, add to cart and complete checkout. Then click Install.",
        image: "https://files.readme.io/b43faf3-image.png",
        action: { label: "Open Magento Marketplace", href: "https://marketplace.magento.com" },
        tip: "You'll need a Magento account to purchase and install extensions from the Marketplace.",
      },
      {
        id: 2,
        title: "Install via Composer",
        body: "SSH into your Magento server and run the Composer require command to pull in the extension.",
        codeBlocks: [
          { label: "Install extension", value: "composer require TrueLoyal/extension" },
        ],
        tip: "Alternatively, download the ZIP from the TrueLoyal GitHub repo, create the directory app/code/TrueLoyal/LoyaltyRewards, and extract it there.",
      },
      {
        id: 3,
        title: "Enable the module and run setup",
        body: "Enable the TrueLoyal module and run the Magento upgrade and cache commands to complete installation.",
        codeBlocks: [
          {
            label: "CLI commands",
            value: "php bin/magento module:enable TrueLoyal_LoyaltyRewards\nphp bin/magento setup:upgrade\nphp bin/magento cache:clean",
          },
        ],
      },
      {
        id: 4,
        title: "Navigate to TrueLoyal settings in admin",
        body: "In Magento admin, go to Stores → Configuration → TrueLoyal Loyalty Rewards → TrueLoyal Settings.",
        image: "https://files.readme.io/ff6765245509f1d8189d0806223c60cb7c3b97cef2380f95017fe63142d87ed5-Untitled_design_5.png",
      },
      {
        id: 5,
        title: "Enter your credentials and configure settings",
        body: "Enter your Partner ID, API Key, and API Key Identifier. Configure reward events, product page points display, and any other settings for your store.",
        image: "https://files.readme.io/54ce2b5bcc0dfeeb4156a82e273777bb18deb97be5fa8f485f07a4378f018f2a-image_9.png",
        tip: "Your Partner ID and API Key are in TrueLoyal Admin → General → Settings.",
      },
      {
        id: 6,
        title: "Enable in-cart redemption",
        body: "In the TrueLoyal settings, enable the in-cart functionality toggle. This lets members select and apply a reward directly from the cart page before checkout.",
        image: "https://files.readme.io/147398d-image.png",
      },
      {
        id: 7,
        title: "Verify the frontend display",
        body: "Visit a product page and your cart as a logged-in member to confirm the loyalty dashboard button, points display, and reward dropdown are all rendering correctly.",
        image: "https://files.readme.io/0b11fb0-unnamed_3.png",
      },
    ],
    whatNext: [
      {
        title: "Set up your Activities",
        body: "Confirm at least one earning activity is active — typically 'Made a Purchase'. Go to TrueLoyal Admin → Activities and verify a points rule is configured.",
        action: { label: "Open Activities", href: "https://app.trueloyal.com" },
      },
      {
        title: "Set up your Rewards",
        body: "Confirm at least one reward is published with a points cost. Go to TrueLoyal Admin → Rewards.",
        action: { label: "Open Rewards", href: "https://app.trueloyal.com" },
      },
      {
        title: "Place a test order",
        body: "Place a test order in Magento using a registered customer account. Use a sandbox or test payment method to avoid real transactions.",
      },
      {
        title: "Confirm points were awarded",
        body: "After the order processes, go to TrueLoyal Admin → Activity and confirm the transaction appears and points were awarded. Allow up to 5 minutes for the first sync.",
        action: { label: "Open Activity Log", href: "https://app.trueloyal.com" },
      },
      {
        title: "Test redemption",
        body: "Log in as the test member, open the loyalty dashboard, redeem a reward, and confirm the discount applies correctly in the Magento cart.",
      },
    ],
  },
  {
    id: "miva",
    name: "Miva",
    description: "Module-based integration via Miva admin",
    logo: "/logos/miva.svg",
    logoBg: "bg-[#f0f6ff]",
    pluginType: "native",
    steps: [
      {
        id: 1,
        title: "Download and install the TrueLoyal module",
        body: "Download the TrueLoyal module (zinrelo.mvc) from the GitHub repository. In Miva admin, go to Home → Modules, click Add Module, upload the file, and click Add. Then go to Utility Settings → Add/Remove Modules and click Install.",
        image: "https://files.readme.io/6251cd42fd54a6d9170e4051562bfe2d9ae6fe4825c2509032bc213403b14d5d-1ea3d99343f9dd47b8d6b45f0477324d2b1a485585c0ed70ff59f22e71201778-image.png",
        tip: "Contact your TrueLoyal onboarding manager for the download link to the latest zinrelo.mvc file.",
      },
      {
        id: 2,
        title: "Enable the integration and enter your credentials",
        body: "Go to Settings → Utilities → More → TrueLoyal Settings. Enable the integration toggle, then enter your Partner ID, API Key, and API Key Identifier.",
        image: "https://files.readme.io/864f398f5e639f9b0e489d72870694c828b317a41a29a294abdf484fe5953096-image.png",
        tip: "Your Partner ID and API Key are in TrueLoyal Admin → General → Settings.",
      },
      {
        id: 3,
        title: "Configure product page points display",
        body: "Set 'Enable Reward Points Text on Product Pages' to Yes. Enter your display text using the {{EARN_POINTS}} placeholder to show how many points a product earns.",
        image: "https://files.readme.io/d2f62569cf0ea31963af28c4fd38786ab8e2f2de9ad5bbbdc34c9c90c1a7991b-image.png",
        tip: "Example: 'Buy this and earn {{EARN_POINTS}} points.'",
      },
      {
        id: 4,
        title: "Enable in-cart redemption",
        body: "Set 'In-cart redemption' to Yes and configure the cart text using the {{AVAILABLE_POINTS}} placeholder to show the member's redeemable balance.",
        image: "https://files.readme.io/100fbcd0197cbf306b34e071868d27a1ba70abedd960c7edc5bf8e0cb3559320-image.png",
      },
      {
        id: 5,
        title: "Set up Order Workflow Authentication",
        body: "Go to Settings → Utilities → More → Order Workflow Authentication Credentials. Click Add Authentication Credentials, set Description to 'TrueLoyal Authentication', select Basic Authentication, enter Username as 'TrueLoyal', and use your API Key as the password. Save.",
        image: "https://files.readme.io/9a1e8403dbae1c0a9c052c317e4cd5e569658aabb522a8419ff437d673064596-image.png",
        tip: "This step is required for order events (points awards and deductions) to fire correctly.",
      },
      {
        id: 6,
        title: "Generate and upload coupon codes",
        body: "In Miva, go to Marketing → Add Price Group and create a Coupon Only price group for each reward type. Then generate coupon codes under that price group, export them to CSV, and upload them to TrueLoyal Admin → Rewards → Manage Codes.",
        image: "https://files.readme.io/450b69dca8f423acc5cf79b7fc355acc241345eb068047ecdb10fa89909102f3-image.png",
        tip: "Each reward in TrueLoyal needs its own matching pool of coupon codes in Miva. Keep the code prefixes consistent so they're easy to track.",
      },
    ],
    whatNext: [
      {
        title: "Set up your Activities",
        body: "Confirm at least one earning activity is active — typically 'Made a Purchase'. Go to TrueLoyal Admin → Activities and verify a points rule is configured.",
        action: { label: "Open Activities", href: "https://app.trueloyal.com" },
      },
      {
        title: "Set up your Rewards",
        body: "Confirm at least one reward is published and has coupon codes loaded. Go to TrueLoyal Admin → Rewards.",
        action: { label: "Open Rewards", href: "https://app.trueloyal.com" },
      },
      {
        title: "Place a test order",
        body: "Place a test order in Miva using a registered member account to trigger a points transaction.",
      },
      {
        title: "Confirm points were awarded",
        body: "After the order processes, go to TrueLoyal Admin → Activity and confirm the transaction appears and points were awarded. Allow up to 5 minutes for the first sync.",
        action: { label: "Open Activity Log", href: "https://app.trueloyal.com" },
      },
      {
        title: "Test redemption",
        body: "Log in as the test member, open the loyalty dashboard, redeem a reward, and confirm the Miva coupon applies correctly at checkout.",
      },
    ],
  },
  {
    id: "netsuite",
    name: "NetSuite",
    description: "API-level integration — configured by your dev team",
    logo: "/logos/netsuite.svg",
    logoBg: "bg-[#f0f6ff]",
    pluginType: "api",
    connectionNote:
      "NetSuite integration requires a developer to configure the SuiteScript bundle. Your TrueLoyal onboarding manager will coordinate this with your team.",
    steps: [
      {
        id: 1,
        title: "Share your TrueLoyal credentials with your dev team",
        body: "Your developers will need your Partner ID and API Key before installing the bundle. Go to TrueLoyal Admin → Settings → API and copy both values. Ask your TrueLoyal onboarding manager for the current NetSuite bundle ID at the same time.",
        codeBlocks: [
          {
            label: "TrueLoyal API base URL",
            value: "https://api.zinrelo.com/v2",
          },
        ],
        tip: "Your Partner ID is different from your account email — find it specifically under Settings → API in TrueLoyal admin.",
        action: { label: "Open TrueLoyal Admin", href: "https://app.trueloyal.com" },
      },
      {
        id: 2,
        title: "Search for and install the TrueLoyal bundle",
        body: "In NetSuite, navigate to Customization → SuiteBundler → Search & Install Bundles. Search for TrueLoyal using the bundle ID provided by your onboarding manager. Select it from the results and click Install — you'll see the Preview Bundle Install screen showing the available components before confirming.",
        image: "https://files.readme.io/ff960b5f4d138b44bdb3b2c1880dc3c638db0c70f4372deb6d4a1b153f0f219c-Screenshot_2026-07-02_at_20.58.31.png",
        tip: "Review the component list on the preview screen before confirming — it should include SuiteScripts, custom records, and saved searches.",
      },
      {
        id: 3,
        title: "Verify the bundle installed successfully",
        body: "After installation completes, go to Customization → SuiteBundler → Bundles → List to confirm the TrueLoyal bundle appears with a green checkmark. If it shows an error status, contact your TrueLoyal onboarding manager before proceeding.",
        image: "https://files.readme.io/0e98801-12.png",
      },
      {
        id: 4,
        title: "Open TrueLoyal Configuration and enter your credentials",
        body: "Navigate to the TrueLoyal Configuration page in NetSuite (the path appears in your menu after the bundle installs). Enter your Partner ID and API Key, set your website name, and save. The configuration screen will also prompt you to map the fields TrueLoyal reads from your NetSuite records.",
        image: "https://files.readme.io/ec8740c1b94d063d7dda10ffcb24b21aa7bbbf0b29f434a9624b308cdbb49b7a-image.png",
        tip: "The website name field must match what TrueLoyal has on file for your account — confirm it with your onboarding manager if unsure.",
      },
      {
        id: 5,
        title: "Map your Sales Order fields to the Purchase API",
        body: "In the configuration screen, map your NetSuite Sales Order fields to the TrueLoyal Purchase API parameters. TrueLoyal needs: customer email, order total, transaction ID, and order date. Map any custom fields your account uses here — standard fields alone may not be sufficient if your NetSuite setup uses custom transaction records.",
        image: "https://files.readme.io/f361197-12.png",
        codeBlocks: [
          {
            label: "Minimum required field mappings",
            value: "Customer email → member identifier\nOrder amount → points calculation base\nTransaction ID → deduplication key\nOrder date → activity timestamp",
          },
        ],
        tip: "TrueLoyal uses the transaction ID to deduplicate — if the same order is sent twice, points will only be awarded once. Make sure this maps to a field that is unique per order.",
      },
      {
        id: 6,
        title: "Configure the Returns API and run a test order",
        body: "If you process returns in NetSuite, map your Return Authorization fields in the Returns API section of the configuration — this allows TrueLoyal to deduct points when an order is refunded. Once configuration is complete, create a test customer with a real email, place a test Sales Order, and check TrueLoyal Admin → Activity to confirm the transaction and points appear.",
        image: "https://files.readme.io/67fde58-12.png",
        tip: "If the test transaction doesn't appear after 10 minutes, check Customization → Scripting → Script Deployments in NetSuite for any error output from the TrueLoyal SuiteScripts.",
        action: { label: "Open TrueLoyal Activity Log", href: "https://app.trueloyal.com" },
      },
    ],
    whatNext: [
      {
        title: "Set up your Activities",
        body: "Confirm at least one earning activity is active — typically 'Made a Purchase'. Go to TrueLoyal Admin → Activities and verify a points rule is configured with your NetSuite order currency.",
        action: { label: "Open Activities", href: "https://app.trueloyal.com" },
      },
      {
        title: "Set up your Rewards",
        body: "Configure at least one published reward with coupon codes loaded. For NetSuite customers, coupon codes need to be valid in your NetSuite promotions or discount records.",
        action: { label: "Open Rewards", href: "https://app.trueloyal.com" },
      },
      {
        title: "Embed the loyalty dashboard",
        body: "Add the TrueLoyal EUD (End-User Dashboard) iframe to your customer portal or account page. Get the embed snippet from TrueLoyal Admin → Embed Code. Your dev team will need to inject the member's email into the embed script.",
        action: { label: "View Embed Docs", href: "https://help.trueloyal.com" },
      },
      {
        title: "Test a full member journey",
        body: "As a test customer: enroll in the loyalty program, place an order that advances to your trigger status, confirm points appear in the EUD, then redeem a reward and verify the coupon applies in NetSuite checkout.",
      },
      {
        title: "Schedule a pre-launch review with your onboarding manager",
        body: "Before going live, review the full member journey with your TrueLoyal onboarding manager — including points earn, redemption, EUD display, and any tier or referral mechanics you've configured.",
      },
    ],
  },
  {
    id: "custom",
    name: "Custom / Headless",
    description: "Direct API integration using TrueLoyal REST API",
    logo: "/logos/custom.svg",
    logoBg: "bg-gray-50",
    pluginType: "api",
    connectionNote:
      "Custom integrations require a developer to implement the TrueLoyal API calls directly. Your onboarding manager can provide API documentation and technical support.",
    steps: [
      {
        id: 1,
        title: "Get your API credentials",
        body: "Your developer will need your Partner ID and API Key. Go to TrueLoyal Admin → Settings → API to copy both. Every API request must include these as headers.",
        codeBlocks: [
          {
            label: "Base URL",
            value: "https://api.zinrelo.com/v2",
          },
          {
            label: "Required request headers",
            value: "partner-id: YOUR_PARTNER_ID\napi-key: YOUR_API_KEY\nContent-Type: application/json",
          },
        ],
        action: { label: "Open API Reference", href: "https://help.trueloyal.com/reference" },
        tip: "Your Partner ID is not your account email — find it specifically under Settings → API.",
      },
      {
        id: 2,
        title: "Enroll members at registration",
        body: "When a customer creates an account or first logs in, call the member enroll endpoint. TrueLoyal will create their loyalty profile. If the member already exists, the call acts as an upsert — safe to call on every login.",
        codeBlocks: [
          {
            label: "Enroll a member",
            value: "POST https://api.zinrelo.com/v2/loyalty/members/enroll\n\n{\n  \"email\": \"member@example.com\",\n  \"first_name\": \"Jane\",\n  \"last_name\": \"Doe\"\n}",
          },
        ],
        tip: "Include as many profile fields as possible at enrollment (phone, birthdate, address) — these power segmentation and personalization features in TrueLoyal.",
      },
      {
        id: 3,
        title: "Award points on purchase",
        body: "After a successful, fulfilled order, call the award points endpoint. Pass the member's email, the order total, and a unique transaction ID. TrueLoyal uses the transaction ID to deduplicate — the same order ID will never award points twice.",
        codeBlocks: [
          {
            label: "Award purchase points",
            value: "POST https://api.zinrelo.com/v2/loyalty/activity/purchase\n\n{\n  \"email\": \"member@example.com\",\n  \"order_total\": 89.99,\n  \"transaction_id\": \"ORDER-12345\"\n}",
          },
        ],
        tip: "Fire this only on fulfilled/paid orders — not on order creation. Triggering on order creation means members earn points on orders that may later be cancelled or refunded.",
      },
      {
        id: 4,
        title: "Configure the EUD embed URL in TrueLoyal admin",
        body: "Before adding the embed snippet to your site, register your account page URL in TrueLoyal. Go to TrueLoyal Admin → Design → User Dashboard → Advanced → Embed Dashboard, and add the URL pattern of the page where you'll embed the dashboard. This tells TrueLoyal which pages are allowed to host it.",
        image: "https://files.readme.io/1c0168811164d94c64a3fb835bad3494eea559679f26774e86df542743d25f17-image.png",
        tip: "URL patterns support wildcards — e.g. https://yourstore.com/account/* covers all account sub-pages.",
      },
      {
        id: 5,
        title: "Copy and add the embed snippet with JWT authentication",
        body: "In TrueLoyal Admin → Design → User Dashboard → Advanced → Embed Dashboard, copy the embed code snippet. Add it to your account page. The snippet uses a JWT to authenticate the logged-in member — your backend must generate a signed JWT and pass it as jwt_token so the dashboard loads that member's data.",
        image: "https://files.readme.io/1a6dfef1bfd1aa190f3e0984e01b6f98724add55c387df3729372217c93f12eb-image.png",
        codeBlocks: [
          {
            label: "EUD init snippet with JWT",
            value: "<script type=\"text/javascript\">\nwindow._zrl = window._zrl || [];\n\nlet init_data = {\n  'partner_id': 'YOUR_PARTNER_ID',\n  'jwt_token': '{{ server_generated_jwt }}',\n  'version': 'v2',\n  'server': 'https://app.zinrelo.com',\n};\n_zrl.push(['init', init_data]);\n</script>\n<script src=\"//cdn.zinrelo.com/js/all.js\" type=\"text/javascript\"></script>",
          },
        ],
        tip: "The JWT payload must include the member's email and be signed with your TrueLoyal API secret. Never generate the JWT on the client — it must come from your backend so the secret stays private.",
        action: { label: "JWT authentication docs", href: "https://help.trueloyal.com/docs/authentication-javascript" },
      },
      {
        id: 6,
        title: "Configure webhooks for real-time events",
        body: "Go to TrueLoyal Admin → Notifications → Webhooks and create a webhook endpoint. Enter your server's URL, a secret key for signature verification, and select which events to subscribe to (points earned, reward redeemed, tier change, etc.). TrueLoyal will POST a signed payload to your endpoint each time a subscribed event fires.",
        image: "https://files.readme.io/06f16321cdb44bb521e347f63ab9eaaf3468fc13a93b2e52beab26249929c4f8-image.png",
        codeBlocks: [
          {
            label: "Webhook signature verification (Python)",
            value: "import hmac, hashlib\n\nsignature = request.headers.get('x-zinrelo-signature')\nnonce = request.headers.get('nonce')\nbody = str(request.data, 'utf-8')\nmessage = f\"{body}:{nonce}\"\ncomputed = hmac.new(\n    secret_key.encode(),\n    message.encode('utf-8'),\n    hashlib.sha512\n).hexdigest()\nassert hmac.compare_digest(computed, signature)",
          },
        ],
        tip: "Always verify the webhook signature before processing the payload — this confirms the request came from TrueLoyal and hasn't been tampered with.",
        action: { label: "Webhook docs", href: "https://help.trueloyal.com/docs/1413700-introduction-to-webhooks" },
      },
      {
        id: 7,
        title: "Test end-to-end",
        body: "Call the enroll API with a test member email, then call the purchase API with a test order. Confirm the transaction appears in TrueLoyal Admin → Activity. Open the EUD on your account page and verify the correct balance shows. Redeem a reward and confirm the coupon arrives via your webhook endpoint.",
        tip: "Use a real email address you control during testing — TrueLoyal sends transactional emails on key events (points earned, reward redeemed) that are worth verifying alongside the API responses.",
        action: { label: "Open Activity Log", href: "https://app.trueloyal.com" },
      },
    ],
    whatNext: [
      {
        title: "Set up your Activities",
        body: "Confirm your earning activities are configured in TrueLoyal Admin → Activities. At minimum, 'Made a Purchase' should be active and pointed to the correct points-per-dollar rule.",
        action: { label: "Open Activities", href: "https://app.trueloyal.com" },
      },
      {
        title: "Set up your Rewards",
        body: "Configure at least one published reward with coupon codes loaded. For custom integrations, confirm your checkout system accepts the coupon format TrueLoyal generates.",
        action: { label: "Open Rewards", href: "https://app.trueloyal.com" },
      },
      {
        title: "Configure webhooks",
        body: "Set up a webhook endpoint in TrueLoyal Admin → Webhooks for real-time event notifications (points earned, rewards redeemed, tier changes). Your developer will need to build the receiving endpoint and handle the event payload.",
        action: { label: "Open TrueLoyal Admin", href: "https://app.trueloyal.com" },
      },
      {
        title: "Review the full API reference",
        body: "Beyond member enroll and purchase activity, the API supports custom activities, points adjustments, member lookups, and more. Your developer should review the full reference before finalising the integration.",
        action: { label: "API Reference", href: "https://help.trueloyal.com/reference" },
      },
      {
        title: "Schedule a pre-launch review",
        body: "Before going live, walk through the full member journey with your TrueLoyal onboarding manager — enroll, earn, redeem, EUD display — and confirm all webhook events are being received correctly.",
      },
    ],
  },
]
