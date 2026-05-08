## 2026-05-08 - Added ARIA labels to icon-only buttons
**Learning:** The app makes extensive use of icon-only buttons via the `ibtn` and `fb-btn` classes without proper accessibility labels. Adding `aria-label` alongside the `title` attribute ensures both visual tooltips and screen reader compatibility.
**Action:** Ensure all future icon-only buttons include both `title` and `aria-label` attributes.
