# Credentials Setup - Guido Monaco B&B

## Quick Start

1. **Copy the template**:
   ```bash
   cp .env.example .env
   ```
   (Already done - `.env` file exists)

2. **Fill in your credentials** in `.env` file

3. **Never commit** the `.env` file to git (it's in `.gitignore`)

---

## Priority Order (What to Fill First)

### 🔥 URGENT - Need These NOW

**1. Google Business Profile** (Top priority for local SEO)
```env
GOOGLE_BUSINESS_EMAIL=your-email@gmail.com
GOOGLE_BUSINESS_PASSWORD=your-password
```
- Use the Google account that will own the listing
- We'll get PROFILE_ID after creating the listing

**2. Instagram @guidomonacobnb** (For manual posting)
```env
INSTAGRAM_USERNAME=guidomonacobnb
INSTAGRAM_PASSWORD=your-password
INSTAGRAM_EMAIL=email-used-for-instagram
```
- This lets me post feed content manually
- Automation is separate (already running)

### 📊 IMPORTANT - Need Soon

**3. Google Analytics** (For tracking traffic)
```env
GA4_PROPERTY_ID=G-XXXXXXXXXX
```
- Get this from Google Analytics dashboard
- OR let me create a new GA4 property for you

**4. Google Search Console** (Already verified, but add email for completeness)
```env
GOOGLE_SEARCH_CONSOLE_EMAIL=your-email@gmail.com
```

### 📧 OPTIONAL - Nice to Have

**5. Email/SMTP** (For future contact forms)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=noreply@guidomonaco.com
```

**6. Booking.com** (If you have dashboard access)
```env
BOOKING_COM_EMAIL=your-booking-email
BOOKING_COM_PASSWORD=your-booking-password
```

**7. Homes in Florence** (Property management)
```env
HOMES_IN_FLORENCE_EMAIL=
HOMES_IN_FLORENCE_PASSWORD=
```

---

## Already Configured (Don't Touch)

These are already filled in and working:

```env
# Blogger outreach APIs
BRAVE_SEARCH_API_KEY=BSAO4tWR2urmUMRMHNEEProCdIFmEgr
HUNTER_IO_API_KEY=1ed178ec56106e8b44c5b1e928bc3da09b84b692
RESEND_API_KEY=re_ao7WzMnv_DtafM2SxgEDDe2GQGyMgrtVj

# Site URL
NEXT_PUBLIC_SITE_URL=https://florence-blog.vercel.app
```

---

## How to Share Credentials with Cay

### Option 1: Fill .env Directly (Recommended)
1. Open `/Users/cuong/clawd/florence-blog/.env`
2. Fill in the credentials
3. Done! I can read them locally

### Option 2: Send via Private Message
If you prefer not to store on disk:
1. Send credentials via Telegram DM
2. I'll add them to .env
3. You can verify/change later

### Option 3: Use a Password Manager
1. Store in 1Password, LastPass, etc.
2. Share the vault/entry with me
3. I'll copy to .env

---

## Security Notes

✅ **Safe**:
- `.env` is in `.gitignore` (won't be committed)
- Only exists on your local machine
- Only you and I have access

❌ **Never**:
- Commit `.env` to git
- Share `.env` publicly
- Use production credentials in example files

---

## What Happens Next

Once you fill in credentials:

**Google Business Profile** → I'll create/optimize the listing  
**Instagram** → I'll start posting feed content  
**GA4** → I'll set up tracking  
**Email** → I'll add contact forms

---

## File Locations

- **Template**: `.env.example` (safe to commit, no credentials)
- **Actual**: `.env` (YOUR credentials, never committed)
- **This guide**: `CREDENTIALS.md`

---

## Questions?

Ask me in the Guido Monaco group or DM!
