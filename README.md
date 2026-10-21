# Palm Leaf Wisdom website

A simple, free-to-host website made with plain HTML, CSS and JavaScript.
No frameworks, no database, no paid tools.

---

## 1. What is in this folder

```
palm-leaf-website/
├── index.html           Home
├── about.html           About Us
├── services.html        Our Services
├── how-it-works.html    How It Works + FAQs
├── contact.html         Contact form, WhatsApp, details
├── privacy.html         Privacy Policy (DRAFT)
├── terms.html           Terms of Use (DRAFT)
├── 404.html             "Page not found"
├── favicon.svg          Placeholder icon (replace later)
├── robots.txt           Instructions for search engines
├── sitemap.xml          List of pages for search engines
├── README.md            This file
├── css/styles.css       All colours, fonts and layout
├── js/config.js         ALL business details live here
├── js/layout.js         Builds the menu and footer on every page
├── js/contact-form.js   Checks and sends the enquiry form
└── images/              Illustrations (our own artwork)
```

---

## 2. Open it on your computer (Chrome)

1. If you have a `.zip` file, **right-click it and choose Extract All.** Do not open files from inside the zip.
2. Open the extracted `palm-leaf-website` folder. You should see `index.html` and the folders `css`, `js` and `images`.
3. Double-click `index.html`. It opens in Chrome. No server is needed.
4. After you edit a file, save it and press **Ctrl + F5** in Chrome to refresh.

Free editor: VS Code (code.visualstudio.com). Windows Notepad also works.

---

## 3. Where to change things

| I want to change... | Edit this |
|---|---|
| Business name, email, phone, WhatsApp number, hours, address, social links, services, prices | `js/config.js` |
| Wording on a page | The page's `.html` file. Search for `[EDIT` |
| Colours and fonts | The top of `css/styles.css` (the `:root` block) |
| Menu links | The `pages` list in `js/layout.js`, and the `<noscript>` menu in each HTML file |
| Logo | Put the file in `images/`, then set `logo: "images/your-logo.png"` in `config.js` |
| Hero picture | Replace `images/hero-manuscript.svg`, or change the `src` in `index.html` |
| Page title and search description | The `<title>` and `<meta name="description">` near the top of each HTML file |
| Domain name | `domain` in `config.js`, plus `robots.txt` and `sitemap.xml` |

Anything still in `[SQUARE BRACKETS]` is a placeholder waiting for the client.

**Images:** only use photos that you or the client took, or that have a licence allowing commercial use (for example Unsplash, Pexels or Wikimedia Commons). Check the licence and any credit rules for every image.

---

## 4. Before the website goes live: checklist

- [ ] Search every file for `[` (VS Code: Ctrl + Shift + F). Replace every placeholder.
- [ ] Business hours, services, prices, reader name and biography filled in.
- [ ] `[DATE]` replaced on the Privacy and Terms pages.
- [ ] Privacy Policy and Terms **reviewed by a qualified professional**. They are drafts, not legal advice.
- [ ] No invented testimonials, qualifications, awards or guarantees anywhere.
- [ ] Contact form connected and tested (section 5).
- [ ] WhatsApp button tested (section 5).
- [ ] Checked on a real phone.
- [ ] `sitemap.xml` and `robots.txt` use the correct domain.

---

## 5. Set up and test the enquiry form and WhatsApp

A static website cannot send email by itself, so the form uses the free **Web3Forms** service (250 submissions a month on the free plan; check web3forms.com for current limits).

**Important: the form stays switched OFF until you add an access key.** Do not tell the client it works until you have received a real test message.

### Connect the form

1. Go to **web3forms.com** and create an Access Key using the email address that should receive enquiries (`palmleafwisdom@gmail.com`). The **client** should do this with his own email, so he owns the account.
2. The key arrives by email. It is safe to put in website code. It only sends messages to that inbox and cannot log in to anything.
3. Open `js/config.js`, paste it between the quotes: `formAccessKey: "PASTE-KEY-HERE"`. Save.
4. Refresh `contact.html`. The "Not connected yet" notice disappears and the Send button turns on.

Never put passwords or any other secret in these files.

### Test the form

1. Click Send with the form empty. Five red messages should appear and nothing is sent.
2. Type `abc` as the email. A "valid email" message should appear.
3. Fill the form properly and send. A green thank-you message should appear.
4. Check the inbox (and the spam folder). All five details should arrive.
5. Press Reply on that message. Check the reply goes to the test email address, not to Web3Forms.
6. Test again from a phone, and test again once the real domain is live.

### Test WhatsApp

1. In `config.js`, `whatsappNumber` must be digits only with the country code, no plus or spaces (for example `918015323929`).
2. Open the Contact page and click **Message us on WhatsApp**. WhatsApp should open with the greeting ready and the right number. Do not send anything.

---

## 6. Publish for free with GitHub Pages

