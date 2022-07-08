# API

- [Users](#users)
- [Employees](#employees)

---

## Users

- [Login](#login)
- [Get all users](#get-all-users)
- [Change password](#change-own-password)
- [Reset Password](#reset-password)
- [Grant Privileges](#grant-privileges)
- [Revoke Privileges](#revoke-privileges)

---

### Get all users

**Endpoint**: api/auth/  
**Method:** GET  
**Privilege required:** "getAllUsers"  
**Body:**

```
 {}
```

Response:

```json
{
    "users":[
        {
            "id:",
            "username":,
            "privileges": "priv1, priv2, ..."
        }
        ...
    ]
}
```

---

### Login

<sup>[back to top](#api)</sup>  
<sup>[back to users](#users)</sup>

**Endpoint:** api/auth/login  
**Method:** POST  
**Body:**

```json
 {
    "username": ,
    "password": ''
}
```

**Response:**

```json
{
    "authenticated": true / false
}
```

---

### Reset Password

<sup>[back to top](#api)</sup>  
<sup>[back to users](#users)</sup>

**Endpoint:** api/auth/resetPassword  
**Privilege required:** "resetPassword"  
**Method:** PUT  
**Body:**

```json
 {
    "userID": ,
    "newPassword": ''
}
```

**Response:**

```json
{
    "result": true / false
}
```

---

### Change own password

<sup>[back to top](#api)</sup>  
<sup>[back to users](#users)</sup>

**Endpoint:** api/auth/resetPassword
**Privilege required:** "changeOwnPassword"  
**Method:** PUT

**Body:**

```json
{
    "username": ,
    "newPassword": ''
    "currentPassword": ''
}
```

**Response:**

```json
{
    "result": true / false
}
```

---

### Grant Privileges

<sup>[back to top](#api)</sup>  
<sup>[back to users](#users)</sup>

**Endpoint:** api/auth/grantPrivileges  
**Privilege required:** "grantPrivileges"  
**Method:** POST  
**Body:**

```json
{
    "userID": ,
    "privileges":['', ...]
}
```

**Response:**

```json
{
    "result":{
        "granted": ["", ...], // privileges successfully granted
        "notGranted": ["", ...], // priviliges not granted
        "duplicates": ["",...], // privileges that the user already had
    }
}
```

---

### Revoke Privileges

<sup>[back to top](#api)</sup>
<sup>[back to users](#users)</sup>

**Endpoint:** api/auth/revokePrivileges
**Privilege required:** "revokePrivileges"  
**Method:** DELETE  
**Body:**

```json
{
    "userID": ,
    "privileges": ['', ...]
}
```

**Response:**

```json
{
    "result":{
        "revoked": ["", ...] // privileges successfully revoked
        "notRevoked": ["", ...] // privileges not revoked
    }
}
```

---

## Employees

- [Get all employees](#get-all-employees)
- [Get employee by ID](#get-employee)
- [Update an employee](#update-employee)
- [Create new employee](#new-employee)
- [Delete employee](#delete-employee)

---

### Get All Employees

<sup>[back to top](#api)</sup>
<sup>[back to employees](#employees)</sup>

**Endpoint:** api/employee/all
**Privilege required:** "getAllEmployees"  
**Method:** GET
**Body:**

```json
{}
```

**Response:**

```json
{
    "employees": [
        {
            "id": ,
            "forename": "",
            "middle_name": "",
            "surname": "",
            "email": "",
            "phone": "",
            "address_line_1": "",
            "address_line_2": "",
            "address_line_3": "",
            "address_city": "",
            "address_postcode": "",
            "holiday_allowance": ,
        }
        ...
    ]
}
```

---

### Get Employee

<sup>[back to top](#api)</sup>
<sup>[back to employees](#employees)</sup>

**Endpoint:** api/employee/get
**Privilege required:** "getEmployee"  
**Method:** GET
**Body:**

```json
{
    "id": ,
}
```

**Response:**

```json
{
    "employee":[
        {
            "forename": "",
            "middle_name": "",
            "surname": "",
            "email": "",
            "phone": "",
            "address_line_1": "",
            "address_line_2": "",
            "address_line_3": "",
            "address_city": "",
            "address_postcode": "",
            "holiday_allowance": ,
        }
    ]
}
```

---

### Update Employee

<sup>[back to top](#api)</sup>
<sup>[back to employees](#employees)</sup>

**Endpoint:** api/employee/update
**Privilege required:** "getAllEmployees"  
**Method:** PUT  
**Body:**

```json
{
    "id": , // The only required field

    // Include any of the below that you want to update
    "forename": "",
    "middle_name": "",
    "surname": "",
    "email": "",
    "phone": "",
    "address_line_1": "",
    "address_line_2": "",
    "address_line_3": "",
    "address_city": "",
    "address_postcode": "",
    "holiday_allowance": ,
}
```

**Response:**

```json
{
    "result": true / false
}
```

---

### New Employee

<sup>[back to top](#api)</sup>
<sup>[back to employees](#employees)</sup>

**Endpoint:** api/employee/new
**Privilege required:** "newEmployee"  
**Method:** POST  
**Body:**

```json
{
    "forename": "",
    "middle_name": "",
    "surname": "",
    "email": "",
    "phone": "",
    "address_line_1": "",
    "address_line_2": "",
    "address_line_3": "",
    "address_city": "",
    "address_postcode": "",
    "holiday_allowance":
}
```

**Response:**

```json
{
    "result": true / false
}
```

---

### Delete Employee

<sup>[back to top](#api)</sup>
<sup>[back to employees](#employees)</sup>

**Endpoint:** api/employee/delete
**Privilege required:** "deleteEmployee"  
**Method:** DELETE  
**Body:**

```json
{
    "employeeID":
}
```

**Response:**

```json
{
    "result": true / false
}
```

---
