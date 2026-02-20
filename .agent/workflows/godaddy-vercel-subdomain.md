---
description: How to connect blog.compliyug.com subdomain (GoDaddy) to Vercel
---

# Deploying to blog.compliyug.com

Follow these steps to connect your Vercel deployment to your GoDaddy subdomain.

### Step 1: Add the Domain in Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Select your `blog.compliyug` project.
3. Go to **Settings** > **Domains**.
4. Type `blog.compliyug.com` in the input field and click **Add**.
5. Vercel will show a "Configuration Error" initially—this is normal. Look for the **DNS Records** provided by Vercel (specifically the **CNAME** record).

### Step 2: Configure GoDaddy DNS
1. Log in to your [GoDaddy Portfolio](https://dcc.godaddy.com/manage/portfolio).
2. Find **compliyug.com** and click **DNS** (or Manage DNS).
3. Click **Add New Record**.
4. Enter the following details:
   - **Type**: `CNAME`
   - **Name (Host)**: `blog`
   - **Value (Points to)**: `cname.vercel-dns.com`
   - **TTL**: `1 Hour` (Default)
5. Save the record.

### Step 3: Verify in Vercel
1. Go back to your Vercel Domains settings.
2. Wait a few minutes (DNS propagation can take up to 48 hours, but usually takes 5-10 minutes).
3. Vercel will automatically detect the record and show a green **Valid Configuration** badge.
4. Your blog will now be live at `https://blog.compliyug.com`.

### Step 4: SSL (Automatic)
Vercel will automatically generate a Let's Encrypt SSL certificate once the domain is verified. You don't need to do anything else!