GitHub Pages is free for **public** repositories, so the website files will be public. That is normal for a website, but never put secrets in them.

1. Create a free account at github.com. Turn on two-factor authentication.
2. Click **New repository**. Name it, for example, `palmleafwisdom-website`. Choose **Public**. Click **Create repository**.
3. Click **uploading an existing file**.
4. Open the extracted `palm-leaf-website` folder. Select **everything inside it** (not the folder itself), and drag it into the GitHub page. `index.html` must be at the top level of the repository, with `css`, `js` and `images` next to it.
5. Wait for all files to finish uploading, then click **Commit changes**.
6. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then click **Save**.
7. After one or two minutes, the page shows your address: `https://YOUR-USERNAME.github.io/palmleafwisdom-website/`. Open it and click through every page.

Other free options are Cloudflare Pages and Netlify. Check their current free plan terms first.

### Updating the live site later

Open the file in GitHub, click the pencil icon, edit, and click **Commit changes**. The site updates in a minute or two. To replace many files, use **Add file → Upload files** and upload over the old ones.

---

## 7. Connect the GoDaddy domain (palmleafwisdom.com)

You need access to the domain's DNS settings. Ask the client to use GoDaddy's **delegate access** feature for you instead of sharing his password. Menu names in GoDaddy can change slightly.

### Step A: Tell GitHub the domain

1. In the repository, go to **Settings → Pages**.
2. Under **Custom domain**, type `palmleafwisdom.com` and click **Save**. GitHub adds a file called `CNAME` to the repository.

### Step B: Edit the DNS records in GoDaddy

1. Sign in to GoDaddy, open **My Products**, and next to the domain click **DNS** (or **Manage DNS**).
2. **Remove or edit conflicting records** for the name `@`: any existing `A` record (often "Parked" or a website builder), and any `www` record that points somewhere else. **Do not delete** `MX` or `TXT` records. Those may be used for email.
3. Add four **A** records, all with Name `@`:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

4. Add one **CNAME** record:

| Type | Name | Value |
|---|---|---|
| CNAME | www | YOUR-USERNAME.github.io |

5. Save. These addresses come from GitHub's own documentation. Check docs.github.com (search "managing a custom domain for your GitHub Pages site") in case they change.

### Step C: Wait and check

1. DNS changes can take from a few minutes to 24 hours or more. You can check progress at dnschecker.org.
2. Back in **Settings → Pages**, GitHub shows whether the DNS check passed.
3. When it passes, tick **Enforce HTTPS**. If the box is greyed out, wait a while and refresh. This is normal.
4. Open `https://palmleafwisdom.com` and `https://www.palmleafwisdom.com`. Both should show the website.
5. Test the contact form again on the live domain.

Optional extra security: verify the domain in your GitHub account settings under Pages, which prevents others from claiming it.

---

## 8. Handing the website over to the client

- [ ] The client owns the GoDaddy domain, the Web3Forms account and (ideally) the GitHub repository. Either transfer the repository to his GitHub account or add him as a collaborator.
- [ ] Two-factor authentication is on for his GitHub, GoDaddy and Gmail accounts.
- [ ] You have shown him how to edit text (see `CLIENT-GUIDE.md`).
- [ ] He knows the domain renews every year and who pays.
- [ ] You have both tested the contact form and WhatsApp button on the live site.
- [ ] You have agreed in writing what is included, how many changes, and any monthly maintenance fee.
- [ ] No passwords were shared by message. Remove your access when you finish.

---

## 9. Troubleshooting

| Problem | Fix |
|---|---|
| Page looks plain, with no colours | You opened `index.html` from inside the zip. Extract the zip fully first. |
| Menu and footer are missing | `js/config.js` or `js/layout.js` is in the wrong folder or has a typo. Press F12 in Chrome and check the Console for red messages. |
| Images missing | The `images` folder is not next to `index.html`, or a file name is different. |
| Changes do not show | Press Ctrl + F5. On GitHub, wait a minute or two after committing. |
| Form button is greyed out | `formAccessKey` in `config.js` is empty. |
| Form says it could not be sent | Check the internet connection, the key, and that Web3Forms has not reached its monthly limit. |
| GitHub site shows 404 | Check Settings → Pages is set to `main` and `/ (root)`, and that `index.html` is at the top level. |
| Domain does not work | Check the DNS records match section 7, wait longer, and check dnschecker.org. |
| HTTPS box greyed out | Wait for the DNS check to pass, then refresh. |

---

## 10. Notes

- Fonts load from Google Fonts. The Privacy Policy mentions this. Remove the two Google Fonts `<link>` lines from each HTML file if you prefer no external requests. The site then uses fallback fonts.
- The illustrations in `images/` were created for this project. Replace them with the client's own photos or properly licensed images if desired.
- This website promises no outcomes. Keep it that way when editing.
