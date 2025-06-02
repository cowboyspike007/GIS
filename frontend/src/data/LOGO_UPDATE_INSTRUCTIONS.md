/* CRITICAL: Replace Logo with Your Actual Logo File */

TO USE YOUR ACTUAL AMP LOGO:

1. **Save your logo image** as "amp-logo.png" in the `/app/frontend/public/` folder

2. **Replace BOTH logo instances in HomePage.js:**

   **Navigation Logo (around line 109):**
   Find: src="data:image/png;base64,iVBORw0KGgo..."
   Replace with: src="/amp-logo.png"

   **Footer Logo (around line 830):**
   Find: src="data:image/png;base64,iVBORw0KGgo..."
   Replace with: src="/amp-logo.png"

3. **Logo specifications:**
   - Recommended width: 200-300px
   - Format: PNG with transparent background preferred
   - File size: Under 100KB for optimal loading

4. **After placing the logo file:**
   - Restart the frontend: `sudo supervisorctl restart frontend`
   - Clear browser cache to see updated logo

**Current placeholder will be replaced with your actual AMP logo once uploaded.**