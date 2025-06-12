![image](https://github.com/user-attachments/assets/876b5fec-bc79-46f3-9b36-35271c25f113)

# 🎓 Student Management System (React)

This is a simple **CRUD application** built in **React.js** to manage student records.  
It uses `useState` hooks and arrays only — **no database** — and is styled with **Bootstrap 5**.

---

## 🚀 Features

- ✅ Create, Read, Update, and Delete student records
- ✅ Store:
  - Name
  - Age
  - Marks for 5 Subjects
  - Automatically calculate Percentage & Division
- ✅ Responsive UI using Bootstrap
- ✅ Alerts for Create, Edit, and Delete (no modals)
- ✅ Filter student list by **name** and **division**
- ✅ Pagination (5 students per page)

---

## 📂 Project Structure

```bash
/src
│
├── components/
│   ├── StudentForm.js     # Reusable form component
│   ├── CreatePage.js      # Page to create student
│   ├── EditPage.js        # Page to edit student
│   ├── DeletePage.js      # Handles deletion with confirmation alert
│   └── IndexPage.js       # Main list page (table with filters + pagination)
│
├── App.js                 # Routing setup
└── App.css                # Custom styling including responsive table


![image](https://github.com/user-attachments/assets/dcb5a746-d5d4-44de-a9bd-d4730ebe60f5)

![image](https://github.com/user-attachments/assets/0d17914e-9eff-4bdf-b4e6-13f102002151)

![image](https://github.com/user-attachments/assets/dd06591e-8a3e-4ff6-852b-4986fd80cd97)



