# Automation Assignment – UI & API Testing

This project implements **UI and API automation** using **Playwright** with the **Page Object Model (POM)** design pattern.  

---

##  Covered Use Cases
1. **Message Box Task (UI Automation)**
   - Login → Navigate → Create Task Bot → Add Message Box  
   - Assertions: UI visibility, data entry, confirmation messages  

2. **Form with Upload Flow (UI Automation)**
   - Login → Create Form → Add Textbox + File Upload → Save  
   - Assertions: UI interactions, file upload success, confirmation  

3. **Learning Instance (API Automation)**
   - Login via API → Create instance → Validate response  
   - Checks: Status code, response fields (ID, name, status), correctness  

---

##  Features
- **Framework:** Playwright (Chromium only)  
- **Design:** Page Object Model (POM)  
- **Assertions:** UI + API validations  
- **Reports:** HTML & JSON test results  

---

##  Project Structure

pages/      → Page Objects
tests/      → Test cases
utils/      → API helpers
playwright.config.js → Config (Chromium + reports)


---

##  Run Tests
```bash
npm install
npx playwright install
npm test
```

View report:
```bash
npx playwright show-report
```

---

 This project demonstrates **end-to-end UI + API automation** with clear validations and reporting. 
