# API

All response examples shown below presume a status of 200.

Response types: Strings are indicated by "", otherwise number.

- [Users](#users)
- [Employees](#employees)
- [Holiday Requests](#holiday-requests)
- [Sick Days](#sick-days)

---

## Users

- [Get all users](#get-all-users)
- [Login](#login)
- [Reset Password](#reset-password)
- [Change own password](#change-own-password)
- [Grant Privileges](#grant-privileges)
- [Revoke Privileges](#revoke-privileges)

---

### Get all users

<sup>[back to top](#api)</sup>  
<sup>[back to users](#users)</sup>

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

_Unsuccessful_

```json
{
  "authenticated": false
}
```

_Successful_
This token needs to be included in the header as a bearer token

```json
{
  "userToken": ""
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

<sup>[back to top](#api)</sup>

- [Get All Employees](#get-all-employees)
- [Get Employee](#get-employee)
- [Get Employee by User ID](#get-employee-by-user-id)
- [Update Employee](#update-employee)
- [Update Own Profile](#update-own-profile)
- [New Employee](#new-employee)

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

### Get Employee By User ID

<sup>[back to top](#api)</sup>  
<sup>[back to employees](#employees)</sup>

_Note: Requires auth token to be set_
**Endpoint:** api/employee/own  
**Privilege required:**  
**Method:** GET  
**Body:**

```json
{}
```

**Response:**

```json
{
    "employee":[ // Empty array if not successful
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

### Update Own Profile

<sup>[back to top](#api)</sup>  
<sup>[back to employees](#employees)</sup>

**Endpoint:** api/employee/own  
**Privilege required:**
**Method:** PUT  
**Body:**

```json
{
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

## Holiday Requests

<sup>[back to top](#api)</sup>

- [Get All Requests](#get-all-requests)
- [Get Request](#get-holiday-request)
- [Get Employee Requests](#get-employee-holiday-requests)
- [Get Own Requests](#get-own-holiday-requests)
- [Update Request](#update-holiday-request)
- [Update Own Request](#update-own-holiday-request)
- [New Request](#new-holiday-request)
- [Create Own Request](#create-own-holiday-request)
- [Delete Request](#delete-holiday-request)
- [Approve Request](#approve-holiday-request)
- [Reject Request](#reject-holiday-request)

### Get all Holiday Requests

**Endpoint**: api/holiday/all
**Method:** GET  
**Privilege required:** "geAllHolidayRequests"
**Body:**

```
 {}
```

Response:

```json
{
  "holidayRequests": [
    {
      "id": ,
      "name": "",
      "start_date": "",
      "end_date": "",
      "status": "PENDING | ACCEPTED | REJECTED",
      "days_used": ,
      "employee":
    }
    ...
  ]
}
```

---

### Get Holiday Request

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

**Endpoint**: api/holiday/get
**Method:** GET  
**Privilege required:** "getHolidayRequest"  
**Body:**

```
 {
    "requestID":
 }
```

Response:

```json
{
  "holidayRequest": [
    {
      "id": ,
      "name": "",
      "start_date": "",
      "end_date": "",
      "status": "PENDING | ACCEPTED | REJECTED",
      "days_used": ,
      "employee":
    }
  ]
}
```

---

### Get Employee Holiday Requests

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

**Endpoint**: api/holiday/get/employee  
**Method:** GET  
**Privilege required:** "getEmployeeHolidayRequests"  
**Body:**

```
 {
    "employeeID":
 }
```

Response:

```json
{
  "holidayRequests": [
    {
      "id": ,
      "name": "",
      "start_date": "",
      "end_date": "",
      "status": "PENDING | ACCEPTED | REJECTED",
      "days_used": ,
      "employee":
    },
    ...
  ]
}
```

---

### Get Own Holiday Requests

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

**Endpoint**: api/holiday/own
**Method:** GET  
**Privilege required:**
**Body:**

_Note: Requires authorization token to be set_

```
 {
 }
```

Response:

```json
{
  "holidayRequests": [
    {
      "id": ,
      "name": "",
      "start_date": "",
      "end_date": "",
      "status": "PENDING | ACCEPTED | REJECTED",
      "days_used": ,
      "employee":
    },
    ...
  ]
}
```

---

### Update Holiday Request

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

_Note: Status can only be updated via accept / reject request_

**Endpoint**: api/holiday/update  
**Method:** PUT  
**Privilege required:** "updateHolidayRequest"  
**Body:**

```json
{
    "id": , // The only required field

    // Include any of the below that you want to update
    "name": "",
    "start_date": "",
    "end_date": "",
    "days_used": "",
```

Response:

```json
{
    "result": true / false
}
```

---

---

### Update Own Holiday Request

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

_Note: Status can only be updated via accept / reject request_
_Note: Requires authorization header to be set_

**Endpoint**: api/holiday/update  
**Method:** PUT  
**Privilege required:**
**Body:**

```json
{
    "id": , // The only required field

    // Include any of the below that you want to update
    "name": "",
    "start_date": "",
    "end_date": "",
    "days_used": "",
```

Response:

```json
{
    "result": true / false
}
```

---

### New Holiday Request

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

_note: Status will be set to PENDING and the request will be linked to the employee making it_  
**Endpoint**: api/holiday/new  
**Method:** POST  
**Privilege required:** "newHolidayRequest"  
**Body:**

```json
 {
    "name": "",
    "start_date":"",
    "end_date":"",
    "days_used":
 }
```

Response:

```json
{
    "result":true/false
}
```

---

### Create Own Holiday Request

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>
_note: Status will be set to PENDING and the request will be linked to the employee making it_

**Endpoint**: api/holiday/own  
**Method:** POST  
**Privilege required:**
**Body:**

```json
 {
    "name": "",
    "start_date":"",
    "end_date":"",
    "days_used":
 }
```

Response:

```json
{
    "result":true/false
}
```

---

### Delete Holiday Request

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

**Endpoint**: api/holiday/delete  
**Method:** DELETE  
**Privilege required:** "deleteHolidayRequest"  
**Body:**

```json
 {
    "requestID":
 }
```

Response:

```json
{
    "result": true / false
}
```

---

### Approve Holiday Request

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

**Endpoint**: api/holiday/approve  
**Method:** PUT  
**Privilege required:** "approveHolidayRequest"  
**Body:**

```
 {
    "requestID":
 }
```

Response:

```json
{
    "result": true / false
}
```

---

### Reject Holiday Request

<sup>[back to top](#api)</sup>  
<sup>[back to holiday requests](#holiday-requests)</sup>

**Endpoint**: api/holiday/reject  
**Method:** PUT  
**Privilege required:** "rejectHolidayRequest"  
**Body:**

```
 {
    "requestID":
 }
```

Response:

```json
{
    "result": true / false
}
```

## Sick Days

<sup>[back to top](#api)</sup>

- [Get All Sick Days](#get-all-sick-days)
- [Get Sick Day](#get-Sick-Day)
- [Get Employee Sick Days](#get-employee-sick-days)
- [Update Sick Day](#update-sick-days)
- [New Sick Day](#new-sick-day)
- [Delete Sick Day](#delete-sick-day)

### Get all Sick Days

**Endpoint**: api/sickday/all  
**Method:** GET  
**Privilege required:** "getAllSickDays"  
**Body:**

```json
{}
```

Response:

```json
{
  "sickdays": [
    {
      "id": ,
      "start_date": "",
      "end_date": "",
      "days_used": ,
      "reason": "",
      "employee":
    }
  ]
}
```

---

### Get Sick Day

<sup>[back to top](#api)</sup>  
<sup>[back to sick days](#sick-days)</sup>

**Endpoint**: api/sickday/get  
**Method:** GET  
**Privilege required:** "getSickDay"  
**Body:**

```
 {
    "sickDayID":
 }
```

Response:

```json
{
  "sickDay": [
    {
      "id": ,
      "start_date": "",
      "end_date": "",
      "days_used": ,
      "reason": "",
      "employee":
    }
  ]
}
```

---

### Get Employee Sick Days

<sup>[back to top](#api)</sup>  
<sup>[back to sick days](#sick-days)</sup>

**Endpoint**: api/sickday/get/employee  
**Method:** GET  
**Privilege required:** "geEmployeeSickDays"  
**Body:**

```
 {
    "employeeID":
 }
```

Response:

```json
{
  "sickDays": [
    {
      "id": ,
      "start_date": "",
      "end_date": "",
      "days_used": ,
      "reason": "",
      "employee":
    }
  ]
}
```

---

### Update Sick Day

<sup>[back to top](#api)</sup>  
<sup>[back to sick days](#sick-days)</sup>

**Endpoint**: api/sickday/update  
**Method:** PUT  
**Privilege required:** "updateSickDay"  
**Body:**

```json
{
    "id": , // The only required field

    // Include any of the below that you want to update
    "start_date": "",
    "end_date": "",
    "reason": "",
    "days_used": "",
```

Response:

```json
{
    "result": true / false
}
```

---

### New Sick Day

<sup>[back to top](#api)</sup>  
<sup>[back to sick days](#sick-days)</sup>

**Endpoint**: api/holiday/new  
**Method:** POST  
**Privilege required:** "newSickDay"  
**Body:**

```json
 {
    "name": "",
    "start_date":"",
    "end_date":"",
    "days_used":
 }
```

Response:

```json
{
    "result":true/false
}
```

---

### Delete Sick Day

<sup>[back to top](#api)</sup>  
<sup>[back to sick days](#sick-days)</sup>

**Endpoint**: api/holiday/delete  
**Method:** DELETE  
**Privilege required:** "deleteSickDay"  
**Body:**

```json
 {
    "sickDayID":
 }
```

Response:

```json
{
    "result": true / false
}
```

---
