Test Strategy

Application

Employee Management System (React + Node.js + MySQL)

Top 5 Critical Flows

1. Employee Creation

Impact: HR/Admin cannot add employees, causing workforce records to be incomplete.

2. Employee Data Retrieval

Impact: Employee records cannot be viewed, making workforce management difficult.

3. Salary (CTC) Update

Impact: Incorrect salary information may lead to payroll errors.

4. Employee Deletion

Impact: Old employee records remain active, causing reporting issues.

5. Database Connectivity

Impact: Entire application becomes unusable if MySQL connection fails.

Automation vs Manual Testing

Automated

- Employee creation API
- Employee retrieval API
- Employee update API
- Employee delete API
- Database connection validation

Manual

- UI layout testing
- Form usability
- Responsive design verification

Not Testing

- Advanced performance testing
- Load testing
- Browser compatibility testing

Reason: Limited project scope and time constraints.